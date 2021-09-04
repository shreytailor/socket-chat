import React, { useState } from "react";
import styles from "components/General/InputModal.module.css";

function InputModal(props) {
    const [name, setName] = useState("");

    function inputChangeHandler(event) {
        setName(event.target.value);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        if (name.length === 0) {
            return;
        }

        props.onSubmit(name);
    }

    return (
        <div className={styles.modal}>
            <div className={styles.content}>
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <form onSubmit={formSubmitHandler}>
                    <input type="text" value={name} onChange={inputChangeHandler}/>
                    <button>{props.buttonLabel}</button>
                </form>
            </div>
        </div>
    );
}

export default InputModal;