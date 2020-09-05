import { connect } from 'react-redux';
import { ReduxThunk } from './ReduxThunk';
import * as selectors from './selectors';
// import * as actions from './actions/actions';

const mapStateToProps = (state) => ({
  users: selectors.getUsers(state),
});

// const mapDispatchToProps = (dispatch) => ({
//   setStatusData: (payload) => dispatch(actions.setStatusData(payload)),
// });

export default connect(mapStateToProps, null)(ReduxThunk);
