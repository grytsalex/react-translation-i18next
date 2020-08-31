export { ReactSelect } from './ReactSelect.jsx';
import { connect } from "react-redux";
import { ReactSelect } from "./ReactSelect";
import * as selectors from "./selectors";

const mapStateToProps = (state) => ({
    isFocused: selectors.getIsFocused(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReactSelect);
