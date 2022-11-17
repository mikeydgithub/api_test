
import axios from 'axios';

function App() {
  const getHomes = () => {
    axios.get('https://dev.everdays.com/v2/public/providers?state=mi')
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

