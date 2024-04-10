import classes from './Pagination.module.css'
import PagButton from "../UI/pagButton/PagButton.tsx";
import {Dispatch, FC, SetStateAction} from "react";

type PaginationType = {
    page: number;
    isPlaceholderData: boolean,
    data: DocsType[] | undefined,
    setPage: Dispatch<SetStateAction<number>>,
}
const Pagination: FC<PaginationType> = ({page, isPlaceholderData, data, setPage}) => {
    return (
        <div className={classes.pagination}>
            <PagButton disabled={page === 1}
                       onClick={() => setPage((old: number) => Math.max(old - 1, 0))}>Prev</PagButton>
            <PagButton disabled={false} onClick={() => setPage(1)}>1</PagButton>
            <PagButton onClick={() => {
                if (!isPlaceholderData) {
                    setPage((old: number) => old + 1)
                }
            }} disabled={isPlaceholderData || !data}>Next</PagButton>
            <span className={classes.currentPage}>{`Current page: ${page}`}</span>

        </div>
    );
};

export default Pagination;