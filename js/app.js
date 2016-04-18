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


var Drink = function(strong, salty, bitter, sweet, fruity) {
    this.flavor = strong;
    this.flavor2 = salty;
    
};

// Note the new
var taylor = new Drink('Taylor', 22);
