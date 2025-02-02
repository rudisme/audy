
var string = "اللهم اجْعَلْهُ بَارًّا تَقِيًّا رَشِيْدًا وَأَنْبِتْهُ فِي الْإِسْلَامِ نَبَاتًا حَسَنًا"; /* type your text here */
var array = string.split("");
var timer;

function frameLooper () {
	if (array.length > 0) {
		document.getElementById("text").innerHTML += array.shift();
	} else {
		clearTimeout(timer);
			}
	loopTimer = setTimeout('frameLooper()',70); /* change 70 for speed */

}
frameLooper();
