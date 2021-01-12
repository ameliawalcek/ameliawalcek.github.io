const menu = [{ href: '#home', text: "Home" }, { href: "#about", text: "About" }, { href: "#projects", text: "Projects" }, { href: "#skills", text: "Skills" }, { href: "#contact", text: "Contact" }]

const social = [{ href: "https://github.com/ameliawalcek", name: "github", icon: "fa fa-github" }, { href: "https://www.linkedin.com/in/amelia-walcek/", name: "linkedin", icon: "fa fa-linkedin" }, { href: "mailto: ameliawalcek@gmail.com", name: "email", icon: "fa fa-envelope" }]

const skills = [
    { one: "assets/logos/jscsshtml.png", two: "assets/logos/ts.png", three: "assets/logos/docker.png" },
    { one: "assets/logos/react.png", two: "assets/logos/jquery.png", three: "assets/logos/wordpress.png" },
    { one: "assets/logos/node.png", two: "assets/logos/socket.png", three: "assets/logos/linux.png" },
    { one: "assets/logos/npm.png", two: "assets/logos/mobx.png", three: "assets/logos/Materialui.png" },
    { one: "assets/logos/mongodb.png", two: "assets/logos/ts.png", three: "assets/logos/bootstrap.png" },
    { one: "assets/logos/sql.png", two: "assets/logos/puppeteer.png", three: "assets/logos/photoshop.png" }
]

const projects = [
    {
        img: "assets/project/WEBOX.png",
        title: 'WEBOX',
        description: "Social media aggregator. View creator's Twitch, YouTube, Instagram, & Twitter on one platform",
        framework: "JS, React, Node.js, MobX, socket.io, Material ui, MongoDB, Puppeteer, Docker",
        code: "https://github.com/ameliawalcek/WEBOX",
        live: null
    },
    {
        img: "assets/project/SnapShot.PNG",
        title: "SnapShot",
        description: "Post pictures, create memories, and share them with your friends",
        framework: "JS, React, Node.js, Redux, Express, Mongoose, MongoDB, Material ui",
        code: "https://github.com/ameliawalcek/SnapShot",
        live: "https://snap-shot.netlify.app/"
    },
    {
        img: "assets/project/TriviaTime.jpg",
        title: "Trivia Time",
        description: "Select topic and difficulty to test your knowledge using Open Trivia API",
        framework: "TypeScript, React, APIs, Material ui, CSS",
        code: "https://github.com/ameliawalcek/Typescript_TriviaTime",
        live: "https://triviatime.netlify.app"
    },
    {
        img: "assets/project/ChitChat.jpg",
        title: "Chit Chat",
        description: "Join your favorite chat room and meet users across the globe",
        framework: "JS, Node.js, Express, socket.io, HTML5, CSS",
        code: "https://github.com/ameliawalcek/Chit_Chat",
        live: "https://chit-chat-online.herokuapp.com/"
    },
    {
        img: "assets/project/TaskTracker.PNG",
        title: "Task Tracker",
        description: "Add, remove, and keep track of your tasks",
        framework: "JS, JQuery, Express, Mongoose, Atlas, Materialize",
        code: "https://github.com/ameliawalcek/Task_Tracker",
        live: "https://the-task-tracker.herokuapp.com/"
    },
    {
        img: "assets/project/ExpenseTracker.jpg",
        title: "Expense Tracker",
        description: "Add, remove, and edit your purchases to track your expenses/income by categories",
        framework: "React, JS, MobX, Mongoose, Express, CSS",
        code: "https://github.com/ameliawalcek/Expense_Tracker",
        live: null
    },
    {
        img: "assets/project/MarioRush.jpg",
        title: "Mario Rush",
        description: "Help Mario defeat Bowser in this two player game using 2D array logic",
        framework: "JS, Express, Handlebars, JQuery, CSS",
        code: "https://github.com/ameliawalcek/Mario_Rush_Matrices",
        live: null
    },
]

$(document).ready(function () {
    skills.forEach(s => $('.photo-row').append(`<div class="photo-grid"><img src=${s.one}><img src=${s.two}><img src=${s.three}></div>`))

    menu.forEach(m => $('.menu').append(`<li><a href=${m.href} class="menu-btn">${m.text}</a></li>`))

    social.forEach(s => $('.social').append(`<a href=${s.href} target="_blank"><li class=${s.name}><i class="${s.icon}"></i></li></a>`))

    projects.forEach(p => {
        return (
            $('#carousel').append(`<div class="card"><div class="box"><img class='project-img' src=${p.img} alt=""><div class="text card-title">${p.title}</div>
                <p class='card-content'>${p.description}</p><div class='framework'>${p.framework}</div><div class='code-links'><a href=${p.code} target="_blank">Code</a>`
                + (p.live ? `<a href=${p.live} target="_blank">Live</a>` : ``)
                + `</div></div></div>`)
        )
    })

})
