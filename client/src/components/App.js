import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './Header';
import fetchUser from '../actions/fetchUser';
import axios from 'axios';

const Landing = () => <h1>Landing Pgae</h1>
const Surways = () => <h1>this is Surways page</h1>

class App extends React.Component {
    componentDidMount(){
       this.props.fetchUser();
    }

    render(){
        return (
            <div>
               <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path="/" exact component={Landing} />
                        <Route path="/surways" exact component={Surways} />
                    </div>
               </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, {fetchUser})(App);