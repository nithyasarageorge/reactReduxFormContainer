export function HandleChange(data, selectedOption) {
  return {
    type: "HANDLE_CHANGE",
    data,
    selectedOption
  };
}
export function alertChange(selectedOption) {
  return {
    type: "ALERT_CHANGE",
    selectedOption
  };
}
