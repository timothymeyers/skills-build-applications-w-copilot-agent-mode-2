import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [users, setUsers] = useState({});

  useEffect(() => {
    // Fetch activities
    fetch('https://expert-happiness-9w4j5v976qc7wx9-8000.app.github.dev/api/activities')
      .then(response => response.json())
      .then(data => setActivities(data));

  },[]);
   
  return (
    <div className="container mt-4">
       
      <h1 className="text-center mb-4">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            
            <th>User</th>
            <th>Activity Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => {
            
            return (
              <tr key={activity._id}>
                <td>{activity.user.username}</td>
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
