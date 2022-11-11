/* 
Author: 
Notes: Main scripts
*/
/*
(function($) {
$('iframe#finduniversity').iFrameResize(
        {log:true,
        autoResize:true,
        checkOrigin:false}
        );
})(jQuery);
*/

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

var autodownload = function(){
if (jQuery('.before-and-after-goal').length) {
		var cookiename = jQuery('.before-and-after-goal').attr('class').replace("before-and-after-goal", "").trim();
		if (getCookie(cookiename) != 1) {
			setCookie(cookiename,1,365);
			var downloadlink = jQuery('.download_link').attr('href');
			if (downloadlink) window.location.href = downloadlink;
		}
	}
}
if (jQuery('.pdf').length) setTimeout(autodownload, 2000);







(function($) {
$('iframe#finduniversity').iFrameResize(
        {log:true,
        autoResize:true,
        checkOrigin:false}
        );
})(jQuery);

(function($) {

jQuery('.topics').appendTo(jQuery('.lesson-content .wpb_wrapper'));
jQuery('.buttonsetc').clone().appendTo(jQuery('.lesson-content .wpb_wrapper'));

	
jQuery('.profile.has-post-thumbnail .article-text .article-center-image img').css({'float':'left', 'max-width':'33%', 'height':'auto', 'margin-right': '10px'}).prependTo(jQuery('.profile.has-post-thumbnail .entry-content .article-text p')[0]);
jQuery('.profile.has-post-thumbnail .article-text iframe').css({'width':'100%', 'height':'464px'});
/*	
if (jQuery('.universities-in-countries-heading').length){
    jQuery.ajax({
        type: 'GET',
        dataType: "json",
            url: "https://university.trycomputing.org/counter.php",
        success: function (responseData, textStatus, jqXHR) {
            var data = (responseData);
            jQuery('.universities-in-countries-heading').text(data.universities + ' Universities in ' + data.countries + ' Countries' );
        },
        error: function (responseData, textStatus, errorThrown) {
            console.log(data);
        }
    });
}

if (jQuery('#edit-country').length){
	jQuery('#edit-country,#edit-degree').change(function(){
	  jQuery.ajax({
			type: 'GET',
			dataType: "json",
				url: "https://university.trycomputing.org/counter.php?f=1&refine-country=" + jQuery('#edit-country').val() + '&refine-programs='+ jQuery('#edit-degree').val(),
			success: function (responseData, textStatus, jqXHR) {
				var data = (responseData);
		var text = 'SHOW ' + data.universities + ' UNIVERSITY RESULTS';
		if (data.universities  ==  0){
			var text = 'NO UNIVERSITY RESULTS';
		}else if (data.universities  ==  1){
			var text = 'SHOW ' + data.universities + ' UNIVERSITY RESULT';
		}
		jQuery('#primary-univ-search').text(text);
			},
			error: function (responseData, textStatus, errorThrown) {
				console.log(data);
			}
		});
	}).change();
	jQuery('#edit-country').change(function(){
	  jQuery.ajax({
			type: 'GET',
			dataType: "json",
				url: "https://university.trycomputing.org/counter.php?updated="+ jQuery('#edit-country option:selected').text(),
			success: function (responseData, textStatus, jqXHR) {
				var data = (responseData);
				jQuery('#lastupdate').text('(last updated ' + data.updated_txt +  ')');
			},
			error: function (responseData, textStatus, errorThrown) {
				console.log(data);
			}
		});
	}).change();
}
*/	
})(jQuery);




