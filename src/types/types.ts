import React from "react";

export type UserType = {
    id: number
    name: string
    status?: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}