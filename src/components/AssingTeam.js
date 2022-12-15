import React, { useEffect, useState } from "react";
import "../styles/assign-team.css";
import { teams, members, emailToTeam, emailToMod } from "../mock-data";

export default function AssingTeam({ mod, invitees, teams, memebers }) {
  const moderator = mod;
  const allWorkers = members;
  const invitedCoworkers = invitees;
  const mailForColleagues = emailToTeam;
  const mailForMod = emailToMod;
  const [emailList, setEmailList] = useState("");
  const modEmail = mod + "@getmimo.com";

  function assembleEmails(param) {
    let emailList = "";
    for (let i = 0; i < param.length; i++) {
      emailList += param[i] + "@getmimo.com, ";
    }
    setEmailList(emailList);
  }

  useEffect(() => {
    console.log(invitedCoworkers);
    console.log(mailForColleagues);
    console.log(modEmail);
    console.log(moderator);
    console.log(allWorkers);
  });

  return (
    <div className="assign-team-container">
      <div className="flex-team-container">
        <div className="mod-space">
          MOD
          {moderator.length >= 1 ? (
            <>
              {members
                .filter((x) => x.firstName.includes(moderator))
                .map((y) => (
                  <>
                    <img className="avatar-image-people" src={`${y.img}`}></img>
                    <p>{moderator}</p>
                  </>
                ))}
            </>
          ) : null}
        </div>
        <div className="team-space">
          <p>TEAM</p>
          <div className="inner-team-space">
            {invitedCoworkers.map((person) => (
              <div key={person.id} className="teammate-div">
                <img
                  className="avatar-image-people"
                  src="https://robohash.org/person-10.png"
                ></img>
                <div>{person}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="invite-button-container">
        <button
          className="invite-button"
          onClick={() => assembleEmails(invitedCoworkers)}
        >
          {" "}
          <a
            href={`mailto:${emailList}?subject=${mailForColleagues[0].subject}&body=${mailForColleagues[0].body}`}
          >
            Invite team
          </a>
        </button>
        <button className="invite-button">
          <a
            href={`mailto:${modEmail}?subject=${mailForMod[0].subject}&body=${mailForMod[0].body}`}
          >
            Invite Mod
          </a>
        </button>
      </div>
    </div>
  );
}
