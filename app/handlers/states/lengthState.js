
let outputSpeech, repromptSpeech = 'Would you like to do any other length conversions?'

const lengthState = {

    'LengthPrompt': function (app) {

        outputSpeech = 'Okay, which units would you like converted?'
        repromptSpeech = 'Which units would you like converted?'

        app.setFollowUpState('LengthState').ask(outputSpeech, repromptSpeech)

    },

    // =================================================================================    
    // Inch Configuration
    // =================================================================================

    inchFoot: function (app) {

    },
    inchYard: function (app) {

    },
    inchMile: function (app) {

    },
    inchNanometer: function (app) {

    },
    inchMicrometer: function (app) {

    },
    inchMillimeter: function (app) {

    },
    inchCentimeter: function (app) {

    },
    inchMeter: function (app) {

    },
    inchKilometer: function (app) {

    },

    // =================================================================================    
    // Foot Configuration
    // =================================================================================

    footInch: function (app) {

    },
    footYard: function (app) {

    },
    footMile: function (app) {

    },
    footNanometer: function (app) {

    },
    footMicrometer: function (app) {

    },
    footMillimeter: function (app) {

    },
    footCentimeter: function (app) {

    },
    footMeter: function (app) {

    },
    footKilometer: function (app) {

    },

    // =================================================================================    
    // Inch Configuration
    // =================================================================================

    yardInch: function (app) {

    },
    yardFoot: function (app) {

    },
    yardMile: function (app) {

    },
    yardNanometer: function (app) {

    },
    yardMicrometer: function (app) {

    },
    yardMillimeter: function (app) {

    },
    yardCentimeter: function (app) {

    },
    yardMeter: function (app) {

    },
    yardKilometer: function (app) {

    },

}

module.exports = lengthState