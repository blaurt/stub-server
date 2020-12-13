import "reflect-metadata";

import {
  controller,
  httpGet,
  InversifyExpressServer
} from "inversify-express-utils";

import { Container } from "inversify";

import "./controllers";

// import * as bodyParser from "body-parser";
// import * as Debug from "debug";
// import * as express from "express";
// import * as createError from "http-errors";
// import * as logger from "morgan";
// import * as path from "path";
// import { config } from "./config";
// import { server } from "./server";

// const debug = Debug("app:server");

// server
//   .setConfig(_app => {
//     _app.use(logger("dev"));
//     _app.set("port", config.PORT);
//     // this.app.set("env", "development");
//     _app.use(bodyParser.json());
//     _app.use(bodyParser.urlencoded({ extended: true }));
//     _app.use(
//       express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
//     );
//   })
//   .setErrorConfig(_app => {
//     // catch 404 and forward to error handler
//     _app.use(
//       (
//         req: express.Request,
//         res: express.Response,
//         next: express.NextFunction
//       ) => {
//         next(createError(404));
//       }
//     );

//     // error handlers
//     // development error handler
//     // will print stacktrace
//     if (_app.get("env") === "development") {
//       _app.use(
//         (
//           err: createError.HttpError,
//           req: express.Request,
//           res: express.Response,
//           next: express.NextFunction
//         ) => {
//           res.status(err.status || 500);
//           res.json({
//             error: err,
//             message: err.message
//           });
//         }
//       );
//     }

//     // production error handler
//     // no stacktraces leaked to user
//     _app.use(
//       (
//         err: createError.HttpError,
//         req: express.Request,
//         res: express.Response,
//         next: express.NextFunction
//       ) => {
//         res.status(err.status || 500);
//         res.json({
//           error: {},
//           message: err.message
//         });
//       }
//     );
//   });

// const app = server.build();
// app.listen(app.get("port"), () => {
//   debug(
//     `App is running at http://localhost:${app.get("port")} in ${app.get(
//       "env"
//     )} mode`
//   );
//   debug("Press CTRL-C to stop");
// });

// export { app };
// import * as bodyParser from "body-parser";

// import {
//   interfaces,
//   InversifyExpressServer,
//   TYPE
// } from "inversify-express-utils";

// // declare metadata by @controller annotation
// import "./controllers/mock-engine.controller";

// set up bindings
// container.bind<FooService>('FooService').to(FooService);

// create server
// let server = new InversifyExpressServer(container);
// server.setConfig(app => {
//   // add body parser
//   app.use(
//     bodyParser.urlencoded({
//       extended: true
//     })
//   );
//   app.use(bodyParser.json());

//   app.use("*", () => console.log("all actions!!!!"));
// });

// let app = server.build();

const container = new Container();
const server = new InversifyExpressServer(container);
const app = server.build();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App is running at http://localhost:${PORT} in dev mode`);
  console.log("Press CTRL-C to stop");
});
