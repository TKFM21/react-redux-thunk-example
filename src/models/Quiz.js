class Quiz {
    constructor({ question, correctAnswer, incorrectAnswers }) {
        this._question = question;
        this._correctAnswer = correctAnswer;
        this._incorrectAnswers = incorrectAnswers;
    }

    get question() {
        return this._question;
    }

    get correctAnswer() {
        return this._correctAnswer;
    }

    answers() {
        return [ this._correctAnswer, ...this._incorrectAnswers ];
    }

    static fetchQuizzesAndInstanceArray(results) {
        return results.map( quiz => {
            const data = {
                question: quiz.question,
                correctAnswer: quiz.correct_answer,
                incorrectAnswers: quiz.incorrect_answers
            };
            return new Quiz(data);
        });
    }
}

export default Quiz;