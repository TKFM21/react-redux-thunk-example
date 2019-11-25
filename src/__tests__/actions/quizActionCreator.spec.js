import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
    FETCH_QUIZZES_REQUEST,
    FETCH_QUIZZES_SUCCESS,
    FETCH_QUIZZES_FAILURE,
    fetchQuizzes
} from '../../actions/quizActionCreator';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('action/quizActionCreator Test', () => {
    it('success fetch.', async () => {
        const expectedResult = [
            'quiz1',
            'quiz2'
        ];
        axios.get.mockResolvedValue({
            data: {
                results: expectedResult
            }
        });

        const store = mockStore();
        await store.dispatch(fetchQuizzes());

        expect(store.getActions()).toEqual([
            {
                type: FETCH_QUIZZES_REQUEST
            },
            {
                type: FETCH_QUIZZES_SUCCESS,
                data: {
                    results: expectedResult
                }
            }
        ]);
    });
    it('failure fetch', async () => {
        const expectedResult = 'error';
        axios.get.mockRejectedValue({
            message: expectedResult
        });
        const store = mockStore();
        await store.dispatch(fetchQuizzes());

        expect(store.getActions()).toEqual([
            {
                type: FETCH_QUIZZES_REQUEST
            },
            {
                type: FETCH_QUIZZES_FAILURE,
                error: {
                    message: expectedResult
                }
            }
        ]);
    });
});
