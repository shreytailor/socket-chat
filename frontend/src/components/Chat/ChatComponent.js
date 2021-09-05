import React, { useEffect, useState } from 'react';
import Header from 'components/Chat/Header';
import Messages from 'components/Chat/Messages';
import InputContainer from 'components/Chat/InputContainer';
import styles from 'components/Chat/ChatComponent.module.css';

function ChatComponent(props) {
    const userData = props.user;
    const clientSocket = props.clientSocket;

    const [activeUsers, setActiveUsers] = useState([]);
    const [messages, setMessages] = useState([]);

    function onMessageSubmit(message) {
        clientSocket.emit("messages:new", {
            uuid: Math.random(),
            text: message,
            sender: userData
        });
    }

    useEffect(() => {
        clientSocket.on("users:update", (payload) => {
            setActiveUsers(payload);
        })

        clientSocket.on("messages:new", (payload) => {
            setMessages((previousState) => {
                return [...previousState, payload];
            });
        })
    }, []);

    return (
        <div className={styles.chat}>
            <Header name={userData.userName} activeUsers={activeUsers}/>
            <Messages className={styles.messages} user={userData} messages={messages}/>
            <InputContainer onSubmit={onMessageSubmit}/>
        </div>
    );
}

export default ChatComponent;