import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/players';

class Players extends Component {
  render() {
    const { players, removePlayer} = this.props;
    return (
        <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Players</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {players.map(player=> <PlayerCard key={player.id} removePlayer={removePlayer} player={player} />)}
            </div>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = state => {
  return ({
    players: state.players
  })
}

export default connect(mapStateToProps, { removePlayer })(Players);