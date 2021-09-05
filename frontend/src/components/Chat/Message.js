import React from 'react';
import styles from 'components/Chat/Message.module.css';

function Message(props) {
    const messageClassNames = `${props.className} ${styles.message}`;
    
    let colourClassName = ``;
    if (props.sender === true) {
        colourClassName = `${styles.sender}`;
    } else if (props.receiver === true) {
        colourClassName = `${styles.receiver}`;
    }

    const contentClassNames = `${styles.content} ${colourClassName}`;

    return (
        <div className={messageClassNames}>
            <p className={styles.info}>{props.message.sender.userName}</p>
            <p className={contentClassNames}>{props.message.text}</p>
        </div>
    );
}

export default Message;