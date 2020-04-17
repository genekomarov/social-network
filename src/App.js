import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";
import UsersContainer from "./components/Content/Users/UsersContainer";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={ () => <ProfileContainer />  } />
                    <Route path='/dialogs' render={ () => <DialogsContainer />  } />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/music' render={ () => <Music /> } />
                    <Route path='/users' render={ () => <UsersContainer /> } />
                    <Route path='/settings' render={ () => <Settings /> } />
                </div>
            </div>
    );
};
export default App;
