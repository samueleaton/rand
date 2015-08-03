var rand = (function(){

	var specialChars = "#!?@$&_";

	var charMap = {};
	charMap.numeric = "1234567890";
	charMap.alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	charMap.alphaNumeric = charMap.alpha + charMap.numeric;
	charMap.special = charMap.alphaNumeric + specialChars;

	var rand = {

		shuffle: function(string){
			var type = typeof string;
			string = (string+'').split('');
			for (var i = string.length; i > 0;) {
				var random = parseInt(Math.random() * i);
				var temp = string[--i];
				string[i] = string[random];
				string[random] = temp;
			}

			return (type === "number") ? +string.join('') : string.join('');
		},
		
		string: function(length, specialChars){
			length = length || 16;
			var map = rand.shuffle(charMap[( specialChars  ? "special" : "alphaNumeric" )]);
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
