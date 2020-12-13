const config = {
  IP: process.env.NODEJS_IP || "127.0.0.1",
  PORT: normalizePort(process.env.PORT),
  MONGO_CONNECTION_STRING: (function() {
    const conString = process.env.MONGO_CONNECTION_STRING;
    if (!conString) {
      throw new Error(`Incorrect mongodb connection url: ${conString}`);
    }

    return conString;
  })()
} as const;
//

/**
 * Normalize port into a number, string, or false.
 */

export function normalizePort(val: string) {
  console.log("normalizePort -> val", val);
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    throw new Error(`Incorrect port value: ${val}`);
  }

  if (port >= 0) {
    // port number
    return port;
  }

  throw new Error(`Incorrect port value: ${val}`);
}

export { config };
