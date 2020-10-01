import React, {Component} from 'react';
import QuestionIndexPage from './components/QuestionIndexPage'
import {
    BrowserRouter,
    Route,
    Switch,
    } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Navbar/>
                    <Switch>
                        <Route path='/questions' exact={true} component={QuestionIndexPage}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
