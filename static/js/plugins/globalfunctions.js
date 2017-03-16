// GLOBAL FUNCTION //
var globalfunctionsLoaded = true;
console.log("Global Functions");
function loginUser(email,password,type) {
    var loginData = {
        email: email,
        password: password
    };
    $.ajax({
        url: serverUrl + "/loginapi/" + type,
        type: "POST",
        data: JSON.stringify(loginData),
        dataType: "json",
        success: function (result) {
            toastr.success('Welcome!', 'Done');
            result.user["panel"] = type;
            localStorage.user = JSON.stringify(result.user);
            
            window.location = "/" + type + "/dashboard";
        },
        error: function (result) {
            toastr.warning(result.responseJSON.error_msg, 'warning');
        }
    });
}

function logout(){
    localStorage.clear()
    window.location.pathname = '/';
}

function getUserInfo(uid,type) {
    var requestData = {
        id: uid,
    },
    tmp = '';

    $.ajax({
        url: serverUrl + "/getuser/" + type,
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
            
            toastr.warning("There's a problem with server please come back later.", 'Error');
        }
    });
    return tmp
}

function getLocalUserInfo() {
    console.log("A");
    return JSON.parse(localStorage.user);
}

function updateProfile(uid,req,type) {
    var requestData = {
        uid: uid,
        req: req
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/updateprofile/" + type,
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
        }
    });
    return tmp;
}

function resetPassword(id, oldPass, newPass, type) {
    var requestData = {
        id: id,
        oldpass: oldPass,
        newpass: newPass
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/resetpassword/" + type,
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
        }
    });
    return tmp;
}

function addNewCampaign(camp) {
    var user = getLocalUserInfo();
    camp["brand"] = user._id.$oid;
    var e = null;
    $.ajax({
        url: serverUrl + "/addcampaign",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(camp),
        dataType: "json",
        success: function (result) {
            e = result;
        },
        error: function (result) {
            e = 0;
        }
    });
    return e;
}

function getAllCampaigns() {
    var requestData = {
        id: 0,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getallcampaigns",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function getSingleCampaign(id) {
    var requestData = {
        id: id,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getcampaign",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function getCampaignPost(uid) {
    var requestData = {
        campaign_id: uid,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getcampaignposts",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function getCampaignReport(cid) {
    var requestData = {
        campaign_id: cid
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/reportcampaign",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function getbrandcampaigns(uid, type) {
    var requestData = {
        id: uid,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getbrandcampaigns/"+ type,
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            
        }
    });
    return tmp;
}

function getAllBrands() {
    var requestData = {
        id: 0,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getallbrands",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function getBrandFinancialReport(uid) {
    var requestData = {
        id: uid,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getbrandfinancialreport",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
        }
    });
    return tmp;
}

function assingInfluencer(inf,brand,camp,offer) {
    var reqData = {
      'influencer_id':inf,
      'brand_id': brand,
      'campaign_id': camp,
      'budget': offer
    }
    var tmp = null;
    $.ajax({
        url: serverUrl + "/assigninfluencer",
        type: "POST",
        data: JSON.stringify(reqData),
        dataType: "json",
        async: false,
        global: false,
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
        }
    });
    return tmp;
}

function inviteInfluencer(email) {
    var requestData = {
        email: email,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/invitenewinfliencer",
        type: "POST",
        data: JSON.stringify(requestData),
        dataType: "json",
        async: false,
        global: false,
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
        }
    });
    return tmp;
}

function acceptInfluencerCamp(id) {
    var requestData = {
        id: id,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/acceptcampaign",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result
        }
    });
    return tmp;
}

function getAllInfluencers() {
    var requestData = {
        id: 0,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getallinfluencers",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            
        }
    });
    return tmp;
}

function getSingleInfluencer(id) {
    var requestData = {
        inf_id: id,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getsingleinfluencer",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            
        }
    });
    return tmp;
}

function getInfluencersPost(uid) {
    var requestData = {
        influencer_id: uid,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getinfluencerposts",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            
        }
    });
    return tmp;
}

function getAllInfluencersByCampaign(id) {
    var requestData = {
        camp: id,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getallinfluencersbycampaign",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            
        }
    });
    return tmp;
}
function getAllInfluencersByCampaignAdmin(id) {
    var requestData = {
        camp: id,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getallinfluencersbycampaignadmin",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            
        }
    });
    return tmp;
}

