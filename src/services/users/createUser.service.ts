import { User } from "../../entities/user.entities";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/users";
import { hash } from "bcrypt";

const createUserService = async ({
  name,
  email,
  password,
}: IUserRequest): Promise<User> => {
  const userRepositori = AppDataSource.getRepository(User);

  if (!password) {
    throw new Error("password is missing");
  }

  const hashedPassword = await hash(password, 8);
  const user = userRepositori.create({
    name,
    email,
    password: hashedPassword,
  });

  await userRepositori.save(user);

  return user;
};

export default createUserService;
