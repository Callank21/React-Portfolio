function Nav({ currentPage, handlePageChange}) {
    return (
        <nav>
            <p 
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
            >
                About
            </p>
            <p
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
            >
                Contact
            </p>
            <p
            onClick={() => handlePageChange('Project')}
            className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}
            >
                Project
            </p>
            <p
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
            >
                Resume
            </p>
        </nav>
    )
}

export default Nav;