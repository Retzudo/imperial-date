var test = require('tape');
var imperialDate = require('../index');

test('imperial date', function (t) {
    t.plan(2);
    var date;
    var impDate;

    date = new Date('2016-01-01T00:00:00.000Z');
    impDate = imperialDate(date);
    t.equal(impDate, '0 001 016.M3');

    date = new Date('2016-07-12T10:01:44.018Z');
    impDate = imperialDate(date);
    t.equal(impDate, '0 530 016.M3');
});
