import React from 'react';

const PlayerCard = ({ player, removePlayer}) =>

<div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <footer><cite title="Player's motto">{player}</cite></footer>
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">

          <button
            type="button"
            onClick={() => removePlayer(player.id)}
            className="btn btn-danger"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

      </div>
    </div>
  </div>;



export default PlayerCard;
