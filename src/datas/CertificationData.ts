import Certification from "../models/Certification";
import australiaInternationalCorner from "../assets/certificates/australia-international-corner.jpg";
import dicodingAndroidBeginner from "../assets/certificates/dicoding-android-beginner.jpg";
import dicodingAndroidFundamental from "../assets/certificates/dicoding-android-fundamental.jpg";
import dicodingBackendBeginner from "../assets/certificates/dicoding-backend-beginner.jpg";
import dicodingBackendFundamental from "../assets/certificates/dicoding-backend-fundamental.jpg";
import dicodingFrontendExpert from "../assets/certificates/dicoding-frontend-expert.jpg";
import dicodingFrontendFundamental from "../assets/certificates/dicoding-frontend-fundamental.jpg";
import dicodingJava from "../assets/certificates/dicoding-java.jpg";
import dicodingJavascriptBasic from "../assets/certificates/dicoding-javascript-basic.jpg";
import dicodingKotlin from "../assets/certificates/dicoding-kotlin.jpg";
import dicodingSolid from "../assets/certificates/dicoding-solid.jpg";
import dicodingAwsArchitecture from "../assets/certificates/dicoding-aws-architecture.jpg";
import dicodingCloudPractitionerEssential from "../assets/certificates/dicoding-clod-practitioner-essential.jpg";
import fccBackendDevelopmentAndApi from "../assets/certificates/freecodecamp-back-end-development-and-apis.jpg";
import fccDataVisualization from "../assets/certificates/freecodecamp-data-visualization.jpg";
import fccFrontendDevelopmentLibraries from "../assets/certificates/freecodecamp-front-end-development-libraries.jpg";
import fccJavascriptAlgorithmsAndDataStructures from "../assets/certificates/freecodecamp-javascript-alogrithms-and-data-structures.jpg";
import fccLegacyFullStack from "../assets/certificates/freecodecamp-legacy-full-stack.jpg";
import fccQualityAssurance from "../assets/certificates/freecodecamp-quality-assurance.jpg";
import fccResponsiveWebDesign from "../assets/certificates/freecodecamp-responsive-web-design.jpg";
import gdscCoreTeam from "../assets/certificates/gdsc-core-team.jpg";
import progateJavascriptStudy7 from "../assets/certificates/progate-javascript-study7.jpg";
import sgwjTerm2 from "../assets/certificates/sgwj-term2.jpg";
import sgwjTerm3 from "../assets/certificates/sgwj-term3.jpg";
import sgwjTerm4 from "../assets/certificates/sgwj-term4.jpg";
import jlptN5 from "../assets/certificates/jlpt-n5.jpeg";

