// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitUsername(username)
  }

  const handleChange = (e) => {
    setUsername(e.target.value.toLowerCase())    
  }

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input type="text" id="username" onChange={handleChange} value={username} />
      </div>
      <button type="submit" disabled={!username}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
