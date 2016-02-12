// JavaScript Document
(function ($) {
//@credit: http://stackoverflow.com/a/12269923
    $.fn.getWidthInPercent = function () {
        return this.getDimensionAsPercent('width');
    };
	$.fn.getHeightInPercent = function () {
        return this.getDimensionAsPercent('height');
    };
	$.fn.getDimensionInPercent = function(dimensionName){
		var dimension = parseFloat($(this).css(dimensionName))/parseFloat($(this).parent().css(dimensionName));
        return 100*dimension;
	};
	
})(jQuery);

//<shared file>
var makeSizeContentHandler = function(imageSelector, divSelector, dimensionName){
	if(undefined === dimensionName){
		dimensionName = 'width';
	}
	return function() {
		var width = $(window).width();
		if ( width >= 753) {
		   // download complicated script
		   // swap in full-source images for low-source ones
		   
		 
	  var imagePercentage = $(imageSelector).getDimensionInPercent(dimensionName);
	  var containerWidth = $('#container').width();
	   var newHeight = containerWidth * (imagePercentage / 100.0);
		$(divSelector).css("height", newHeight);
		}
		else{
			$(divSelector).css("height", '100%');
		}
	}
}
//</shared file>




   

//</page specific script>
	
	
