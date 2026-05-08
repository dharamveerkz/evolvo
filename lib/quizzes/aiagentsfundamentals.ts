import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const aiAgentsFundamentalsQuizMeta: QuizMeta = {
  id: "ai-agents-fundamentals",
  category: "ai",
  subcategory: "agents",
  title: "AI Agents Fundamentals",
  description:
    "Test your knowledge of intelligent agents, their components, and core principles.",
  icon: "🤖",
  level: "Beginner",
  questionCount: 50,
  color: "#7c3aed",
  featured: true,
  rating: 5,
  estimatedTime: "20 min",
  passThreshold: 35,
  showCertificate: true,
};

export const aiAgentsFundamentalsQuestions: QuizQuestion[] = [
  {
    question: "What is the primary definition of an AI agent?",
    options: [
      "A hardware component that processes data",
      "An entity that perceives its environment and takes actions to achieve goals",
      "A database system for storing knowledge",
      "A user interface for interacting with software",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which component allows an AI agent to gather information from its environment?",
    options: ["Actuators", "Sensors", "Processor", "Memory"],
    correctIndex: 1,
  },
  {
    question: "What is the role of actuators in an AI agent?",
    options: [
      "To perceive the environment",
      "To store historical data",
      "To execute actions that affect the environment",
      "To evaluate performance metrics",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which term describes the sequence of observations an agent receives over time?",
    options: [
      "Action sequence",
      "Percept sequence",
      "State history",
      "Goal trace",
    ],
    correctIndex: 1,
  },
  {
    question: "What does the 'agent function' map?",
    options: [
      "Actions to percepts",
      "Percept sequences to actions",
      "Goals to states",
      "Sensors to actuators",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which property describes an agent that always selects the action expected to maximize its performance measure?",
    options: ["Autonomous", "Rational", "Reactive", "Adaptive"],
    correctIndex: 1,
  },
  {
    question: "What is a 'performance measure' in the context of AI agents?",
    options: [
      "The speed at which an agent processes data",
      "A criterion for evaluating the success of an agent's behavior",
      "The amount of memory an agent uses",
      "The number of sensors an agent has",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which type of agent selects actions based only on the current percept?",
    options: [
      "Model-based agent",
      "Goal-based agent",
      "Simple reflex agent",
      "Utility-based agent",
    ],
    correctIndex: 2,
  },
  {
    question: "What is 'autonomy' in AI agents?",
    options: [
      "The ability to operate without human intervention",
      "The capacity to learn from experience",
      "The speed of decision-making",
      "The number of goals an agent can handle",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which component stores information about the world that is not directly observable?",
    options: [
      "Sensor module",
      "Internal model",
      "Action selector",
      "Performance evaluator",
    ],
    correctIndex: 1,
  },
  {
    question:
      "What distinguishes a model-based reflex agent from a simple reflex agent?",
    options: [
      "It uses machine learning",
      "It maintains an internal state to track unobservable aspects",
      "It has more sensors",
      "It operates faster",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which agent type uses explicit goals to guide its decision-making?",
    options: [
      "Reflex agent",
      "Model-based agent",
      "Goal-based agent",
      "Learning agent",
    ],
    correctIndex: 2,
  },
  {
    question: "What is the purpose of a utility function in AI agents?",
    options: [
      "To measure computational efficiency",
      "To map states to numerical values representing preference",
      "To count the number of actions taken",
      "To store percept history",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which agent architecture is most suitable for environments with uncertainty?",
    options: [
      "Simple reflex",
      "Model-based",
      "Utility-based",
      "All of the above",
    ],
    correctIndex: 2,
  },
  {
    question: "What does 'learning' enable an AI agent to do?",
    options: [
      "Operate without sensors",
      "Improve performance based on experience",
      "Ignore performance measures",
      "Function without a goal",
    ],
    correctIndex: 1,
  },
  {
    question: "Which element is NOT part of the PEAS framework?",
    options: ["Performance", "Environment", "Algorithms", "Sensors"],
    correctIndex: 2,
  },
  {
    question: "What is the 'environment' in the PEAS description?",
    options: [
      "The programming language used",
      "The external world the agent interacts with",
      "The hardware specifications",
      "The user interface design",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which property describes an environment where the next state depends only on the current state and action?",
    options: ["Partially observable", "Stochastic", "Markovian", "Sequential"],
    correctIndex: 2,
  },
  {
    question: "What characterizes a 'fully observable' environment?",
    options: [
      "The agent can see everything at all times",
      "The agent's sensors give access to the complete state at each point",
      "The environment never changes",
      "The agent has perfect prediction",
    ],
    correctIndex: 1,
  },
  {
    question: "In a 'deterministic' environment, what is true?",
    options: [
      "The next state is completely determined by the current state and action",
      "The agent cannot predict outcomes",
      "Multiple agents compete",
      "The environment changes randomly",
    ],
    correctIndex: 0,
  },
  {
    question: "Which environment type requires an agent to plan ahead?",
    options: ["Episodic", "Sequential", "Static", "Discrete"],
    correctIndex: 1,
  },
  {
    question: "What defines an 'episodic' environment?",
    options: [
      "Each decision is independent of previous ones",
      "The agent must remember all past actions",
      "The environment changes continuously",
      "Multiple agents interact simultaneously",
    ],
    correctIndex: 0,
  },
  {
    question: "In a 'static' environment, what is true?",
    options: [
      "The environment changes while the agent deliberates",
      "The environment does not change while the agent is thinking",
      "The agent cannot move",
      "Time is discrete",
    ],
    correctIndex: 1,
  },
  {
    question: "What characterizes a 'discrete' environment?",
    options: [
      "Continuous sensor inputs",
      "A finite number of distinct percepts and actions",
      "Infinite possible states",
      "Real-time processing requirements",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which environment type involves multiple agents with potentially conflicting goals?",
    options: ["Single-agent", "Competitive", "Collaborative", "Multi-agent"],
    correctIndex: 3,
  },
  {
    question:
      "What is the primary challenge in partially observable environments?",
    options: [
      "Too much data to process",
      "The agent cannot directly observe the full state",
      "Actions have no effect",
      "Goals are undefined",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent architecture is best for dynamic environments?",
    options: [
      "Simple reflex",
      "Model-based with continuous updates",
      "Lookup table",
      "Hard-coded rules",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'bounded rationality' in AI agents?",
    options: [
      "Agents that cannot learn",
      "Agents that make optimal decisions given computational limitations",
      "Agents with limited sensors",
      "Agents that only work in simple environments",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which component evaluates how well an agent is achieving its goals?",
    options: [
      "Critic",
      "Learning element",
      "Performance element",
      "Problem generator",
    ],
    correctIndex: 0,
  },
  {
    question:
      "What is the role of the 'problem generator' in a learning agent?",
    options: [
      "To create errors for testing",
      "To suggest exploratory actions that lead to new knowledge",
      "To define the performance measure",
      "To select the best action",
    ],
    correctIndex: 1,
  },
  {
    question: "Which learning type involves learning from labeled examples?",
    options: [
      "Reinforcement learning",
      "Unsupervised learning",
      "Supervised learning",
      "Active learning",
    ],
    correctIndex: 2,
  },
  {
    question: "What is 'reinforcement learning'?",
    options: [
      "Learning from correct answers",
      "Learning patterns in unlabeled data",
      "Learning through rewards and penalties from interactions",
      "Learning by copying human behavior",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which agent type can adapt to new situations not explicitly programmed?",
    options: [
      "Reflex agent",
      "Learning agent",
      "Table-driven agent",
      "Hard-coded agent",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'frame problem' in AI?",
    options: [
      "Difficulty in rendering graphics",
      "Determining which aspects of the world remain unchanged after an action",
      "Managing memory frames",
      "Synchronizing multiple agents",
    ],
    correctIndex: 1,
  },
  {
    question: "Which representation is commonly used for an agent's knowledge?",
    options: [
      "Binary code",
      "Logic, rules, or probabilistic models",
      "Audio files",
      "Video streams",
    ],
    correctIndex: 1,
  },
  {
    question: "What does 'situated' mean for an AI agent?",
    options: [
      "The agent is physically located somewhere",
      "The agent is embedded in and interacts with an environment",
      "The agent has a fixed goal",
      "The agent uses GPS",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which principle states that an agent should only take actions it believes will achieve its goals?",
    options: [
      "Principle of least action",
      "Rationality principle",
      "Occam's razor",
      "Uncertainty principle",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'embodiment' in AI agents?",
    options: [
      "Having a physical body or simulated form that interacts with the environment",
      "Writing code in a specific language",
      "Storing data in the cloud",
      "Using multiple sensors",
    ],
    correctIndex: 0,
  },
  {
    question: "Which factor does NOT affect agent design?",
    options: [
      "Environment characteristics",
      "Performance measure",
      "Programming language popularity",
      "Available actuators and sensors",
    ],
    correctIndex: 2,
  },
  {
    question: "What is the 'percept' in agent terminology?",
    options: [
      "A type of sensor",
      "The agent's internal goal",
      "The input the agent receives from the environment at a given moment",
      "The action selection algorithm",
    ],
    correctIndex: 2,
  },
  {
    question: "Which architecture uses condition-action rules?",
    options: ["Utility-based", "Goal-based", "Reflex", "Learning"],
    correctIndex: 2,
  },
  {
    question: "What is the main limitation of table-driven agents?",
    options: [
      "They are too fast",
      "They require impractical amounts of memory for complex environments",
      "They cannot use sensors",
      "They only work in virtual worlds",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type is most flexible for unknown environments?",
    options: ["Table-driven", "Simple reflex", "Learning agent", "Hard-coded"],
    correctIndex: 2,
  },
  {
    question: "What does 'online' mean for an AI agent?",
    options: [
      "Connected to the internet",
      "Making decisions while interacting with the environment in real-time",
      "Using cloud computing",
      "Having a graphical interface",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which property allows an agent to operate without direct human control?",
    options: ["Reactivity", "Autonomy", "Proactiveness", "Sociability"],
    correctIndex: 1,
  },
  {
    question: "What is 'proactiveness' in agent behavior?",
    options: [
      "Reacting to changes",
      "Taking initiative to achieve goals",
      "Learning from mistakes",
      "Communicating with users",
    ],
    correctIndex: 1,
  },
  {
    question: "Which framework is used to formally specify an agent task?",
    options: ["MVC", "PEAS", "REST", "MVP"],
    correctIndex: 1,
  },
  {
    question: "What is the primary goal of an AI agent's design?",
    options: [
      "To mimic human behavior exactly",
      "To maximize expected performance given its knowledge and capabilities",
      "To use the least amount of code",
      "To run on any hardware",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which component translates high-level decisions into executable commands?",
    options: [
      "Sensor interface",
      "Actuator interface",
      "Knowledge base",
      "Learning module",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'exploration vs. exploitation' in learning agents?",
    options: [
      "Choosing between trying new actions or using known good actions",
      "Deciding sensor placement",
      "Balancing memory and speed",
      "Selecting programming paradigms",
    ],
    correctIndex: 0,
  },
];

export const loadAiAgentsFundamentalsQuiz = async (): Promise<QuizModule> => ({
  meta: aiAgentsFundamentalsQuizMeta,
  questions: aiAgentsFundamentalsQuestions,
});
