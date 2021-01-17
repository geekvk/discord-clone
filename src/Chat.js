import React, { useEffect, useState } from 'react'
import ChatHeader from "./ChatHeader";
import "./Chat.css";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from "./Message";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelID, selectChannelName } from './features/appSlice';
import db from './firebase';
import firebase from 'firebase'; 
function Chat() {
    const user = useSelector(selectUser);
    const channelID = useSelector(selectChannelID);
    const channelName = useSelector(selectChannelName);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(()=>{
        if(channelID){
            db.collection('channels').doc(channelID).collection("messages").orderBy("timestamp", 'desc').onSnapshot(snapshot => {
                setMessages(snapshot.docs.map((doc) => doc.data()))
            });
        }
           
    }, [channelID]);
    const sendMessage = e => {
        e.preventDefault();
        db.collection('channels').doc(channelID).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,
        });
        setInput("");
    }
    return (
        <div className="chat">
            <div className="chat__top"> 
                <ChatHeader channelName={channelName} />
            </div>
            <div className="chat__messages">
                {messages.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user} />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon className="chat__circleIcon"
                     fontSize="large" />
                <form>
                    <input value={input} 
                    disabled={!channelID}
                    onChange={e => setInput(e.target.value)} 
                    placeholder={'Message teat channel'} 
                    />
                    <button 
                        disabled={!channelID}
                        className="chat__inputButton"
                        type="submit"> Send Message 
                        onClick={sendMessage}
                        </button>
                </form>
                <div className="chat__inputIcons">
                        <CardGiftcardIcon fontSize="large" />
                        <GifIcon fontSize="large" />
                        <EmojiEmotionsIcon fontSize="large" />



                </div>
            </div>

             
        </div>
    )
}

export default Chat
