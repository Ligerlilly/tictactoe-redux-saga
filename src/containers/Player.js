import React from 'react';
import { connect } from 'react-redux';
//import * as actionCreators from '../redux/action-creators';


export default class Player extends React.Component {
    constructor(props) {
        super(props);
        this.challengePlayer = this.challengePlayer.bind(this)
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

    challengePlayer(playerName, username) {
      return () => this.props.dispatch({type: 'CHALLENGE_PLAYER', playerName: playerName, username: username})

        //Dispatcher.dispatch( { type: 'challenge-player', challengedPlayer : this.props.player.playerName });
    }

    render() {
        // let challenge = (playerName) => {
        //   debugger
        //   return this.doChallenge(playerName)
        // }
        const { playerName } = this.props
        const { username } = this.props.session
        var challengeButton = this.props.canChallenge ? <button onClick={this.challengePlayer(playerName, username)}>Challenge</button> : '';

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
