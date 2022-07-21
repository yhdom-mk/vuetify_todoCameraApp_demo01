<template>
  <div class="home pa-6">
    <h2>Todo Page</h2>
  </div>
  
  <div class="px-4">
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      variant="underlined"
      label="Todo"
      append-icon="mdi-plus"
      hide-details="true"
      clearable
    ></v-text-field>
  </div>
 
  <v-container fluid>
    <v-card
      v-for="task in tasks"
      :key="task.id"
      :class="{ 'indigo lighten-5': task.done }"
      border
      class="mb-2"
      density="compact"
      subtitle v-bind:text="task.subTitle"
      v-bind:title="task.taskTitle"
      variant="text"
    >
      <v-card-text>{{ task.textComents }}</v-card-text>
      <v-img v-bind:src="task.photoImages" height="128" cover></v-img>
      <v-btn color="primary" variant="text">View More</v-btn>
      <div class="px-4">
        <v-chip-group v-model="selection">
          <v-chip>0%</v-chip>
          <v-chip>25%</v-chip>
          <v-chip>50%</v-chip>
          <v-chip>75%</v-chip>
          <v-chip>100%</v-chip>
          <!-- <div class="d-flex justify-end"> -->
          
          <!-- </div> -->
        </v-chip-group>
        <div class="d-flex justify-end">
          <v-btn
            class="px-4"
            @click="deleteTask"
            color="red"
            variant="text"
            >Delete{{ task.taskId}}
            <v-icon icon="mdi-delete"></v-icon>
          </v-btn>  
        </div>
      </div>
      
      <!-- <template v-slot:actions>
        <v-card
          @click="doneTask(task.taskId)"
          class="mx-auto"
          width="auto"> -->
          
          <!-- <v-list-item-header>
            <v-checkbox
              :input-value="task.done"
              color="primary"
            ></v-checkbox>
          </v-list-item-header> -->

          <!-- <div class="px-4">
            <v-chip-group v-model="selection">
              <v-chip>0%</v-chip>
              <v-chip>25%</v-chip>
              <v-chip>50%</v-chip>
              <v-chip>75%</v-chip>
              <v-chip>100%</v-chip> -->
              <!-- <div class="d-flex justify-end"> -->
              
              <!-- </div> -->
            <!-- </v-chip-group>
          </div> -->
        <!-- </v-card>
      </template> -->
    </v-card>
  </v-container>
  <v-footer
    class="bg-grey-lighten-1"
  >
    <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col
        class="text-center text-white mt-4"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>TodoHome Page</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      newTaskTitle: '',
      tasks: [
        {
          taskId: 1,
          taskTitle:"Wake up early, for three weeks",
          subTitle: "It is starting in a Good day",
          photoImages: "https://picsum.photos/512/128?image=660",
          textComents: "If you wake up earliy, you get something you unexpected.",
          done: false
        },
        {
          taskId: 2,
          taskTitle:"Study AWS",
          subTitle: "you should study cloudService in AWS",
          photoImages: "https://picsum.photos/512/128?random",
          textComents: "you look around, CloudService run anywhere.",
          done: true
        },
        {
          taskId: 3,
          taskTitle:"Program in TypeScript",
          subTitle: "It is important to keep typping in laung",
          photoImages: "https://picsum.photos/512/128?image=660",
          textComents: "you code in Vue, you must undersatand it in Typescript.",
          done: true
        },
      ],
      selection: 1
    }),
    methods: {
      doneTask(id) {
        let task = this.tasks.filter(task => task.taskId === id)[0]
        task.done = !task.done
        // console.log(taskId);
      },
      addTask() {
        let newTask = {
          taskId: Date.now(),
          taskTitle: this.newTaskTitle,
          subTitle: "It is important to keep typping in laung",
          photoImages: "https://picsum.photos/512/128?random",
          textComents: "you code in Vue, you must undersatand it in Typescript.",
          done: false
        }
        this.tasks.push(newTask)
        // console.log('add Task');
        console.log(newTask);
        console.log(this.tasks);
      },
      deleteTask() {
        const tasksProxy = new Proxy(this.tasks, {
          get: (obj, prop) => {
            console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
          },
          set: (obj, prop, value) => {
            console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
            Reflect.set(obj, prop, value);
          }
        })

        let id = tasksProxy.taskId
        this.tasks = this.tasks.filter(task => task.taskId !== id)
        console.log(this.tasks);
        console.log(id);
      }
    }
  }

//   ref setup を使用するコード
  // import { ref } from 'vue'
  // export default {
  //   newTask: '',
  //   tasks: [
  //     {
  //       taskId: 1,
  //       taskTitle:"Wake up early, for three weeks",
  //       subTitle: "It is starting in a Good day",
  //       photoImages: "https://picsum.photos/512/128?image=660",
  //       textComents: "If you wake up earliy, you get something you unexpected.",
  //       done: false
  //     },
  //     {
  //       taskId: 2,
  //       taskTitle:"Study AWS",
  //       subTitle: "you should study cloudService in AWS",
  //       photoImages: "https://picsum.photos/512/128?random",
  //       textComents: "you look around, CloudService run anywhere.",
  //       done: true
  //     },
  //     {
  //       taskId: 3,
  //       taskTitle:"Program in TypeScript",
  //       subTitle: "It is important to keep typping in laung",
  //       photoImages: "https://picsum.photos/512/128?image=660",
  //       textComents: "you code in Vue, you must undersatand it in Typescript.",
  //       done: true
  //     },
  //   ],
  //   setup() {
  //     const tasks = ref([])

  //     const doneTask = (id)=> {
  //       let task = this.tasks.filter(task => task.taskId === id)[0]
  //       task.done = !task.done
  //       // console.log(taskId);
  //     }

  //     const addTask = ()=> {
  //       let newTask = {
  //         taskId: Date.now(),
  //         taskTitle: this.newTaskTitle,
  //         subTitle: "It is important to keep typping in laung",
  //         photoImages: "https://picsum.photos/512/128?random",
  //         textComents: "you code in Vue, you must undersatand it in Typescript.",
  //         done: false
  //       }
  //       this.tasks.push(newTask)
  //       // console.log('add Task');
  //       console.log(newTask);
  //       console.log(this.tasks);
  //     }
      
  //     const deleteTask = ()=> {
  //       let id = this.tasks.taskId
  //       this.tasks = this.tasks.filter(task => task.taskId !== id)
  //       console.log(this.tasks);
  //       console.log(id);
  //     }
  //     return { tasks, doneTask, addTask, deleteTask }
  //   }
  // }
</script>