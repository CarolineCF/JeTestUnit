const {sum,sub,div,date2000} = require('./calculator');

//Calculatrice

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
test('adds 1 - 2 to equal -1', () => {
    expect(sub(1, 2)).toBe(-1);
});
test('adds 1 / 2 to equal -1', () => {
    expect(div(1, 2)).toBe(0.5);
});

// Date 2000
describe('date2000', () => {

    let originalNow = Date.now;

    beforeEach(() => {
    Date.now =  () => new Date('2000-01-01T00:10:00').getTime()
    });

    test("date2000", () => {
        expect(date2000()).toBe(600);
    })

    afterEach(() => {
        Date.now = originalNow;
    })

})



