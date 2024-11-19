import { createStore } from 'redux';

const initialState = {
    dummyValue: 100
};

const dummyReducer = (state = initialState, action) => {
    return state;
}

const store = createStore(dummyReducer);

export default store;
