## Available Scripts

In the project directory, you can run:

### `npm run dev`

To start the app in dev mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

NOTE: Applied `tsx` package for development (handles extensionless .ts imports and maintaining ESM compatibility)

### `npm run build`

To build production code.

NOTE: Changed from native `tsc` to `tsup` as a bundler (in order to skip using file extenstion at import modules as dev hosting needs *.ts and building needs *.js).\
It bundles everything into a single file.

### `npm run serve`

For production mode of built code.

### `npm run test`

Run the test cases.

## Debug logging

This project uses the `debug` package for app-level debug logs.

- Create a `.env` file in the project root (you can copy from `.env.example`). 
- Use `.env.*` file names (defining hierarchy) according [dotenv-flow documentation](https://www.npmjs.com/package/dotenv-flow) chapter `Files under version control`
- To enable all debug logs (i.e. from all namespaces) set process variable:
	- `DEBUG=*`

Optionally, to make Fastify/pino more verbose set process variable:

- `FASTIFY_LOG_LEVEL=debug`

## Learn More

To learn Fastify, check out the [Fastify documentation](https://fastify.dev/docs/latest/).
