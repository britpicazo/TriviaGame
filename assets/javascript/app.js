$(document).ready(function(){
	var question;
	var answer1;
	var answer2;
	var answer3;
	var answer4;
	var correctAnswer;
	var correct;
	var wrong;
	var unanswered;
	var sec = 19;
	var queuePos = 0;

	var questions = [
		q1 = {
			q: "How many brothers does Ron Weasley have?",
			a1: "3",
			a2: "4",
			a3: "5",
			a4: "6",
			correctAnswer: 3
		},
		q2 = {
			q: "Which is not one of the houses at Hogwarts School of Witchcraft and Wizardry?",
			a1: "Gryffindor",
			a2: "Ravenclaw",
			a3: "Snufflepuff",
			a4: "Slytherin",
			correctAnswer: 3
		},
		q3 = {
			q: "What is the symbol for Hufflepuff house?",
			a1: "Badger",
			a2: "Eagle",
			a3: "Lion",
			a4: "Snake",
			correctAnswer: 1
		},
		q4 = {
			q: "What is the name of Dumbledore's phoenix?",
			a1: "Hermes",
			a2: "Fluffy",
			a3: "Firenze",
			a4: "Fawkes",
			correctAnswer: 4
		},
		q5 = {
			q: "Who destroyed the last remaining horcrux?",
			a1: "Hermione Granger",
			a2: "Neville Longbottom",
			a3: "Harry Potter",
			a4: "Ginny Weasley",
			correctAnswer: 2
		},
		q6 = {
			q: "What is the location of the Order of the Phoenix?",
			a1: "Number Four, Privet Drive",
			a2: "Spinner's End",
			a3: "Shell Cottage",
			a4: "Number Twelve, Grimauld Place",
			correctAnswer: 4
		},
		q7 = {
			q: "Dumbledore single-handedly defeated and imprisoned which Dark wizard before Voldemort goes on to kill him?",
			a1: "Lucius Malfoy",
			a2: "Igor Karkaroff",
			a3: "Gellert Grindewald",
			a4: "Amycus Carrow",
			correctAnswer: 3
		},
		q8 = {
			q: "What is Lord Voldemort’s real name?",
			a1: "Tom Marvolo Riddle",
			a2: "Salazar Slytherin",
			a3: "Gellert Grindewald",
			a4: "Morfin Gaunt",
			correctAnswer: 1
		},
		q9 = {
			q: "Which of Ron’s brothers is a Gryffindor Prefect in Harry’s first year?",
			a1: "George",
			a2: "Percy",
			a3: "Bill",
			a4: "Fred",
			correctAnswer: 2
		}
	];

	function displayQ(){
		$("#question").html(questions[queuePos].q);
		$("#answer1").html("<button>" + questions[queuePos].a1 + "</button>");
		$("#answer2").html("<button>" + questions[queuePos].a2 + "</button>");
		$("#answer3").html("<button>" + questions[queuePos].a3 + "</button>");
		$("#answer4").html("<button>" + questions[queuePos].a4 + "</button>");
	}

	function displayAnswer(){
		if(sec === -1 ){
			var correctAnswer = questions[queuePos].correctAnswer;
			$("#question").html("You ran out of time!");
			$("#answer1").html("The correct answer is: ");
			$("#answer2").html(questions[queuePos].a[correctAnswer]);
		}
			gameTimer();
			displayQ();
	}

	function displayResults(){
		$("#question").html("Correct Answers: " + correct);
		$("#answer1").html("Incorrect Answers: " + incorrect);
		$("#answer2").html("Unanswered: " + unanswered);
	}
	
	function gameTimer(){
		$("#time-left").html("<h2>Time remaining: 20</h2>");
		var x = setInterval(function(){ 
			$("#time-left").html("<h2>Time remaining: " + sec + "</h2>");
			sec--;
			if(sec === -1 && queuePos === questions.length){
				clearInterval(x);
				displayResults();
				sec = 19;
			}
			else if(sec === -1){
				queuePos++;
				clearInterval(x);
				displayAnswer(sec);
				sec = 19;
			}
			
		}, 1000);
		
	}

	$("#start").on("click", function(){
		gameTimer();
		displayQ();
	});

});