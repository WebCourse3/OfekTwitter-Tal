// (function () {
// 	window.onload(test_group('Test', function () {
// 		assert(true, 'test the');
// 		assert(true, 'test blow');
// 		assert(true, 'test the');
// 	}));
//
// 	function test_group() {
// 		var frame = document.createElement('div');
// 		frame.classList.add('row', 'col-xs-8', 'panel', 'panel-info');
// 		var title = document.createElement('label');
// 		title.innerHTML = 'testing the user page';
// 		frame.appendChild(title);
//
// 	}
//
// 	function test_group() {
//
// 	}
// });



test_group('WALLA AVARTI',
	function () {
		assert(false, 'blablabla');
		assert(true, 'blablabla');
		assert(true, 'blablabla');
	});


function test_group(groupName, assertsFunction) {
	this.panelDiv = document.createElement('div');
	this.panelDiv.classList.add('test-succeed', 'row', 'panel', 'panel-default', 'col-xs-offset-4', 'col-xs-4');
	var title = document.createElement('h4');
	title.innerHTML = groupName;
	this.panelDiv.appendChild(title);
	var htmlBody = document.getElementsByTagName('body');
	htmlBody[0].appendChild(this.panelDiv);

	assertsFunction.bind(this)();
}

function assert(testPassed, testName) {
	var testDiv = document.createElement('div');
	testDiv.classList.add('panel', 'panel-default', 'col-xs-offset-3', 'col-xs-6');
	if (testPassed)
		testDiv.classList.add('test', 'panel-success');
	else {
		testDiv.classList.add('test', 'panel-danger');
		this.panelDiv.classList.remove('test-succeed');
		this.panelDiv.classList.add('test-failed');
	}
	var labelEle = document.createElement('label');
	labelEle.innerHTML = testName;
	testDiv.appendChild(labelEle);

	this.panelDiv.appendChild(testDiv);

	return testDiv;
}