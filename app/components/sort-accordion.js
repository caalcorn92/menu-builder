import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		logIt: function(person, oldIndex, newIndex) {
			console.log(person + ", " + oldIndex + ", " + newIndex)
		}
	},

	click: function() {
		
		var accordionsMenu = $('.accordion-menu');

		if( accordionsMenu.length > 0 ) {
			
			accordionsMenu.each(function(){
				var accordion = $(this);
				//detect change in the input[type="checkbox"] value
				accordion.on('change', 'input[type="checkbox"]', function(){
					var checkbox = $(this);
					var label = $(this).siblings('label');
					if(checkbox.prop('checked')) {
						label.find('i:last-child').each( function() {
							$(this).removeClass('fa-sort-desc').addClass('fa-sort-asc');
						});
					}
					else {
						label.find('i:last-child').each( function() {
							$(this).removeClass('fa-sort-asc').addClass('fa-sort-desc');
						});
					}
				});
			});
		}
	}

});