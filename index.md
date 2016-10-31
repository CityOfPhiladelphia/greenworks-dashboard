---
layout: default
title: Greenworks Dashboard
---
<script>
// This can be moved to its own file and included with scripts.html

// Chart Globals

Chart.defaults.global.legend.position = 'bottom';

// Format numbers with commas in charts

Chart.scaleService.updateScaleDefaults('linear', {
	ticks: {
		callback: function (value) {
			return (+value).toLocaleString();
		}
	}
})

// Format numbers with commas in tooltips

Chart.defaults.global.tooltips.callbacks.label = function (tooltipItem, data) {
	var datasetLabel = data.datasets[tooltipItem.datasetIndex].label || '';
	return datasetLabel + ': ' + (+tooltipItem.yLabel).toLocaleString();
}
</script>

<h2 class="ptl">Vision 1: Accessible Food and Drinking Water</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/1-snap-participation.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
      <h3 class="h4 pbl">All Philadelphians have access to healthy, affordable, and sustainable food and drinking water.</h3>
			<!-- <h4 class="h6">Note</h4> -->
			<p>Philadelphians can use Supplemental Nutrition Assistance Program (SNAP) benefits to purchase healthy, locally-grown food at <a href="http://thefoodtrust.org/uploads/media_items/philly-food-bucks-brochure-english.original.pdf">many farmers markets</a> citywide. Philly Food Bucks is a healthy food incentive program launched in 2010 to increase the purchasing power of SNAP customers. For every $5 that SNAP customers spend using their benefits at a participating market site, they receive a $2 Philly Food Bucks coupon for fresh fruits and vegetables.</p>

	  	<h4 class="h6">Source</h4>
	  	<p>Get Healthy Philly</p>
    </aside>
  </div>
</div>

<h2>Vision 2: Healthy Outdoor and Indoor Air</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/2-outdoor-air-quality.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
      <h3 class="h4 pbl">All Philadelphians breathe healthy air inside and outside.</h3>
			<!-- <h4 class="h6">Note</h4> -->
	    <p>The Air Quality Index (AQI) is a daily measure of how clean or polluted our air is and how healthy it is to breathe. The Environmental Protection Agency revised the National Ambient Air Standards for ozone in 2015 and PM2.5 (particulate matter) in 2013 to hold cities and counties to higher standards for air quality. The City of Philadelphia will continue to work to meet and outperform outdoor air quality standards in the years ahead.</p>

			<h4 class="h6">Source</h4>
	  	<p>U.S. Environmental Protection Agency</p>
    </aside>
  </div>
</div>

<h2>Vision 3: Clean and Efficient Energy</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/3-citywide-energy-usage.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
      <!-- <h3 class="h4 pbl">Vision</h3> -->
      <h3 class="h4 pbl">All Philadelphians efficiently use clean energy that they can afford.</h3>

			<!-- <h4 class="h6">Note</h4> -->
			<p>Annual energy use is driven in part by cold winters and hot summers that make people need to heat and cool their buildings. This demand for heating and cooling is measured in <a href="http://www.eia.gov/energyexplained/index.cfm?page=about_degree_days">degree days</a>. The extreme winters of 2010 and 2013/4 resulted in higher-than-average citywide energy use, but the 2015 decline as weather patterns stayed about the same may indicate that Philadelphia’s buildings are becoming more efficient. </p>
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Energy Office</p>
    </aside>
  </div>
</div>

<h2>Vision 4: Climate Prepared and Carbon Neutral Communities</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/4-philadelphia-carbon-footprint.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbl">All Philadelphians are prepared for climate change and reduce carbon pollution.</h3>
	  	<!-- <h4 class="h6">Note</h4> -->
      <p>Mayor Kenney has set a goal of reducing carbon pollution 80 percent by 2050. Greenhouse gas (GHG) emissions in Philadelphia are down considerably from a 2006 baseline, but to meet our aggressive long-term target, we must increase the pace of progress. Philadelphia is developing an energy master plan for the built environment to set interim GHG reduction goals and identify policies to meet this challenge.</p>
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Energy Office</p>
    </aside>
  </div>
</div>

<h2>Vision 5: Quality Natural Resources</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/5-planted-trees.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbl">Philadelphians benefit from  parks, trees, stormwater management, and healthy waterways.</h3>
	  	<!-- <h4 class="h6">Note</h4> -->
      <p>Philadelphians have planted more than 100,000 trees since 2009, and more than 30,000 have been planted directly by Philadelphia Parks and Recreation (PPR) or given away by PPR’s TreePhilly program for planting in private yards.</p>
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Parks and Recreation</p>
    </aside>
  </div>
</div>

<h2>Vision 6: Accessible, Affordable, and Safe Transportation</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/6-low-carbon-commute.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbl">All Philadelphians have access to safe, affordable, and low-carbon transportation.</h3>
	  	<!-- <h4 class="h6">Note</h4> -->
      <p>Recent investments in pedestrian infrastructure, state funding for SEPTA improvements, and the successful launch of the Indego bike share system are improving low-carbon options to get around Philadelphia.</p>
	  	<h4 class="h6">Source</h4>
	  	<p>American Community Survey</p>
    </aside>
  </div>
</div>

<h2>Vision 7: Zero Waste</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/7-waste-diversion-rate.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbl">All Philadelphians waste less and keep our neighborhoods clean.</h3>
		  <!-- <h4 class="h6">Note</h4> -->
	    <p>Residents, businesses, and construction in Philadelphia all produced less waste in 2014 than they did in 2007, despite an increase in population and construction. Continuing to reduce the amount we waste will make our city cleaner.</p>
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Streets Department</p>
    </aside>
  </div>
</div>

<h2>Vision 8: Engaged Students, Stewards, and Workers</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/8-engaged-philadelphians.html %}
  </div>
	<div class="medium-16 column prxl">
		{% include charts/engaged-philadelphians-spring-cleanup.html %}
	</div>
  <div class="medium-8 column">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbl">All Philadelphians benefit from sustainability education, employment, and business opportunities.</h3>
	  	<!-- <h4 class="h6">Note</h4> -->
      <p>There are many ways Philadelphians can help make our city more sustainable, including volunteering for Philly Spring Cleanup or Waste Watchers, participating in the city’s PowerCorpsPHL job training program, or providing feedback on Greenworks, the city’s sustainability plan. For more ideas on how you can help achieve the Greenworks visons, visit <a href="www.phila.gov/green">www.phila.gov/green</a> to see our new Greenworks on the Ground checklists.</p>
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Office of Sustainability and Partners</p>
    </aside>
  </div>
</div>
