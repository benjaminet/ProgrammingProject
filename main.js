/*
To do:

Programming: 


Put dates in to the single rental, not as filter

fix the register page style


IMPLEMENT DATES TO SELECT ON SINGLE RENTAL 

RAPPORT

(BEING ABLE TO BOOK A RENTAL AND VIEW THE BOOKING. (LocalStorage))

*/

// function for generating overview html from hardcoded rentals
// using string literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function generateAndShowRentalHtmlOverview(rental) {
    $("#content").append(`
    <div class="col-lg-3 item" onclick="rentalClicked('${allRentals.indexOf(rental)}')">               <!--- List of all rentals, indexOf tells what rental you have clicked - The indexOf() method returns the first index at which a given element can be found in the array -. .when this div is clicked on, the function rentalClicked is executed with a parameter telling what you have clicked on --->
    <img src='${rental.imageUrl}' />
        <p class='location'>${rental.type} &bull; ${rental.city}, ${rental.country}</p>
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
    <div class="col-lg-5 item">
        <p class='location'>${rental.type} &bull; ${rental.city}, ${rental.country}</p>
        <p class='title'>${rental.title}</p>
        <p class='price'>${rental.price} GBP per night</p>
        <p class='guests'>${rental.guests} guests</p>
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
function rentalClicked(rentalIndex) {
    $("#content").html("");
    var rental = allRentals[rentalIndex];
    generateAndShowRentalHtmlDetailed(rental);
}

// executed when "book" button is pressed
function bookRental(rentalIndex) {
    var rental = allRentals[rentalIndex];
    if (bookings.indexOf(rental) > -1) {
        return;
    }

    var startDate = $("#startdate").val();
    var endDate = $("#enddate").val();
    var booking = new Booking(rental, startDate, endDate);
    bookings.push(booking);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    renderBookings();
}

// remove booking from local storage and from html list in top right corner
function removeBooking(bookingIndex) {
    var rental = bookings[bookingIndex];
    bookings.splice(bookingIndex, 1);
    localStorage.setItem("bookings", JSON.stringify(bookings));
    renderBookings();
}

// generates and shows HTML for bookings in top right corner
function renderBookings() {
    var bookingList = $("#booking-list");
    bookingList.html("");
    for (let booking of bookings) {
        bookingList.append(`<li  class="list-group-item d-flex justify-content-between align-items-center">
            ${booking.rental.title} (${booking.startDate} to ${booking.endDate})
            <span class="badge badge-primary badge-pill">$${booking.rental.price}</span>
            <span class="badge badge-danger badge-pill" style="cursor:pointer;" onclick="removeBooking('${bookings.indexOf(booking)}')">Remove</span>
            </li>`);
    }
}

// function for filtering rentals based on country, rental type, price & guests (and showing them afterwards)
function filterRentals(country, rentalType, price, guests) {

    // we create a variable to store the filtered items, based on all our rentals
    var filteredRentals = allRentals;

    // if the country parameter has been supplied, we filter on it
    if (country !== undefined && country != "Default") {
        filteredRentals = filteredRentals.filter(rental => rental.country === country);
    }

    // if the rental type parameter has been supplied, we filter on it
    if (rentalType !== undefined && rentalType != "Default") {
        filteredRentals = filteredRentals.filter(rental => rental.type === rentalType);
    }

    // if the price parameter has been supplied, we filter on it
    if (price !== undefined && price !== "") {
        filteredRentals = filteredRentals.filter(rental => rental.price <= price);
    }

    // if the guests parameter has been supplied, we filter on it
    if (guests !== undefined && guests !== "") {
        filteredRentals = filteredRentals.filter(rental => rental.guests >= guests);
    }

    // we clear the content of previous results
    $("#content").html("");

    // we render each rental as HTML
    for (var rental of filteredRentals) {
        generateAndShowRentalHtmlOverview(rental);
    }
}

// triggered when a filter is changed
function filterChanged() {

    // first we get the value from our filters
    var country = $("#destinationDdl").val(); // destinationDdl is the ID of the dropdown element in the HTML
    var rentalType = $("#rentalTypesDdl").val(); // rentalTypeDdl is the ID of the dropdown element in the HTML
    var price = $("#max-price-input").val(); // max-price-input is the ID of the dropdown element in the HTML
    var guests = $("#no_of_guests").val(); // no_of_guests is the ID of the dropdown element in the HTML

    // we iniate the filtering, based on the selected destination
    filterRentals(country, rentalType, price, guests);
}

// document load function is executed when the HTML document has loaded in the browser
$(document).ready(function () {

    // loop through all rentals and show them
    for (var rental of allRentals) {

        // call function for generating html and showing it for rental
        generateAndShowRentalHtmlOverview(rental);
    }
});
