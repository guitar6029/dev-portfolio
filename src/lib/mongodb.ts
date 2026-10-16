import { MongoClient, Db } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

// this will connect to db
export async function connectToDatabase() {
  // Ensure the MongoDB URI is provided when the database is used
  if (!process.env.MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable in your .env file"
    );
  }

  //if already cached, return the cached db
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  // this is the new connection URI for the mongodb stored in the env variable
  const client = new MongoClient(process.env.MONGODB_URI);

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
