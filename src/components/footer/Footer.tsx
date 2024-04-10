import classes from './Footer.module.css'
import {Link} from "react-router-dom";
const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footerInner}>
                    <div>
                        Copyright &#169; Deadheim
                    </div>
                    <nav className={classes.navbar}>
                        <Link to="/" className={classes.navLink}>Home</Link>
                        <a href="https://openlibrary.org/dev/docs/api/search" target="_blank" className={classes.navLink}>SOURCE API</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer;