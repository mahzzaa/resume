<template>
  <v-card
    color="grey lighten-4"
    light
  >
    <v-card-text>
      <content-section
        title="Who am I?"
      >
       I’m a 20years old full stack developer but I’m more
experienced in back-end, I’ve been doing this for two years.
The things I do are mostly about back-end and servers, But
I've done front-end too. I have 5 years of experience in
robotics and have worked in MRL (mechatronic research
laboratory [in Azad Islamic university in Iran]) for a year.
      </content-section>
      <content-section
        v-if="prouds"
        title="Certifications"
      >
        <v-layout
          v-for="(proud, i) in prouds"
          :key="i"
        >
          <v-flex
            md1
            xs3
          >
            <v-icon right>
              {{ proud.icon }}
            </v-icon>
          </v-flex>
          <v-flex
            md11
            xs9
          >
            <p>
              <strong>{{ proud.text }}</strong><br>
              <small>{{ proud.location }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="educations"
        title="Experience"
      >
        <v-layout
          v-for="(education, i) in educations"
          :key="i"
        >
          <v-flex md4>
            {{ education.from }} - {{ education.to }}
          </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="skills"
        id="to-timeline"
        title="Skills"
      >
        <template slot="actions">
          (% are relative not absolute)
        </template>
        <v-layout wrap>
          <template
            v-for="(skill, i) in skills"
          >
            <v-flex
              v-if="skill.divider"
              :key="i"
              md12
              xs12
              mb-4
            />
            <v-flex
              v-else
              :key="i"
              md6
              xs12
            >
              <div
                class="mr-2 ml-2"
              >
                <div class="align-center">
                  <v-icon
                    small
                  >
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from '@/views/dark-template/content/Section'
export default {
  name      : 'MainContent',
  components: { ContentSection },
  data      : () => ({
    prouds: [
      {
        icon  : 'mdi-chart-pie',
        text  : 'Participate in Asia pacific Robocop 2018, ',
        location: 'Kish Island, Iran',
      },
      {
        icon  : 'mdi-trophy',
        text  : '3rd place Robocop 2019 , small size soccer league',
        location: 'Sydney, Australia',
      },
      {
        icon  : 'mdi-folder-account',
        text  : 'Tap training academy associated with IQS UK certificate Matrices pedia training(mpt academy certificate)ICSD certificate',
        location: '11/march/2019',
      }
    ],
    educations: [
      {
        from       : '2013',
        to         : '2018',
        title      : 'Working and researching in the junior team',
        location   : 'Isfahan, Iran',
        // description: 'Became a member of University Academic Association of Computer Science',
      },  
       {
        from       : '2018',
        to         : '2019',
        title      : 'Software researcher in MRL mechatronic research laboratory',
        location   : ' Azad Islamic university, Qazvin, Iran',
        description: 'Take part in 3 races',
      },
      
    ],
    skills: [
      {
        title: 'PHP',
        icon : 'mdi-language-php',
        value: 100,
      },
      {
        title: 'JavaScript',
        icon : 'mdi-language-javascript',
        value: 60,
      },
      {
        title: 'Laravel Framework',
        icon : 'mdi-laravel',
        value: 100,
      },
      {
        title: 'Vue.js Framework',
        icon : 'mdi-vuejs',
        value: 80,
      },
      { divider: true },
      {
        title: 'HTML',
        icon : 'mdi-language-html5',
        value: 60,
      },
      {
        title: 'linux administration',
        icon : 'mdi-linux',
        value: 80,
      },
      {
        title: 'Python',
        icon : 'mdi-language-python',
        value: 40,
      },
      {
        title: 'CSS',
        icon : 'mdi-language-css3',
        value: 60,
      },
        {
        title: 'Git',
        icon : 'mdi-git',
        value: 100,
      },    
      { divider: true },
        {
        title: 'programming',
        icon : 'mdi-language-csharp',
        value: 35,
      },
      {
        title: 'C programming',
        icon : 'mdi-language-C',
        value: 60,
      },
      {
        title: 'programming',
        icon : 'mdi-language-cpp',
        value: 80,
      },
      { divider: true },
      {
        title: 'Image processing',
        icon : 'mdi-account-group',
        value: 60,
      },
      {
        title: 'Avr microcontroller programming',
        icon : 'mdi-chip',
        value: 80,
      },
    ],
  }),
}
</script>

<style scoped>
.title {
  border-bottom: 2px #539140 solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
