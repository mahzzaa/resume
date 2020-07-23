<template>
  <v-card
    color="transparent"
    dark
  >
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          Ehsun
          <span class="light-green--text text--lighten-3">Motamedi</span>
        </h1>
        <span>A full stack developer</span>
      </div>

      <sidebar-section :options="sections.info" />
      <sidebar-section :options="sections.socials" />
      <sidebar-section :options="sections.hobbies">
        <template v-slot:item="{item}">
          <v-chip>
            <v-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="sections.languages">
        <template v-slot:items="{items}">
          <v-container pa-0>
            <v-layout
              wrap
              class="text-xs-center"
            >
              <template v-for="(item, i) in items">
                <v-flex
                  :key="i"
                  md3
                  sm4
                  xs6
                >
                  <v-progress-circular
                    rotate="360"
                    size="65"
                    width="2"
                    :value="item.value"
                    color="white"
                    class="ma-2"
                  >
                    {{ item.text }}
                  </v-progress-circular>
                </v-flex>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from '@/views/dark-template/sidebar/Avatar'
import SidebarSection from '@/views/dark-template/sidebar/Section'
export default {
  name      : 'Sidebar',
  components: { SidebarSection, Avatar },
  data () {
    return {
      sections: {
        info: {
          title: 'INFO',
          items: [
            {
              name: 'Email',
              icon: 'mdi-email',
              text: 'ehsan.8643@gmail.com',
            },
            // {
            //   name: 'Website',
            //   icon: 'mdi-web',
            //   text: 'amirreza.in',
            // },
            {
              name: 'Birth Date',
              icon: 'mdi-cake-variant',
              text: 'nov 17, 1999',
            },
            {
              name: 'Habitation',
              icon: 'mdi-map-marker',
              text: 'Istanbul, Turkey',
            },
          ],
        },
        socials: {
          title: 'SOCIALS',
          items: [
            {
              icon: 'mdi-github-circle',
              text: 'github.com/robotiizm',
              link: 'https://github.com/robotiizm',
            },
            // {
            //   icon: 'mdi-linkedin-box',
            //   text: 'linkedin.com/in/amirreza-nasiri',
            //   link: 'https://linkedin.com/in/amirreza-nasiri',
            // },
            // {
            //   icon: 'mdi-twitter',
            //   text: 'twitter.com/Amirreza_Nasiri',
            //   link: 'https://twitter.com/Amirreza_Nasiri',
            // },
            {
              icon: 'mdi-telegram',
              text: 'telegram.com/robotizm',
              link: 'https://telegram.com/robotiizm',
            },
          ],
        },
        // hobbies: {
        //   title: 'HOBBIES',
        //   items: [

        //     {
        //       icon: 'mdi-bullseye',
        //       text: 'Getting out of Safe Zone',
        //     },
        //     {
        //       icon: 'mdi-biohazard',
        //       text: 'Challenges',
        //     },
        //     {
        //       icon: 'mdi-bike',
        //       text: 'Cycling',
        //     },
        //     {
        //       icon: 'mdi-image-filter-hdr',
        //       text: 'Nature',
        //     },
        //     {
        //       icon: 'mdi-auto-fix',
        //       text: 'Hacking Stuffs',
        //     },
        //     {
        //       icon: 'mdi-teach',
        //       text: 'Teaching',
        //     },
        //     {
        //       icon: 'mdi-karate',
        //       text: 'Sports',
        //     },
        //     {
        //       icon: 'mdi-music',
        //       text: 'Music',
        //     },
        //     {
        //       icon: 'mdi-account-group',
        //       text: 'Leadership',
        //     },
        //     {
        //       icon: 'mdi-book-open-page-variant',
        //       text: 'Books',
        //     },
        //     {
        //       icon: 'mdi-android-debug-bridge',
        //       text: 'Tickling Bugs!',
        //     },
        //   ],
        // },
        languages: {
          title: 'LANGUAGES',
          items: [
            {
              text : 'English',
              value: 60,
            },
            {
              text : 'Persian',
              value: 100,
            },
          ],
        },
      },
    }
  },
}
</script>

<style scoped>
.sidebar {
  background: #d89a9a;
}
</style>
