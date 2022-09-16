import React from "react";

import "./WidgetsAmount.css";

interface Props {
  imageUrl?: string;
  imageDown?: string;
  text: string;
  price: string;
  backgroundColor?: string;
  color?: string;
}

function WidgetsAmount({
  imageUrl,
  text,
  price,
  backgroundColor,
  imageDown,
  color,
}: Props) {
  return (
    <div className="widgetsamount">
      <div
        style={{
          backgroundColor: backgroundColor,
          opacity: 0.4,
          borderRadius: "10px",
        }}
        className="widgetsamount-images"
      >
        <img src={imageUrl} alt="" className="image-1" />

        {imageDown && (
          <img
            src={imageDown}
            alt=""
            className="image-2"
            style={{ color: color }}
          />
        )}
      </div>
      <div className="widgetsamount__info">
        <small>{text}</small>
        <h4>${price}</h4>
      </div>
    </div>
  );
}

export default WidgetsAmount;
