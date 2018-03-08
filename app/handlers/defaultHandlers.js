
let outputSpeech, repromptSpeech

const defaultHandlers = {

    'LaunchRequest': function (app) {

        outputSpeech = 'Welcome to Unit Converter.  Which unit would you like to select?'
        repromptSpeech = 'Which unit would you like to convert today?'

        app.ask(outputSpeech, repromptSpeech)

    },

    'HelpRequest': function (app) {

        outputSpeech = 'This Alexa Skill currently supports length, mass, volume, time, speed, and area.  If you would like more units to be added, leave a comment on our Amazon page!'
        repromptSpeech = 'Select a unit of measurement to begin converting!'

        app.ask(outputSpeech, repromptSpeech)

    },

    'Unhandled': function (app) {

        outputSpeech = 'Please specify which unit you would like converted like mass or time.  If you would like me to list all possible units, ask for help!'
        repromptSpeech = 'Please specify which unit of measurement you '

        app.ask(repromptSpeech, outputSpeech)

    },

    'EndRequest': function (app) {

        outputSpeech = 'Thank you for using the Unit Converter!  See you next time.'

        app.tell(outputSpeech)

    },

}

module.exports = defaultHandlers