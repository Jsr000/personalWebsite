//Intro write up uses a generic textChip component
const IntroWriteUp = {
    className: 'about-text-chip',
    title: `👋 Let me introduce myself!`,
    paragraph1: `Welcome, and thanks for visiting my website! 
    Here is a refreshment for stopping by 🧃, enjoy as you browse my site where you will find my experiences, projects, and hobbies!`,
    paragraph2: `I am a senior studying at the University of British Columbia, majoring in Business and Computer Science (BUCS). My professional goal is to leverage technology to 
    drive sustainable and lasting change, with a particular focus on the energy sector, as well as innovative and disruptive technologies.`,
    paragraph3: `Feel free to reach out! You can find my contact information in the footer, I'm happy to chat!`,
};

// Hobbies wripte up using textChip component

const hobby1 = {
    subtitle: `Film Phtography:`,
    paragraph1: `I'm passionate about film photography, carrying my Canon FTb everywhere to capture live moments and adventures!
    There's something super magical about shooting on film and preserving memories in a physical medium. 📷🎞️`,
};


const hobby2 = {
    subtitle: `Snowboarding:`,
    paragraph1: `When winter arrives, you'll find me on the slopes, carving through fresh powder on my snowboard. 
    Snowboarding is not just a hobby for me; it's a thrilling adventure that I eagerly anticipate each season. 🏂❄️🏔️`,
};

const hobby3 = {
    subtitle: `Keyboard Enthusiast:`,
    paragraph1: `I am a huge fan of mechanical keyboards and have set out to build my own keyboard from scratch! I love 
    the customizability and the unique feel of each switch. I am currently using a 98% layout rekt-1800 gateron oil king switches! 🛠️⌨️🔧`,
};

const hobby4 = {
    subtitle: `Music Events:`,
    paragraph1: `I love music, especially electronic music, where you will find me attending music festivals and live events on my spare time! Particularly, I listen to a lot of dubstep,
    drum and bass, and melodic EDM. If you're interested in what I'm listening to, check out my Spotify playlists! 🎧🎵🕺`,
};

//Experience write ups use cvDescrpitionChip component
const UBCWriteUp = {
    jobTitle: `Combined Major in Business and Computer Science (BUCS)`,
    company: `University of British Columbia`,
    location: `Vancouver, BC`,
    duration: `Sep 2020 - Present (Expected Graduation: May 2025)`,
};

const GeoComplyWriteUp = {
    jobTitle: 'Projects and Process Manager Intern',
    company: 'GeoComply',
    location: 'Vancouver, BC',
    duration: 'Jun 2022 - Sep 2022',
    bullets: [
        'Created weekly progress reports on 35 projects across the organization to identify bottlenecks for top executives',
        'Improved UX by streamlining projects, reduced Kibana latency by 50%, and load-tested data pipelines',
        'Placed runner-up by designing a business proposal to automate and adapt current intern hiring processes to reduce the usage of resources while still retaining top candidates in an internal case competition',
    ],
};

const VoronoiWriteUp = {
    jobTitle: 'Software Developer Intern',
    company: 'Voronoi Health Analytics', 
    location: 'Vancouver, BC',
    duration: 'Sep 2022 - Dec 2022',
    bullets: [
        'Streamlined software usability for users by adding additional error handling and consistent UI functionalities using Qt',
        'Centralized user input validation, reduced code redundancy, and enhanced GUI by connecting the front end to the back end',
        'Maintained critical software functionalities through management and review of the front end\'s code base',
    ],
};

const BlackBerryWriteUp = {
    jobTitle: 'Technical Project Manager Intern',
    company: 'BlackBerry',
    location: 'Mississauga, ON',
    duration: 'May 2023 - Sep 2023',
    bullets: [
        'Met 100% of service level targets by eliminating scope creep in projects and correctly defining requirements and timelines',
        'Achieved a 50% increase in team sprint velocity by addressing blockers and gaps, thus enhancing team agility',
        'Created insightful analytics to monitor project statuses using project management tools like Jira and Confluence',
    ],
};

const TeslaWriteUp = {
    jobTitle: 'Technical Product Manager Intern',
    company: 'Tesla',
    location: 'Fremont, CA',
    duration: 'Sep 2023 - Mar 2024',
    bullets: [
        'Successfully launched an internal headcount planning tool for 35,000+ employees to optimize resource allocation and planning',
        'Spearheaded Tesla’s headcount planning tool by defining all user requirements through user interviews and usability research',
        'Boosted organization efficiency by 73% by optimizing internal knowledge hubs for enhanced searchability and navigability',
        'Strategically orchestrated and executed an engineering all-hands meeting for over 1,000+ participants'
    ],
};

export {
    IntroWriteUp,
    UBCWriteUp,
    GeoComplyWriteUp,
    VoronoiWriteUp,
    BlackBerryWriteUp,
    TeslaWriteUp,
    hobby1,
    hobby2,
    hobby3,
    hobby4
};