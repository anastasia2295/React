import {makeAutoObservable, makeObservable} from "mobx"


class Todo {
    todos=[
        {id: 1, title: "сходи в магазин", completed: false},
        {id: 2, title: "приготовь поесть", completed: false},
        {id: 3, title: "послушай музыку", completed: false}
    ]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(todo) {
        this.todos.push(todo)
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeTodo(id){
        this.todos = this.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }
}

export default new Todo