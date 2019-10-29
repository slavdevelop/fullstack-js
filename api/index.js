import express from 'express';

import data from '../src/testData';

const router = express.Router();

const cars = data.cars.reduce((obj, car) => {
    obj[car.id] = car;
    return obj;
}, {});

router.get('/cars', (req, res) => {
    res.send({ cars: cars });
});

router.get('/cars/:carId', (req, res) => {
    console.log(req.params.id);
    let car = cars[req.params.carId];
    car.description = 'asddas asd ass dasd asdasss dasd asd asd asd';

    res.send(car);
});

export default router;