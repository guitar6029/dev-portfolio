import { MongoClient, Db } from "mongodb";

// Ensure the MongoDB URI is provided
if (!process.env.MONGO_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in your .env file"
  );
}

// this is the new connection URI for the mongodb stored in the env variable
const client = new MongoClient(process.env.MONGO_URI as string);

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// this will connect to db
export async function connectToDatabase() {
  //if already cached, return the cached db
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  //if not cached, connect to db
  await client.connect();

  // get the db
  const db = client.db("portfolio");
  // Check if the collection exists
  const collections = await db.listCollections().toArray();
  const collectionNames = collections.map((col) => col.name);

  if (!collectionNames.includes("github-projects")) {
    console.warn("Collection 'github-projects' not found in database.");
  } else {
    console.log("Collection 'github-projects' found.");
  }

  //cache the client and db
  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
