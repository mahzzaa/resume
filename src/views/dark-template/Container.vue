
<template>
  <v-app id="dark-template">
    <v-fade-transition
      mode="out-in"
      type="animation"
    >
      <v-content>
        <v-container
          fluid
          fill-height
        >
          <github-ribbon />
          <v-layout
            align-center
            justify-center
          >
            <v-flex
              md10
              sm12
            >
              <v-layout wrap>
                <v-flex
                  md4
                >
                  <sidebar-container class="fill-height" />
                </v-flex>
                <v-flex
                  md8
                >
                  <content-container class="fill-height" />
                </v-flex>
              </v-layout>
              <v-layout>
                <v-flex md12>
                  <timeline-endless />
                </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-fade-transition>
  </v-app>
</template>

<script>
import SidebarContainer from '@/views/dark-template/sidebar/Container'
import ContentContainer from '@/views/dark-template/content/Container'
import TimelineEndless from '@/views/dark-template/timeline/Endless'
import GithubRibbon from '@/views/dark-template/GithubRibbon'

export default {
  name      : 'DarkTemplateContainer',
  components: {
    TimelineEndless,
    ContentContainer,
    SidebarContainer,
    GithubRibbon,
  },
  mounted () {

  },
}
</script>

<style scoped>
#dark-template {
  height: 100%;
  background: #71d4b3;
  background: -webkit-linear-gradient(to left, #3b1ab6af, #022644);
  /* background: linear-gradient(to left, #6ccf9e, #7c2a95); */
  background: linear-gradient(to left, #3b1ab6af, #022644);

  background-size: cover;
}
</style>
