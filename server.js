const app = require('./app'),
      port = process.env.PORT || 8080;

app.listen(port, _ => console.log(`Listening on port ${port}`));
