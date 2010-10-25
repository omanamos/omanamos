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
				$(this).unbind('focus');
				$(this).blur(methods.blur);
			},
			
			blur: function(){
				if(this.value == "" || this.value == $(this).data('formatter').default_value){
					this.value = $(this).data('formatter').default_value;
					$(this).addClass("default_value");
					$(this).unbind('blur');
					$(this).focus(methods.focus);
				}
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
	$.fn.isDefault = function(){
		return $(this).data('formatter') && $(this).data('formatter').default_value == $(this).val()
	}
})( jQuery );

