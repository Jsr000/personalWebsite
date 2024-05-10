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

//Experience write ups use cvDescrpitionChip component
const UBCWriteUp = {
    jobTitle: `Combined Major in Business and Computer Science (BUCS)`,
    companyLocation: `University of British Columbia | Vancouver, BC`,
    duration: `Sep 2020 - Present (Expected Graduation: May 2024)`,
};

const GeoComplyWriteUp = {
    jobTitle: 'Projects and Process Manager Intern',
    companyLocation: 'GeoComply | Vancouver, BC',
    duration: 'Jun 2022 - Sep 2022',
    bullets: [
        'Created weekly progress reports on 35 projects across the organization to identify bottlenecks for top executives',
        'Improved UX by streamlining projects, reduced Kibana latency by 50%, and load-tested data pipelines',
        'Placed runner-up by designing a business proposal to automate and adapt current intern hiring processes to reduce the usage of resources while still retaining top candidates in an internal case competition',
    ],
};

const VoronoiWriteUp = {
    jobTitle: 'Software Developer Intern',
    companyLocation: 'Voronoi Health Analytics | Vancouver, BC',
    duration: 'Sep 2022 - Dec 2022',
    bullets: [
        'Streamlined software usability for users by adding additional error handling and consistent UI functionalities using Qt',
        'Centralized user input validation, reduced code redundancy, and enhanced GUI by connecting the front end to the back end',
        'Maintained critical software functionalities through management and review of the front end\'s code base',
    ],
};

const BlackBerryWriteUp = {
    jobTitle: 'Technical Project Manager Intern',
    companyLocation: 'BlackBerry | Mississauga, ON',
    duration: 'May 2023 - Sep 2023',
    bullets: [
        'Met 100% of service level targets by eliminating scope creep in projects and correctly defining requirements and timelines',
        'Achieved a 50% increase in team sprint velocity by addressing blockers and gaps, thus enhancing team agility',
        'Created insightful analytics to monitor project statuses using project management tools like Jira and Confluence',
    ],
};

const TeslaWriteUp = {
    jobTitle: 'Technical Product Manager Intern',
    companyLocation: 'Tesla | Fremont, CA',
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
    TeslaWriteUp
};