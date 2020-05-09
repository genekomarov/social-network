import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import {BrowserRouter, HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import withSuspense from "./hoc/withSuspense";

const DialogsContainer = React.lazy( () => import("./components/Content/Dialogs/DialogsContainer") );
const UsersContainer = React.lazy( () => import("./components/Content/Users/UsersContainer") );
const ProfileContainer = React.lazy( () => import("./components/Content/Profile/ProfileContainer") );


class App extends Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert('Some error occured');
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        return !this.props.initialized
            ? <Preloader />
            : (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route path='/profile/:userId?' render={withSuspense(ProfileContainer)}/>
                        <Route path='/dialogs' render={withSuspense(DialogsContainer)}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/users' render={withSuspense(UsersContainer)}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                        <Route exact path='/' render={() => <Redirect to={'/profile'}/>}/>
                        <Route path='*' render={() => <div>404 not found</div>}/>
                    </Switch>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const mapDispatchToProps = {
    initializeApp
};

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App);

const SocialNetworkApp = (props) => {
    return (
        <HashRouter>
            <Provider store={store}>
                <AppContainer />
            </Provider>
        </HashRouter>
    )
};

export default SocialNetworkApp;