// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ZORI, ZHVI } = initSchema(schema);

export {
  ZORI,
  ZHVI
};