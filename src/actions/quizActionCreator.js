import Quiz from '../models/Quiz';
import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

export const FETCH_QUIZZES_REQUEST = 'FETCH_QUIZZES_REQUEST';
export const FETCH_QUIZZES_SUCCESS = 'FETCH_QUIZZES_SUCCESS';
export const FETCH_QUIZZES_FAILURE = 'FETCH_QUIZZES_FAILURE';

export const CORRECT_JUDGE = 'CORRECT_JUDGE';
export const INCORRECT_JUDGE = 'INCORRECT_JUDGE';

export const fetchQuizzes = () => {
    return async (dispatch) => {
        dispatch( fetchQuizzesRequest() );
        try {
            const response = await axios.get(API_URL);
            const data = Quiz.fetchQuizzesAndInstanceArray(response.data.results);
            dispatch( fetchQuizzesSuccess(data) );
        } catch (error) {
            dispatch( fetchQuizzesFailure(error) );
        }
    };
};

const fetchQuizzesRequest = () => {
    return {
        type: FETCH_QUIZZES_REQUEST
    };
};

const fetchQuizzesSuccess = (data) => {
    return {
        type: FETCH_QUIZZES_SUCCESS,
        data
    };
};

const fetchQuizzesFailure = (error) => {
    return {
        type: FETCH_QUIZZES_FAILURE,
        error
    };
};

export const correctJudge = () => {
    return {
        type: CORRECT_JUDGE
    };
};

export const incorrectJudge = () => {
    return {
        type: INCORRECT_JUDGE
    };
};