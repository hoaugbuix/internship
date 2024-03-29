import * as mongoose from 'mongoose';

export const LoggerSchema = new mongoose.Schema({
  userId: { type: String, ref: 'user' },
  api: [{
    url: { type: String },
    method: { type: String },
  }],
  from: { type: String },
  at: { type: Date },
});