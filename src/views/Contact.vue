<template>
  <div id="contact">
    <h1>Contact:</h1>
    <BlockQuoteContent
      content="Tough-minded optimists approach problems with a can-do philosophy and emerge stronger from tragedies"
      author="Lucius Annaeus Senca"
      occupation="Ancient Roman philosopher"
    ></BlockQuoteContent>

    <v-form class="emailform" ref="form">
      <v-row class="d-flex justify-center">
        <v-col lg="6" md="6" sm="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            placeholder="Enter email to subscribe"
            required
          >
            <v-icon
              slot="append"
              color="green"
            >{{ status }}</v-icon>
          </v-text-field>
          <v-btn
            color="success"
            class="mr-4"
            v-on:click="subscribe"
            :disabled="isDisabled"
          >submit</v-btn>
          <v-btn
            color="warning"
            @click="clear"
          >clear</v-btn>
        </v-col>
      </v-row>
    </v-form>

    <br>


    <v-btn fab icon v-on:click="oLink('https://gitlab.com/shijiezhou1')" color="orange"><v-icon>{{svgObj.gitlab}}</v-icon></v-btn>
    <v-btn fab icon v-on:click="oLink('https://www.linkedin.com/in/shijiezhou1/')" color="blue"><v-icon>{{svgObj.linkedin}}</v-icon></v-btn>
    <v-btn fab icon v-on:click="oLink('https://github.com/shijiezhou1')" color="black"><v-icon>{{svgObj.github}}</v-icon></v-btn>
    <v-btn fab icon v-on:click="oLink('https://twitter.com/ShijieZhou5')" color="blue"><v-icon>{{svgObj.twitter}}</v-icon></v-btn>
    <v-btn fab icon v-on:click="oLink('https://stackoverflow.com/users/10401645/software-engineer')" color="orange"><v-icon>{{svgObj.stackoverflow}}</v-icon></v-btn>

  </div>
</template>

<script>
import axios from 'axios';
import BlockQuoteContent from '../components/BlockQuoteContent.vue';
import { mdiGithub, mdiLinkedin, mdiTwitter, mdiStackOverflow, mdiGitlab } from '@mdi/js'

export default {
  data: () => {
    return {
      svgObj: {
        github: mdiGithub,
        gitlab: mdiGitlab,
        linkedin: mdiLinkedin,
        twitter: mdiTwitter,
        stackoverflow: mdiStackOverflow,
      },
      status: null,
      email: '',
      isDisabled: false,
      emailRules: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
    };
  },
  components: {
    BlockQuoteContent
  },
  methods: {
    oLink(href){
        window.open(href, '_blank');
    },
    subscribe() {
      if (!this.$refs.form.validate()) {
        return;
      }
      this.status = 'mdi-check';
      this.isDisabled = true;
      console.log(this.email);
      const url = 'http://localhost:8000/subscribe';
      axios({
        method: 'POST',
        url: url,
        data: { email: this.email },
        headers: { Accept: 'application/x-www-form-urlencoded' }
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    clear() {
      this.isDisabled = false;
      this.email = '';
      this.status = '';
    }
  }
};
</script>

<style lang="scss">
#contact {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;

   .emailform {
        margin: 10px;
    }

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    & img {
      width: 100%;
    }
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    & img {
      max-width: 768px;
    }
  }
  & img {
    max-width: 768px;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    & img {
      max-width: 768px;
    }
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    & img {
      max-width: 768px;
    }
  }
}
</style>
