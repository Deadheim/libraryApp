
import MainRouter from "../../routes/MainRouter.tsx";
import classes from './Main.module.css'
const Main = () => {
    return (
        <div className={classes.main}>
            <MainRouter />
        </div>
    );
};

export default Main;