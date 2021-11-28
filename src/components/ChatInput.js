import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {Button} from "@material-ui/core";
import {db} from "../firebase";
import firebase from 'firebase';

function ChatInput({channelId, channelName, chatRef}) {
    const [input, setInput] = useState('');
    const sendMessage = e => {
        e.preventDefault();
        if (!channelId) {
            return false;
        }
        chatRef.current.scrollIntoView({behavior: "smooth"});
        db.collection('chatRooms').doc(channelId).collection('messages')
            .add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: 'dsad',
                userImage: 'https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo='
            });
        setInput('');
    }
    return <ChatInputContainer>
        <form>
            <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Message #${channelName}`}/>
            <Button hidden type="submit" onClick={sendMessage}>
                SEND
            </Button>
        </form>
    </ChatInputContainer>
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }`;
