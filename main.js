/*
To do:

Programming: 





RAPPORT

(BEING ABLE TO BOOK A RENTAL AND VIEW THE BOOKING. (LocalStorage))

*/

// function for generating overview html from hardcoded rentals
// using string literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function generateAndShowRentalHtmlOverview(rental) {                        // function for the view of all rentals
    $("#content").append(`                                                                  <!--- The append() method inserts specified content at the end of the selected elements. --->
    <div class="col-lg-3 item" onclick="rentalClicked('${allRentals.indexOf(rental)}')">               <!--- List of all rentals, indexOf tells what rental you have clicked - The indexOf() method returns the first index at which a given element can be found in the array -. .when this div is clicked on, the function rentalClicked is executed with a parameter telling what you have clicked on --->
    <img src='${rental.imageUrl}' />
        <p class='location'>${rental.type} &bull; ${rental.city}, ${rental.country}</p>             <!--- Showing the attributes of the rental --->
        <p class='title'>${rental.title}</p>
        <p class='price'>${rental.price} GBP per night</p>
        <p class='guests'>${rental.guests} guests</p>
    </div>
    `)
}

// function for generating detailed html from hardcoded rentals
// using string literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function generateAndShowRentalHtmlDetailed(rental) {
    $("#content").append(`                                    <!--- #content = ID selector in jquery https://api.jquery.com/id-selector/ --->
    <div class="col-lg-12">
        <button type="button" class="btn btn-info" onclick="filterRentals()">Back</button>
    </div> 
    <div class="col-lg-6 item">
    <img src='${rental.imageUrl}' />
    </div>                                            
    <div class="col-lg-5 item">                                                             <!--- all the attributes is shown here --->
        <p class='location'>${rental.type} &bull; ${rental.city}, ${rental.country}</p>
        <p class='title'>${rental.title}</p>
        <p class='price'>${rental.price} GBP per night</p>
        <p class='guests'>${rental.guests} guests</p>
        <p class='rooms'>${rental.rooms} rooms</p>
        <p class='smoking'>Smoking? ${rental.smoking}</p>
        <p class='wifi'>Wifi? ${rental.hasWifi}</p>
        <p class='laundry'>Laundry? ${rental.hasLaundry}</p>
        <p class='tv'>TV? ${rental.hasTV}</p>
        <p class='aircon'>Aircondition? ${rental.hasAircon}</p>
        <p>Start Date</p><input style="width: 30%;" type="date" class="form-control" id="startdate" placeholder="Start Date">
        <p>End Date</p><input style="width: 30%;" type="date" class="form-control" id="enddate" placeholder="End Date">
    </div>
    
    <div>
        <button type="button" class="btn btn-success" onclick="bookRental('${allRentals.indexOf(rental)}')">Book</button>   
    </div>
    `)
}

// when a rental is clicked on the frontpage, this function generates and shows the single rental view
function rentalClicked(rentalIndex) {           // rentalIndex = the address of the rental in the Array
    $("#content").html("");         // clears the existing page with all the rentals shown to make room for the single rental view           
    var rental = allRentals[rentalIndex];       // creating a variable pointing to the clicked rental (the address) object in the array allRentals
    generateAndShowRentalHtmlDetailed(rental);      // calls the function for showing the single rental as html with the clicked rental
}


// executed when "book" button is pressed --> puts the chosen rental into the html 
function bookRental(rentalIndex) {                          // rentalIndex = the address of the rental in the Arra
    var clickedRental = allRentals[rentalIndex];                    // creating a variable pointing to the clicked rental (the address) object in the array allRentals
    var startDate = $("#startdate").val();                      // creating a variable from the startdate value in html
    var endDate = $("#enddate").val();                          // creating a variable from the enddate value in html
    var newBooking = new Booking(clickedRental, startDate, endDate);    // creates a new booking object with the given parameters 

   // looping through all existing bookings - stops code execution if a matching booking already exists 
    for(let booking of bookings){                           // for each existing booking
        if(booking.rental === clickedRental){               // if the booking's rental is equal to the clicked rental, nothing more will happen (returns nothing)
            return;
        }
    }
    
     

    // the local list of bookings - chosen booking is added to the Array of bookings
    bookings.push(newBooking);

    // this saves all the bookings in localStorage, JSON converts it to a string in a JSON format. (The data is converted to readable text) 
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // calls below function 
    renderBookings();
}


