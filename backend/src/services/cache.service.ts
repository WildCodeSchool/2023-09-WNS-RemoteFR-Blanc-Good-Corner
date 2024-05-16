import { redisClient } from "../config/server";


export async function getValue(key: string): Promise<any> {
  let value =  await redisClient.get(key);
  if (value) {
    return JSON.parse(value, (key, value) => {
      if (key === 'createdAt' || key === 'updatedAt') {
        return new Date(value);
      }

      return value;
    });
  }
}

export async function setValue(key: string, value: any): Promise<any> {
  return await redisClient.set(key, JSON.stringify(value));
}

export function invalidateValue(key: string): Promise<any> {
  return redisClient.del(key);
}