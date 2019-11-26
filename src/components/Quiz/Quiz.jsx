import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchQuizzes, correctJudge, incorrectJudge } from '../../actions/quizActionCreator';


class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.onClickHandler = this.onClickHandler.bind(this);
    }
    componentDidMount() {
        this.props.fetchQuizzes();
    }

    onClickHandler(quiz, answer) {
        if (answer === quiz.correctAnswer) {
            window.alert('Correct');
            this.props.correctJudge();
        } else {
            window.alert('Incorrect');
            this.props.incorrectJudge();
        }
    }

    render() {
        if (this.props.quizInfo.isLoading) {
            return (
                <div>
                    <h1>Quiz</h1>
                    <p>Now Loading...</p>
                    <hr/>
                    <Link to="/">Home</Link>
                </div>
            );
        }
        if (this.props.quizInfo.currentIndex >= this.props.quizInfo.quizzes.length) {
            return (
                <div>
                    <h1>Quiz</h1>
                    <p>Result</p>
                    <p>{this.props.quizInfo.numberOfCorrected}/{this.props.quizInfo.quizzes.length}</p>
                    <button onClick={this.props.fetchQuizzes}>Restart</button>
                    <hr/>
                    <Link to="/">Home</Link>
                </div>
            )
        }
        const quiz = this.props.quizInfo.quizzes[this.props.quizInfo.currentIndex];
        const answers = quiz.answers().map( (answer, index) => <p key={index} onClick={() => this.onClickHandler(quiz, answer)}>{answer}</p>);
        return (
            <div>
                <h1>Quiz</h1>
                <p>{quiz.question}</p>
                {answers}
                <hr/>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        quizInfo: state.quizInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuizzes: () => {
            dispatch(fetchQuizzes());
        },
        correctJudge: () => {
            const correctAction = correctJudge();
            dispatch(correctAction);
        },
        incorrectJudge: () => {
            const incorrectAction = incorrectJudge();
            dispatch(incorrectAction);
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quiz);