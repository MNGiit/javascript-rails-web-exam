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