function findMinMax(argument){
	let argumentArranged= argument.sort(function (a,b){return a-b});
	const maximum=argumentArranged.pop();
	const minimum=argumentArranged[0];
	//returning the maximum
	if (maximum===minimum){
		return [maximum];
	}else{
		return [minimum,maximum];
	}
	
}