import {FC} from "react"    ;
import {BookDataType} from "../../types/ComponentType.ts";
import Loader from "../UI/loader/Loader.tsx";
import classes from './BookData.module.css'
import BookItem from "../bookItem/BookItem.tsx";
import Pagination from "../pagination/Pagination.tsx";


const BookData: FC<BookDataType> = ({data, isFetching, isError, page, setPage, isPlaceholderData}) => {
    return (
        <div className={classes.bookData}> 
            {
                isFetching ? (
                    <div className={classes.loader}>
                        <Loader/>
                    </div>

                ) : data?.length === 0 ? (
                    <h2 className={classes.notFoundError}>not found</h2>
                ) : data ? (
                    <div className={classes.bookList}>
                        {
                            data.map((item => {
                                if(item.author_name) {
                                    return (
                                        <BookItem
                                            id={String(item.cover_i)}
                                            key={item.key}
                                            src={`https://covers.openlibrary.org/b/id/${item.cover_i?.toString()}-M.jpg`}
                                            name={item.title}
                                            text={item.author_name[0]}
                                        />
                                    )
                                }
                            }))
                        }
                    </div>
                ) : isError ? (
                    <h2 className={classes.notFoundError}>Error</h2>
                ) : null
            }
            {
                data? (
                    <Pagination page={page} isPlaceholderData={isPlaceholderData} data={data} setPage={setPage}/>
                ): null
            }
        </div>
    );
};

export default BookData;