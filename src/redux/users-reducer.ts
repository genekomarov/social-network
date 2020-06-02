import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helper";
import {UserType} from "../types/types";
import {ActionsTypes, AppStateType} from "./redux-store"
import {Dispatch} from "redux"
import {ThunkAction} from "redux-thunk"

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
        case 'FOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            };
        case 'SET_USERS':
            return { ...state, users: action.users };
        case 'SET_CURRENT_PAGE':
            return { ...state, currentPage: action.currentPage};
        case 'SET_TOTAL_USERS_COUNT':
            return { ...state, totalUsersCount: action.totalUsersCount};
        case 'TOGGLE_FETCHING':
            return { ...state, isFetching: action.isFetching};
        case 'TOGGLE_FOLLOWING':
            return{
                ...state,
                isFollowing: action.isFollowing
                    ? [...state.isFollowing , action.userId]
                    : state.isFollowing.filter( (item: any) => item !== action.userId )
            };
        default: return state;
    }
};

type ActionsType = ActionsTypes<typeof actions>

export const actions = {
    followSuccess: (userId: number) => ({ type: 'FOLLOW', userId } as const),
    unfollowSuccess: (userId: number) => ({ type: 'UNFOLLOW', userId } as const),
    setUsers: (users: any) => ({type: 'SET_USERS', users} as const),
    setCurrentPage: (currentPage: number) => ({ type: 'SET_CURRENT_PAGE', currentPage} as const),
    setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const),
    toggleFetching: (isFetching: boolean) => ({type: 'TOGGLE_FETCHING', isFetching} as const),
    toggleFollowing: (isFollowing: boolean, userId: number) => ({type: 'TOGGLE_FOLLOWING', isFollowing, userId} as const)
}



/** Для явной типизации параметров, приходящих в санку*/
// type GetStateType = () => AppStateType

type DispatchType = Dispatch<ActionsType>

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

export const requestUsers = (currentPage: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleFetching(true));

    let data = await usersAPI.getUsers(currentPage, pageSize);

    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
    dispatch(actions.toggleFetching(false));
};

const _followUnfollowFlow = async (
    dispatch: DispatchType,
    userId: number,
    apiMethod: any,
    actionCreator: (userId: number) => ActionsType
) => {
    dispatch(actions.toggleFollowing(true, userId));

    let data = await apiMethod(userId);

    if (data.resultCode === 0) dispatch(actionCreator(userId));
    dispatch(actions.toggleFollowing(false, userId));
};

export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
};

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);
};

export default usersReducer