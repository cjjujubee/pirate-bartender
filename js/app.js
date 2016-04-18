var questions = [
    '1. Do ye like yer drinks strong?',
    '2. Do ye like it with a salty tang?',
    '3. Are ye a lubber who likes it bitter?',
    '4. Would ye like a bit of sweetness with yer poison?',
    '5. Are ye one for a fruity finish?',
]

var ingredients = {
    strong: ['Glug of rum', 'slug of whisky', 'splash of gin'],
    salty: ['Olive on a stick', 'salt-dusted rim', 'rasher of bacon'],
    bitter: ['Shake of bitters', 'splash of tonic', 'twist of lemon peel'],
    sweet: ['Sugar cube', 'spoonful of honey', 'splash of cola'],
    fruity: ['Slice of orange', 'dash of cassis', 'cherry on top']
}


var Drink = function(ingredients) {
    console.log(ingredients);
    this.strong = ingredients.strong;
    this.salty = ingredients.salty;
    this.bitter = ingredients.bitter;
    this.sweet = ingredients.sweet;
    this.fruity = ingredients.fruity;
};

var randomNumber = function() {
    var newNumber = Math.floor((Math.random() * 3) + 0);
    return newNumber

};

// $('.strongQuestion h3').text(questions.strong);
// $('.saltyQuestion h3').text(questions.salty);
// $('.bitterQuestion h3').text(questions.bitter);
// $('.sweetQuestion h3').text(questions.sweet);
// $('.fruityQuestion h3').text(questions.fruity);


$(document).ready(function(){

    //appends questions to HTML
    var bartendingQuestions = "";
    for (var i = 0; i < questions.length; i++) {
        bartendingQuestions += '<p>' + questions[i] + '<br> Ahoy! <input name=q' + i + '   value="true" type=radio> <br> Blegh!! <input name=q' + i + ' type=radio value="false"></p>';
    }
    
    $('#drinkQuestions').append("<div>" + bartendingQuestions + "</div>");
  
    $('#bartender').submit(function(event) {
    	event.preventDefault();
    
    	//captures user selection
    	var currentUserChoice = $('form').serializeArray();
    	console.log(currentUserChoice);

        var yerdrink = new Drink({
            strong: (currentUserChoice[0].value === "true") ? ingredients.strong[randomNumber()] : undefined,
            salty: (currentUserChoice[0].value === "true") ? ingredients.salty[randomNumber()] : undefined,
            bitter: (currentUserChoice[0].value === "true") ? ingredients.bitter[randomNumber()] : undefined,
            sweet: (currentUserChoice[0].value === "true") ? ingredients.sweet[randomNumber()] : undefined,
            fruity: (currentUserChoice[0].value === "true") ? ingredients.fruity[randomNumber()] : undefined,
        });
    });

});

