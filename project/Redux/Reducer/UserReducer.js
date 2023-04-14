const initialData = {
    userData:null,
    isLoggedIn: false,
    

}
const UserReducer = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_USER":
            const var_data = action.payload
            return {
                ...state,
                isLoggedIn: true,
                userData: var_data,
            }

        case "REMOVE_USER":
            console.log("REMOVE_USER")
            return {
                ...state,
                isLoggedIn: false,
            };

        case "AMOUNT ADDER":
        
            return {
                ...state,
                isLoggedIn: false,
            };
        default: return state;
    }

}
export default UserReducer;