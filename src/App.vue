<template>
    <div id="app">
        <section class="main-navbar-section"><vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="vnbItemClicked"></vue-navigation-bar></section>
        <router-view />
    </div>
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
                                text: 'Customer Service',
                                path: './project',
                                iconLeft: '<i class="fa fa-user fa-fw"></i>'
                            },
                            {
                                type: 'link',
                                text: 'Accounting',
                                path: './accounting',
                                iconLeft: '<i class="fa fa-star fa-fw"></i>'
                            },
                            {
                                type: 'hr'
                            },
                            {
                                type: 'link',
                                text: 'Reception',
                                path: './reception',
                                iconLeft:
                                    '<svg id="i-telephone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"> <path d="M3 12 C3 5 10 5 16 5 22 5 29 5 29 12 29 20 22 11 22 11 L10 11 C10 11 3 20 3 12 Z M11 14 C11 14 6 19 6 28 L26 28 C26 19 21 14 21 14 L11 14 Z" /> <circle cx="16" cy="21" r="4" /> </svg>'
                            }
                        ]
                    },
                    {
                        type: 'link',
                        text: 'About',
                        subMenuOptions: [
                            {
                                isLinkAction: true,
                                type: 'link',
                                text: 'About',
                                subText: 'Stupid corporate wet blankets. Like booze ever killed anyone.',
                                path: './about'
                            },
                            {
                                type: 'hr'
                            },
                            {
                                type: 'link',
                                text: 'Locations',
                                subText: "You're a presentation tool!",
                                path: './locations'
                            },
                            {
                                type: 'hr'
                            },
                            {
                                type: 'link',
                                text: 'Blog',
                                subText: 'I enjoy having breakfast in bed. I like waking up to the smell of bacon. Sue me.',
                                path: './blog'
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
            }
        };
    },
    methods: {
        vnbItemClicked(text) {
            if (text === 'About') {
                alert("'About' was selected.");
            }
        }
    }
};
</script>

<style lang="scss" scoped="scoped">
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700');
#app {
    height: 100%;
    height: 100vh;
    width: 100%;
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

.main-navbar-section {
    background: #fff;
    box-shadow: 0 1px #0000002e;
}
.vnb {
    font-family: 'Montserrat', sans-serif;
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
