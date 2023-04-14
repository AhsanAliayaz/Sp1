export const addUser = (payload) => {

    console.log('check......',payload)
    return {
        type: "ADD_USER",
        payload
    }
}
