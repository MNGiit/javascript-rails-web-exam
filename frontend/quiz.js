class Quiz {
    constructor(questions, number) {
        this.questions = [];
        this.setNumberOfQuestions(questions, number);
        this.answerKey = [];
        this.setAnswerKey();
    }

    setNumberOfQuestions(questions, number) {
        if(this.questions.length > 0) {
            this.questions = [];
        }
        for(let i = 0; i < number; i++) {
            this.questions.push(questions[i])
        }
    }

    setAnswerKey() {
        for(let i = 0; i < this.questions.length; i++) {
            // randomize choices and assign it to choices
            this.questions[i].choices = randomizeChoices(this.questions[i]);
            // find where answer is in randomized choices then add i to answer key
            for (let j = 0; j < this.questions[i].choices.length; j++) {
                if (this.questions[i].correct == this.questions[i].choices[j]) {
                    this.answerKey.push(j);
                }
            }
            // remove correct, choiceB, choiceC, choiceD
            delete questions[i].correct;
            delete questions[i].choiceB;
            delete questions[i].choiceC;
            delete questions[i].choiceD;           
        }
    }

    randomizeChoices(question) {
        let choices = getChoices(question);
        for (let i = 0; i < choices.length; i++) {
            let ran = Math.floor(Math.random() * (i + 1));
            let temp = choices[i];
            choices[ran] = temp;
        }
        return choices;
    }

    getChoices(question) {
        let choices = [];
        choices.push(question.correct);
        choices.push(question.choiceB);
        choices.push(question.choiceC);
        choices.push(question.choiceD);
        return choices;
    }

    startQuiz() {
        console.log("Starting Quiz");
        // don't display
        document.getElementById("startQuiz").style.display = "none";
        document.getElementById("fetchQuiz").style.display = "none";
        document.getElementById("topics").style.display = "none";

        //
        // let q = document.getElementById("question");
        let choices = [];
        choices.push(document.getElementById("choice1"));
        choices.push(document.getElementById("choice2"));
        choices.push(document.getElementById("choice3"));
        choices.push(document.getElementById("choice4"));
        //

        //
        let questionIndex = 0;
        let question = questions[questionIndex];
        console.log(question);

    }
}



// const tenQuestions = 10; // eliminate "magic number" in code
// let questions = []; // array holds all questions
// let pickedQuestions = []; // array holds picked questions for quiz
// let answerKey = []; // array holds answers for picked questions for quiz
// let answers = [];   // array holds answers picked by user
// let quizScore = 0;
// let questionIndex = 0; // index will navigate through pickedQuestions