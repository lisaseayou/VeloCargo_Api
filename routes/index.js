const usersRouter = require("./users");
const articlesRouter = require("./articles");
const adsRouter = require("./ads");
const cargoBikesRouter = require("./cargoBikes");

module.exports = (app) => {
  app.use("/users", usersRouter);
  app.use("/articles", articlesRouter);
  app.use("/ads", adsRouter);
  app.use("/cargobikes", cargoBikesRouter);
};
