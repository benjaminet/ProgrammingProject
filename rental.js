// Rental object constructor (class) (with attributes)
function Rental(country, city, type, title, price, guests, imageUrl, rooms, smoking, hasWifi, hasLaundry, hasTV, hasAircon) { 
    this.country = country;
    this.city = city;
    this.type = type;
    this.title = title;
    this.price = price;
    this.guests = guests;
    this.imageUrl = imageUrl;
    this.rooms = rooms;
    this.smoking = smoking;
    this.hasWifi = hasWifi;
    this.hasLaundry = hasLaundry;
    this.hasTV = hasTV;
    this.hasAircon = hasAircon;
}

//"this" is a keyword means that the object owns the code; The value of this, when used in an object, is the object itself.
//In a constructor function this does not have a value. It is a substitute for the new object. 
//The value of this will become the new object when a new object is created.
// https://www.w3schools.com/js/js_object_constructors.asp
