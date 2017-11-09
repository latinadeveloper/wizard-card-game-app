import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/players';

export class PlayerForm extends Component {

    constructor(props) {
      super(props)
      this.state = ''
    }

    handleOnChange = event => {
      const { value, name } = event.target;
      this.setState(value);
    }

    handleOnSubmit = event => {
      event.preventDefault();
      this.props.addPlayer(this.state);
      this.setState('');
    }

    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-body">
                  <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                      <label htmlFor="player" className="col-md-4 control-label">Player</label>
                      <div className="col-md-5">
                        <input
                          className="form-control"
                          type="text"
                          name="player"
                          value={this.state}
                          onChange={this.handleOnChange}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="col-md-6 col-md-offset-4">
                        <button type="submit" className="btn btn-default">Add</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }



}

export default connect(null, { addPlayer })(PlayerForm);
