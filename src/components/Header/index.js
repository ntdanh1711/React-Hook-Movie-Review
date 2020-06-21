import React from 'react';
import {
  Navbar,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './styles.scss';

const Header = () => (
  <div className={styles.header}>
    <Navbar expand="md">
      <Link to="/" className={styles.link}>
        NTD Movies
      </Link>
    </Navbar>
  </div>
);

export default Header;
