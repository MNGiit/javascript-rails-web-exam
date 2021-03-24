class Quiz {
    constructor(questions, number) {
        this.questions = [];
        this.setNumberOfQuestions(questions, number);
        // randomizeAnswersAndCreateKey(this.questions);
    }

    setNumberOfQuestions(questions, number) {
        if(this.questions.length > 0) {
            this.questions = [];
        }
        for(let i = 0; i < number; i++) {
            this.questions.push(questions[i])
        }
    }
}


// const tenQuestions = 10; // eliminate "magic number" in code
// let questions = []; // array holds all questions
// let pickedQuestions = []; // array holds picked questions for quiz
// let answerKey = []; // array holds answers for picked questions for quiz
// let answers = [];   // array holds answers picked by user
// let quizScore = 0;
// let questionIndex = 0; // index will navigate through pickedQuestions