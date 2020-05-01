import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import {Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {authCheck} from "./redux/auth-reducer";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        return !this.props.initialized
            ? <Preloader />
            : (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const mapDispatchToProps = { //as Object
    /*authCheck,*/
    initializeApp
};

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);
