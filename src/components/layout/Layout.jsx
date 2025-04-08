
import React from 'react';
import PropTypes from 'prop-types';
import { layoutConfig } from '../../configs/layoutConfig';

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
};

Layout.Header = ({ children, className = '' }) => (
  <div className="w-full">
    <header
      className={`w-full text-blue-500 ${layoutConfig.header.shadow} ${className}`}
      style={{
        height: layoutConfig.header.height,
        padding: layoutConfig.header.padding,
        backgroundColor: layoutConfig.header.background,
      }}
    >
      {children}
    </header>
  </div>
);

Layout.Sider = ({ children, className = '' }) => (
  <aside
    className={`text-white ${className}`}
    style={{
      width: layoutConfig.sider.width,
      backgroundColor: layoutConfig.sider.background,
    }}
  >
    {children}
  </aside>
);

Layout.Content = ({ children, className = '' }) => (
  <main
    className={`flex-1 w-full ${className}`}
    style={{
      padding: layoutConfig.content.padding,
      backgroundColor: layoutConfig.content.background,
    }}
  >
    {children}
  </main>
);

Layout.Footer = ({ children, className = '' }) => (
  <footer
    className={`w-full ${className}`}
    style={{
      height: layoutConfig.footer.height,
      padding: layoutConfig.footer.padding,
      backgroundColor: layoutConfig.footer.background,
    }}
  >
    {children}
  </footer>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.Header.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.Sider.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.Content.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.Footer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Layout;

