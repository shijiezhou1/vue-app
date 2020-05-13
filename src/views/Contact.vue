<template>
  <div id="contact">
    <h1>Contact:</h1>
    <BlockQuoteContent
      content="Tough-minded optimists approach problems with a can-do philosophy and emerge stronger from tragedies"
      author="Lucius Annaeus Senca"
      occupation="Ancient Roman philosopher"
    ></BlockQuoteContent>
        <v-form 
            class="d-flex justify-center"
            ref="form">
            <v-col cols="6" >
            <v-text-field 
            v-model="email" 
            :rules="emailRules" 
            label="E-mail" required></v-text-field>
            <v-btn color="success" class="mr-4" v-on:click="subscribe">submit</v-btn>
            <v-btn color="warning" @click="clear">clear</v-btn>
            </v-col>
        </v-form>
    <h2>Social Media</h2>
    <div>Facebook</div>
    <div>Linkedin</div>
    <div>Medium</div>
    <div>Twitter</div>
    <div>Reddit</div>
  </div>
</template>

<script>
import axios from "axios";
import BlockQuoteContent from "../components/BlockQuoteContent.vue";

export default {
  data: () => {
    return {
      email: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  components: {
    BlockQuoteContent
  },
  methods: {
    subscribe() {
        console.log(this.email);

      // const url = "https://www.okay.com";
      // axios.post(url, {
      //     email: ''
      // })
      // .then(function (response) {
      //     console.log(response);
      // })
      // .catch(function (error) {
      //     console.log(error);
      // });
    },
    clear () {
        this.email = ''
    },
  }
};
</script>

<style lang="scss" scoped="scoped">
#contact {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

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
