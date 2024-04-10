import classes from './ReadButton.module.css'
import {FC} from "react";
import {ReadButtonType} from "../../../types/ComponentType.ts";

const ReadButton: FC<ReadButtonType> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={classes.readButton}>
            {children}
        </button>
    );
};

export default ReadButton;