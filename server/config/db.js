import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

let mongoServer;

export const connectDatabase = async (uri) => {
  mongoose.set('strictQuery', true);

  if (uri) {
    await mongoose.connect(uri);
    return;
  }

  mongoServer = await MongoMemoryServer.create();
  const memoryUri = mongoServer.getUri();
  await mongoose.connect(memoryUri);
};

export const stopDatabase = async () => {
  await mongoose.disconnect();
  if (mongoServer) await mongoServer.stop();
};
