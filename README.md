
# Plotly Challenge

The goal of this project was to use JavaScript to present interactive visualizations of belly button biodiversity data within a web page. The baseline data was provided in JSON format, and therefore D3 was used to import and process the data, while Plotly was used to generate the required visualizations.

## Technologies

* JavaScript
* D3
* HTML
* Plotly

## Questions:

- Represent the demographic information of the individual associated with each specific belly button sample.
- In a horizontal bar chart, represent Operational Taxonomic Units (OTUs) by concentration in each specific belly button sample.
- In a bubble chart, present the concentrations of all the Operational Taxonomic Units (OTUs) in each specific belly button sample.

## Steps:

- Import the belly button sample data from the JSON file and create a function for web page initialization.
- Extract each sample ID number and append it to the HTML dropdown menu container.
- Extract and process the demographic information and OTU data for the first sample.
- Append demographic information for the first sample to the appropriate HTML table.
- Generate a bar chart of the top ten OTUs by concentration in the first sample and connect it to the appropriate HTML container.
- Generate a bubble chart of the concentrations of all of the OTUs in the first sample and connect it to the appropriate HTML container.
- Create a function to monitor and extract the currently selected sample ID number from the HTML dropdown menu.
- Repeat steps to generate charts and graphs for the currently selected sample ID number.

## Website
https://nrm0009-natalie.github.io/Plotly-challenge/

## Web Page Screenshots:

<img src = https://github.com/nrm0009-natalie/Plotly-challenge/blob/master/website_image1.png>
<img src = https://github.com/nrm0009-natalie/Plotly-challenge/blob/master/website_image2.png>
