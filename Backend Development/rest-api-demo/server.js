import { app } from "./app"; // import app

// run app by starting to listen
const server = app.listen(app.get("port"), () => {
  console.log(
    `App is running at http://localhost:${app.get("port")} in ${app.get(
      "env"
    )} mode`
  );
  console.log("  Press CTRL-C to stop\n");
});
