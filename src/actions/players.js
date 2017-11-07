export const addPlayer = player => {
  return {
    type: 'ADD_PLAYER',
    player: player
  }
}

export const removePlayer = playerID => {
  return {
    type: 'REMOVE_PLAYER',
    playerID
  }
}

