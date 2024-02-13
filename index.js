var name = prompt("Ismingizni kiriting:");
console.log("Sizning ismingiz: " + name);

var age = prompt("Yoshingizni kiriting:");
console.log("Sizning yoshingiz: " + age + " da");

var misol1 = prompt("5 + 4 = ?");
if (misol1 == 9) {
  console.log("Sizning javob to'g'ri 9");
} else {
  console.log("Sizning javobingiz noto'g'ri " + misol1 + " To'g'ri javob 9");
}

var misol2 = prompt("12 - 4 = ?");
if (misol2 == 8) {
  console.log("Sizning javob to'g'ri 8");
} else {
  console.log("Sizning javobingiz noto'g'ri " + misol2 + " To'g'ri javob 8");
}

var misol3 = prompt("13 * 2 = ?");
if (misol3 == 26) {
  console.log("Sizning javob to'g'ri 26");
} else {
  console.log("Sizning javobingiz noto'g'ri " + misol3 + " To'g'ri javob 26");
}

var misol4 = prompt("12 / 4 = ?");
if (misol4 == 3) {
  console.log("Sizning javob to'g'ri 3");
} else {
  console.log("Sizning javobingiz noto'g'ri " + misol4 + " To'g'ri javob 3");
}

var misol5 = prompt("13 / 4 = ?");
if (misol5 == 1) {
  console.log("Sizning javob to'g'ri 1");
} else {
  console.log("Sizning javobingiz noto'g'ri " + misol5 + " To'g'ri javob 1");
}

var age = +prompt("Yoshingizni kiriting!");
if (age <= 18) {
  alert("Yoshsiz, o'qishingiz kerak!");
} else if (age <= 50) {
  alert("Ishlashingiz kerak!");
} else if (age <= 59) {
  alert("Yaqinda pensiyaga chiqasiz!");
} else if (age <= 150) {
  alert("Karochi boboy qarb qobsz!");
} else {
  alert("Nimadir notori ketib qoldi.");
}

var son1 = +prompt("1-sonni kiriting");
var son2 = +prompt("2-sonni kiriting");
var son3 = +prompt("3-sonni kiriting");

if ((son1 < son2 && son1 > son3) || (son1 > son2 && son1 < son3)) {
  alert("O'rta qiymat " + son1);
} else if ((son2 < son1 && son2 > son3) || (son2 > son1 && son2 < son3)) {
  alert("O'rta qiymat " + son2);
} else {
  alert("O'rta qiymat " + son3);
}
