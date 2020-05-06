import React from 'react';
import s from "./Paginator.module.css";
//import s from '   '

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = (() => currentPage-3 > 0 ? currentPage-3 : 1)();
         i <= (() => currentPage+3 <= pagesCount ? currentPage+3 : pagesCount)();
         i++) {
        pages.push(
            <span
                key={i}
                className={i === currentPage && s.selectedPage}
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