import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import styles from './styles.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={styles.header}>
      <Navbar className={styles.header__content} expand="md">
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="The Movie Database (TMDb)" width="154" height="20" />
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className={styles.paddingMenuItem}>
              <NavLink href="/components/" style={{ color: 'white', fontWeight: '600' }}>Movie</NavLink>
            </NavItem>
            <NavItem className={styles.paddingMenuItem}>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>TV Shows</NavLink>
            </NavItem>
            <NavItem className={styles.paddingMenuItem}>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>People</NavLink>
            </NavItem>
            <NavItem className={styles.paddingMenuItem}>
              <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>More</NavLink>
            </NavItem>
          </Nav>
          <i className={`fa fa-plus ${styles.faPlus}`} aria-hidden="true" />
          <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>Login</NavLink>
          <NavLink href="https://github.com/reactstrap/reactstrap" style={{ color: 'white', fontWeight: '600' }}>Join TMDb</NavLink>
          <i className={`fa fa-search ${styles.faSearch}`} aria-hidden="true" />
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
