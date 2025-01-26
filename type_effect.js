// set up text to print, each item in array is new line
var aText = new Array(
"Dalam senyap malam yang khidmat,",
"lahirlah kau, titisan cahaya yang hangat.",
"Audy Jessenia Shanum, namamu dilantunkan,",
"seperti melodi doa yang tak henti disematkan.",
"",
"Audy, laksana mentari di pagi pertama,",
"membuka harapan pada hari yang menyapa.",
"Namamu bersinar, menembus gelap,",
"membangkitkan cinta yang tak pernah lenyap.",
"",
"Jessenia, bunga yang merekah di taman jiwa,",
"wangimu lembut, membawa cinta yang nyata.",
"Engkau bagaikan bait puisi alam,",
"memeluk dunia dengan pesona yang dalam.",
"",
"Shanum, kedamaian yang turun dari langit,", 
"membelai lembut setiap hati yang sempit.",
"Namamu adalah mantra kebahagiaan,",
"menghidupkan harapan, menenun kedamaian.",
"",
"Kau adalah jawaban dari mimpi yang panjang,",
"hadirmu indah, bagai nyanyian bintang.",
"Dalam dekap kasih, kau temukan dunia,",
"dipenuhi cinta yang tak pernah sirna.",
"",
"Audy Jessenia Shanum, titisan keajaiban,",
"bawalah cahaya di setiap perjalanan.",
"Jadilah bintang di langit yang luas,",
"sinarmu abadi, terang dan tulus.",
"",
"Selamat datang, wahai jiwa suci,",
"dunia kini lebih indah karena hadirnya kau di sini.",
"Namamu akan dikenang sepanjang masa,",
"sebagai cinta yang lahir dari takdir semesta.",  
);
var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this position
var iArrLength = aText[1].length; // the length of the text array
var iScrollAt = 100; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 100);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
