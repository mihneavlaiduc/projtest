import React, { useContext } from "react"
import { useState, useEffect } from "react"
import CardTemplate from "../CardTemplate/CardTemplate"
import { CardListContext } from "../Helper/CardListContext"

export const CardList = () => {

  const { cards, setCards } = useContext(CardListContext)

  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      setCards(data);
    })
  },[])
  return (
    cards.map((card) => {
        return (
            <CardTemplate
            key={card.id}
            firstName={card.firstName} 
            lastName={card.lastName}
            id={card.id}
            email={card.email}
            address={card.address.streetAndNumber}
            zipCode={card.address.postalCode}
            city={card.address.city}
            country={card.address.country}
            gender={card.gender}
            age={card.age}
            activityClass={card.activity_class}
            />
        )
    })
  )

}
