import History from "../../models/History";

export const educationHistoryEN: History[] = [
  {
    id: "history-education-1",
    institution: "Bina Nusantara University",
    category: "Education",
    role: "Computer Science",
    date: "September 2019 - Present",
  },
  {
    id: "history-education-2",
    institution: "SMA Citra Berkat",
    category: "Education",
    role: "Natural Science",
    date: "July 2016 - May 2019",
  },
];

export const workHistoryEN: History[] = [
  {
    id: "history-work-1",
    institution: "Chorus Digital Indonesia",
    category: "Work",
    role: "Full Stack Developer",
    date: "March 2022 - Present",
    points: [
      "Assisted in developing restful APIs and frontend web applications for an online shop management system named Autobos that is integrated to multiple marketplaces in Indonesia and provided a more efficient process to handle orders which descreased operational cost and increased time efficiency.",
      "Assisted in developing a restful API, frontend web application, server-side application, and tools for an sound sharing platform named Sampled which is made for musicians and content creators to find quality sounds for free and royalty-free.",
      "Assisted in developing a restful API, server-side application, and tools for an music learning application named Chord Genius which provided guitar and ukulele chords and lyrics that move along like karaoke to help learn songs faster and more fun than ever before.",
    ],
    technologies: [
      "Typescript",
      "React",
      "Golang",
      "Gin",
      "Ruby",
      "Ruby on Rails",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
  },
];

export const organizationHistoryEN: History[] = [
  {
    id: "history-organization-1",
    institution: "Google Developer Student Club",
    category: "Organization",
    role: "Core Team Member",
    date: "September 2021 - September 2022",
    points: [
      "Had been a frontend facilitator, teaching club members HTML, CSS, Javascript, ReactJS, and Typescript for Frontend Development.",
      "Had been a backend facilitator, teaching club members backend development Javascript, Express, and MongoDB for Backend Development.",
    ],
    technologies: [
      "HTML",
      "CSS",
      "Javascript",
      "Typescript",
      "React",
      "Express",
      "MongoDB",
    ],
  },
  {
    id: "history-organization-2",
    institution: "Australia International Corner",
    category: "Organization",
    role: "Volunteer",
    date: "February 2020 - July 2020",
    points: [
      "Assisted in taking care of the australia international corner and its events.",
    ],
  },
];
