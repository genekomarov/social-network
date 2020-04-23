import {authAPI, usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'TOGGLE-FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: action.users };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount};
        case TOGGLE_FETCHING:
            return { ...state, isFetching: action.isFetching};
        case TOGGLE_FOLLOWING:
            return{
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing , action.userId]
                    : state.isFollowing.filter( (item) => item !== action.userId )
            };
        default: return state;
    }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const toggleFollowing = (isFollowing, userId) => ({type: TOGGLE_FOLLOWING, isFollowing, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(toggleFetching(false));
            });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.follow(userId)
            .then( data => {
                if (data.resultCode === 0) dispatch(followSuccess(userId));
            })
            .then( () => dispatch(toggleFollowing(false, userId)));
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId));
        usersAPI.unfollow(userId)
            .then( data => {
                if (data.resultCode === 0) dispatch(unfollowSuccess(userId));
            })
            .then( () => dispatch(toggleFollowing(false, userId)));
    }
};

export default usersReducer;