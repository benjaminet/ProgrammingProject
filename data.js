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
var france1 = new Rental(countries.France, "Carlux", rentalTypes.Castle, "Chateau De Ruffiac", 715, 12, "https://www.oliverstravels.com/uploads/herder_image/crop_9999_1000_Chateau-de-Ruffiac-Dordogne-Fr-Olivers-Travels-1.jpg", 6, "Allowed", "Yes", "No", "Yes", "No");
var france2 = new Rental(countries.France, "Carlux", rentalTypes.Castle, "Domaine Du Pont", 5500, 20, "https://www.oliverstravels.com/uploads/herder_image/crop_720_440_La-Maison-des-Fleurs-Atlantic-Coast-Olivers-Travels-1.jpg", 11, "Not allowed", "Yes", "Yes", "No", "Yes");
var france3 = new Rental(countries.France, "Atlantic Coast", rentalTypes.Villa, "La Maison Des Fleurs ", 1300, 8, "https://www.oliverstravels.com/uploads/herder_image/crop_720_440_Chateau-Du-Chevalier-Only-Brittany-Olivers-Travels__1_.jpg", 3, "Allowed", "Yes", "No", "Yes", "Yes");

// Australia
var australia1 = new Rental(countries.Australia, "Sydney", rentalTypes.Apartment, "Absolute Waterfront", 650, 6, "https://pictures.luxuryretreats.com/122208/Sydney_AbsoluteWaterfront-1.jpg", 3, "Allowed", "Yes", "Yes", "Yes", "Yes");
var australia2 = new Rental(countries.Australia, "Sydney", rentalTypes.Villa, "Vaucluse Luxury", 750, 10, "https://pictures.luxuryretreats.com/121296/Sydney_VaucluseHopetoun_01.jpg", 4, "Not allowed", "Yes", "No", "Yes", "Yes");
var australia3 = new Rental(countries.Australia, "Melbourne", rentalTypes.Villa, "Bronte Sands", 425, 6, "https://pictures.luxuryretreats.com/121850/Sydney_BronteSands-1.jpg", 3, "Not allowed", "Yes", "No", "Yes", "Yes");

// Dubai
var dubai1 = new Rental(countries.Dubai, "Downtown", rentalTypes.Apartment, "Unique Luxury Apartment Downtown", 860, 7, "https://pictures.luxuryretreats.com/120330/Dubai_UniqueLuxuryApartmentDowntown_01.jpg", 3, "Not allowed", "Yes", "Yes", "Yes", "Yes");
var dubai2 = new Rental(countries.Dubai, "Downtown", rentalTypes.Villa, "Jumeirah Villa", 1000, 10, "https://pictures.luxuryretreats.com/119472/Dubai_Private4BedVilla_01.jpg", 4, "Allowed", "Yes", "Yes", "No", "Yes");
var dubai3 = new Rental(countries.Dubai, "The Palm Jumeirah", rentalTypes.Villa, "Signature Villa", 920, 11, "https://pictures.luxuryretreats.com/121444/Dubai_SignatureVilla_50.jpg", 6, "Allowed", "Yes", "Yes", "Yes", "Yes");

// Netherlands
var netherlands1 = new Rental(countries.Netherlands, "Amsterdamn", rentalTypes.Houseboat, "Experience a houseboat in Amsterdam", 370, 5, "https://a0.muscache.com/im/pictures/95957379/b725845f_original.jpg?aki_policy=xx_large", 2, "Allowed", "Yes", "No", "No", "No");
var netherlands2 = new Rental(countries.Netherlands, "Amsterdam", rentalTypes.Apartment, "Lovely hideout in the middle of AMS", 450, 6, "https://a0.muscache.com/im/pictures/8cbb08e8-257c-45c9-895f-0607a126fe19.jpg?aki_policy=xx_large", 3, "Allowed", "Yes", "No", "Yes", "Yes");
var netherlands3 = new Rental(countries.Netherlands, "Lijnden", rentalTypes.Villa, "Private Luxurious house gardenview", 550, 8, "https://a0.muscache.com/im/pictures/3d6b10f7-f07b-4d07-88a2-ec748b26c894.jpg?aki_policy=xx_large", 4, "Allowed", "Yes", "Yes", "Yes", "Yes");

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

var bookings = loadStoredBookings();
renderBookings();
function loadStoredBookings(){
    var storedBookings = localStorage.getItem("bookings");
    if(!storedBookings){
        return [];
    }

    return JSON.parse(storedBookings);
}