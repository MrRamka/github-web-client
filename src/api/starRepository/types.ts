export interface AddStarResponse {
    addStar: {
        starrable: {
            stargazerCount: number
            viewerHasStarred: boolean
        }
    }
}

export interface RemoveStarResponse {
    removeStar: {
        starrable: {
            stargazerCount: number
            viewerHasStarred: boolean
        }
    }
}
