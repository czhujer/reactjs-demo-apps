import React, { Component } from 'react';

export default class NumberInput extends Component {
    render() {
        return (
            <label htmlFor="x">
                První číslo:
                <input id="x" type="number" name="x" required value="0" />
            </label>
        );
    }
}

