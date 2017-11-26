 /* Magic Mirror
  * Module: MMM-Pilot
  *
  * By Mykle1
  * 
  */
 Module.register("MMM-Pilot", {

     // Module config defaults.
     defaults: {
         ICAO: "KJFK,EGLL,UUDD,EDDT,RJAA,ZBAA,LFPG,LIRF",  // separated by comma only
		 colorCode: "Standard", // Standard or Alternative
         maxWidth: "300px",
         useHeader: false,
		 header: "",
         updateInterval: 10 * 60 * 1000, // every hour
         animationSpeed: 2000,
         initialLoadDelay: 1875, // of module
         retryDelay: 1500,
     },


     getStyles: function() {
         return ["MMM-Pilot.css"];
     },


     // Define start sequence.
     start: function() {
         Log.info("Starting module: " + this.name);

         // Set locale.
        this.url = "https://aviationweather.gov/adds/dataserver_current/httpparam?dataSource=metars&requestType=retrieve&format=xml&stationString=" + this.config.ICAO + "&hoursBeforeNow=1",
		this.Pilot = [];
        this.scheduleUpdate();
    },


    getDom: function() {

         var Pilot = this.Pilot;

         var wrapper = document.createElement("div");
         wrapper.className = "wrapper";
         wrapper.style.maxWidth = this.config.maxWidth;


         if (!this.loaded) {
             wrapper.classList.add("wrapper");
             wrapper.innerHTML = "Pontius Pilot?";
             wrapper.className = "bright light small";
             return wrapper;
         }

		 
		 if (this.config.useHeader != false) {
            var header = document.createElement("header");
            header.classList.add("xsmall", "bright", "header");
            header.innerHTML = this.config.header;
            wrapper.appendChild(header);
        }


         var top = document.createElement("div");
         top.classList.add("list-row");
		 
		 // vars for color coding flight_category bullets
		 var a = Pilot[0].METAR[0].flight_category;
		 var b = Pilot[0].METAR[1].flight_category;
		 var c = Pilot[0].METAR[2].flight_category;
		 var d = Pilot[0].METAR[3].flight_category;
		 var e = Pilot[0].METAR[4].flight_category;
		 var f = Pilot[0].METAR[5].flight_category;
		 var g = Pilot[0].METAR[6].flight_category;
		 var h = Pilot[0].METAR[7].flight_category;
		 
		 
		 // start config opton for color coding
		if (this.config.colorCode != "Standard"){
		 
		 
		 
		// Alternative color coding 1 of 8, a-h
			   if (a == "VFR"){
			var aBullet = '<font color = green> &#x29BF </font>';
		} else if (a == "MVFR"){
			var aBullet = '<font color = blue> &#x29BF </font >';
		} else if (a == "IFR"){
			var aBullet = '<font color = red> &#x29BF </font>';
		} else if (a == "LIFR"){
			var aBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var aBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Alternative color coding 2 of 8, a-h		
				if (b == "VFR"){
			var bBullet = '<font color = green> &#x29BF </font>';
		} else if (b == "MVFR"){
			var bBullet = '<font color = blue> &#x29BF </font >';
		} else if (b == "IFR"){
			var bBullet = '<font color = red> &#x29BF </font>';
		} else if (b == "LIFR"){
			var bBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var bBullet = '<font color = grey> &#x29BF </font>';
		}
		
		
		// Alternative color coding 3 of 8, a-h
			   if (c == "VFR"){
			var cBullet = '<font color = green> &#x29BF </font>';
		} else if (c == "MVFR"){
			var cBullet = '<font color = blue> &#x29BF </font >';
		} else if (c == "IFR"){
			var cBullet = '<font color = red> &#x29BF </font>';
		} else if (c == "LIFR"){
			var cBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var cBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Alternative color coding 4 of 8, a-h		
				if (d == "VFR"){
			var dBullet = '<font color = green> &#x29BF </font>';
		} else if (d == "MVFR"){
			var dBullet = '<font color = blue> &#x29BF </font >';
		} else if (d == "IFR"){
			var dBullet = '<font color = red> &#x29BF </font>';
		} else if (d == "LIFR"){
			var dBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var dBullet = '<font color = grey> &#x29BF </font>';
		}
		
		
		// Alternative color coding 5 of 8, a-h
			   if (e == "VFR"){
			var eBullet = '<font color = green> &#x29BF </font>';
		} else if (e == "MVFR"){
			var eBullet = '<font color = blue> &#x29BF </font >';
		} else if (e == "IFR"){
			var eBullet = '<font color = red> &#x29BF </font>';
		} else if (e == "LIFR"){
			var eBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var eBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Alternative color coding 6 of 8, a-h		
				if (f == "VFR"){
			var fBullet = '<font color = green> &#x29BF </font>';
		} else if (f == "MVFR"){
			var fBullet = '<font color = blue> &#x29BF </font >';
		} else if (f == "IFR"){
			var fBullet = '<font color = red> &#x29BF </font>';
		} else if (f == "LIFR"){
			var fBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var fBullet = '<font color = grey> &#x29BF </font>';
		}
		
		
		// Alternative color coding 7 of 8, a-h
			   if (g == "VFR"){
			var gBullet = '<font color = green> &#x29BF </font>';
		} else if (g == "MVFR"){
			var gBullet = '<font color = blue> &#x29BF </font >';
		} else if (g == "IFR"){
			var gBullet = '<font color = red> &#x29BF </font>';
		} else if (g == "LIFR"){
			var gBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var gBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Alternative color coding 8 of 8, a-h		
				if (h == "VFR"){
			var hBullet = '<font color = green> &#x29BF </font>';
		} else if (h == "MVFR"){
			var hBullet = '<font color = blue> &#x29BF </font >';
		} else if (h == "IFR"){
			var hBullet = '<font color = red> &#x29BF </font>';
		} else if (h == "LIFR"){
			var hBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var hBullet = '<font color = grey> &#x29BF </font>';
		}
		
	} else { // continue config option for color coding
		
		// Stardard color coding 1 of 8, a-h
			   if (a == "VFR"){
			var aBullet = '<font color = blue> &#x29BF </font>';
		} else if (a == "MVFR"){
			var aBullet = '<font color = green> &#x29BF </font >';
		} else if (a == "IFR"){
			var aBullet = '<font color = yellow> &#x29BF </font>';
		} else if (a == "LIFR"){
			var aBullet = '<font color = red> &#x29BF </font>';
		} else {
			var aBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Stardard color coding 2 of 8, a-h		
				if (b == "VFR"){
			var bBullet = '<font color = blue> &#x29BF </font>'; 
		} else if (b == "MVFR"){
			var bBullet = '<font color = green> &#x29BF </font >';
		} else if (b == "IFR"){
			var bBullet = '<font color = yellow> &#x29BF </font>';
		} else if (b == "LIFR"){
			var bBullet = '<font color = red> &#x29BF </font>';
		} else {
			var bBullet = '<font color = grey> &#x29BF </font>';
		}
		
		
		// Stardard color coding 3 of 8, a-h
			   if (c == "VFR"){
			var cBullet = '<font color = blue> &#x29BF </font>';
		} else if (c == "MVFR"){
			var cBullet = '<font color = green> &#x29BF </font >';
		} else if (c == "IFR"){
			var cBullet = '<font color = yellow> &#x29BF </font>';
		} else if (c == "LIFR"){
			var cBullet = '<font color = red> &#x29BF </font>';
		} else {
			var cBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Stardard color coding 4 of 8, a-h		
				if (d == "VFR"){
			var dBullet = '<font color = blue> &#x29BF </font>';
		} else if (d == "MVFR"){
			var dBullet = '<font color = green> &#x29BF </font >';
		} else if (d == "IFR"){
			var dBullet = '<font color = yellow> &#x29BF </font>';
		} else if (d == "LIFR"){
			var dBullet = '<font color = red> &#x29BF </font>';
		} else {
			var dBullet = '<font color = grey> &#x29BF </font>';
		}
		
		
		// Stardard color coding 5 of 8, a-h
			   if (e == "VFR"){
			var eBullet = '<font color = blue> &#x29BF </font>';
		} else if (e == "MVFR"){
			var eBullet = '<font color = green> &#x29BF </font >';
		} else if (e == "IFR"){
			var eBullet = '<font color = yellow> &#x29BF </font>';
		} else if (e == "LIFR"){
			var eBullet = '<font color = red> &#x29BF </font>';
		} else {
			var eBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Stardard color coding 6 of 8, a-h		
				if (f == "VFR"){
			var fBullet = '<font color = green> &#x29BF </font>';
		} else if (f == "MVFR"){
			var fBullet = '<font color = blue> &#x29BF </font >';
		} else if (f == "IFR"){
			var fBullet = '<font color = red> &#x29BF </font>';
		} else if (f == "LIFR"){
			var fBullet = '<font color = magenta> &#x29BF </font>';
		} else {
			var fBullet = '<font color = grey> &#x29BF </font>';
		}
		
		
		// Stardard color coding 7 of 8, a-h
			   if (g == "VFR"){
			var gBullet = '<font color = blue> &#x29BF </font>';
		} else if (g == "MVFR"){
			var gBullet = '<font color = green> &#x29BF </font >';
		} else if (g == "IFR"){
			var gBullet = '<font color = yellow> &#x29BF </font>';
		} else if (g == "LIFR"){
			var gBullet = '<font color = red> &#x29BF </font>';
		} else {
			var gBullet = '<font color = grey> &#x29BF </font>';
		}		
		
		// Stardard color coding 8 of 8, a-h		
				if (h == "VFR"){
			var hBullet = '<font color = blue> &#x29BF </font>';
		} else if (h == "MVFR"){
			var hBullet = '<font color = green> &#x29BF </font >';
		} else if (h == "IFR"){
			var hBullet = '<font color = yellow> &#x29BF </font>';
		} else if (h == "LIFR"){
			var hBullet = '<font color = red> &#x29BF </font>';
		} else {
			var hBullet = '<font color = grey> &#x29BF </font>';
		}
	} // <-- end config option for color coding SHEEESH!
	
	
		// if cloud_base_ft_agl == undefined then show nothing
        if (Pilot[0].METAR[0].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[0].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		if (Pilot[0].METAR[1].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[1].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		if (Pilot[0].METAR[2].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[2].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		if (Pilot[0].METAR[3].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[3].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		if (Pilot[0].METAR[4].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[4].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		if (Pilot[0].METAR[5].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[5].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		if (Pilot[0].METAR[6].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[6].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		if (Pilot[0].METAR[7].sky_condition[0]["$"].cloud_base_ft_agl == undefined){
			Pilot[0].METAR[7].sky_condition[0]["$"].cloud_base_ft_agl = "";
		}
		
		// For alignment because I can't do tables yet
		if (Pilot[0].METAR[0].station_id == "LIRF"){
			Pilot[0].METAR[0].station_id = "LIRF" + " &nbsp ";
		}
		if (Pilot[0].METAR[1].station_id == "LIRF"){
			Pilot[0].METAR[1].station_id = "LIRF" + " &nbsp ";
		}
		if (Pilot[0].METAR[2].station_id == "LIRF"){
			Pilot[0].METAR[2].station_id = "LIRF" + " &nbsp ";
		}
		if (Pilot[0].METAR[3].station_id == "LIRF"){
			Pilot[0].METAR[3].station_id = "LIRF" + " &nbsp ";
		}
		if (Pilot[0].METAR[4].station_id == "LIRF"){
			Pilot[0].METAR[4].station_id = "LIRF" + " &nbsp ";
		}
		if (Pilot[0].METAR[5].station_id == "LIRF"){
			Pilot[0].METAR[5].station_id = "LIRF" + " &nbsp ";
		}
		if (Pilot[0].METAR[6].station_id == "LIRF"){
			Pilot[0].METAR[6].station_id = "LIRF" + " &nbsp ";
		}
		if (Pilot[0].METAR[7].station_id == "LIRF"){
			Pilot[0].METAR[7].station_id = "LIRF" + " &nbsp ";
		}
		 
		 
         // flight_category
		 // station_id
		 // wind_dir_degrees @ wind_speed_kt
		 // visibility in SM
		 // sky condition
		 // temp and dew point in C
        var synopsis = document.createElement("div");
        synopsis.classList.add("xsmall", "bright", "synopsis");
		console.log(this.Pilot);
        synopsis.innerHTML = 
						 aBullet + " &nbsp "
					   + Pilot[0].METAR[0].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[0].wind_dir_degrees + "@"
					   + Pilot[0].METAR[0].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[0].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[0].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[0].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[0].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[0].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis);
		 
		 
		var synopsis2 = document.createElement("div");
        synopsis2.classList.add("xsmall", "bright", "synopsis2");
        synopsis2.innerHTML = 
						 bBullet + " &nbsp "
					   + Pilot[0].METAR[1].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[1].wind_dir_degrees + "@"
					   + Pilot[0].METAR[1].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[1].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[1].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[1].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[1].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[1].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis2);
		 
		 
		var synopsis3 = document.createElement("div");
        synopsis3.classList.add("xsmall", "bright", "synopsis3");
        synopsis3.innerHTML = 
						cBullet + " &nbsp "
					   + Pilot[0].METAR[2].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[2].wind_dir_degrees + "@"
					   + Pilot[0].METAR[2].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[2].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[2].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[2].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[2].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[2].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis3);
		 
		 
		var synopsis4 = document.createElement("div");
        synopsis4.classList.add("xsmall", "bright", "synopsis4");
        synopsis4.innerHTML = 
						dBullet + " &nbsp "
					   + Pilot[0].METAR[3].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[3].wind_dir_degrees + "@"
					   + Pilot[0].METAR[3].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[3].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[3].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[3].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[3].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[3].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis4);
		 
		 
		var synopsis5 = document.createElement("div");
        synopsis5.classList.add("xsmall", "bright", "synopsis5");
        synopsis5.innerHTML = 
						eBullet + " &nbsp "
					   + Pilot[0].METAR[4].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[4].wind_dir_degrees + "@"
					   + Pilot[0].METAR[4].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[4].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[4].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[4].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[4].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[4].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis5);
		 
		 
		var synopsis6 = document.createElement("div");
        synopsis6.classList.add("xsmall", "bright", "synopsis6");
        synopsis6.innerHTML = 
						fBullet + " &nbsp "
					   + Pilot[0].METAR[5].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[5].wind_dir_degrees + "@"
					   + Pilot[0].METAR[5].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[5].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[5].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[5].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[5].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[5].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis6);
		 
		 
		var synopsis7 = document.createElement("div");
        synopsis7.classList.add("xsmall", "bright", "synopsis7");
        synopsis7.innerHTML = 
						gBullet + " &nbsp "
					   + Pilot[0].METAR[6].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[6].wind_dir_degrees + "@"
					   + Pilot[0].METAR[6].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[6].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[6].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[6].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[6].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[6].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis7);
		 
		 
		var synopsis8 = document.createElement("div");
        synopsis8.classList.add("xsmall", "bright", "synopsis8");
        synopsis8.innerHTML = 
						hBullet + " &nbsp "
					   + Pilot[0].METAR[7].station_id + " &nbsp &nbsp "
					   + Pilot[0].METAR[7].wind_dir_degrees + "@"
					   + Pilot[0].METAR[7].wind_speed_kt + "kt" + " &nbsp "
			+ Math.round(Pilot[0].METAR[7].visibility_statute_mi) + "SM" + " &nbsp "
					   + Pilot[0].METAR[7].sky_condition[0]["$"].sky_cover
					   + Pilot[0].METAR[7].sky_condition[0]["$"].cloud_base_ft_agl + " &nbsp "
			+ Math.round(Pilot[0].METAR[7].temp_c) + "/"
			+ Math.round(Pilot[0].METAR[7].dewpoint_c) + " &nbsp ";
        top.appendChild(synopsis8);

		 
        wrapper.appendChild(top);
        return wrapper;


	},  // closes the getDom


     processPilot: function(data) { 
         this.Pilot = data;
	//	 console.log(this.Pilot); // for checking
         this.loaded = true;
     },

     scheduleUpdate: function() {
         setInterval(() => {
             this.getPilot();
         }, this.config.updateInterval);
         this.getPilot(this.config.initialLoadDelay);
     },

     getPilot: function() {
	
         this.sendSocketNotification('GET_PILOT', this.url);
     },

     socketNotificationReceived: function(notification, payload) {
         if (notification === "PILOT_RESULT") {
             this.processPilot(payload);
             this.updateDom(this.config.animationSpeed);
         }
         this.updateDom(this.config.initialLoadDelay);
     },

 });