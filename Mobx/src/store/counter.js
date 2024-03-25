import {makeAutoObservable, } from "mobx"

class Counter {
    count = 0
    timer = 60
    constructor() {
        makeAutoObservable(this)
    }
    increment() {
        this.count = this.count + 1
    }
    decrement() {
        this.count = this.count - 1 
    }
    get total() {
        return `Count +timer =` + this.timer + this.count
    }

    fetchTodo() {
        fetch("https:/jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                this.todos = [...this.todos, ...json]
            })
    }
}
export default new Counter()