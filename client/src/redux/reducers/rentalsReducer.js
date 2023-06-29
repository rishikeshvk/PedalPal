const initialData = {
    rentals: [],
};

export const rentalsReducer = (state = initialData, action) => {
    switch (action.type) {
        case 'GET_ALL_RENTALS':
            return {
                ...state,
                rentals: action.payload
            };
        default:
            return state;
    }
}