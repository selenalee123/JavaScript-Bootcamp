// With the call() method, you can write a method that can
//  be used on different objects.



const kimkim = {
    airline: 'Boeing',
    iataCode: 'BOEING',
    bookings: [],
    book(flightnumber, name) {
        console.log(`${name} booked a seat on ${this.airline}
            flight ${this.iataCode} ${flightnumber}`
        );
        this.bookings.push({ fligt: `${this.iataCode}${flightnumber}`, name });
    },
};

kimkim.book(239, 'Selena Lee');
kimkim.book(234, ' Johnathan Lee');
console.log(kimkim);

const lalaband = {
    airline: 'Air Canada',
    iataCode: 'AC',
    bookings: [],
};

const book = kimkim.book;

//Call method
book.call(lalaband, 23, 'Sarah');
console.log(lalaband);

book.call(kimkim, 25, 'Mary');
console.log(kimkim);

const swiss = {
    airline: 'Swiss',
    iataCode: 'SW',
    bookings: [],
};

//Apply method
const flightData = [583, 'Mary lan'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method
const bookEW = book.bind(kimkim);
const bookLH = book.bind(lalaband);
const bookLX = book.bind(swiss);

bookEW(23, " Steven");
const bookEW23 = book.bind(kimkim, 23);
bookEW23('Joanna');
bookEW23('Jessica');


//Partial application
const addTax = (rate,value) => value + value * rate;
console.log(addTax(0.1,200));
const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value *0.23;

console.log(addVAT(100));
console.log(addVAT(23));

//function method
const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT(100));
console.log(addVAT2(23));