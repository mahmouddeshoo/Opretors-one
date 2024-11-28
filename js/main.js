// التعبيرات المتقدمة:

// قم بكتابة برنامج يحسب مساحة مستطيل باستخدام:
// الطول = 10.
// العرض = 5.
// اكتب كوداً يتحقق إذا كان الرقم المدخل:
// أكبر من 10 وأقل من 20 باستخدام &&.
// أقل من 5 أو أكبر من 15 باستخدام ||.
// التعامل مع الباقي:



let rectangleLength = 10;
let rectangleWidth = 5;
console.log("Area of Rectangle = 10 * 5 = ", rectangleLength * rectangleWidth)
console.log("======================");

let thisNumber = 18;
console.log(thisNumber > 10 && thisNumber < 20);
console.log(thisNumber < 5 || thisNumber > 15);
// اكتب برنامج يتحقق إذا كان الرقم المدخل يقبل القسمة على 3 بدون باقي.
console.log("=====================");


let theValue = 18;
console.log(theValue / 3);
if (theValue / 3 === 6){
    console.log(theValue, "is divisible by 3");
    } else {
        console.log(theValue, "is not divisible by 3");
}



// أوجد باقي القسمة عند تقسيم 100 على 7.
 console.log("===================");
 let theDivisor = 100;
 let  divisor= 7;
 console.log(theDivisor % divisor);


