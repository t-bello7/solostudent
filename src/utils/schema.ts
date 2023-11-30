import { BSON, Object, ObjectSchema } from 'realm';

export class Student extends Object {
  _id!: BSON.ObjectId;

  firstName!: string;

  department!: string;

  lastName!: string;

  profilePic!: string;

  bioPic!: string;

  blacklisted!: boolean;

  createdAt!: Date;

  userId!: string;

  static schema: ObjectSchema = {
    name: 'Student',
    primaryKey: '_id',
    properties: {
      _id: { type: 'objectId', default: () => new BSON.ObjectId() },
      firstName: 'string',
      lastName: 'string',
      profilePic: {
        type: 'string',
        default: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
      },
      bioPic: {
        type: 'string',
        default: 'https://xsgames.co/randomusers/avatar.php?g=pixel&key=2',
      },
      blacklisted: { type: 'bool', default: false },
      createdAt: { type: 'date', default: () => new Date() },
      userId: 'string',
      department: 'string',
    },
  };
}
