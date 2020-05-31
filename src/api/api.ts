import axios from 'axios'
import {PhotosType, ProfileType, UserType} from "../types/types"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "49b8c148-8504-4177-871f-fdd46ee0d97e"
    }
});

type SimpleResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

type GetUsersResponseType = {
    items: Array<UserType>
    totalCount: number
    error: string
}

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) =>
        instance.get<GetUsersResponseType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data),

    follow: (userId: number) =>
        instance.post<SimpleResponseType>(`follow/${userId}`)
            .then(response => response.data),

    unfollow: (userId: number) =>
        instance.delete<SimpleResponseType>(`follow/${userId}`)
            .then(response => response.data),

    getUserProfile: (userId: number) => {
        console.warn('Obsolete method. Please use profileAPI.getProfile');
        return profileAPI.getProfile(userId);
    }
};

/** profileAPI*/
type UpdateStatusResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}
type SavePhotoResponseType = {
    data: {
        photos: PhotosType
    }
    resultCode: number
    messages: Array<string>
}
type SaveProfileResponseType = {
    resultCode: number
    messages: Array<string>
    data: {}
}

export const profileAPI = {
    getProfile: (userId: number) =>
        instance.get<ProfileType>(`profile/` + userId)
            .then(response => response.data),

    getStatus: (userId: number) =>
        instance.get<string>(`profile/status/` + userId)
            .then(response => response.data),

    updateStatus: (status: string) =>
        instance.put<UpdateStatusResponseType>(`profile/status/`, {status})
            .then(response => response.data),

    savePhoto: (file: any) => {
        let formData = new FormData();
        formData.append('image', file);
        return instance.put<SavePhotoResponseType>(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => response.data)
    },

    saveProfile: (
        {
            userId,
            lookingForAJob = false,
            lookingForAJobDescription = "",
            fullName,
            contacts,
            aboutMe = ""
        }: ProfileType) =>
        instance.put<SaveProfileResponseType>('profile/', {userId, lookingForAJob, lookingForAJobDescription, fullName, contacts, aboutMe})
            .then(response => response.data)

}

export enum ResultCodesEnum {
    Success = 0,
    Error = 1
}
export enum ResultCodeWithCaptcha {
    CaptchaIsRequired = 10
}

/** authAPI*/
type MeResponseType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}
type LoginResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        userId: number
    }
}

export const authAPI = {

    authCheck: () => instance.get<MeResponseType>(`auth/me/`)
        .then(response => response.data),

    login: (email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) => instance.post<LoginResponseType>('auth/login/', {email, password, rememberMe, captcha})
        .then(response => response.data ),

    logout: () => instance.delete<SimpleResponseType>('auth/login/')
        .then(response => response.data ),
}

/** securityAPI*/
type GetCaptchaResponseType = {
        url: string
}

export const securityAPI = {

    getCaptcha: () => instance.get<GetCaptchaResponseType>('security/get-captcha-url/')
        .then(response => response.data)
};