function $(typeDiv) {
	return new ofekQuery(typeDiv);
}

var ofekQuery = function (typeDiv) {

		this.elements = [];
		switch (typeDiv.charAt(0)) {
			case '#' : {
				typeDiv : typeDiv.substring(1, typeDiv.length);
				this.elements = document.getElementById(typeDiv);
			}
			case '.' : {
				typeDiv = typeDiv.substring(1, typeDiv.length);
				this.elements = document.getElementsByClassName(typeDiv);
			}
			default:
				if (typeDiv.indexOf('.') > -1) {
					var arrayTypes = typeDiv.split(' ');
					var arrayTag = document.getElementsByTagName(arrayTypes[0]);
					this.elements = getbyname(arrayTag, arrayTypes[1], 0);
				}
				else {
					if (typeDiv.indexOf(' ') > -1) {
						var arrayTypes = typeDiv.split(' ');
						var arrayTag = document.getElementsByTagName(arrayTypes[0]);
						for (var i = 1; i < arrayTypes.length; i++) {
							arrayTag = getbyname(arrayTag, arrayTypes[i].toUpperCase(), 1);
						}
						this.elements = arrayTag;
					}

					else
						this.elements = document.getElementsByClassName(typeDiv);
				}
			// if (typeDiv.includes('.')==true) {
			// 	var index = typeDiv.indexOf('.');
			// 	var tag = typeDiv.substr(0, index);
			// 	var dant = typeDiv.substr(index + 1);
			// 	//var OfekQuery = document.getElementsByTagName(tag);
			// 	 var OfekQuery =document.getElementsByClassName(dant);
			// 	 for(var i=0; i<OfekQuery.length;i++){
			// 	 	if(!(OfekQuery[i].parentNode.nodeName == tag))
			// 	 		OfekQuery.remove(i);
			// 	 }
			// }
			// else{
			// 	var OfekQuery = document.getElementsByTagName(typeDiv);
			// }

		}

		function getbyname(parents, children_name, index) {

			for (var i = 0; i < parents.length; i++) {
				var c = parents[i].children;
				if (index === 1)
					return gettagname(c, children_name);
				else
					return getclassname(c, children_name);

			}
		}

		function getclassname(c, children_name) {
			var x = [];
			for (var j = 0; j < c.length; j++) {
				x = x.push(c[j].getElementsByClassName(children_name));
			}
			return x;
		}

		function gettagname(c, children_name) {
			var x = [];
			for (var j = 0; j < c.length; j++) {
				if (c[j].tagName === children_name)
					x.push(c[j]);
			}
			return x;
		}

		this.map = function (fn) {
			var newArray = new Array(this.elements.length);
			var count = this.elements.length;
			for (var i = 0; i < count; i++)
				newArray[i] = this.elements[i].cloneNode(true);
			for (var i = 0; i < newArray.length; i++)
				fn(newArray[i]);
			return newArray;
		};

		this.each = function (fn) {
			for (var i = 0; i < this.elements.length; i++)
				fn(this.elements[i]);
		};

		this.any = function () {
			var flag = false;
			for (var a = 0; a < this.elements.length; a++) {
				if (check(arguments, this.elements[a]))
					return true;
			}
			return false;
		};

		function check(arguments, elm) {
			for (var i = 0; i < arguments.length; i++) {
				if (!arguments[i](elm))
					return false;
			}
			return true;
		}

		this.all = function () {
			var flag = true;
			for (var a = 0; a < this.elements.length; a++) {
				for (var i = 0; i < arguments.length; i++) {
					if (!arguments[i](this.elements[a])) {
						return false;
						break;
					}
				}
			}
			return true;
		};
		this.css = function (property, value) {

		};
		this.count = function () {
			return this.elements.children.length;
		};

// var name = "gdfgdfgd";
// this.name = "Adasdasd";
// this.func = function (name) {
// 	console.log(name);
// };
	}
;

ofekQuery.addClass = function (class_name) {
	ofekQuery.classList.add(class_name);
};

ofekQuery.removeClass = function (class_name) {
	ofekQuery.classList.remove(class_name);
};

// ofekQuery.map= function (fn) {
// 	var newArray = new Array(ofekQuery.length);
// 	for(var i=0; i<ofekQuery.length; i++)
// 		newArray[i]=ofekQuery[i];
// 	newArray.each(fn);
// 	return newArray;
// };