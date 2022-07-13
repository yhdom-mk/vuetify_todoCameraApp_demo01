<template>
  <div class="home pa-6">
    <h1>Photo Page</h1>
  </div>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="n in 8"
        :key="n"
        cols="3"
      >
        <v-sheet
          color="grey-lighten-2"
          height="96"
        ></v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <v-footer class="d-flex flex-column">
    <div class="bg-teal d-flex w-100 align-center px-4">
      <strong class="text-white">Get connected with us on social networks!</strong>

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 py-2 bg-black text-white text-center w-100">
      {{ new Date().getFullYear() }} — <strong>TodoPhoto Page</strong>
    </div>
  </v-footer>
</template>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>