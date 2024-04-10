import {FC} from 'react';
import classes from './PagButton.module.css'
import {PagButtonType} from "../../../types/ComponentType.ts";



const PagButton: FC<PagButtonType> = ({children, disabled, onClick}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={classes.pagButton}>
            {children}
        </button>
    );
};

export default PagButton;