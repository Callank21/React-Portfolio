function Nav() {


    function navClick() {
        
    }
    return (
        <nav>
            <p onClick={navClick}>
                About
            </p>
            <p>
                Contact
            </p>
            <p>
                Project
            </p>
            <p>
                Resume
            </p>
        </nav>
    )
}

export default Nav;