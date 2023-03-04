import { MongoClient } from "mongodb";

const MONGODB_URI =
  "mongodb+srv://evanemenegger:UXae5uEMtelJoptR@cluster0.d1andp0.mongodb.net/nba_stats?retryWrites=true&w=majority";
const MONGODB_DB = "nba_stats";

async function handler(req, res) {
  console.log("reached handler!");
  if (req.method === "GET") {
    console.log("in get method <--------------------------------------");
    const client = await MongoClient.connect(MONGODB_URI);
    const db = client.db();
    const nbaStatsCollections = db.collection("nba_player_bio_stats");

    const result = await nbaStatsCollections.find().toArray();

    // console.log('get result', result);

    client.close();

    res.status(201).json(result);
  }

}

export default handler;

