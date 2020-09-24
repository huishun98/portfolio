const projects = [
    {
        title: 'SongDedi',
        description: 'A free song dedication service suitable for weddings, parties or any event.',
        more: 'Anyone can contribute to your playlist. Your playlist will update in real time. Built using Vue.js (JavaScript) and Flask (Python). Google authentication, data storage and media storage done using Firebase. Hosted on Heroku. Integrated with Google Analytics.',
        stack: ['Vue.js', 'JavaScript', 'Flask', 'Python', 'Firebase storage', 'Firestore', 'Heroku', 'Google Analytics'],
        imgName: 'songdedi.png',
        siteUrl: 'https://songdedi-admin.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/songdedi-admin',
        altCodeUrl: 'https://github.com/huishun98/songdedi-requests'
    },
    {
        title: 'Narie',
        description: 'A beginner-friendly itinerary planner, perfectly customisable to suit your needs.',
        more: 'Leading a team of three (and growing). Following Agile development practices. Prototyped usingFigma. Built usingVue.js (JavaScript) andFlask (Python). JWT authentication and data storage done usingFirebase. Hosted onHeroku. Integrated withGoogle Analytics. UsedMapbox Geocoding APIfor search autocomplete,Triposo APIto suggest tours and places of interest, andGoogle Maps Directions APIto calculate travelling time. Usedscikit-learn (Python library)to conduct clustering andmlrose (Python package)to solve the travelling salesman problem to suggest an optimized itinerary. Code is private.',
        stack: ['Figma', 'Vue.js', 'JavaScript', 'Flask', 'Python', 'Firebase authentication', 'Firestore', 'Heroku', 'Google Analytics'],
        imgName: 'narie.png',
        siteUrl: 'https://narie.herokuapp.com/',
        codeUrl: '',
    },
    {
        title: 'Customisable Personal Blog/Website Template',
        description: 'A template that gives content creators full control over the design of their site and content management system.',
        more: 'Features include basic CRUD functionality, downloading and uploading of blog content for backup purposes as well as categorisation of posts. Built usingDjango (Python) and vanilla JavaScript. Data and media stored usingPostgreSQL and hosted onAmazon S3. Application hosted onHeroku.',
        stack: ['Django', 'Python', 'JavaScript', 'PostgreSQL', 'Amazon S3', 'Heroku'],
        imgName: 'django_blog.png',
        siteUrl: 'https://hs-django-blog.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/django_blog',
    },
    {
        title: 'Springer Books Navigator',
        description: 'An easy and fast way to download free books offered by Springer.',
        more: 'Acquired 186 users from 10 countries. Data scraped usingBeautifulSoup (Python). Website built usingVue.js (JavaScript). Hosted onHeroku. Integrated withGoogle Analytics.',
        stack: ['BeautifulSoup', 'Python', 'Vue.js', 'JavaScript', 'Heroku', 'Google Analytics'],
        imgName: 'springer_books.png',
        siteUrl: 'https://springer-books-links.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/springer-books',
    },
    {
        title: 'Circuit Breaker Personality Quiz',
        description: 'A personality quiz about attitudes and feelings about the Circuit Breaker.',
        more: 'More than 400 responses were garnered within 24 hours of launch. Built usingVue.js (JavaScript) andFlask (Python). UsedGoogle Sheets API to store results in Google Sheets. Hosted onHeroku.',
        stack: ['Vue.js', 'JavaScript', 'Flask', 'Python', 'Google Sheets API ', 'Heroku'],
        imgName: 'cb_quiz.png',
        siteUrl: 'https://circuit-breaker-personality.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/trivia-quiz-client',
    },
    {
        title: 'HS Coding Factory',
        description: 'A WordPress theme and site for me to document and share my coding journey.',
        more: 'Built usingPHP andjQuery (JavaScript). Hosted onHeroku.',
        stack: ['PHP', 'jQuery', 'JavaScript', 'Heroku'],
        imgName: 'huishun-cf.png',
        siteUrl: 'https://huishun-cf.herokuapp.com/',
        codeUrl: 'https://github.com/huishun98/huishun-cf',
    },
    {
        title: 'Data visualisation',
        description: 'Visualisations of Singapore\'s National Track and Field Championships A Division 100m and 200m results over the years.',
        more: 'Used Matplotlib (Python).',
        stack: ['Matplotlib', 'Python'],
        imgName: 'data_viz.png',
        siteUrl: 'https://github.com/huishun98/tf-data-viz/blob/master/data_viz.ipynb',
        codeUrl: 'https://github.com/huishun98/tf-data-viz',
    },
    {
        title: 'Happy Dinner Bot',
        description: 'A Telegram bot that helps to organise dinners every day.',
        more: 'Built usingNode.js (JavaScript). Data stored onAWS with MongoDB Atlas. Hosted onHeroku.',
        stack: ['Node.js', 'JavaScript', 'AWS', 'MongoDB Atlas', 'Heroku'],
        imgName: 'telebot.png',
        siteUrl: 'https://web.telegram.org/#/im?p=@happy_dinner_bot',
        codeUrl: 'https://github.com/huishun98/happy-dinner-bot-public',
    },
    {
        title: 'HS Portfolio',
        description: 'A portfolio website.',
        more: 'Built usingReact.js (JavaScript). Hosted on Github Pages.',
        stack: ['React.js', 'JavaScript', 'Github Pages'],
        imgName: 'portfolio.png',
        siteUrl: 'https://huishun98.github.io/',
        codeUrl: 'https://github.com/huishun98/huishun98.github.io.git',
    },
]

export { projects }