javascript: 
var tellTrainTime = 1;
var tellPercentDone = 1;
var tellInsufficientRes = 1;
var vilConfig;
var resPercentage;
var research;
var configFirst = [0, 0, 5600, 400, 3195, 0, 220, 10];
var configOffensive = [0, 0, 5914, 200, 3309, 0, 220, 10];
var configDefensive = [8645, 0, 0, 200, 0, 1921, 10, 10];
var configChurch = [3660, 0, 0, 200, 0, 762, 10, 10];
var configScout = [0, 0, 0, 10315, 0, 0, 20, 0];
var villageIDs = [142857];

function V1() {
	vilConfig = configFirst;
	resPercentage = prompt('What percentage of resources would you like to use?', 100);
	research = [1, 1, 1, 1, 1, 1, 1, 1];
}
if (window.location.href.indexOf(villageIDs[0]) > -1) {
	V1();
}
else {
	alert("Village Not Found");
}
/**/
function Train() {
	if (research[0] == 1) {
		document.getElementById('spear_0').value = 0;
	}
	if (research[1] == 1) {
		document.getElementById('sword_0').value = 0;
	}
	if (research[2] == 1) {
		document.getElementById('axe_0').value = 0;
	}
	if (research[3] == 1) {
		document.getElementById('spy_0').value = 0;
	}
	if (research[4] == 1) {
		document.getElementById('light_0').value = 0;
	}
	if (research[5] == 1) {
		document.getElementById('heavy_0').value = 0;
	}
	if (research[6] == 1) {
		document.getElementById('ram_0').value = 0;
	}
	if (research[7] == 1) {
		document.getElementById('catapult_0').value = 0;
	}
	var TotalRes = [document.getElementById('wood').textContent, document.getElementById('stone').textContent, document.getElementById('iron').textContent];
	if (research[0] == 1) {
		var td = document.getElementById('spear_0').parentNode.parentNode;
		var tr = td.parentNode;
		var oldSpear = tr.cells[td.cellIndex - 1].innerText.split('/');
	} else {
		var oldSpear = [0, 0];
	}
	if (research[1] == 1) {
		var td1 = document.getElementById('sword_0').parentNode.parentNode;
		var tr1 = td1.parentNode;
		var oldSword = tr1.cells[td1.cellIndex - 1].innerText.split('/');
	} else {
		var oldSword = [0, 0];
	}
	if (research[2] == 1) {
		var td2 = document.getElementById('axe_0').parentNode.parentNode;
		var tr2 = td2.parentNode;
		var oldAxe = tr2.cells[td2.cellIndex - 1].innerText.split('/');
	} else {
		var oldAxe = [0, 0];
	}
	if (research[3] == 1) {
		var td3 = document.getElementById('spy_0').parentNode.parentNode;
		var tr3 = td3.parentNode;
		var oldSpy = tr3.cells[td3.cellIndex - 1].innerText.split('/');
	} else {
		var oldSpy = [0, 0];
	}
	if (research[4] == 1) {
		var td4 = document.getElementById('light_0').parentNode.parentNode;
		var tr4 = td4.parentNode;
		var oldLight = tr4.cells[td4.cellIndex - 1].innerText.split('/');
	} else {
		var oldLight = [0, 0];
	}
	if (research[5] == 1) {
		var td5 = document.getElementById('heavy_0').parentNode.parentNode;
		var tr5 = td5.parentNode;
		var oldHeavy = tr5.cells[td5.cellIndex - 1].innerText.split('/');
	} else {
		var oldHeavy = [0, 0];
	}
	if (research[6] == 1) {
		var td6 = document.getElementById('ram_0').parentNode.parentNode;
		var tr6 = td6.parentNode;
		var oldRam = tr6.cells[td6.cellIndex - 1].innerText.split('/');
	} else {
		var oldRam = [0, 0];
	}
	if (research[7] == 1) {
		var td7 = document.getElementById('catapult_0').parentNode.parentNode;
		var tr7 = td7.parentNode;
		var oldCatapult = tr7.cells[td7.cellIndex - 1].innerText.split('/');
	} else {
		var oldCatapult = [0, 0];
	}
	var oldTroops = [oldSpear[1], oldSword[1], oldAxe[1], oldSpy[1], oldLight[1], oldHeavy[1], oldRam[1], oldCatapult[1]];
	var trainingSpear = 0;
	var trainingSword = 0;
	var trainingAxe = 0;
	var x = document.getElementById('trainqueue_wrap_barracks');
	if (x !== null) {
		var x1 = x.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText.split(' ');
		if (x1[2] == 'Spear' || x1[2] == 'Spear') {
			trainingSpear = Number(x1[1]);
		} else if (x1[2] == 'Swordsmen' || x1[2] == 'Swordsman') {
			trainingSword = Number(x1[1]);
		} else if (x1[2] == 'Axemen' || x1[2] == 'Axeman') {
			trainingAxe = Number(x1[1]);
		}
	}
	var x2 = document.getElementById('trainqueue_barracks');
	if (x2 !== null) {
		var x3 = x2.children.length - 1;
		for (var x4 = 0; x4 < x3; x4++) {
			var x5 = x2.children[x4].firstElementChild.innerText.split(' ');
			if (x5[2] == 'Spear' || x5[2] == 'Spear') {
				trainingSpear = Number(trainingSpear) + Number(x5[1]);
			} else if (x5[2] == 'Swordsmen' || x5[2] == 'Swordsman') {
				trainingSword = Number(trainingSword) + Number(x5[1]);
			} else if (x5[2] == 'Axemen' || x5[2] == 'Axeman') {
				trainingAxe = Number(trainingAxe) + Number(x5[1]);
			}
		}
	}
	var trainingSpy = 0;
	var trainingLight = 0;
	var trainingHeavy = 0;
	var x6 = document.getElementById('trainqueue_wrap_stable');
	if (x6 !== null) {
		var x7 = x6.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText.split(' ');
		if (x7[2] == 'Scouts' || x7[2] == 'Scout') {
			trainingSpy = Number(x7[1]);
		} else if (x7[2] == 'Light') {
			trainingLight = Number(x7[1]);
		} else if (x7[2] == 'Heavy') {
			trainingHeavy = Number(x7[1]);
		}
	}
	var x8 = document.getElementById('trainqueue_stable');
	if (x8 !== null) {
		var x9 = x8.children.length - 1;
		for (var x10 = 0; x10 < x9; x10++) {
			var x11 = x8.children[x10].firstElementChild.innerText.split(' ');
			if (x11[2] == 'Scouts' || x11[2] == 'Scout') {
				trainingSpy = Number(trainingSpy) + Number(x11[1]);
			} else if (x11[2] == 'Light') {
				trainingLight = Number(trainingLight) + Number(x11[1]);
			} else if (x11[2] == 'Heavy') {
				trainingHeavy = Number(trainingHeavy) + Number(x11[1]);
			}
		}
	}
	var trainingRam = 0;
	var trainingCatapult = 0;
	var x12 = document.getElementById('trainqueue_wrap_garage');
	if (x12 !== null) {
		var x13 = x12.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.innerText.split(' ');
		if (x13[2] == 'Rams' || x13[2] == 'Ram') {
			trainingRam = Number(x13[1]);
		} else if (x13[2] == 'Catapults' || x13[2] == 'Catapult') {
			trainingCatapult = Number(x13[1]);
		}
	}
	var x14 = document.getElementById('trainqueue_garage');
	if (x14 !== null) {
		var x15 = x14.children.length - 1;
		for (var x16 = 0; x16 < x15; x16++) {
			var x17 = x14.children[x16].firstElementChild.innerText.split(' ');
			if (x17[2] == 'Rams' || x17[2] == 'Ram') {
				trainingRam = trainingRam + Number(x17[1]);
			} else if (x17[2] == 'Catapults' || x17[2] == 'Catapult') {
				trainingCatapult = trainingCatapult + Number(x17[1]);
			}
		}
	}
	var trainingTroops = [trainingSpear, trainingSword, trainingAxe, trainingSpy, trainingLight, trainingHeavy, trainingRam, trainingCatapult];
	if (research[0] == 1) {
		var spearTimePre = document.getElementById('spear_0_cost_time').innerText.split(':');
		var spearTime = spearTimePre[0] + (Number(spearTimePre[1]) + Number(spearTimePre[2]) / 60) / 60;
	} else {
		var spearTime = 1;
	}
	if (research[1] == 1) {
		var swordTimePre = document.getElementById('sword_0_cost_time').innerText.split(':');
		var swordTime = swordTimePre[0] + (Number(swordTimePre[1]) + Number(swordTimePre[2]) / 60) / 60;
	} else {
		var swordTime = 1;
	}
	if (research[2] == 1) {
		var axeTimePre = document.getElementById('axe_0_cost_time').innerText.split(':');
		var axeTime = axeTimePre[0] + (Number(axeTimePre[1]) + Number(axeTimePre[2]) / 60) / 60;
	} else {
		var axeTime = 1;
	}
	if (research[3] == 1) {
		var spyTimePre = document.getElementById('spy_0_cost_time').innerText.split(':');
		var spyTime = spyTimePre[0] + (Number(spyTimePre[1]) + Number(spyTimePre[2]) / 60) / 60;
	} else {
		var spyTime = 1;
	}
	if (research[4] == 1) {
		var lightTimePre = document.getElementById('light_0_cost_time').innerText.split(':');
		var lightTime = lightTimePre[0] + (Number(lightTimePre[1]) + Number(lightTimePre[2]) / 60) / 60;
	} else {
		var lightTime = 1;
	}
	if (research[5] == 1) {
		var heavyTimePre = document.getElementById('heavy_0_cost_time').innerText.split(':');
		var heavyTime = heavyTimePre[0] + (Number(heavyTimePre[1]) + Number(heavyTimePre[2]) / 60) / 60;
	} else {
		var heavyTime = 1;
	}
	if (research[6] == 1) {
		var ramTimePre = document.getElementById('ram_0_cost_time').innerText.split(':');
		var ramTime = ramTimePre[0] + (Number(ramTimePre[1]) + Number(ramTimePre[2]) / 60) / 60;
	} else {
		var ramTime = 1;
	}
	if (research[7] == 1) {
		var catapultTimePre = document.getElementById('catapult_0_cost_time').innerText.split(':');
		var catapultTime = catapultTimePre[0] + (Number(catapultTimePre[1]) + Number(catapultTimePre[2]) / 60) / 60;
	} else {
		var catapultTime = 1;
	}

	var needSpear = vilConfig[0] - oldTroops[0] - Number(trainingTroops[0]);
	var wantSpear = 0;
	if (Number(oldTroops[0]) + trainingTroops[0] < vilConfig[0]) {
		wantSpear = 1;
	}
	if (research[0] == 0) {
		wantSpear = 0;
	}
	var needSword = vilConfig[1] - oldTroops[1] - trainingTroops[1];
	var wantSword = 0;
	if (Number(oldTroops[1]) + trainingTroops[1] < vilConfig[1]) {
		wantSword = 1;
	}
	if (research[1] == 0) {
		wantSword = 0;
	}
	var needAxe = vilConfig[2] - oldTroops[2] - trainingTroops[2];
	var wantAxe = 0;
	if (Number(oldTroops[2]) + trainingTroops[2] < vilConfig[2]) {
		wantAxe = 1;
	}
	if (research[2] == 0) {
		wantAxe = 0;
	}
	var needSpy = vilConfig[3] - oldTroops[3] - trainingTroops[3];
	var wantSpy = 0;
	if (Number(oldTroops[3]) + trainingTroops[3] < vilConfig[3]) {
		wantSpy = 1;
	}
	if (research[3] == 0) {
		wantSpy = 0;
	}
	var needLight = vilConfig[4] - oldTroops[4] - trainingTroops[4];
	var wantLight = 0;
	if (Number(oldTroops[4]) + trainingTroops[4] < vilConfig[4]) {
		wantLight = 1;
	}
	if (research[4] == 0) {
		wantLight = 0;
	}
	var needHeavy = vilConfig[5] - oldTroops[5] - trainingTroops[5];
	var wantHeavy = 0;
	if (Number(oldTroops[5]) + trainingTroops[5] < vilConfig[5]) {
		wantHeavy = 1;
	}
	if (research[5] == 0) {
		wantHeavy = 0;
	}
	var needRam = vilConfig[6] - oldTroops[6] - trainingTroops[6];
	var wantRam = 0;
	if (Number(oldTroops[6]) + trainingTroops[6] < vilConfig[6]) {
		wantRam = 1;
	}
	if (research[6] == 0) {
		wantRam = 0;
	}
	var needCatapult = vilConfig[7] - oldTroops[7] - trainingTroops[7];
	var wantCatapult = 0;
	if (Number(oldTroops[7]) + trainingTroops[7] < vilConfig[7]) {
		wantCatapult = 1;
	}
	if (research[7] == 0) {
		wantCatapult = 0;
	}
	var needTroops = [needSpear, needSword, needAxe, needSpy, needLight, needHeavy, needRam, needCatapult];
	var barracksQueue = wantSpear + wantSword + wantAxe;
	if (barracksQueue === 0) {
		barracksQueue = 1;
	}
	var stablesQueue = wantSpy + wantLight + wantHeavy;
	if (stablesQueue === 0) {
		stablesQueue = 1;
	}
	var workshopQueue = wantRam + wantCatapult;
	if (workshopQueue === 0) {
		workshopQueue = 1;
	}
	var time = document.getElementById('serverTime').innerText.split(':');
	var date = document.getElementById('serverDate').innerText.split('/');
	var monthLength;
	if (x !== null) {
		if (x2.firstElementChild === null) {
			var barracksTraining1 = x.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.children[2].innerText.split(' ');
			var barracksTraining2 = barracksTraining1;
		} else {
			var barracksTraining1 = x2.children.length - 2;
			var barracksTraining2 = x2.children[barracksTraining1].children[2].innerText.split(' ');
		}
		var barracksTraining3;
		var barracksLength;
		if (barracksTraining2[0] == 'today') {
			barracksTraining3 = [Number(date[0]), date[1]];
			barracksLength = 2;
		} else {
			if (barracksTraining2[0] == 'tomorrow') {
				barracksTraining3 = [Number(date[0]) + 1, date[1]];
				barracksLength = 2;
			} else {
				barracksTraining3 = barracksTraining2[1].split('.');
				barracksLength = 3;
			}
		}
		var barracksTraining4 = 0;
		monthLength = 0;
		for (var barracksTraining5 = date[1]; barracksTraining5 < barracksTraining3[1]; barracksTraining5++) {
			if (barracksTraining5 == 4 || barracksTraining5 == 6 || barracksTraining5 == 9 || barracksTraining5 == 11) {
				monthLength = 30;
			}
			if (barracksTraining5 == 1 || barracksTraining5 == 3 || barracksTraining5 == 5 || barracksTraining5 == 7 || barracksTraining5 == 8 || barracksTraining5 == 10 || barracksTraining5 == 12) {
				monthLength = 31;
			}
			if (barracksTraining5 == 2) {
				monthLength = 28;
			}
			barracksTraining4 = barracksTraining5 + monthLength;
		}
		var barracksTraining6 = Number(barracksTraining3[0]) + Number(barracksTraining4) - Number(date[0]);
		var barracksTraining7 = barracksTraining2[barracksLength].split(':');
		var barracksTraining8 = Number(barracksTraining6) * 24 + Number(barracksTraining7[0]) - Number(time[0]);
		var barracksTraining9 = Number(barracksTraining8) + (Number(barracksTraining7[1]) - Number(time[1])) / 60;
		var barracksTraining = Number(barracksTraining9) + (Number(barracksTraining7[2]) - Number(time[2])) / 3600;
	} else {
		var barracksTraining = 0;
	}
	if (x6 !== null) {
		if (x8.firstElementChild === null) {
			var stablesTraining1 = x6.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.children[2].innerText.split(' ');
			var stablesTraining2 = stablesTraining1;
		} else {
			var stablesTraining1 = x8.children.length - 2;
			var stablesTraining2 = x8.children[stablesTraining1].children[2].innerText.split(' ');
		}
		var stablesTraining3;
		var stablesLength;
		if (stablesTraining2[0] == 'today') {
			stablesTraining3 = [Number(date[0]), date[1]];
			stablesLength = 2;
		} else {
			if (stablesTraining2[0] == 'tomorrow') {
				stablesTraining3 = [Number(date[0]) + 1, date[1]];
				stablesLength = 2;
			} else {
				stablesTraining3 = stablesTraining2[1].split('.');
				stablesLength = 3;
			}
		}
		var stablesTraining4 = 0;
		monthLength = 0;
		for (var stablesTraining5 = date[1]; stablesTraining5 < stablesTraining3[1]; stablesTraining5++) {
			if (stablesTraining5 == 4 || stablesTraining5 == 6 || stablesTraining5 == 9 || stablesTraining5 == 11) {
				monthLength = 30;
			}
			if (stablesTraining5 == 1 || stablesTraining5 == 3 || stablesTraining5 == 5 || stablesTraining5 == 7 || stablesTraining5 == 8 || stablesTraining5 == 10 || stablesTraining5 == 12) {
				monthLength = 31;
			}
			if (stablesTraining5 == 2) {
				monthLength = 28;
			}
			stablesTraining4 = stablesTraining5 + monthLength;
		}
		var stablesTraining6 = Number(stablesTraining3[0]) + Number(stablesTraining4) - Number(date[0]);
		var stablesTraining7 = stablesTraining2[stablesLength].split(':');
		var stablesTraining8 = Number(stablesTraining6) * 24 + Number(stablesTraining7[0]) - Number(time[0]);
		var stablesTraining9 = Number(stablesTraining8) + (Number(stablesTraining7[1]) - Number(time[1])) / 60;
		var stablesTraining = Number(stablesTraining9) + (Number(stablesTraining7[2]) - Number(time[2])) / 3600;
	} else {
		var stablesTraining = 0;
	}

	if (x12 !== null) {
		if (x14.firstElementChild === null) {
			var workshopTraining1 = x12.firstElementChild.firstElementChild.firstElementChild.nextElementSibling.children[2].innerText.split(' ');
			var workshopTraining2 = workshopTraining1;
		} else {
			var workshopTraining1 = x14.children.length - 2;
			var workshopTraining2 = x14.children[workshopTraining1].children[2].innerText.split(' ');
		}
		var workshopTraining3;
		var workshopLength;
		if (workshopTraining2[0] == 'today') {
			workshopTraining3 = [Number(date[0]), date[1]];
			workshopLength = 2;
		} else {
			if (workshopTraining2[0] == 'tomorrow') {
				workshopTraining3 = [Number(date[0]) + 1, date[1]];
				workshopLength = 2;
			} else {
				workshopTraining3 = workshopTraining2[1].split('.');
				workshopLength = 3;
			}
		}
		var workshopTraining4 = 0;
		monthLength = 0;
		for (var workshopTraining5 = date[1]; workshopTraining5 < workshopTraining3[1]; workshopTraining5++) {
			if (workshopTraining5 == 4 || workshopTraining5 == 6 || workshopTraining5 == 9 || workshopTraining5 == 11) {
				monthLength = 30;
			}
			if (workshopTraining5 == 1 || workshopTraining5 == 3 || workshopTraining5 == 5 || workshopTraining5 == 7 || workshopTraining5 == 8 || workshopTraining5 == 10 || workshopTraining5 == 12) {
				monthLength = 31;
			}
			if (workshopTraining5 == 2) {
				monthLength = 28;
			}
			workshopTraining4 = workshopTraining5 + monthLength;
		}
		var workshopTraining6 = Number(workshopTraining3[0]) + Number(workshopTraining4) - Number(date[0]);
		var workshopTraining7 = workshopTraining2[workshopLength].split(':');
		var workshopTraining8 = Number(workshopTraining6) * 24 + Number(workshopTraining7[0]) - Number(time[0]);
		var workshopTraining9 = Number(workshopTraining8) + (Number(workshopTraining7[1]) - Number(time[1])) / 60;
		var workshopTraining = Number(workshopTraining9) + (Number(workshopTraining7[2]) - Number(time[2])) / 3600;
	} else {
		var workshopTraining = 0;
	}
	var stablesMbarracks = stablesTraining - barracksTraining;
	if (wantSpy === 0 && wantLight === 0 && wantHeavy === 0) {
		stablesMbarracks = 0;
	}
	var workshopMbarracks = workshopTraining - barracksTraining;
	if (wantRam === 0 && wantCatapult === 0) {
		workshopMbarracks = 0;
	}
	var barracksTimeChanger = 0;
	if (stablesMbarracks < 0) {
		barracksTimeChanger++;
	}
	if (workshopMbarracks < 0) {
		barracksTimeChanger++;
	}
	if (barracksTimeChanger === 0) {
		barracksTimeChanger = 1;
	}
	var barracksTimeFactor = (stablesMbarracks + workshopMbarracks) / barracksTimeChanger;
	if (barracksTimeFactor > 0) {
		barracksTimeFactor = 0;
	}
	var barracksMstables = barracksTraining - stablesTraining;
	if (wantSpear === 0 && wantSword === 0 && wantAxe === 0) {
		barracksMstables = 0;
	}
	var workshopMstables = workshopTraining - stablesTraining;
	if (wantRam === 0 && wantCatapult === 0) {
		workshopMstables = 0;
	}
	var stablesTimeChanger = 0;
	if (barracksMstables < 0) {
		stablesTimeChanger++;
	}
	if (workshopMstables < 0) {
		stablesTimeChanger++;
	}
	if (stablesTimeChanger === 0) {
		stablesTimeChanger = 1;
	}
	var stablesTimeFactor = (barracksMstables + workshopMstables) / stablesTimeChanger;
	if (stablesTimeFactor > 0) {
		stablesTimeFactor = 0;
	}
	var barracksMworkshop = barracksTraining - workshopTraining;
	if (wantSpear === 0 && wantSword === 0 && wantAxe === 0) {
		barracksMworkshop = 0;
	}
	var stablesMworkshop = stablesTraining - workshopTraining;
	if (wantSpy === 0 && wantLight === 0 && wantHeavy === 0) {
		stablesMworkshop = 0;
	}
	var workshopTimeChanger = 0;
	if (stablesMworkshop < 0) {
		workshopTimeChanger++;
	}
	if (barracksMworkshop < 0) {
		workshopTimeChanger++;
	}
	if (workshopTimeChanger === 0) {
		workshopTimeChanger = 1;
	}
	var workshopTimeFactor = (barracksMworkshop + stablesMworkshop) / workshopTimeChanger;
	if (workshopTimeFactor > 0) {
		workshopTimeFactor = 0;
	}
  
	var troopMultiplier = Math.max(spearTime * wantSpear, swordTime * wantSword, axeTime * wantAxe, spyTime * wantSpy, lightTime * wantLight, heavyTime * wantHeavy, ramTime * wantRam, catapultTime * wantCatapult);
	if (troopMultiplier == catapultTime && wantRam == 1) {
		troopMultiplier = troopMultiplier * 2;
	}
	barracksTimeFactor = barracksTimeFactor / troopMultiplier;
	stablesTimeFactor = stablesTimeFactor / troopMultiplier;
	workshopTimeFactor = workshopTimeFactor / troopMultiplier;

	if (research[0] == 1) {
		var hourlySpear = troopMultiplier / spearTime;
		if (hourlySpear > needSpear) {
			hourlySpear = needSpear;
		}
		if (hourlySpear < 0) {
			hourlySpear = 0;
		}
	} else {
		var hourlySpear = 0;
	}
	var spearCost = [50, 30, 10];
	if (research[1] == 1) {
		var hourlySword = troopMultiplier / swordTime;
		if (hourlySword > needSword) {
			hourlySword = needSword;
		}
		if (hourlySword < 0) {
			hourlySword = 0;
		}
	} else {
		var hourlySword = 0;
	}
	var swordCost = [30, 30, 70];
	if (research[2] == 1) {
		var hourlyAxe = troopMultiplier / axeTime;
		if (hourlyAxe > needAxe) {
			hourlyAxe = needAxe;
		}
		if (hourlyAxe < 0) {
			hourlyAxe = 0;
		}
	} else {
		var hourlyAxe = 0;
	}
	var axeCost = [60, 30, 40];
	if (research[3] == 1) {
		var hourlySpy = troopMultiplier / spyTime;
		if (hourlySpy > needSpy) {
			hourlySpy = needSpy;
		}
		if (hourlySpy < 0) {
			hourlySpy = 0;
		}
	} else {
		var hourlySpy = 0;
	}
	var spyCost = [50, 50, 20];
	if (research[4] == 1) {
		var hourlyLight = troopMultiplier / lightTime;
		if (hourlyLight > needLight) {
			hourlyLight = needLight;
		}
		if (hourlyLight < 0) {
			hourlyLight = 0;
		}
	} else {
		var hourlyLight = 0;
	}
	var lightCost = [125, 100, 250];
	if (research[5] == 1) {
		var hourlyHeavy = troopMultiplier / heavyTime;
		if (hourlyHeavy > needHeavy) {
			hourlyHeavy = needHeavy;
		}
		if (hourlyHeavy < 0) {
			hourlyHeavy = 0;
		}
	} else {
		var hourlyHeavy = 0;
	}
	var heavyCost = [200, 150, 600];
	if (research[6] == 1) {
		var hourlyRam = troopMultiplier / ramTime;
		if (hourlyRam > needRam) {
			hourlyRam = needRam;
		}
		if (hourlyRam < 0) {
			hourlyRam = 0;
		}
	} else {
		var hourlyRam = 0;
	}
	var ramCost = [300, 200, 200];
	if (research[7] == 1) {
		var hourlyCatapult = troopMultiplier / catapultTime;
		if (hourlyCatapult > needCatapult) {
			hourlyCatapult = needCatapult;
		}
		if (hourlyCatapult < 0) {
			hourlyCatapult = 0;
		}
	} else {
		var hourlyCatapult = 0;
	}
	var catapultCost = [320, 400, 100];
	
	var hourlySpearCost = [hourlySpear * spearCost[0] / barracksQueue, hourlySpear * spearCost[1] / barracksQueue, hourlySpear * spearCost[2] / barracksQueue];
	var hourlySwordCost = [hourlySword * swordCost[0] / barracksQueue, hourlySword * swordCost[1] / barracksQueue, hourlySword * swordCost[2] / barracksQueue];
	var hourlyAxeCost = [hourlyAxe * axeCost[0] / barracksQueue, hourlyAxe * axeCost[1] / barracksQueue, hourlyAxe * axeCost[2] / barracksQueue];
	var hourlySpyCost = [hourlySpy * spyCost[0] / stablesQueue, hourlySpy * spyCost[1] / stablesQueue, hourlySpy * spyCost[2] / stablesQueue];
	var hourlyLightCost = [hourlyLight * lightCost[0] / stablesQueue, hourlyLight * lightCost[1] / stablesQueue, hourlyLight * lightCost[2] / stablesQueue];
	var hourlyHeavyCost = [hourlyHeavy * heavyCost[0] / stablesQueue, hourlyHeavy * heavyCost[1] / stablesQueue, hourlyHeavy * heavyCost[2] / stablesQueue];
	var hourlyRamCost = [hourlyRam * ramCost[0] / workshopQueue, hourlyRam * ramCost[1] / workshopQueue, hourlyRam * ramCost[2] / workshopQueue];
	var hourlyCatapultCost = [hourlyCatapult * catapultCost[0] / workshopQueue, hourlyCatapult * catapultCost[1] / workshopQueue, hourlyCatapult * catapultCost[2] / workshopQueue];
	var totalHourlyCostWood = hourlyAxeCost[0] + hourlyCatapultCost[0] + hourlyHeavyCost[0] + hourlyLightCost[0] + hourlyRamCost[0] + hourlySpyCost[0] + hourlySpearCost[0] + hourlySwordCost[0];
	var totalHourlyCostClay = hourlyAxeCost[1] + hourlyCatapultCost[1] + hourlyHeavyCost[1] + hourlyLightCost[1] + hourlyRamCost[1] + hourlySpyCost[1] + hourlySpearCost[1] + hourlySwordCost[1];
	var totalHourlyCostIron = hourlyAxeCost[2] + hourlyCatapultCost[2] + hourlyHeavyCost[2] + hourlyLightCost[2] + hourlyRamCost[2] + hourlySpyCost[2] + hourlySpearCost[2] + hourlySwordCost[2];
	var hoursWood = TotalRes[0] / totalHourlyCostWood * resPercentage / 100;
	var hoursClay = TotalRes[1] / totalHourlyCostClay * resPercentage / 100;
	var hoursIron = TotalRes[2] / totalHourlyCostIron * resPercentage / 100;
	var hoursTrain = Math.floor(Math.min(hoursWood, hoursClay, hoursIron));
	if(hoursTrain === 0 && tellInsufficientRes === 1) {
		var toGoWood = Math.ceil(totalHourlyCostWood - TotalRes[0]);
		if(toGoWood < 0) {
			toGoWood = 0;
		}
		var toGoClay = Math.ceil(totalHourlyCostClay - TotalRes[1]);
		if(toGoClay < 0) {
			toGoClay = 0;
		}
		var toGoIron = Math.ceil(totalHourlyCostIron - TotalRes[2]);
		if(toGoIron < 0) {
			toGoIron = 0;
		}
		var resMessage;
		if (toGoWood !== 0 && toGoClay !== 0 && toGoIron !== 0) {
			resMessage = toGoWood + ' wood, ' + toGoClay + ' clay, and ' + toGoIron + ' more iron.';
		}
		else if (toGoWood !== 0 && toGoClay !== 0) {
			resMessage = toGoWood + ' wood and ' + toGoClay + ' more clay.';
		}
		else if (toGoClay !== 0 && toGoIron !== 0) {
			resMessage = toGoClay + ' clay and ' + toGoIron + ' more iron.';
		}
		else if (toGoWood !== 0 && toGoIron !== 0) {
			resMessage = toGoWood + ' wood and ' + toGoIron + ' more iron.';
		}
		else if (toGoWood !== 0) {
			resMessage = toGoWood + ' more wood.';
		}
		else if (toGoClay !== 0) {
			resMessage = toGoClay + ' more clay.';
		}
		else if (toGoIron !== 0) {
			resMessage = toGoIron + ' more iron.';
		}
		resMessage = 'You do not have enough resources!\nYou need to get ' + resMessage;
	}
	if(-barracksTimeFactor > hoursTrain) {
		barracksTimeFactor = -hoursTrain;
	}
	if(-stablesTimeFactor > hoursTrain) {
		stablesTimeFactor = -hoursTrain;
	}
	if(-workshopTimeFactor > hoursTrain) {
		workshopTimeFactor = -hoursTrain;
	}
	var barracksExtraTime = 0;
	var stablesExtraTime = 0;
	var workshopExtraTime = 0;
	
	if (research[0] == 1) {
		var spearsToTrain = Math.floor((hoursTrain + barracksTimeFactor + barracksExtraTime) * hourlySpear / barracksQueue);
		if (spearsToTrain > needSpear) {
			spearsToTrain = needSpear;
			barracksExtraTime += (hourlySpear - needSpear) * spearTime;
		}
	}
	else {
		var spearsToTrain = 0;
	}
	if (research[1] == 1) {
		var swordsToTrain = Math.floor((hoursTrain + barracksTimeFactor + barracksExtraTime) * hourlySword / barracksQueue);
		if (swordsToTrain > needSword) {
			swordsToTrain = needSword;
			barracksExtraTime += (hourlySword - needSword) * swordTime;
		}
	}
	else {
		var swordsToTrain = 0;
	}
	if (research[2] == 1) {
		var axesToTrain = Math.floor((hoursTrain + barracksTimeFactor + barracksExtraTime) * hourlyAxe / barracksQueue);
		if (axesToTrain > needAxe) {
			axesToTrain = needAxe;
			barracksExtraTime += (hourlyAxe - needAxe) * axeTime;
		}
	}
	else {
		var axesToTrain = 0;
	}
	if (barracksExtraTime > 0 && research[0] == 1 && spearsToTrain != needSpear) {
		spearsToTrain = Math.floor((hoursTrain + barracksTimeFactor + barracksExtraTime) * hourlySpear / barracksQueue);
		document.getElementById('spear_0').value = spearsToTrain;
	}
	else if (research[0] == 1) {
		document.getElementById('spear_0').value = spearsToTrain;
	}
	if (barracksExtraTime > 0 && research[1] == 1 && swordsToTrain != needSword) {
		var swordsToTrain = Math.floor((hoursTrain + barracksTimeFactor + barracksExtraTime) * hourlySword / barracksQueue);
		document.getElementById('sword_0').value = swordsToTrain;
	}
	else if (research[1] == 1) {
		document.getElementById('sword_0').value = swordsToTrain;;
	}
	if (research[2] == 1) {
		document.getElementById('axe_0').value = axesToTrain;
	}
	if (research[3] == 1) {
		var spiesToTrain = Math.floor((hoursTrain + stablesTimeFactor + stablesExtraTime) * hourlySpy / stablesQueue);
		if (spiesToTrain > needSpy) {
			spiesToTrain = needSpy;
			stablesExtraTime += (hourlySpy - needSpy) * spyTime;
		}
	}
	else {
		var spiesToTrain = 0;
	}
	if (research[4] == 1) {
		var lightToTrain = Math.floor((hoursTrain + stablesTimeFactor + stablesExtraTime) * hourlyLight / stablesQueue);
		if (lightToTrain > needLight) {
			lightToTrain = needLight;
			stablesExtraTime += (hourlyLight - needLight) * lightTime;
		}
	}
	else {
		var lightToTrain = 0;
	}
	if (research[5] == 1) {
		var heavyToTrain = Math.floor((hoursTrain + stablesTimeFactor + stablesExtraTime) * hourlyHeavy / stablesQueue);
		if (heavyToTrain > needHeavy) {
			heavyToTrain = needHeavy;
			stablesExtraTime += (hourlyHeavy - needHeavy) * heavyTime;
		}
	}
	else {
		var heavyToTrain = 0;
	}
	
	if (stablesExtraTime > 0 && research[3] == 1 && spiesToTrain != needSpy) {
		spiesToTrain = Math.floor((hoursTrain + stablesTimeFactor + stablesExtraTime) * hourlySpy / stablesQueue);
		document.getElementById('spy_0').value = spiesToTrain;
	}
	else if (research[3] == 1) {
		document.getElementById('spy_0').value = spiesToTrain;
	}
	if (stablesExtraTime > 0 && research[4] == 1 && spiesToTrain != needSpy) {
		var lightToTrain = Math.floor((hoursTrain + stablesTimeFactor + stablesExtraTime) * hourlyLight / stablesQueue);
		document.getElementById('light_0').value = lightToTrain;
	}
	else if (research[4] == 1) {
		document.getElementById('light_0').value = lightToTrain;
	}
	if (research[5] == 1) {
		document.getElementById('heavy_0').value = heavyToTrain;
	}
	
	if (research[6] == 1) {
		var ramsToTrain = Math.floor((hoursTrain + workshopTimeFactor + workshopExtraTime) * hourlyRam / workshopQueue);
		if (ramsToTrain > needRam) {
			ramsToTrain = needRam;
			workshopExtraTime += (hourlyRam - needRam) * ramTime;
		}
	}
	else {
		var ramsToTrain = 0;
	}
	if (research[7] == 1) {
		var catapultsToTrain = Math.floor((hoursTrain + workshopTimeFactor + workshopExtraTime) * hourlyCatapult / workshopQueue);
		if (catapultsToTrain > needCatapult) {
			catapultsToTrain = needCatapult;
			workshopExtraTime += (hourlyCatapult - needCatapult) * catapultTime;
		}
	}
	else {
		var catapultsToTrain = 0;
	}
	
	if (workshopExtraTime > 0 && research[6] == 1 && ramsToTrain != needRam) {
		ramsToTrain = Math.floor((hoursTrain + workshopTimeFactor + workshopExtraTime) * hourlyRam / workshopQueue);
		document.getElementById('ram_0').value = ramsToTrain;
	}
	else if (research[6] == 1) {
		document.getElementById('ram_0').value = ramsToTrain;
	}
	if (research[7] == 1) {
		document.getElementById('catapult_0').value = catapultsToTrain;
	}
	
	var percentTroops = 8;
	var toGoSpear = vilConfig[0] - spearsToTrain - trainingSpear - oldSpear[1];
	if (toGoSpear == NaN) {
		toGoSpear = 0;
	}
	var timeToGoSpear = spearTime * (trainingSpear + toGoSpear);
	var percentSpearDone = (spearsToTrain + trainingSpear + Number(oldSpear[1]));
	if (vilConfig[0] == 0) {
		percentSpearDone = 0;
		percentTroops--;
	}
	var toGoSword = vilConfig[1] - swordsToTrain - trainingSword - oldSword[1];
	if (toGoSword == NaN) {
		toGoSword = 0;
	}
	var timeToGoSword = swordTime * (trainingSword + toGoSword);
	var percentSwordDone = (swordsToTrain + trainingSword + Number(oldSword[1]));
	if (vilConfig[1] == 0) {
		percentSwordDone = 0;
		percentTroops--;
	}
	var toGoAxe = vilConfig[2] - axesToTrain - trainingAxe - oldAxe[1];
	if (toGoAxe == NaN) {
		toGoAxe = 0;
	}
	var timeToGoAxe = axeTime * (trainingAxe + toGoAxe);
	var percentAxeDone = (axesToTrain + trainingAxe + Number(oldAxe[1]));
	if (vilConfig[2] == 0) {
		percentAxeDone = 0;
		percentTroops--;
	}
	var timeToGoBarracks = timeToGoSpear + timeToGoSword + timeToGoAxe;
	var toGoSpy = vilConfig[3] - spiesToTrain - trainingSpy - oldSpy[1];
	if (toGoSpy == NaN) {
		toGoSpy = 0;
	}
	var timeToGoSpy = spyTime * (trainingSpy + toGoSpy);
	var percentSpyDone = (spiesToTrain + trainingSpy + Number(oldSpy[1]));
	if (vilConfig[3] == 0) {
		percentSpyDone = 0;
		percentTroops--;
	}
	var toGoLight = vilConfig[4] - lightToTrain - trainingLight - oldLight[1];
	if (toGoLight == NaN) {
		toGoLight = 0;
	}
	var timeToGoLight = lightTime * (trainingLight + toGoLight);
	var percentLightDone = (lightToTrain + trainingLight + Number(oldLight[1]));
	if (vilConfig[4] == 0) {
		percentLightDone = 0;
		percentTroops--;
	}
	var toGoHeavy = vilConfig[5] - heavyToTrain - trainingHeavy - oldHeavy[1];
	if (toGoHeavy == NaN) {
		toGoHeavy = 0;
	}
	var timeToGoHeavy = heavyTime * (trainingHeavy + toGoHeavy);
	var percentHeavyDone = (heavyToTrain + trainingHeavy + Number(oldHeavy[1]));
	if (vilConfig[5] == 0) {
		percentHeavyDone = 0;
		percentTroops--;
	}
	var timeToGoStables = timeToGoSpy + timeToGoLight + timeToGoHeavy;
	var toGoRam = vilConfig[6] - ramsToTrain - trainingRam - oldRam[1];
	if (toGoRam == NaN) {
		toGoRam = 0;
	}
	var timeToGoRam = ramTime * (trainingRam + toGoRam);
	var percentRamDone = (ramsToTrain + trainingRam + Number(oldRam[1]));
	if (vilConfig[6] == 0) {
		percentRamDone = 0;
		percentTroops--;
	}
	var toGoCatapult = vilConfig[7] - catapultsToTrain - trainingCatapult - oldCatapult[1];
	if (toGoCatapult == NaN) {
		toGoCatapult = 0;
	}
	var timeToGoCatapult = catapultTime * (trainingCatapult + toGoCatapult);
	var percentCatapultDone = (catapultsToTrain + trainingCatapult + Number(oldCatapult[1]));
	if (vilConfig[7] == 0) {
		percentCatapultDone = 0;
		percentTroops--;
	}
	var timeToGoWorkshop = timeToGoRam + timeToGoCatapult;
	var percentDonePre = (percentSpearDone + percentSwordDone + percentAxeDone + percentSpyDone + percentLightDone + percentHeavyDone + percentRamDone + percentCatapultDone) / (percentTroops + vilConfig[0] + vilConfig[1] + vilConfig[2] + vilConfig[3] + vilConfig[4] + vilConfig[5] + vilConfig[6] + vilConfig[7]) * 100;
	percentDonePre = Math.floor(percentDonePre);
	var percentDone = percentDonePre + '% of training paid for';
	var timeToGoPre = Math.max(timeToGoBarracks, timeToGoStables, timeToGoWorkshop);
	timeToGoPre = Math.round(timeToGoPre);
	if (timeToGoPre > 24) {
		var daysToGo = Math.floor(timeToGoPre / 24);
		timeToGoPre = timeToGoPre - (daysToGo * 24);
	}
	var pluralDay = 'days';
	if (daysToGo == 1) {
		pluralDay = 'day';
	}
	var pluralHour = 'hours';
	if (timeToGoPre == 1) {
		pluralHour = 'hour';
	}
	var timeToGo = daysToGo + ' ' + pluralDay + ' and ' + timeToGoPre + ' ' + pluralHour + ' of training to go';
	var message;
	if (tellPercentDone == 1 && tellTrainTime == 1) {
		message = percentDone + ', and\n' + timeToGo;
	} else if (tellTrainTime == 0 && tellPercentDone == 1) {
		message = percentDone;
	} else if (tellPercentDone == 0 && tellTrainTime == 1) {
		message = timeToGo;
	}
	if (resMessage !== undefined && message !== undefined) {
		alert(resMessage + '\nHowever, you have ' + message);
	}
	else if (resMessage !== undefined) {
		alert(resMessage);
	}
	else if (message !== undefined) {
		alert(message);
	}
	document.getElementById('spear_0').focus();
}
Train();
