import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const aiAgentPeasQuizMeta: QuizMeta = {
  id: "ai-agent-peas",
  category: "ai",
  subcategory: "agents",
  title: "AI Agent PEAS Framework",
  description:
    "Master the PEAS framework: Performance, Environment, Actuators, Sensors for agent design.",
  icon: "🎯",
  level: "Intermediate",
  questionCount: 50,
  color: "#f59e0b",
  featured: true,
  rating: 5,
  estimatedTime: "20 min",
  passThreshold: 35,
  showCertificate: true,
};

export const aiAgentPeasQuestions: QuizQuestion[] = [
  {
    question: "What does PEAS stand for in AI agent design?",
    options: [
      "Performance, Environment, Algorithms, Sensors",
      "Performance, Environment, Actuators, Sensors",
      "Planning, Execution, Actions, States",
      "Perception, Evaluation, Action, Strategy",
    ],
    correctIndex: 1,
  },
  {
    question: "In PEAS, what does 'Performance' refer to?",
    options: [
      "The speed of the agent's processor",
      "The criteria for measuring the agent's success",
      "The amount of memory used",
      "The number of sensors installed",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which of the following is a performance measure for a vacuum cleaner agent?",
    options: [
      "Number of rooms cleaned, dirt removed, energy used",
      "Color of the vacuum",
      "Brand of the motor",
      "Weight of the device",
    ],
    correctIndex: 0,
  },
  {
    question: "What does 'Environment' in PEAS describe?",
    options: [
      "The programming environment",
      "The external world the agent operates in and interacts with",
      "The development tools used",
      "The user interface design",
    ],
    correctIndex: 1,
  },
  {
    question: "For an autonomous taxi, which is part of its PEAS Environment?",
    options: [
      "The programming language",
      "Roads, traffic, pedestrians, weather conditions",
      "The company's logo",
      "The fuel type",
    ],
    correctIndex: 1,
  },
  {
    question: "What are 'Actuators' in the PEAS framework?",
    options: [
      "Components that perceive the environment",
      "Components that execute actions to affect the environment",
      "Components that store data",
      "Components that evaluate performance",
    ],
    correctIndex: 1,
  },
  {
    question: "Which is an actuator for a robot vacuum agent?",
    options: [
      "Dirt sensor",
      "Wheels and suction motor",
      "Battery level monitor",
      "Obstacle detector",
    ],
    correctIndex: 1,
  },
  {
    question: "What are 'Sensors' in PEAS?",
    options: [
      "Components that execute actions",
      "Components that gather information from the environment",
      "Components that store goals",
      "Components that measure performance",
    ],
    correctIndex: 1,
  },
  {
    question: "For a medical diagnosis agent, which is a sensor?",
    options: [
      "Treatment recommendation engine",
      "Patient symptom input interface or lab data feed",
      "Performance evaluator",
      "Action executor",
    ],
    correctIndex: 1,
  },
  {
    question: "Which PEAS component defines what the agent can DO?",
    options: ["Performance", "Environment", "Actuators", "Sensors"],
    correctIndex: 2,
  },
  {
    question: "Which PEAS component defines what the agent can PERCEIVE?",
    options: ["Performance", "Environment", "Actuators", "Sensors"],
    correctIndex: 3,
  },
  {
    question: "For a chess-playing agent, what is a key performance measure?",
    options: [
      "Number of pieces moved",
      "Win rate, move quality, time per move",
      "Board color preference",
      "Opening book size",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the environment type for a chess agent?",
    options: [
      "Partially observable, stochastic, sequential",
      "Fully observable, deterministic, sequential, discrete, single-agent",
      "Dynamic, continuous, multi-agent",
      "Episodic, static, unknown",
    ],
    correctIndex: 1,
  },
  {
    question: "For a spam filter agent, what is the environment?",
    options: [
      "The email server hardware",
      "Incoming email messages and user feedback",
      "The spammer's computer",
      "The internet connection speed",
    ],
    correctIndex: 1,
  },
  {
    question: "Which is an actuator for a spam filter agent?",
    options: [
      "Email content parser",
      "Labeling email as spam/not-spam, moving to folder",
      "User interface display",
      "Network monitor",
    ],
    correctIndex: 1,
  },
  {
    question:
      "For a recommendation agent (e.g., Netflix), what is a performance measure?",
    options: [
      "Number of movies in database",
      "User engagement, click-through rate, satisfaction",
      "Server uptime",
      "Video resolution",
    ],
    correctIndex: 1,
  },
  {
    question: "What sensors might a self-driving car agent use?",
    options: [
      "Steering wheel and pedals",
      "Cameras, LiDAR, radar, GPS, IMU",
      "Entertainment system",
      "Air conditioning controls",
    ],
    correctIndex: 1,
  },
  {
    question: "What actuators does a self-driving car agent have?",
    options: [
      "Cameras and radar",
      "Steering, acceleration, braking, signaling systems",
      "GPS receiver",
      "Passenger display",
    ],
    correctIndex: 1,
  },
  {
    question: "For a web search agent, what is part of the environment?",
    options: [
      "The search algorithm",
      "The web, user queries, click behavior",
      "The data center",
      "The programming language",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a performance measure for a web search agent?",
    options: [
      "Number of servers used",
      "Relevance of results, response time, user satisfaction",
      "Font size of results",
      "Color scheme",
    ],
    correctIndex: 1,
  },
  {
    question:
      "For a manufacturing robot agent, which is NOT typically part of PEAS Environment?",
    options: [
      "Assembly line layout",
      "Parts to assemble",
      "Programming language used to code the agent",
      "Other robots or humans nearby",
    ],
    correctIndex: 2,
  },
  {
    question: "What is a key consideration when defining Performance measures?",
    options: [
      "They should be easy to compute",
      "They should align with the agent's purpose and stakeholder goals",
      "They should use minimal memory",
      "They should be the same for all agents",
    ],
    correctIndex: 1,
  },
  {
    question: "Why is it important to specify the Environment in PEAS?",
    options: [
      "To choose the right programming language",
      "To determine appropriate agent architecture and capabilities needed",
      "To estimate development cost",
      "To design the user interface",
    ],
    correctIndex: 1,
  },
  {
    question: "For a personal fitness coach agent, what might be a sensor?",
    options: [
      "Workout plan generator",
      "Wearable device data (heart rate, steps), user input",
      "Motivational message sender",
      "Progress report generator",
    ],
    correctIndex: 1,
  },
  {
    question: "What actuator might a fitness coach agent use?",
    options: [
      "Heart rate monitor",
      "Sending workout plans, reminders, feedback messages",
      "GPS tracker",
      "Calorie counter",
    ],
    correctIndex: 1,
  },
  {
    question:
      "In PEAS, can the same component serve as both sensor and actuator?",
    options: [
      "No, they are always separate",
      "Yes, e.g., a touchscreen can both display (actuate) and receive input (sense)",
      "Only in virtual agents",
      "Only in multi-agent systems",
    ],
    correctIndex: 1,
  },
  {
    question: "For a trading agent, what is a critical performance measure?",
    options: [
      "Number of trades executed",
      "Profit/loss, risk-adjusted return, drawdown",
      "Speed of the trading platform",
      "Number of stocks monitored",
    ],
    correctIndex: 1,
  },
  {
    question: "What characterizes the environment for a trading agent?",
    options: [
      "Fully observable, deterministic, static",
      "Partially observable, stochastic, dynamic, continuous, multi-agent",
      "Episodic, discrete, single-agent",
      "Static, known, sequential",
    ],
    correctIndex: 1,
  },
  {
    question:
      "For a customer service chatbot, what is part of the Environment?",
    options: [
      "The chatbot's code",
      "User messages, knowledge base, conversation history",
      "The server hardware",
      "The development framework",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a performance measure for a customer service chatbot?",
    options: [
      "Number of words in responses",
      "Resolution rate, user satisfaction, response time",
      "Font color used",
      "Number of training examples",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which PEAS element is most critical for determining if an agent needs memory?",
    options: ["Performance", "Environment", "Actuators", "Sensors"],
    correctIndex: 1,
  },
  {
    question:
      "If an environment is partially observable, what PEAS component might need enhancement?",
    options: [
      "Performance measures",
      "Sensors or internal modeling capabilities",
      "Actuator precision",
      "User interface",
    ],
    correctIndex: 1,
  },
  {
    question: "For a warehouse robot agent, which is an actuator?",
    options: [
      "Barcode scanner",
      "Motorized wheels, robotic arm, gripper",
      "Obstacle detection sensor",
      "Battery monitor",
    ],
    correctIndex: 1,
  },
  {
    question: "What performance measure matters for a warehouse robot?",
    options: [
      "Color of the robot",
      "Items picked per hour, accuracy, energy efficiency",
      "Number of sensors",
      "Brand of motors",
    ],
    correctIndex: 1,
  },
  {
    question: "In PEAS analysis, what comes first?",
    options: [
      "Choosing actuators",
      "Defining the task and Performance measures",
      "Selecting sensors",
      "Coding the agent",
    ],
    correctIndex: 1,
  },
  {
    question: "Why might you iterate on PEAS specifications?",
    options: [
      "Because the first draft is always perfect",
      "To refine understanding of requirements and feasibility",
      "To change the programming language",
      "To add more sensors arbitrarily",
    ],
    correctIndex: 1,
  },
  {
    question: "For a smart thermostat agent, what is the environment?",
    options: [
      "The thermostat hardware",
      "Home temperature, occupancy, weather, user preferences",
      "The mobile app",
      "The Wi-Fi network",
    ],
    correctIndex: 1,
  },
  {
    question: "What actuator does a smart thermostat use?",
    options: [
      "Temperature sensor",
      "HVAC system control signals (heat/cool/fan)",
      "Display screen",
      "Wi-Fi module",
    ],
    correctIndex: 1,
  },
  {
    question: "Which PEAS component helps determine if learning is needed?",
    options: [
      "Actuators",
      "Environment characteristics and Performance requirements",
      "Sensors only",
      "User interface",
    ],
    correctIndex: 1,
  },
  {
    question: "For a language translation agent, what is a sensor?",
    options: [
      "Translation engine",
      "Input text or speech from user",
      "Output display",
      "Network connection",
    ],
    correctIndex: 1,
  },
  {
    question: "What is an actuator for a translation agent?",
    options: [
      "Microphone",
      "Displaying or speaking the translated text",
      "Language detector",
      "User profile manager",
    ],
    correctIndex: 1,
  },
  {
    question:
      "In PEAS, what does a 'dynamic' environment imply for agent design?",
    options: [
      "The agent can use a simple reflex architecture",
      "The agent may need continuous perception and replanning",
      "The agent doesn't need sensors",
      "The agent can ignore performance measures",
    ],
    correctIndex: 1,
  },
  {
    question: "For a drone delivery agent, which is part of the Environment?",
    options: [
      "The drone's battery",
      "Airspace, weather, obstacles, delivery locations",
      "The control algorithm",
      "The package weight",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a key performance measure for a drone delivery agent?",
    options: [
      "Color of the drone",
      "On-time delivery rate, safety, energy efficiency",
      "Number of propellers",
      "Brand of camera",
    ],
    correctIndex: 1,
  },
  {
    question: "Which PEAS element is most affected by ethical constraints?",
    options: ["Actuators", "Sensors", "Performance measures", "Environment"],
    correctIndex: 2,
  },
  {
    question:
      "For a content moderation agent, what might be a challenging environment characteristic?",
    options: [
      "Fully observable",
      "Ambiguous, evolving, adversarial content requiring nuanced judgment",
      "Static and deterministic",
      "Discrete and episodic",
    ],
    correctIndex: 1,
  },
  {
    question: "What sensor might a content moderation agent use?",
    options: [
      "User ban hammer",
      "Text, image, or video input streams",
      "Appeal processor",
      "Policy database",
    ],
    correctIndex: 1,
  },
  {
    question: "In PEAS, why specify both sensors and actuators explicitly?",
    options: [
      "To make the document longer",
      "To ensure the agent's capabilities match task requirements and environment constraints",
      "To choose a programming language",
      "To estimate cost only",
    ],
    correctIndex: 1,
  },
  {
    question: "For a game NPC agent, what is part of the Environment?",
    options: [
      "The game engine code",
      "Game world state, player actions, other NPCs",
      "The graphics card",
      "The sound system",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a performance measure for a game NPC?",
    options: [
      "Polygon count of the model",
      "Believability, challenge level, player engagement",
      "Frame rate",
      "Audio quality",
    ],
    correctIndex: 1,
  },
  {
    question: "Which statement about PEAS is TRUE?",
    options: [
      "PEAS is only for robotics",
      "PEAS provides a structured way to specify an agent task before design",
      "PEAS replaces the need for testing",
      "PEAS components are optional",
    ],
    correctIndex: 1,
  },
];

export const loadAiAgentPeasQuiz = async (): Promise<QuizModule> => ({
  meta: aiAgentPeasQuizMeta,
  questions: aiAgentPeasQuestions,
});
