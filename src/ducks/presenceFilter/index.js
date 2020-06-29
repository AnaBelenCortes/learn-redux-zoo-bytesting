import { SET_PRESENCE_FILTER } from "./actions/setPresenceFilter";

export function presenceFilterReducer(state = "all", action) {
  const { filter } = action;
  switch (action.type) {
    case SET_PRESENCE_FILTER:
      return filter;
    default:
      return state;
  }
}

export default presenceFilterReducer;
