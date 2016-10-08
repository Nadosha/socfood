Template.registerHelper('dateFormatTime', function(date) {
	return moment(date).format("HH:mm");
});