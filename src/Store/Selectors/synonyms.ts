import { useAppSelector } from 'Hooks/useAppSelector';
import { SynonymsState } from 'types';

export default function useSynonymsSelector(): SynonymsState {
  return useAppSelector((state) => state.synonyms);
}
