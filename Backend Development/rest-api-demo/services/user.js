class UserService {
  transformUser(user) {
    return {
      email: user.email,
      name: user.name,
      age: user.age,
    };
  }

  async list() {
    // const user = await this.create({ ...data, password: hashedPassword });
    return this.transformUser(user);
  }
}

export const userService = new UserService(userDAO);
export default userService;
