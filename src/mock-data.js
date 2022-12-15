const teams = [
  "QA",
  "Team Growth",
  "Customer Support",
  "iOS",
  "Team Marketing",
  "Team Engagement",
  "Team Operations",
];

const members = [
  {
    id: 1,
    firstName: "Kevin",
    lastName: "Cardoso",
    img: "https://robohash.org/person-1.png",
    team: ["iOS", "Team Growth"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Killing Harry",
  },
  {
    id: 2,
    firstName: "Diego",
    lastName: "Toledo",
    img: "https://robohash.org/person-2.png",
    team: ["QA", "Customer Support"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Cooking Tacos",
  },
  {
    id: 3,
    firstName: "Zsofi",
    lastName: "Serenyi",
    img: "https://robohash.org/person-3.png",
    team: ["iOS", "Team Engagement"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Trekking",
  },
  {
    id: 4,
    firstName: "Venkat",
    lastName: "Bugga",
    img: "https://robohash.org/person-4.png",
    team: ["Team Marketing"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Being awesome",
  },
  {
    id: 5,
    firstName: "Sheila",
    lastName: "Xhavo",
    img: "https://robohash.org/person-5.png",
    team: ["Team Operations"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Killing it at Yoga",
  },
  {
    id: 6,
    firstName: "Katya",
    lastName: "Schlossarova",
    img: "https://robohash.org/person-6.png",
    team: ["Team Marketing"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Killing it at Marketing",
  },
  {
    id: 7,
    firstName: "Helene",
    lastName: "Karlinger",
    img: "https://robohash.org/person-7.png",
    team: ["iOS"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Knitting",
  },
  {
    id: 8,
    firstName: "Johanna",
    lastName: "Köllner",
    img: "https://robohash.org/person-8.png",
    team: ["Customer Support"],
    shortDescription:
      "Anim eu enim mollit pariatur proident eu occaecat in reprehenderit veniam sit mollit do nostrud.",
    hobbies: "Learning, learning and learning!",
  },
];

const emailToTeam = [
  {
    subject: "Hey! Lets welcome our new colleague",
    body: "Hey you, our new colleague is coming and we will say hello! Since we want a good first meeting, let's set some ground rules: 1. The conversation is supposed to be informal and relaxed. 2. That's it actually. Then you vote if you want the person or not. Ps: FOR THE LOVE OF GOD JUST ACT NORMAL THIS ONE TIME!",
  },
];

const emailToMod = [
  {
    subject: "Hey! Lets welcome our new colleague. Also, you moderate",
    body: "Hey you, our new colleague is coming and we will say hello! Unfortunately, you will moderate... You play a special role and will have to do a bit more than the rest. Your duties include: 1. Make sure that there are no awkard silences. 2. You initiate fun activities and games. 3. you keep track of the time. Have fun!",
  },
];

const icebreakers = [
  {
    name: "Common IceBreakers",
    description: "You know what this is",
    rules: "This has no rules, just talk and know eachother",
    content: [
      "If you were a vegetable, what vegetable would you be?",
      "If you woke up tomorrow as an animal, what animal would you choose to be and why?",
      "If you could live anywhere on this planet & and take everything that you love with you, where would you choose to live?",
      "What favorite color are you and how does being that color make you feel?",
      "If you could choose an imaginary friend, who would you choose and why?",
      "If you could sit on a bench in a beautiful woods, who would you like sitting next to you on the bench and why?",
      "Are you sunrise, daylight, twilight, or night? Please share why you picked your time of day.",
      "If you could choose your age forever, what age would you choose and why?",
      "If you could be in the movie of your choice, what movie would you choose and what character would you play?",
      "If you could meet any historical figure, who would you choose and why?",
      "If you were a city, which city would you choose to be and why?",
      "What are your 3 favorite foods?",
      "If you were a candy bar, which candy bar would you be? Share why.",
      "If you were to change your name, what name would you adopt going forward? Why?",
      "Are you spring, summer, fall, or winter? Please share why.",
      "If you were stranded on a desert island, what three items would you want to have with you?",
      "Share a description of your favorite material object that you already own?",
      "What item that you don't have already, would you most like to own?",
      "If you were to create a slogan for your life, what would the slogan be?",
      "Pick something out of your pocket or purse and share with the group why it's important to you.",
      "If you could meet any living person for a chat over a shared dinner, who would you pick and why?",
      "If you awoke one day as a flower, what flower would you choose to be?",
      "If you could choose one hobby that now seems out of your reach either financially or time-wise, what hobby would you take up and why?",
      "Thinking about the architecture of houses, what type of architecture is the best fit for you? What appeals to you about your choice?",
    ],
  },
];

const roulette = [
  {
    name: "Common IceBreakers",
    description:
      "The roulette asks is a great activity for people to get to know more about each other.",
    rules: "This has no rules, just talk and know eachother",
    content: [
      "If you were a city, which one would you be? Why?",
      "If you were a flavour, what would you be? Why?",
      "if you were some fruit, what would you be? Why?",
      "If you were a type of pasta, what would you be? Why?",
      "If you were a Disney princess, which one would you be? Why?",
      "If you were a computer brand, what would you be? Why?",
      "If you were a sense, what would you be? Why?",
      "If you were a Marvel hero, which one would you be? Why?",
      "if you were a fish, what would you be? Why?",
      "if you were an animal, what would you be? Why?",
      "if you were a vehicle, what would you be? Why?",
    ],
  },
];

const funFact = [
  {
    name: "FunFact",
    description:
      "Fun Fact is a simple and great energizer to get to know more about each other. People will anonymously write fun facts, then the group will try to match a person with their fun fact.",
    rules: [
      "Ask the participants to think about a fun fact about themselves individually.",
      "Instruct participants to write it on a note, anonymously.",
      "Make all the fun facts visible to everyone.",
      "Going one by one, let the group guess who the person is who wrote each fun fact.",
      "Write the name of the person next to the fun fact.",
    ],
    content: [],
  },
];

const crazy = [
  {
    name: "CrazyGame",
    description:
      "The Isn't that crazy energizer is amazing for getting people talking and collaboratively creating a story (usually a funny one). It fosters engagement and everyone participation while being very easy to deliver as it is done verbally.",
    rules: [
      "Instruct the participants to form a circle",
      "Identify the order in wich the communication will flow (e.g. clockwise).",
      "One person starts by saying “isn't that crazy?”",
      "The next person has to continue the story by adding 3 words",
      "Then the next and so forth until the story ends.",
    ],
  },
];

export {
  members,
  icebreakers,
  teams,
  emailToTeam,
  emailToMod,
  roulette,
  crazy,
  funFact,
};
