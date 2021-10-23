import { UserModel } from "../models/user";

class UserService {
  transformUser(user) {
    return {
      email: user.email,
      name: user.name,
      age: user.age,
    };
  }

  async list(page, perPage) {
    let skip = (page - 1) * perPage;
    skip = page > 1 ? skip - 1 : skip;
    const limit = page > 1 ? perPage + 2 : perPage + 1;
    const user = await UserModel.find({}).skip(skip).limit(limit).sort(sort);
    return this.transformUser(user);
  }
}

export const userService = new UserService(userDAO);
export default userService;
