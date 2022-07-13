<template>
  <div class="home pa-6">
    <h1>Todo Page</h1>
  </div>
  <v-container fluid>
          <v-card
            border
            class="mb-2"
            density="compact"
            subtitle="Salsa, merengue, y cumbia"
            title="Todo Title"
            variant="text"
          >
            <v-img src="https://picsum.photos/512/128?image=660" height="128" cover></v-img>

            <v-card-text>
              During my last trip to South America, I spent 2 weeks traveling through Patagonia in Chile. 
            </v-card-text>

            <template v-slot:actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
            </template>
          </v-card>

          <v-card
            border
            density="comfortable"
            prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
            subtitle="Salsa, merengue, y cumbia"
            title="Florida"
            variant="text"
          >
            <v-img src="https://picsum.photos/512/128?random" height="128" cover></v-img>

            <v-card-text>
              During my last trip to Florida, I spent 2 weeks traveling through the Everglades.
            </v-card-text>

            <template v-slot:actions>
              <v-btn color="primary" variant="text">View More</v-btn>

              <v-btn color="primary" variant="text">See in Map</v-btn>
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
          taskTitle:"Wake up",
          subTitle: "Salsa, merengue, y cumbia",
          photoImages: "https://picsum.photos/512/128?random",
          textComents: "During my last trip to Florida, I spent 2 weeks traveling through the Everglades."
        }
      ]
    }),
  }
</script>