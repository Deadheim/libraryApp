import classes from './About.module.css'
import '../../App.css'
import {FC} from "react";
import {useGetBook} from "../../hooks/useBook.ts";
import {useLocation} from "react-router-dom";
import Loader from "../../components/UI/loader/Loader.tsx";
import ReadButton from "../../components/UI/readButton/ReadButton.tsx";
import {FcRating} from "react-icons/fc";
import {BsCalendar2Date} from "react-icons/bs";
import {MdLibraryBooks} from "react-icons/md";

type AboutType = {
    enabled: boolean,
}
const About: FC<AboutType> = ({enabled}) => {
    const {id, name} = useLocation().state
    const {data, isFetching} = useGetBook(name, enabled)
    const book: DocsType[] = data ? data.filter((item) => item.cover_i === Number(id)): []
    return (
        <div className={classes.about}>
            <div className="container">
                {isFetching ? (
                    <div className={classes.loader}>
                        <Loader />
                    </div>
                )
                    : book.length > 0 ? (
                    <div className={classes.aboutInner}>
                        <div className={classes.aboutBook}>
                            <img
                                className={classes.bookImage}
                                src={`https://covers.openlibrary.org/b/id/${String(book[0].cover_i)}-M.jpg`}
                                alt="img"
                            />
                            <div className={classes.numberOfPages}>
                                {`Number of pages: ${book[0].number_of_pages_median} pages`}
                            </div>
                            <ReadButton children={'Read it now'} onClick={() => console.log('click')}/>
                        </div>
                        <div className={classes.aboutInfo}>
                            <h1 className={classes.bookTitle}>
                                {book[0].title}
                            </h1>
                            <div className={classes.bookInfo}>
                                <div className={classes.bookCreated}>
                                    <BsCalendar2Date size={20} style={{marginRight: "4px"}}/>
                                    <span>
                                        {book[0].first_publish_year ? `Release date: ${book[0].first_publish_year}` : 'unknown'}
                                    </span>
                                </div>
                                <div className={classes.bookRating}>
                                    <FcRating size={20} style={{marginRight: "4px"}}/>
                                    <span>
                                        {book[0].ratings_average ? `Rating ${(book[0].ratings_average?.toFixed(1))}`: 'unknown'}
                                    </span>
                                </div>
                                <div className={classes.bookISBN}>
                                    <MdLibraryBooks size={20} style={{marginRight: "4px"}}/>
                                    <span>
                                        {book[0].isbn ? `ISBN: ${book[0].isbn[0]}`: 'unknown'}
                                    </span>
                                </div>
                            </div>
                            <div className={classes.author}>
                                <h2 className={classes.authorTitle}>Author</h2>
                                <div className={classes.bookAuthor}>
                                    <img
                                        className={classes.bookAuthorImage}
                                        src={`https://covers.openlibrary.org/a/olid/${book[0].author_key[0]}-M.jpg`}
                                        alt="img"
                                    />
                                    <h2 className={classes.bookAuthorName}>{book[0].author_name[0]}</h2>
                                </div>

                            </div>
                            <div className={classes.bookAbout}>
                                <span>First sentence</span>
                                {book[0].first_sentence ? (
                                    <div className={classes.sentence}>
                                        {book[0].first_sentence}
                                    </div>
                                    )
                                    :<div className={classes.notFound}>Not found</div>
                                }
                            </div>
                            <div className={classes.bookCharacters}>
                                <span>Characters</span>
                                <div className={classes.characters}>
                                    {book[0].person ? (
                                            book[0].person.slice(0, 10).map((item, index) => {
                                                return (
                                                    <div key={index} className={classes.character}>
                                                        {item}
                                                    </div>
                                                )
                                            })
                                        )
                                        : <div className={classes.notFound}>Not found</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{display: 'flex', justifyContent: "center", paddingTop: "50px"}}>
                        <h1>ERROR IDK</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default About;