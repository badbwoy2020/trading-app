import React from "react";
import "./WidgetStyling.css";

interface Props {
  widgetStylingImg: string;
  widgetStylingIcon: string;
  widgetStylingText: string;
  widgetStylingDot?: string;
  widgetStylingTime: string;
  widgetStylingSmall: string;
  widgetStylingAmount: string;
  color?: string;
}

function WidgetStyling({
  widgetStylingAmount,
  widgetStylingDot,
  widgetStylingIcon,
  widgetStylingImg,
  widgetStylingSmall,
  widgetStylingText,
  widgetStylingTime,
  color,
}: Props) {
  return (
    <div className="widgetStyling">
      <img src={widgetStylingImg} alt="" />
      <div className="widgetStyling__text">
        <p>{widgetStylingText}</p>
        <small>{widgetStylingTime}</small>
      </div>
      <div className="widgetStyling__icons">
        <h2 style={{ backgroundColor: widgetStylingDot }}></h2>
        <small>{widgetStylingSmall}</small>
      </div>
      <div className="widgetStyling__amount">
        <img src={widgetStylingIcon} alt="" />
        {color ? (
          <p style={{ color: color }}>{widgetStylingAmount}</p>
        ) : (
          <p>{widgetStylingAmount}</p>
        )}
      </div>
    </div>
  );
}

export default WidgetStyling;
