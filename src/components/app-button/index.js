module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getInitialState: function(input) {
        return {
            label: input.label,
            variant: input.variant
        };
    },
    getTemplateData: function(state, input) {
        return {
            label: state.label,
            variant: state.variant
        };
    },
    setLabel: function(newLabel) {
        this.setState('label', newLabel);
    },
    handleClick: function() {
        this.emit('click');
    }
});