(function($) {

var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " custom-header-fixed";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)custom-header-fixed(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down
 */
myNavBar.init(  [
    "header"
]);

/**
 * Function that manage the direction
 * of the scroll
 */
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

/**
 * bind to the document scroll detection
 */
window.onscroll = function(e) {
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 */
offSetManager();

  //
  var alm_is_animating = false; // Animating flag
  $('#multi-select-teacher-age').multiselect({ nonSelectedText: 'All Ages', includeSelectAllOption: true, allSelectedText: 'All Ages'  });
  $('#multi-select-teacher-category').multiselect({ nonSelectedText: 'All Categories', includeSelectAllOption: true, allSelectedText: 'All Categories' });
/*   
  $('#multi-select-teacher-age').on('change',function() {
   
    // alert($(this).val());
   
      var agegroup = $(this).val();
      console.log(agegroup);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?agegroup=' + agegroup;
	  window.location.href = catURL;
  });

  $('#multi-select-teacher-category').on('change',function() {
     // alert($(this).val());
   
      var categories = $(this).val();
      console.log(categories);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?category=' + categories;
	  window.location.href = catURL;
  });
*/

// Lesson Plan Student Worksheet
$( "#student-worksheet table" ).each(function() {
  $( this ).addClass( "table table-bordered" );
});

  // Lesson Plans Listing page

  $('#multi-select-lesson-plans1').multiselect({ nonSelectedText: 'All Categories', includeSelectAllOption: true, allSelectedText: 'All Categories' });
  $('#multi-select-lesson-plans2').multiselect({ nonSelectedText: 'All Ages', includeSelectAllOption: true, allSelectedText: 'All Ages'  });
  $('#multi-select-lesson-plans3').multiselect({ nonSelectedText: 'All STEM Fields', includeSelectAllOption: true, allSelectedText: 'All STEM Fields' });
   
/*
  $('#multi-select-lesson-plans1').on('change',function() {
     // alert($(this).val());
   
      var categories = $(this).val();
      console.log(categories);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?category=' + categories;
	  window.location.href = catURL;
  }); 
  $('#multi-select-lesson-plans2').on('change',function() {
    // alert($(this).val());
   
      var agegroup = $(this).val();
      console.log(agegroup);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?agegroup=' + agegroup;
	  window.location.href = catURL;

  });  

$('#multi-select-lesson-plans3').on('change',function() {
    // alert($(this).val());
   
      var categories = $(this).val();
      console.log(categories);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?category=' + categories;
	  window.location.href = catURL;
  });
*/
  // Students Landing page

  $('#multi-select-student1').multiselect({ nonSelectedText: 'All Categories', includeSelectAllOption: true, allSelectedText: 'All Categories' });
  $('#multi-select-student2').multiselect({ nonSelectedText: 'All Ages', includeSelectAllOption: true, allSelectedText: 'All Ages'  });
   
/*
  $('#multi-select-student1').on('change',function() {
    // alert($(this).val());
   
      var categories = $(this).val();
      console.log(categories);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?category=' + categories;
	  window.location.href = catURL;
  }); 
  $('#multi-select-student2').on('change',function() {
    // alert($(this).val());
   
      var agegroup = $(this).val();
      console.log(agegroup);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?agegroup=' + agegroup;
	  window.location.href = catURL;

  }); 

*/

  // Students Landing page Engineering Section

  $('#multi-select-engineering1').multiselect({ nonSelectedText: 'All Categories', includeSelectAllOption: true, allSelectedText: 'All Categories' });
  /*
  $('#multi-select-engineering1').on('change',function() {
    // alert($(this).val());
   
      var categories = $(this).val();
      console.log(categories);  

	  var currentUrl = window.location.href;
	  
	  var catURL = currentUrl + '?category=' + categories;
	  window.location.href = catURL;
  }); 
*/
  // Global filters
  $('#multi-select-global-category').multiselect({ nonSelectedText: 'All Categories', includeSelectAllOption: true, allSelectedText: 'All Categories' });
  $('#multi-select-global-age').multiselect({ nonSelectedText: 'All Ages', includeSelectAllOption: true, allSelectedText: 'All Ages'  });

	var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = window.location.search.substring(1),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;
	
	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');
	
	        if (sParameterName[0] === sParam) {
	            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	        }
	    }
	    return false;
	};

	sectionParameter = getUrlParameter('type');
	var typeparam = '';
	if (sectionParameter.length && typeof sectionParameter !== 'undefined') typeparam = "&type=" + sectionParameter;

  // When a multi-select filter is changed, reload the page with all releveant paramters
  $('.dropdown-menu input').on('change',function() {
   
      var selections = [];
      $('#multi-select-global-category + .btn-group ul input, #multi-select-lesson-plans1 + .btn-group ul input,  #multi-select-lesson-plans3 + .btn-group ul input').each( function( index, el ) {
	      if ($(this).prop('checked')) selections.push($(this).val());
	  });
	  var caturlparam = "category=" + selections.join();

      var selections = [];
      $('#multi-select-global-age + .btn-group ul input, #multi-select-lesson-plans2 + .btn-group ul input').each( function( index, el ) {
	      if ($(this).prop('checked')) selections.push($(this).val());
	  });
	  var ageurlparam = "agegroup=" + selections.join();
	  
	  var currentUrl = window.location.href.split('?')[0];
	  var catURL = currentUrl + "?" + caturlparam + "&" + ageurlparam + typeparam;
	  window.location.href = catURL;
  }); 

  	// Update the button filters with all relevant parameters (from the multi-select)
  	var getcat = '';
  	if (getUrlParameter('category') && getUrlParameter('category') !== 'undefined') getcat = getUrlParameter('category').toString();
  	if (getcat.length && getcat !== 'undefined') getcat = '&category=' + getcat;

  	var getage = '';
  	if (getUrlParameter('agegroup') && getUrlParameter('agegroup') !== 'undefined') getage = getUrlParameter('agegroup').toString();
  	if (getage.length && getage !== 'undefined') getage = '&agegroup=' + getage;

 	$('.alm-filter-nav a').each( function( index, el ) {
	 	$(this).attr('href', $(this).attr('href') + getcat + getage);
	});

	// Pre-check the checkboxes and update the label with the existing selections from the URL parameters.
	var category = getUrlParameter('category').toString().split(',');
	var catlist = [];
	for (i = 0; i < category.length; i++) {
		$("input[value="+category[i]+"]").prop('checked', true);
		var cattext = $('#multi-select-global-category option[value='+category[i]+']').text();
		if (cattext) catlist.push(cattext);
	}
	if (catlist.length) {
		if (catlist.length < 4) $('#multi-select-global-category + .btn-group .multiselect-selected-text').text(catlist.join(', '));
		else $('#multi-select-global-category + .btn-group .multiselect-selected-text').text(catlist.length + ' Selected');
	}
	
	var agegroup = getUrlParameter('agegroup').toString().split(',');
	var agelist = [];
	for (i = 0; i < agegroup.length; i++) {
		$("input[value="+agegroup[i]+"]").prop('checked', true);
		var agetext = $('#multi-select-global-age option[value='+agegroup[i]+']').text();
		if (agetext) agelist.push(agetext);	
	}

	if (agelist.length) {
		if (agelist.length < 4) $('#multi-select-global-age + .btn-group .multiselect-selected-text').text(agelist.join(', '));
		else $('#multi-select-global-age + .btn-group .multiselect-selected-text').text(agelist.length + ' Selected');
	}   
   
  // Tabs for home page

  	$('.alm-filter-nav li').eq(0).addClass('active'); // Set initial active state
/*
	$.urlParam = function(name){
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results==null){
	       return null;
	    }
	    else{
	       return results[1] || 0;
	    }
	}
	$.urlParam('type'); // filter option section name

	
	var sectionParameter = decodeURIComponent($.urlParam('type'));  
*/


		 
	if (sectionParameter == 'student'){
   		$('.alm-filter-nav li').removeClass('active'); // Set initial active state
 		$('.alm-filter-nav li').eq(3).addClass('active'); // Set initial active state
	}

		 
	if (sectionParameter =='teacher'){
    		$('.alm-filter-nav li').removeClass('active'); // Set initial active state
			$('.alm-filter-nav li').eq(2).addClass('active'); // Set initial active state
	}
	 
	if (sectionParameter == 'post'){
    		$('.alm-filter-nav li').removeClass('active'); // Set initial active state
			$('.alm-filter-nav li').eq(1).addClass('active'); // Set initial active state
	}
	 
  // Btn Click Event
  /* $('.alm-filter-nav li a').on('click', function(e){    
    e.preventDefault();  
    var el = $(this); // Our selected element     
    
    if(!el.hasClass('active') && !alm_is_animating){ // Check for active and !alm_is_animating  
       alm_is_animating = true;   
       el.parent().addClass('active').siblings('li').removeClass('active'); // Add active state
       
       var data = el.data(), // Get data values from selected menu item
           transition = 'fade', // 'slide' | 'fade' | null
           speed = '300'; //in milliseconds
      console.log(data);     
      $.fn.almFilter(transition, speed, data); // Run the filter     
    }      
  });
 
  $.fn.almFilterComplete = function(){      
    alm_is_animating = false; // clear animating flag
  };

  $.fn.almEmpty = function(alm){
    var el = $(alm.content),
       msg = 'Sorry, no results found.';
    el.append('<div class="alert alert-danger fade in alert-dismissible"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a> '+msg+'</div>'); // Append to ALM   
    //console.log("Nothing found in this Ajax Load More query :(");
    $(".ieee-eab-post-listing").css("height", "auto");
 };
*/


 $("input[name='mc_mv_EMAIL']").attr("placeholder", "Email Address");


  $(function($) {
    // Change our submit type from HTML (default) to JS
    $('input[name="mc_submit_type"]').val('js');
    
    // Attach our form submitter action
    $('.widget_mailchimpsf_widget form').ajaxForm({
      url: mailchimpSF.ajax_url, 
      type: 'POST', 
      dataType: 'text',
      beforeSubmit: mc_beforeForm,
      success: mc_success
    });
  });
  
  function mc_beforeForm(){
    // Disable the submit button
    $('input[name="mc_signup_submit"]').attr("disabled","disabled");
  }
  function mc_success(data){
    // Re-enable the submit button
    $('input[name="mc_signup_submit"]').removeAttr("disabled");
    
    // Put the response in the message div
    $('.mc_form_inside .updated').html(data);
    
    // See if we're successful, if so, wipe the fields
    var reg = new RegExp("class='mc_success_msg'", 'i');
    if (reg.test(data)){
      $('.widget_mailchimpsf_widget form').each(function(){
        this.reset();
      });
      $('input[name="mc_submit_type"]').val('js');
    }
    // $.scrollTo('#mc_signup', {offset: {top: -28}});
  }

  // Smooth scroll
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        // alert(target.offset().top);
        // alert(target.offset().top - 200);
        $('html, body').animate({          
          scrollTop: ( target.offset().top - 200)
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          //var $target = $(target);          
        });
      }
    }
  });

  $(window).on("load", function () {
      var urlHash = window.location.href.split("#")[1];
      if (urlHash =="find-a-university") {
        $('html,body').animate({
            scrollTop: $('#' + urlHash).offset().top+900
        }, 1000);        
      }
  });

  $('.ieee-custom-background-banner').prop("style", "background-position: top center !important");
  $( '<span class="border-top-blue"></span>' ).insertBefore( $( ".ubermenu-submenu" ) );
  $( '<span class="ieee-close-mobile-menu">CLOSE</span>' ).insertBefore( $( ".fas.fa-bars" ) );
  
  $("#ieee-search-modal").on('shown.bs.modal', function(){
      $(this).find('#s').focus();
  });


