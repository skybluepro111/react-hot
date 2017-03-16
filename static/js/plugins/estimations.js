var estimationLoaded = true;
function getEstimate(budget) {
	this.cpm = 1000;
	this.cpm_rate = 50;
	this.click_rate = 0.45;
	this.export = {
		min: 0,
		max: 0,
		min_raw:0,
		max_raw:0
	}
	this.totalResult = {}
	var budget = budget.replace(/,/g,'');

	this.numberWithCommas = function(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	this.influencers = function() {
		var m = Math.ceil(parseInt(budget) - (budget*10/100)) * this.cpm;
		var x = Math.ceil(parseInt(budget) + (budget*5/100)) * this.cpm;

		this.export["max"] = this.numberWithCommas(x);
		this.export["min"] = this.numberWithCommas(m);
		this.export["min_raw"] = m;
		this.export["max_raw"] = x;
		return this.export;
	}

	this.posts = function() {
		var a = budget/this.cpm_rate;
		var b = a * this.cpm;
		var m = Math.ceil(b - (b*20/100));
		var x = Math.ceil(b + (b*20/100));

		this.export["max"] = this.numberWithCommas(x);
		this.export["min"] = this.numberWithCommas(m);
		this.export["min_raw"] = m;
		this.export["max_raw"] = x;
		return this.export;
	}

	this.engagement = function() {
		var m = Math.ceil(parseInt(budget) - (budget*30/100));
		var x = Math.ceil(parseInt(budget) + (budget*40/100));

		this.export["max"] = this.numberWithCommas(x);
		this.export["min"] = this.numberWithCommas(m);
		this.export["min_raw"] = m;
		this.export["max_raw"] = x;
		return this.export;
	}

	this.clicks = function() {
		var b = budget/this.click_rate;
		var m = Math.ceil(b - (b*20/100));
		var x = Math.ceil(b + (b*20/100));

		this.export["max"] = this.numberWithCommas(x);
		this.export["min"] = this.numberWithCommas(m);
		this.export["min_raw"] = m;
		this.export["max_raw"] = x;
		return this.export;
	}

	this.exportResult = function() {
		this.totalResult["influencers"] = this.influencers().min + " - " + this.influencers().max;
		this.totalResult["posts"] = this.posts().min + " - " + this.posts().max;
		this.totalResult["engagement"] = this.engagement().min + " - " + this.engagement().max;
		this.totalResult["clicks"] = this.clicks().min + " - " + this.clicks().max;
		return this.totalResult;
	}
}


////////////////////////// HOW TO USE //////////////////////////
///  var est = new getEstimate(5000);						 ///
///  var totalInfluencers = est.influencers()				 ///
///  var totalPosts = est.posts()							 ///
///  var totalEngagement = est.engagement()					 ///
///  var totalClicks = est.clicks()							 ///
///  //////////////////////////////////////////////////////	 ///