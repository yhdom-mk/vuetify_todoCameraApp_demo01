<template>
  <div class="home pa-6">
    <h2>Camera Page</h2>
  </div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card class="camera-frame">
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
  <div class="d-flex justify-space-around align-center pa-md">
    <v-btn
      v-if="hasCameraSupport"
      @click="captureImage"
      color=#E0E0E0
      icon="mdi-camera"
    ></v-btn>
  </div>
  <v-file-input
    v-if="!hasCameraSupport"
    v-model="imageUpload"
    @change="captureImageFallback"
    class="px-6"
    accept="image/*"
    label="Choose an Image File"
  ></v-file-input>
  <!-- <div class="d-flex justify-space-around align-center px-4">
    <v-btn
      class="white--text"
      rounded="pill"
      color=#00BFA5
    >POST IMAGE</v-btn>
  </div> -->
  <div class="px-4">
    <v-text-field
      v-model="newTodoTitle"
      class="pa-3"
      variant="underlined"
      label="Todo"
      hide-details="true"
      clearable
    ></v-text-field>
  </div>
  <div class="px-4">
    <v-text-field
      v-model="newTodoSubTitle"
      class="pa-3"
      variant="underlined"
      label="SubTitle"
      hide-details="true"
      clearable
    ></v-text-field>
  </div>
  <div class="px-4">
    <v-text-field
      v-model="newTodoTextcoments"
      class="pa-3"
      variant="underlined"
      label="Context"
      hide-details="true"
      clearable
    ></v-text-field>
  </div>
  <div class="d-flex justify-space-around align-center mb-lg">
    <v-btn
      @click="addNewTodotask"
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
    imageCaptured: false,
    imageUpload: [],
    hasCameraSupport: true,
    newTask: [],
    newTodoTitle: '',
    newTodoSubTitle: '',
    newTodoTextcoments: '',
  }),
  methods: {
    initCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      }).catch( ()=> {
        this.hasCameraSupport = false
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
      this.post.photo = this.dataURItoBlob(canvas.toDataURL())
      this.disableCamera()
    },
    captureImageFallback(file) {
      this.post.photo = file.target.files[0]
      // console.log('file:', file)
      console.log('photo:', this.post.photo)

      let canvas = this.$refs.canvas
      let context = canvas.getContext('2d')

      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);
        }
        img.src = event.target.result;
      }
      reader.readAsDataURL(file.target.files[0]);
      this.imageCaptured = true
    },
    disableCamera() {
      this.$refs.video.srcObject.getVideoTracks().forEach(track => {
        track.stop()
      });
    },
    dataURItoBlob(dataURI) {
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = window.atob(dataURI.split(',')[1]);

      // separate out the mime component
      var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);

      // create a view into the buffer
      var ia = new Uint8Array(ab);

      // set the bytes of the buffer to the correct values
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

      // write the ArrayBuffer to a blob, and you're done
      var blob = new Blob([ab], {type: mimeString});
      return blob;
    },
    addNewTodotask() {
      let newTask = {
        taskId: Date.now(),
        taskTitle: this.newTodoTitle,
        subTitle: this.newTodoSubTitle,
        photoImages: this.post.photo,
        textComents: this.newTodoTextcoments,
        done: false
      }
      this.newTask.push(newTask)
      console.log(newTask)
      
      this.$emit('sendNewTask', this.newTask)
    }
  },
  mounted() {
    this.initCamera()
  },
  beforeUnmount() {
    if(this.hasCameraSupport) {
      this.disableCamera()
    }
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