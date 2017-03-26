module.exports = {
  APP_HREF_NOT_FOUND: 'The provided application could not be found.\n\nThe provided application href was: %href%\n',
  APP_NAME_NOT_FOUND: 'The provided application could not be found.\n\nThe provided application name was: %name%\n',
  CONFLICTING_AUTO_LOGIN_AND_EMAIL_VERIFICATION_CONFIG: 'Invalid configuration: stormpath.web.register.autoLogin is true, but the default account store of the specified application has the email verification workflow enabled. Auto login is only possible if email verification is disabled. Please disable this workflow on this application\'s default account store.',
  NO_ACCOUNT_STORES_MAPPED: 'No account stores are mapped to the specified application. Account stores are required for login and registration.',
  NO_DEFAULT_ACCOUNT_STORE_MAPPED: 'No default account store is mapped to the specified application. A default account store is required for registration.',
  UNABLE_TO_AUTO_RESOLVE_APP: 'Could not automatically resolve a Stormpath Application.  \n\nPlease specify your Stormpath Application in your configuration.\n',
  UNABLE_TO_RESOLVE_APP: 'Unable to resolve a Stormpath application.'
};
