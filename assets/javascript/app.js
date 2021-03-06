// Define global variables
var panel = $("#question-panel");

// Question & answer array
var questions = [{
	question: "What replaced the Orlando Naval Training Center after it was decommissioned in 1993?",
	answers: ["Dairy Queen", "Baldwin Park", "Navy Museum", "Sinkhole"],
	correctAnswer: "Baldwin Park"

}, {	

	question: "What is the county seat of Seminole County?",
	answers: ["Sanford", "Orlando", "Kissimmee", "Oviedo"],
	correctAnswer: "Sanford"

}, {

	question: "Which U.S. astronaut grew up in Orlando and flew on the first Space Shuttle mission?",
	answers: ["Neil Young", "John Glenn", "Alan Shepard", "John Young"],
	correctAnswer: "John Young"

}, {

	question: "Which name was NOT considered for the Orlando Magic?",
	answers: ["Heat", "Tropics", "Sunshine", "Juice"],
	correctAnswer: "Sunshine"

}, {

	question: "What is the longest river in Central Florida (as well as the entire state)?",
	answers: ["Wekiva", "St. Johns", "Econlockhatchee", "Smith"],
	correctAnswer: "St. Johns"

}];

// Event handlers
$(document).on("click", "#begin", function(event){
  game.begin();
});

$(document).on("click", "#end", function(event){
  game.end();
});

// Game object and timer logic
var game = {
	correct: 0,
	incorrect: 0,
	timer: 60,

  countdown: function() {
  	game.timer--;
  	$("#gameTimer").html(game.timer);

  	if (game.timer === 0) {
  		alert("Time's up! Let's see how you did...");
  		game.end();
  	}
  },

  begin: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#question-panel').prepend('<hr><h3><strong>Time remaining: <span id="gameTimer">60</span> sec</strong></h3><hr>');
  	$("#begin").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h4>' + questions[i].question + '</h4>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
        }}
  		panel.append("<br><button class='btn-warning btn-lg' id='end'>SUBMIT</button>");
    },

  	end: function() {

        // Check each question's answer and update score accordingly  
        $.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},

      // Display results on screen
  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#question-panel h4").remove();
  	   panel.html("<hr><h3><strong>YOUR RESULTS</strong></h3>");
  	   panel.append("<h3>Correct answers: " + this.correct + "</h3>");
  	   panel.append("<h3>Incorrect answers: " + this.incorrect + "</h3>");
  	   panel.append("<h3>Not answered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }
};
