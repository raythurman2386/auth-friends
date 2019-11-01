import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosConfig';
import Friend from './Friend';

const Dashboard = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get('/friends')
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>My Friends</h1>
      {friends && friends.map(item => <Friend key={item.id} friend={item} />)}
    </div>
  );
};

export default Dashboard;
