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

let questions = []; // array holds all questions
let pickedQuestions = []; // array holds picked questions for quiz
let answerKey = []; // array holds answers for picked questions for quiz
let answers = [];   // array holds answers picked by user

let questionIndex = 0; // index will navigate through pickedQuestions

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
    for (let i = 0; i < topics.length; i++) {
        textNode = document.createTextNode(topics[i].name);
        document.getElementById("topics").appendChild(textNode);

        // create button
        let button = document.createElement("BUTTON");
        // place topic name in text
        button.innerHTML = topics[i].name;
        // add button to html topics
        x.appendChild(button);
    }
}

function addTopicButtonsToDoc() {
    const x = document.getElementById("topics");
    for (let i = 0; i < topics.length; i++) {
        // create button
        let button = document.createElement("BUTTON");
        // place topic name in text
        button.innerHTML = topics[i].name;
        // add button to html topics
        x.appendChild(button);  
    }    
}


// put these functions in a separate file
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
    quiz.retakeQuiz();
}

function pickAnswer(selected) {
    quiz.pickAnswer(selected);
}
// put functions above in a separate file

fetchTopics();
setTimeout(addTopicButtonsToDoc, 250);