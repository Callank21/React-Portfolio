import React, { useState } from 'react';
import About from '../About';
import Project from '../Project';
import Contact from '../Contact';
import Resume from '../Resume';
import Footer from '../Footer';
import Nav from '../Nav';

function Header() {
    const [currentPage, setCurrentPage] = useState('About');

    const changePage = () => {
        if (currentPage === 'About') {
            return <About />;
          }
          if (currentPage === 'Project') {
            return <Project />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }  
          if (currentPage === 'Resume') {
            return <Resume />;
          }
    }

    const handlePageChange = (page) => setCurrentPage(page);
    return (
    <div>
    <header>
        <div>
        <p> Callan Keesling</p>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}></Nav>
        </div>
    </header>
    <main>
      {changePage()}
    </main>
    <Footer></Footer>
    </div>
    )
}

export default Header;