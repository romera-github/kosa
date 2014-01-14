/**
 * Application Bootstrapper
 * 
 * @langversion JavaScript
 * 
 * @author 
 * @since  
 */

var Application = {

    /**
     * Initialize the app
     * 
     */
    initialize: function() {

        // Imports
        var HomeView = require('views/HomeView');
        var LoginView = require('views/LoginView');
        var SparqlView = require('views/SparqlView');
        var ApplicationRouter = require('routers/ApplicationRouter');
        // var Events = require('events/Event');
        // var GraphCollection = require('collections/GraphCollection');

        // Initialize
        this.homeView = new HomeView();
        this.loginView = new LoginView();
        this.sparqlView = new SparqlView();
        this.applicationRouter = new ApplicationRouter();


        if (typeof Object.freeze === 'function') Object.freeze(this);
    }
}

module.exports = Application;
