import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const mlQuizMeta: QuizMeta = {
  id: "machine-learning",
  category: "datascience",
  subcategory: "machine-learning",
  title: "Machine Learning Mastery",
  description:
    "Test your knowledge on algorithms, training, and model evaluation",
  icon: "🤖",
  level: "Intermediate",
  questionCount: 50,
  color: "#ff9900",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "30 min",
};

export const mlQuizQuestions: QuizQuestion[] = [
  {
    question: "What is Supervised Learning?",
    options: [
      "Learning from unlabeled data",
      "Learning from labeled data with inputs and known outputs",
      "Learning by trial and error",
      "Learning without any data",
    ],
    correctIndex: 1,
  },
  {
    question: "Which algorithm is used for classification?",
    options: ["Linear Regression", "K-Means", "Logistic Regression", "Apriori"],
    correctIndex: 2,
  },
  {
    question: "What is 'Overfitting'?",
    options: [
      "Model performs well on training data but poorly on unseen data",
      "Model performs poorly on both training and test data",
      "Model is too simple",
      "Model is training too fast",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Underfitting'?",
    options: [
      "Model is too complex",
      "Model cannot capture the underlying trend of the data",
      "Model matches the noise in the data",
      "Model has too many features",
    ],
    correctIndex: 1,
  },
  {
    question: "Which of the following is an example of Unsupervised Learning?",
    options: [
      "Spam Detection",
      "Stock Price Prediction",
      "Customer Segmentation (Clustering)",
      "Image Classification",
    ],
    correctIndex: 2,
  },
  {
    question: "What is the 'target' variable in Machine Learning?",
    options: [
      "The input features",
      "The outcome we want to predict",
      "The size of the data",
      "The model's speed",
    ],
    correctIndex: 1,
  },
  {
    question: "Which metric is commonly used for Regression models?",
    options: ["Accuracy", "Mean Squared Error (MSE)", "Precision", "F1-Score"],
    correctIndex: 1,
  },
  {
    question: "What does the 'K' in K-Nearest Neighbors represent?",
    options: [
      "Number of clusters",
      "Number of neighboring data points to consider",
      "Number of features",
      "Number of iterations",
    ],
    correctIndex: 1,
  },
  {
    question: "What is a 'Confusion Matrix'?",
    options: [
      "A table used to describe the performance of a classification model",
      "A matrix that confuses the data",
      "A method to handle missing values",
      "A type of neural network",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Precision' in classification?",
    options: [
      "Ability to find all positive instances",
      "Ratio of true positives to the total predicted positives",
      "The overall correctness of the model",
      "The time taken to predict",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Recall' (Sensitivity)?",
    options: [
      "Ratio of true positives to all actual positives",
      "Ratio of true negatives to all actual negatives",
      "How fast the model remembers data",
      "Predicting everything as positive",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the F1-Score?",
    options: [
      "The sum of precision and recall",
      "The harmonic mean of precision and recall",
      "The maximum value of accuracy",
      "The first score recorded",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which algorithm uses 'Entropy' or 'Gini Impurity' for splitting nodes?",
    options: ["SVM", "Decision Trees", "K-Means", "Linear Regression"],
    correctIndex: 1,
  },
  {
    question: "What is a 'Random Forest'?",
    options: [
      "A single very deep decision tree",
      "An ensemble of multiple decision trees",
      "A type of dataset",
      "A data cleaning method",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Cross-Validation' used for?",
    options: [
      "To check if data is valid",
      "To assess the model's ability to generalize to independent datasets",
      "To speed up training",
      "To visualize data",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the main goal of Gradient Descent?",
    options: [
      "To increase the error",
      "To minimize the cost/loss function",
      "To find the highest peak",
      "To add more features",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which technique is used to reduce the dimensionality of a dataset?",
    options: [
      "Linear Regression",
      "Principal Component Analysis (PCA)",
      "Random Forest",
      "Logistic Regression",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Clustering'?",
    options: [
      "Predicting a continuous value",
      "Grouping similar data points together",
      "Labeling images",
      "Removing outliers",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Bias' in Machine Learning?",
    options: [
      "Errors from overly complex models",
      "Errors from overly simplistic assumptions in the learning algorithm",
      "Data theft",
      "The model's preference for certain users",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Variance' in Machine Learning?",
    options: [
      "Sensitivity to small fluctuations in the training set",
      "The average value of the error",
      "A way to calculate mean",
      "The speed of convergence",
    ],
    correctIndex: 0,
  },
  {
    question: "Which of these is a 'Hyperparameter'?",
    options: [
      "Weights in neural network",
      "Learning Rate",
      "Biases",
      "Predicted labels",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Regularization' (e.g., L1, L2)?",
    options: [
      "Making data look normal",
      "Techniques used to prevent overfitting by penalizing complexity",
      "Cleaning the data regularily",
      "Removing features with zero values",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Reinforcement Learning'?",
    options: [
      "Learning from historic data",
      "Learning through rewards and penalties in an environment",
      "Correcting the model's mistakes manually",
      "Using two models at once",
    ],
    correctIndex: 1,
  },
  {
    question: "What does SVM stand for?",
    options: [
      "Simple Vector Machine",
      "Support Vector Machine",
      "System Variable Model",
      "Static Value Machine",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the 'Kernel Trick' in SVM?",
    options: [
      "A way to speed up the CPU",
      "A method to transform data into a higher dimension to find a hyperplane",
      "A way to fix bugs in the code",
      "A sorting algorithm",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Feature Engineering'?",
    options: [
      "Repairing computers",
      "Selecting and transforming raw variables into meaningful features",
      "Designing the hardware for ML",
      "Measuring the weight of the model",
    ],
    correctIndex: 1,
  },
  {
    question: "Which of the following is a type of Ensemble Learning?",
    options: ["Bagging", "Boosting", "Stacking", "All of the above"],
    correctIndex: 3,
  },
  {
    question: "What is the purpose of 'Normalization' or 'Scaling'?",
    options: [
      "To make data have a similar range so certain features don't dominate",
      "To make the data smaller in size",
      "To remove negative numbers",
      "To increase the number of rows",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Neural Network' inspired by?",
    options: [
      "The solar system",
      "The human brain",
      "Ocean currents",
      "Traffic patterns",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Backpropagation'?",
    options: [
      "Moving data to a backup server",
      "An algorithm for updating weights in a neural network based on the error",
      "A way to undo a prediction",
      "A clustering technique",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Deep Learning'?",
    options: [
      "ML with very large datasets",
      "ML using multi-layered neural networks",
      "ML with complex math",
      "ML performed by supercomputers",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which activation function is commonly used in hidden layers of Deep Networks?",
    options: ["Sigmoid", "ReLU", "Step", "Linear"],
    correctIndex: 1,
  },
  {
    question: "What is 'Epoch' in ML training?",
    options: [
      "The date the model was made",
      "One complete pass of the entire training dataset through the model",
      "The speed of the model",
      "A single data point",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Batch Size'?",
    options: [
      "The total size of the dataset",
      "The number of training examples utilized in one iteration",
      "The number of models in a forest",
      "The number of features",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of 'Early Stopping'?",
    options: [
      "To save electricity",
      "To prevent overfitting by stopping training when validation performance starts to drop",
      "To finish work early",
      "To fix a crash",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'NLP'?",
    options: [
      "Natural Logic Processing",
      "Natural Language Processing",
      "Neural Level Programming",
      "Node Level Protocol",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'One-Hot Encoding'?",
    options: [
      "Heating the computer",
      "Converting categorical data into a binary vector format",
      "Sorting numbers",
      "Measuring the temperature of data",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Outlier'?",
    options: [
      "A person who works outdoors",
      "A data point that differs significantly from other observations",
      "The output of a model",
      "A variable with zero value",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Imbalanced Dataset'?",
    options: [
      "A dataset with too many columns",
      "A dataset where one class is much more frequent than others",
      "A dataset with corrupt data",
      "A dataset with different data types",
    ],
    correctIndex: 1,
  },
  {
    question: "Which metric is misleading for imbalanced datasets?",
    options: ["Precision", "Accuracy", "Recall", "ROC-AUC"],
    correctIndex: 1,
  },
  {
    question: "What is 'Data Augmentation'?",
    options: [
      "Increasing the price of data",
      "Creating new training data from existing data (common in images)",
      "Deleting redundant data",
      "Compressing files",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Transfer Learning'?",
    options: [
      "Moving data from one PC to another",
      "Using a pre-trained model on a new, similar task",
      "Learning while traveling",
      "Sending the model to a client",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'A/B Testing'?",
    options: [
      "Testing two versions (A and B) to see which performs better",
      "Testing a model on Grade A data",
      "A school exam",
      "A type of clustering",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'Recommendation System'?",
    options: [
      "A system that gives advice",
      "A system that predicts user preference for items (like Netflix/Amazon)",
      "A hiring system",
      "A model that recommends better hardware",
    ],
    correctIndex: 1,
  },
  {
    question: "Which algorithm is used for finding association rules in data?",
    options: ["K-Means", "Apriori", "SVM", "XGBoost"],
    correctIndex: 1,
  },
  {
    question: "What is the 'Elbow Method' used for?",
    options: [
      "Fixing an arm",
      "Finding the optimal number of clusters in K-Means",
      "Determining the height of a tree",
      "Stopping training",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Exploratory Data Analysis' (EDA)?",
    options: [
      "Cleaning the data",
      "Analyzing datasets to summarize their main characteristics, often with visuals",
      "Presenting to stakeholders",
      "Predicting future values",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'p-value' used for in statistics/ML?",
    options: [
      "To measure precision",
      "To determine the statistical significance of results",
      "To calculate probability of error",
      "To find the peak of a curve",
    ],
    correctIndex: 1,
  },
  {
    question: "What is 'Hyperparameter Tuning'?",
    options: [
      "Training the model faster",
      "The process of finding the best hyperparameters for a model (e.g., GridSearch)",
      "Increasing the CPU speed",
      "Cleaning the features",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the primary library for Machine Learning in Python?",
    options: ["Matplotlib", "Scikit-Learn", "NumPy", "Flask"],
    correctIndex: 1,
  },
];

export const loadMLQuiz = async (): Promise<QuizModule> => ({
  meta: mlQuizMeta,
  questions: mlQuizQuestions,
});