jQuery( "div.mobile-navigation>a.ubermenu-responsive-toggle" ).attr('id', 'mainmenu')
var targetNode = document.getElementById('mainmenu')

// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true, characterData: true, attributeOldValue: true, characterDataOldValue: true };

var callback = function(mutationsList) {
    for(var mutation of mutationsList) {

      if(mutation.attributeName == 'class' && mutation.oldValue.search('ubermenu-responsive-toggle-open') == -1) {
        jQuery('#ubermenu-main-2-primary-2').css('opacity', 0).animate({opacity: 1}, 600);
      }
      else {
       jQuery('#ubermenu-main-2-primary-2').css('max-height', 'inherit').animate({'opacity': 0}, 600, _ => {
        jQuery('#ubermenu-main-2-primary-2').css({'max-height': '', 'opacity': 1});
       }); 
      }
    }
};


// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

})(jQuery);


function open_panel()
{
    slideIt();
    a=document.getElementById("ieee-slider-sidebar");
    newsImg = document.getElementById("newsletter-img-changable");
    newsImg.setAttribute("src", D2_THEME_URL+"/images/contact-open.png");
    a.setAttribute("id","ieee-slider-sidebar1");
    a.setAttribute("onclick","close_panel()");
    jQuery('input[name="mc_mv_EMAIL"]').focus();
}

