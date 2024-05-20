//------------------------------ 1-dars ozgaruvchilar
// let num = 19;
// let ism = 'Dostonbek';
// const fam = 'Zaripov';

// console.log( fam, ism, num);

// num = 20;
// console.log(num)



//--------------------------- String Darslariga oid masalalar 
// Metodlardankeyin xardoin qovis() tashlab ketilishi shart aks holda hatolik yuzaga keladi.

// let firstName = "Dostonbek ";
// let lastName = "Zaripov";

// let fullName = firstName + lastName

// String concatenation
// console.log(firstName + lastName);

// getting characters
// console.log(lastName[0])

// String length - uzunligini aniqlaydi
// console.log(firstName.length)

// String Methods - functsiyaga oxshash ish bajaradi

// console.log(fullName.toLowerCase())
// console.log(fullName.toUpperCase())
// console.log(fullName.toString())

// let result = fullName.toUpperCase()
// console.log(result)


// let result2 = firstName.toLowerCase()
// let result3 = lastName.toUpperCase()

// let results = result2 + result3
// console.log(results)

// let index = firstName.indexOf("t")
// console.log(index)


// console.log(lastName.length)
// console.log(lastName.indexOf("p"))





// -------------------------------Kop ishlatilidagan string methods

// let email = "dastandev0110@gmail.com";


// indexOf metodi
// let result = email.indexOf("a");
// console.log(result);


// lastIndexOf metodi - oxirdan sanaydi
// let result = email.lastIndexOf("a")
// console.log(result)


// slice metodi - kesib oladi
// let result = email.slice(0, 9);
// console.log(result)
// let result2 = email.slice(9, 14)
// console.log(result2)


// substr metodi
// let result = email.substr(0, 9)
// console.log(result)
// let result2 = email.substr(9, 4)
// console.log(result2)


// replace metodi - almashtirish uchun metod
// let result = email.replace("d", "D")
// console.log(result);


// charAt metodi - birinchi harakterni oberadi
// let result = email.charAt();
// console.log(result)

// trim metodi - ortiqcha joylarni kesib oladi
// let result = email.trim()
// console.log(email.length, result.length)


// split metodi - arrayga oxshash metod
// let result = email.split("");
// console.log(result)





// --------------------------------------Numbers

// let comments = 15;
// // let result = comments - 5 
// // console.log(result)


// // NaN - Not a Number 

// let result = comments / "Assalom"
// console.log(result)






// -------------------------------------Template String

// const title = "Rastamojka qachon ochiladi? yohud Manapoliya Respublikasi"
// const author = "Lag'mon Markazi "
// const likes = 4000

// concatentation way - sodda va uzun variant 
// let result = "Bu post nomi " + title + ' ' + author + "tomonidan yozilgan. " + "va " + likes +"ta like bor";
// console.log(result)


// template string way -  oson va qisqa varianti
// let result = `Bu post nomi ${title} ${author} tomonidan yozilgan va ${likes}ta like bor`
// console.log(result)





// --------------------------------------Array - Massivlar
// const mehmon1 = "Anvar"
// const mehmon2 = "Ruslan"
// const mehmon3 = "Jaxan"

// const mehmonlar  = ["Anvar", "Ruslan", "Jaxan", "Abdusattor"];
// // mehmonlar[0] = "Abdusattor";
// const numbers = [1, 2, 3, 4]

// // mehmonlar.push("Abduvali"); ------------- arrayda oxiriga bittasini qoshib qoyadi
// // mehmonlar.pop("Abdusattor"); ------------ arrayda oxirdan bittasini qirqib oladi

// let result  = mehmonlar.concat(numbers)
// let result2 = result.length
// console.log(result2)
// console.log(result)





// ------------------------------------------Null va Undifined

// let age 
// let age =null
// null matematik jihatdan 0ga teng!!!

// console.log(age, age + 5, `Mening yoshim ${age} da`)





// ------------------------------------------Booleans & Comparisons
// console.log(true, false, "true", "false");



// methods can return booleans

// let email = "dastandev@gmail.com";
// let result = email.includes("!");
// console.log(result)


//  comparison operators

// let yosh = 19;

// console.log(yosh == 20) no qattiy tenglik
// console.log(yosh !=20 )  !-belgisi trueni false qiladi, falseni true qiladi

// let ism = "dostonbek"

// console.log(ism == "dostonbek")





// --------------------------------------------Kuchli va Kuchsiz taqqoslashlar

// let age = 19;

// kuchsiz taqqoslashlar (turli xil tiplar tengligi)
// console.log(age == 19);
// console.log(age == "19")
// console.log(age != 19)

// kuchli taqqoslashlar (turli xil tiplar teng bolmasligi)
// console.log(age === 19)
// console.log(age === "19")
// console.log(age !== 19)
// console.log(age !== "19")





// --------------------------------------------10-dars. Turlarni ozgartirish(Type conversion)
// let natija = "19"

// natija = Number(natija)    Qiymat string bolsa ham numberga ozgartirish yoli
// console.log(typeof natija);


// let result = String(19)     Qovis ichidagi Number bolsaham Stringga ozgartirish yoli
// console.log(typeof result)

// let result = Number("19") Qovis ichidagi String bolsaham Numberga ozgartirish yoli
// console.log(typeof result)  typeof bu qiymatning String yoki Numberligini aniqlab beradi





// ---------------------------------------------11-dars Amaliyot

// let ism = prompt("Ismingizni kiriting");

// let result = ism.slice(1).toLowerCase()
// let result2 = ism.charAt().toUpperCase()
// let result3 = result2 + result


// alert(`Salom, ${result3}`);   