import React from 'react'
import { connect } from 'react-redux'
//import * as actionCreators from '../redux/action-creators'
import Player from './Player.js'
//import { loadPlayers } from '../actions'

export default class PlayerList extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentWillMount() {
    //     Emitter.on("player-list-changed", function(players) {
    //         this.setState({ players: players });
    //     }.bind(this) );
    // }
    //
    componentDidMount() {
    //     console.log("Started roster updater.")
    //     var context = this
    //     let loadPlayerList = this.props.loadPlayerList
           const { dispatch } = this.props
          this.daemon = setInterval(function() {
            dispatch({type: "LOAD_PLAYERS"})
          }, 1000)
    //     //
    //     // Dispatcher.dispatch({ type: "load-player-list" });
    //
    //     // console.log("Started active challenge checker.");
    //     // this.activeChallengeDaemon = setInterval( function() {
    //     //     Dispatcher.dispatch({ type: "active-challenge" });
    //     // }, 1000 );
    }
    //
    // componentWillUnmount() {
    //     console.log('Stopped roster updater.');
    //     clearInterval(this.daemon);
    //
    //     console.log('Stopped active challenge checker.');
    //     clearInterval(this.activeChallengeDaemon);
    // }

    render() {
        const thisPlayer = this.props.session.username;
        const players = this.props.players ? this.props.players.map(function(player, i) {
            let canChallenge = thisPlayer !== player.playerName

            return (
                player ? <Player playerName={player.playerName} key={i} canChallenge={canChallenge} /> : null
            );
        }) : null

        return (
            <ul>
              {players}
            </ul>
        );
    }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(PlayerList)
