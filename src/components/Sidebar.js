import React from "react";
import "../css/Sidebar.css";

const Sidebar = () => (
  <aside className="sidebar">
    <ul>
      <li style={{ marginBottom: "20px" }}>Home</li>
      <li style={{ marginBottom: "30px" }}>Public
        <ul>
            <li>Questions</li>
            <li>Tags</li>
            <li>Users</li>
        </ul>
      </li>
      <li style={{ marginBottom: "20px" }}>Collectives
        <ul><li>Explore Jobs</li></ul>
      </li>
      <li style={{ marginBottom: "20px" }}>Find Jobs
        <ul>
            <li>Jobs</li>
            <li>Companies</li>
        </ul>
      </li>
      <li style={{ marginBottom: "20px" }}>Teams
        <ul><li>Create a Team</li></ul>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
