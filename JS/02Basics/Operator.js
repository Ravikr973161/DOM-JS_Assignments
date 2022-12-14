var SellingPrice=219;
var ListingPrice=799;

var DiscountPercent=((ListingPrice-SellingPrice)/ListingPrice) * 100;
var DisplayDiscountPercent=Math.round(DiscountPercent);
console.log("Offer percentage is:" +DisplayDiscountPercent + "%  off" );

var price=234;

console.log(typeof price);

