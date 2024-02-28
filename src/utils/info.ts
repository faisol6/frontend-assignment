import IUserInterface, {
  IUserGroupInterface,
  IUserGroupObjectInterface,
} from "../interface/info";

export default class UserHelper {

  static mapUserToUserGroup = (
    users?: IUserInterface[]
  ): IUserGroupInterface | undefined => {
    if (!users) return;
    let initial: IUserGroupInterface = {};
    
    for (let user of users) {
      const department = user?.company?.department;
      const current = initial[department];
      if (user?.company?.department === "Sales") {
        console?.log(user);
      }
      if (current) {
        const next = this?.mergeUserWithUserGroup(current, user);

        initial[department] = next;
        continue;
      }
      initial[department] = this?.getGroupUser(user);
    }
    return initial;
  };

  static mergeUserWithUserGroup = (
    old: IUserGroupObjectInterface,
    user: IUserInterface
  ): IUserGroupObjectInterface => {
    return {
      male: +(user?.gender === "male") + old?.male,
      female: +(user?.gender === "female") + old?.female,
      ageRange: this?.getAgeRange(old?.ageRange, user?.age),
      hair: {
        Black: +(user?.hair?.color === "Black") + old?.hair?.Black,
        Blond: +(user?.hair?.color === "Blond") + old?.hair?.Blond,
        Chestnut: +(user?.hair?.color === "Chestnut") + old?.hair?.Chestnut,
        Brown: +(user?.hair?.color === "Brown") + old?.hair?.Brown,
      },
      addressUser: {
        ...old?.addressUser,
        name:`${user?.firstName} ${user?.lastName}`,
        postalCode: user?.address?.postalCode,
      },
    };
  };

  static getAgeRange = (currentRange: string, age: number): string => {
    let [min, max] = currentRange.split("-");
    const parseMin = Number(min);
    const parseMax = Number(max);

    if (age < parseMin) {
      return [age, max].join("-");
    }
    if (age > parseMax) {
      return [min, age].join("-");
    }
    return currentRange;
  };

  static getGroupUser = (user: IUserInterface): IUserGroupObjectInterface => {
    return {
      male: +(user?.gender === "male"),
      female: +(user?.gender === "female"),
      ageRange: `${user?.age}-${user?.age}`,
      hair: {
        Black: +(user?.hair?.color === "Black"),
        Blond: +(user?.hair?.color === "Blond"),
        Chestnut: +(user?.hair?.color === "Chestnut"),
        Brown: +(user?.hair?.color === "Brown"),
      },
      addressUser: {
        name:`${user?.firstName} ${user?.lastName}`,
        postalCode: user?.address?.postalCode,
      },
    };
  };
}
