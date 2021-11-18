import React, {useState} from 'react'
import * as Icons from "react-feather";
import {  Button } from "react-bootstrap";

const CloseSideBar = () => {
    const [closeSidebar, setClosesidebar] = useState(false);
    return (
        <>
         <Button size="lg" className="btn-close" onClick={() => setClosesidebar(true)}>
                <Icons.X />
         </Button>  
        </>
    )
}

export default CloseSideBar
