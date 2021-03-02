import { useState } from 'react';

import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../UIElements/Backdrop/Backdrop';
import './Navigation.css';

const Navigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={() => setDrawerIsOpen(false)} />}
      <SideDrawer show={drawerIsOpen} onClick={() => setDrawerIsOpen(false)}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks />
        </nav>
      </SideDrawer>
      )
      <Header>
        <button
          className="main-navigation__menu-btn"
          onClick={() => {
            setDrawerIsOpen(true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks></NavLinks>
        </nav>
      </Header>
    </>
  );
};

export default Navigation;
