import {
  FacebookSVG,
  InstagramSVG,
  LocationSVG,
  MessageSVG,
  PhoneSVG,
  TwitterSVG,
  YoutubeSVG,
} from "@/public/assets/HomePage/Footer/svg/FooterSvg";

export const NavItems = [
  { name: "About", href: "#about" },
  { name: "Category", href: "#category" },
  { name: "Services", href: "#services" },
  { name: "Colours", href: "#colours" },
  { name: "Downloads", href: "#downloads" },
  { name: "Become a Dealer", href: "#dealer" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" },
];

export const categories = [
  {
    id: 1,
    name: "Exterior Paints",
    className: "/assets/HomePage/Category/Img2.jpg",
  },
  {
    id: 2,
    name: "Water Proofing",
    className: "/assets/HomePage/Category/Img3.jpg",
  },
  {
    id: 3,
    name: "Undercoats",
    className: "/assets/HomePage/Category/Img4.jpg",
  },
  {
    id: 4,
    name: "Painting Tools",
    className: "/assets/HomePage/Category/Img5.jpg",
  },
];

export const service = [
  {
    id: 1,
    name: "Wall Painting",
    desc: "Lorem ipsum dolor sit amet consectetur. ",
    className: "/assets/HomePage/Service/Img1.jpg",
  },
  {
    id: 2,
    name: "Water Solution",
    desc: "Lorem ipsum dolor sit amet consectetur. ",
    className: "/assets/HomePage/Service/Img2.jpg",
  },
  {
    id: 3,
    name: "Painting",
    desc: "Lorem ipsum dolor sit amet consectetur. ",
    className: "/assets/HomePage/Service/Img3.jpg",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "How to choose the perfect wall colour for your office",
    date: "10 Jan 2024",
    image: "/assets/HomePage/Blog/Img1.jpg",
  },
  {
    id: 2,
    title: "10 stylish cream colour combination for your home",
    date: "20 Jan 2024",
    image: "/assets/HomePage/Blog/Img3.jpg",
  },
  {
    id: 3,
    title: "How to choose the perfect wall colour for your office",
    date: "10 Jan 2024",
    image: "/assets/HomePage/Blog/Img4.jpg",
  },
  {
    id: 4,
    title: "How to choose the perfect wall colour for your office",
    date: "10 Jan 2024",
    image: "/assets/HomePage/Blog/Img2.jpg",
  },
  {
    id: 5,
    title: "How to choose the perfect wall colour for your office",
    date: "10 Jan 2024",
    image: "/assets/HomePage/Blog/Img5.jpg",
  },
];

export const companies = [
  {
    id: 1,
    image: "/assets/HomePage/Footer/Img1.png",
  },
  {
    id: 2,
    image: "/assets/HomePage/Footer/Img2.png",
  },
  {
    id: 3,
    image: "/assets/HomePage/Footer/Img3.png",
  },
  {
    id: 4,
    image: "/assets/HomePage/Footer/Img4.png",
  },
  {
    id: 5,
    image: "/assets/HomePage/Footer/Img5.png",
  },
];

export const reachDetails = [
  {
    svg: <LocationSVG />,
    details:
      "#417/418, 11th Cross, 4th Phase, Peenya Industrial Area, Bangalore - 560 058",
  },
  {
    svg: <PhoneSVG />,
    details: "+91 – 80 – 42552555",
  },
  {
    svg: <MessageSVG />,
    details: "info@gem-paints.com",
  },
];

export const footerItems = [
  {
    title: "About",
    items: ["About Astrals", "Paint Journey", "Group Companies"],
  },
  {
    title: "Category",
    items: [
      "Interior Paints",
      "Exterior Paints",
      "Undercoats",
      "Painting Tools",
      "Water Proofing",
    ],
  },

  {
    title: "Services",
    items: ["Wall Painting", "Water Solution", "Painting", "Colour Shades"],
  },
];

export const additionalLinks = [
  { href: "/downloads", text: "Downloads" },
  { href: "/become-dealer", text: "Become A Dealer" },
  { href: "/blogs", text: "Blogs" },
  { href: "/contact", text: "Contact" },
];

export const socialIcons = [
  { Icon: 1, href: <FacebookSVG /> },
  { Icon: 2, href: <InstagramSVG /> },
  { Icon: 3, href: <YoutubeSVG /> },
  { Icon: 4, href: <TwitterSVG /> },
];

export const colors = [
  { name: "Pale Yellow", code: "#F3E2A9" },
  { name: "Light Pink", code: "#F8C8DC" },
  { name: "Sky Blue", code: "#42C8F5" },
  { name: "Deep Blue", code: "#0A6FB8" },
  { name: "Deep Red", code: "#880000" },
  { name: "Mustard", code: "#D9A404" },
];
