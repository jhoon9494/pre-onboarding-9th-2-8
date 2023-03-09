import { ICart } from './product';
import { Dispatch, SetStateAction } from 'react';

export interface ISpaceTagProps {
  spaceKey: string;
  spaceHashMap: { [key: string]: boolean };
  onToggleSpace: (key: string) => void;
}

export interface ICartProps extends ICart {
  setCheckList: Dispatch<SetStateAction<ICart[]>>;
  checkList: ICart[];
}
