import { useEffect, useState } from "react";
import React from "react";
import { closeModal } from "../utils/closeModal.js";
import { openModal } from "../utils/openModal.js";
import { deleteUser } from "./DELETE-user.js";
import { getUser } from "./GET-user.js";
import CardTemplate from "../components/CardTemplate/CardTemplate.js";

export const GetUsers = () => {
  //const memberCardContainer = document.getElementById("aside-bar");
  const [cardData, setCardData] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setCardData(data);
    })
  },[])
};
