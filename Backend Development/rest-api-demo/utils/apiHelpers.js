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
