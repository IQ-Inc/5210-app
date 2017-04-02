import { combineReducers } from 'redux';
import StickersReducer from './StickersReducer';

const MainReducer = combineReducers({
    isLoading: (state = false, action) => {
        switch(action.type) {
            default:
                return state;
        }
    },
    stickers: StickersReducer
});

export default MainReducer;