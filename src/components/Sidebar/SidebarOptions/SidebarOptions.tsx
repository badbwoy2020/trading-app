import React from "react";
import "./sidebarOptions.css";

interface Props {
  imageUrl: string;
  text: string;
  subtext?: string;
  arrowUrl: string;
  backgroundColor?: string;
  color?: string;
  amount?: number;
}

function SidebarOptions({
  text,
  imageUrl,
  subtext,
  arrowUrl,
  backgroundColor,
  amount,
  color,
}: Props) {
  return (
    <div className="sidebarOptions">
      <div
        className="sidebarOptions__icon"
        style={{
          backgroundColor: backgroundColor,
        }}
      >
        <img src={imageUrl} alt="" />
      </div>

      <div className="sidebarOptions__text">
        <p>{text}</p>
        <div className="sidebarOptions__small">
          {subtext && <small>{subtext}</small>}
        </div>
      </div>
      <div className="sidebarOptions__arrow">
        {arrowUrl && <img src={arrowUrl} alt="" />}
      </div>
    </div>
  );
}

export default SidebarOptions;
