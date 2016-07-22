import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div><p>hi</p></div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
