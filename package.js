Package.describe({
  name: 'peterellisjones:describe',
  summary: 'Extend tiny test so that you can use "describe", "context", and "it" blocks',
  version: '1.0.0',
  git: 'https://github.com/peterellisjones/describe.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('tinytest');
  api.addFiles('peterellisjones:describe.js');
  api.export('describe');
});
