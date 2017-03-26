# Changelog

### 0.0.27

* Patch to fix exception when a group is mapped as the default account store (#65).

### 0.0.26
 
* Patch to preserve locally defined scope options for provider directories.

### 0.0.25

* Allow a `requestExecutor` to be passed in.

### 0.0.24

* Fix support for Node version 6.
* Update packages: mocha-lcov-reporter to version 1.1.0, js-yaml to version 3.5.4,
  async to version 2.0.1, istanbul to version 0.4.3 and mocha to version 3.0.2.

### 0.0.23

* Fix `EnrichIntegrationFromRemoteConfigStrategy` so that user-provided config is
able to disable email verification and password reset.

### 0.0.22

* Fix `ExtendConfigStrategy` so that the fields `web.login.form.fieldOrder` and
`web.register.form.fieldOrder` are copied instead of extended.

### 0.0.21

* Change `EnrichIntegrationFromRemoteConfigStrategy` to use `config.web.social`
  instead of `config.socialProviders`. Also social provider `callbackUri` is now
  just `uri`.

### 0.0.20

* Similar to 0.0.14, adding a temporary patch to `ExtendConfigStrategy` to allow
  the developer to define the new `stormpath.web.produces` array.

* Add fix for `web.spa.view` validation that was crashing the Node SDK tests.

### 0.0.19

* Now validating that auto login and email verification options aren't enabled
  at the same time. (#1).

* Added debugging capabilities for debugging configuration strategies (#23).

* Fixed: Empty stormpath.apikey file clears configuration (#26).

* Fixed problem with loading API Key properties from the home path (#28).

* Add validation for the new `stormpath.web.spa.view` property.

* Updated dependencies:
  * `lodash@3.10.1` -> `lodash@4.0.0`
  * `flat@1.6.0` -> `flat@2.0.0`

### 0.0.18

* Fixed issue with expandHomeDir() not returning absolute path when home path was missing.

### 0.0.17

* Fixed issue with file loaders crashing when home environment wasn't being set.

### 0.0.16

Adding validation for account store mappings.  We now error if:

* No account stores are mapped to the given application.

* The given application does not have a default account store, and
  `stormpath.web.register.enabled` is `true`

### 0.0.15

* Patch for 0.0.14 - fixing a null reference.

### 0.0.14

* Adding a temporary patch to `ExtendConfigStrategy` to ensure that prototype
methods are not lost on `config.cacheOptions.client`.  The patch manually
replaces this property, in the future we intend to fix the extension algorithm
to support this case.

### 0.0.13

* Modified `EnrichClientFromRemoteConfigStrategy` to implement the proper
application resolution strategiey: load application by name or href, fallback
to ony application if that is the case.