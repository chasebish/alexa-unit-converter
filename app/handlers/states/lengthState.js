let outputSpeech, repromptSpeech

const lengthState = {

    'LengthPrompt': function (app) {

        outputSpeech = 'Okay, which units would you like converted?'
        repromptSpeech = 'Which units would you like converted?'

        app.setFollowUpState('LengthState').ask(outputSpeech, repromptSpeech)

    }

}

module.exports = lengthState