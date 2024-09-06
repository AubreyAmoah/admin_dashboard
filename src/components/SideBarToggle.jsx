import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SideBarToggle = ({ isVisible, toggleVisible }) => {
  return (
    <button
      className="min-[768px]:hidden absolute top-[2px] left-[5px] text-[30px] rounded-full z-50"
      onClick={toggleVisible}
    >
      <FontAwesomeIcon icon={isVisible ? faToggleOff : faToggleOn} />
    </button>
  );
};

export default SideBarToggle;
