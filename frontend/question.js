let questions = [];
class Question {
    constructor(statement, correct, choiceB, choiceC, choiceD) {
        this.statement = statement;
        this.correct = correct;
        this.choiceB = choiceB;
        this.choiceC = choiceC;
        this.choiceD = choiceD;

        // Question.questions.push(this);
        questions.push(this);
    }
    // static questions = [];
    // static testDescription = "will this produce a reference error?";
}