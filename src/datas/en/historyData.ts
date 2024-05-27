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
    date: "March 2022 - October 2023",
    points: [
      "Contributed to the development of an online shop management system that is integrated to multiple marketplaces in Indonesia using Typescript and React for the Front-End web applications, and Go and Gin for the REST APIs. Developed 30% of all features for the system.",
      "Contributed to the development of a music learning application that provides guitar and ukulele chords, and lyrics that move along like karaoke using Go and Gin for the main REST API, and Ruby on Rails for the admin web application. Developed major features such as playlist, report, play history, and popular and favorite songs.",
      "Contributed to the development of a sound-sharing platform for musicians and content creators using Go and Gin for the main REST API, Typescript and React for the main Front-End web application, and Ruby on Rails for the admin web application. Developed major features such as collection and report.",
      "Wrote unit tests for the main REST API of a music learning application, which helped to detect bugs early in the development.",
      "Refactored React components in the main Front-End web application of a sound sharing platform to use Material UI instead of styled components, resulting in better code readability.",
      "Developed tools for generating popularity index for both the music learning application and sound-sharing platform using Go, allowing users to view the current most popular content in the platform.",
      "Developed a tool for analyzing song difficulty for a music learning application using Go, avoiding the admin team from having to manually analyze all old and new songs in the application.",
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
      "Taught Front-End development using HTML, CSS, Javascript, React and Typescript to club members.",
      "Taught Back-End development using Javascript, Express, and MongoDB to club members.",
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
      "Assisted in taking care of the Australia International Corner and its events.",
    ],
  },
];
