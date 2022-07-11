<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        bottom
        temporary
      >
      <v-list-item>
        <!-- <v-list-item-content> -->
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        <!-- </v-list-item-content> -->
      </v-list-item>
      <v-list
        :items="items"
      ></v-list>
    </v-navigation-drawer>

    <!-- <v-navigation-drawer permanent
      v-model="drawer"
      app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

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

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- <div v-if="iconName !== ''">
        <v-icon large color="blue-grey darken-2">{{ iconName }}</v-icon> 
      </div> -->
    </v-main>
  </v-app>
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
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
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