import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Content/Profile/Profile";
import News from "./components/Content/News/News";
import Music from "./components/Content/Music/Music";
import Settings from "./components/Content/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Content/Dialogs/DialogsContainer";


const App = () => {

    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={ () => <Profile />  } />
                    <Route path='/dialogs' render={ () => <DialogsContainer />  } />
                    <Route path='/news' render={ () => <News /> } />
                    <Route path='/music' render={ () => <Music /> } />
                    <Route path='/settings' render={ () => <Settings /> } />
                </div>
            </div>
    );
};

export default App;
