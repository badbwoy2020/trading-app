import React from "react";
import "./SidebarOptionsAmount.css";

interface Props {
  imageUrl: string;
  text: string;
  subtext?: string;
  backgroundColor?: string;
  color?: string;
  amount?: string;
  uptext?: string;
}

function SidebarOptionsAmount({
  backgroundColor,
  text,
  subtext,
  amount,
  color,
  imageUrl,
  uptext,
}: Props) {
  return (
    <div className="sidebarOptionsAmount">
      <div className="sidebarOptionsAmount__flex">
        {uptext && (
          <small className="sidebarOptionsAmount__large-body__small">
            {uptext}
          </small>
        )}

        <div
          className="sidebarOptionsAmount__icon"
          style={{
            backgroundColor: backgroundColor,
            marginRight: 12,
            cursor: "pointer",
          }}
        >
          <img src={imageUrl} alt="" />
        </div>
      </div>

      <div className="sidebarOptionsAmount__text">
        <p>{text}</p>
        <div className="sidebarOptionsAmount__small">
          {subtext && <small>{subtext}</small>}
        </div>
      </div>
      <div className="sidebarOptionsAmount__amount" style={{ color: color }}>
        {amount && <p>{amount}</p>}
      </div>
    </div>
  );
}

export default SidebarOptionsAmount;
