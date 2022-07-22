<template>
  <div class="home pa-6">
    <h2>Camera Page</h2>
  </div>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
            <v-img
              src="https://picsum.photos/350/165?random"
              height="300"
              class="camera-frame"
            ></v-img>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="sass">
  .camera-frame
    border: 2px solid
</style>