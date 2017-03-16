var validationLoaded = true;
function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

function isValidPassword(password) {
    var pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$&()`.+,/\"]{8,}$/;
    return pattern.test(password);
};

function isValidCity(city) {
    var pattern = /^[a-zA-Z\s]*$/;
    return pattern.test(city);
};

function isValidState(state) {
    var pattern = /^[a-zA-Z.]+$/;
    return pattern.test(state);
};

function isValidZip(zip) {
    var pattern = /^[a-zA-Z0-9]+$/;
    return pattern.test(zip);
};

function isValidPhone(phone) {
    var pattern = /^$|[0-9]+$/;
    return pattern.test(phone);
};

// Add Campagin start and end date validation //
$('#start-date').on('blur',function(){
    $('#startErrorMsg').html('')

    var nowTime = new Date().getTime(),
        startTime = new Date( $(this).val() ).getTime();

    if (startTime <= nowTime) {
        $('#startErrorMsg').html('start kochiktar az alane')
    }
})
$('#end-date').on('blur',function(){

    $('#endErrorMsg').html('');

    var nowTime = new Date().getTime(),
        endTime = new Date( $(this).val() ).getTime(),
        startTime = new Date( $('#start-date').val() ).getTime();

    if (startTime > endTime) {
        $('#endErrorMsg').html('end kochiktar az start')
    }
})

// for campaign name live validation
$('#upload-name').on('change', function(){
    var campName = $(this).val();
    $('#nameErrorMsg').html('')
    
    var r = validateField('campaigns','name', campName);

    // console.log(r);

    if (r == 1) {
        $('#nameErrorMsg').html('Campaign name is exist. please try another one')
    }
})

$('#next-btn2').on('click', function(){
    if ($('#keywords').val() == ''){
        
        // $('#keywordsValidation').html('Please import some keywords')
        toastr.error('Please import some keywords','Caution')
    }

    else if ($('#upload-language').val() == '') {
        // $('#languageValidation').html('Please select language');
        toastr.error('Please select language','Caution')
    }

    else if ($('#upload-location').val() == '') {
        // $('#locationValidation').html('Please select locations');
        toastr.error('Please select locations','Caution')
    }

    else if ($('#upload-age').val() == '') {
        // $('#ageValidation').html('Please select age');
        toastr.error('Please select age','Caution')
    }

    else if ($('#upload-gender').val() == '') {
        // $('#genderValidation').html('Please select gender');
        toastr.error('Please select gender','Caution')
    }
    return false
});