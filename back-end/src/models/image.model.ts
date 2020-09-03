import { Document } from 'mongoose';

export interface ImageModel extends Document {
  imageId: { type: string };
  imageName: { type: string };
  size: { type: number };
  type: { type: string };
  createdAt: { type: number };
  updatedAt: { type: number };
}
