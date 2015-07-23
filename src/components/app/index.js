module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),
    getTemplateData: function() {
        return {
        };
    },
    handlePrimaryButtonClick: function() {
        this.getWidget('alert').setMessage('You clicked the "primary" button!');
    },
    handleSuccessButtonClick: function() {
        this.getWidget('alert').setMessage('You clicked the "success" button!');
    },
    handleDangerButtonClick: function() {
        this.getWidget('alert').setMessage('You clicked the "danger" button!');
    }
});