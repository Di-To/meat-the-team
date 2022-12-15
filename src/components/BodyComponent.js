import React from "react";
import "../styles/body-component.css";
import { teams, members, icebreakers } from "../mock-data";
import TeamsComponent from "./TeamsComponent";

export default function BodyComponent() {
  return (
    <div className="flex-container">
      <TeamsComponent team={teams} members={members} />
    </div>
  );
}