export const TechnicalCertifications: Array<Certification> = [
  {
    title: "Dicoding Android Beginner Course",
    description: "A course that covers Beginner level topics in Android Development such as Activity, Intent, Views, Styles, and Recycler View.",
    imageUrl: dicodingAndroidBeginner,
  },
  {
    title: "Dicoding Android Fundamental Course",
    description: "A course that covers Fundamental level topics in Android Development such as Layout, Navigation, Background Process, Networking, and Android Architecture",
    imageUrl: dicodingAndroidFundamental,
  },
  {
    title: "Dicoding Backend Beginner Course",
    description: "A course that covers Beginner level topics in Backend Development such as Introduction to Backend, NodeJS basic, Building Restful APIs with Hapi framework, and Postman.",
    imageUrl: dicodingBackendBeginner,
  },
  {
    title: "Dicoding Backend Fundamental Course",
    description: "A course that covers Fundamental level topics in Backend Development such as Hapi plugins, Data Validation, Authentication, Authorization, Database Normalization, Caching, and Message Broker.",
    imageUrl: dicodingBackendFundamental,
  },
  {
    title: "Dicoding Frontend Expert Course",
    description: "A course that covers Expert level topics in Frontend Development such as Mobile First Approach, Accessibility, Clean Code, PWA, Automation Testing, and Web Performance.",
    imageUrl: dicodingFrontendExpert,
  },
  {
    title: "Dicoding Frontend Fundamental Course",
    description: "A course that covers Fundamental level topics in Frontend Development such as ES6, Web Components, NPM, Webpack, and Asynchronous JavaScript Request.",
    imageUrl: dicodingFrontendFundamental,
  },
  {
    title: "Dicoding Java Course",
    description: "A course that covers the basics of Java such as Data Types, Control Flow, Collection, OOP, and Common Classes.",
    imageUrl: dicodingJava,
  },
  {
    title: "Dicoding Javascript Course",
    description: "A course that covers the basics of Javascript such as Variables, Data Types, Functions, OOP, Functional Programming, Modules, Error Handling, and Concurrency.",
    imageUrl: dicodingJavascriptBasic,
  },
  {
    title: "Dicoding Kotlin Course",
    description: "A course that covers the basics of Kotlin such as Data Types, Control Flow, Data Classes, Collections, Functional Programming, OOP, Generics, and Coroutines.",
    imageUrl: dicodingKotlin,
  },
  {
    title: "Dicoding SOLID Principle Course",
    description: "A course that covers about the SOLID Principle which consist of Single Responsibility, Open Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion",
    imageUrl: dicodingSolid,
  },
  {
    title: "Dicoding AWS Architecture Course",
    description: "A course that covers about building a cloud architecture in AWS.",
    imageUrl: dicodingAwsArchitecture,
  },
  {
    title: "Dicoding AWS Cloud Practitioner Essential Course",
    description: "A course that covers about the services that AWS cloud provides.",
    imageUrl: dicodingCloudPractitionerEssential,
  },
  {
    title: "FreeCodeCamp Back End Development and APIs Course",
    description: "A course that covers how to write back end applications with NodeJS and the Express Framework.",
    imageUrl: fccBackendDevelopmentAndApi,
  },
  {
    title: "FreeCodeCamp Front End Development Libraries",
    description: "A course that covers about the most popular front end libraries in the industries such as React, Redux, Bootstrap and SASS.",
    imageUrl: fccFrontendDevelopmentLibraries,
  },
  {
    title: "FreeCodeCamp Data Visualization",
    description: "A course that covers how to visualize different types of data with the D3.js library.",
    imageUrl: fccDataVisualization,
  },
  {
    title: "FreeCodeCamp Javascript Algorithms and Data Structures",
    description: "A course that covers the fundamental of javascript, algorithm and data structures.",
    imageUrl: fccJavascriptAlgorithmsAndDataStructures,
  },
  {
    title: "FreeCodeCamp Legacy Full Stack",
    description: "A certificate awarded for completing all the courses in the Full Stack path.",
    imageUrl: fccLegacyFullStack,
  },
  {
    title: "FreeCodeCamp Quality Assurance",
    description: "A course that covers how to write tests to ensure our applications work the way we expect them to.",
    imageUrl: fccQualityAssurance,
  },
  {
    title: "FreeCodeCamp Responsive Web Design",
    description: "A course that covers how to make webpages that respond to different screen sizes.",
    imageUrl: fccResponsiveWebDesign,
  },
  {
    title: "Progate Javascript Study 7",
    description: "A course that covers about the fundamentals of Javascript.",
    imageUrl: progateJavascriptStudy7,
  },
];

export const OtherCertifications: Array<Certification> = [
  {
    title: "JLPT N5",
    description: "A certificate awarded for passing the Level N5 of the Japanese Language Proficiency Test jointly administered by the Japan Foundation and Japan Educational Exchanges and Services.",
    imageUrl: jlptN5,
  },
  {
    title: "Google Developer Student Club Core Team",
    description: "A certificate awarded for serving as a Google Developer Student Club Core Team Member at Binus University for the 2021-2022 academic year.",
    imageUrl: gdscCoreTeam,
  },
  {
    title: "Study Go Work Japan 4th Term",
    description: "A certificate awarded for passing the 4th term of Study Go Work Japan's Japanese Language and Culture Training Program.",
    imageUrl: sgwjTerm4,
  },
  {
    title: "Study Go Work Japan 3rd Term",
    description: "A certificate awarded for passing the 3rd term of Study Go Work Japan's Japanese Language and Culture Training Program.",
    imageUrl: sgwjTerm3,
  },
  {
    title: "Study Go Work Japan 2nd Term",
    description: "A certificate awarded for passing the 2nd term of Study Go Work Japan's Japanese Language and Culture Training Program.",
    imageUrl: sgwjTerm2,
  },
  {
    title: "Australia International Corner",
    description: "A certificate awarded for serving as a volunteer for the Binus University AussieBanget Corner in the Even Semester 2019/2020.",
    imageUrl: australiaInternationalCorner,
  },
];