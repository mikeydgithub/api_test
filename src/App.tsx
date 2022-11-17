
import axios from 'axios';

function App() {
  const getHomes = () => {
    axios.get('https://api.quotable.io/random')
    .then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className="App">
      <button onClick={getHomes}>Get Homes</button>
    </div>
   );
  }
  export default App;

