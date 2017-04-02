import { combineReducers } from 'redux';

const RootReducer = combineReducers({
    isLoading: (state = false, action) => {
        switch(action.type) {
            default:
                return state;
        }
    }
});

export default RootReducer;