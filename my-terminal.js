//TODO: Add star wars final chapter wala
//TODO: Add neofetch
//TODO: Upskill yourself
//TODO: Add more projects
//TODO: Contact and social media and blog link

const linkedinUrl = "https://www.linkedin.com/in/ojastapadia/";
const directories = {
  education: [
    "",
    "<white>Education</white>",

    '* Vellore Institute of Technology <yellow>"Computer Science"</yellow> 2022-Present',
    '* Essar International School<yellow> "High School Diploma"</yellow> March 2021- April 2022',
    '* Essar International School<yellow> "Secondary School Diploma"</yellow> March 2020-2021',
    "",
  ],
  experience: [
    "",
    "<white>Experience</white><br>",
    "",
    "<yellow>AuraX</yellow> June 2024 - Present",
    "* Designed and implemented APIs to facilitate seamless communication between front-end and back-end systems.",
    "* Managed SQL and NoSQL databases, ensuring efficient data storage and organization.",
    "* Integrated third-party services, APIs, and external systems into back-end infrastructure.",
    "* Utilized version control systems like Git to manage and track codebase changes effectively.",
    "",
    "<yellow>Yantra-VIT's Offical Hackathon</yellow> Feb 2024 - April 2024",
    "Organizer and part of Tech Team",
    "Implemented backend using Nextjs, NextAuthm, postgreSQL and Typescript",
    "",
    "<yellow>Vicuna Kouture</yellow> May 2024 - June 2024 ",
    "* Backend Developer",
    "* Developed, integrated, and maintained APIs to support core application functionality.",
    "* Designed, implemented, and managed databases to ensure data integrity and efficiency.",
    "* Configured, deployed, and maintained servers for optimal hosting performance.",
    "* Optimized application code and server configurations for maximum speed and scalability.",
    "* Collaborated closely with frontend developers, designers to align technical solutions with business goals.",
    "* Utilized version control systems (e.g., Git) for effective code management and collaboration.",
    "",
  ],
  projects: [
    "",
    "<white>Projects</white>",
    [
      [
        "interactnow",
        "interatnow.in",
        "Contributed to user and organization analytics, notification and history features using golang, fiber and GORM.",
      ],
      [
        "StoryForge.ai",
        "https://github.com/Seudonym/StoryForge.ai",
        "Led project for StoryForge.ai, enhancing storytelling through prompts and image generation",
      ],
      [
        "Contact-Manager-Backend",
        "https://github.com/0ju1c3/Contact-Manager",
        "Scheme implementation in JavaScript",
      ],
      [
        "Social Networking Application",
        "https://github.com/0ju1c3/Nodejs-intern-assignment-3-submission",
        "Designed and implemented a RESTful API for a basic social networking application using Node.js and MongoDB",
      ],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}" target="_blank">${name}</a> &mdash; <white>${description}</white>`;
    }),
    "",
  ].flat(),
  hobbyProjects: [
    "",
    "<white>Hobby Projects:</white>",
    [
      [
        "Current Neovim Config",
        "https://github.com/0ju1c3/kickstart-nvim",
        "My current neovim configuration using kickstart.nvim and lazy.vim",
      ],
      [
        "Bubbly",
        "https://github.com/0ju1c3/Bubbly",
        "Web game using vanilla JS and HTML",
      ],
      [
        "Audio Visualizer",
        "https://github.com/0ju1c3/Audio-Visualiser",
        "Audio visualizer using vanilla JS and HTML",
      ],
      [
        "Hyprland-Arch config",
        "https://github.com/0ju1c3/hyprland",
        "My present hyprland arch configuration",
      ],
      [
        "Waybar config",
        "https://github.com/0ju1c3/waybar-conf",
        "My present waybar configuration",
      ],
      [
        "ChatGPT-Chatbot",
        "https://github.com/0ju1c3/ChatGPT-ChatBot",
        "meh chatbot using ChatGPT",
      ],
      [
        "Mandelbrot Set",
        "https://github.com/0ju1c3/Mandelbrot-set",
        "Mangelbrot set using Python",
      ],
      [
        "Xmonad Ubuntu Config",
        "https://github.com/0ju1c3/Mandelbrot-set",
        "Xmonad configuration for Ubuntu",
      ],
    ].map(([name, url, description = ""]) => {
      return `* <a href="${url}" target="_blank">${name}</a> &mdash; <white>${description}</white>`;
    }),
    "",
  ].flat(),
  skills: [
    "",
    "<white>languages</white>",

    ["JavaScript", "TypeScript", "Python", "SQL", "Java", "C", "C++"].map(
      (lang) => `* <yellow>${lang}</yellow>`,
    ),
    "",
    "<white>Web Development Technologies</white>",
    ["Node.js", "HTML", "CSS", "Express.js", "Next.js", "Typescript"].map(
      (lib) => `* <green>${lib}</green>`,
    ),
    "",
    "<white>Database</white>",
    ["MongoDB", "PostgreSQL", "MySQL"].map((lib) => `* <red>${lib}</red>`),
    "",
    "<white>tools</white>",
    ["Docker", "git", "GNU/Linux", "Postman"].map(
      (lib) => `* <blue>${lib}</blue>`,
    ),
    "",
  ].flat(),
  contact: [
    "",
    `* <a href= "https://www.linkedin.com/in/ojastapadia/" target="_blank">LinkedIn</a>`,
    //"* LinkedIn: Ojas Tapadia",
    "* otapadia.work@gmail.com",
    `* <a href="https://github.com/0ju1c3/" target="_blank">Github</a>`,
    "",
  ].flat(),
  // blog: [
  //   "",
  //   "* <a href='https://medium.com/@otapadia/our-first-hackathon-experience-2e3cea622b99' target='_blank'>Our First Hackathon</a> &mdash; <white>StoryForge.ai and its making</white>",
  //   "",
  // ].flat(),
};
const dirs = Object.keys(directories);
const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "conjunction",
});
const root = "~";
let cwd = root;

