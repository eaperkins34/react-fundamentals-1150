import React, { Component } from 'react';
import { Form } from './Form';

export default class MovieApp extends Component {
    render () {
        return (
            <div className="main">
                <div className="mainDive">
                    <Form />
                </div>
            </div>
        );
    }
}