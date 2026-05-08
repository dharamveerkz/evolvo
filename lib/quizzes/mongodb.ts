import type { QuizQuestion, QuizMeta, QuizModule } from "./types";

export const mongodbQuizMeta: QuizMeta = {
  id: "mongodb-basics",
  category: "databases",
  subcategory: "mongodb",
  title: "MongoDB Basics",
  description:
    "Test your knowledge of MongoDB fundamentals, collections, documents, queries, and NoSQL concepts.",
  icon: "🍃",
  level: "Beginner",
  questionCount: 50,
  color: "#47a248",
  featured: true,
  rating: 5,
  estimatedTime: "25 min",
  passThreshold: 25,
  showCertificate: true,
};

export const mongodbQuizQuestions: QuizQuestion[] = [
  {
    question: "MongoDB is a type of which database?",
    options: [
      "Relational Database",
      "NoSQL Database",
      "Graph Database",
      "Hierarchical Database",
    ],
    correctIndex: 1,
  },
  {
    question: "MongoDB stores data in which format?",
    options: ["Tables", "Rows", "Documents", "Graphs"],
    correctIndex: 2,
  },
  {
    question: "Which format is similar to MongoDB documents?",
    options: ["XML", "CSV", "JSON", "YAML"],
    correctIndex: 2,
  },
  {
    question: "What is a collection in MongoDB?",
    options: ["A row", "A database", "A group of documents", "A query"],
    correctIndex: 2,
  },
  {
    question: "Which command creates or switches databases?",
    options: ["create db", "use", "switch", "database"],
    correctIndex: 1,
  },
  {
    question: "Which command inserts a single document?",
    options: ["insertOne()", "addOne()", "createOne()", "pushOne()"],
    correctIndex: 0,
  },
  {
    question: "Which command inserts multiple documents?",
    options: ["insertMany()", "addMany()", "pushMany()", "bulkInsert()"],
    correctIndex: 0,
  },
  {
    question: "Which method retrieves documents?",
    options: ["get()", "find()", "select()", "search()"],
    correctIndex: 1,
  },
  {
    question: "Which method retrieves only one document?",
    options: ["findOne()", "single()", "getOne()", "first()"],
    correctIndex: 0,
  },
  {
    question: "Which method updates a single document?",
    options: ["updateOne()", "modifyOne()", "changeOne()", "replaceOne()"],
    correctIndex: 0,
  },
  {
    question: "Which method deletes a single document?",
    options: ["removeOne()", "deleteOne()", "dropOne()", "eraseOne()"],
    correctIndex: 1,
  },
  {
    question: "Which method deletes multiple documents?",
    options: ["deleteMany()", "removeMany()", "eraseMany()", "dropMany()"],
    correctIndex: 0,
  },
  {
    question: "Which field uniquely identifies documents?",
    options: ["id", "_id", "uid", "primary"],
    correctIndex: 1,
  },
  {
    question: "Which operator is used for equality matching?",
    options: ["$eq", "$equal", "$same", "$match"],
    correctIndex: 0,
  },
  {
    question: "Which operator checks greater than?",
    options: ["$gt", "$greater", "$more", "$high"],
    correctIndex: 0,
  },
  {
    question: "Which operator checks less than?",
    options: ["$lt", "$less", "$small", "$min"],
    correctIndex: 0,
  },
  {
    question: "Which operator matches array values?",
    options: ["$in", "$array", "$contains", "$all"],
    correctIndex: 0,
  },
  {
    question: "Which method removes a collection completely?",
    options: ["delete()", "remove()", "drop()", "clear()"],
    correctIndex: 2,
  },
  {
    question: "Which method displays all databases?",
    options: ["show dbs", "list dbs", "display dbs", "db.show()"],
    correctIndex: 0,
  },
  {
    question: "Which method displays collections?",
    options: [
      "show collections",
      "list collections",
      "display collections",
      "collections()",
    ],
    correctIndex: 0,
  },
  {
    question: "Which MongoDB feature improves query performance?",
    options: ["Views", "Indexes", "Schemas", "Clusters"],
    correctIndex: 1,
  },
  {
    question: "Which command creates indexes?",
    options: ["createIndex()", "makeIndex()", "addIndex()", "newIndex()"],
    correctIndex: 0,
  },
  {
    question: "Which operator sorts results ascending?",
    options: ["1", "0", "-1", "true"],
    correctIndex: 0,
  },
  {
    question: "Which operator sorts results descending?",
    options: ["1", "0", "-1", "false"],
    correctIndex: 2,
  },
  {
    question: "Which method limits query results?",
    options: ["max()", "limit()", "slice()", "top()"],
    correctIndex: 1,
  },
  {
    question: "Which method skips query results?",
    options: ["pass()", "skip()", "ignore()", "offset()"],
    correctIndex: 1,
  },
  {
    question: "Which method counts documents?",
    options: ["count()", "length()", "size()", "total()"],
    correctIndex: 0,
  },
  {
    question: "Which framework is used for data aggregation?",
    options: ["Pipeline", "Aggregation Framework", "Reducer", "MapQuery"],
    correctIndex: 1,
  },
  {
    question: "Which stage filters documents in aggregation?",
    options: ["$group", "$sort", "$match", "$limit"],
    correctIndex: 2,
  },
  {
    question: "Which stage groups documents in aggregation?",
    options: ["$collect", "$group", "$merge", "$cluster"],
    correctIndex: 1,
  },
  {
    question: "Which stage sorts documents in aggregation?",
    options: ["$sort", "$order", "$arrange", "$rank"],
    correctIndex: 0,
  },
  {
    question: "Which command exports database data?",
    options: ["mongoexport", "mongodump", "mongoimport", "mongosave"],
    correctIndex: 0,
  },
  {
    question: "Which command imports database data?",
    options: ["mongoexport", "mongodump", "mongoimport", "mongoload"],
    correctIndex: 2,
  },
  {
    question: "Which command creates a database backup?",
    options: ["mongoexport", "mongodump", "mongorestore", "mongobackup"],
    correctIndex: 1,
  },
  {
    question: "Which command restores a MongoDB backup?",
    options: ["mongorestore", "mongoload", "mongorecover", "mongoimport"],
    correctIndex: 0,
  },
  {
    question: "Which MongoDB model allows flexible schemas?",
    options: [
      "Relational Model",
      "Document Model",
      "Hierarchical Model",
      "Graph Model",
    ],
    correctIndex: 1,
  },
  {
    question: "Which shell is used to interact with MongoDB?",
    options: ["mysql", "mongo", "psql", "mongocli"],
    correctIndex: 1,
  },
  {
    question: "Which MongoDB service is cloud-based?",
    options: ["Mongo Cloud", "MongoDB Atlas", "MongoServer", "MongoHost"],
    correctIndex: 1,
  },
  {
    question: "Which method replaces a document entirely?",
    options: ["replaceOne()", "updateOne()", "changeOne()", "overwriteOne()"],
    correctIndex: 0,
  },
  {
    question: "Which operator updates fields?",
    options: ["$set", "$update", "$modify", "$change"],
    correctIndex: 0,
  },
  {
    question: "Which operator removes fields?",
    options: ["$unset", "$delete", "$remove", "$drop"],
    correctIndex: 0,
  },
  {
    question: "Which operator increments numeric values?",
    options: ["$add", "$inc", "$increase", "$plus"],
    correctIndex: 1,
  },
  {
    question: "Which data type stores arrays?",
    options: ["Array", "List", "Vector", "Tuple"],
    correctIndex: 0,
  },
  {
    question: "Which MongoDB feature distributes data across servers?",
    options: ["Replication", "Sharding", "Indexing", "Aggregation"],
    correctIndex: 1,
  },
  {
    question: "Which MongoDB feature provides high availability?",
    options: ["Indexing", "Replication", "Sorting", "Pipelines"],
    correctIndex: 1,
  },
  {
    question: "Which command starts the MongoDB server?",
    options: ["mongo", "mongod", "mongodb", "mongos"],
    correctIndex: 1,
  },
  {
    question: "Which command connects to a MongoDB instance?",
    options: ["mongod", "mongo", "mongoconnect", "mongodb"],
    correctIndex: 1,
  },
  {
    question: "Which file format is commonly used for MongoDB exports?",
    options: ["CSV", "XML", "JSON", "TXT"],
    correctIndex: 2,
  },
  {
    question: "Which method sorts query results?",
    options: ["order()", "sort()", "arrange()", "rank()"],
    correctIndex: 1,
  },
  {
    question: "Which statement is true about MongoDB?",
    options: [
      "MongoDB uses tables and rows only",
      "MongoDB is a relational database",
      "MongoDB stores data as documents",
      "MongoDB does not support indexing",
    ],
    correctIndex: 2,
  },
];

export const loadMongoDbQuiz = async (): Promise<QuizModule> => ({
  meta: mongodbQuizMeta,
  questions: mongodbQuizQuestions,
});
