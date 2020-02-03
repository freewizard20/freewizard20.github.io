jQuery(document).ready(function(){
	var variation_wrap = jQuery('.variations_form').find('.single_variation_wrap');
	
	variation_wrap.on( 'show_variation', function( event, variation ){
		//It removes the div with class "dfd_copy" on refresh jquery.
		jQuery('.dfd_copy').remove();
		
		//The link was removed for security on refresh jquery.
		jQuery('#dfd_download_button').attr('href','');
		
		jQuery("#dfd_variations_button h3").html("");
		
		if(variation.dfd_available_variation == true){
			
			//The add to cart button is hidden and direct download button shown.
			jQuery('.variations_button').hide();
			jQuery('#dfd_variations_button_container').show();
			
			//How many links there are created to know how many buttons of direct download you have to show.
			if(variation.dfd_available_urls_count == 1){
				jQuery("#dfd_variations_button h3").html(variation.dfd_name_files);
				jQuery('#dfd_download_button').attr('href',variation.dfd_available_urls);
			}else{
				for ($aux in variation.dfd_available_urls){
					//It is found that the first button has been created.
					if($aux == 0){
						jQuery("#dfd_variations_button h3").html(variation.dfd_name_files[$aux]);
						jQuery('#dfd_download_button').attr('href',variation.dfd_available_urls[$aux]);
					}else{
						jQuery("#dfd_variations_button").clone().attr('id','dfd_variations_button_'+$aux).addClass("dfd_copy").appendTo('#dfd_variations_button_container');
						jQuery('#dfd_variations_button_'+$aux+" h3").html(variation.dfd_name_files[$aux]);
						jQuery('#dfd_variations_button_'+$aux+" .dfd_available_button").attr('id','dfd_download_button_'+$aux).addClass("dfd_copy_button").attr('href',variation.dfd_available_urls[$aux]);
					}
				}
			}
		}else{
			//The add to cart button is shown and direct download button hidden.
			jQuery('.variations_button').show();
			jQuery('#dfd_variations_button_container').hide();
		}
		
		//Bind the reset variations event to hide the download buttons
		jQuery('.reset_variations').bind('click', function() {
			jQuery('.dfd_copy').remove();
			jQuery('#dfd_variations_button_container').hide();
		});
		
	});
	

});