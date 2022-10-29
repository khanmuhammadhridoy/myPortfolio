import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Hridoy Khan | Web Developer", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, my name is",
  name: "Hridoy Khan",
  subtitle: "I'm a Web Developer.",
  cta: "Explore",
};

// ABOUT DATA
export const aboutData = {
  img: "https://i.ibb.co/583fkXs/octa.png",
  paragraphOne: `I am a web developer. Generally works with react js.
  I am an expert in debugging, troubleshooting, critical thinking, leadership, working in groups, etc.`,
  paragraphTwo: ``,
  paragraphThree: "For More info Download My Resume",
  resume:
    "https://drive.google.com/file/d/1wuVp4cpQ5eVBA0KpiNTIqlzrWkuwZdIT/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img:
      "https://i.ibb.co/xFMMxTZ/screencapture-electrzoid-web-app-2021-05-02-08-53-12-Copy.png",
    title: "Electrzoid",
    info: {
      key1: " Electronic service-based website.",
      key2: "Users can order a service.",
      key3: "Admin can manage service and also add Engineer to Website.",
      key4: "Authentication is done by Firebase.",
      key5: "React Router used for routing.",
      key6: "React Bootstrap used for a simple design.",
      key7: "MongoDB used for database management.",
      key8: "Heroku used for the backend database hosting.",
    },
    info2: "",
    url: "https://electrzoid.web.app/",
    repo: "https://github.com/khanmuhammadhridoy/Electrzoid", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img:
      "https://i.ibb.co/jbRj4Bb/Capture.pnghttps://i.ibb.co/jbRj4Bb/Capture.png",
    title: "Newrite",
    info: "",
    info2: "",
    url: "https://neewrite.web.app/",
    repo: "https://github.com/khanmuhammadhridoy/Newriter", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img:
      "https://i.ibb.co/kgJMT3J/screencapture-riders-nest-web-app-2021-05-02-08-12-34.png",
    title: "Riders Nest",
    info: "",
    info2: "",
    url: "https://riders-nest.web.app/",
    repo: "https://github.com/khanmuhammadhridoy/riders-nest", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "khanmuhammadhridoy@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/khanhridoy/",
      iconName: "linkedin-in",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/khanmuhammadhridoy",
      iconName: "github",
    },
    {
      id: nanoid(),
      name: "facebook",
      url: "https://www.facebook.com/khanmuhammad.hridoy.1",
      iconName: "facebook-square",
    },
  ],
};
