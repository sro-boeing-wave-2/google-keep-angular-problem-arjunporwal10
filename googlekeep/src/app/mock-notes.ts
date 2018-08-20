import{Note} from './notes';

export const NotesArray : Note[] = [
  { id: 11,
    Text: 'Windstorm',
    Title:'Black',
    IsPinned:true,
    Labels:[{LabelName:'label1',id:1},{LabelName:'label2',id:2}],
    CheckLists:[{CheckListData:'checklist1',id:1,IsChecked:true},{CheckListData:'checklist2',id:2,IsChecked:true}] },
  { id: 12,
    Text: 'ThunderBolt',
    Title:'Rock',
    IsPinned:false,
    Labels:[{LabelName:'label1',id:1},{LabelName:'label2',id:2}],
    CheckLists:[{CheckListData:'checklist1',id:1,IsChecked:true},{CheckListData:'checklist2',id:2,IsChecked:true}] },
  { id: 13,
    Text: 'RockOn',
    Title:'Gold',
    IsPinned:true,
    Labels:[{LabelName:'label1',id:1},{LabelName:'label2',id:2}],
    CheckLists:[{CheckListData:'checklist1',id:1,IsChecked:true},{CheckListData:'checklist2',id:2,IsChecked:true}] },
  { id: 14,
    Text: 'BlackCurrent',
    Title:'Icecream',
    IsPinned:false,
    Labels:[{LabelName:'label1',id:1},{LabelName:'label2',id:2}],
    CheckLists:[{CheckListData:'checklist1',id:1,IsChecked:true},{CheckListData:'checklist2',id:2,IsChecked:true}] }
];
