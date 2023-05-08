
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
	var correct = 0;


	if (question1 == "Providence") {
		correct++;
}
	if (question2 == "Hartford") {
		correct++;
}	
	if (question3 == "Albany") {
		correct++;
	}
    if(question4=="fan"){
        correct++;
    }
	
	var pictures = ['win.gif',"win.gif", "meh.jpeg", "lose.gif"];
	var messages = ['All are correct Grasping:100% ',"Great job!  Grasping:65% ", "That's just okay Grasping:35% ", "You really need to do better   Grasping:0% "];
	var score;

	if (correct == 0) {
		score = 3;
	}

	if (correct > 0 && correct < 3) {
		score = 2;
	}

	if (correct == 3) {
		score = 1;
	}
    if (correct==4)
    {
        score=0;
    }
	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	}
function check1(){
	window.location.href="../opt.html";
}