class Quiz {
    constructor(qs, number) {
        let incoming = qs;
        console.log("inside Quiz constructor, qs array");
        console.log(qs);

        console.log("number is: " + number);
        // this.setNumberOfQuestions(qs, number);
        this.questions = [];
        this.newSetNumberOfQuestions(qs, number);
        this.answerKey = [];
        this.setAnswerKey();
        this.questionIndex = 0;
        this.score = 0;
        this.answers = [];
    }

    newSetNumberOfQuestions(qs, number) {
        console.log("inside newSetNumberOfQuestions, qs array");
        console.log(qs);
        console.log("inside newSetNumberOfQuestions, this.questions array");
        console.log(this.questions);
        console.log("inside newSetNumberOfQuestions, this.questions = qs");
        this.questions = qs;
        console.log(this.questions);

        //console.log("inside newSetNumberOfQuestions, clearing this.questions");
        //this.questions = [];

        for(let i = 0; i < number; i++) {
            console.log("i is " + i);
        }
    }

    setNumberOfQuestions(qs, number) {
        console.log("Inside setNumberOfQuestions, Qs array");
        console.log(qs);
        console.log("Number is: " + number);

        /*
        if(this.questions.length > 0) {
            this.questions = [];
        }
        */

        // this.questions = [];
        for(let i = 0; i < number; i++) {
            console.log("inside for loop i is: " + i);
            console.log("qs array is...");
            console.log(qs);

            console.log("qs of that element is...");
            console.log(qs[i]);

            questions.push(qs[i]);
        }
    }

    setAnswerKey() {
        for(let i = 0; i < fetchedQuestions.length; i++) {
            // console.log(this.questions[i]);
            // randomize choices and assign it to choices
            // this.questions[i].choices = this.randomizeChoices(this.questions[i]);
            this.questions[i].choices = this.randomizeChoices(fetchedQuestions[i]);
            // find where answer is in randomized choices then add i to answer key
            for (let j = 0; j < this.questions[i].choices.length; j++) {
                if (this.questions[i].correct == this.questions[i].choices[j]) {
                    this.answerKey.push(j);
                }
            }
            delete fetchedQuestions[i].correct;
            delete fetchedQuestions[i].choiceB;
            delete fetchedQuestions[i].choiceC;
            delete fetchedQuestions[i].choiceD;           
        }
    }

    randomizeChoices(question) {
        let choices = this.getChoices(question);
        for (let i = 0; i < choices.length; i++) {
            let ran = Math.floor(Math.random() * (i + 1));
            let temp = choices[i];
            choices[ran] = temp;
        }
        return choices;
    }

    getChoices(q) {
        let choices = [];
        choices.push(q.correct);
        choices.push(q.choiceB);
        choices.push(q.choiceC);
        choices.push(q.choiceD);
        return choices;
    }

    startQuiz() {
        // don't display
        // document.getElementById("startQuiz").style.display = "none";
        // document.getElementById("fetchQuiz").style.display = "none";
        // document.getElementById("topics").style.display = "none";
        this.hideButtons();

        let q = document.getElementById("question");
        let choices = [];
        choices.push(document.getElementById("choice1"));
        choices.push(document.getElementById("choice2"));
        choices.push(document.getElementById("choice3"));
        choices.push(document.getElementById("choice4"));

        this.questionIndex = 0;
        console.log("Inside startQuiz, this.questions array");
        console.log(this.questions); // questions not defined, use this.
        console.log("Inside startQuiz, question should be: ")
        let question = this.questions[this.questionIndex];
        console.log(question);

        // let numberOfChoices = this.questions[this.questionIndex].choices.length;
        // console.log("number of choices: " + numberOfChoices);
        //q.innerHTML = question.statement;
        q.innerHTML = this.questions[this.questionIndex];

        for (let i = 0; i < question.choices.length; i++) { // question.choices.length gives error undefined
            //choices[i].innerHTML = question.choices[i];
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
            for (let i = 0; i < this.answerKey.length; i++){
                if(this.answerKey[i] == this.answers[i]) {
                    this.score++;
                }
            }
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
        this.startQuiz();
        // document.getElementById("qQuestions").style.display = "block";
        document.getElementById("results").style.display = "none";
    }

    hideButtons() {
        document.getElementById("startQuiz").style.display = "none";
        document.getElementById("fetchQuiz").style.display = "none";
        document.getElementById("topics").style.display = "none";
    }
}