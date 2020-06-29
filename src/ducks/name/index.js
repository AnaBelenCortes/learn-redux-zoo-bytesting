import { SET_NAME } from "./actions/setName";

function reduceName(state = "Hoboken", action) {
  const { name } = action;
  switch (action.type) {
    case SET_NAME:
      return name;
    default:
      return state;
  }
}

export default reduceName;