function print_dirs() {
  term.echo(
    dirs
      .map((dir) => {
        return `<blue class="directory">${dir}</blue>`;
      })
      .join("\n"),
  );
}
const url1 = "https://v2.jokeapi.dev/joke/Programming";
const url2 = "https://v2.jokeapi.dev/joke/Dark";
const commands = {
  cd(dir = null) {
    if (dir === null || dir === "..") {
      if (cwd !== root) {
        cwd = root;
      }
    } else if (dir.startsWith("~/") && dirs.includes(dir.substring(2))) {
      cwd = dir;
    } else if (dirs.includes(dir)) {
      cwd = root + "/" + dir;
    } else {
      this.error("Wrong directory");
    }
  },

  ls(dir = null) {
    if (dir) {
      if (dir.startsWith("~/")) {
        const path = dir.substring(2);
        const dirs = path.split("/");
        if (dirs.length > 1) {
          this.error("Invalid directory");
        } else {
          const dir = dirs[0];
          this.echo(directories[dir].join("\n"));
        }
      } else if (cwd === root) {
        if (dir in directories) {
          this.echo(directories[dir].join("\n"));
        } else {
          this.error("Invalid directory");
        }
      } else if (dir === "..") {
        print_dirs();
      } else {
        this.error("Invalid directory");
      }
    } else if (cwd === root) {
      print_dirs();
    } else {
      const dir = cwd.substring(2);
      this.echo(directories[dir].join("\n"));
    }
  },
  help() {
    term.echo(`List of available commands:${help}`);
  },
  echo(...args) {
    //example : echo hello -- args = ["hello"]
    if (args.length > 0) {
      console.log(args[0]);
      term.echo(args.join(" ")); //will join the arguments with space : instance echo hello world will print hello world
    }
  },
  async joke(...args) {
    if (args.length > 0) {
      if (args[0] == "dark") {
        const res = await fetch(url2);
        const data = await res.json();
        (async () => {
          if (data.type == "twopart") {
            const prompt = this.get_prompt();
            this.set_prompt("");
            await this.echo(`Q: ${data.setup}`, {
              delay: 50,
              typing: true,
            });
            await this.echo(`A: ${data.delivery}`, {
              delay: 50,
              typing: true,
            });
            this.set_prompt(prompt);
          } else if (data.type == "single") {
            this.echo(data.joke, {
              delay: 50,
              typing: true,
            });
          }
        })();
      }
    } else {
      const res = await fetch(url1);
      const data = await res.json();
      (async () => {
        if (data.type == "twopart") {
          const prompt = this.get_prompt();
          this.set_prompt("");
          await this.echo(`Q: ${data.setup}`, {
            delay: 50,
            typing: true,
          });
          await this.echo(`A: ${data.delivery}`, {
            delay: 50,
            typing: true,
          });
          this.set_prompt(prompt);
        } else if (data.type == "single") {
          this.echo(data.joke, {
            delay: 50,
            typing: true,
          });
        }
      })();
    }
  },
};

