class Quiz {
    constructor(questions, number) {
        this.questions = [];
        this.setNumberOfQuestions(questions, number);
        this.answerKey = [];
        this.setAnswerKey();
        this.questionIndex = 0;
        this.score = 0;
        this.answers = [];
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
        console.log(this.questions);
        // don't display
        document.getElementById("startQuiz").style.display = "none";
        document.getElementById("fetchQuiz").style.display = "none";
        document.getElementById("topics").style.display = "none";

        let q = document.getElementById("question");
        let choices = [];
        choices.push(document.getElementById("choice1"));
        choices.push(document.getElementById("choice2"));
        choices.push(document.getElementById("choice3"));
        choices.push(document.getElementById("choice4"));

        questionIndex = 0;
        let question = questions[questionIndex];

        q.innerHTML = question.statement;

        for (let i = 0; i < question.choices.length; i++) {
            choices[i].innerHTML = question.choices[i];
        }
            
        this.updateQuestionNumber();
        // display the question
        document.getElementById("qQuestions").style.display = "block";
    }

    nextQuestion() {
        if(this.questionIndex < this.questions.length-1) {
            this.questionIndex++;

            this.updateQuestionNumber();
            let q = document.getElementById("question");
            let choices = [];
            choices.push(document.getElementById("choice1"));
            choices.push(document.getElementById("choice2"));
            choices.push(document.getElementById("choice3"));
            choices.push(document.getElementById("choice4"));
        
            let question = questions[this.questionIndex];

            q.innerHTML = question.statement;
        
            for (let i = 0; i < question.choices.length; i++) {
                choices[i].innerHTML = question.choices[i];
            }
        }
        else {
            console.log("at grading: " + questions);
            for (let i = 0; i < this.answerKey.length; i++){
                if(this.answerKey[i] == this.answers[i]) {
                    this.score++;
                }
            }
            console.log("done grading: " + questions);
            document.getElementById("qQuestions").style.display = "none";
            document.getElementById("results").style.display = "block";
            document.getElementById("showResults").innerHTML = "Congrats, you're done with the quiz, with the score of " + this.score*10;
        }
    }

    updateQuestionNumber() {
        document.getElementById("number").innerHTML = `${this.questionIndex + 1}` + "/" + `${this.questions.length}`;
    }

    pickAnswer(selected) {
        this.answers[this.questionIndex] = selected;
    }

    retakeQuiz() {
        // console.log("called retakeQuiz()");
        this.questionIndex = 0;
        // nextQuestion();
        console.log(this.questions)
        this.startQuiz();
        console.log(this.questions)
        // document.getElementById("qQuestions").style.display = "block";
        document.getElementById("results").style.display = "none";
    }
}