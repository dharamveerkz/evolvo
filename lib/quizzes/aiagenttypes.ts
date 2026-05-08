import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const aiAgentTypesQuizMeta: QuizMeta = {
  id: "ai-agent-types",
  category: "ai",
  subcategory: "agents",
  title: "AI Agent Types & Architectures",
  description:
    "Master the different types of AI agents, from reflex to learning architectures.",
  icon: "🧠",
  level: "Intermediate",
  questionCount: 50,
  color: "#06b6d4",
  featured: true,
  rating: 5,
  estimatedTime: "20 min",
  passThreshold: 35,
  showCertificate: true,
};

export const aiAgentTypesQuestions: QuizQuestion[] = [
  {
    question: "Which agent type uses condition-action rules without memory?",
    options: ["Model-based", "Simple reflex", "Goal-based", "Utility-based"],
    correctIndex: 1,
  },
  {
    question: "What is the key feature of a model-based reflex agent?",
    options: [
      "It uses neural networks",
      "It maintains an internal state representing unobserved aspects",
      "It requires human supervision",
      "It only works in fully observable environments",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type explicitly represents goals to guide behavior?",
    options: ["Reflex", "Model-based", "Goal-based", "Reactive"],
    correctIndex: 2,
  },
  {
    question:
      "What advantage do utility-based agents have over goal-based agents?",
    options: [
      "They are simpler to implement",
      "They can handle conflicting goals and preferences using numerical utilities",
      "They require less memory",
      "They don't need sensors",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which architecture is best for environments where the agent must learn from experience?",
    options: ["Table-driven", "Simple reflex", "Learning agent", "Hard-coded"],
    correctIndex: 2,
  },
  {
    question: "What is a 'reactive agent'?",
    options: [
      "An agent that plans long-term strategies",
      "An agent that responds directly to percepts without internal state",
      "An agent that only works offline",
      "An agent that requires labeled training data",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type uses search and planning algorithms?",
    options: [
      "Simple reflex",
      "Goal-based",
      "Reflex with state",
      "Table-driven",
    ],
    correctIndex: 1,
  },
  {
    question: "What distinguishes a 'deliberative agent'?",
    options: [
      "It reacts instantly to stimuli",
      "It uses symbolic reasoning and planning to make decisions",
      "It has no internal model",
      "It cannot learn",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which architecture combines reactive and deliberative approaches?",
    options: ["Pure reflex", "Hybrid agent", "Table-driven", "Simple utility"],
    correctIndex: 1,
  },
  {
    question: "What is a 'BDI agent'?",
    options: [
      "An agent using Binary Decision Intelligence",
      "An agent based on Beliefs, Desires, and Intentions",
      "A basic data interface agent",
      "A behavior-driven integration agent",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which component in a BDI agent represents the agent's knowledge about the world?",
    options: ["Desires", "Intentions", "Beliefs", "Goals"],
    correctIndex: 2,
  },
  {
    question: "What do 'intentions' represent in BDI architecture?",
    options: [
      "What the agent wants to achieve",
      "What the agent believes to be true",
      "The plans the agent has committed to executing",
      "The sensors the agent uses",
    ],
    correctIndex: 2,
  },
  {
    question: "Which agent type is most suitable for real-time strategy games?",
    options: [
      "Simple reflex",
      "Hybrid deliberative-reactive",
      "Table-driven",
      "Pure utility",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'subsumption architecture'?",
    options: [
      "A layered reactive architecture where higher layers can subsume lower ones",
      "A database-driven agent design",
      "A machine learning framework",
      "A cloud-based agent system",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which agent architecture was pioneered by Rodney Brooks for robotics?",
    options: ["BDI", "Subsumption", "Utility-based", "Model-based reflex"],
    correctIndex: 1,
  },
  {
    question: "What is a 'cognitive agent'?",
    options: [
      "An agent that mimics human cognitive processes like reasoning and learning",
      "An agent that only uses sensors",
      "An agent with no internal state",
      "An agent that operates offline",
    ],
    correctIndex: 0,
  },
  {
    question: "Which type of agent uses reinforcement learning?",
    options: [
      "Simple reflex",
      "Learning agent",
      "Table-driven",
      "Hard-coded reflex",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the main characteristic of a 'proactive agent'?",
    options: [
      "It only responds to external stimuli",
      "It takes initiative and pursues goals autonomously",
      "It requires constant user input",
      "It cannot adapt to change",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which agent type is designed to interact and collaborate with other agents?",
    options: ["Single-agent", "Social agent", "Reflex agent", "Isolated agent"],
    correctIndex: 1,
  },
  {
    question: "What defines a 'mobile agent'?",
    options: [
      "An agent that can migrate its code and state across networked systems",
      "An agent that controls a robot",
      "An agent with GPS capabilities",
      "An agent that works on smartphones",
    ],
    correctIndex: 0,
  },
  {
    question: "Which architecture is best for autonomous vehicles?",
    options: [
      "Simple reflex",
      "Hybrid architecture with perception, planning, and control layers",
      "Table-driven",
      "Pure reactive",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'software agent'?",
    options: [
      "An agent that exists only in software, without physical embodiment",
      "An agent written in Java",
      "An agent that requires internet",
      "An agent that controls hardware",
    ],
    correctIndex: 0,
  },
  {
    question: "Which agent type uses neural networks for decision-making?",
    options: [
      "Symbolic agent",
      "Connectionist/Neural agent",
      "Rule-based agent",
      "Table-driven",
    ],
    correctIndex: 1,
  },
  {
    question: "What is an 'intelligent personal assistant' agent?",
    options: [
      "A simple reflex agent",
      "A goal-based, learning agent designed to help users with tasks",
      "A table-driven lookup system",
      "A hardware sensor",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which architecture is used in chatbots that maintain conversation context?",
    options: [
      "Simple reflex",
      "Model-based with dialogue state tracking",
      "Table-driven",
      "Pure reactive",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'multi-agent system'?",
    options: [
      "A single agent with multiple sensors",
      "A system where multiple agents interact, cooperate, or compete",
      "An agent with multiple goals",
      "An agent that runs on multiple devices",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which communication protocol is commonly used in multi-agent systems?",
    options: ["HTTP", "FIPA-ACL", "FTP", "SMTP"],
    correctIndex: 1,
  },
  {
    question: "What is 'emergent behavior' in multi-agent systems?",
    options: [
      "Behavior explicitly programmed for each agent",
      "Complex global patterns arising from simple local agent interactions",
      "Errors in agent code",
      "Centralized control output",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type is best for recommendation systems?",
    options: [
      "Simple reflex",
      "Learning agent with collaborative filtering or reinforcement learning",
      "Table-driven",
      "Hard-coded rules",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'trading agent'?",
    options: [
      "An agent that barters with other agents",
      "An autonomous agent that makes buy/sell decisions in financial markets",
      "An agent that trades code modules",
      "An agent for e-commerce UI",
    ],
    correctIndex: 1,
  },
  {
    question: "Which architecture supports 'anytime algorithms'?",
    options: [
      "Simple reflex",
      "Deliberative agents that can return results even if interrupted",
      "Table-driven",
      "Pure reactive",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'case-based reasoning agent'?",
    options: [
      "An agent that uses if-then rules",
      "An agent that solves new problems by adapting solutions from past similar cases",
      "An agent that only works with databases",
      "An agent without memory",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type uses probabilistic graphical models?",
    options: [
      "Deterministic reflex",
      "Model-based agents handling uncertainty (e.g., POMDP agents)",
      "Table-driven",
      "Simple reactive",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'POMDP agent'?",
    options: [
      "An agent for partially observable Markov decision processes",
      "An agent with perfect observation",
      "A purely reactive agent",
      "An agent without a model",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which architecture is suitable for robotic navigation in unknown environments?",
    options: [
      "Simple reflex",
      "Model-based with SLAM and planning",
      "Table-driven",
      "Hard-coded paths",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'behavior-based agent'?",
    options: [
      "An agent that uses a single monolithic controller",
      "An agent composed of multiple concurrent behaviors that are arbitrated",
      "An agent without sensors",
      "An agent that only learns offline",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type is used in game AI for non-player characters?",
    options: [
      "Only simple reflex",
      "Often hybrid: finite state machines, behavior trees, or utility AI",
      "Only table-driven",
      "Only learning agents",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'behavior tree' architecture?",
    options: [
      "A database schema",
      "A hierarchical model for composing complex behaviors from simple tasks",
      "A neural network topology",
      "A communication protocol",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which agent architecture uses 'utility functions' to compare outcomes?",
    options: ["Reflex", "Goal-based", "Utility-based", "Table-driven"],
    correctIndex: 2,
  },
  {
    question: "What is the main limitation of simple reflex agents?",
    options: [
      "They are too complex",
      "They fail in partially observable or sequential environments",
      "They require too much memory",
      "They cannot use actuators",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type can handle 'credit assignment' in learning?",
    options: [
      "Simple reflex",
      "Reinforcement learning agent",
      "Table-driven",
      "Hard-coded",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'meta-reasoning agent'?",
    options: [
      "An agent that reasons about its own reasoning process",
      "An agent that only uses metadata",
      "An agent without goals",
      "An agent that cannot learn",
    ],
    correctIndex: 0,
  },
  {
    question: "Which architecture supports 'transfer learning'?",
    options: [
      "Simple reflex",
      "Advanced learning agents with knowledge representation",
      "Table-driven",
      "Pure reactive",
    ],
    correctIndex: 1,
  },
  {
    question: "What is an 'embodied conversational agent'?",
    options: [
      "A text-only chatbot",
      "An agent with a visual avatar that engages in dialogue",
      "An agent without sensors",
      "An agent that only works offline",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type is used in smart home automation?",
    options: [
      "Only simple reflex",
      "Often hybrid: event-driven rules with learning capabilities",
      "Only table-driven",
      "Only deliberative",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'normative agent'?",
    options: [
      "An agent that follows social norms and ethical constraints",
      "An agent with average performance",
      "An agent without goals",
      "An agent that only uses defaults",
    ],
    correctIndex: 0,
  },
  {
    question:
      "Which architecture is best for agents that must explain their decisions?",
    options: [
      "Black-box neural networks",
      "Symbolic or hybrid agents with interpretable reasoning",
      "Simple reflex",
      "Table-driven",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'self-organizing agent'?",
    options: [
      "An agent that requires central coordination",
      "An agent that adapts its structure or behavior through local interactions",
      "An agent without sensors",
      "An agent that cannot learn",
    ],
    correctIndex: 1,
  },
  {
    question: "Which agent type uses 'attention mechanisms'?",
    options: [
      "Simple reflex",
      "Advanced neural agents (e.g., transformers) that focus on relevant inputs",
      "Table-driven",
      "Hard-coded",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the key advantage of modular agent architectures?",
    options: [
      "They are always faster",
      "They allow easier development, testing, and maintenance of components",
      "They require less memory",
      "They don't need sensors",
    ],
    correctIndex: 1,
  },
];

export const loadAiAgentTypesQuiz = async (): Promise<QuizModule> => ({
  meta: aiAgentTypesQuizMeta,
  questions: aiAgentTypesQuestions,
});
