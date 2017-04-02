import { connect } from 'react-redux';
import { addSticker } from '../actions/StickersActions';
import StickersComponent from '../components/StickersComponent';

const StickersContainer = connect(
    (state) => {
        return {
            count: state.stickers.count
        }
    },
    (dispatch) => {
        return {
            addSticker: () => {
                dispatch(addSticker());
            }
        }
    }
)(StickersComponent);

export default StickersContainer;
