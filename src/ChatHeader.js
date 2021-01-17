import React from 'react';
import "./ChatHeader.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import HelpIcon from '@material-ui/icons/Help';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import EditLocationIcon from '@material-ui/icons/EditLocation';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
function ChatHeader( {channelName }) {
    console.log(channelName);
    return (
        <div className="chatheader">
            <div className="chatheader__left">
                <h3><span className="chatheader__heash">#</span>{channelName} </h3>
            </div>
            <div className="chatheader__right">
                <NotificationsIcon />
                <EditLocationIcon />
                <PeopleAltRoundedIcon />

                <div className="chatheader__search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                <SendRoundedIcon />
                <HelpIcon />

            </div>
        </div> 
    )
}

export default ChatHeader
