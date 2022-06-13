
const initialState = {
    product : ""
}

export const reducer =  (state = initialState, { type, payload }) => {
    switch (type) {

    case "DATA_ADDED" :
        return {
             ...state,
             product : payload
             }

    default:
        return state
    }
}
