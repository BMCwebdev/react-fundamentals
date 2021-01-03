// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// I don't need className here anymore. otherProps could be just children now.
const Box = ({className = '', style, size, ...otherProps}) => {
  const sizeClassName = size ? `box--${size}` : null
  return (
    <div
      className={`box ${sizeClassName}`}
      style={{fontStyle: 'italic', ...style}}
      {...otherProps}
    />
  )
}

const smallBox = (
  <Box style={{backgroundColor: 'lightblue'}} size="small">
    small lightblue box
  </Box>
)

const mediumBox = (
  <Box style={{backgroundColor: 'pink'}} size="medium">
    medium pink box
  </Box>
)

const largeBox = (
  <Box style={{backgroundColor: 'orange'}} size="large">
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box heyo!
      </Box>
    </div>
  )
}

export default App
