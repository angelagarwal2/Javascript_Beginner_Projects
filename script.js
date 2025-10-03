const projects = [
      {
        title: "Number Guessing Game",
        description: "A fun and interactive number guessing game with simple JS logic and DOM manipulation.",
        demoLink: "projects/number-guessing-game/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/number-guessing-game",
        category: "game",
        icon: "fas fa-dice"
      },
      {
        title: "Calculator",
        description: "A basic calculator for arithmetic operations with a clean interface.",
        demoLink: "projects/Calculator/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/Calculator",
        category: "utility",
        icon: "fas fa-calculator"
      },
      {
        title: "Rock Paper Scissors",
        description: "Play Rock, Paper, Scissors against the computer with instant win/lose results.",
        demoLink: "projects/rock-paper-scissors/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/rock-paper-scissors",
        category: "game",
        icon: "fas fa-hand-rock"
      },
      {
        title: "Random Password Generator",
        description: "Generate secure random passwords with customizable length, symbols, numbers, and case.",
        demoLink: "projects/random-password-generator/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/random-password-generator",
        category: "utility",
        icon: "fas fa-key"
      },
      {
        title: "Stopwatch",
        description: "A simple stopwatch with start, pause, and reset functionality to track elapsed time.",
        demoLink: "projects/Stopwatch/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/Stopwatch",
        category: "utility",
        icon: "fas fa-stopwatch"
      },
      {
        title: "Temperature Converter",
        description: "Convert temperatures between Celsius, Fahrenheit, and Kelvin with ease.",
        demoLink: "projects/temperature-converter/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/temperature-converter",
        category: "utility",
        icon: "fas fa-temperature-high"
      },
      {
        title: "Dice Roller",
        description: "Simulate rolling dice with random number generation and visual dice face updates.",
        demoLink: "projects/dice-roller/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/dice-roller",
        category: "game",
        icon: "fas fa-dice-six"
      },
      {
        title: "Digital Clock",
        description: "Display current time in HH:MM:SS format, updating every second in real-time.",
        demoLink: "projects/digital-clock/index.html",
        codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/digital-clock",
        category: "utility",
        icon: "fas fa-clock"
      }
    ];

    const container = document.getElementById('projects-container');
    const searchInput = document.getElementById('search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const visibleCount = document.getElementById('visible-count');
    const totalCount = document.getElementById('total-count');
    const projectTotal = document.getElementById('project-total');
    
    let currentFilter = 'all';
    let currentSearch = '';

    function renderProjects(projectsToRender) {
      container.innerHTML = '';
      
      if (projectsToRender.length === 0) {
        container.innerHTML = `
          <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>No Projects Found</h3>
            <p>Try adjusting your search or filter</p>
          </div>
        `;
        visibleCount.textContent = '0';
        return;
      }

      projectsToRender.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        card.innerHTML = `
          <div class="card-header">
            <div class="project-number">${(index + 1).toString().padStart(2, '0')}</div>
            <i class="${project.icon} project-icon"></i>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="buttons">
            <a href="${project.demoLink}" class="btn-demo" target="_blank">
              <i class="fas fa-play"></i> Demo
            </a>
            <a href="${project.codeLink}" class="btn-code" target="_blank">
              <i class="fab fa-github"></i> Code
            </a>
          </div>
        `;

        container.appendChild(card);
      });

      visibleCount.textContent = projectsToRender.length;
    }

    function filterProjects() {
      let filtered = projects;

      if (currentFilter !== 'all') {
        filtered = filtered.filter(p => p.category === currentFilter);
      }

      if (currentSearch) {
        filtered = filtered.filter(project => 
          project.title.toLowerCase().includes(currentSearch.toLowerCase()) ||
          project.description.toLowerCase().includes(currentSearch.toLowerCase())
        );
      }

      renderProjects(filtered);
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        filterProjects();
      });
    });

    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value;
      filterProjects();
    });

    projectTotal.textContent = projects.length;
    totalCount.textContent = projects.length;
    renderProjects(projects);
