What is this?

During my capstone course at UCSC, four group members and I set out to learn the javascript library D3.js and create unique, interactive visualizations surrounding climate change. This is my contribution to the project. After gathering and curating data on each country's carbon dioxide emissions from The Global Carbon Atlas Organization, I used D3.js to bind this data to the radius of a circle and group each circle by continent. The bigger the circle, the more carbon dioxide emissions by that country for that particular year.

Hover your cursor over a circle to see what country that circle is, and to see the exact amount of CO2 emissions in metric tons.

![Alt Text](https://github.com/Morganhtrotter/co2-visualization/blob/master/src/img/TooltipHover.gif)

To change the year being visualized, use the +1, +5, +10, -1, -5, -10 buttons in the upper lefthand corner of the visualization.

![Alt Text](https://github.com/Morganhtrotter/co2-visualization/blob/master/src/img/YearChanger.gif)

Alternatively, you can use the text box to enter a specific year that you would like to see.

![Alt Text](https://github.com/Morganhtrotter/co2-visualization/blob/master/src/img/TextBox.gif)

Entering "compare" mode will, by default, visualize the change in emissions from one year to the next year.

![Alt Text](https://github.com/Morganhtrotter/co2-visualization/blob/master/src/img/Compare.gif)

Change this by using the text box. For example, valuable insights can be found by visualizing the change in emissions between 2000 and 2010, or 2005 and 2015.

![Alt Text](https://github.com/Morganhtrotter/co2-visualization/blob/master/src/img/CompareDecades.gif)


**Instructions for running locally**

Run the website via node.js and npm and calling

    npm start
    
Then navigate to your broswers url and enter the following:

    localhost:3000

