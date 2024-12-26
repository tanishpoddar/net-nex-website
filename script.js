document.addEventListener('DOMContentLoaded', () => {
    // Tab Navigation
    const tabs = document.querySelectorAll('.tab-btn');
    const pages = document.querySelectorAll('.page');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetPage = tab.dataset.page;
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show target page
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetPage) {
                    page.classList.add('active');
                }
            });
        });
    });

    // Welcome message
    const typedText = document.querySelector('.typed-text');
    typedText.textContent = 'Welcome to Networking Nexus';

    // Event Timeline
    const timeline = document.querySelector('.timeline');
    const events = [
        {
            date: '2024-01-20',
            title: 'ESP_EXPLORE.v1',
            description: 'A Workshop Where Participants Learned To Design Smart Devices And Gained Proficiency In C/C++, TINKERCAD, And BLYNK.'
        },
        {
            date: '2024-02-15',
            title: 'Serving Your App To Millions',
            description: 'This Session Focused On Scaling Applications To Serve Millions Of Users, Covering Key Topics Like Load Balancing And Microservices.'
        },
        {
            date: '2024-03-10',
            title: 'ESP_EXPLORE.v2',
            description: 'Annual hackathon eventA Hands-On IoT And Embedded Systems Workshop, Where Participants Learned To Design Smart Devices'
        }
    ];

    events.forEach((event, index) => {
        const eventElement = document.createElement('div');
        eventElement.classList.add('timeline-event');
        eventElement.innerHTML = `
            <div class="event-content ${index % 2 === 0 ? 'left' : 'right'}">
                <div class="event-date">${event.date}</div>
                <h3>${event.title}</h3>
                <p>${event.description}</p>
            </div>
        `;
        timeline.appendChild(eventElement);
    });

    // Projects Grid
    const projectsGrid = document.querySelector('.projects-grid');
    const projects = [
        {
            title: 'coming soon',
            description: 'coming soon',
            tech: ['coming soon']
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Team Members
    const foundingTeam = [
        {
            name: 'John Doe',
            github: 'https://github.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe'
        }
    ];

    const coreTeam = [
        {
            name: 'Jane Smith',
            github: 'https://github.com/janesmith',
            linkedin: 'https://linkedin.com/in/janesmith'
        }
    ];

    const members = [
        {
            name: 'Mike Johnson',
            github: 'https://github.com/mikej',
            linkedin: 'https://linkedin.com/in/mikej'
        }
    ];

    function createMemberElement(member) {
        return `
            <div class="team-member">
                ${member.name}
                <div class="social-links">
                    <a href="${member.github}" target="_blank" class="github-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                    </a>
                    <a href="${member.linkedin}" target="_blank" class="linkedin-link">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                            <rect x="2" y="9" width="4" height="12"></rect>
                            <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                    </a>
                </div>
            </div>
        `;
    }

    // Populate team sections
    const foundingMembersContainer = document.getElementById('founding-members');
    foundingMembersContainer.innerHTML = foundingTeam.map(createMemberElement).join('');

    const coreMembersContainer = document.getElementById('core-members');
    coreMembersContainer.innerHTML = coreTeam.map(createMemberElement).join('');

    const membersContainer = document.getElementById('team-members');
    membersContainer.innerHTML = members.map(createMemberElement).join('');



    // Matrix Rain Effect
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let chars = '01';
    chars = chars.split('');

    let fontSize = 14;
    let columns;
    let drops = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        columns = canvas.width / fontSize;
        drops = [];
        for (let i = 0; i < columns; i++) {
            drops[i] = 1;
        }
    }

    window.addEventListener('resize', resize);
    resize();

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#0F0';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 35);
});