
// MILESTONE 1
// Stampare all'interno di una lista, un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
// Bonus:
// 1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            todos: [
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Portare fuori il cane',
                    done: false
                },
                {
                    text: 'Andare in palestra',
                    done: false
                },
                {
                    text: 'Comprare un regalo a Mario',
                    done: true
                },
                {
                    text: 'Chiamare Reginaldo',
                    done: true
                }
            ],
            newTodo: '',
        },
        methods: {
            // MILESTONE 2
            removeTodo(n) {
                this.todos.splice(n, 1)
            },
            // MILESTONE 3
            addTodo() {
                userTodo = this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1);
                this.todos.push({text: userTodo, done: false});
                this.newTodo = '';
            },
            // BONUS 2
            activeDone(n) {
                const clickedTodo = this.todos[n];
                if (clickedTodo.done) {
                    clickedTodo.done = false;
                } else {
                    clickedTodo.done = true;
                }
            }
        },
    }
);