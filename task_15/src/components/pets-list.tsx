import React, { useState, useEffect } from "react";
import Pet from "../types/pet";
import PetItem from './pet-item';
import AppService from "../services/service";

const PetsList = () => {
    const service = new AppService;
    let petsListToRender = service.getPetList();

    const [pets, setPets] = useState<Pet[]>([]);
    const [catsVisibility, setCatsVisibility] = useState<boolean>(true);
    const [btnText, setBtnText] = useState<string>("To hide cats");

    useEffect(() => {
        setPets(petsListToRender);
      }, [])

    function toggleCatsVisibility() {
        if (catsVisibility === true) {
            petsListToRender = service.getPetList().filter(pet => pet.type !== "Cat");
            setPets(petsListToRender);
            setBtnText("To show cats");
        } else {
            setPets(petsListToRender);
            setBtnText("To hide cats");
        }
        setCatsVisibility(!catsVisibility);
    }

    return (
        <div>
            <ul className="pets-list">
            {pets.map((pet: Pet) => 
                <PetItem pet={pet} key={pet.id}/>
            )}
            </ul>
            <button onClick={toggleCatsVisibility}>
                {btnText}
            </button>
        </div>
    )
};

export default PetsList;