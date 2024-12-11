import { MdOutlineDashboard } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import {
  FaUserAlt,
  FaRegCalendarCheck,
  //   FaChevronLeft,
  //   FaChevronDown,
  //   FaSun,
  //   FaRegMoon,
  // FaBars,
} from "react-icons/fa";
import {
  IoSearchOutline,
  IoStatsChartSharp,
  IoFolderOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";


export const Menus = [
  { title: "Dashboard", link: "/", icon: MdOutlineDashboard },
  { title: "Inbox", link: "/", icon: FaRegMessage },
  {
    title: "Accounts",
    link: "/",
    icon: FaUserAlt,
    gap: true,
    submenu: [
      { title: "Profile", link: "/" },
      { title: "Settings", link: "/" },
    ],
  },
  { title: "Schedule", link: "/", icon: FaRegCalendarCheck },
  { title: "Search", link: "/", icon: IoSearchOutline },
  { title: "Analytics", link: "/", icon: IoStatsChartSharp },
  { title: "Files", link: "/", icon: IoFolderOutline, gap: true },
  { title: "Settings", link: "/", icon: IoSettingsOutline },
];

// FOOTER MENUS
export const HOME = [
  { title: "About", link: "/", icon: MdOutlineDashboard },
  { title: "History", link: "/", icon: MdOutlineDashboard },
  { title: "Q n' S", link: "/", icon: MdOutlineDashboard },
  { title: "Faq", link: "/", icon: IoSettingsOutline },
];

export const ABOUT = [
  { title: "Schedule", link: "/", icon: FaRegCalendarCheck },
  { title: "Search", link: "/", icon: IoSearchOutline },
  { title: "Analytics", link: "/", icon: IoStatsChartSharp },
  { title: "Files", link: "/", icon: IoFolderOutline, gap: true },
  { title: "Settings", link: "/", icon: IoSettingsOutline },
];

export const RESOURCES = [
  { title: "Dashboard", link: "/", icon: MdOutlineDashboard },
  { title: "Inbox", link: "/", icon: MdOutlineDashboard },
  { title: "Studio", link: "/", icon: MdOutlineDashboard },
  { title: "Settings", link: "/", icon: IoSettingsOutline },
];

export const PRODUCTS = [
  { title: "Figma", link: "/", icon: MdOutlineDashboard },
  { title: "Photoshop", link: "/", icon: MdOutlineDashboard },
  { title: "Figjim", link: "/", icon: MdOutlineDashboard },
  { title: "Aura", link: "/", icon: IoSettingsOutline },
];
// END OF FOOTER MENUS

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
  {
    id: "faq",
    title: "Faq",
  },
  {
    id: "pricing",
    title: "Pricing",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];

export const faq = [
  {
    id: '0',
    question: 'How easy is it to setup Xora?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '1',
    question: 'Can I integrate Xora with other platforms?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '2',
    question: 'How often do you add new content?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '3',
    question: 'What your refund policy?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '4',
    question: 'Do you have corporate plans?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '5',
    question: 'What happens when I’m out of storage?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '6',
    question: 'Can I upgrade my plan?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '7',
    question: 'How do I invite my team?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '8',
    question: 'Do you offer training for individuals and teams?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
  {
    id: '9',
    question: 'I’m locked out of my account what do I do?',
    answer:
      'Absolutely! Not only you can upgrade your plan at any time but you also get a prorated discount giving you maximum value for your subscription.',
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

// END OF HOOBANK CONSTANTS

export const plans = [
  {
    id: "0",
    title: "Core",
    priceMonthly: 19,
    priceYearly: 12,
    caption: "Best for solo creators",
    features: [
      "100MB Cloud storage",
      "100+ prompt templates",
      "5 projects",
      "24/7 support",
    ],
    icon: "/images/circle.svg",
    logo: "/images/plan-1.png",
  },
  {
    id: "1",
    title: "Overdrive",
    priceMonthly: 79,
    priceYearly: 59,
    caption: "Most popular plan",
    features: [
      "All Starter features",
      "1TB additional storage",
      "Unlimited projects",
      "Analytics",
    ],
    icon: "/images/triangle.svg",
    logo: "/images/plan-2.png",
  },
  {
    id: "2",
    title: "Team",
    priceMonthly: 39,
    priceYearly: 29,
    caption: "Exclusively for teams",
    features: [
      "All Overdrive features",
      "10TB additional storage",
      "50% off per member",
      "Real-time collaboration",
    ],
    icon: "/images/hexagon.svg",
    logo: "/images/plan-3.png",
  },
];
