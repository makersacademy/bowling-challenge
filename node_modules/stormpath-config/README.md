# stormpath-node-config

*Stormpath configuration loader.*

[![NPM Version](https://img.shields.io/npm/v/stormpath-config.svg?style=flat)](https://npmjs.org/package/stormpath-config)
[![NPM Downloads](http://img.shields.io/npm/dm/stormpath-config.svg?style=flat)](https://npmjs.org/package/stormpath-config)
[![Build Status](https://img.shields.io/travis/stormpath/stormpath-node-config.svg?style=flat)](https://travis-ci.org/stormpath/stormpath-node-config)
[![Coverage Status](https://coveralls.io/repos/stormpath/stormpath-node-config/badge.svg?branch=master&service=github)](https://coveralls.io/github/stormpath/stormpath-node-config?branch=master)

This library is responsible for loading the Stormpath configuration.  It is an internal module used by stormpath-node-sdk, and express-stormpath, and is
not meant for general consumption.


## Installation

To install this library, just run:

```
$ npm install stormpath-config --save
```


## Usage

First, start by including the library:

```
var stormpathConfig = require('stormpath-config');
```

Once the library is loaded, you'll need to initialize a new `Loader` object using the library like so:

```
var configLoader = new stormpathConfig.Loader([/* strategies */]);
```

Notice how the first argument is commented out. This needs to be an array of one or many strategies. See [strategies](#strategies) for a list of all supported strategies and on how to create your own.

E.g. below demonstrates how the Stormpath configuration can be created and loaded from only the environment.

```
var strategy = stormpathConfig.strategy;

var configLoader = new StormpathConfig.Loader([
    new strategy.LoadEnvConfigStrategy(),
    new strategy.LoadFileConfigStrategy('~/stormpath.yml')
]);
```

Now, once you got your new `Loader` object all you need to do is call the `configLoader.load(callback)` method to load the configuration data.
You can do this like so:

```
configLoader.load(function (err, config) {
  if (err) {
    console.error(err);
  } else {
    console.log("Configuration loaded:", config);
  }
});
```

## Strategies

### Creating your own strategy

A strategy is simply a prototype that implements a method named `process` that takes the parameters `config` and `callback`. All it expects is that the callback is called with the first argument as an error (null if none) and the second containing the modified/processed config. E.g. as shown below:

```
function MyConfigStrategy () {
}

MyConfigStrategy.prototype.process = function (config, callback) {
  // Apply strategy to config and return result in callback
  config.someNewField = "abc"; // Append someNewField to our config
  callback(null, config);
};
```

### Supported

Some default strategies for loading a configuration has been included. These are accessible through the `strategy` export. I.e. `require('stormpath-config').strategy`.

#### LoadEnvConfigStrategy

Loads configuration from the system environment.

#### LoadAPIKeyConfigStrategy

Loads client API key configuration from a .properties file.

#### LoadFileConfigStrategy

Loads a configuration from either a JSON or YAML file.

#### ExtendConfigStrategy

Extend a the configuration with an existing object.

#### EnrichClientConfigStrategy

Enriches the configuration with client config resolved at runtime.

#### EnrichClientFromRemoteConfigStrategy

Enriches the configuration with client config resolved from the Stormpath API.

#### EnrichIntegrationConfigStrategy

Enriches the configuration with integration config resolved at runtime.

#### EnrichIntegrationFromRemoteConfigStrategy

Enriches the configuration with integration config resolved from the Stormpath API.

#### ValidateClientConfigStrategy

Validates the client configuration.

## Resources

Below are some resources you might find useful:

- [express-stormpath Github repository](https://github.com/stormpath/stormpath-express)
- [express-stormpath documentation](http://docs.stormpath.com/nodejs/express/latest/)
- [Stormpath website](https://stormpath.com)

## Todo

* Write unit tests.

## Contributing

You can make your own contributions by forking this repository, making your
changes in a feature branch, and then issuing a pull request back to this
repository on the `master` branch.

Here's how you might do this if you wanted to contribute something:

```console
$ git clone https://github.com/stormpath/stormpath-node-config.git
$ cd stormpath-node-config
$ git checkout -b feature-somthing-something
$ # make changes
$ git commit -m "This was easy!"
$ # submit a pull request
```

We regularly maintain this repository, and are quick to review pull requests
and accept changes!

We <333 contributions!

## Copyright

Copyright &copy;2015 Stormpath, Inc. and contributors.

This project is open-source via the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0).
