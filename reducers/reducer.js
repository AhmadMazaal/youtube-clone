const initialState = [];
export default function reducer(state = initialState, action) {
  if (action.type === "add") {
    return action.payload;
  }
  return state;
}
