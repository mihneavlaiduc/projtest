import AddMember from "../AddMember/AddMember.js";
import React, { useState } from "react";
import { useEffect } from "react";
import { GetUsers } from "../../scripts/GET-users.js";
import EditMember from "../EditMember/EditMember.js";
import CardTemplate from "../CardTemplate/CardTemplate.js";
import { CardList } from "../CardList/CardList.js";
import { CardListContext } from "../Helper/CardListContext.js";
import { EditCardContext } from "../Helper/EditCardContext.js";

const Base = () => {

  const [cardToEdit, setCardToEdit] = useState(null);
  const [cards, setCards] = useState([]);


  return (
    <div className="layout">
      <nav className="navbar">
        <div className="navbar-title">Sport club members</div>
      </nav>
      <div className="main-body" id="main-body">
        <CardListContext.Provider value={{ cards, setCards, cardToEdit, setCardToEdit }}>
          <aside id="aside-bar">
            <CardList />
          </aside>
          <main id="content" className="content">
            <AddMember />
            <EditMember />
            <footer>
              <div id="footer-info">
                <ul>
                  <li id="footer-recent-news">Recent News</li>
                  <li id="footer-about-us">About Us</li>
                  <li id="footer-services">Services</li>
                  <li id="footer-contact-us">Contact Us</li>
                  <div></div>
                  <div></div>
                </ul>
              </div>
            </footer>
          </main>
        </CardListContext.Provider>
      </div>
    </div>
  );
};

export default Base;
