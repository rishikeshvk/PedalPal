const initialData = {
    bicycles: []
}

export function bicycleReducer(state = initialData, action) {
    switch (action.type) {
        case 'GET_ALL_BICYCLES': return {
                ...state,
                bicycles: action.payload
            }
        default: return state
    }
}
