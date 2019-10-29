import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';
import CarList from './CarsList';
import Car from './Car';
import * as api from '../api';

const pushState = (obj, url) =>
    window.history.pushState(obj, '', url);

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        pageHeader: 'Naming Contests',
        cars: this.props.initialCars
    };

    componentDidMount() {
        console.log('Component mounted !');

        axios.get('/api/cars')
            .then(resp => {
                this.setState({ cars: resp.data.cars });
            })
            .catch(console.error);

        //this.setState({ cars:  });
    }

    // shouldComponentUpdate() {
    //     console.log('Should component update ?!');
    // }

    componentWillUnmount() {
        console.log('Component will unmount ...');
    }

    fetchCar = (carId) => {
        pushState(
            { currentCarId: carId },
            `/car/${carId}`
        );

        api.fetchCar(carId).then(car => {
            this.setState({
                pageHeader: car.brand,
                currentCarId: car.id,
                cars: {
                    ...this.state.cars,
                    [car.id]: car
                }
            });
        });
    };

    currentContent() {
        if (this.state.currentCarId) {
            return <Car {...this.state.cars[this.state.currentCarId]} />;
        }

        return <CarList onCarClick={this.fetchCar} cars={this.state.cars} />;
    }

    render() {
        return(
            <div>
                <Header heading={this.state.pageHeader} />
                {this.currentContent()}
            </div>
        );
    }
}