import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Car extends Component {
    render() {
        return (
            <div className="Car">
                {this.props.description}
            </div>
        );
    }
}

Car.propTypes = {
    description: PropTypes.string.isRequired
};

export default Car;