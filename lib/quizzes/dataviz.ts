import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const dataVizQuizMeta: QuizMeta = {
  id: "data-viz",
  category: "datascience",
  subcategory: "visualization",
  title: "Data Visualization",
  description:
    "Master Matplotlib, Seaborn, and the art of storytelling with data",
  icon: "📊",
  level: "Beginner",
  questionCount: 50,
  color: "#31a354",
  featured: true,
  rating: 4,
  passThreshold: 35,
  showCertificate: true,
  estimatedTime: "20 min",
};

export const dataVizQuizQuestions: QuizQuestion[] = [
  {
    question: "Which library is the foundation for most plotting in Python?",
    options: ["Pandas", "Matplotlib", "Seaborn", "Plotly"],
    correctIndex: 1,
  },
  {
    question:
      "Which library is built on top of Matplotlib and provides a high-level interface for statistical graphics?",
    options: ["NumPy", "Seaborn", "SciPy", "Bokeh"],
    correctIndex: 1,
  },
  {
    question:
      "Which plot is best for showing the distribution of a single continuous variable?",
    options: ["Bar Chart", "Scatter Plot", "Histogram", "Pie Chart"],
    correctIndex: 2,
  },
  {
    question:
      "Which plot is best for showing the relationship between two continuous variables?",
    options: ["Histogram", "Box Plot", "Scatter Plot", "Line Chart"],
    correctIndex: 2,
  },
  {
    question: "What does a 'Box Plot' primarily visualize?",
    options: [
      "Linear regression",
      "Quartiles and outliers",
      "Time series trends",
      "Categorical counts",
    ],
    correctIndex: 1,
  },
  {
    question: "In Matplotlib, which function is used to add a title to a plot?",
    options: ["plt.header()", "plt.title()", "plt.label()", "plt.name()"],
    correctIndex: 1,
  },
  {
    question:
      "Which Seaborn function creates a grid of scatter plots for all numeric variables in a DataFrame?",
    options: ["jointplot()", "pairplot()", "heatmap()", "catplot()"],
    correctIndex: 1,
  },
  {
    question: "What is a 'Heatmap' used for?",
    options: [
      "Showing temperature",
      "Visualizing matrix-like data or correlation matrices",
      "3D modeling",
      "Plotting geographical paths",
    ],
    correctIndex: 1,
  },
  {
    question: "Which chart type is best for showing parts of a whole?",
    options: ["Line Chart", "Pie Chart", "Scatter Plot", "Histogram"],
    correctIndex: 1,
  },
  {
    question: "What does 'hue' represent in Seaborn functions?",
    options: [
      "The brightness of the plot",
      "A semantic mapping that produces elements with different colors",
      "The size of the markers",
      "The font style",
    ],
    correctIndex: 1,
  },
  {
    question: "Which plot is ideal for visualizing trends over time?",
    options: ["Bar Chart", "Line Chart", "Box Plot", "Violin Plot"],
    correctIndex: 1,
  },
  {
    question: "What is the purpose of 'plt.legend()' in Matplotlib?",
    options: [
      "To save the plot",
      "To describe the elements in the plot using labels",
      "To change the colors",
      "To add grid lines",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which plot type combines a box plot with a kernel density estimate?",
    options: ["Strip Plot", "Violin Plot", "Swarm Plot", "Bar Plot"],
    correctIndex: 1,
  },
  {
    question: "How do you save a Matplotlib figure to a file?",
    options: ["plt.export()", "plt.savefig()", "plt.download()", "plt.write()"],
    correctIndex: 1,
  },
  {
    question: "What is the primary advantage of Plotly over Matplotlib?",
    options: [
      "It is older",
      "It creates interactive plots",
      "It is faster for small arrays",
      "It only works in the terminal",
    ],
    correctIndex: 1,
  },
  {
    question: "In visualization, what is an 'Outlier'?",
    options: [
      "A point inside the box",
      "A data point that sits significantly outside the general range of the data",
      "The mean of the data",
      "A missing value",
    ],
    correctIndex: 1,
  },
  {
    question: "What does the 'bins' parameter in a histogram control?",
    options: [
      "The color of the bars",
      "The number of intervals the data is divided into",
      "The height of the y-axis",
      "The legend placement",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which Seaborn function is used to plot the correlation between two variables with a regression line?",
    options: ["regplot()", "lineplot()", "corrplot()", "scatter()"],
    correctIndex: 0,
  },
  {
    question: "What is the purpose of 'plt.xlabel()'?",
    options: [
      "To name the x-axis",
      "To name the y-axis",
      "To add data to x",
      "To clear the x-axis",
    ],
    correctIndex: 0,
  },
  {
    question: "Which plot is used to see the frequency of categorical data?",
    options: ["Scatter Plot", "Count Plot", "Histogram", "Heatmap"],
    correctIndex: 1,
  },
  {
    question: "What is 'Overplotting'?",
    options: [
      "Drawing too many plots",
      "When data points overlap too much, making it hard to see the distribution",
      "Using too many colors",
      "Scaling the axis too high",
    ],
    correctIndex: 1,
  },
  {
    question: "Which Matplotlib command is used to display the plot?",
    options: ["plt.display()", "plt.show()", "plt.render()", "plt.view()"],
    correctIndex: 1,
  },
  {
    question: "What does 'alpha' control in plotting functions?",
    options: [
      "The font size",
      "The transparency of the elements",
      "The sorting order",
      "The plot thickness",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which plot is best for comparing the means of different categories?",
    options: ["Bar Chart", "Scatter Plot", "Line Chart", "Area Chart"],
    correctIndex: 0,
  },
  {
    question: "What is a 'FacetGrid' in Seaborn?",
    options: [
      "A way to color the background",
      "A multi-plot grid for plotting conditional relationships",
      "A type of 3D plot",
      "A data cleaning tool",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which chart is often criticized for being difficult to read accurately compared to bar charts?",
    options: ["Line Chart", "Pie Chart", "Histogram", "Box Plot"],
    correctIndex: 1,
  },
  {
    question: "What is the 'Anscombe's Quartet' used to demonstrate?",
    options: [
      "Four types of neural networks",
      "The importance of visualizing data before analyzing it",
      "How to use Python",
      "A type of matrix",
    ],
    correctIndex: 1,
  },
  {
    question: "Which plot is used to represent the cumulative frequency?",
    options: [
      "Pie Chart",
      "Ogive (Cumulative Frequency Graph)",
      "Scatter Plot",
      "Box Plot",
    ],
    correctIndex: 1,
  },
  {
    question: "What does 'palette' change in Seaborn?",
    options: ["The font", "The color scheme", "The layout", "The data source"],
    correctIndex: 1,
  },
  {
    question: "How do you change the figure size in Matplotlib?",
    options: [
      "plt.size()",
      "plt.figure(figsize=(w,h))",
      "plt.resize()",
      "plt.dimension()",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which plot is best to show the variation of a variable over a continuous interval?",
    options: ["Area Chart", "Bar Chart", "Pie Chart", "Table"],
    correctIndex: 0,
  },
  {
    question: "What is the 'Data-Ink Ratio' principle?",
    options: [
      "Using as much ink as possible",
      "Removing non-essential ink to make the data stand out",
      "Printing in high quality",
      "Using only black ink",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which function in Seaborn is used for drawing a correlation matrix?",
    options: ["heatmap()", "matrixplot()", "grid()", "table()"],
    correctIndex: 0,
  },
  {
    question: "What is a 'Bubble Chart'?",
    options: [
      "A chart with circles",
      "A scatter plot where a third dimension is represented by the size of the dots",
      "A cleaning tool",
      "A map of bubbles",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which library is known for its grammar of graphics approach (like ggplot2)?",
    options: ["Matplotlib", "Seaborn", "Plotnine", "NumPy"],
    correctIndex: 2,
  },
  {
    question: "What is 'Jittering' in scatter plots?",
    options: [
      "Removing outliers",
      "Adding small random noise to data to avoid overlap",
      "Smoothing the line",
      "Rotating the plot",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which plot shows the density of observations along a single axis?",
    options: ["Rug Plot", "Line Plot", "Bar Plot", "Point Plot"],
    correctIndex: 0,
  },
  {
    question: "What is a 'Dendrogram' used for?",
    options: [
      "Linear regression",
      "Visualizing hierarchical clustering",
      "Time series",
      "Pie charts",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which tool is commonly used for creating business dashboards without much coding?",
    options: ["Matplotlib", "Tableau", "Pandas", "PyCharm"],
    correctIndex: 1,
  },
  {
    question: "What does 'plt.subplot()' do?",
    options: [
      "Deletes a plot",
      "Creates multiple plots in one figure",
      "Adds a subtitle",
      "Zooms in",
    ],
    correctIndex: 1,
  },
  {
    question: "In visualization, what is 'Scaling'?",
    options: [
      "Deleting data",
      "Adjusting the range of the axes",
      "Changing colors",
      "Converting to string",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which plot is used to display the three-point summary and the range?",
    options: ["Histogram", "Box Plot", "Scatter Plot", "Pie Chart"],
    correctIndex: 1,
  },
  {
    question: "What is a 'Treemap' used for?",
    options: [
      "Mapping trees in a forest",
      "Displaying hierarchical data as a set of nested rectangles",
      "Plotting routes",
      "3D gaming",
    ],
    correctIndex: 1,
  },
  {
    question: "Which Seaborn theme is the default?",
    options: ["darkgrid", "whitegrid", "dark", "ticks"],
    correctIndex: 0,
  },
  {
    question: "What is the purpose of 'plt.tight_layout()'?",
    options: [
      "To make the code shorter",
      "To automatically adjust subplot parameters to give specified padding",
      "To save space on disk",
      "To color the plot",
    ],
    correctIndex: 1,
  },
  {
    question: "Which chart is best for showing a project schedule?",
    options: ["Gantt Chart", "Pie Chart", "Line Chart", "Area Chart"],
    correctIndex: 0,
  },
  {
    question: "What is a 'Chloropleth Map'?",
    options: [
      "A map of colors",
      "A thematic map in which areas are shaded in proportion to a statistical variable",
      "A map of mountains",
      "A map with bubbles",
    ],
    correctIndex: 1,
  },
  {
    question: "Which function allows you to use LaTeX in Matplotlib labels?",
    options: [
      "Using r'$formula$'",
      "plt.latex()",
      "plt.math()",
      "Cannot use LaTeX",
    ],
    correctIndex: 0,
  },
  {
    question: "What is 'EDA' primarily concerned with?",
    options: [
      "Final reporting",
      "Visual exploration and understanding of the data before modeling",
      "Training neural networks",
      "Writing documentation",
    ],
    correctIndex: 1,
  },
  {
    question:
      "Which library is standard for creating interactive web-based maps in Python?",
    options: ["Matplotlib", "Folium", "Pandas", "Scikit-Learn"],
    correctIndex: 1,
  },
];

export const loadDataVizQuiz = async (): Promise<QuizModule> => ({
  meta: dataVizQuizMeta,
  questions: dataVizQuizQuestions,
});
