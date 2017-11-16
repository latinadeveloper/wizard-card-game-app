import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPlayer, removePlayer } from '../actions/players';
import PlayerForm from './PlayerForm';
import PlayerCard from '../components/PlayerCard';

const maximum_players = 6;

class Players extends Component {
  render() {
    const { players, removePlayer} = this.props;
    return (
      <div>
        {players.length < maximum_players &&
          <PlayerForm/>
        }
        <div>Remaining: {maximum_players - players.length}</div>
        <hr />
        <div className="row justify-content-center">
          <h2>Players</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {players.map((player, index) => <PlayerCard id={index} removePlayer={removePlayer} player={player} />)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    players: state.players
  })
}


export default connect(mapStateToProps, { removePlayer })(Players);
