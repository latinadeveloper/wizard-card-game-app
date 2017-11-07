import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/players';

export class PlayerForm extends Component {
}

export default connect(null, { addPlayer })(PlayerForm);
