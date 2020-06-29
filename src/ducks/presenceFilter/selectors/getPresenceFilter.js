import state from "../../index";
export function getPresenceFilter(state) {
  const { presenceFilter } = state;
  console.log(state);
  return presenceFilter;
}

export default getPresenceFilter;
