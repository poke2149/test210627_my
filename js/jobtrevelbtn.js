let job_idx = 0;
var windowsObj;
let jobs = [
    document.getElementById("post"),
    document.getElementById("programer"),
    document.getElementById("smartfarm"),
    document.getElementById("creater"),
    document.getElementById("cooker"),
    document.getElementById("librarian"),
    document.getElementById("dron"),
    document.getElementById("charecter"),
    document.getElementById("athlete"),
    document.getElementById("environment"),
    document.getElementById("disaster"),
    document.getElementById("healthcare")
]
function init() {
    if (document.getElementById("explanation-job-img")) {
        document.getElementById("explanation-job-img").style.display = "none";
    }
}
init();
function changeimg(idx) {
    switch (idx) {
        case 0:
            jobs[0].src = "images/Jobbtn/web_8page_1_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 1:
            jobs[1].src = "images/Jobbtn/web_8page_2_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 2:
            jobs[2].src = "images/Jobbtn/web_8page_7_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 3:
            jobs[3].src = "images/Jobbtn/web_8page_8_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 4:
            jobs[4].src = "images/Jobbtn/web_8page_3_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 5:
            jobs[5].src = "images/Jobbtn/web_8page_4_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 6:
            jobs[6].src = "images/Jobbtn/web_8page_9_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 7:
            jobs[7].src = "images/Jobbtn/web_8page_10_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 8:
            jobs[8].src = "images/Jobbtn/web_8page_5_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 9:
            jobs[9].src = "images/Jobbtn/web_8page_6_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 10:
            jobs[10].src = "images/Jobbtn/web_8page_11_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        case 11:
            jobs[11].src = "images/Jobbtn/web_8page_12_2.png"
            flag_change_windows(false);
            job_idx = idx;
            break;
        default:
            alert("error!");
            break;
    }
}
function flag_change_windows(b_flag_window) {
    b_flag_window = !b_flag_window;
    if (b_flag_window) {
        setTimeout(() => {
            document.getElementById("selet-job-img").style.display = "none";
            document.getElementById("explanation-job-img").style.display = "block";
        }, 100);
    } else {
        setTimeout(() => {
            document.getElementById("selet-job-img").style.display = "block";
            document.getElementById("explanation-job-img").style.display = "none";
        }, 100);
    }
}

function pop_windows(url)
{
    var title = "vrveideo";
    windowsObj = window.open(url, title ,'width=900% , height = 500 , left = 500 , top = 250,toolbars=no,scrollbars=no');
    localStorage.setItem("item",job_idx);
    return false;
}