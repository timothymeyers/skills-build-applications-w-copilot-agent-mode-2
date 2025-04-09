import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch('https://expert-happiness-9w4j5v976qc7wx9-8000.app.github.dev/api/leaderboard')
      .then(response => response.json())
      .then(data => setLeaders(data));
  }, []);

  return (
    <div>
      <h1>Leaderboard</h1>
      <ul>
        {leaders.map(leader => (
          <li key={leader.id}>{leader.name} - {leader.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
