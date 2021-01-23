
import './App.css';
import React, { useState, useCallback } from "react"

function App() {
  const nameEl = React.useRef(null);
  const passEl = React.useRef(null);
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const onClick = useCallback(() => {

    alert("username: " + userName + "\npassword: " +
      passWord);
  });

  const onPassChange = useCallback(() => {
    setPassWord(passEl.current.value);
  })

  const onNameChange = useCallback(() => {
    setUserName(nameEl.current.value);
  });

  const forgotPass = useCallback(() => {
    alert("Too bad lmao be better");
  })


  return (
    <div className="App">
      <header className="App-header">

        <p>
          Login in to begin
        </p>
        <form onSubmit={onClick}>
          <label>
            UserName:
            <input type="text" placeholder="username" ref={nameEl} onChange={onNameChange} />
          </label>
          <label>
            Password:
            <input type="password" placeholder="password" ref={passEl} onChange={onPassChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <button onClick={forgotPass}>
          Forgot Your Password?
        </button>
      </header>
    </div>
  );
}

export default App;
