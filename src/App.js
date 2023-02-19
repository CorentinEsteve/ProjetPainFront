import axios from 'axios';
import './App.css';
import Header from './components/Header';
import Order from './components/Order';
import Products from './components/Products';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const USER_TOKEN = process.env.REACT_APP_USER_TOKEN;
  
  useEffect(() => {
    const getData = async () => {
      try {
        const AuthString = 'Bearer '.concat(USER_TOKEN); 
        const response = await axios.get(
          `http://localhost:3001/api/products`,
          { headers: { Authorization: AuthString }}
          );
          setData(Object.values(response.data))
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Order />
        <Products data={data} />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
