import { initialValueAttr, dataModel } from '../../utils/modelUtil';

export interface IValues {
  username: dataModel;
  password: dataModel;
}

export const initialValues: IValues = {
  username: initialValueAttr('username'),
  password: initialValueAttr('password'),
};
