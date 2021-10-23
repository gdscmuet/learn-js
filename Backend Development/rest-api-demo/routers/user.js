import { Router } from "express";
import { response, restApiValidation } from "../utils/apiHelpers";

export const userRouter = Router();
export default userRouter;

userRouter.get("/", [], async (req, res, next) => {
  restApiValidation(req, res, next);
  const result = await userService.list();
  response(res, result);
});
