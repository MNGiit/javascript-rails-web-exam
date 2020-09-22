// class
let topics = [];
class Topic {
    constructor(name) {
        this.name = name;
    }
}

let questions = [];
class Question {
    constructor(statement) {
        this.statement = statement;
        questions.push(this);
    }
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