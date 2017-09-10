var moment = require('moment');
var twix = require('twix');


exports.calculateDateRange = function (startDate, endDate) {

    var itr = moment.twix(startDate, endDate).iterate("days");
    var datesRange = [];
    while (itr.hasNext()) {

        var momentDate = itr.next().toDate();
        var formattedDate = moment(momentDate).format('YYYY-MM-DD');
        datesRange.push(formattedDate);


    }
    return datesRange;

}