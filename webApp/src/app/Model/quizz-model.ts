export class QuizzModel {
    question: string = "";
    a: string = "";
    b: string = "";
    c: string = "";
    valueA: number = 0;
    valueB: number = 0;
    valueC: number = 0;

    constructor(question: string, answerA: string, answerB: string, answerC: string, valueA: number, valueB: number, valueC: number) {
        this.question = question;
        this.a = answerA;
        this.b = answerB;
        this.c = answerC;
        this.valueA = valueA;
        this.valueB = valueB;
        this.valueC = valueC;
    }
}
