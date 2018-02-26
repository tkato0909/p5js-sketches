var sketch = function(p) {
	var xspacing = 16;    // Distance between each horizontal location
	var w;                // Width of entire wave
	var theta = 0.0;      // Start angle at 0
	var amplitude = 100.0; // Height of wave
	var period = 500.0;   // How many pixels before the wave repeats
	var dx;               // Value for incrementing x
	var yvalues;  // Using an array to store height values for the wave
	var counter = 0;
	p.setup = function() {
	  p.createCanvas(600, 600);
	  w = p.width+16;
	  dx = (p.TWO_PI / period) * xspacing;
	  yvalues = new Array(p.floor(w/xspacing));
	}

	p.draw = function() {
	  counter += 1
	  p.background(0);
	  calcWave();
	  renderWave();
	  amplitude = p.sin(counter/20) * p.cos(counter / 10) * 400
	}

	function calcWave() {
	  // Increment theta (try different values for 
	  // 'angular velocity' here)
	  theta += 0.06;

	  // For every x value, calculate a y value with sine function
	  var x = theta;
	  for (var i = 0; i < yvalues.length; i++) {
	    yvalues[i] = p.sin(x)*amplitude;
	    x+=dx;
	  }
	}

	function renderWave() {
	  p.noStroke();
	  p.fill(255);
	  // A simple way to draw the wave with an ellipse at each location
	  for (var x = 0; x < yvalues.length; x++) {
	    p.ellipse(x*xspacing, p.height/2+yvalues[x], 16, 16);
	  }
	};
}
new p5(sketch, 'sketch-1');
