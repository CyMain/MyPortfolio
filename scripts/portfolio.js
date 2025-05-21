

let aboutMe = {
    brandImage:"../assets/images/mypfp2.jpg",
    name: "Cyrus Okikiola",
    desc: `I’m a frontend developer with a strong eye for design, a passion for clean,
                         responsive user interfaces, and the technical skills to bring them to life.
                         Proficient in HTML, CSS, JavaScript, and modern frameworks like React,
                          I build fast, accessible, and interactive web experiences. I'm ready to contribute to any team with a detail-oriented approach, a user-first mindset, and the ability to turn design concepts into production-ready code.`,
}

let services = [
    {
        name:"Web Development",
        desc:"Will use HTML, CSS and JavaScript to build a website of your design for you.",
        icon:"./assets/icons/code-alt-light.png",
    },
]

let projects = [
    {
        projectName: "Guessy! The Online Guessing Game!",
        desc: `Guessy is as expected, an online guessing game, where the player can be engaged
                in fun guessing random words based on the hints displayed. Even secret comments and easter eggs exist.
                So much to find out!`,
        imageURL: `./assets/images/project-images/GuessyScreenshots/GuessySampleProject.png`,
        projectURL: "https://guessy-pearl.vercel.app",
    },{
        projectName: "Browser Extension Manager",
        desc: `A little test of skill. This site uses HTML, CSS and JavaScript to make an interactive extension manager for all your browser extensions`,
        imageURL: `../assets/images/project-images/ExtManager/extManager1.png`,
        projectURL: "https://browser-extension-manager-cymains-projects.vercel.app",
    },
]

let header = `
    <!--Conatains Nav bar-->
        <nav>
            <!--Contains "About", "Contact Me", "Projects"-->
            <a class="nav" href="#who-i-am-target">About</a>
            <a class="nav" href="#my-services-target">Services</a>
            <a class="nav" href="#projects-section-target">Projects</a>
        </nav>
`;

let footer = `
    <div class="footer-container">
            <div class="contacts">
                <div class="find-me-on">
                    <!--Contains my contacts: LinkedIn, GitHub, Instagram, e.t.c-->
                    <h2>
                        Find Me On
                    </h2>
                    <ul class="contact-list">
                        <li>LinkedIn <i class='bx bxl-linkedin-square'></i></li>
                        <li>Github <i class='bx bxl-github' ></i></li>
                    </ul>
                </div>
                <div class="contact-me">
                    <!--contains my email and my phone number stating to reach me on whatsapp and telegram.-->
                    <h2>
                        Contact Me
                    </h2>
                    <ul class="contact details">
                        <li>Email: <span>okikiolacyrus@gmail.com</span> <i class='bx bx-envelope' ></i></li>
                        <li>Phone Number: <i class='bx  bx-phone'  style='color:#ffffff'></i> </li>
                    </ul>
                </div>
            </div>
            
            <div class="pfp">
                <!--my pfp on the right side of the footer-->
                <img src="./assets/images/sample-images/derpyBf.jpg">
            </div>
        </div>
`;

renderSite();

