var rand = (function(){

	var specialChars = "#!?@$&_";

	var charMap = {};
	charMap.numeric = "1234567890";
	charMap.alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	charMap.alphaNumeric = charMap.alpha + charMap.numeric;
	charMap.special = charMap.alphaNumeric + specialChars;

	var rand = {
		
		string: function(length, specialChars){
			length = length || 16;
			var map = charMap[( specialChars  ? "special" : "alphaNumeric" )];
			var randomString = "";
			for(var i = 0; i < length; i++) randomString += map.charAt( Math.floor(Math.random() * map.length) );
			return randomString;
		},

		range: function(min, max, excludeMax){
			return Math.floor(Math.random() * (max - min + ( excludeMax ? 0 : 1 ) )) + min;
		},

		number: function(length){
			length = (length || 1);
			return rand.range( Math.pow(10,length-1), Math.pow(10,length), true) ;
		}
	};

	return rand;
})();


/*
Random String (alpha-numeric)
--------------------------
rand.string(length);


Random String (with special characters)
--------------------------
rand.string(length, true);


Random Number
--------------------------
rand.number(digits);


Random Number (in specified range, include max)
--------------------------
rand.range(min, max);


Random Number (in specified range, exclude max)
--------------------------
rand.range(min, max, true);
*/