import { connect } from "react-redux";
import App from "./App";
import * as HandleChange from "./action";
import * as alertChange from "./action";
import { bindActionCreators } from "redux";

export default connect(
  (state) => (
    {
      data: state.aaaab.data,
      selectedOption: state.aaaab.selectedOption
    }),
  // (dispatch) => ({
  //   actions: bindActionCreators(HandleChange, dispatch)
  // }),
  (dispatch) => ({
    actions: bindActionCreators(HandleChange, dispatch),
    actions: bindActionCreators(alertChange, dispatch)
  })
)(App);
// function mapStateToProps(state) {
//   console.log("state : ", state);
//   return state.reducer;
// }

// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(HandleChange, dispatch) };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);
