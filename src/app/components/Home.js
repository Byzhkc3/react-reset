import React from 'react';
import {Tabs} from './tabs';
import {TopNav} from './TopNav';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <TopNav title="首页"/>
                {this.props.children}
                <Tabs/>
            </div>
        );
    }
}

