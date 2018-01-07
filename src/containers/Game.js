import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, removePlayer } from '../actions/players';


class Game extends Component {
  render() {
    const { players, removePlayer} = this.props;
    return (
        
        <div>The Game</div>
       
        
    )
  }
}

const mapStateToProps = state => {
  return ({
    players: state.players
  })
}


export default connect(mapStateToProps, { removePlayer })(Game);