function getinfluencercampaigns(uid) {
    var requestData = {
        id: uid,
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getinfluencercampaigns",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function getInfluencerStats(uid,cid,bid,type) {
    var requestData = {
        influencer_id: uid,
        campaign_id: cid,
        brand_id: bid
    };

    var tmp = null;
    $.ajax({
        url: serverUrl + "/getstat/" + type,
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function getInfluencerStatsById(sid) {
    var requestData = {
        statid: sid,
        influencer_id: 0,
        campaign_id: 0,
        brand_id: 0
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/getstat/id",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {

        }
    });
    return tmp;
}

function checkCard(requestData) {
    var tmp = null;
    $.ajax({
        url: serverUrl + "/checkpaymentcard",
        type: "POST",
        data: JSON.stringify(requestData),
        dataType: "json",
        async: false,
        global: false,
        success: function (result) {
            tmp = result;
        },
        error: function (result,errorStatus) {
            tmp = result;
            console.log(errorStatus);
        }
    });
    return tmp;
}

function createPayment(requestData) {
    var tmp = null;
    $.ajax({
        url: serverUrl + "/createpayment",
        type: "POST",
        data: JSON.stringify(requestData),
        dataType: "json",
        async: false,
        global: false,
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
        }
    });
    return tmp;
}

function paypalPayment(id,price,campName) {
    var loginData = {
        uid: id,
        price: price,
        serverUrl:serverUrl,
        camp_name: campName,

    };
    var e = null;
    $.ajax({
        url: serverUrl + "/paypalpayment",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(loginData),
        dataType: "json",
        success: function (result) {
            e = result;
        },
        error: function (result) {
            e = 0;
        }
    });
    return e;
}

function loadpaymenthistory(brand_id) {
    var tmp = null;
    var requestData = {
        'brand_id': brand_id
    };
    $.ajax({
        url: serverUrl + "/paymenthistory",
        type: "POST",
        data: JSON.stringify(requestData),
        dataType: "json",
        async: false,
        global: false,
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result;
        }
    });
    return tmp;
}

function validateField(target,field,value) {
    var q = {query:{}}
    q.query[field] = value;
    var tmp = null;
    $.ajax({
        url: serverUrl + '/validate/' + target,
        data: JSON.stringify(q),
        method:'POST',
        async: false,
        global: false,
        success: function(result){
            tmp = result;
        },
        error: function(result){
        }
    })
    return tmp;
}

function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    // var month = months[a.getMonth()];
    var month = a.getMonth();
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + '/' + month + '/' + year;
    return time;
}

function currencyFormatter(nStr){
    nStr = nStr.replace(/,/g,'');
    nStr += '';
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

function budgetField() {
   var myValue = document.getElementById("upload-budget").value;

   if (myValue.indexOf("$") != 0)
   {
      myValue = "$ " + currencyFormatter(myValue);
   }

   document.getElementById("upload-budget").value = myValue;
}

function openFile(file) {
    var r = null;
    var extension = file.substr( (file.lastIndexOf('.') +1) );
    switch(extension) {
        case 'jpeg':
        case 'jpg':
        case 'png':
        case 'gif':
            r = 'image';
        break;
        case 'mp4':
            r = 'video';
        break;
        case 'docx':
        case 'rtf':
        case 'txt':
            r = 'doc';
        break;
        default:
            r = 'who knows';
    }

    return r;
};

function generateTrackableUrl(cid,uid) {
    return serverUrl + "/assets/" + cid + "/" + uid;
}

function statusMessage(type,section,status) {
    var msg = null;
    if (type == 'influencers') {
        if (section == 'campaign') {
            switch (status) {
                case 0:
                    msg = "Waiting for Influencer!";
                break;
                case 2:
                    msg = "Appove and Running";
                break;
                case 3:
                    msg = "Completed";
                break;
                case 4:
                    msg = "Rejected";
                break;
            }
        }

        if (section == 'account') {
            switch (status) {
                case 0:
                    msg = "Not Registered";
                break;
                case 1:
                    msg = "Under Review";
                break;
                case 2:
                    msg = "Social Review";
                break;
                case 3:
                    msg = "Social Approved";
                break;
                case 4:
                    msg = "Rejected";
                break;
            }
        }
    }
    if (type == 'brands') {
        if (section == 'campaign') {
            switch (status) {
                case 0:
                    msg = "Payment Approved";
                break;
                case 1:
                    msg = "Admin Approved";
                break;
                case 2:
                    msg = "Influencer Joined";
                break;
                case 3:
                    msg = "Completed";
                break;
                case 4:
                    msg = "Rejected";
                break;
            }
        }
        if (section == 'account') {
            switch (status) {
                case 0:
                    msg = "Under Review";
                break;
                case 1:
                    msg = "Approved";
                break;
            }
        }
    }
    return msg;
}

function saveSocial(social,sid,embed,url) {
    var requestData = {
        social: social,
        statid: sid,
        embedcode: embed,
        url: url

    };
    console.log(requestData);

    var tmp = null;
    $.ajax({
        url: serverUrl + "/setsocial",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            console.log(result);
            $('#myModal').modal('hide');

            tmp = result;
        },
        error: function (result) {
            $('#inputLabelError').html('Please try again...')
            $('#inputLabelError').show();
        }
    });
    return tmp;
}

function changeStatus(rowId,status,table) {
    var requestData = {
        rid: rowId,
        status: status,
        table: table
    };
    var tmp = null;
    $.ajax({
        url: serverUrl + "/changestatus",
        type: "POST",
        async: false,
        global: false,
        data: JSON.stringify(requestData),
        dataType: "json",
        success: function (result) {
            tmp = result;
        },
        error: function (result) {
            tmp = result
        }
    });
    return tmp;
}

function abbreviateNumber(n) {
    with (Math) {
        var base = floor(log(abs(n))/log(1000));
        var suffix = 'kmb'[base-1];
        return suffix ? String(n/pow(1000,base)).substring(0,3)+suffix : ''+n;
    }
}