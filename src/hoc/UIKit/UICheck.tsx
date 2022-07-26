import React, {useState} from 'react';
import classes from '../../styles/UIKit/UICheck.module.scss'
import {FaCheck, FaMinus} from "react-icons/fa";

const UICheck = () => {

    const [state, setState] = useState<boolean>(false)
    const [touched, setTouched] = useState<boolean>(false)

    const clickHandler = () => {
        setTouched(true)
        setState(!state)
    }

    return (
        <div
            className={
                touched ? classes['UICheck'] + ' ' + classes['touched'] : classes['UICheck']
            }
            onClick={() => clickHandler()}
        >
            {
                (touched) &&
                <div
                    className={classes['UICheck__checker']}
                >
                    {state ? <FaCheck/> : <FaMinus/>}
                </div>
            }
        </div>
    );
};

export default UICheck;