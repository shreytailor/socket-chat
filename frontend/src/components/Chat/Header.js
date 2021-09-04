import React, { useState } from 'react';
import styles from 'components/Chat/Header.module.css';
import { ArrowCircleUpIcon, ArrowCircleDownIcon } from '@heroicons/react/solid'

function Header(props) {
    const [userList, setUserList] = useState(false);

    function toggleUserList() {
        setUserList((currentState) => {
            return !currentState;
        });
    }

    return (
        <div className={styles.header}>
            <div className={styles.flex}>
                <h1>{props.name}</h1>
                {
                    userList ?
                    <ArrowCircleUpIcon onClick={toggleUserList} className={styles.icon}/> :
                    <ArrowCircleDownIcon onClick={toggleUserList} className={styles.icon} />
                }
            </div>
            
            {
                userList &&
                <div className={styles.list}>
                    <ul>
                        {
                            props.activeUsers.map((user) => {
                                return <li>{user.userName}</li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default Header;