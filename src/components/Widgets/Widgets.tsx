import React from "react";
import { ssidebar1, ssidebar3 } from "../Sidebar/imports";
import {
  arrdown,
  arrup,
  gift,
  profile,
  union,
  widgetsbattery,
  widgetsettings,
  message,
  widgetsloan,
  basket,
  pin,
  pase,
  amazon,
  rabbit,
  addon,
  chart,
  pencil,
  pensmall,
  search,
  item1,
  DS,
  item2,
  item3,
  item4,
  nextrr,
  widgets1,
  widgets2,
  widgets3,
  dakota,
  amountS,
  iceland,
  spain,
  avatarBg,
} from "./Imports";
import "./widgets.css";
import WidgetsAmount from "./WidgetsOptions/WidgetsAmount";
import WidgetsOptions from "./WidgetsOptions/WidgetsOptions";
import WidgetStyling from "./WidgetsOptions/WidgetStyling";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h4>Welcome back Niasky</h4>
        <div className="widgets__header-icon">
          <img src={union} alt="" className="widgets__union" />
          <div className="widgets__button">
            <img src={gift} alt="" />
            <p>2 NEW UPDATES</p>
          </div>
          <img src={profile} alt="" className="widgets__profile" />
        </div>
      </div>
      <div className="widgets__content">
        <div className="widgets__main">
          <div className="widgets__main-icons">
            <WidgetsOptions imageUrl={pencil} text="Home Loan" />
            <WidgetsOptions imageUrl={widgetsloan} text="Car Loan" />
            <WidgetsOptions imageUrl={widgetsettings} text="Maintenance" />
            <WidgetsOptions imageUrl={widgetsbattery} text="Boosters" />
          </div>

          <div className="widgets__main-amount">
            <WidgetsAmount
              imageUrl={arrup}
              imageDown={arrdown}
              text="Harvested Losses"
              price="0.00"
              backgroundColor="#ECEAFE"
            />
            <WidgetsAmount
              imageUrl={addon}
              text="Total earnings"
              price="10,596.8"
              backgroundColor=" #FFF0E6"
              color="#FA5F1C"
            />
          </div>

          <div className="widgets__main-amount">
            <WidgetsAmount
              imageUrl={chart}
              text="Total net worth"
              price="5,250.90"
              backgroundColor="#427A0A"
            />
            <WidgetsAmount
              imageUrl={rabbit}
              text="Total for all goals"
              price="5,596.80"
              backgroundColor="#E5F7FF"
            />
          </div>

          <h4 className="widgets__activity-header">Recent Activity</h4>
          <div className="widgets__activity-input">
            <div className="widgets__activity-text">
              <h4 className="main-text">History</h4>
              <h4>Upcoming</h4>
            </div>
            <div className="widgets__activity-input__text">
              <div className="widgets__input">
                <input type="text" placeholder="6 sept 13-20" />
              </div>
              <h4>+</h4>
            </div>
          </div>
          <small className="widgets__activity-small">13 sept,2020</small>
          <div className="widgets__margin-bottom-big">
            <WidgetStyling
              widgetStylingImg={amazon}
              widgetStylingText="Amazon Support"
              widgetStylingTime="10 sept 2020, at 3:30pm"
              widgetStylingDot="#EB5642"
              widgetStylingSmall="Supplies"
              widgetStylingIcon={pin}
              widgetStylingAmount="-$10,100.00"
            />
          </div>
          <small className="widgets__activity-small">13 sept,2020</small>
          <div className="widgets__margin-last">
            <WidgetStyling
              widgetStylingImg={basket}
              widgetStylingText="Roland GmbH"
              widgetStylingTime="10 sept 2020, at 3:30pm"
              widgetStylingDot=" #623CE7"
              widgetStylingSmall="Marketing"
              widgetStylingIcon={pin}
              widgetStylingAmount="+$500,400.00"
              color="#623CE7"
            />
            <WidgetStyling
              widgetStylingImg={amazon}
              widgetStylingText="Bank of America"
              widgetStylingTime="10 sept 2020, at 3:30pm"
              widgetStylingDot="#C148EB"
              widgetStylingSmall="Office Supplies"
              widgetStylingIcon={pin}
              widgetStylingAmount="-$10,100.00"
            />
            <WidgetStyling
              widgetStylingImg={pase}
              widgetStylingText="Bank of America"
              widgetStylingTime="10 sept 2020, at 3:30pm"
              widgetStylingDot="#0EA7B1"
              widgetStylingSmall="General Banking"
              widgetStylingIcon={pin}
              widgetStylingAmount="-$20,905.00"
            />
          </div>
        </div>
        <div className="widgets__reviews">
          <div className="widgets__reviews-header">
            <div className="widgets__reviews-text">
              <h4>Recent Contacts</h4>
              <small>18 recipients</small>
            </div>
            <div className="widgets__reviews-header__icons">
              <img src={pensmall} alt="" className="pen-1" />
              <img src={search} alt="" />
            </div>
          </div>
          <div className="widgets__reviews-images">
            <div>
              <img src={item1} alt="" />
            </div>
            <div className="ds-image">
              <img src={DS} alt="" />
            </div>
            <div className="ds-border">
              <img src={item2} alt="" />
            </div>
            <div>
              <img src={item3} alt="" />
            </div>
            <div>
              <img src={item4} alt="" />
            </div>
            <div>
              <img src={nextrr} alt="" />
            </div>
          </div>
          <div className="widgets__reviews-card">
            <div className="widgets__reviews-card-header">
              <h4>Group</h4>
              <h2>Party</h2>
            </div>
            <div className="widgets__reviews-card-icons">
              <div className="widgets__reviews-card-margin">
                <div className="wigets__reviews-card-icons__avatar">
                  <img src={widgets1} alt="" />
                  <img src={widgets2} alt="" />
                  <img src={widgets3} alt="" />
                </div>
                <div className="widgets__reviews-card-icons__border">
                  <p>+5</p>
                </div>
              </div>
              <div className="widgets__reviews-card-icons__message">
                <img src={message} alt="" />
                <p></p>
              </div>
            </div>
            <div className="widgets__reviews-dakota-milk">
              <div className="widgets__reviews-dakota-container">
                <img src={dakota} alt="" />
                <div className="widgets__reviews-text">
                  <h4>dakota milk</h4>
                  <small>$420.00</small>
                </div>
              </div>
              <div className="widgets__reviews-arrow">
                <img src={nextrr} alt="" />
              </div>
            </div>
          </div>
          <h4 className="widgets__reviews-send-money">Send Money</h4>
          <div className="widgets__reviews-mastercard">
            <div className="widgets__reviews-mastercard__text">
              <div className="widgets__reviews-mastercard__img">
                <h2></h2>
                <h3></h3>
              </div>
              <h4>Debit</h4>
            </div>

            <div className="widgets__reviews-mastercard__amount">
              <p>$10,976</p>
              <img src={nextrr} alt="" />
            </div>
          </div>
          <div className="widgets__reviews-country">
            <div className="widgets__reviews-country__header">
              <img src={amountS} alt="" />
              <p style={{ marginLeft: 4 }}>Enter the amount</p>
            </div>
            <div className="widgets__reviews-country-image">
              <span>$</span>{" "}
              <h1 style={{ color: "black", marginLeft: 3 }}>800.00</h1>
              <div className="widgets__reviews__img">
                <img src={iceland} alt="" />
                <img src={spain} alt="" />
              </div>
            </div>
          </div>
          <div className="widgets__reviews-avater">
            <div className="widgets__reviews__text-avatar">
              <img src={avatarBg} alt="" />
              <p>Abdulraheem Opeyemi</p>
            </div>
            <div className="widgets__reviews__dotted">
              <p>+</p>
            </div>
          </div>
          <div className="widgets__reviews__button">
            <p>Send Money</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