// remove booking from local storage and from html list in top right corner
function removeBooking(bookingIndex) {
    var rental = bookings[bookingIndex];                        // is not used in the code
    bookings.splice(bookingIndex, 1);                           // removes booking on the given address in the Array (bookingIndex). "1" tells oonly to remove one item. 
    localStorage.setItem("bookings", JSON.stringify(bookings)); // updates the new data after a booking has been removed (saves the bookings in localStorage, converts to readable text (string))
    renderBookings();                                           // and then shows the updated booking view
}

// generates and shows HTML for bookings in top right corner
function renderBookings() {
    var bookingList = $("#booking-list");                          // pointer to the booking view (the top right corner) in the html
    bookingList.html("");                                           // clears the view of the bookings in preperation of the updated list (after a new booking is added or removed)
    for (let booking of bookings) {                     // for every booking, it gets appended (tilføjet) in the booking list
        bookingList.append(`<li  class="list-group-item d-flex justify-content-between align-items-center">
            ${booking.rental.title} (${booking.startDate} to ${booking.endDate})                    <!--- HTML template for booking info --->
            <span class="badge badge-primary badge-pill">$${booking.rental.price}</span>
            <span class="badge badge-danger badge-pill" style="cursor:pointer;" onclick="removeBooking('${bookings.indexOf(booking)}')">Remove</span>
            </li>`);
    }
}

// function for filtering rentals based on country, rental type, price & guests (and showing them afterwards)
function filterRentals(country, rentalType, price, guests) {

    // we create a variable based on the existing Array of rentals to store the filtered items.
    var filteredRentals = allRentals;

    // if the country parameter has been supplied, we filter on it
    if (country !== undefined && country != "Default") {                    // if country has been chosen
        filteredRentals = filteredRentals.filter(rental => rental.country === country);    // filters the rentals based on the country it belongs to (attribute given) 
    }                   //  ^^for each rental it returns those with a matching country          

    // if the rental type parameter has been supplied, we filter on it
    if (rentalType !== undefined && rentalType != "Default") {
        filteredRentals = filteredRentals.filter(rental => rental.type === rentalType); 	    // same as country filter
    }

    // if the price parameter has been supplied, we filter on it
    if (price !== undefined && price !== "") {                                      
        filteredRentals = filteredRentals.filter(rental => rental.price <= price);          // same as country filter (if price is equals or less than chosen price)
    }

    // if the guests parameter has been supplied, we filter on it
    if (guests !== undefined && guests !== "") {                                        
        filteredRentals = filteredRentals.filter(rental => rental.guests >= guests);            // same as country filter (if no of guest is equals or more than chosen number)
    }

    // clears the overview of all rentals to show the filtered result of rentals
    $("#content").html("");

    // shows the view of all rentals based on the filtering
    for (var rental of filteredRentals) {
        generateAndShowRentalHtmlOverview(rental);
    }
}

// triggered when a filter is changed --> THIS ONE IS CALLED BEFORE THE ABOVE FILTER FUNCTION. 
function filterChanged() {

    // first we get the value from our filters, which is used for filtering
    var country = $("#destinationDdl").val(); // destinationDdl is the ID of the dropdown element in the HTML
    var rentalType = $("#rentalTypesDdl").val(); // rentalTypeDdl is the ID of the dropdown element in the HTML
    var price = $("#max-price-input").val(); // max-price-input is the ID of the dropdown element in the HTML
    var guests = $("#no_of_guests").val(); // no_of_guests is the ID of the dropdown element in the HTML

    // we iniate the filtering based on the above variables
    filterRentals(country, rentalType, price, guests);
}

// document load function is executed when the HTML document has loaded in the browser --> shows all rentals without filter
$(document).ready(function () {
    
    // loop through all rentals and show them
    for (var rental of allRentals) {

        // call function for generating html and showing it
        generateAndShowRentalHtmlOverview(rental);
    }
});
