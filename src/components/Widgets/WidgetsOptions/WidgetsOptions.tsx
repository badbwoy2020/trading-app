import React from "react";
import "./WidgetsOptions.css";

interface Props {
  imageUrl: string;
  text: string;
  color?: string;
}

function WidgetsOptions({ imageUrl, text, color }: Props) {
  return (
    <div className="widgetsOptions">
      <div className="widgetsOptions__container ">
        {color ? (
          <img src={imageUrl} alt="" style={{ color: color }} />
        ) : (
          <img src={imageUrl} alt="" />
        )}
        <p>{text}</p>
      </div>
    </div>
  );
}

export default WidgetsOptions;
