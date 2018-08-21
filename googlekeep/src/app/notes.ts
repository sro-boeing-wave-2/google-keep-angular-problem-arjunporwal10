import{Label} from './labels';
import{CheckList} from './checklist';

export class Note{
  id: string;
  notesId: number;
  Text: string;
  Title: string;
  IsPinned: boolean;
  Labels: Label[];
  CheckLists: CheckList[];
}
