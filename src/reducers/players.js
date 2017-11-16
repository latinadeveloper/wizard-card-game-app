export default (state = [], action) => {
  switch (action.type) {
  case 'ADD_PLAYER':
    return state.concat(action.player);

  case 'REMOVE_PLAYER':
    return state.filter((player, index) => index !== action.playerID);

  default:
    return state;
  }
}
