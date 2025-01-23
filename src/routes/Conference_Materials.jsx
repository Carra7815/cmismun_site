import React from "react";
import ExternalLink from "../components/ExternalLink";

function Conference_Materials() {
  return (
    <div className="std-page">
      <h2>Our Conference Materials</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae animi
        iusto itaque ab doloremque exercitationem dolorum saepe numquam eius?
        Labore rem vitae rerum cumque explicabo facilis eaque velit itaque sunt.
      </p>
      <ExternalLink
        text="View Rules of Procedures"
        href="https://docs.google.com/document/d/1sLXkAknheinQDwDsqo84VQCyDeh2cp8NfN4dnqsmTlQ/edit?usp=sharing"
      />
      <ExternalLink
        text="View Country, Committee, and Delegate List"
        href="https://docs.google.com/spreadsheets/d/1zsxsksAa24qsdwWmV0D89KFdc8-79mRic_aWa1ZeAN8/edit?gid=0#gid=0"
      />
    </div>
  );
}

export default Conference_Materials;
