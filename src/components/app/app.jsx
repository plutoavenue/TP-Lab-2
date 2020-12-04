import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Home from '../home/home';
import Header from '../header/header';
import LoginPage from '../login/login';
import ProfilePage from '../profile/profile';
import NewsPage from '../news/news';

export default class AppMain extends Component {

    state = {
        isLoggedIn: false,
    }

    onLogin = (event) => {
        event.preventDefault();
        if (event.target.inputEmail.value === 'admin'
            && event.target.inputPassword.value === '12345') {
            console.log('logged in');
            this.setState({ isLoggedIn: true });
        } else {
            this.setState({ isLoggedIn: false });
            alert("Wrong login or password!");
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <Router>

                    <Header />
                    <Switch>
                        <Route
                            path='/'
                            component={Home}
                            exact />

                        <Route
                            path='/news'
                            component={NewsPage}
                        />
                        <Route
                            path='/login'
                            render={ () => (
                                this.state.isLoggedIn ? <ProfilePage/> :
                                <LoginPage
                                isLoggedIn={this.state.isLoggedIn}
                                onLogin={this.onLogin}/>)}
                        />

                        <Route
                            path='/profile'
                            render={() => (
                                this.state.isLoggedIn ? <ProfilePage /> : <Redirect to='/login'/>
                            )} />
                    </Switch>
                </Router>
            </React.Fragment>
        );
    }
}