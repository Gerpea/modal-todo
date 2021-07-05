import { nanoid } from 'nanoid';
import { Id } from 'Types';

export function generateId(): Id {
  return nanoid();
}
