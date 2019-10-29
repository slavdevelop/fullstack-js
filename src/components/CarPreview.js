import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CarPreview extends Component {
    handleClick = () => {
        this.props.onClick(this.props.id);
    }

    render() {
        return (
            <div className="CarPreview link" onClick={this.handleClick}>
                <div className="brand-name">
                    {this.props.brand}
                </div>
                <div className="model-name">
                    {this.props.model}
                </div>
            </div>
        );
    }
}

CarPreview.propTypes = {
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default CarPreview;