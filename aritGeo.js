function aritGeo(array){
	/*
	This function will determine if an array input is Arithmetic or geometric
	and return 'Arithmetic' or 'Geometric' if found or -1 if neither.
	*/

	let firstTerm,commonDifference,commonRatio,lastTermOfArit,lastTermOfGeo,numberOfTerms;
	if (array.length===0){
		//empty array is returned
		return [];
	}else if(array.length==1){
			return -1;
	}
	else if (array[0]===0){
		// for arrays that start with zaro.
		firstTerm=array[0];
		commonDifference=array[2]-array[1];
		commonRatio=array[1]/array[0];
		numberOfTerms=array.length;
		lastTermOfArit=firstTerm+((numberOfTerms-1)*commonDifference);
		lastTermOfGeo=firstTerm*(commonRatio**(numberOfTerms-1));
		//computing for the last the last term and comparing it with the value in the array
		if (lastTermOfArit===array[numberOfTerms-1]){
			return 'Arithmetic';
		}else if(lastTermOfGeo===array[numberOfTerms-1]){
			return 'Geometric';

		}else{
			return -1;
		}

	}
	if (array.length>2){
		// same concept as above implementes
		firstTerm=array[0];
		commonDifference=array[1]-array[0];
		commonRatio=array[1]/array[0];
		numberOfTerms=array.length;
		lastTermOfArit=firstTerm+((numberOfTerms-1)*commonDifference);
		lastTermOfGeo=firstTerm*(commonRatio**(numberOfTerms-1));
		//computing for the last the last term and comparing it with the value in the array
		if (lastTermOfArit===array[numberOfTerms-1]){
			return 'Arithmetic';
		}else if(lastTermOfGeo===array[numberOfTerms-1]){
			return 'Geometric';

		}else{
			return -1;
		}


	}else{
		return 'arrays with two elements not allowed'
	}

}