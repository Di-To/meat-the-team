import React, { useEffect, useState } from "react";
import "../styles/discover-component.css";

export default function DiscoverComponent({ filteredTeam, team }) {
  const fullTeam = team;
  const filterVariable = filteredTeam;
  const [selectedMimoan, setSelectedMimoan] = useState();

  const handleSelectedMimoan = (e) => {
    setSelectedMimoan(e.target.value);
  };

  useEffect(() => {
    console.log(selectedMimoan);
  });

  return (
    <div className="discover-component-container">
      <select value={selectedMimoan} onChange={handleSelectedMimoan}>
        {fullTeam
          .filter((person) => person.team.includes(filterVariable))
          .map((filteredPeople) => (
            <option key={filteredPeople.person} className="person-container">
              <p>{filteredPeople.firstName}</p>
            </option>
          ))}
      </select>
      {selectedMimoan
        ? fullTeam
            .filter((human) => human.firstName.includes(`${selectedMimoan}`))
            .map((fperson) => (
              <div className="profile">
                <div className="profile-picture">
                  <img className="discover-avatar-image" src={fperson.img} />
                </div>
                <div className="profile-text">
                  <p>
                    Name: {fperson.firstName} {fperson.lastName}
                  </p>
                  <p>Short description: {fperson.shortDescription}</p>
                  <p>Hobbies: {fperson.hobbies}</p>
                  <p>Linkedin: {fperson.linkedin}</p>
                </div>
              </div>
            ))
        : null}
    </div>
  );
}
