export const defaultErrorHandler = (err, req, res, next) => {
  const { code, message, data } = err;
  res.status(code || 500).json({
    message: message || "Internal server error",
    result: {},
    errors: data || [],
  });
};

export const cors = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
};
export default cors;

export const restApiValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error(`Bad Request`);
    error.data = errors.array().map((err) => {
      return {
        message: err.msg || "",
        param: err.param || "",
        location: err.location || "",
        value: err.value || "",
      };
    });
    error.code = 400;
    throw error;
  }
  return true;
};

export const response = (res, result) => {
  const response = {
    message: "Success",
    result: result,
    errors: [],
  };
  res.status(200).json(response);
};
