import React from "react";
import "../styles/pet-info.css";
import Pet from "../types/pet";

const PetInfo = (props: {pet: Pet}) => {
    return (
        <div className="pet-info">
            <h2>{props.pet.type} {props.pet.name}</h2>
            <span>{props.pet.gender}, {props.pet.age} y.o., {props.pet.weight} kg</span>
            <p>- {props.pet.superPower}</p>
        </div>
    )
}

export default PetInfo;