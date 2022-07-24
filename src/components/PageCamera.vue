<template>
  <div class="home pa-6">
    <h2>Camera Page</h2>
  </div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <video
            v-show="!imageCaptured"
            ref="video"
            class="full-width"
            autoplay
          ></video>
          <canvas
            v-show="imageCaptured"
            ref='canvas'
            class="full-width"
            height="320"
            ></canvas>
            <!-- <v-img
              src="https://picsum.photos/350/165?random"
              height="300"
              class="camera-frame"
            ></v-img> -->
          </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div class="d-flex justify-space-around align-center">
    <v-btn
      @click="captureImage"
      color=#E0E0E0
      icon="mdi-camera"
    ></v-btn>
  </div>
  <div class="px-4">
    <v-text-field
      class="pa-3"
      variant="underlined"
      label="Todo"
      hide-details="true"
      clearable
    ></v-text-field>
  </div>
  <div class="px-4">
    <v-text-field
      class="pa-3"
      variant="underlined"
      label="SubTitle"
      hide-details="true"
      clearable
    ></v-text-field>
  </div>
  <div class="px-4">
    <v-text-field
      class="pa-3"
      variant="underlined"
      label="Context"
      hide-details="true"
      clearable
    ></v-text-field>
  </div>
  <div class="d-flex justify-space-around align-center mb-lg">
    <v-btn
      rounded="pill"
      color=#00BFA5
    >POST IMAGE</v-btn>
    <v-btn
      rounded="pill"
      color=#00BFA5
    >ADD TODO</v-btn>
  </div>
  <!-- v-model="newTaskTitle"
    @keyup.enter="addTask"
    @click:append="addTask" -->
  <v-footer
    class="bg-grey-lighten-1"
  ></v-footer>
</template>

<script>
require('md-gum-polyfill')
import { uuid } from 'vue-uuid'

export default {
  name: 'PageCamera',
  data: ()=> ({
    post: {
      id: uuid.v4(),
      caption: '',
      photo: null,
      date: Date.now()
    },
    imageCaptured: false
  }),
  methods: {
    initCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      })
      // console.log('init Camera');
    },
    captureImage() {
      let video = this.$refs.video
      let canvas = this.$refs.canvas
      canvas.width = video.getBoundingClientRect().width
      canvas.height = video.getBoundingClientRect().height
      let context = canvas.getContext('2d')
      context.drawImage(video, 0, 0, canvas.width, canvas.height)
      this.imageCaptured = true
    }
  },
  mounted() {
    this.initCamera()
  }
  // setup() {
  //   const initCamera = () => {
  //     console.log('init camera');
  //   }
  //   return { initCamera }
  // },
  // onMounted() {

  // }
}
</script>


<style lang="sass">
  .camera-frame
    border: 2px solid
</style>