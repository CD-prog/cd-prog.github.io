import RentSocialImage from "../images/screen-shot.png";
import TriviaNightImage from "../images/trivia-night.png";
import WorkDaySchedulerImage from "../images/work-day.png";
import PasswordGeneratorImage from "../images/screen-shot-5.png";
import EatDaBurgerImage from "../images/burger.png";
import WeatherDashboardImage from "../images/image.png";
import SportAdventuresImage from "../images/sportAdventures.png";
import EmployeeDirectoryImage from "../images/employeeDirectory.png";

export const cardData = [
    {
        imgSrc: TriviaNightImage,
        cardTitle: 'Trivia Night',
        cardText: 'Fun trivia game with stat tracking and top scores',
        tech : 'Node.js, Express, Sequelize ORM, MySQL, Handlebars.js, jQuery/JS, Passport.js/Bcrypt, animista CSS animations, Bootstrap, HTML, CSS',
        projectLink: 'https://morning-ravine-45125.herokuapp.com/',
        githubLink: 'https://github.com/CD-prog/trivia-night'
    },
    {
        imgSrc: SportAdventuresImage,
        cardTitle: 'Sport Adventures',
        cardText: 'Peer to peer rental application for sports gear and equipment',
        tech : 'Full Stack MERN application, React.js, Express.js, MongoDB, Node.js, Mongoose, Firebase authentication and storage, Bootstrap, JS/ES6+, HTML, CSS, axios, animista CSS animations',
        projectLink: 'https://boiling-mountain-96486.herokuapp.com/',
        githubLink: 'https://github.com/nigarabdullayeva/project_3/tree/project_3/claudiu'
    },
    { placeHolder: true },
    {
        imgSrc: RentSocialImage,
        cardTitle: 'RentSocial',
        cardText: 'Search for rental listings and social events',
        tech : 'HTML, CSS, jQuery/JS, Materialize CSS framework, Animate.css, three third party APIs ',
        projectLink: 'https://cd-prog.github.io/RentSocial/', githubLink: 'https://github.com/CD-prog/RentSocial'
    },
    {
        imgSrc: WorkDaySchedulerImage,
        cardTitle: 'Work Day Scheduler',
        cardText: 'A simple calendar app for scheduling your work day',
        tech : 'HTML, CSS, JavaScript, JQuery, moment.js, event listeners and localStorage',
        projectLink: 'https://cd-prog.github.io/work-day-scheduler/',
        githubLink: 'https://github.com/CD-prog/work-day-scheduler'
    },
    { placeHolder: true },
    {
        imgSrc: WeatherDashboardImage,
        cardTitle: 'Weather Dashboard',
        cardText: 'Weather app that uses OpenWeather API for current weather information and forecasts',
        tech : 'HTML, JavaScript, CSS, Bootstrap, OpenWeather API',
        projectLink: 'https://cd-prog.github.io/weather-dashboard/',
        githubLink: 'https://github.com/CD-prog/weather-dashboard'
    },
    {
        imgSrc: EmployeeDirectoryImage,
        cardTitle: 'Employee Directory',
        cardText: 'React application for filtering and sorting an employee directory ',
        tech : 'React.js, Node.js, JS/ES6+, Bootstrap',
        projectLink: 'https://cd-prog.github.io/employee-directory/',
        githubLink: 'https://github.com/CD-prog/employee-directory'
    },
    { placeHolder: true },
    {
        imgSrc: EatDaBurgerImage,
        cardTitle: 'Eat Da Burger!',
        cardText: 'Users can input names of the burgers they would like to eat',
        tech : 'HTML, JavaScript, CSS, MySQL, Node.js, Express.js, Handlebars, ORM',
        projectLink: 'https://safe-atoll-80103.herokuapp.com/', githubLink: 'https://github.com/CD-prog/burger'
    },
    {
        imgSrc: PasswordGeneratorImage,
        cardTitle: 'Password Generator',
        cardText: 'Password generator with user options', projectLink: 'https://cd-prog.github.io/password-generator/',
        tech : 'HTML, JavaScript, CSS, uses String fromCharCode() Method and Fisher-Yates Algorithm for shuffling an array',
        githubLink: 'https://github.com/CD-prog/password-generator'
    },
];