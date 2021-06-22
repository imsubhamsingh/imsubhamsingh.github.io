const randomColors = ["red", "violet", "purple", "pink"];

const appData = {
  color: randomColors[Math.floor(Math.random() * randomColors.length)],
  user: {
    name: "Satheesh Kumar",
    initial: "D",
    title: "Software Engineer",
    contact_form_url: "https://contact.satheesh.dev/",
    articles_url: "https://articles.satheesh.dev/",
    about: `Software Engineer skilled in Python, Django, Flask, Java, and JavaScript. A strong engineering professional with a Bachelor of Engineering focused in Computer Science and strong engineering experience from HackerEarth `,
    github_username: "satheesh1997",
  },
  socials: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/satheesh1997/",
    },
    {
      name: "github",
      url: "https://github.com/satheesh1997",
    },
    {
      name: "whatsapp",
      url: "https://api.whatsapp.com/send?phone=919597264229",
    },
    {
      name: "twitter",
      url: "https://twitter.com/git_push_tweet/",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/esc_wq/",
    },
  ],
  contact_details: {
    mobile: "+91-9597264229",
    mail: "mail@satheesh.dev",
    web: "https://satheesh.dev/",
    location: "Bengaluru, India",
  },
  recent_article: {
    image:
      "https://i.ibb.co/HVhbHXm/screenshot-localhost-8000-1610268202874.png",
    title: "How to access shell or shell based applications via internet?",
    description: `Nowadays everything in becoming remote, In this article I will explain you how to access any shell or shell based applications on your system via internet.
    To achieve this we will need to use a python package called Webpty.
    This package is written using python and will allow us to share the shell or shell based applications via internet.`,
    url:
      "https://articles.satheesh.dev/post/2021/how-to-share-shell-via-internet/",
  },
  experiences: [
    {
      role: "Senior Software Engineer",
      employeer: "HackerEarth",
      year: "2021 - Present",
      description: "Building core applications",
      contributions: [
        "Contributed to moving the micro services to sqs from rabbitmq",
      ],
    },
    {
      role: "Software Engineer",
      employeer: "HackerEarth",
      year: "2019 - 2021",
      description: "Worked in building core applications",
      contributions: [
        "Contributed to new test overview interface along with 100% coverage",
        "Contributed to full-stack problem type",
        "Contributed to MVP of DevOps problem type",
        "Contributed to the new invite flow revamp",
        "Contributed to making the integration tests smoother",
        "Contributed to upgrading the project question ide's to the latest version",
      ],
    },
    {
      role: "Engineering Intern",
      employeer: "HackerEarth",
      year: "2018 - 2019",
      description: `Worked in building assessment product`,
      contributions: [
        "Contributed to making the output difference generation smoother & faster",
        "Contributed to making the setter interface upgrades and extensions",
        "Contributed to making JPQ available in the libraries",
        "Contributed to making the internal utils of the application",
        "Contributed to making the new developer API to cancel the invites",
      ],
    },
  ],
  skills: [
    {
      name: "Python",
      percent: 90,
    },
    {
      name: "Django, Flask & Tornado",
      percent: 90,
    },
    {
      name: "Javascript",
      percent: 85,
    },
    {
      name: "Jquery",
      percent: 85,
    },
    {
      name: "Node js",
      percent: 85,
    },
    {
      name: "React js",
      percent: 75,
    },
  ],
  testimonials: [
    {
      name: "Deepak Mishra",
      role: "Engineering Manager",
      company: "HackerEarth",
      content: `Satheesh is a rare breed of engineer who has far more technical expertise than his experience. For around one year experienced, he takes a lot of responsibilities and does well in all of them. He is one of the junior-most team members, but he gives his teammates a run for the money.
        Currently, Satheesh is working on a super challenging feature. He has already done the MVP of the next one. When I asked him to try, he was like "I already tried and it works". That's why he became THE ENGINEER OF THE YEAR.
        Satheesh is very hardworking. He is the most approachable person for every other issue or knowhows for not just engineering team. He is dependable and his words can be trusted. He has the attitude of getting the work done and unblocking anyone dependent on him ASAP. By words of his peers, he knows everything and can do anything. He has grown a lot over the past year.
        On the face, everyone fights with him, but they love him. He is a sweetheart. He is the BRO of the team.`,
      linkedin: "https://www.linkedin.com/in/deepakmishra117/",
    },
    {
      name: "Vijay Chintala",
      role: "Staff Software Engineer",
      company: "HackerEarth",
      content: `I have known satheesh for more than a year and half in the professional industry, he is organized and dedicated to his projects.
        Recently, i worked together with satheesh on the integration of csharp and python project type questions, His work ethics has inspired not just me but others around us too.`,
      linkedin: "https://www.linkedin.com/in/vijay-chintala/",
    },
  ],
  institutions: [
    {
      name: "Amrita Vidyalayam",
      degree: "Secondary & Higher Secondary",
      year: "2005-2015",
    },
    {
      name: "Sri Krishna College of Technology",
      degree: "B.E, Computer Science",
      year: "2015-2019",
    },
  ],
  languages: [
    {
      name: "English",
      rating: 4,
    },
    {
      name: "Tamil",
      rating: 5,
    },
  ],
};

export default appData;
