import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";
import {UserType} from "../types/types";
import {AppStateType} from "./redux-store"
import {Dispatch} from "redux"
import {ThunkAction} from "redux-thunk"

const FOLLOW = 'users/FOLLOW';
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'users/SET-TOTAL-USERS-COUNT';
const TOGGLE_FETCHING = 'users/TOGGLE-FETCHING';
const TOGGLE_FOLLOWING = 'users/TOGGLE_FOLLOWING';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowing: [] as any
};

type InitialStateType = typeof initialState


const usersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
                    : state.isFollowing.filter( (item: any) => item !== action.userId )
            };
        default: return state;
    }
};

type ActionsType = FollowSuccessActionType | UnfollowSuccessActionType | SetUsersActionType
    | SetCurrentPageActionType | SetTotalUsersCountActionType |ToggleFetchingActionType
    | ToggleFollowingActionType

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): FollowSuccessActionType => ({ type: FOLLOW, userId });

type UnfollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): UnfollowSuccessActionType => ({ type: UNFOLLOW, userId });

type SetUsersActionType = {
    type: typeof SET_USERS
    users: any

}
export const setUsers = (users: any): SetUsersActionType => ({type: SET_USERS, users});

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage});

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    totalUsersCount: number

}
export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});

type ToggleFetchingActionType = {
    type: typeof TOGGLE_FETCHING
    isFetching: boolean

}
export const toggleFetching = (isFetching: boolean): ToggleFetchingActionType => ({type: TOGGLE_FETCHING, isFetching});

type ToggleFollowingActionType = {
    type: typeof TOGGLE_FOLLOWING
    isFollowing: boolean
    userId: number
}
export const toggleFollowing = (isFollowing: boolean, userId: number): ToggleFollowingActionType => ({type: TOGGLE_FOLLOWING, isFollowing, userId});

/** Для явной типизации параметров, приходящих в санку*/
// type GetStateType = () => AppStateType

type DispatchType = Dispatch<ActionsType>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleFetching(false));
};

const _followUnfollowFlow = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => FollowSuccessActionType | UnfollowSuccessActionType
) => {
    dispatch(toggleFollowing(true, userId));

    let data = await apiMethod(userId);

    if (data.resultCode === 0) dispatch(actionCreator(userId));
    dispatch(toggleFollowing(false, userId));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);
};

export default usersReducer