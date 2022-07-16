<template>
  <div class="home pa-6">
    <h2>Todo Page</h2>
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

        <template v-slot:actions>
          <v-card @click="doneTask(task.taskId)">
            <div class="d-flex justify-end">
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
              <v-btn color="primary" variant="text">Complete</v-btn>
              <v-btn color="primary" variant="text">Delete</v-btn>
              <!-- <v-card-text>{{ new Date() }}</v-card-text> -->
            </div>
          </v-card>
        </template>
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
      tasks: [
        {
          taskId: 1,
          taskTitle:"Wake up",
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
      ]
    }),
    methods: {
      doneTask(id) {
        let task = this.tasks.filter(task => task.taskId === id)[0]
        task.done = !task.done
        // console.log(taskId);
      }
    }
  }
</script>