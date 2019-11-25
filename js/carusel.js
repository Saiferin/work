$(document).ready(function(){
    var owl1 = $('.slider-1').owlCarousel({
        loop:true,
        items:4,
nav:false,

       
        autoHeight : true,
        responsive:{
	320:{
                items:1,
		margin:-19


			
            },

        
            
		340:{
                items:2,
		margin:320	
          	  },
		
          	 
		632:{
                items:2,
		margin:320	
            },
	        
	    664:{
                items:2,
		margin:320	
            },
	    736:{
                items:2,
		margin:280	
            },
	   767:{
                items:2,
		margin:320
            },
            768:{
                items:3,
		margin:250
            },
             900:{
                items:3
            },
            1200:{
                items:4
            }

        }
    });
    owl1.owlCarousel();
    $('#next1').click(function() {
        owl1.trigger('next.owl.carousel');
    });

    $('#prev1').click(function() {
        owl1.trigger('prev.owl.carousel');
    });

    var owl2 = $('.slider-2').owlCarousel({
       loop:true,
        items:4,
 autoHeight : true,
nav:false,
        
        responsive:{
            
	320:{
                items:2,
		margin:150
				
            },
		340:{
                items:2,
		margin:320	
          	  },
           
            
	360:{
                items:2,
		margin:290	
            },
		631:{
                items:2,
		margin:290	
            },
	    632:{
                items:2,
		margin:290	
            },
	   664:{
                items:2,
		margin:280	
            },
	    736:{
                items:2,
		margin:240	
            },
	    767:{
                items:2,
		margin:300
		
            },
            768:{
                items:3,
		margin:220
		
            },
            900:{
                items:3
            },
            1200:{
                items:4
            }

        }
    });
    owl2.owlCarousel();
    $('#next2').click(function() {
        owl2.trigger('next.owl.carousel');
    });

    $('#prev2').click(function() {
        owl2.trigger('prev.owl.carousel');
    });

});