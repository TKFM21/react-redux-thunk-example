import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// import store from './store';
// import { fetchQuizzes } from './actions/quizActionCreator';

// store.subscribe(() => {
//     console.log('subscribe run!!!!!');
//     console.log(store.getState());
//     console.log('@@@@@@@');
// });

// (async () => {
//     const rew = await store.dispatch(fetchQuizzes());
//     console.log('get', rew);
// })();