function renderSite() {
    let html = `
        <!--Contains the main content of each site-->
        <section id="who-i-am">
            <h6 id="who-i-am-target">

            </h6>
            <div id="about-container">
                <div id="brand-image">
                    <!--My Image or brand Image. Could even be my github pfp-->
                    <img src="${aboutMe.brandImage}">
                </div>
                <div id="my-desc">
                    <h2 class="name">
                        ${aboutMe.name}
                    </h2>
                    <article class="desc">
                        ${aboutMe.desc}
                    </article>
                </div>
            </div>
        </section>
        <section id="my-services">
            <h6 id="my-services-target">

            </h6>
            <div id="services-container">
                <h2>
                    My Services
                </h2>
                <div class="services">
                    <!--column flexbox containing all services on mobile. Row flexbox for wide screens-->
                    ${renderServices()}
                </div>
            </div>
        </section>
        <section id="projects-section">
            <h6 id="projects-section-target">

            </h6>
            <h2>
                My Work
            </h2>
            <!--Contains all my main projects-->
            <div id="projects">
                ${renderProjects()}
            </div>
        </section>
        <section id="contact-me-section">
            <h6 id="contacts-section-target">

            </h6>
            <h2>Send Me A Message</h2>
            <form action="https://formsubmit.co/okikiolacyrus@gmail.com" method="POST" id="contact-form">
                <fieldset>
                    <legend>Name:</legend>
                    <input type="text" name="name" placeholder="Enter your name..." required>
                </fieldset>
                
                <fieldset>
                     <legend>Phone Number:</legend>
                     <input type="tel" name="phone-number" id="" placeholder="Your phone number...">
                </fieldset>
                <fieldset>
                    <legend>Email:</legend>
                    <input type="email" name="email" id="" placeholder="Enter your email..." required>
                </fieldset>
                <fieldset>
                    <legend>Type your message:</legend>
                    <textarea name="message" id="message" placeholder="Type your message"></textarea>
                </fieldset>
                <button type="submit" class="message-send-button">Send</button>
            </form>
        </section>
    `;
    document.querySelector('main').innerHTML = html;
}

function renderServices(){
    let html = ``;
    services.forEach(service => {
        html += `
        <div class="service">
            <figure>
                <!--icon for each sevice.-->
                <img src="${service.icon}">
            </figure>
            <div class="service-desc">
                <!--Contains service name and description-->
                <h3>
                    ${service.name}
                </h3>
                <p>
                    ${service.desc}
                </p>
            </div>
        </div>
        `;
    })
    return html;
}

function renderProjects() {
    let html = ``;
    projects.forEach(project => {
        html += `
            <div class="project">
                <!--Default template for all projects
                Div1 Contains two divs. Div1,1 contains a sample image of the project
                Div1,2 contains a project title and then a description(maybe include a button to go to project site?)-->
                <div class="display-image">
                    <img src="${project.imageURL}">
                </div>
                <div class="project-desc">
                    <h2>
                        ${project.projectName}
                    </h2>
                    <article>
                        <p>
                            ${project.desc}
                        </p>
                    </article>
                    <button onclick="window.location.href='${project.projectURL}'">
                        Go To Site
                    </button>
                </div>    
            </div>
        `;
    })
    return html;
}

function closeMenu() {
    document.querySelector('.side-menu').style.transform = 'translateX(200%)';
    document.querySelector('.black-screen').style.transform = 'translateX(200%)';
}

function openMenu() {
    document.querySelector('.side-menu').style.display = 'flex';
    document.querySelector('.side-menu').style.transform = 'translateX(0%)';
    document.querySelector('.black-screen').style.transform = 'translateX(0%)';
}
function dropDown(element){
    element.nextElementSibling.style.display='flex';
    element.nextElementSibling.style.opacity=1;
    element.nextElementSibling.style.animation='dropdown 0.12s ease-out forwards';
    element.addEventListener('click', () =>{
        const h2 = event.target;
        throwUp(h2);
    }, {once: true});
}
function throwUp(element){
    element.nextElementSibling.style.opacity=0;
    element.nextElementSibling.style.transform='translateY(-20%)';
    setTimeout(() =>{
        element.nextElementSibling.style.display='none';
        element.nextElementSibling.style.transform='translateY(0%)';
    },140);
    element.addEventListener('click', () =>{
        const h2 = event.target;
        dropDown(h2);
    }, {once: true});
}

function dropDownControl(){
    if(window.innerWidth < 700){
            document.querySelector('.find-me-on').addEventListener('click', () =>{
            const h2 = event.target;
            dropDown(h2);
            }, {once: true})

            document.querySelector('.contact-me').addEventListener('click', () =>{
                const h2 = event.target;
                dropDown(h2);
            }, {once: true})
    }

}

dropDownControl();
window.addEventListener('resize', () => {
    dropDownControl();    
})

document.querySelector('.close-menu').addEventListener('click', () => {
    closeMenu();
});


document.querySelector('#menu-icon').addEventListener('click', () => {
    openMenu();
});