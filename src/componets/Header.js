import { useState } from "react";

export default function Header(){
    const [show,setShow]=useState(false)
    
    return(
       <header className="header">
        <a href="#" className="logo">Sivakathir</a>
        <i className="fa fa-bars" onClick={()=>setShow(true)}></i>
        <nav className="navbar">    
            <ul>
                <li>Home</li>   
                <li>About</li>
                <li>project</li>
                <li>Contact</li>
            </ul>
        </nav>
        {show && <nav className="responsive">
            <i className="fa fa-times close-icon" onClick={()=>setShow(false)}></i>
            <ul className="responsive">
                <li>Home</li>
                <li>About</li>
                <li>project</li>
                <li>Contact</li>
            </ul>
        </nav>}
    </header> 
    )
}