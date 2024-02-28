export interface ITable {
  title: string;
  list: IList[];
  onClick?: (value: IList) => void;
}

export interface IList {
  type: string;
  name: string;
};

type IUserGenderType = "male" | "female";
interface IUserAddressInterface {
  name: string;
  postalCode: string;
}
interface IUserCompanyInterface {
  address: IUserAddressInterface;
  department: string;
}
export default interface IUserInterface {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  gender: IUserGenderType;
  age: number;
  hair: {
    color: string;
    type: string;
  }
  address: IUserAddressInterface;
  company: IUserCompanyInterface;
}

export interface IUserGroupInterface {
  [key: string]: IUserGroupObjectInterface;
}

export interface IUserGroupObjectInterface {
  male: number;
  female: number;
  ageRange: string;
  hair: {
    Black: number;
    Blond: number;
    Chestnut: number;
    Brown: number;
  };
  addressUser: {
    name: string;
    postalCode: string;
  };
  department?: string;
}