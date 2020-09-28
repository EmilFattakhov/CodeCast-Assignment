import React, {Component} from 'react';
import QuestionIndexPage from './components/QuestionIndexPage'
import {
    BrowserRouter,
    Route,
    Switch,
    } from 'react-router-dom';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> I am React</h1>
                <BrowserRouter>
                <Switch>
                    <Route path='/questions' exact={true} component={QuestionIndexPage}/>
                </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
