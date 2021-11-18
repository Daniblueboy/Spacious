import React, {useState} from 'react'
import { Row } from "react-bootstrap";
import planet1 from "../assets/planets/planet-1.svg"
import planet2 from "../assets/planets/planet-2.svg"
import planet3 from "../assets/planets/planet-3.svg"
import planet4 from "../assets/planets/planet-4.svg"
import planet5 from "../assets/planets/planet-5.svg"
import planet6 from "../assets/planets/planet-6.svg"
import planet7 from "../assets/planets/planet-7.svg"
import planet8 from "../assets/planets/planet-8.svg"
import planet9 from "../assets/planets/planet-9.svg"
import PlanetsCard from './PlanetsCard';
import CreatePlanet from './CreatePlanet';


const PlanetsData = () => {
    const Planets = [
        {
          name: "Planet Alpha",
          population: 235,
          image: planet1,
          id: 1,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet2,
          id: 2,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet3,
          id: 3,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet4,
          id: 4,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet5,
          id: 5,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet6,
          id: 6,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet7,
          id: 7,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet8,
          id: 8,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet9,
          id: 9,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet2,
          id: 10,
        },
        {
          name: "Planet Alpha",
          population: 235,
          image: planet4,
          id: 11,
        },
        {
          name:"Planet Alpha",
          population: 235,
          image: planet6,
          id: 12,
        },
      ];

      let [open, setOpen] = useState(false);
    
      return (
        <>
          <Row className="justify-content-center" style={{marginRight:`${open? "360px" : "0"}`}}>
            {Planets.map((planet,i) => {
                if (planet?.id) {
                    
                return (<PlanetsCard sidebarOpen={(v)=>setOpen(v)} key={i} planet={planet} />)
                }

                return null

            })}
            <CreatePlanet />
          </Row>
        </>
    )
}

export default PlanetsData
