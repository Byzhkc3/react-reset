import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Home} from './components/Home';
import {Index} from './components/index';
import {Message} from './components/Message';
import {Dynamic} from './components/Dynamic';
import {Collection} from './components/Collection';

class App extends React.Component {

    render() {

        return (
            <Router history={browserHistory}>
                <Route path={'/'} component={Home}>
                    <IndexRoute component={Index}/>
                    <Route path={'index'} component={Index}/>
                    <Route path={'Message'} component={Message}/>
                    <Route path={'Dynamic'} component={Dynamic}/>
                    <Route path={'Collection'} component={Collection}/>
                </Route>
            </Router>

        );
    }
}

render(<App/>, window.document.getElementById('app'));
