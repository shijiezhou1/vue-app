<template>
  <v-app>
    <div id="app">
      <div class="main-navbar-section">
        <vue-navigation-bar
          id="vue-navigation-bar"
          :options="navbarOptions"
          @vnb-item-clicked="vnbItemClicked"
        ></vue-navigation-bar>
      </div>
      <router-view />
      <!-- <div v-show="jwt !== null">
      <p>Returned JWT: {{jwt}}</p>
      <p>
        <a @click="logOut" href="#">Log Out</a>
      </p>
    </div>

    <form class="form-signin" @submit.prevent="login" v-show="jwt == null">
      <label for="inputUsername">Username</label>
      &nbsp;
      <input
        v-model="username"
        type="text"
        id="inputUsername"
        placeholder="Username"
        required
        autofocus
      />
      <br />
      <br />
      <label for="inputPassword">Password</label>
      &nbsp;
      <input
        v-model="password"
        type="password"
        id="inputPassword"
        placeholder="Password"
        required
      />
      <p>
        <input type="submit" value="Sign In" />
      </p>
    </form> -->
    </div>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      navbarOptions: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 992,
        brandImagePath: './',
        brandImage: require('../src/assets/images/lockup-color.png'),
        brandImageAltText: 'brand-image',
        collapseButtonImageOpen: require('../src/assets/images/collapse-menu-dark.png'),
        collapseButtonImageClose: require('../src/assets/images/times.png'),
        showBrandImageInMobilePopup: true,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsRight: [
          {
              type: 'link',
              text: 'Projects',
              subMenuOptions: [
                  {
                      type: 'link',
                      text: 'Expedition',
                      path: './expedition',
                      iconLeft: '<i class="fa fa-user fa-fw"></i>'
                  },
                  {
                      type: 'link',
                      text: 'Collection',
                      path: './collection',
                      iconLeft: '<i class="fa fa-star fa-fw"></i>'
                  },
                  {
                      type: 'hr'
                  },
                  {
                      type: 'link',
                      text: 'Exclusive',
                      path: './exclusive',
                      iconLeft: '<i class="fas fa-air-freshener" aria-hidden="true"></i>'
                  }
              ]
          },
          {
            type: 'link',
            text: 'About',
            subMenuOptions: [
              {
                isLinkAction: false,
                type: 'link',
                text: 'About',
                subText: 'Information about who is it.',
                path: './about'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Blog',
                subText: 'Enjoy writing blog on Coach.',
                path: './blog'
              },
              { type: 'hr' },
              {
                type: 'link',
                text: 'Podcast',
                subText: 'Listen daily podcast route.',
                path: './podcast'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Book',
                subText: 'Read book to learn.',
                path: './book'
              },
              {
                type: 'hr'
              },
              {
                type: 'link',
                text: 'Consociation',
                subText: 'Consociation relative.',
                path: './consociation'
              }
            ]
          },
          {
            type: 'link',
            text: 'CV',
            path: './cv'
          },
          {
            type: 'link',
            text: 'Contact',
            path: './contact'
          }
        ]
        // menuOptionsRight: [
        //   {
        //     type: "button",
        //     text: "Signup",
        //     path: "./signup",
        //     class: "button-red"
        //   },
        //   {
        //     type: "button",
        //     text: "Login",
        //     path: "./login",
        //     iconRight:
        //       '<svg id="i-arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M22 6 L30 16 22 26 M30 16 L2 16" /> </svg>'
        //   }
        // ]
      },
      username: "admin",
      password: "passwd",
      jwt: null,

    };
  },
  methods: {
    logOut() {
      this.jwt = null;
      this.$toasted.global
        .appSuccess( {
          message: "Locally Logged Out!"
        } )
        .goAway( 1200 );
    },

    login() {
      if ( this.$socket.disconnected ) {
        this.$toasted.global
          .appError( {
            message: "You are not connected to the server!"
          } )
          .goAway( 1200 );
      } else {
        this.$socket.emit( "authenticate", {
          data: JSON.stringify( {
            username: this.username,
            password: this.password
          } )
        } );
      }
    },
    vnbItemClicked( text ) {
      if ( text === 'About' ) {
        // alert("'About' was selected.");
      }
    }
  },
  sockets: {
    auth: function ( response ) {
      this.jwt = response.jwt;
    }
  }
};
</script>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");

#app {
  height: 100%;
  height: 100vh;
  width: 100%;

  // ONLY FOR VUE NAVIGATION BAR
  #vue-navigation-bar {
    margin-left:10px;

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
    &__top{
      &__close-button{
        &__image{
          max-height: 30px!important;
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
