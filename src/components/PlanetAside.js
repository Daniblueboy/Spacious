import React, {useEffect, useState} from 'react'
import planetPop1 from '../assets/characters/character-5.png'
import planetPop2 from '../assets/characters/character-15.png'
import planetPop3 from '../assets/characters/character-3.png'
import planetPop4 from '../assets/characters/character-5.png'
import planetPop5 from '../assets/characters/character-14.png'
import planetPop6 from '../assets/characters/character-6.png'
import CloseSideBar from './CloseSideBar'
import Button from '@restart/ui/esm/Button'
import * as Icons from "react-feather";



function PlanetAside({isOpen, setIsOpen}) {
    // alert(isOpen)
    let [open, setOpen] = useState(isOpen)
    useEffect(()=>{
        setOpen(isOpen)} , [isOpen])
    return (
        <div className={`${open? "transform: translate (0)": "transform:translate(100)"}`}>

            <div className="sidepop-container ms-4">
                    <div className="sidepop-content-alpha py-5 px-4">
                        <div className="d-flex justify-content-end">
                        {/* <CloseSideBar  setClosesidebar={setIsOpen}/> */}

                        <Button size="lg" className="btn-close" onClick={() => setIsOpen(false)}>
                <Icons.X />
         </Button>  


                        </div>
                       <h2 className="alpha-planet">Planet Alpha</h2>
                       <p className="alpha-planet-text">
                            Planet Alpha is the place to be if you love everything about planets. I know it's a bit meta but come see by yourself
                       </p>
                       <div className="alpha-planet-info d-flex">
                            <p className="pe-5">Population<br/><h6 className="info-alpha">234</h6> </p>
                       </div>
                       
                       <div className="alpha-planet-charaDetails">
                        FRIENDS
                        </div>
                        <div className="each-person-detail d-flex ">
                            <div>
                                <img src={planetPop1} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darlene Robertson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-2">
                            <div>
                                <img src={planetPop2} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Katheryn Murphy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>

                        <div className="each-person-details d-flex py-">
                            <div>
                                <img src={planetPop3} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="person-name">Jenny Willson </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={planetPop4} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Arlene McCoy </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={planetPop5} className="each-person-img my-2 me-3" alt="Jane"/>
                            </div>
                            <div className="each-person-info d-flex justify-content-center align-items-center">
                                <p><span className="each-person-name">Darrell Steward </span> <br/> 23 Friends</p>
                            </div>

                            
                        </div>


                        <div className="each-person-details d-flex ">
                            <div>
                                <img src={planetPop6} className="each-person-img my-2 me-3" alt="Jane"/>
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

export default PlanetAside