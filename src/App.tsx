
// css styling import
import './App.css';
// import usestate, useEffect from react library
import { useState, useEffect } from 'react';

// parent component
// renderes everything from index.tsx
function App() {
  // all states will return an array
  const [state, setState] = useState([])



  // useEffect in a callback function
  useEffect (() => {
    // use fetch to get a promise
    fetch('https://dev.everdays.com/v2/public/providers?state=mi')
    // .then to take the promise and get a response
    // extract json from the response
    .then(response => response.json())
    // resolve the response
    // display and list the datat
    .then(res => console.log(res))
  }, [])

  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
