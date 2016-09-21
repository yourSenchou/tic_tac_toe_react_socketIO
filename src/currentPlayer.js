import React from 'react'

const CurrentPlayer = props => {
  return (
    <div style={ {backgroundColor: '#9b1'} }>CurrentPlayer: { props.currentPlayer }</div>
  )
}

CurrentPlayer.propTypes = {
  currentPlayer: React.PropTypes.string.isRequired
}

export default CurrentPlayer
