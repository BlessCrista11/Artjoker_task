const mainFunc = rawPromo => {
	if (checkAndCountDigits(rawPromo) !== 8) {
		return 0;
	}

	let promo = digitToArray(rawPromo);
	let result = isPromo1000Or2000(promo);

	if (result === 0) {
		result = isPromo100OrInvalid(promo);
	}

	return result;
};

const checkAndCountDigits = inputValue => {
	if (typeof inputValue !== 'number') {
		return 0;
	}

	for (var i = 0; inputValue > 1; i++) {
		inputValue /= 10;
	}

	return i;
};

const digitToArray = value => {
	let promo = [];
	while (value >= 1) {
		let digit = value % 10;
		value = (value - digit) / 10;
		promo.unshift(digit);
	}

	return promo;
};

const isPromo1000Or2000 = promo => {
	let firstPairArr = [];
	let secondPairArr = [];

	for (let i = 1; i < promo.length; i++) {
		let isCurrentNumberOdd = promo[i] % 2 !== 0;
		let isPreviousNumberOdd = promo[i - 1] % 2 !== 0;

		if (!isCurrentNumberOdd || !isPreviousNumberOdd) {
			continue;
		}

		let isNextNumberEven = true;
		if (i + 1 < promo.length) {
			isNextNumberEven = promo[i + 1] % 2 === 0;
		}

		if (firstPairArr.length === 0 && isNextNumberEven) {
			firstPairArr.push(promo[i - 1], promo[i]);
			continue;
		}

		if (
			secondPairArr.length === 0 &&
			(isNextNumberEven || promo.length === i)
		) {
			secondPairArr.push(promo[i - 1], promo[i]);
		}

		if (firstPairArr.length > 0 && secondPairArr.length > 0) {
			break;
		}
	}

	if (firstPairArr.length < 2 || secondPairArr.length < 2) {
		return 0;
	}

	if (
		firstPairArr[0] < firstPairArr[1] &&
		secondPairArr[0] < secondPairArr[1]
	) {
		return 2000;
	}

	return 1000;
};

const isPromo100OrInvalid = promo => {
	let sumOfEvenDigits = 0;
	let sumOfOddDigits = 0;

	for (let i = 0; i < promo.length; i++) {
		if (promo[i] % 2 === 0) {
			sumOfEvenDigits += promo[i];
		} else {
			sumOfOddDigits += promo[i];
		}
	}

	if (sumOfEvenDigits > sumOfOddDigits) {
		return 100;
	}

	return 0;
};
