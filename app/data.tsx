
const navLinks = [
  {
    label: "Store",
    bg: "#b71c1c", // Dark Red
    textColor: "#ffffff", // White text for contrast
    borders: { top: "3px solid #ff8a80", right: "1px solid #ff8a80", bottom: "3px solid #b71c1c", left: "1px solid #ff8a80" }
  },
  {
    label: "Mac",
    bg: "#b71c1c", // Dark Red
    textColor: "#ffffff", // White text for contrast
    borders: { top: "3px solid #ff8a80", right: "1px solid #ff8a80", bottom: "3px solid #b71c1c", left: "1px solid #ff8a80" }

  },

  {
    bg: "#b71c1c", // Dark Red
    textColor: "#ffffff", // White text for contrast
    borders: { top: "3px solid #ff8a80", right: "1px solid #ff8a80", bottom: "3px solid #b71c1c", left: "1px solid #ff8a80" }
    ,
    label: 'Watch'
  },
  {
    label: "Vision",
    bg: "#b71c1c", // Dark Red
    textColor: "#ffffff", // White text for contrast
    borders: { top: "3px solid #ff8a80", right: "1px solid #ff8a80", bottom: "3px solid #b71c1c", left: "1px solid #ff8a80" }
  },

];

const noChangeParts = [
  "Object_84",
  "Object_37",
  "Object_34",
  "Object_12",
  "Object_80",
  "Object_35",
  "Object_36",
  "Object_13",
  "Object_125",
  "Object_76",
  "Object_33",
  "Object_42",
  "Object_58",
  "Object_52",
  "Object_21",
  "Object_10",
];

const performanceImages = [
  { id: "p1", src: "/performance1.png", tl_style: 'left-5 top-15' },
  { id: "p2", src: "/performance2.png", tl_style: 'left-10 top-20' },
  { id: "p3", src: "/performance3.png", tl_style: '-left-5 bottom-30' },
  { id: "p4", src: "/performance4.png", tl_style: 'right-5 bottom-30' },
  { id: "p5", src: "/performance5.jpg", tl_style: 'bottom-0 top-0' },
  { id: "p6", src: "/performance6.png", tl_style: 'left-5 top-50' },
  { id: "p7", src: "/performance7.png", tl_style: 'right-25 top-40' },
];


const performanceImgPositions = [
  {
    id: "p1",
    left: "-90.0%",  // Angle: 0°
    bottom: "50.0%",
  },
  {
    id: "p2",
    left: "-74.7%",  // Angle: ~51.4°
    bottom: "-81.3%",
  },
  {
    id: "p3",
    left: "33.1%",  // Angle: ~102.9°
    bottom: "89.0%",
  },
  {
    id: "p4",
    left: "40%",  // Angle: ~154.3°
    bottom: "-100%",
  },
  {
    id: "p5",
    left: "0%",  // Angle: ~205.7°
    bottom: "0%",
  },
  {
    id: "p6",
    left: "-100%",  // Angle: ~257.1°
    bottom: "50%",
  },
  {
    id: "p7",
    left: "100%",  // Angle: ~308.6°
    bottom: "50%",
  },
];


const features = [
  {
    id: 1,
    icon: "/feature-icon1.svg",
    highlight: "Email AI.",
    text: "Summarize and draft replies to emails instantly, so you stay on top of your inbox.",
    styles: "left-5 md:left-20 top-[20%] opacity-0 translate-y-5",
  },
  {
    id: 2,
    icon: "/feature-icon2.svg",
    highlight: "Image AI.",
    text: "Generate or edit images with ease. Just type what you imagine, and let AI bring it to life.",
    styles: "right-5 md:right-20 top-[30%] opacity-0 translate-y-5",
  },
  {
    id: 3,
    icon: "/feature-icon3.svg",
    highlight: "Summarize AI.",
    text: "Turn long articles, reports, or notes into clear, bite-sized summaries in seconds.",
    styles: "left-5 md:left-20 top-[50%] opacity-0 translate-y-5",
  },
  {
    id: 4,
    icon: "/feature-icon4.svg",
    highlight: "AirDrop.",
    text: "Wirelessly share photos, large files, and more between your iPhone, your Mac, & other devices.",
    styles: "right-5 md:right-20 top-[70%] opacity-0 translate-y-5",
  },
  {
    id: 5,
    icon: "/feature-icon5.svg",
    highlight: "Writing Tool.",
    text: "Write smarter and faster, whether it’s blogs, essays, or captions, AI helps polish your words.",
    styles: "left-5 md:left-20 top-[90%] opacity-0 translate-y-5",
  },
];

const featureSequence = [
  { videoPath: "/videos/feature-1.mp4", boxClass: ".box1", delay: 1 },
  { videoPath: "/videos/feature-2.mp4", boxClass: ".box2", delay: 0 },
  { videoPath: "/videos/feature-3.mp4", boxClass: ".box3", delay: 0 },
  { videoPath: "/videos/feature-4.mp4", boxClass: ".box4", delay: 0 },
  { videoPath: "/videos/feature-5.mp4", boxClass: ".box5", delay: 0 },
];

const footerLinks = [
  { label: "Privacy Policy", link: "#" },
  { label: "Terms of Use", link: "#" },
  { label: "Sales Policy", link: "#" },
  { label: "Legal", link: "#" },
  { label: "Site Map", link: "#" },
];

export {
  features,
  featureSequence,
  footerLinks,
  navLinks,
  noChangeParts,
  performanceImages,
  performanceImgPositions,
};
