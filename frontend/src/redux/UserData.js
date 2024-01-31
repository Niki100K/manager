const initialState = {
    userData: '',
    isActive: false,
}

export const UserData = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state, userData: action.payload, isActive: true
            }
        case 'UNSET_USER':
            return {
                ...state, userData: '', isActive: false
            }
        default:
            return state;
    }
}