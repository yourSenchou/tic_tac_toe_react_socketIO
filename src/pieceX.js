import React from 'react'

var PieceX = function(props) {

  var { width, left, top, handleCellSelect, id } = props

  var style = {
    height: width + 'px',
    width: width + 'px',
    left: left + 'px',
    top: top + 'px',
    position:'absolute'
  }

  return (
    <svg style={style} viewBox="0 0 100 100">
      <title>
        X
      </title>
      <g fill="#79C0D4" fillRule="evenodd">
        <path d="M26 71.67L72.67 25l2.828 2.828-46.67 46.67z"/>
        <path d="M28.83 25l46.668 46.67-2.83 2.828L26 27.828z"/>
      </g>
    </svg>
  )
}

export default PieceX