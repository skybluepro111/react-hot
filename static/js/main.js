 var serverUrl = "http://54.200.48.30:6550"
// var serverUrl = "http://127.0.0.1:6550"
// MODULE LOADING FUNCTION //
function loadModules(ar) {
    var src = "/static/js/plugins/";
    for (var i = 0; i < ar.length; i++) {
        $.getScript( src + ar[i] + ".js", function( data, textStatus, jqxhr ) {
            eval(data);
        });
    }
}
///////////////////////////
$(function(){
    $(document).on('click', '#logoutUser', function(event) {
        event.preventDefault();
        logout();
    });
})


function loadAllModules() {
    var loadingCompleted = $.Deferred();

    loadModules(['bootstrap', 'globalfunctions','validation','estimations','json2','jquery.number.min', 'toastr']);

    var aContainer = document.createElement('div');
    aContainer.setAttribute('id', 'loading-wrapper');
    aContainer.setAttribute('class', 'loading-wrapper');
    aContainer.innerHTML = "<div class=\"loader\">Loading...</div>";
    document.body.appendChild(aContainer);

    var moduleInterval = setInterval(function(){
        
        if (validationLoaded && 
            estimationLoaded && 
            json2Loaded && 
            globalfunctionsLoaded && 
            numbersLoaded && 
            toasterLoaded && 
            bootstrapLoaded) {
                clearInterval(moduleInterval);
                loadingCompleted.resolve();
        }
    },100);


    return $.when(loadingCompleted).done(function(){
        console.log("Loaded");
        var l = document.getElementById("loading-wrapper");

        setTimeout(function(){
            l.remove();
        },500);
    }).promise();

}











































