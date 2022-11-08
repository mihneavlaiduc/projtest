import React from "react";
import { useState, useContext } from "react";
import { CardListContext } from "../Helper/CardListContext";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  address: {
    streetAndNumber: "",
    postalCode: "",
    city: "",
    country: "",
  },
  sports: [],
  gender: "",
  age: 0,
  activity_class: "",
};

const AddMember = () => {
  const { cards, setCards } = useContext(CardListContext);
  const [cardObject, setCardObject] = useState({
    ...INITIAL_STATE,
    id: crypto.randomUUID(),
  });

  return (
    <div id="add-member-container">
      <div id="add-member-container-content">
        <div id="add-member-container-top">
          <div id="add-title"> Add new member</div>
          <div id="user-saved-toast" style={{ display: "none" }}>
            <div id="saved-check">
              <div id="save-check-circle">
                <div id="save-tick-mark"></div>
              </div>
            </div>
            <div id="saved-text">User Saved Succesfully</div>
          </div>
        </div>
        <hr></hr>
        <div className="first-row">
          <div className="first-name-wrapper">
            <label className="first-name">First Name</label>
            <input
              id="add-first-name-text"
              type="text"
              required
              value={cardObject.firstName}
              onChange={(event) => {
                setCardObject({ ...cardObject, firstName: event.target.value })
              }}
            ></input>
          </div>
          <div className="last-name-wrapper">
            <label className="last-name">Last Name</label>
            <input
              id="add-last-name-text"
              type="text"
              required
              value={cardObject.lastName}
              onChange={(event) => {
                setCardObject({ ...cardObject, lastName: event.target.value });
              }}
            ></input>
          </div>
        </div>
        <div id="second-row" className="second-row">
          <div id="address-wrapper" className="address-wrapper">
            <label className="address">Address</label>
            <input
              id="add-address-text"
              type="text"
              required
              value={cardObject.address.streetAndNumber}
              onChange={(event) => {
                setCardObject({ ...cardObject, address: { ...cardObject.address, streetAndNumber: event.target.value } })
              }}
            ></input>
          </div>
          <div className="zip-code-wrapper">
            <label className="zip-code">Zip Code</label>
            <input
              id="add-zip-code-text"
              type="text"
              required
              onChange={(event) => {
                setCardObject({ ...cardObject, address: { ...cardObject.address, postalCode: event.target.value } })
              }}
            ></input>
          </div>
          <div className="city-wrapper">
            <label className="city">City</label>
            <input
              id="add-city-text"
              type="text"
              required
              onChange={(event) => {
                setCardObject({ ...cardObject, address: { ...cardObject.address, city: event.target.value } })
              }}
            ></input>
          </div>
          <div className="country-wrapper">
            <label className="country">Country</label>
            <input
              id="add-country-text"
              type="text"
              required
              onChange={(event) => {
                setCardObject({ ...cardObject, address: { ...cardObject.address, country: event.target.value } })
              }}
            ></input>
          </div>
        </div>
        <div id="third-row" className="third-row">
          <div className="gender-wrapper">
            <label className="gender">Gender</label>
            <select defaultValue={""} id="add-gender" onChange={(e) => {
              console.log(e.target.value)
            }}>
              <option value="" disabled="disabled"></option>
              <option value="male"> Male </option>
              <option value="female"> Female </option>
              <option value="not-specified"> Not Specified </option>
            </select>
          </div>
          <div className="age-wrapper">
            <label className="age">Age</label>
            <input
              id="add-age-text"
              type="text"
              required
            // onChange={(event) => {
            //     setAge(event.target.value);
            // }}
            ></input>
          </div>
          <div className="activity-class-wrapper">
            <label className="activity-class">Activity class</label>
            <div className="activity-class-buttons">
              <div className="activity-class-professional">
                <input
                  type="radio"
                  name="choose-add"
                  id="add-professional"
                ></input>
                <label htmlFor="professional">professional</label>
              </div>
              <div className="activity-class-amateur">
                <input type="radio" name="choose-add" id="add-amateur"></input>
                <label htmlFor="amateur">amateur</label>
              </div>
            </div>
          </div>
        </div>
        <div id="fourth-row" className="fourth-row">
          <div className="practiced-sports-wrapper">
            <div className="practiced-sports">
              <div>Practiced Sports</div>
              <div className="sports">
                <div>
                  <input
                    type="checkbox"
                    name="running"
                    id="add-running"
                    className="input-sport"
                  ></input>
                  <label htmlFor="running" className="add-sport">
                    {" "}
                    running{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="cycling"
                    id="add-cycling"
                    className="input-sport"
                  ></input>
                  <label htmlFor="cycling" className="add-sport">
                    {" "}
                    cycling{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="swimming"
                    id="add-swimming"
                    className="input-sport"
                  ></input>
                  <label htmlFor="swimming" className="add-sport">
                    {" "}
                    swimming{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="walking"
                    id="add-walking"
                    className="input-sport"
                  ></input>
                  <label htmlFor="walking" className="add-sport">
                    {" "}
                    walking{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name="skiing"
                    id="add-skiing"
                    className="input-sport"
                  ></input>
                  <label htmlFor="skiing" className="add-sport">
                    {" "}
                    skiing{" "}
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="save-wrapper">
            <button
              onClick={() => {
                setCards([...cards, cardObject]);
                setCardObject({ ...INITIAL_STATE, id: crypto.randomUUID() });
              }}
              id="save-button"
              className="save-button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMember;
