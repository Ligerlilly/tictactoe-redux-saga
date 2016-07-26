import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import JoinInterface from '../components/JoinInterface'
import Lobby from './Lobby'
import { joinPlayer } from '../actions'
import { store } from '../main'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const username = this.props.session.username
    const challengedPlayer = this.props.challengedPlayer
    const activeChallenge = this.props.activeChallenge
    const visible = this.props.visible.status
    let toShow = ''

    if (!this.props.challengeID) {
      switch (visible) {
        case 'roster':
        toShow = <Lobby />;
        break;
        case 'join':
        toShow = <JoinInterface/>;
        break;
        case 'challenge':
        toShow = <ChallengeInterface/>;
        break;
        case 'gameboard':
        toShow = <GameBoard/>;
        break;
        default:
        if (username) {
         toShow = <Lobby />
        } else {
         toShow = <JoinInterface dispatch={store.dispatch}/>;
        }
      }
    } else if (challengedPlayer === username) {
      toShow =  <ActiveChallengeInterface />;
    } else {
      toShow = <ChallengeInterface/>;
    }

    return (
      <div>
        {toShow}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, {
  joinPlayer
})(App);
