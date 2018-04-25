const main = require('../main/main');

describe('taxi fee', function () {
    // write your tests here...
    it("should return result omitting decimal fractions smaller than 0.5 and counting all others, including 0.5, as 1",function(){
        let expected = 7;
        let distance = 2;
        let wait_time = 2;
        let result = main(distance,wait_time);
        expect(expected).toEqual(result);
    });

    it("The start price within two kilometers is 6 yuan",function(){
        let expected = 6;
        let distance = 1;
        let wait_time = 0;
        let result = main(distance,wait_time);
        expect(expected).toEqual(result);
    });

    it("No more than 8 kilometers per kilometre of 0.8 yuan",function(){
        let expected = 10;
        let distance = 7;
        let wait_time =0;
        let result = main(distance,wait_time);
        expect(expected).toEqual(result);
    });
    it("An increase of 50% per kilometre per kilometre after 8 kilometers",function(){
        let expected = 12;
        let distance = 9;
        let wait_time =0;
        let result = main(distance,wait_time);
        expect(expected).toEqual(result);
    });

});