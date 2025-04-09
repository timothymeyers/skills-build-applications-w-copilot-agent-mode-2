import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    // Fetch activities
    fetch('https://expert-happiness-9w4j5v976qc7wx9-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));

    // Fetch users
    fetch('https://expert-happiness-9w4j5v976qc7wx9-8000.app.github.dev/api/users')
      .then(response => response.json())
      .then(data => {
        const usersMap = {};
        data.forEach(user => {
          usersMap[user._id] = user;
        });
        setUsers(usersMap);
      });
  }, []);

  const extractUserId = (userString) => {
    const match = userString.match(/\((.*?)\)/);
    return match ? match[1] : null;
  };

  return (
    <div className="container mt-4">
       
      <h1 className="text-center mb-4">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Activity Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => {
            const userId = extractUserId(activity.user);
            
            return (
              <tr key={activity._id}>
                <td>{activity._id}</td>
                <td>{users[userId]?.name || userId}</td>
                <td>{activity.activity_type}</td>
                <td>{activity.duration}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
