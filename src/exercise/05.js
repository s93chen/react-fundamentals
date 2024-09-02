// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

// const smallBox = <div className='box box--small'>small lightblue box</div>
// const mediumBox = <div className='box box--medium'>medium pink box</div>
// const largeBox = <div className='box box--large'>large orange box</div>

function Box({size, style, ...props}) {
  return (
    <div
      className={size === undefined ? 'box' : `box box--${size}`}
      style={{fontStyle: 'italic', ...style}}
      {...props} 
    />
  )
}
const smallBox = (
  <Box size='small' style={{backgroundColor: 'lightblue'}}>
    Small lightblue box
  </Box>
)
const mediumBox = (
  <Box size='medium' style={{backgroundColor: 'pink'}}>
    Medium pink box
  </Box>
)
const largeBox = (
  <Box size='large' style={{backgroundColor: 'orange'}}>
    Large orange box
  </Box>
)
const sizeLessBox = (
  <Box>
    sizeless box
  </Box>
)

console.log(smallBox)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {sizeLessBox}
    </div>
  )
}

export default App
