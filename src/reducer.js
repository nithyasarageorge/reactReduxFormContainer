import * as action from "./action";

const initalstate = {
  data: "",
  selectedOption: ""
};

export default function reducer(state = initalstate, action) {
  switch (action.type) {
    case "HANDLE_CHANGE":
      console.log("this.state ", action);
      return (Object.assign({}, state, {
        data: action.data,
        selectedOption: action.selectedOption
      }));

    case "ALERT_CHANGE":
      console.log("this.state ", action);
      return (Object.assign({}, state, {
        selectedOption: action.selectedOption
      }));

    default:
      return state;
  }
}

export { initalstate };
