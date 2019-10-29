import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
    return <div className="header">{props.heading}</div>;
};

Header.propTypes = {
    heading: PropTypes.string.isRequired
};

export default Header;