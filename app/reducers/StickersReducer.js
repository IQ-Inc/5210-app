import ADD_STICKER from '../actions/StickersActions';

const StickersReducer = (state = {
    count: 0
    }, action) => {
        switch(action.type){
            case ADD_STICKER:
                return {...state, count: {...state.count + 1} };
            default:
                return state;
        }
    };

export default StickersReducer;