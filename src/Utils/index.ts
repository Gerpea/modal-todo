import { nanoid } from 'nanoid';
import { Id } from 'types';

export function generateId(): Id {
  return nanoid();
}
