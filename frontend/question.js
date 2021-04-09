class Question {
    static questions = [];
    constructor(statement, correct, choiceB, choiceC, choiceD) {
        this.statement = statement;
        this.correct = correct;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;

        Quiz.questions.push(this);
    }
}