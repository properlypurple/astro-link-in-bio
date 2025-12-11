// @ts-check
import profileImage from './src/images/avatar.png?url';
import backgroundImage from './src/images/backgrounds/watercolor-blue-green.png?url';
import productImage from './src/images/product1.png?url';

/** @type {import('./src/types').SiteConfig} */
const config = {
  user: {
    name: "Kavya Gokul",
    bio: "AuDHD queer weird person, maker of machines, electronic things, strange art, and so on",
    profileImage: profileImage,
  },
  background: {
    color: "#f0f0f0",
    image: backgroundImage,
  },
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/properlypurple",
      icon: "camera-retro",
    },
    {
      platform: "mastodon",
      url: "https://tech.lgbt/@properlypurple",
      icon: "mastodon",
    },
    // Add more social links as needed
    // Search for icons here - https://fontawesome.com/search
  ],
  links: [
    {
      title: "Github",
      url: "https://github.com/properlypurple",
      icon: "code",
    },
    {
      title: "My Personal Web Site",
      url: "https://properlypurple.com",
      icon: "globe",
    },
    {
      title: "Interview at Shecancode",
      url: "https://shecancode.io/meet-kavya-gokul-happiness-engineer-at-automattic/",
      icon: "globe",
    {
      title: "Join My Maker YouTube Channel",
      url: "https://www.youtube.com/@ThePurpleMaker",
      icon: "play",
    },
    // Add more links as needed
  ],
  products: [
  //   {
  //     title: "Digital Product",
  //     description: "Description of your digital product",
  //     url: "https://inshortpod.com",
  //     price: 19.99,
  //     includePriceOnSite: true,
  //     image: productImage,
  //   },
    // Add more products as needed
  ],
};

export const analytics = {
  posthog: {
    enableTracking: false
  }
};

export default config;
