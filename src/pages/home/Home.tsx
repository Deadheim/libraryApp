import {useState} from 'react';
import {useGetBooks} from "../../hooks/useBook.ts";

import classes from './Home.module.css'
import '../../App.css'
import IntroInput from "../../components/UI/input/IntroInput.tsx";
import BookData from "../../components/bookData/BookData.tsx";


const Home = () => {
    const [searchQuery, setSearchQuery] = useState('')
    const [enabled, setEnabled] = useState(false)
    const [page, setPage] = useState(1)
    const {data, isFetching, isError, isPlaceholderData, isPending} = useGetBooks(searchQuery, enabled, '10', page)
    return (
        <div className={classes.home}>
            <div className={classes.intro}>
                <div className="container">
                    <div className={classes.introInner}>
                        <h1 className={classes.introTitle}>Find a book of your choice</h1>
                        <IntroInput
                            setPage={setPage}
                            setEnabled={setEnabled}
                            value={searchQuery}
                            placeholder={'Search...'}
                            onChange={event => {
                                setSearchQuery(event.target.value)
                            }}
                        />
                        <BookData
                            data={data}
                            isFetching={isFetching}
                            isPending={isPending}
                            isError={isError}
                            page={page}
                            isPlaceholderData={isPlaceholderData}
                            setPage={setPage}
                        />

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;