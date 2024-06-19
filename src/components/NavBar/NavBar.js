import './NavBar.css'
function NavBar(){
    return(
        <header>
            <h1 className='Name'>HV</h1>
            <nav>
                <ul className='navbar'>
                    <li className='nav-item'><a href=''>Home</a></li>
                    <li className='nav-item'><a href=''>About</a></li>
                    <li className='nav-item'><a href=''>Project</a></li>
                    <li className='nav-item'><a href=''>Resume</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;