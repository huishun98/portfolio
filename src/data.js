const displayName = 'Hui Shun'
const bannerDescription = 'Developer from Singapore'
const mediumUrl = 'https://api.allorigins.win/raw?url=https://medium.com/feed/@huishun'
const mediumFilterKeyword = 'technology'
const email = 'huishun98@gmail.com'
const githubUrl = "https://github.com/huishun98"
const linkedInUrl = "https://www.linkedin.com/in/hui-shun/"
const resumePdfTitle = 'Chua Hui Shun.pdf'

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
        siteUrl: 'https://songdedi-admin.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/songdedi-admin',
        altCodeUrl: 'https://github.com/huishun98/songdedi-requests'
    },
    {
        title: 'Narie',
        description: 'A beginner-friendly itinerary planner, perfectly customisable to suit your needs.',
        stack: ['Figma', 'Vue.js', 'Python Flask', 'Firebase', 'Google Analytics'],
        imgName: 'narie.png',
        siteUrl: 'https://narie.herokuapp.com/',
        codeUrl: '',
    },
    {
        title: 'Customisable Personal Blog/Website Template',
        description: 'A template that gives content creators full control over the design of their site and content management system.',
        stack: ['Django', 'PostgreSQL', 'Amazon S3'],
        imgName: 'django_blog.png',
        siteUrl: 'https://hs-django-blog.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/django_blog',
    },
    {
        title: 'Springer Books Navigator',
        description: 'An easy and fast way to download free books offered by Springer.',
        stack: ['Python BeautifulSoup', 'Vue.js', 'Google Analytics'],
        imgName: 'springer_books.png',
        siteUrl: 'https://springer-books-links.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/springer-books',
    },
    {
        title: 'Circuit Breaker Personality Quiz',
        description: 'A personality quiz about attitudes and feelings about the Circuit Breaker.',
        stack: ['Vue.js', 'Python Flask', 'Google Sheets API'],
        imgName: 'cb_quiz.png',
        siteUrl: 'https://circuit-breaker-personality.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/trivia-quiz-client',
    },
    {
        title: 'HS Coding Factory',
        description: 'A WordPress theme and site for me to document and share my coding journey.',
        stack: ['PHP', 'jQuery'],
        imgName: 'huishun-cf.png',
        siteUrl: 'https://huishun-cf.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/huishun-cf',
    },
    {
        title: 'Happy Dinner Bot',
        description: 'A Telegram bot that helps to organise dinners every day.',
        stack: ['Node.js', 'AWS', 'MongoDB Atlas'],
        imgName: 'telebot.png',
        siteUrl: 'https://web.telegram.org/#/im?p=@happy_dinner_bot',
        codeUrl: 'https://github.com/huishun98/happy-dinner-bot-public',
    },
    {
        title: 'HS Portfolio',
        description: 'A portfolio website.',
        stack: ['React.js'],
        imgName: 'portfolio.png',
        siteUrl: 'https://huishun98.github.io/',
        codeUrl: 'https://github.com/huishun98/huishun98.github.io.git',
    },
]

export { projects, mediumUrl, mediumFilterKeyword, email, githubUrl, linkedInUrl, displayName, bannerDescription, resumePdfTitle }