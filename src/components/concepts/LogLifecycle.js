import React from 'react';
import LogLifecycle from 'react-log-lifecycle';

const flags = {
    logType: 'keys',
    names: ['props', 'nextProps', 'nextState', 'prevProps', 'prevState']
};

export default class MyReactComponent extends LogLifecycle {
    constructor (props) {
        super (props, flags);
    }
    render () {
        console.log('MyReactComponent render');
        return (
            <div>My Component with React Lifecycle Logging</div>
        )
    }
}