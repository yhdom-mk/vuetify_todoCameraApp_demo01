<template>
  <div class="home pa-6">
    <h2>Camera Page</h2>
  </div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <video
            ref="video"
            class="full-width"
            autoplay
          ></video>
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
      rounded="lg"
      color=#00BFA5
    >Add</v-btn>
  </div>
  <!-- v-model="newTaskTitle"
    @keyup.enter="addTask"
    @click:append="addTask" -->
  <v-footer
    class="bg-grey-lighten-1"
  ></v-footer>
</template>

<script>
export default({
  methods: {
    initCamera() {
      navigator.mediaDevices.getUserMedia({
        video: true
      }).then(stream => {
        this.$refs.video.srcObject = stream
      })
      // console.log('init Camera');
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
})
</script>


<style lang="sass">
  .camera-frame
    border: 2px solid
</style>