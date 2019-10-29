import React from 'react';
import PropTypes from 'prop-types';

import CarPreview from './CarPreview';

const CarList = ({ cars, onCarClick }) => (
    <div className="CarList">
        {Object.keys(cars).map(carId => 
            <CarPreview key={carId} onClick={onCarClick} {...cars[carId]} />
        )}
    </div>
);

CarList.propTypes = {
    cars: PropTypes.object.isRequired,
    onCarClick: PropTypes.func.isRequired
};

export default CarList;