export default {
  elementId: 'main-navbar',
  isUsingVueRouter: true,
  mobileBreakpoint: 992,
  brandImagePath: './',
  brandImage: require('@/assets/images/lockup-color.png'),
  brandImageAltText: 'brand-image',
  collapseButtonImageOpen: require('@/assets/images/collapse-menu-dark.png'),
  collapseButtonImageClose: require('@/assets/images/times.png'),
  showBrandImageInMobilePopup: true,
  ariaLabelMainNav: 'Main Navigation',
  tooltipAnimationType: 'shift-away',
  menuOptionsRight: [
    {
      type: 'link',
      text: 'O',
    },
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
}
