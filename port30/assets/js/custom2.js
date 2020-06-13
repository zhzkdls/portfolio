

new Chart(document.getElementById("radar-chart"), {
		type: 'radar',
		data: {
			labels: ["근면성실", "친화력", "개그감", "패션센스", "언어능력"],
			datasets: [
				{
					label: "1950",
					fill: true,
					color: "#000",
					backgroundColor: "rgba(179,181,198,0.2)",
					borderColor: "rgba(179,181,198,1)",
					pointBorderColor: "#fff",
					pointBackgroundColor: "rgba(179,181,198,1)",
					data: [58,55,53,49,55]
				}
			]
		},
		options: {
			title: {
				display: true,
				text: ''
			},
			labels :{
					fill: "#000"
			},
			legend: {
				display: true,
				position: 'center',
				labels: {
								fontSize: 20,
								fontFamily: 'sans-serif',
								fontColor: '#000000',
								fontStyle: 'bold',
								}
				},
					 
		}
});


// Bar chart
new Chart(document.getElementById("bar-chart"), {
	type: 'bar',
	data: {
		labels: ["HTML", "CSS", "jQuery", "Phothoshop"],
		datasets: [
			{
				label: "Population (percent)",
				backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
				data: [90,88,70,60,0]
			}
		]
	},
	options: {
		legend: { display: false },
		title: {
			display: true,
			text: ''
		}
	}
});


// pie-chart
new Chart(document.getElementById("pie-chart"), {
	type: 'pie',
	data: {
		labels: ["Coding", "Travel", "Food", "Music"],
		datasets: [{
			label: "Population (millions)",
			backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
			data: [70,15,10,5]
		}]
	},
	options: {
		title: {
			display: false,
			text: 'Predicted world population (millions) in 2050'
		},
		legend: {
			position: "bottom",
			onClick: function(event, legendItem) {}     
	},
	plugins: {
				// Change options for ALL labels of THIS CHART
				datalabels: {
						color: 'green'
				}
		},
		tooltips: {
				enabled: false
		}
	}
});


// Change default options for ALL charts
Chart.helpers.merge(Chart.defaults.global.plugins.datalabels, {
	color: '#FE777B'
});

var chart = new Chart(ctx, {
	options: {
			plugins: {
					// Change options for ALL labels of THIS CHART
					datalabels: {
							color: '#36A2EB'
					}
			}
	},
	data: {
			datasets: [{
					// Change options only for labels of THIS DATASET
					datalabels: {
							color: '#FFCE56'
					}
			}]
	}
});