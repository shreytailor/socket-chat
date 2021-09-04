import React, { useEffect, useState } from 'react';
import styles from 'components/Chat/ChatComponent.module.css';

function ChatComponent(props) {
    const clientSocket = props.clientSocket;
    const userData = props.userData;

    return (
        <div className={styles.chat}>
            <div className={styles.header}>
                <h1>{userData.name}</h1>
            </div>
        </div>
    );
}

export default ChatComponent;