import React, { useState } from "react";
import PeopleComponent from "./PeopleComponent";

export default function TeamsComponent({ team, members }) {
  const [selectedTeam, setSelectedTeam] = useState(team[0]);

  function handleTeamChange(e) {
    setSelectedTeam(e.target.value);
    console.log(selectedTeam);
  }

  return (
    <div>
      <select value={selectedTeam} onChange={handleTeamChange}>
        {team.map((team, index) => {
          return (
            <option key={team} value={team}>
              {team}
            </option>
          );
        })}
      </select>
      <PeopleComponent filteredTeam={selectedTeam} members={members} />
    </div>
  );
}
