import React, { useState, useEffect } from 'react';

const url = 'http://localhost:2000/api/product/';

// second argument

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users.data);
    console.log(users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className='users'>
        {users.map((user) => {
          const { id, name, description,price,inventory_level } = user;
          return (
            <li key={id}>
              <div>
                <h4>{name}</h4>
                <a>{description}</a>
                {price}
                {inventory_level}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;