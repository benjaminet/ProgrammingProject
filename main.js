/*
To do:

Finish the 3rd assignment --> 
1. make sure the description is right compared to what we have coded so far and what we expect
2. make sure the UML is correct 

Programming: 

1. implement filters 

2. understand what simon showed regarding getting detailed view of a single renatl

- PUT ALL ATTRIBUTES FROM UML IN TO RENTAL CLASS

3. Put dates in to the singel rental, not as filter

4 fix the register page
. 



Er UML korrekt?
Skal man kunne se sin booking ift UML? 

Hvordan linker man videre til en valgt rental?

*/




// Rental class (with attributes)
function Rental(country, city, type, title, price, guests, imageUrl, rooms, smokingIsAllowed, smokingIsNotAllowed, hasWifi){ //put all attributes from UML classdiagram in here
    this.country = country;
    this.city = city;
    this.type = type;
    this.title = title;
    this.price = price;
    this.guests = guests;
    this.imageUrl = imageUrl;
    this.rooms = rooms;
    this.smokingIsAllowed = "Yes";
    this.smokingIsNotAllowed = "No";
    this.hasWifi = "Yes";
}

// object containing all possible countries
var countries = {
    France: "France",
    Australia: "Australia",
    Dubai: "Dubai",
    Netherlands: "Netherlands"
}

// object containing all possible rental types
var rentalTypes = {
    Castle: "Castle",
    Houseboat: "Houseboat",
    Apartment: "Apartment",
    Villa: "Villa",
}

// Harcoded data (rentals):
// france
var france1 = new Rental(countries.France, "Carlux", rentalTypes.Castle, "Chateau De Ruffiac", 715, 12, "https://www.oliverstravels.com/uploads/herder_image/crop_9999_1000_Chateau-de-Ruffiac-Dordogne-Fr-Olivers-Travels-1.jpg");
var france2 = new Rental(countries.France, "Carlux", rentalTypes.Castle, "Domaine Du Pont", 5500, 20, "https://www.oliverstravels.com/uploads/herder_image/crop_720_440_La-Maison-des-Fleurs-Atlantic-Coast-Olivers-Travels-1.jpg");
var france3 = new Rental(countries.France, "Atlantic Coast", rentalTypes.Villa, "La Maison Des Fleurs ", 1300, 8, "https://www.oliverstravels.com/uploads/herder_image/crop_720_440_Chateau-Du-Chevalier-Only-Brittany-Olivers-Travels__1_.jpg");

// Australia
var australia1 = new Rental(countries.Australia, "Sydney", rentalTypes.Apartment, "Absolute Waterfront", 650, 6, "https://pictures.luxuryretreats.com/122208/Sydney_AbsoluteWaterfront-1.jpg");
var australia2 = new Rental(countries.Australia, "Sydney", rentalTypes.Villa, "Vaucluse Luxury", 750, 10, "https://pictures.luxuryretreats.com/121296/Sydney_VaucluseHopetoun_01.jpg");
var australia3 = new Rental(countries.Australia, "Melbourne", rentalTypes.Villa, "Bronte Sands", 425, 6, "https://pictures.luxuryretreats.com/121850/Sydney_BronteSands-1.jpg");

// Dubai
var dubai1 = new Rental(countries.Dubai, "Downtown", rentalTypes.Apartment, "Unique Luxury Apartment Downtown", 860, 7, "https://pictures.luxuryretreats.com/120330/Dubai_UniqueLuxuryApartmentDowntown_01.jpg");
var dubai2 = new Rental(countries.Dubai, "Downtown", rentalTypes.Villa, "Jumeirah Villa", 1000, 10, "https://pictures.luxuryretreats.com/119472/Dubai_Private4BedVilla_01.jpg");
var dubai3 = new Rental(countries.Dubai, "The Palm Jumeirah", rentalTypes.Villa, "Signature Villa", 920, 11, "https://pictures.luxuryretreats.com/121444/Dubai_SignatureVilla_50.jpg");

// Netherlands
var netherlands1 = new Rental(countries.Netherlands, "Amsterdamn", rentalTypes.Houseboat, "Experience a houseboat in Amsterdam", 370, 5, "https://a0.muscache.com/im/pictures/95957379/b725845f_original.jpg?aki_policy=xx_large");
var netherlands2 = new Rental(countries.Netherlands, "Amsterdam", rentalTypes.Apartment, "Lovely hideout in the middle of AMS", 450, 6, "https://a0.muscache.com/im/pictures/8cbb08e8-257c-45c9-895f-0607a126fe19.jpg?aki_policy=xx_large");
var netherlands3 = new Rental(countries.Netherlands, "Lijnden", rentalTypes.Villa, "Private Luxurious house gardenview", 550, 8, "https://a0.muscache.com/im/pictures/3d6b10f7-f07b-4d07-88a2-ec748b26c894.jpg?aki_policy=xx_large");

