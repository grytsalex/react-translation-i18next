import { connect } from 'react-redux';
import { ReduxThunk } from './ReduxThunk';
import * as selectors from './selectors';
import * as actions from './actions/actions';

const mapStateToProps = (state) => ({
  users: selectors.getUsers(state),
});

const mapDispatchToProps = (dispatch) => ({
  thunkAsyncDataFetch: () => dispatch(actions.thunkAsyncDataFetch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxThunk);
