const projects = [
  {
    title: "Number Guessing Game",
    description: "A fun and interactive number guessing game. Simple JS logic and DOM handling.",
    demoLink: "projects/number-guessing-game/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/number-guessing-game"
  },
  {
    title: "Calculator",
    description: "A basic calculator for arithmetic operations.",
    demoLink: "projects/Calculator/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/Calculator"
  },
  {
    title: "Rock Paper Scissors",
    description: "A fun interactive game where you play Rock, Paper, Scissors against the computer with instant win/lose results.",
    demoLink: "projects/rock-paper-scissors/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/rock-paper-scissors"
  },
  {
    title: "Random Password Generator",
    description: "A customizable tool that generates secure random passwords using JavaScript, with options for length, symbols, numbers, and case.",
    demoLink: "projects/random-password-generator/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/random-password-generator"
  },
  {
    title: "Stopwatch",
    description: "A simple JavaScript stopwatch with start, pause, and reset functionality to track elapsed time.",
    demoLink: "projects/Stopwatch/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/Stopwatch"
  },
  {
    title: "Temperature Converter",
    description: "Converts temperatures between Celsius, Fahrenheit, and Kelvin using basic input and JavaScript logic.",
    demoLink: "projects/temperature-converter/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/temperature-converter"
  },
  {
    title: "Dice Roller",
    description: "Simulates rolling a dice with random number generation and visual dice face updates using JavaScript.",
    demoLink: "projects/dice-roller/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/dice-roller"
  },
  {
    title: "Digital Clock",
    description: "Displays the current time in HH:MM:SS format, updating every second with real-time JavaScript.",
    demoLink: "projects/digital-clock/index.html",
    codeLink: "https://github.com/angelagarwal2/Javascript_Beginner_Projects/tree/main/projects/digital-clock"
  }
];

const container = document.getElementById('projects-container');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'project-card';

  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="buttons">
      <a href="${project.demoLink}" target="_blank">Live Demo</a>
      <a href="${project.codeLink}" target="_blank">Source Code</a>
    </div>
  `;

  container.appendChild(card);
});
