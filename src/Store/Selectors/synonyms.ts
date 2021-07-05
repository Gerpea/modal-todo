import { SynonymsState } from 'Types';
import { useAppSelector } from 'Hooks/useAppSelector';

export default function useSynonymsSelector(): SynonymsState {
  return useAppSelector((state) => state.synonyms);
}
