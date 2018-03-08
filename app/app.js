'use strict';

// =================================================================================
// App Configuration
// =================================================================================

const {App} = require('jovo-framework');

const handler = require('./handlers/handlerConfig')

const config = {
    logging: true,
    intentMap : {
        'AMAZON.HelpIntent' : 'HelpIntent',
        'AMAZON.StopIntent' : 'END',
        'AMAZON.CancelIntent' : 'END',
        'AMAZON.YesIntent' : 'YesIntent',
        'AMAZON.NoIntent' : 'NoIntent',
      },
};

const app = new App(config);


// =================================================================================
// App Logic
// =================================================================================

app.setHandler(handler)

module.exports.app = app;
