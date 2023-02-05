import { IUserLogin, IUserRequest } from "../../interfaces/users";
import { IContactRequest } from "../../interfaces/contact";

export const mockedUser: IUserRequest = {
  name: "Joana",
  email: "joana@mail.com",
  isAdm: false,
  password: "123456",
};

export const mockedAdmin: IUserRequest = {
  name: "Felipe",
  email: "felipe@mail.com",
  isAdm: true,
  password: "123456",
};

export const mockedUserLogin: IUserLogin = {
  email: "joana@mail.com",
  password: "123456",
};

export const mockedAdminLogin: IUserLogin = {
  email: "felipe@mail.com",
  password: "123456",
};

export const mockedContact: IContactRequest = {
  name: "2022/08/12",
  cellphone: "10:30",
  email: "",
  userid: "",
};
