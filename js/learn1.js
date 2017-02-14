$(function(){
   $(".dropdown").hover(            
           function() {
               $('.dropdown-menu', this).stop( true, true ).fadeIn("slow");
               $(this).toggleClass('open');
               $('b', this).toggleClass();                
           },
           function() {
               $('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
               $(this).toggleClass('open');
               $('b', this).toggleClass();                
        });
});
var tabChange = function () {
    var tabs = $('.nav-tabs > li');
    var active = tabs.filter('.active');
    var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
    // Use the Bootsrap tab show method
    next.tab('show');
};
// Tab Cycle function
var tabCycle = setInterval(tabChange, 5000);

// Tab click event handler
$('a').on('click', function (e) {
    e.preventDefault();
    // Stop the cycle
    clearInterval(tabCycle);
    // Show the clicked tabs associated tab-pane
    $(this).tab('show');
    // Start the cycle again in a predefined amount of time
    setTimeout(function () {
        //tabCycle = setInterval(tabChange, 5000);
    }, 15000);
});