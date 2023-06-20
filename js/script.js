console.log('JS OK');
console.log('VUE OK',Vue);

//Estrapolo il metodo createapp
const { createApp } = Vue;

//Inizializzo l'app Vue
const app = createApp({
    data(){
        return{
            newTask: '',
            filtredTask: '',
            tasks: [
                { id: 1, done: false, text: 'Fare la spesa'},
                { id: 2, done: false, text: 'Pulire casa'},
                { id: 3, done: false, text: 'Lavare automobile'},
                { id: 4, done: false, text: 'Comprare una marca da bollo'},
                { id: 5, done: false, text: 'Aggiornare il PC'},
            ],
        }
    },
    computed: {
         //Funzione per controllare l'id più alto
        nextId() {
            let highestId = 0;
            this.tasks.forEach(task => {
                if (task.id > highestId) highestId = task.id;
            });
            const nextId = ++highestId;
            return nextId;
        },
        //Funzione per filtrare la ricerca
        researchTask() {
            const researched = this.filtredTask.toLowerCase();
            return this.tasks.filter((task) => {
              return task.text.toLowerCase().includes(researched);
            });
          },
    },
    methods : {
        //Funzione per eliminare una task
        deleteTask(targetId){
            this.tasks = this.tasks.filter((task) => targetId !== task.id);
        },

        //Funzione per aggiungere una task
        addTask(){
            if(!this.newTask.length) return;
            const newTask = { id: this.nextId, text: this.newTask, done: false,};
            this.tasks.push(newTask);
            this.newTask = '';
        },

        //Funzione per le task completate
        doneTasks(){
            return this.tasks.filter(task => task.done)
        },
        
        //Funzione per le task non completate
        undoneTasks(){
            return this.tasks.filter(task => !task.done)
        },
    }
    }
);

//Monto nell'elemento HTML "radice"
app.mount('#root');