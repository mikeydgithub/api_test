
import axios from 'axios';

// function App() {
//   const getHomes = () => {
//     axios.get('https://api.quotable.io/random')
//     .then(res => {
//       console.log(res)
//     }).catch(err => {
//       console.log(err)
//     })
//   }

// https://dev.everdays.com/v2/public/providers?state=mi

function App () {
  type Home = {
    id: number,
    websiteUrl: string,
    phone: string
    address: {
      zip: string,
      state: string,
      city: string,
      street: string
    }
  };

  type GetHomesResponse = {
    data: Home[]
  }

  async function getHomes() {
    try {
      const {data, status } = await axios.get<GetHomesResponse>(
        'https://dev.everdays.com/v2/public/providers?state=mi',
        {
          headers: {
            Accept: 'application/json',
          },
        },
      );

        console.log('response status is: ', status);

        return data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log('error message:', err.message);
        return err.message;
      } else {
        console.log ('unexpected error: ', err);
        return 'An unexpect error occured';
      }
    }
  }

  
  return (
    <div className="App">
      <button onClick={getHomes}>Get Homes</button>
    </div>
   );
  }
  export default App;

