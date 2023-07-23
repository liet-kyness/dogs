import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import defaultProps from "./Dogs";
import DogsList from "./DogsList";



function Dog() {
    const params = useParams();
    let dog = DogsList.defaultProps.dogs.filter(d => d.name == params.name);
    console.log(dog)

    return (
        <div>
            <DogsList />
            <div className="info">
                <div className="info-list">
                    <div><b>{dog[0].name}</b></div>
                    <div>Age:{dog[0].age}</div>
                    <ul>Info:
                        {dog[0].facts.map((fact, i) => (<li key={i}><i>{fact}</i></li>))}
                    </ul>                 
                </div>
            </div>
        </div>
    )
}


    
    // const [dog, setDog] = useState(null)
    // if (params === defaultProps.dogs.name) {
    //     setDog(params);
    // }
    // return (
    //     <div>
    //         <div>
    //             <DogsList />
    //         </div>
    //         <div>
    //         {dog.name}
    //         {dog.age}
    //         {dog.facts}
    //         </div>
    //     </div>
    // )




export default Dog;