module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getTemplateData: function(state, input) {
        return {
            message: input.message
        };
    },
    setMessage: function(newMessage) {
        this.setState('message', newMessage);
    }
});