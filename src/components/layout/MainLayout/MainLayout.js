import React from 'react';
import PropTypes from 'prop-types';

// import './MainLayout.module.scss';
// import { HeaderMain } from '../HeaderMain/HeaderMain';

import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <div className='root'>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default MainLayout;