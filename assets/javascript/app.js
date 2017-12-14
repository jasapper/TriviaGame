// Define global variables
var panel = $("#question-panel");

// Question & answer array
var questions = [{
	question: "",
	answers: [""],
	correctAnswer: ""

}, {	

	question: "",
	answers: [""],
	correctAnswer: ""

}, {

	question: "",
	answers: [""],
	correctAnswer: ""

}, {

	question: "",
	answers: [""],
	correctAnswer: ""

}, {

	question: "",
	answers: [""],
	correctAnswer: ""

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
	timer: 30,

  countdown: function() {
  	game.timer--;
  	$("#gameTimer").html(game.timer);

  	if (game.timer === 0) {
  		alert("Time's up! Let's see how you did.");
  		game.end();

  	}
  },

  begin: function() {
  	timer = setInterval(game.countdown, 1000);
  	$('#question-panel').prepend('<h2>Time remaining: <span id="gameTimer">60</span> seconds</h2>');
  	$("#begin").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
        }
  		}
  		panel.append("<button id='end'>SUBMIT</button>");
      
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

  	  	$("#question-panel h2").remove();
  	   panel.html("<h2>YOUR RESULTS</h2>");
  	   panel.append("<h3>Correct answers: " + this.correct + "</h3>");
  	   panel.append("<h3>Incorrect answers: " + this.incorrect + "</h3>");
  	   panel.append("<h3>Not answered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }
};