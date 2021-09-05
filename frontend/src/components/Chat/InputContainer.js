import React, { useState } from 'react';
import styles from 'components/Chat/InputContainer.module.css';
import { ChevronDoubleRightIcon } from '@heroicons/react/solid';

function InputContainer(props) {
    const [message, setMessage] = useState("");

    function onFormSubmit(event) {
        event.preventDefault();
        props.onSubmit(message);
        setMessage("");
    }

    function onInputChange(event) {
        setMessage(event.target.value);
    }

    return (
        <div className={styles.inputContainer}>
            <form onSubmit={onFormSubmit}>
                <input type="text" value={message} onChange={onInputChange}/>
                <button>
                    <ChevronDoubleRightIcon/>
                </button>
            </form>
        </div>
    );
}

export default InputContainer;