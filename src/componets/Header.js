export default function Header(){
    const menuClick = () => {
        let menu = document.getElementById("responsive");
        menu.classList.remove("hidden")
    }

    const closeMenu = () => {
        let menu = document.getElementById("responsive");
        menu.classList.add("hidden")
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
        <nav className="responsive hidden" id="responsive">
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