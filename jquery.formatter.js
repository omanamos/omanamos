(function( $ ){
	$.fn.formatter = function() {
		
		// if nothing is selected, return nothing; can't chain anyway
		if (!this.length) {
			console.warn( "nothing selected, can't format, returning nothing" );
			return;
		}
		
		var methods = {
			focus: function(){
				this.value = "";
				$(this).removeClass("default_value");
				$(this).blur(methods.blur);
			},
			
			blur: function(){
				this.value = $(this).data('formatter').default_value;
				$(this).addClass("default_value");
				$(this).focus(methods.focus);
			}
		};
		this.each(function(){
			$this = $(this);
			if(!$this.data('formatter')){
				$(this).data('formatter',{
					default_value: this.value
				});
				$this.focus(methods.focus);
			}
		});
	};
})( jQuery );

