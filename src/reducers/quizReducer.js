import {
    FETCH_QUIZZES_REQUEST,
    FETCH_QUIZZES_SUCCESS,
    FETCH_QUIZZES_FAILURE,
    CORRECT_JUDGE,
    INCORRECT_JUDGE
} from '../actions/quizActionCreator';

const initialState = {
    isLoading: true,
    quizzes: [],
    error: null,
    currentIndex: 0,
    numberOfCorrected: 0
};

export const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_QUIZZES_REQUEST:
            return {
                ...state,
                isLoading: true,
                quizzes: [],
                error: null,
                currentIndex: 0,
                numberOfCorrected: 0
            };
        case FETCH_QUIZZES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                quizzes: action.data,
                error: null
            };
        case FETCH_QUIZZES_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.error
            };
        case CORRECT_JUDGE:
            return {
                ...state,
                currentIndex: state.currentIndex + 1,
                numberOfCorrected: state.numberOfCorrected + 1
            };
        case INCORRECT_JUDGE:
            return {
                ...state,
                currentIndex: state.currentIndex + 1
            };
        default:
            return state;
    }
};