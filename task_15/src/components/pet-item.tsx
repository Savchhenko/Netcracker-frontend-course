import React, { useState } from "react";
import Pet from "../types/pet";
import "../styles/pet-item.css";
import PetInfo from "./pet-info";

const PetItem = (props: {pet: Pet}) => {
    const [petInfoVisibility, setPetInfoVisibility] = useState(false);

    function togglePetInfo() {
        console.log("Click was happened");
        setPetInfoVisibility(!petInfoVisibility);
    }

    return (
        petInfoVisibility
        ? <PetInfo pet={props.pet}/>
        : <li className="pets-list__item" onClick={togglePetInfo}>
            <a href="#">{props.pet.type} {props.pet.name}</a>
          </li>
    )
}

export default PetItem;
