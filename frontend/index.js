document.write("Moof")

fetch('http://api.open-notify.org/astros.json')
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
  console.log(`Holy cow! There are ${json["number"]} humans in space.`);
});

function fetchTopics() {
    let topics = fetch('http://localhost:3000/topics')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
    })
}

fetchTopics();