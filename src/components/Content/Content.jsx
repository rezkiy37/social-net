import React from 'react';
import { Route } from 'react-router-dom';
//css
import s from './Content.module.css';
//components
import Feed from './Feed/Feed';
import Chats from './Chats/Chats';
import Feedback from './Feedback/Feedback';
import Settings from './Settings/Settings';
import ProfileContainer from './Profile/ProfileContainer';


//component
class Content extends React.Component {
    render() {
        return (
            <div className={s.content}>
                <Route path='/profile'
                    render={() => <ProfileContainer />} />

                <Route path='/feed'
                    render={() => <Feed />} />

                <Route path='/chats'
                    render={() => <Chats />} />

                <Route path='/feedback'
                    render={() => <Feedback />} />

                <Route path='/settings'
                    render={() => <Settings />} />
            </div>
        )
    }
}

export default Content;