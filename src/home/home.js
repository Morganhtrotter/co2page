var textBox = d3.select("body").append("svg")
      .attr('width', 1100)
      .attr('height', 250)
      .attr('id', "textSVG");

	textBox.append("text").html("VISUALIZING CLIMATE CHANGE")
      .attr('x', 50)
      .attr('y', 50)
      .style('font-family', "Montserrat, sans-serif")
      .style('font-size', 55)
      .style('letter-spacing', 2);
	  
	textBox.append("text").html("Mission Statement: Our goal is to provide users with unique and meaningful visualizations for understanding climate")
      .attr('x', 100)
      .attr('y', 150)
      .attr('class', 'mission');

    textBox.append("text").html("change. We believe that while one visual may provide great insight into CO2 emissions, the same visual might not be")
      .attr('x', 100)
      .attr('y', 180)
      .attr('class', 'mission');

    textBox.append("text").html("applicable or relevant for another dataset such as temperature.")
      .attr('x', 100)
      .attr('y', 210)
      .attr('class', 'mission');