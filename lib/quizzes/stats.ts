import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const statsQuizMeta: QuizMeta = {
  id: "stats-prob",
  category: "datascience",
  subcategory: "statistics",
  title: "Statistics & Probability",
  description: "Foundational math for data analysis and decision making",
  icon: "📊",
  level: "Beginner",
  questionCount: 50,
  color: "#d4a017",
  featured: false,
  rating: 4,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "25 min",
};

export const statsQuizQuestions: QuizQuestion[] = [
  {
    question: "What is the 'Mean'?",
    options: [
      "The middle value",
      "The most frequent value",
      "The average value",
      "The range",
    ],
    correctIndex: 2,
  },
  {
    question: "What is the 'Median'?",
    options: [
      "The average",
      "The middle value in a sorted list",
      "The highest value",
      "The difference between high and low",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'Mode'?",
    options: [
      "The smallest value",
      "The value that appears most frequently",
      "The sum of all values",
      "The variation",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Standard Deviation'?",
    options: [
      "A measure of how spread out numbers are",
      "The average of all numbers",
      "The highest number",
      "A way to count items",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Variance'?",
    options: [
      "The square root of standard deviation",
      "The square of the standard deviation",
      "The sum of all values",
      "The middle value",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'Normal Distribution' (Bell Curve)?",
    options: [
      "A distribution where data is spread randomly",
      "A symmetric distribution where most data is near the mean",
      "A distribution that only has positive values",
      "A flat line",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the probability of flipping a coin and getting heads?",
    options: ["1", "0.25", "0.5", "0"],
    correctIndex: 2,
  },
  {
    question: "What is 'Independent Event' in probability?",
    options: [
      "Events that depend on each other",
      "Occurrence of one event does not affect the occurrence of the other",
      "Events that happen at the same time",
      "Events that never happen",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'Null Hypothesis' (H0)?",
    options: [
      "The theory that there is no effect or no difference",
      "The theory we want to prove",
      "A hypothesis with zero data",
      "A broken theory",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Alternative Hypothesis' (H1)?",
    options: [
      "The theory that there is an effect or difference",
      "The same as Null Hypothesis",
      "A secondary theory",
      "A theory without a p-value",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Correlation'?",
    options: [
      "How one variable causes another",
      "A statistical measure of how two variables move in relation to each other",
      "The sum of two variables",
      "The difference between two variables",
    ],
    correctIndex: 1,
  },
  {
    question: "Does correlation imply causation?",
    options: ["Yes", "No", "Always", "In some cases"],
    correctIndex: 1,
  },
  {
    question: "What is an 'Outlier'?",
    options: [
      "A value that is far away from other data points",
      "A value that is equal to the mean",
      "The most common value",
      "A data point outside the computer",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the 'Range' of a dataset?",
    options: [
      "The average",
      "The difference between the maximum and minimum values",
      "The total count",
      "The middle value",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Sample' in statistics?",
    options: [
      "The entire population",
      "A subset of the population",
      "A single person",
      "A type of chart",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Population' in statistics?",
    options: [
      "The entire group being studied",
      "A small group",
      "A single city",
      "The data in a spreadsheet",
    ],
    correctIndex: 0,
  },
  {
    question: "What is a 'Skewed Distribution'?",
    options: [
      "A bell curve",
      "A distribution that is not symmetric",
      "A perfect line",
      "A circle",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Central Limit Theorem'?",
    options: [
      "Data always follows a straight line",
      "The sampling distribution of the mean will be normal if the sample size is large enough",
      "The mean is always zero",
      "Small samples are better than large ones",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Type I Error'?",
    options: [
      "False Positive (Rejecting H0 when it is true)",
      "False Negative (Failing to reject H0 when it is false)",
      "A syntax error",
      "Missing data",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Type II Error'?",
    options: [
      "False Positive",
      "False Negative (Failing to reject H0 when it is false)",
      "Wrong data type",
      "Calculation error",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Box Plot' used for?",
    options: [
      "To show the distribution and identify outliers",
      "To draw a map",
      "To count text",
      "To show a timeline",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Z-score'?",
    options: [
      "A score given by a teacher",
      "The number of standard deviations a data point is from the mean",
      "The final result of a study",
      "The last letter score",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the sum of probabilities of all possible outcomes?",
    options: ["0", "0.5", "1", "100"],
    correctIndex: 2,
  },
  {
    question: "What is 'Uniform Distribution'?",
    options: [
      "A bell curve",
      "A distribution where all outcomes are equally likely",
      "A distribution for clothes",
      "A random mess",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Interquartile Range' (IQR)?",
    options: [
      "Range between 1st and 3rd quartile",
      "The full range",
      "The average",
      "The standard deviation",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Chi-Square Test' used for?",
    options: [
      "To test the relationship between categorical variables",
      "To find the mean",
      "To draw a square",
      "To predict numbers",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'ANOVA' used for?",
    options: [
      "Analyzing only one person",
      "Comparing the means of three or more groups",
      "Finding the mode",
      "Calculating probability",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Bayes' Theorem'?",
    options: [
      "A way to calculate probability based on prior knowledge",
      "A theory about ocean waves",
      "A sorting algorithm",
      "A law of physics",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Discrete' data?",
    options: [
      "Data that can only take specific values (e.g., number of children)",
      "Data that can be any value in a range",
      "Hidden data",
      "Text data",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Continuous' data?",
    options: [
      "Data that can take any value in a range (e.g., height, weight)",
      "Data that stops",
      "Binary data",
      "Labels",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the 'Law of Large Numbers'?",
    options: [
      "Large numbers are better",
      "As a sample size increases, the sample mean gets closer to the population mean",
      "Large numbers are hard to calculate",
      "Population is always large",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Significance Level' (Alpha)?",
    options: [
      "The probability of making a Type I error",
      "The height of the curve",
      "The average",
      "The final score",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Histogram' used for?",
    options: [
      "To show the frequency distribution of continuous data",
      "To show categories",
      "To plot time",
      "To show a map",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Multimodal' distribution?",
    options: [
      "A distribution with one peak",
      "A distribution with two or more peaks",
      "No peaks",
      "A straight line",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Random Variable'?",
    options: [
      "A variable that changes randomly",
      "A variable whose value is determined by the outcome of a random phenomenon",
      "A mistake in code",
      "A variable without a name",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Scatter Plot' used for?",
    options: [
      "To show the relationship between two continuous variables",
      "To show the average",
      "To draw a circle",
      "To list names",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Probability Density Function' (PDF)?",
    options: [
      "A document with probability",
      "A function that describes the likelihood of a continuous random variable",
      "A way to print stats",
      "A type of table",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Degrees of Freedom'?",
    options: [
      "The right to vote",
      "The number of independent pieces of information used to estimate a statistic",
      "The speed of the model",
      "The number of rows",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Margin of Error'?",
    options: [
      "The amount of error allowed",
      "The range of values below and above a sample statistic in a confidence interval",
      "The wrong answer",
      "A typo",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Regression'?",
    options: [
      "Moving backwards",
      "Predicting a continuous target variable",
      "Sorting data",
      "Cleaning data",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Residual' in regression?",
    options: [
      "The leftover data",
      "The difference between the observed value and the predicted value",
      "The sum of all values",
      "The starting value",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'R-squared'?",
    options: [
      "A measure of how well the regression line fits the data",
      "The square of the radius",
      "The total error",
      "A random number",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Binomial Distribution'?",
    options: [
      "A distribution for any number of outcomes",
      "A distribution with only two possible outcomes (e.g., success/failure)",
      "A distribution for text",
      "A distribution for colors",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Poisson Distribution' used for?",
    options: [
      "To model the number of events occurring within a fixed interval of time or space",
      "To model height",
      "To model coin flips",
      "To model grades",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Qualitative' data?",
    options: [
      "Numerical data",
      "Categorical/descriptive data (labels)",
      "Scientific data",
      "Math data",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Quantitative' data?",
    options: [
      "Numerical data (counts, measurements)",
      "Descriptive data",
      "Small data",
      "Color data",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Standard Error'?",
    options: [
      "The standard deviation of a sampling distribution",
      "A common mistake",
      "An error code",
      "The final deviation",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Quartile'?",
    options: [
      "One-fourth of the data",
      "One-tenth of the data",
      "One-half of the data",
      "A type of coin",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Bernoulli Trial'?",
    options: [
      "A trial in court",
      "A random experiment with exactly two outcomes",
      "A test of a machine",
      "A medical test",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Covariance'?",
    options: [
      "The variance of two variables",
      "A measure of how much two random variables change together",
      "A type of chart",
      "The sum of variables",
    ],
    correctIndex: 1,
  },
];

export const loadStatsQuiz = async (): Promise<QuizModule> => ({
  meta: statsQuizMeta,
  questions: statsQuizQuestions,
});
