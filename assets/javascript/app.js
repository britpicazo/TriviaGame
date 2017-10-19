$(document).ready(function () {
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var sec = 19;
	var queuePos = 0;
	var x;

	var questions = [
		q1 = {
			q: "How many brothers does Ron Weasley have?",
			a1: "3",
			a2: "4",
			a3: "5",
			a4: "6",
			correctAnswer: "5"
		},
		q2 = {
			q: "Which is not one of the houses at Hogwarts School of Witchcraft and Wizardry?",
			a1: "Gryffindor",
			a2: "Ravenclaw",
			a3: "Snufflepuff",
			a4: "Slytherin",
			correctAnswer: "Snufflepuff"
		},
		q3 = {
			q: "What is the symbol for Hufflepuff house?",
			a1: "Badger",
			a2: "Eagle",
			a3: "Lion",
			a4: "Snake",
			correctAnswer: "Badger"
		},
		q4 = {
			q: "What is the name of Dumbledore's phoenix?",
			a1: "Hermes",
			a2: "Fluffy",
			a3: "Firenze",
			a4: "Fawkes",
			correctAnswer: "Fawkes"
		},
		q5 = {
			q: "Who destroyed the last remaining horcrux?",
			a1: "Hermione Granger",
			a2: "Neville Longbottom",
			a3: "Harry Potter",
			a4: "Ginny Weasley",
			correctAnswer: "Neville Longbottom"
		},
		q6 = {
			q: "What is the location of the Order of the Phoenix?",
			a1: "Number Four, Privet Drive",
			a2: "Spinner's End",
			a3: "Shell Cottage",
			a4: "Number Twelve, Grimauld Place",
			correctAnswer: "Number Twelve, Grimauld Place"
		},
		q7 = {
			q: "Dumbledore single-handedly defeated and imprisoned which Dark wizard before Voldemort goes on to kill him?",
			a1: "Lucius Malfoy",
			a2: "Igor Karkaroff",
			a3: "Gellert Grindewald",
			a4: "Amycus Carrow",
			correctAnswer: "Gellert Grindewald"
		},
		q8 = {
			q: "What is Lord Voldemort’s real name?",
			a1: "Tom Marvolo Riddle",
			a2: "Salazar Slytherin",
			a3: "Gellert Grindewald",
			a4: "Morfin Gaunt",
			correctAnswer: "Tom Marvolo Riddle"
		},
		q9 = {
			q: "Which of Ron’s brothers is a Gryffindor Prefect in Harry’s first year?",
			a1: "George",
			a2: "Percy",
			a3: "Bill",
			a4: "Fred",
			correctAnswer: "Percy"
		}
	];

	function displayQ() {

		
		$("#question").html(questions[queuePos].q);
		$("#a1").html("<button>" + questions[queuePos].a1 + "</button>");
		$("#a2").html("<button>" + questions[queuePos].a2 + "</button>");
		$("#a3").html("<button>" + questions[queuePos].a3 + "</button>");
		$("#a4").html("<button>" + questions[queuePos].a4 + "</button>");

	}

	function displayAnswer() {
		
		if (sec === -1) {
			$("#question").html("You ran out of time!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			unanswered++;
		}
		else if ($(this).text() === questions[queuePos].correctAnswer) {
			$("#question").html("Correct!");
			$("#a1").html("The answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			correct++;
		}
		else if ($(this).text() != questions[queuePos].correctAnswer) {
			$("#question").html("Incorrect!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			incorrect++;
		}

		queuePos++;
		clearInterval(x);
		sec = 19;
		x = setTimeout(displayQ, 2000);
		x = setTimeout(gameTimer, 2000);

	}

	function displayResults() {
		$("#question").empty();
		$("#a1").html("Correct Answers: " + correct);
		$("#a2").html("Incorrect Answers: " + incorrect);
		$("#a3").html("Unanswered: " + unanswered);
		$("#a4").empty();
		$("#time-left").empty();		
	}

	function gameTimer() {
		if (queuePos === questions.length) {
			displayResults();
			return;
		}
		$("#time-left").html("<h2>Time remaining: 20</h2>");
		x = setInterval(function () {
			$("#time-left").html("<h2>Time remaining: " + sec + "</h2>");
			sec--;
			if (sec === -1) {
				clearInterval(x);
				displayAnswer();
				sec = 19;
			}
		}, 1000);

	}

	$("#start").on("click", function () {
		gameTimer();
		displayQ();
	});

	$("#a1").on("click", displayAnswer);
	$("#a2").on("click", displayAnswer);
	$("#a3").on("click", displayAnswer);
	$("#a4").on("click", displayAnswer);
});