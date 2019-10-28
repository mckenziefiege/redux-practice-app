import store from './index.js';

export const LOAD_TODOS = "LOAD_TODOS";

export const loadTodosAction = (todos) => ({
    type: LOAD_TODOS,
    payload: todos
})

export const loadTodos = () => {
    console.log('hit')
    return (dispatch) => {
        return fetch("http://localhost:3000/todos")
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            // .then(resp => dispatch(loadTodosAction(resp)))
            .catch(console.error)
    }
}