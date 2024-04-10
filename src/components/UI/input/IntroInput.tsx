import {FC} from "react";
import classes from './IntroInput.module.css'
import {IntroInputType} from "../../../types/ComponentType.ts";
import IntroButton from "../introButton/IntroButton.tsx";
import {useQueryClient} from "@tanstack/react-query";

const IntroInput: FC<IntroInputType> = ({value, onChange, placeholder, setEnabled, setPage}) => {
    const queryClient = useQueryClient()
    return (
        <div className={classes.introInputBlock}>
            <IntroButton onClick={() => {
                setEnabled(true)
                setPage(1)
                queryClient.invalidateQueries()

            }}/>
            <input
                className={classes.introInput}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type="text"
            />
        </div>
    );
};

export default IntroInput;