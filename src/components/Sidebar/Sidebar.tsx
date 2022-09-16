import React from "react";
import "./sidebar.css";

import {
  arrow,
  avatar,
  border,
  eclipse,
  electric,
  income,
  incomebill,
  incomej,
  miniheader1,
  miniheader2,
  month,
  settings,
  ssidebar1,
  ssidebar2,
  ssidebar3,
  ssidebar4,
  ssidebar5,
  waterbill,
} from "../Sidebar/imports";
import SidebarOptions from "./SidebarOptions/SidebarOptions";
import SidebarOptionsAmount from "./SidebarOptions/SidebarOptionsAmount";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__mini">
        <div className="sidebar__mini-header">
          <img src={miniheader1} alt="" />
          <img src={miniheader2} alt="" />
        </div>
        <div className="sidebar__mini-icons">
          <img src={ssidebar1} alt="unable to load" />
          <img src={ssidebar2} alt="unable to load" />
          <img src={ssidebar3} alt="unable to load" />
          <img src={ssidebar4} alt="unable to load" />
          <img src={ssidebar5} alt="unable to load" />
          <img src={ssidebar3} alt="unable to load" />
        </div>

        <div className="sidebar__mini-footer">
          <h3>+</h3>
        </div>
      </div>
      <div className="sidebar__large">
        <div className="sidebar__large-header">
          <div className="sidebar__large-header__icons">
            <img src={avatar} alt="avatar" className="sidebar__icons-avatar" />
            <img src={border} alt="border" className="sidebar__icons-border" />
          </div>
          <div className="sidebar__large-header__subtext">
            <h4>BN Niasky</h4>
            <small>joined 6 months ago</small>
          </div>
        </div>
        <div className="sidebar__large-body">
          <SidebarOptions
            imageUrl={eclipse}
            text="Goals"
            arrowUrl={arrow}
            backgroundColor="#FFF0E6"
          />

          <SidebarOptions
            imageUrl={month}
            text="Monthly Plan"
            arrowUrl={arrow}
            backgroundColor="#ECEAFE"
          />
          <SidebarOptions
            imageUrl={settings}
            text="Settings"
            arrowUrl={arrow}
            backgroundColor="#E5F7FF"
          />
        </div>
        <div className="sidebar__barchat sidebar__margin">
          {/* <Chart /> */}
        </div>
        <hr />

        <div className="sidebar__large-body sidebar__marginTop">
          <SidebarOptionsAmount
            backgroundColor="#3629B7"
            imageUrl={waterbill}
            text="Water Bill"
            amount="-$200"
            color="#FF4267"
            uptext="Today"
          />
          <SidebarOptionsAmount
            backgroundColor="#FF4267"
            imageUrl={income}
            text="Income Salary Oct"
            amount="+$1200"
            color="#3629B7"
            uptext="Yesterday"
          />
          <SidebarOptionsAmount
            backgroundColor="#0890FE"
            imageUrl={electric}
            text="Electric Bill"
            amount="+$400"
            color="#FF4267"
            subtext="successfully"
          />
          <SidebarOptionsAmount
            backgroundColor="#FFAF2A"
            imageUrl={incomej}
            text="Income: Jane transfer"
            amount="+$500"
            color="#3629B7"
          />
          <SidebarOptionsAmount
            backgroundColor="#52D5BA"
            imageUrl={incomebill}
            text="Income Bill"
            amount="-$100"
            color="#FF4267"
            subtext="successfully"
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
