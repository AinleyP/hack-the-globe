import React from 'react'
import Navbar from './Navbar'

interface Props {
  children?: React.ReactNode;
}

const Layout = (props: Props): JSX.Element => {
  return <div className="layout">
    <div className="layout-navbar">
    <Navbar />
    </div>
    <div className="layout-content">
      {props.children}
    </div>
  </div>
}

export default Layout