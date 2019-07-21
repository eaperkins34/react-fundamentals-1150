import React, { Component } from 'react';

export class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            results: []
        }
    }

    handleKeyUp = (e) => {
        // capture user's input from even
        // use user's input to hit an api to get movies
        // store the results of our API qurey in our state
        // we also need to handle errors
    }
    render () {
        return (
            <form on Submit={this.handleSubmit} id="form">
                <input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search a movie" required />
            </form>
        );
    }
}