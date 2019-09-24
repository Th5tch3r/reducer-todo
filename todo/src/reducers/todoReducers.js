export const initialState = {
    todos: [
        {
            task: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ],
    task: ''
}

export const todoReducer = (state, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}