/* 
----------------------------------------------------------------	
Author: Pawan Araballi  
----------------------------------------------------------------
*/

var mysql = require('mysql');
var saltrounds = 5;
var knex = require('knex')({
	client:'mysql',
	connection: {
		host : 'mydbase.cwgnanpueibv.us-east-1.rds.amazonaws.com',
      	user : 'indra',
      	password : 'qqqqqqqq',
      	port : '3306',
      	database: "BingeEating"
	}
});

var bookshelf = require('bookshelf')(knex);
 
var Question = bookshelf.Model.extend({
  tableName: 'Question'
});

module.exports.Questions = function(callback) {
new Question()
.fetchAll()
.then(callback);
}