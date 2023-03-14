import './App.css';
import React, { useEffect, useState } from "react";


function App() {
  const [users, setUsers] = useState([])
  const [userData, setUserData] = useState({});
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  const setSelectedUserData = (user) => {
    delete user[
      'address'
    ];
    delete user[
      'company'
    ];
    setUserData(user);
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h2>
        User Data
      </h2>
      {users.length > 0 && (
        <table>
          <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td colSpan={2}>
                {user.name}
              </td>
              <td>
                <button onClick={() => setSelectedUserData(user)}>
                  show full details
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      )}
        <table className='table-details'>
          <tbody>
            {Object.keys(userData).map(key => (
              <tr key={userData['id']}>
                <td colSpan={2}>
                  {key}
                </td>
                <td>
                  {userData[key]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default App;
