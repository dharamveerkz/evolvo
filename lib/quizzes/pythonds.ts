import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const pythonDSQuizMeta: QuizMeta = {
  id: "python-ds",
  category: "datascience",
  subcategory: "python",
  title: "Python for Data Science",
  description: "Master NumPy, Pandas, and data manipulation techniques",
  icon: "🐍",
  level: "Beginner",
  questionCount: 50,
  color: "#3776ab",
  featured: true,
  rating: 5,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "25 min",
};

export const pythonDSQuizQuestions: QuizQuestion[] = [
  {
    question:
      "Which library is primarily used for high-performance numerical arrays in Python?",
    options: ["Pandas", "NumPy", "Matplotlib", "SciPy"],
    correctIndex: 1,
  },
  {
    question: "What does the 'shape' attribute of a NumPy array return?",
    options: [
      "The number of elements",
      "The dimensions of the array",
      "The data type",
      "The memory size",
    ],
    correctIndex: 1,
  },
  {
    question: "In Pandas, what is a 1-dimensional labeled array called?",
    options: ["DataFrame", "Series", "Panel", "Array"],
    correctIndex: 1,
  },
  {
    question:
      "Which method is used to read a CSV file into a Pandas DataFrame?",
    options: ["read_file()", "read_csv()", "load_csv()", "open_csv()"],
    correctIndex: 1,
  },
  {
    question: "What does the 'head()' method do in Pandas?",
    options: [
      "Returns the last 5 rows",
      "Returns the column names",
      "Returns the first 5 rows",
      "Returns the summary stats",
    ],
    correctIndex: 2,
  },
  {
    question:
      "Which function is used to create an array with a range of values in NumPy?",
    options: ["range()", "arange()", "linspace()", "array_range()"],
    correctIndex: 1,
  },
  {
    question:
      "How do you select a single column named 'Age' from a DataFrame 'df'?",
    options: ["df('Age')", "df['Age']", "df.get('Age')", "Both 1 and 2"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of the 'fillna()' method in Pandas?",
    options: [
      "To delete null values",
      "To replace missing values with a specific value",
      "To find null values",
      "To filter data",
    ],
    correctIndex: 1,
  },
  {
    question: "Which method is used to handle duplicate rows in a DataFrame?",
    options: [
      "remove_duplicates()",
      "drop_duplicates()",
      "clean_duplicates()",
      "delete_doubles()",
    ],
    correctIndex: 1,
  },
  {
    question: "In NumPy, what is the 'ndarray'?",
    options: [
      "A nested dictionary",
      "An N-dimensional array object",
      "A type of list",
      "A database connection",
    ],
    correctIndex: 1,
  },
  {
    question: "How do you check for missing values in a Pandas DataFrame?",
    options: ["df.missing()", "df.isnull()", "df.empty()", "df.none()"],
    correctIndex: 1,
  },
  {
    question:
      "Which Pandas method provides a summary of statistics (mean, std, etc.) for numeric columns?",
    options: ["info()", "describe()", "summary()", "stats()"],
    correctIndex: 1,
  },
  {
    question:
      "What is the result of adding two NumPy arrays of the same shape?",
    options: [
      "An error",
      "Element-wise addition",
      "Matrix multiplication",
      "The arrays are concatenated",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which Pandas method is used to combine DataFrames based on a common key?",
    options: ["concat()", "append()", "merge()", "join()"],
    correctIndex: 2,
  },
  {
    question: "How do you change the data type of a Pandas column?",
    options: ["convert_type()", "astype()", "set_dtype()", "change_type()"],
    correctIndex: 1,
  },
  {
    question: "What does the 'iloc' indexer use for selection?",
    options: [
      "Labels",
      "Integer positions",
      "Boolean values",
      "Column names only",
    ],
    correctIndex: 1,
  },
  {
    question: "What does the 'loc' indexer use for selection?",
    options: [
      "Labels",
      "Integer positions",
      "Memory addresses",
      "Random indices",
    ],
    correctIndex: 0,
  },
  {
    question: "Which function is used to create an identity matrix in NumPy?",
    options: ["eye()", "identity_matrix()", "ones()", "zeros()"],
    correctIndex: 0,
  },
  {
    question: "How do you rename columns in Pandas?",
    options: [
      "df.rename(columns={'old': 'new'})",
      "df.columns = 'new'",
      "df.change_name()",
      "df.set_columns()",
    ],
    correctIndex: 0,
  },
  {
    question: "What is the default axis for the 'dropna()' method in Pandas?",
    options: ["axis=1 (columns)", "axis=0 (rows)", "Both", "Neither"],
    correctIndex: 1,
  },
  {
    question: "Which NumPy function calculates the average value of an array?",
    options: ["avg()", "mean()", "median()", "calc_mean()"],
    correctIndex: 1,
  },
  {
    question: "In Pandas, how do you group data by a specific column?",
    options: ["df.group()", "df.aggregate()", "df.groupby()", "df.split()"],
    correctIndex: 2,
  },
  {
    question:
      "Which attribute tells you the number of elements in a NumPy array?",
    options: ["size", "length", "count", "elements"],
    correctIndex: 0,
  },
  {
    question: "How do you sort a DataFrame by a specific column?",
    options: ["df.sort()", "df.arrange()", "df.sort_values()", "df.order_by()"],
    correctIndex: 2,
  },
  {
    question: "What is broadcasting in NumPy?",
    options: [
      "Sending data over a network",
      "Treating arrays with different shapes during arithmetic operations",
      "Converting an array to a list",
      "Printing an array",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which method resets the index of a DataFrame to default integers?",
    options: ["clear_index()", "reset_index()", "new_index()", "reindex()"],
    correctIndex: 1,
  },
  {
    question: "What does 'T' attribute do in NumPy arrays?",
    options: [
      "Calculates total",
      "Transposes the array",
      "Transforms data",
      "Returns type",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which Pandas function is used to pivot data from long to wide format?",
    options: ["pivot()", "melt()", "stack()", "unstack()"],
    correctIndex: 0,
  },
  {
    question:
      "Which Pandas function is used to pivot data from wide to long format?",
    options: ["pivot()", "melt()", "transpose()", "shift()"],
    correctIndex: 1,
  },
  {
    question: "How do you find unique values in a Pandas Series?",
    options: ["unique()", "distinct()", "single()", "get_unique()"],
    correctIndex: 0,
  },
  {
    question: "What does 'value_counts()' do in Pandas?",
    options: [
      "Counts total rows",
      "Counts occurrences of unique values",
      "Counts null values",
      "Sums the numeric values",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which NumPy function is used to join a sequence of arrays along an existing axis?",
    options: ["concatenate()", "join()", "link()", "append()"],
    correctIndex: 0,
  },
  {
    question:
      "How do you filter a DataFrame to show only rows where 'Salary' > 50000?",
    options: [
      "df.filter(Salary > 50000)",
      "df[df['Salary'] > 50000]",
      "df.where(Salary > 50000)",
      "df.select('Salary > 50000')",
    ],
    correctIndex: 1,
  },
  {
    question: "What is the use of 'apply()' in Pandas?",
    options: [
      "To apply CSS styles",
      "To apply a function along an axis of the DataFrame",
      "To save the DataFrame",
      "To merge two DataFrames",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which NumPy function is used to find the index of the maximum value?",
    options: ["max_index()", "argmax()", "find_max()", "index_max()"],
    correctIndex: 1,
  },
  {
    question: "What is the 'lambda' function often used for in Pandas?",
    options: [
      "Complex database queries",
      "Anonymous, one-line functions for data transformation",
      "Data visualization",
      "File management",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which attribute returns the total number of dimensions of a NumPy array?",
    options: ["dim", "ndim", "rank", "shape"],
    correctIndex: 1,
  },
  {
    question: "How do you calculate the correlation between columns in Pandas?",
    options: ["df.corr()", "df.relation()", "df.cov()", "df.stats()"],
    correctIndex: 0,
  },
  {
    question: "What does 'inplace=True' do in many Pandas methods?",
    options: [
      "Returns a new copy",
      "Modifies the original DataFrame directly",
      "Saves data to a file",
      "Ignores errors",
    ],
    correctIndex: 1,
  },
  {
    question: "Which NumPy function is used for matrix multiplication?",
    options: ["multiply()", "dot()", "matmul()", "Both 1 and 2"],
    correctIndex: 3,
  },
  {
    question: "How do you find the data types of all columns in a DataFrame?",
    options: ["df.types", "df.dtypes", "df.info()", "Both 1 and 2"],
    correctIndex: 3,
  },
  {
    question: "What is the purpose of 'copy()' in Pandas?",
    options: [
      "To create a deep copy of the object",
      "To print the object",
      "To duplicate the rows",
      "To backup to cloud",
    ],
    correctIndex: 0,
  },
  {
    question: "Which method calculates the cumulative sum in Pandas?",
    options: ["sum()", "cumsum()", "total()", "add_all()"],
    correctIndex: 1,
  },
  {
    question: "In NumPy, what does 'reshape()' do?",
    options: [
      "Changes data values",
      "Changes the dimensions of an array without changing data",
      "Deletes the array",
      "Sorts the array",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which function is used to create an array of all zeros in NumPy?",
    options: ["zero_array()", "zeros()", "empty()", "nulls()"],
    correctIndex: 1,
  },
  {
    question:
      "Which Pandas method allows you to combine two DataFrames along rows or columns (stacking)?",
    options: ["merge()", "concat()", "join()", "link()"],
    correctIndex: 1,
  },
  {
    question: "How do you get the column names of a DataFrame?",
    options: ["df.names", "df.columns", "df.headers", "df.keys()"],
    correctIndex: 1,
  },
  {
    question: "What is the default numeric type for NumPy on most systems?",
    options: ["int32", "float64", "int64", "float32"],
    correctIndex: 1,
  },
  {
    question:
      "Which attribute returns the number of elements in a Pandas Series?",
    options: ["size", "count()", "length", "Both 0 and 1"],
    correctIndex: 3,
  },
  {
    question: "What is a 'Vectorized' operation in Python DS?",
    options: [
      "Drawing vectors",
      "Operations performed on whole arrays at once instead of loops",
      "Scaling data",
      "Converting to list",
    ],
    correctIndex: 1,
  },
];

export const loadPythonDSQuiz = async (): Promise<QuizModule> => ({
  meta: pythonDSQuizMeta,
  questions: pythonDSQuizQuestions,
});
