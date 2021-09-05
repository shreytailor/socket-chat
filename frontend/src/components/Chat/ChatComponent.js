import React, { useEffect, useState } from 'react';
import Header from 'components/Chat/Header';
import InputContainer from 'components/Chat/InputContainer';
import styles from 'components/Chat/ChatComponent.module.css';

function ChatComponent(props) {
    const userData = props.user;
    const clientSocket = props.clientSocket;

    const [activeUsers, setActiveUsers] = useState([]);

    useEffect(() => {
        clientSocket.on("users:update", (payload) => {
            setActiveUsers(payload);
        })
    }, []);

    return (
        <div className={styles.chat}>
            <Header name={userData.userName} activeUsers={activeUsers}/>
            <InputContainer />
        </div>
    );
}

export default ChatComponent;