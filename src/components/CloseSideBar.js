import React, {useState} from 'react'
import * as Icons from "react-feather";
import {  Button } from "react-bootstrap";

const CloseSideBar = (setClosesidebar) => {
    // const [closeSidebar, setClosesidebar] = useState(false);
    return (
        <>
         <Button size="lg" className="btn-close" onClick={() => setClosesidebar(false)}>
                <Icons.X />
         </Button>  
        </>
    )
}

export default CloseSideBar
