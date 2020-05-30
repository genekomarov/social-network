import React from 'react';
import s from "./Paginator.module.css";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

const Paginator : React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = (() => currentPage-3 > 0 ? currentPage-3 : 1)();
         i <= (() => currentPage+3 <= pagesCount ? currentPage+3 : pagesCount)();
         i++) {
        pages.push(
            <span
                key={i}
                className={i === currentPage ? s.selectedPage : undefined}
                onClick={ () => {onPageChanged(i)}}> {i} </span>
        )
    }

    return (
        <div className={s.pages}>
            {pages}
        </div>
    );
};

export default Paginator;