// allRentals is a list of all rentals in the system (created above)
var allRentals = [];

//var listOfNumbers = [12, 15, 23, 99, 15 ];

allRentals.push(france1);
allRentals.push(france2);
allRentals.push(france3);

allRentals.push(australia1);
allRentals.push(australia2);
allRentals.push(australia3);

allRentals.push(dubai1);
allRentals.push(dubai2);
allRentals.push(dubai3);

allRentals.push(netherlands1);
allRentals.push(netherlands2);
allRentals.push(netherlands3);

// function for generating overview html from hardcoded rentals
// using string literals https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
function generateAndShowRentalHtmlOverview(rental) {
    $("#content").append(`
    <div class="col-lg-3 item" onclick="rentalClicked('${allRentals.indexOf(rental)}')">               <!--- List of all rentals, indexOf tells what rental you have clicked. .when this div is clicked on, the function rentalClicked is executed with a parameter telling what you have clicked on --->
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
    $("#content").append(`                          <!--- #content = ID selector in jquery https://api.jquery.com/id-selector/ --->
    <div class="col-lg-12">
        <button type="button" class="btn btn-info" onclick="filterRentals()">Back</button>
    </div> 
    <div class="col-lg-6 item">
    <img src='${rental.imageUrl}' />
    </div>                                            
    <div class="col-lg-6 item">
        <p class='location'>${rental.type} &bull; ${rental.city}, ${rental.country}</p>
        <p class='title'>${rental.title}</p>
        <p class='price'>${rental.price} GBP per night</p>
        <p class='guests'>${rental.guests} guests</p>
        <p class='guests'>Smoking? ${rental.smokingIsAllowed}</p>
        <p class='guests'>Wifi? ${rental.hasWifi}</p>
    </div>
    `)
}

function rentalClicked(rentalIndex){
    $("#content").html("");
    var rental = allRentals[rentalIndex];
    generateAndShowRentalHtmlDetailed(rental);
}

// function for filtering rentals based on country, rental type, price & guests (and showing them afterwards)
function filterRentals(country, rentalType, price, guests){ 
    
    // we create a variable to store the filtered items, based on all our rentals
    var filteredRentals = allRentals;

    // if the country parameter has been supplied, we filter on it
    if(country !== undefined && country != "Default"){
        filteredRentals = filteredRentals.filter(rental => rental.country === country);
    }

    // if the rental type parameter has been supplied, we filter on it
    if(rentalType !== undefined && rentalType != "Default"){
        filteredRentals = filteredRentals.filter(rental => rental.type === rentalType);
    } 

    // if the price parameter has been supplied, we filter on it
    if(price !== undefined && price !== ""){
        filteredRentals = filteredRentals.filter(rental => rental.price <= price);
    }

    // if the guests parameter has been supplied, we filter on it
    if(guests !== undefined && guests !== ""){
        filteredRentals = filteredRentals.filter(rental => rental.guests >= guests);
    }

    // we clear the content of previous results
    $("#content").html("");

    // we render each rental as HTML
    for(var rental of filteredRentals){
        generateAndShowRentalHtmlOverview(rental);
    }
}

// triggered when a filter is changed
function filterChanged(){

    // first we get the value from our filters
    var country = $("#destinationDdl").val(); // destinationDdl is the ID of the dropdown element in the HTML
    var rentalType = $("#rentalTypesDdl").val(); // rentalTypeDdl is the ID of the dropdown element in the HTML
    var price = $("#max-price-input").val(); // max-price-input is the ID of the dropdown element in the HTML
    var guests = $("#no_of_guests").val(); // no_of_guests is the ID of the dropdown element in the HTML
    
    // we iniate the filtering, based on the selected destination
    filterRentals(country, rentalType, price, guests);
}

// document load function is executed when the HTML document has loaded in the browser
$(document).ready(function(){

    // loop through all rentals and show them
    for(var rental of allRentals){

        // call function for generating html and showing it for rental
        generateAndShowRentalHtmlOverview(rental);
    }
});
