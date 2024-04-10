import {Link} from "react-router-dom";
import classes from './BookItem.module.css'
import {FC} from "react";
import {BookItemType} from "../../types/ComponentType.ts";

const BookItem:FC<BookItemType> = ({id, name, text, alt, src, children}) => {
    return (
        <div className={classes.bookItem}>
            <div className={classes.bookBlock}>
                <img className={classes.bookImg} alt={alt} src={src}>
                    {children}
                </img>
                <div className={classes.bookName}>
                    {name}
                </div>
                <div className={classes.hoverInfo}>
                    {text}
                </div>
                <Link to='/about' state={{name: name, id: id}} className={classes.extraLink}>
                    Find out more &#8594;
                </Link>
            </div>
        </div>
        );
};

export default BookItem;