# node-parse-iso-duration

Parse an ISO 8601 duration to milliseconds

## Instalation

```sh
npm install --save parse-iso-duration
```

## Usage

```javascript

var parseIsoDuration = require('parse-iso-duration');

parseIsoDuration('PT8S');   // 8 * 1000
parseIsoDuration('PT10M');  // 10 * 60 * 1000
parseIsoDuration('PT20H');  // 20 * 60 * 60 * 1000
parseIsoDuration('PT6M4S'); // 6 * 60 * 1000 + 4 * 1000

parseIsoDuration('Hello world'); // Throws "Invalid duration"
parseIsoDuration('P10Y10M10D');  // Throws "Ambiguous duration"

```

## Year and month

If years or months is specified and more than 0 the library will throw `"Ambiguous duration"` since it's meaning can't be converted to milliseconds.

## License

MIT
