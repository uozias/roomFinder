/*
  sumo上のデータのモデル
 */
var crawler = require('../services/crawler');

var SumoContent = {};

// sumo物件をリストする
SumoContent.all = function(query, callback){
  var url = "http://suumo.jp/jj/chintai/ichiran/FR301FC001/?ar=030&bs=040&ra=013&cb=0.0&ct=35.0&et=9999999&md=14&cn=9999999&mb=0&mt=9999999&shkr1=03&shkr2=03&shkr3=03&shkr4=03&fw2=&ek=023016720&ek=023015340&ek=023016140&rn=0230";

  var params = {
    url: url
  };

  crawler.execute(params, function(results){
    callback(results)
  });

};

module.exports = SumoContent;