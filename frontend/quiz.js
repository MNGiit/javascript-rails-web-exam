class Quiz {
    constructor(questions, number) {
        this.questions = [];
        this.setNumberOfQuestions(questions, number);
        // randomizeAnswersAndCreateKey(this.questions);
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
        return question;
    }
}


// const tenQuestions = 10; // eliminate "magic number" in code
// let questions = []; // array holds all questions
// let pickedQuestions = []; // array holds picked questions for quiz
// let answerKey = []; // array holds answers for picked questions for quiz
// let answers = [];   // array holds answers picked by user
// let quizScore = 0;
// let questionIndex = 0; // index will navigate through pickedQuestions