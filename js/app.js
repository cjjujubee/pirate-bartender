var questions = {
    strong: 'Do ye like yer drinks strong?',
    salty: 'Do ye like it with a salty tang?',
    bitter: 'Are ye a lubber who likes it bitter?',
    sweet: 'Would ye like a bit of sweetness with yer poison?',
    fruity: 'Are ye one for a fruity finish?',
}

var answers = {
    options: ['Ahoy!', 'Bleh!'],
}



var ingredients = {
    strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
    salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
    sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
}


var Drink = function(ingredients) {
    this.strong = ingredients.strong;
    this.salty = ingredients.salty;
    this.bitter = ingredients.bitter;
    this.sweet = ingredients.sweet;
    this.fruity = ingredients.fruity;
};

var randomNumber = function(){
    var newNumber = Math.floor((Math.random() * 3) + 0);
    return newNumber

}; 

var yerdrink = new Drink({strong: ingredients.strong[randomNumber()], 
                        salty: ingredients.salty[randomNumber()], 
                        bitter: ingredients.bitter[randomNumber()], 
                        sweet: ingredients.sweet[randomNumber()], 
                        fruity: ingredients.fruity[randomNumber()]
                        });




// console.log(ingredients.strong[randomNumber()])
// console.log(ingredients.salty[randomNumber()])

// console.log(ingredients.bitter[randomNumber()])

// console.log(ingredients.sweet[randomNumber()])

// console.log(ingredients.fruity[randomNumber()])





// var Person = function(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.place = options.place;
// };

// // Note the new
// var taylor = new Person({name: 'Taylor', age: 22, place: 'Houston'});


// var Person = {
//     name: 'John Doe',
//     age: 22,
//     init: function(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// };


// var taylor = Object.create(Person);
// taylor.init('Taylor', 22);

// var Person = function(name, age) {
//     this.name = name;
//     this.age = age;
// };strong



// // Note the new
// var taylor = new Person('Taylor', 22);

// $(function() {

// });ingre
// /