function slideIt()
{
    var slidingDiv = document.getElementById("ieee-slider");
    var stopPosition = 0;
    
    if (parseInt(slidingDiv.style.right) < stopPosition )
    {
      slidingDiv.style.right = parseInt(slidingDiv.style.right) + 5 + "px";
      setTimeout(slideIt, 1); 
    }
}
  
function close_panel(){
    slideIn();
    a=document.getElementById("ieee-slider-sidebar1");
    a.setAttribute("id","ieee-slider-sidebar");
    a.setAttribute("onclick","open_panel()");
    newsImg=document.getElementById("newsletter-img-changable");
    newsImg.setAttribute("src", D2_THEME_URL+"/images/contact.png");
}

function slideIn()
{
    var slidingDiv = document.getElementById("ieee-slider");
    var stopPosition = -338;
    
    if (parseInt(slidingDiv.style.right) > stopPosition )
    {
      slidingDiv.style.right = parseInt(slidingDiv.style.right) - 5 + "px";
      setTimeout(slideIn, 1); 
    }
}






	jQuery(document).ready(function($) {
		/* Find a University Triggers */
	
		$('select#selectCountry').on('change', function() {
		    		var tag = $("option[value="+$(this).val()+"]", this).attr('data-taxonomy-updated');
					$('div#updateYear').html('(last updated ' + tag + ')');
		});
  
		var countryStatus = $('select#selectCountry option:selected').attr('data-taxonomy-updated');
		if( countryStatus ) {
					$('div#updateYear').html('(last updated ' + countryStatus + ')');
		}


	$( "#clearUniv" ).on( "click", function(event) {
		event.preventDefault();
		var url = $(location).attr('href');
		url = url.slice( 0, url.indexOf('&') );
		url = url.slice( 0, url.indexOf('?') );
		console.log(url);	
		window.location.href = url; 
	});

	$( ".teacher .lpWinPrint" ).on( "click", function(event) {
		event.preventDefault();
		window.scrollTo(0,0);
		window.print(); 
		return true;
	});

	if (window.location.href.indexOf("?") >= 0) {
	    //alert("found it");
		 $('html, body').animate({
                    scrollTop: $("article .entry-container").offset().top-560
          }, 300);

	}
  
  
  



if ($("body").hasClass("home")) {
var url = window.location.href;
var offsetHeader = $('.site-header').height();

    if (url.search('type=') != -1) {
        $('html, body').animate({
            scrollTop: $('.lessonplan-landing-cover-layout').offset().top - offsetHeader
        }, 800);
    }
  
    else if (url.search('pg=') != -1) {
        $('html, body').animate({
            scrollTop: $('.lessonplan-landing-cover-layout').offset().top - offsetHeader
        }, 800);
    }
};  

 

}); 




(function($) {

function leadcaptureCookie() {
    var cookieCapture = getCookie("leadcapture_submitted");

    if (cookieCapture == null) {
		jQuery('.single-teacher .entry-content .lessonPlan-print').hide();
		jQuery('.single-teacher .entry-content .lessonPlan-download').css('opacity','1');
        // do cookie doesn't exist stuff;
    }
    else {
		jQuery('.single-teacher .entry-content .lessonPlan-download').hide();
		jQuery('.single-teacher .entry-content .lessonPlan-print').css('opacity','1');
        // do cookie exists stuff
    }
}

if ($("body").hasClass("single-teacher")) {
	//console.log('yes');
	leadcaptureCookie();
}

	$( "#newsletter-link" ).on( "click", function(event) {
		event.preventDefault();
		open_panel(); 
	});


$(document).bind('gform_confirmation_loaded', function(event, form_id){
            if(formId == 5) {

			    setTimeout(function() { 
                /* console.log('trigger that print'); */
                /* alert('hello you are trigging print'); */
			    }, 2000);



            }
});






})(jQuery);




