'use strict';


/**
 * LineScanner реализует базовые функции работы со строкой
 *
 * @constructor
 */


function LineScanner() {
  var self = this;

  self.line = '';
  self.pos = 0;
  // self.number = false;

  self.setLine = function(line, pos) {
    self.line = line;
    self.pos = typeof pos !== 'undefined' ? pos : 0;
    };
  
  self.testCharNot = function(ch) {
	  var line = self.line[self.pos];
	  var pos=self.pos; 
	  if (line[pos]!==ch){
		  return false
	  }
	  else{
		  return true
	  }
   return null;
  };

};



module.exports = LineScanner;