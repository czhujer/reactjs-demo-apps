import React, { Component } from 'react';
import CalculatorForm from './calculator/CalculatorForm';
import Result from './calculator/Result';
import './App.css';

export default class App extends Component {
    render() {
        const title = 'React kalkulačka';

        return (
            <div className="App">
                <h1>{title}</h1>
                <CalculatorForm />
                <Result />
            </div>
        );
    }
}

