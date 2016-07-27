import React from 'react';
import { connect } from 'react-redux';
//import * as actionCreators from '../redux/action-creators';


export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.challengeHandler = this.challengeHandler.bind(this)
    }

    componentWillReceiveProps(nextProps) {

    }

    componentDidMount() {
      const activeChallenge = this.props.activeChallenge
      const username = this.props.username
      const challengeID = this.props.challengeID

      // this.daemon = setInterval( function() {
      //   if (!challengeID) {
      //     activeChallenge(username);
      //   }
      // }, 2000 );
    }

    challengeHandler(playerName) {
      () => this.props.dispatch({type: 'CHALLENGE_PLAYER', playerName: playerName})
        //Dispatcher.dispatch( { type: 'challenge-player', challengedPlayer : this.props.player.playerName });
    }

    render() {
        // var challenge = function(playerName) {
        //   debugger
        //     this.doChallenge(playerName);
        // }.bind(this);

        var challengeButton = this.props.canChallenge ? <button onClick={this.challengeHandler(this.props.playerName)}>Challenge</button> : '';

        return (
            <li>
                {this.props.playerName}
                <br/>
                {challengeButton}
            </li>
        );
    }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Player);