const user = "guest";
const server = "localhost";
function prompt() {
  return `<green>${user}@${server}</green>:<blue>${cwd}</blue>$ `;
}
const command_list = Object.keys(commands); //command list
const formatted_list = command_list.map((cmd) => {
  //will format the list of commands
  return `<blue class="command" style="font-weight:bolder;">${cmd}</blue>`; //help command purpose
});
const help = formatter.format(formatted_list); //will format the list of commands in a proper way and show all the commands in a single line
//const any_command_re = new RegExp(`^\s*(${command_list.join("|")})`); //will check if at the beginning of the string, any command is present. Only these commands will be of color white
//$.terminal.new_formatter([any_command_re, "<white>$1</white>"]);
const re = new RegExp(`^\s*(${command_list.join("|")})(\s?.*)`); //aqua color for command and white color for arguments

$.terminal.new_formatter([
  re,
  function (_, command, args) {
    return `<aqua class="command">${command}</aqua><white>${args}</white>`;
  },
]);
$.terminal.xml_formatter.tags.blue = (attrs) => {
  return `[[;#55F;;${attrs.class}]`;
};
$.terminal.xml_formatter.tags.green = (attrs) => {
  return `[[;#44D544;]`;
};
//                                                                   for ascii art
const font = "Slant";

figlet.defaults({ fontPath: "https://unpkg.com/figlet/fonts/" });
figlet.preloadFonts([font], ready);

const greetings = `
   ____    _               ______                      ___      
  / __ \\  (_)___ ______   /_  __/___ _____  ____ _____/ (_)___ _ 
 / / / / / / __ \`/ ___/    / / / __ \`/ __ \\/ __ \`/ __  / / __ \`/
/ /_/ / / / /_/ (__  )    / / / /_/ / /_/ / /_/ / /_/ / / /_/ / 
\\____/_/ /\\__,_/____/    /_/  \\__,_/ .___/\\__,_/\\__,_/_/\\__,_/  
    /___/                         /_/                           
`;
const term = $("body").terminal(commands, {
  greetings: false,
  checkArity: false, // disable arity check, without this for instance, when written echo hello, it will throw error
  completion(string) {
    const cmd = this.get_command();
    const { name, rest } = $.terminal.parse_command(cmd);
    if (["cd", "ls"].includes(name)) {
      if (rest.startsWith("~/")) {
        return dirs.map((dir) => `~/{dir}`);
      }
      if (cwd == root) {
        return dirs;
      }
    }
    return Object.keys(commands);
  },
  prompt,
});

term.on("click", ".command", function () {
  const command = $(this).text();
  term.exec(command);
});
term.pause();
term.on("click", ".directory", function () {
  const dir = $(this).text();
  term.exec(`cd ~/${dir}`);
});
function render(text) {
  const cols = term.cols();
  return figlet.textSync(text, {
    //using figlet library
    font: font,
    width: cols,
    whitespaceBreak: true,
  });
}
function hex(color) {
  return (
    "#" +
    [color.red, color.green, color.blue]
      .map((n) => {
        return n.toString(16).padStart(2, "0");
      })
      .join("")
  );
}

function rand(max) {
  //returns pseudo random number from 0 to max value
  return Math.floor(Math.random() * (max + 1));
}

function rainbow(string, seed) {
  return lolcat
    .rainbow(
      function (char, color) {
        char = $.terminal.escape_brackets(char);
        return `[[;${hex(color)};]${char}]`;
      },
      string,
      seed,
    )
    .join("\n");
}

function ready() {
  const seed = rand(256);
  term
    .echo(() => rainbow(render("Ojas Tapadia"), seed))
    .echo(
      "\nWelcome to my Terminal Portfolio\nType [[b;#ff3300;]help] to see the list of available commands",
    )
    .resume();
}

//figlet library is used to render ascii art
//lolcat library is used to render rainbow text
//Intl.ListFormat is used to format the list of commands in a proper way
//jquery terminal is used to create a terminal like interface
//all the commands are stored in an object and then executed using the terminal
