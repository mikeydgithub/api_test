
// css styling import
import './App.css';
// import usestate, useEffect from react library
import { useState, useEffect } from 'react';

// parent component
// renderes everything from index.tsx
function App() {
  // all states will return an array
  const [state, setState] = useState([])

  // dev.everdays.com/v2/public/providers?state=mi

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
      <button>Get Homes</button>
    </div>
  );
}

export default App;


// import axios from 'axios';

// function App() {
//   const getHomes = () => {
//     axios.get('https://api.quotable.io/random')
//     .then(res => {
//       console.log(res)
//     }).catch(err => {
//       console.log(err)
//     })
//   }
  
//   return (
//     <div className="App">
//       <button onClick={getHomes}>Get Homes</button>
//     </div>
//    );
//   }
//   export default App;
