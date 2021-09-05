import React from 'react';
import Message from 'components/Chat/Message';
import styles from 'components/Chat/Messages.module.css';

function Messages(props) {
    const userData = props.user;
    const messages = props.messages;

    const messagesClassNames = `${props.className} ${styles.messages}`;
    const senderClassNames = `${styles.message} ${styles.alignRight}`;
    const receiverClassNames = `${styles.message} ${styles.alignLeft}`;

    return (
        <div className={messagesClassNames}>
            {
                messages.map((message) => {
                    if (userData.uuid === message.sender.uuid) {
                        return <Message className={senderClassNames} message={message} sender/>
                    } else {
                        return <Message className={receiverClassNames} message={message} receiver/>
                    }
                })
            }
        </div>
    );
}

export default Messages;