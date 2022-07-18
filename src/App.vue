<template>
  <!-- <v-app id="inspire"> -->
    <v-card>
      <v-layout>
      <v-app-bar
        color="primary"
        prominent
      >
        <v-app-bar-nav-icon variant="text" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Vuetify Todo App</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-plus"></v-btn>
      </v-app-bar>
      <!-- <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar> -->
      <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
      >
      <v-list density="compact">
        <v-list-item-header>
          <v-list-item-title class="text-h6">
            Vuetify Todo
          </v-list-item-title>
          <v-list-item-subtitle>
            To use Camera for your TODO
          </v-list-item-subtitle>
        </v-list-item-header>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :value="item"
          :to="item.to"
          active-color="primary"
          >
          <v-list-item-avatar start>
            <v-icon :icon="item.icon"></v-icon>
          </v-list-item-avatar>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>
      <v-main>
        <!-- <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text> -->
        <router-view></router-view>
      </v-main>
      </v-layout>
      <!-- <v-main style="height: 250px"></v-main> -->
    </v-card>
    

    <!-- <v-navigation-drawer permanent
      v-model="drawer"
      app>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  <!-- </v-app> -->
</template>

<script>
  export default {
    props: {
      // activityType: {
      //   type: String,
      //   default: ''
      // }
      // iconType: {
      //   type: String,
      //   default: ''
      // }
      icons: {
        iconfont: 'mdi',
      }
    },
    data: () => ({
      // icons: {
      //   iconfont: 'mdi',
      // },
      drawer: null,
      items: [
        { title:'Todo', icon:'mdi-help-box', to:'/' },
        { title:'Photos', icon:'mdi-image', to:'/photo' },
      ],
      // iconType: {
      //   type: String,
      //   default: ''
      // },
      // activityType: {
      //   type: String,
      //   default: ''
      // },
      // iconType: this.activityType, 
      // iconName: 'mdi-script-text-outline', 
      // iconMapping: {
      //   learning_material_video: "mdi-video",
      //   learning_material_quiz: "mdi-head-question-outline",
      //   learning_material_article: "mdi-script-text-outline",
      // }//[this.iconType] || 'mdi-script-text-outline',
    }),
    mounted(){
      // this.iconName = this.iconMapping[this.iconType]
    },
    computed: {
      // iconName() {
      //   return this.iconMapping[this.activityType]
      // },
    }
  }
</script>