import {FC} from "react";
import {IntroButtonType} from "../../../types/ComponentType.ts";
import classes from './IntroButton.module.css';
import { RiSearch2Line } from "react-icons/ri";

const IntroButton: FC<IntroButtonType> = ({onClick}) => {
    return (
        <button onClick={onClick} className={classes.introButton}>
            <RiSearch2Line size={30}/>
        </button>
    );
};

export default IntroButton;