module.exports = {
    sum: (a,b) => a+b,
    sub: (a,b) => a-b,
    div: (a,b) => a/b,

    date2000: function () {
        var start = new Date('2000-01-01T00:00:00').getTime();
    return (Date.now() - start) / 1000;
    }
}