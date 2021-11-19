import React, {useEffect, useState} from 'react'
import char1 from '../assets/characters/character-10.png'
import char2 from '../assets/characters/character-11.png'
import char3 from '../assets/characters/character-15.png'
import char4 from '../assets/characters/character-16.png'
import char5 from '../assets/characters/character-2.png'
import char6 from '../assets/characters/character-4.png'
import Button from '@restart/ui/esm/Button'
import * as Icons from "react-feather";
import CloseSideBar from './CloseSideBar'


function Aside({isOpen, setIsOpen, name}) {
    // alert(isOpen)
    let [open, setOpen] = useState(isOpen)
    useEffect(()=>{
        setOpen(isOpen)} , [isOpen])
        console.log(name);
    return (
        <div className={`${open? "transform: translate (0)": "transform:translate(100)"}`}>
            <div className="sidepop-container ms-4">
                <div className="sidepop-content-alpha py-5 px-4">
                    <Button size="lg" className="btn-close" onClick={() => setIsOpen(false)}>
                        <Icons.X />
                    </Button>
                       <h2 className="jane-cooper">{`${name} Hello`}</h2>
                       
                       <p className="janeCoop-text">
                            is really a nice person, she's been
                            living on Planet Alpha for the last 10 years.
                       </p>
                       <div className="janeCoop-info d-flex">
                            <p className="pe-5">Planet<br/><h6 className="info-alpha">Alpha</h6> </p>
                            <p>Friends<br/><span className="info-alpha">23</span> </p>
                       </div>
                       
                       <div className="janeCoop-charaDetails">
                        FRIENDS
                        </div>
                        <div className="each-person-detail d-flex ">
                            <div>
                                <img src={char1} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darlene Robertson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-2">
                            <div>
                                <img src={char2} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Katheryn Murphy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-">
                            <div>
                                <img src={char3} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Jenny Willson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={char4} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Arlene McCoy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={char5} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darrell Steward </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={char6} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Bessie Cooper </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Aside;


