export default function Header(){
    const menuClick = () => {
        let menu = document.getElementById("responsive");
        if (menu.classList.contains("responsive")) {
            menu.style.display="block"
        }   
    }

    const closeMenu = () => {
        let menu = document.getElementById("responsive");
        if (menu.classList.contains("responsive")) {
            menu.style.display="none"
        }   
    }

    return(
       <header className="header">
        <a href="#" className="logo">Sivakathir</a>
        <i className="fa fa-bars" onClick={menuClick}></i>
        <nav className="navbar" id="navbar">    
            <ul>
                <li>Home</li>   
                <li>About</li>
                <li>project</li>
                <li>Contact</li>
            </ul>
        </nav>
        <nav className="responsive" id="responsive">
            <i className="fa fa-times close-icon" onClick={closeMenu}></i>
            <ul className="responsive">
                <li>Home</li>
                <li>About</li>
                <li>project</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header> 
    )
}