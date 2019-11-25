import React from 'react';
import { connect } from 'react-redux';
import { fetchQuizzes } from '../../actions/quizActionCreator';


const Quiz = (props) => {
    if (!props.quizInfo.isLoading && !props.quizInfo.quizzes.length && !props.quizInfo.error) {
        props.fetchQuizzes();
    }
    const quizzes = props.quizInfo.quizzes.map( (quiz, index) => {
        return (
            <div key={index}>
                {quiz.question}
            </div>
        );
    });
    return (
        <div>
            <button onClick={props.fetchQuizzes}>add</button>
            <div>
                {props.quizInfo.isLoading ? 'Now Loading...' : ''}
                {props.quizInfo.error}
                <hr/>
                {quizzes}
            </div>
        </div>
    )
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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quiz);