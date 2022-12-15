import React, { useEffect, useState } from "react";
import "../styles/people-component.css";
import AssingTeam from "./AssingTeam";
import DiscoverComponent from "./DiscoverComponent";
import GameComponent from "./GameComponent";

export default function PeopleComponent({ filteredTeam, members }) {
  const [teamMembers, setTeamMembers] = useState(members);
  const filterVariable = filteredTeam;
  const [clickedArray, setClickedArray] = useState([]);
  const [teamArray, setTeamArray] = useState([]);
  const [modArray, setModArray] = useState([]);
  const [show, setShow] = useState();
  const [mode, setMode] = useState();

  const addMemberToInvites = (e) => {
    const clicked = e.target.value;
    console.log(clicked);
    teamArray.push([...clickedArray, clicked][0]);
    // console.log(callParticipants);
    setShow(!show);
  };

  const addMemberToMod = (e) => {
    const clicked = e.target.value;
    console.log(clicked);
    modArray.push([...clickedArray, clicked][0]);
    // console.log(callParticipants);
    setShow(!show);
  };

  useEffect(() => {
    console.log(filteredTeam);
    console.log(teamMembers);
    console.log(modArray);
    console.log(teamArray);
  });
  return (
    <div>
      <div className="people-container">
        people
        {teamMembers
          .filter((person) => person.team.includes(filterVariable))
          .map((filteredPeople) => (
            <div key={filteredPeople.id} className="person-container">
              <img className="avatar-image" src={`${filteredPeople.img}`}></img>

              <p>{filteredPeople.firstName}</p>
              <div className="button-container">
                <button
                  className="meeting-button"
                  value={filteredPeople.firstName}
                  onClick={addMemberToMod}
                >
                  Mod
                </button>
                <button
                  className="meeting-button"
                  value={filteredPeople.firstName}
                  onClick={addMemberToInvites}
                >
                  Invite
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="people-container">
        <div className="mode-container">
          <div>
            <button
              className="mode-button"
              onClick={() => {
                setMode("assign");
              }}
            >
              Assign
            </button>
            <button
              className="mode-button"
              onClick={() => {
                setMode("discover");
              }}
            >
              Discover
            </button>
            <button
              className="mode-button"
              onClick={() => {
                setMode("play");
              }}
            >
              Play
            </button>
          </div>

          {mode === "assign" ? (
            <AssingTeam mod={modArray} invitees={teamArray} />
          ) : mode === "discover" ? (
            <DiscoverComponent team={members} filteredTeam={filteredTeam} />
          ) : mode === "play" ? (
            <GameComponent />
          ) : null}
        </div>
      </div>
    </div>
  );
}
