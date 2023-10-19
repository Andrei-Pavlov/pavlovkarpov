import React from 'react';

const Team = () => {
  return (
    <section id="team">
      <h2>Our Team</h2>
      <div className="team-member">
        <img src="team-member-1.jpg" alt="Team Member 1" />
        <h3>John Doe</h3>
        <p>Position: Role in the team</p>
      </div>
      <div className="team-member">
        <img src="team-member-2.jpg" alt="Team Member 2" />
        <h3>Jane Smith</h3>
        <p>Position: Role in the team</p>
      </div>
      {/* Добавьте больше членов команды по аналогии */}
    </section>
  );
};

export default Team;
