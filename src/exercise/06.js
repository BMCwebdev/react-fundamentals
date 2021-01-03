// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

// 🐨 add a submit event handler here (`handleSubmit`).
// 💰 Make sure to accept the `event` as an argument and call
// `event.preventDefault()` to prevent the default behavior of form submit
// events (which refreshes the page).
//
// 🐨 get the value from the username input (using whichever method
// you prefer from the options mentioned in the instructions)
// 💰 For example: event.target.elements[0].value
// 🐨 Call `onSubmitUsername` with the value of the input

// 🐨 add the onSubmit handler to the <form> below

// 🐨 make sure to associate the label to the input.
// to do so, set the value of 'htmlFor' prop of the label to the id of input

function UsernameForm({onSubmitUsername}) {
  const [inputValue, setInputValue] = React.useState('')
  const inputEl = React.useRef()
  const handleSubmit = e => {
    e.preventDefault()
    onSubmitUsername(inputValue)
  }
  // const [validState, setValidState] = React.useState(true)
  // const handleChange = e => {
  //   const value = e.target;
  //   if (value === value.toLowercase()) {
  //     setValidState(true)
  //   } else {
  //     setValidState(false)
  //   }
  // }

  function handleChange(e) {
    const {value} = e.target
    setInputValue(value.toLowerCase())
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          name="username"
          type="text"
          ref={inputEl}
          onChange={handleChange}
          value={inputValue}
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
