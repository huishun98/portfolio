const displayName = 'Hui Shun'
const bannerDescription = 'Developer from Singapore'
const mediumUrl = 'https://api.allorigins.win/raw?url=https://medium.com/feed/@huishun'
const mediumFilterKeyword = 'technology'
const email = 'huishun98@gmail.com'
const githubUrl = "https://github.com/huishun98"
const linkedInUrl = "https://www.linkedin.com/in/hui-shun/"
const resumePdfTitle = 'Resume.pdf'

const projects = [
    {
        title: 'Visualising the COVID-19 Spread in Singapore',
        description: 'An interactive visualisation of the spread of COVID-19 in Singapore across time.',
        stack: ['Python', 'Google Sheets API', 'Tableau'],
        imgName: 'singapore_covid_spread.gif',
        siteUrl: 'https://public.tableau.com/shared/379FDD4MD?:display_count=n&:origin=viz_share_link',
        codeUrl: 'https://github.com/huishun98/SG-COVID-data-automated',
    },
    {
        title: 'SongDedi',
        description: 'A free song dedication service suitable for weddings, parties or any event.',
        stack: ['Vue.js', 'Python Flask', 'Firebase', 'Google Analytics'],
        imgName: 'songdedi.png',
        siteUrl: '',
        codeUrl: 'https://github.com/huishun98/songdedi-admin',
        altCodeUrl: 'https://github.com/huishun98/songdedi-requests'
    },
    {
        title: 'Narie',
        description: 'A beginner-friendly itinerary planner, perfectly customisable to suit your needs.',
        stack: ['Figma', 'Vue.js', 'Python Flask', 'Firebase', 'Google Analytics'],
        imgName: 'narie.png',
        siteUrl: '',
        codeUrl: '',
    },
    {
        title: 'Customisable Personal Blog/Website Template',
        description: 'A template that gives content creators full control over the design of their site and content management system.',
        stack: ['Django', 'PostgreSQL', 'Amazon S3'],
        imgName: 'django_blog.png',
        siteUrl: '',
        codeUrl: 'https://github.com/huishun98/django_blog',
    },
    {
        title: 'Circuit Breaker Personality Quiz',
        description: 'A personality quiz about attitudes and feelings about the Circuit Breaker.',
        stack: ['Vue.js', 'Python Flask', 'Google Sheets API'],
        imgName: 'cb_quiz.png',
        siteUrl: '',
        codeUrl: 'https://github.com/huishun98/trivia-quiz-client',
    },
]

export { projects, mediumUrl, mediumFilterKeyword, email, githubUrl, linkedInUrl, displayName, bannerDescription, resumePdfTitle }