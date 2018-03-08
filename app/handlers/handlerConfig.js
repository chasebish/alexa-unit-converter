
const defaultHandlers = require('./defaultHandlers')
const lengthState = require('./states/lengthState')

let outputSpeech, repromptSpeech


const handlerConfig = {


    // =================================================================================    
    // Default Intent Configuration
    // =================================================================================

    'LAUNCH': function () {

        defaultHandlers.LaunchRequest(this)

    },

    'HelpIntent': function () {

        defaultHandlers.HelpRequest(this)

    },

    'Unhandled': function () {

        defaultHandlers.Unhandled(this)

    },

    'END': function () {

        defaultHandlers.EndRequest(this)

    },


    // =================================================================================    
    // Length Configuration
    // =================================================================================

    'LengthIntent': function () {

        lengthState.LengthPrompt(this)

    },

    'LengthState': {

        


    },


}