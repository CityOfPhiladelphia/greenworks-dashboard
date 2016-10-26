---
layout: default
title: Greenworks Dashboard
---
<script>
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
    {% include charts/snap-participation.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
      <h3 class="h4 pbxl">All Philadelphians have access to healthy, affordable, and sustainable food and drinking water</h3>

			<h4 class="h6">Note</h4>
			<p>This can be used for notes about the data, or hidden if unused.</p>
	  	<h4 class="h6">Source</h4>
	  	<p>Get Healthy Philly</p>
    </aside>
  </div>
</div>

<h2>Vision 2: Healthy Outdoor and Indoor Air</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/outdoor-air-quality.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
      <h3 class="h4 pbxl">All Philadelphians breathe healthy air inside and outside.</h3>
			<!-- <h4 class="h6">Note</h4>
	    <p></p> -->

			<h4 class="h6">Source</h4>
	  	<p>U.S. Environmental Protection Agency</p>
    </aside>
  </div>
</div>

<h2>Vision 3: Clean and Efficient Energy</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/citywide-energy-usage.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
      <!-- <h3 class="h4 pbxl">Vision</h3> -->
      <h3 class="h4 pbxl">All Philadelphians efficiently use clean energy that they can afford.</h3>

			<h4 class="h6">Note</h4>
			<p>Citywide Energy Usage (mmBtus) metric needs a custom scale to appear on the same chart - domain too large to adequately display all three measures together.</p>
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Energy Office</p>
    </aside>
  </div>
</div>

<h2>Vision 4: Climate Prepared and Carbon Neutral Communities</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/philadelphia-carbon-footprint.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbxl">All Philadelphians are prepared for climate change and reduce carbon pollution.</h3>

	  	<!-- <h4 class="h6">Note</h4>
      <p></p> -->
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Energy Office</p>
    </aside>
  </div>
</div>

<h2>Vision 5: Quality Natural Resources</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/planted-trees.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbxl">Philadelphians benefit from  parks, trees, stormwater management, and healthy waterways.</h3>

	  	<!-- <h4 class="h6">Note</h4>
      <p></p> -->
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Parks and Recreation</p>
    </aside>
  </div>
</div>

<h2>Vision 6: Accessible, Affordable, and Safe Transportation</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/low-carbon-commute.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbxl">All Philadelphians have access to safe, affordable, and low-carbon transportation.</h3>

	  	<!-- <h4 class="h6">Note</h4>
      <p></p> -->
	  	<h4 class="h6">Source</h4>
	  	<p>American Community Survey</p>
    </aside>
  </div>
</div>

<h2>Vision 7: Zero Waste</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/waste-diversion-rate.html %}
  </div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbxl">All Philadelphians waste less and keep our neighborhoods clean.</h3>

		  <!-- <h4 class="h6">Note</h4>
	    <p></p> -->
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Streets Department</p>
    </aside>
  </div>
</div>

<h2>Vision 8: Engaged Students, Stewards, and Workers</h2>
<div class="row pbxl ptl">
  <div class="medium-16 column prxl">
    {% include charts/engaged-philadelphians.html %}
  </div>
	<div class="medium-16 column prxl">
		{% include charts/engaged-philadelphians-spring-cleanup.html %}
	</div>
  <div class="medium-8 column end">
    <aside class="related pll-mu">
	  	<h3 class="h4 pbxl">All Philadelphians benefit from sustainability education, employment, and business opportunities.</h3>

	  	<!-- <h4 class="h6">Note</h4>
      <p></p> -->
	  	<h4 class="h6">Source</h4>
	  	<p>City of Philadelphia Office of Sustainability and Partners</p>
    </aside>
  </div>
</div>
