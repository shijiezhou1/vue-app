<template>
  <v-app>
    <div
      id="app"
    >
      <div class="main-navbar-section">
        <vue-navigation-bar
          id="vue-navigation-bar"
          :options="navbarOptions"
          @vnb-item-clicked="vnbItemClicked"
        ></vue-navigation-bar>
      </div>
      <router-view />
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/core/Footer.vue';
import navbarOptions from '@/assets/navbarOptions';

export default {
  name: 'app',
  components: {
    Footer
  },
  data() {
    return {
      navbarOptions,
      username: "admin",
      password: "passwd",
      jwt: null,
      theme: '',
    };
  },
  mounted() {
    let localTheme = localStorage.getItem('theme'); //gets stored theme value if any
    document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
    this.$vuetify.theme.dark = localTheme == 'darkMode' ? true : false;
  },
  methods: {
    logOut() {
      this.jwt = null;
      this.$toasted.global
        .appSuccess({
          message: "Locally Logged Out!"
        })
        .goAway(1200);
    },
    login() {
      if (this.$socket.disconnected) {
        this.$toasted.global
          .appError({
            message: "You are not connected to the server!"
          })
          .goAway(1200);
      } else {
        this.$socket.emit("authenticate", {
          data: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
      }
    },
    vnbItemClicked(text) {
      if (text === 'O') {
        this.theme = this.theme == 'darkMode' ? '' : 'darkMode'; //toggles theme value
        document.documentElement.setAttribute('data-theme', this.theme); // sets the data-theme attribute
        this.$vuetify.theme.dark = this.theme == 'darkMode' ? true : false;
        localStorage.setItem('theme', this.theme); // stores theme value on local storage
      }
    }
  },
  sockets: {
    auth: function (response) {
      this.jwt = response.jwt;
    }
  },
};
</script>

<style lang="scss">
@import "./styles/index.scss";
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");

#app {
  height: 100%;
  width: 100%;
  background-color: var(--background-color);
  color: var(--text-color);

  #vue-navigation-bar {
    margin-left: 10px;

    div {
      > .vnb__popup__bottom ul li a {
        color: #595959;
        font-weight: 500;
      }
      > a {
        font-weight: 500;
        color: #595959;
      }

      > div.vnb__popup__bottom ul li a:hover {
        text-decoration: none;
        background: #f3f3f3;
        border-left: 2px solid #007aff;
      }
    }
  }
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}

div .main-navbar-section {
  background: #fff;
  box-shadow: 0 1px #0000002e;
  margin: 0px;
}
.vnb {
  font-family: "Montserrat", sans-serif;
  .button-red {
    background: #ff3b30;
    &:hover {
      background: darken(#ff3b30, 10%);
    }
  }
  &__menu-options {
    &__option {
      &__button {
        &__icon {
          svg {
            margin-top: -3px;
          }
        }
      }
    }
  }
  &__popup {
    &__top {
      &__close-button {
        &__image {
          max-height: 30px !important;
          width: 30px;
        }
      }
    }
    &__bottom {
      &__menu-options {
        &__option {
          &__link {
            &__icon {
              svg {
                margin-top: -4px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
