import React from "react";
// import { connect } from "react-redux";
// import * as HandleChange from "./action";
// import reducer from "./reducer";
// import { bindActionCreators } from "redux";
var id, selectedOption;
class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRadio = this.changeRadio.bind(this);
  }
  changeRadio(event) {
    selectedOption = event.target.value;
    this.props.actions.alertChange(selectedOption);
  }
  handleSubmit() {
    // console.log("hello ",this.props.actions);
    this.props.actions.HandleChange(id, selectedOption);
  }
  handleChange(event) {
    id = event.target.value;
  }
  render() {
    return (
      <div>
        NAME:<input
          style={{ marginTop: "20px" }}
          type="text"
          name="name"
          onChange={this.handleChange}
        />
        <div style={{ clear: "both" }} />
        <input
          style={{ marginTop: "20px" }}
          type="radio"
          onChange={this.changeRadio}
          name="gender"
          value="male"
        />{" "}
        Male
        <input
          type="radio"
          onChange={this.changeRadio}
          name="gender"
          value="female"
        />{" "}
        Female
        <input
          type="radio"
          onChange={this.changeRadio}
          name="gender"
          value="other"
        />{" "}
        Other
        <div style={{ clear: "both" }} />
        <input
          style={{ marginTop: "20px", marginLeft: "90px" }}
          type="submit"
          value="Submit"
          onClick={this.handleSubmit}
        />
        <p style={{ color: "purple", fontWeight: "bold" }}>{this.props.data}</p>
        <p style={{color:"blue",fontWeight:"bold"}}>{this.props.selectedOption}</p>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return state;
// }

// function mapDispatchToProps(dispatch) {
//   return ({ actions: bindActionCreators(HandleChange, dispatch) })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
