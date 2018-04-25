module.exports = function main(distance,wait_time) {
    const start_price_distance = 2;
    const start_price = 6;
    const pre_kil_base_price = 0.8;
    const overstep_distance = 8;
    const add_ratio = 1.5;
    const pre_minute_wait_price = 0.25;
    var sum_price = 0;

    if(distance <= start_price_distance){
        sum_price = start_price;
    }else if(distance <= overstep_distance && distance > start_price_distance){
        sum_price = start_price + (distance - start_price_distance)*pre_kil_base_price;
    }else{
        sum_price = start_price + (overstep_distance - start_price_distance)*pre_kil_base_price + (distance-overstep_distance)*(pre_kil_base_price*add_ratio);
    }
    sum_price += (wait_time*pre_minute_wait_price);
    return parseInt(sum_price.toFixed());
};