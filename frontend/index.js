// class
let topics = [];
class Topic {
    constructor(name) {
        this.name = name;
        topics.push(this);
    }
}

let questions = [];
class Question {
    constructor(statement, correct, choiceB, choiceC, choiceD) {
        this.statement = statement;
        this.correct = correct;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;

        questions.push(this);
    }
}

function giveQuestion(question) {
    return question.statement;
}

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
                topics.push(new Topic(json[i]["name"]));
            }
    })
}

function addTopicsToDoc() {
    const x = document.getElementById("topics");
    let textNode = "";
    // console.log("test message");
    for (let i = 0; i< topics.length; i++) {
        textNode = document.createTextNode(topics[i].name);
        document.getElementById("topics").appendChild(textNode);
        console.log(topics[i]["name"])
    }
    console.log(topics);
}

fetchTopics();
addTopicsToDoc();
let idTest = document.getElementById("test");
idTest.innerHTML = topics; // placed script at bottom of <body> so it doesn't say null...it works now sorta
idTest.innerHTML = "if you see this, it means it changed";

new Topic("This is topic 1. Is it in the topics array?")
new Topic("This is topic 2. Is it in the topics array?")
new Question("This is question 1. Is it in the questions array?")
new Question("This is question 2. Is it in the questions array?")
// question, correct, wrong, wrong, wrong
new Question("What is 1 + 1?", "2", "3", "1", "0")
new Question("What is 1 * 1?", "1", "3", "2", "0")

//document.getElementById("test").innerHTML = "testing write second time"; // doesn't work here for some reason

// document.write("Moof")
// fetch('http://api.open-notify.org/astros.json')
// .then(function(response) {
//   return response.json();
// }).then(function(json) {
//   console.log(json);
//   console.log(`Holy cow! There are ${json["number"]} humans in space.`);
// });


// fetch('http://localhost:3000/topics')
// .then(function(response) {
//     return response.json();
// }).then(function(json) {
   // document.getElementById("test").innerHTML = "testing write"; // passes
   // document.getElementById("test").innerHTML = json; // passes but it's shown as object Object
   
    // create new topic objects
//     for (let i = 0; i < json.length; i++) {
        // create new topic
//         topics.push(new Topic(json[i]["name"]));
//     }

//    return json;
// })

// function fetchTopics() {
//    let topics = fetch('http://localhost:3000/topics')
//    .then(function(response) {
//        return response.json();
//    })
//    .then(function(json) {
       // console.log(json);
       // return json;
//    })
    // document.getElementById('test').innerHTML = `${topics}`;
    // document.getElementById('test').innerHTML = "Hello World!";
// }