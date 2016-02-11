
var accumulate = function(list,callback){
	var storage = [];
		for(var i=0;i<list.length;i++){
			storage.push(callback(list[i]));
		}
	return storage;
};


module.exports = accumulate;
