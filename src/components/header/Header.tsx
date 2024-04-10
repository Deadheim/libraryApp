import classes from './Header.module.css'
import '../../App.css'
import { ImBooks } from "react-icons/im";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <header className={classes.header}>
            <div className="container">
                <div className={classes.headerInner}>
                    <div className={classes.headerLogo}>
                        <ImBooks size={40} style={{marginRight: 3}}/>
                        <h1>LIBRARY</h1>
                    </div>

                    <nav className={classes.navbar}>
                        <Link to="/" className={classes.navLink}>Home</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;