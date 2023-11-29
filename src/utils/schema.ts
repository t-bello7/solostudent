import { BSON, Object, ObjectSchema } from 'realm';

export class Student extends Object {
  _id!: BSON.ObjectId;

  firstName!: string;

  lastName!: string;

  profilePic!: string;

  bioPic!: string;

  createdAt!: Date;

  userId!: string;

  static schema: ObjectSchema = {
    name: 'Student',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      firstName: 'string',
      lastName: 'string',
      profilePic: 'string',
      bioPic: 'string',
      createdAt: { type: 'date', default: () => new Date() },
      userId: 'string',
    },
  };
}
