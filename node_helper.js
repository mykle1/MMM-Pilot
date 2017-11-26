/* Magic Mirror
    * Module: MMM-Pilot
    *
    * By Mykle1
    * 
    */
const NodeHelper = require('node_helper');
const request = require('request');
const parser = require('xml2js').parseString;


module.exports = NodeHelper.create({
	  
    start: function() {
    	console.log("Starting module: " + this.name);
    },
    
    getPilot: function(url) {
    	request({ 
    	          url: url,
    	          method: 'GET' 
    	        }, (error, response, body) => {
            if (!error && response.statusCode === 200) {
                parser(body, (err, result)=> {
						var result = JSON.parse(JSON.stringify(result.response.data));
					//	console.log(result); // for checking
					//	console.log(response.statusCode); // for checking
                        this.sendSocketNotification("PILOT_RESULT", result);
                   
                });
            }
       });
    },

    //Subclass socketNotificationReceived received.
    socketNotificationReceived: function(notification, payload) {
        if (notification === 'GET_PILOT') {
                this.getPilot(payload);
            }
         }  
    });
