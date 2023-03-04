import mongoose from 'mongoose';
import { MongoClient } from 'mongodb'
import { connect } from 'http2';

const MONGODB_URL = process.env.MONGODB_URI

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  }
}

async function dbConnect() {
  if(cached.conn) {
    return cached.conn
  }
  if (!cached.conn) {
    const opts = {
      buffeCommands: false,
    }
    cached.promise = mongoose.connect(MONGODB_URL, opts).then(mongoose => mongoose)
  }
  connect.conn = await cached.promise
  return cached.conn
}

export default dbConnect
