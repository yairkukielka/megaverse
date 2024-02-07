# megaverse

Welcome to the megaverse!

## Instructions to run the program

1. Install bun. See [this](https://bun.sh) link

2. Install dependencies:

```bash
bun install
```

3. Fill in the CANDIDATE_ID in the .env file (otherwise, it won't work!)

4. Run the program:

```bash
bun run index.ts
```

5. To run the tests:

```bash
bun test
```

## Developer notes

To prevent the `Too Many Requests` error given from the API when it gets hammered, I added an environment variable called `THROTTLE_MILLIS_BETWEEN_CALLS` that can be used to add time between network calls. The default value is 2000 millis, which usually makes all requests succeed.

An improvement to this could be to run all requests and retry the ones that fail.
