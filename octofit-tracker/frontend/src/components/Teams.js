import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://expert-happiness-9w4j5v976qc7wx9-8000.app.github.dev/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Teams</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id}>
              <td>{team.id}</td>
              <td>{team.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;
