import { connect } from 'react-redux';
import MainComponent from '../components/MainComponent';

const MainContainer = connect(
    (state) => {
        return {
            isLoading: state.isLoading
        };
    }
)(MainComponent);

export default MainContainer;