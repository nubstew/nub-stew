import { useEffect, useState } from 'react';
import axios from 'axios';

interface User {
  userId: number;
  id: string;
  name: string;
  password: string;
}

const MyPage = (): JSX.Element => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const instance = axios.create({
        baseURL: 'http://localhost:3000',
      });
  
      instance
        .get('/api/users')
        .then((response) => {
          setUser(response.data[0]); console.log(response)})
        .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}!</h2>
          <p>Your id is {user.id}.</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyPage;