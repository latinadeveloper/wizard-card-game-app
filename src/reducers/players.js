export default (state = [], action) => {
  let index;
  let player;

  switch (action.type) {

  case 'ADD_PlAYER':
    return state.concat(action.player);

  case 'REMOVE_PLAYER':
    return state.filter(player => player.id !== action.playerId);

    return state;

  default:
    return state;
}
}
