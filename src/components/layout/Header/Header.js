import React from 'react';
import PropTypes from 'prop-types';


import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
// import { HashLink } from 'react-router-hash-link';


import globe from '../../../media/globe.svg';
// import './Header.scss';

const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'pl',
      name: 'Polski',
      country_code: 'pl',
    },
  ];


const Header = () => {
    const currentLanguageCode = cookies.get('i18next') || 'en';
    const { t } = useTranslation();
  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={{background: '#e3f2fd'}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item">
        
        </li>
      </ul>
      <form className="d-flex" style={{marginRight: 50}}>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className="dropdown" style={{width: 150}}>
        <button className="btn btn-link dropdown-toggle" data-toggle="dropdown" type="button" data-bs-toggle="collapse" data-bs-target="#navbarLanguages" aria-controls="navbarLanguages" aria-expanded="false">
          <img src={globe} alt='globe' />
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1" id="navbarLanguages" style={{right: 0, top: 43}}>
          {languages.map(({ code, name, country_code }) =>
            <li key={country_code}>
              <button
                className="dropdown-item"
                onClick={() => i18next.changeLanguage(code)}
                disabled={code === currentLanguageCode}
              >
                <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
                {name}
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
    </div>
</nav>
  );

};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;