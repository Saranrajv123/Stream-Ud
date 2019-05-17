export const signIn = (userId) => {
    return {
        type: 'SIGNIN',
        payload: userId
    };
}

export const signOut = () => {
    return {
        type: 'SIGNOUT'
    };
}