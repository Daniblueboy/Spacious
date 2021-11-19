import React from 'react'
import { Row} from "react-bootstrap";
import Char1 from "../assets/characters/character-1.png"
import Char2 from "../assets/characters/character-2.png"
import Char3 from "../assets/characters/character-3.png"
import Char4 from "../assets/characters/character-4.png"
import Char5 from "../assets/characters/character-5.png"
import Char6 from "../assets/characters/character-6.png"
import Char7 from "../assets/characters/character-7.png"
import Char8 from "../assets/characters/character-8.png"
import Char9 from "../assets/characters/character-9.png"
import Char10 from "../assets/characters/character-10.png"
import Char11 from "../assets/characters/character-11.png"
import Char12 from "../assets/characters/character-12.png"
import CharactersCard from './CharactersCard';
import Aside from './Aside';
import { useState } from 'react'
import CreateCharacter from './CreateCharacter';


const CharactersData = () => {
    const Chars = [
        {
          name: "John DOe",
          planet: "Alpha",
          friends: 194,
          img: Char1,
          id: 1,
        },
        {
          name: "Jane Dame",
          planet: "Beta",
          friends: 200,
          img: Char2,
          id: 2,
        },
        {
          name: "Mario Mark",
          planet: "Charlie",
          friends: 304,
          img: Char3,
          id: 3,
        },
        {
          name: "Tom Holland",
          planet: "Delta",
          friends: 406,
          img: Char4,
          id: 4,
        },
        {
          name: "Brick Lace",
          planet: "Euphoria",
          friends: 500,
          img: Char5,
          id: 5,
        },
        {
          name: "Clark Ville",
          planet: "Falcon",
          friends: 601,
          img: Char6,
          id: 6,
        },
        {
          name: "John DOe",
          planet: "Alpha",
          friends: 194,
          img: Char7,
          id: 7,
        },
        {
          name: "Jane Dame",
          planet: "Beta",
          friends: 200,
          img: Char8,
          id: 8,
        },
        {
          name: "Mario Mark",
          planet: "Charlie",
          friends: 304,
          img: Char9,
          id: 9,
        },
        {
          name: "Tom Holland",
          planet: "Delta",
          friends: 406,
          img: Char10,
          id: 10,
        },
        {
          name: "Brick Lace",
          planet: "Euphoria",
          friends: 500,
          img: Char11,
          id: 11,
        },
        {
          name: "Clark Ville",
          planet: "Falcon",
          friends: 601,
          img: Char12,
          id: 12,
        },
      ];

      let [open, setOpen] = useState(false);

      const[isOpen, setIsOpen] = useState(false)
      const [name, setName] = useState("undefined")
      function Sidebar(val){
        // alert(val)
        setIsOpen(val)
        setOpen(val)
      }
      function getName(e){
        setName(e)
      }
    
      return (
        <>
          <Row className="justify-content-center" style={{marginRight:`${!isOpen? "0" : "300px"}`}}>
            {Chars.map((character, i) => {

                if (character?.id) {
                    
                return (<CharactersCard key={i} character={character} sidebarOpen={Sidebar} getName={getName} />)
                }

                return null
            }   
            )}
            <CreateCharacter />
            {
              isOpen &&   <Aside isOpen={isOpen} setIsOpen={setIsOpen} name={name}/>
            }
          </Row>
        </>
    )
}

export default CharactersData