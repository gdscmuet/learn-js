import { Router } from "express";
import { response, restApiValidation } from "../utils/apiHelpers";

export const userRouter = Router();
export default userRouter;

userRouter.get("/", [], async (req, res, next) => {
  restApiValidation(req, res, next);
  const page = parseInt(req.params.page) || 1;
  const perPage = parseInt(req.params.perPage) || 10;
  const result = await userService.list(page, perPage);
  response(res, result);
});
