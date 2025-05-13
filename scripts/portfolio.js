let projects = [
    {
        projectName:"Guessy! The Online Guessing Game!",
        desc: `Guessy is as expected, an online guessing game, where the player can be engaged
                in fun guessing random words based on the hints displayed. Even secret comments and easter eggs exist.
                So much to find out!`,
        imageURL:`./assets/images/project-images/GuessyScreenshots/GuessySampleProject.png`,
        projectURL:"https://guessy-pearl.vercel.app",
    },{
        projectName:"Guessy! The Online Guessing Game!",
        desc: `Guessy is as expected, an online guessing game, where the player can be engaged
                in fun guessing random words based on the hints displayed. Even secret comments and easter eggs exist.
                So much to find out!`,
        imageURL:`./assets/images/project-images/GuessyScreenshots/GuessySampleProject.png`,
        projectURL:"https://guessy-pearl.vercel.app",
    },
]

renderSite();

function renderSite(){
    let html = `
        <!--Contains the main content of each site-->
        <section id="who-i-am">
            <h6 id="who-i-am-target">

            </h6>
            <div id="about-container">
                <div id="brand-image">
                    <!--My Image or brand Image. Could even be my github pfp-->
                    <img src="./assets/images/sample-images/derpyBf.jpg">
                </div>
                <div id="my-desc">
                    <div class="name">
                        Cyrus Okikiola
                    </div>
                    <article class="desc">
                        I am an upcoming developer in key areas.
                        I offer many services, including developing a design tailored to your needs and developing a site from scratch,
                        video editing, and even software development to help build apps and such.
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
                    <div class="service">
                        <!--Contains service name and description-->
                        <h3>
                            Frontend Development
                        </h3>
                        <p>
                            Will use HTML, CSS and JavaScript to build a website from scratch for you.
                        </p>
                    </div>
                    <div class="service">
                        <!--Contains service name and description-->
                        <h3>
                            Frontend Development
                        </h3>
                        <p>
                            Will use HTML, CSS and JavaScript to build a website from scratch for you.
                        </p>
                    </div>
                    
                </div>
            </div>
        </section>
        <section id="projects-section">
            <h6 id="projects-section-target">

            </h6>
            <!--Contains all my main projects-->
            <div id="projects">
               ${renderProjects()}
            </div>
        </section>
    `;
    document.querySelector('main').innerHTML = html;
}

function renderProjects(){
    let html = ``;
    projects.forEach(project =>{
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