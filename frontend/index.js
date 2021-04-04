let quiz = null;
// click on topic button
// topic button first fetches questions
function fetchQuestionsStartQuiz() {
	fetch('http://localhost:3000/topics/quiz')
		.then(response => response.json())
		.then(json => {
            console.log(json);
            for (let i = 0; i< json.length; i++) {
                // topics.push(new Topic(json[i]["name"]));
                // new Topic(json[i]["name"]);
                // question, correct, wrong, wrong, wrong
                // new Question("What is 1 + 1?", "2", "3", "1", "0")
                // stem
                // distractor_answer
                // distractor_b
                // distractor_c
                // distractor_d
                new Question(json[i]["stem"], json[i]["distractor_answer"], json[i]["distractor_b"],
                json[i]["distractor_c"], json[i]["distractor_d"]);
            }
    }) // end of fetch
    quiz = new Quiz(questions, 10);
    quiz.startQuiz();
} // end of function
// topic button second starts quiz


const tenQuestions = 10; // eliminate "magic number" in code
let questions = []; // array holds all questions
let pickedQuestions = []; // array holds picked questions for quiz
let answerKey = []; // array holds answers for picked questions for quiz
let answers = [];   // array holds answers picked by user
let quizScore = 0;
let questionIndex = 0; // index will navigate through pickedQuestions

function giveChoices(question) {
    let qArr = [];
    qArr.push(question.correct);
    qArr.push(question.choiceB);
    qArr.push(question.choiceC);
    qArr.push(question.choiceD);

    return qArr;
}

function giveCompleteQuestion(question) {
    let completeQuestion = giveQuestion(question);
    let choices = "";
    let choicesLength = giveChoices(question).length;
    let questionChoices = giveChoices(question);

    // randomize order of choices and correct answer

    for (let i = 0; i < choicesLength; i++) {
        if (i == 0) {
            choices = questionChoices[i];
        }
        else {
            choices+= '\n' + questionChoices[i];
        }
    }
    return completeQuestion + '\n' + choices;
}

function randomizeChoices(question) {
    let choices = giveChoices(question);
    for (let i = 0; i < choices.length; i++) {
        let ran = Math.floor(Math.random() * (i + 1));
        let temp = choices[i];
        choices[i] = choices[ran];
        choices[ran] = temp;
    }
    return choices;
}

function fetchTopics() {
	fetch('http://localhost:3000/topics')
		.then(response => response.json())
		.then(json => {
            for (let i = 0; i< json.length; i++) {
                // topics.push(new Topic(json[i]["name"]));
                new Topic(json[i]["name"]);
            }
    })
}

function fetchQuiz() {
	fetch('http://localhost:3000/topics/quiz')
		.then(response => response.json())
		.then(json => {
            console.log(json);
            for (let i = 0; i< json.length; i++) {
                // topics.push(new Topic(json[i]["name"]));
                // new Topic(json[i]["name"]);
                // question, correct, wrong, wrong, wrong
                // new Question("What is 1 + 1?", "2", "3", "1", "0")
                // stem
                // distractor_answer
                // distractor_b
                // distractor_c
                // distractor_d
                new Question(json[i]["stem"], json[i]["distractor_answer"], json[i]["distractor_b"],
                json[i]["distractor_c"], json[i]["distractor_d"]);
            }
    })
}

function addTopicsToDoc() {
    const x = document.getElementById("topics");
    let textNode = "";
    // console.log(x);
    for (let i = 0; i < topics.length; i++) {
        // console.log(topics[i]); // isn't showing
        // console.log(topics.length); // isn't showing
        console.log(i);
        textNode = document.createTextNode(topics[i].name);
        document.getElementById("topics").appendChild(textNode);
        console.log(topics[i]["name"]);

        // create button
        let button = document.createElement("BUTTON");
        // place topic name in text
        button.innerHTML = topics[i].name;
        // add button to html topics
        x.appendChild(button);
    }
    // console.log(topics);
}

function addTopicButtonsToDoc() {
    const x = document.getElementById("topics");
    // fetchTopics();
    // console.log("Inside addTopicsButtonToDoc");
    // console.log("There are this many topics: " + topics.length);
    // console.log(topics.length);
    for (let i = 0; i < topics.length; i++) {
        // console.log("Inside for loop " + i);
        // create button
        let button = document.createElement("BUTTON");
        // place topic name in text
        button.innerHTML = topics[i].name;
        // add button to html topics
        x.appendChild(button);  
    }    
  
}


// put these functions in a separate file
function get10Questions() {
    if(pickedQuestions.length > 0) {
        pickedQuestions = [];
    }
    for (let i = 0; i < tenQuestions; i++) {
        pickedQuestions.push(questions[i]);
    }
}

function nextQuestion() {
    quiz.nextQuestion();
    /*
    if(questionIndex < pickedQuestions.length-1) {
        questionIndex++;
        document.getElementById("number").innerHTML = `${questionIndex + 1}` + "/" + `${tenQuestions}`;
        let q = document.getElementById("question");
        let aArr = [];
        aArr.push(document.getElementById("choice1"));
        aArr.push(document.getElementById("choice2"));
        aArr.push(document.getElementById("choice3"));
        aArr.push(document.getElementById("choice4"));
    
        let question = pickedQuestions[questionIndex];
        q.innerHTML = question.statement;
    
        for (let i = 0; i < question.choices.length; i++) {
            aArr[i].innerHTML = question.choices[i];
        }  
    }
    else {
        for (let i = 0; i < answerKey.length; i++){
            if(answerKey[i] == answers[i]) {
                quizScore++;
            }
        }
        document.getElementById("qQuestions").style.display = "none";
        document.getElementById("results").style.display = "block";
        document.getElementById("showResults").innerHTML = "Congrats, you're done with the quiz, with the score of " + quizScore*10;
        // alert("Congrats, you're done with the quiz, with the score of " + quizScore);
        // alert((quizScore/answerKey.length)*100); 
    }
    */
}

function retakeQuiz() {
    // fetchQuestionsStartQuiz()
    // console.log(quiz.questions);
    quiz.retakeQuiz();
    // document.getElementById("results").style.display = "none";
}

function pickAnswer(selected) {
    // alert("Button was clicked! Value is "+ selected);
    // answers[questionIndex] = selected;
    quiz.pickAnswer(selected);
}
// put functions above in a separate file

fetchTopics();
setTimeout(addTopicButtonsToDoc, 250);