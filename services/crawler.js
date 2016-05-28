/*
  クローラ雛形
 */
var async = require('async');
var client = require('cheerio-httpcli');
var request = require('request');

var Crawler = {
  instances: {}
};

//
// @params params [Object] parameters for scraping
// @option query [String] :query url for scraping
Crawler.execute = function(params, finalCallback){
  var results = [];

  async.waterfall([
    function(callback){
      Crawler.access(params, callback);
    },
    function(a1, callback){
      Crawler.parse(a1, callback);
    }],
    function(err, result){
      if(!!err){
        console.log(err);
      }
      if(!!a1){
        results = result;
      }

      finalCallback(results);
    }
  );
};

// @params params [Object] parameters for scraping
// @option query [String] :query url for scraping
Crawler.access = function(params, callback){
  client.fetch(params.url, {}, function(err, $, res, body){
    if(!!err){
      callback(err);
    }else{
      callback(null, {$: $, res: res, body: body});
    }
  })
};

Crawler.parse = function (args, callback) {
  var $ = args.$;

  var results = [];

  // HTMLタイトルを表示
  results.push($('title').text());

  callback(null, results);
};

module.exports = Crawler;