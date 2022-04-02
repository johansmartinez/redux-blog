import { useState, useEffect } from 'react';
import axios from 'axios';
import './app.css';

const App=()=> {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
      setUsers(response.data)
    }).catch(()=>{

    })
  }, [])
  

  return (
    <div className='div-center'>
      <table className='table-container'>
        <thead>
          <tr>
            <th>
              NOMBRE
            </th>
            <th>
              CORREO
            </th>
            <th>
              ENLACE
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map(e=>(
            <tr key={e.id}>
              <td>
                {e.name}
              </td>
              <td>
                {e.email}
              </td>
              <td>
                {e.website}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export  {App};
