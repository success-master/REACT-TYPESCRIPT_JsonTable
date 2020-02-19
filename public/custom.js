$(document).ready(function () {
    var trList = $('#custom-table tr');
    var countArray = new Array(trList.length);
    for (let i = 0; i < trList.length; i++) {
        countArray[i] = 0;
        var childList = $(trList[i]).children();
        for (let list of childList) {
            console.log($(list).first().text());
            if ($(list).first().text() === null || $(list).first().text() === '') {
            } else {
                countArray[i]++;
            }
        }
    }
    console.log($('#custom-table tr'));
    console.log(Math.max.apply(Math,countArray));
    var maxNumber = Math.max.apply(Math,countArray);
    for (let i = 0; i < trList.length; i++) {
        countArray[i] = 0;
        var childList = $(trList[i]).children();
        for(let j = maxNumber; j < childList.length; j++){
            $(childList[j]).hide();
        }
    }
    
});