// bài 1 
// Test Data 1
let markMass1 = 78; // kg
let markHeight1 = 1.69; // meters
let johnMass1 = 92; // kg
let johnHeight1 = 1.95; // meters

// Test Data 2
let markMass2 = 95; // kg
let markHeight2 = 1.88; // meters
let johnMass2 = 85; // kg
let johnHeight2 = 1.76; // meters

// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

// Calculating BMIs for Test Data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Checking if Mark's BMI is higher than John's in Test Data 1
let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Mark's BMI in Test Data 1: ${markBMI1}`);
console.log(`John's BMI in Test Data 1: ${johnBMI1}`);
console.log(`Is Mark's BMI higher than John's in Test Data 1? ${markHigherBMI1}`);

// Calculating BMIs for Test Data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Checking if Mark's BMI is higher than John's in Test Data 2
let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Mark's BMI in Test Data 2: ${markBMI2}`);
console.log(`John's BMI in Test Data 2: ${johnBMI2}`);
console.log(`Is Mark's BMI higher than John's in Test Data 2? ${markHigherBMI2}`);

// bài 2 
// Test Data
console.log('\n--------------------bài 2---------------------');
let markMass = 78; // kg
let markHeight = 1.69; // meters
let johnMass = 92; // kg
let johnHeight = 1.95; // meters

// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2);
}

// Calculating BMIs
let markBMI = calculateBMI(markMass, markHeight);
let johnBMI = calculateBMI(johnMass, johnHeight);

// Using if/else to compare BMIs and print results
if (markBMI > johnBMI) {
    console.log(`Chỉ số BMI của Mark cao hơn John! Mark BMI (${markBMI.toFixed(1)}) cao hơn John (${johnBMI.toFixed(1)})!`);
} else if (johnBMI > markBMI) {
    console.log(`Chỉ số BMI của John cao hơn Mark! John BMI (${johnBMI.toFixed(1)}) cao hơn Mark (${markBMI.toFixed(1)})!`);
} else {
    console.log(`Chỉ số BMI của Mark và John bằng nhau! Cả hai đều có BMI là ${markBMI.toFixed(1)}.`);
}



// bài 3
console.log('\n--------------------bài 3---------------------');

// Dữ liệu 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Dữ liệu 2
let dolphinsScores2 = [97, 112, 101];
let koalasScores2 = [109, 95, 123];

// Dữ liệu 3
let dolphinsScores3 = [97, 112, 101];
let koalasScores3 = [109, 95, 106];

// Hàm tính điểm trung bình
function calculateAverage(scores) {
    return scores.reduce((total, score) => total + score, 0) / scores.length;
}

// Hàm kiểm tra đội thắng sử dụng toán tử ba ngôi
function checkWinner(dolphinsAvg, koalasAvg) {
    return dolphinsAvg > koalasAvg && dolphinsAvg >= 100 
        ? "Dolphins giành chiến thắng!" 
        : koalasAvg > dolphinsAvg && koalasAvg >= 100 
        ? "Koalas giành chiến thắng!" 
        : dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100 
        ? "Cả hai đội đều hòa!" 
        : "Không đội nào giành được cúp!";
}

// Tính điểm trung bình cho mỗi bộ dữ liệu
let dolphinsAvg1 = calculateAverage(dolphinsScores1);
let koalasAvg1 = calculateAverage(koalasScores1);

let dolphinsAvg2 = calculateAverage(dolphinsScores2);
let koalasAvg2 = calculateAverage(koalasScores2);

let dolphinsAvg3 = calculateAverage(dolphinsScores3);
let koalasAvg3 = calculateAverage(koalasScores3);

// Kiểm tra đội thắng cho từng bộ dữ liệu
console.log(`Kết quả Dữ liệu 1: ${checkWinner(dolphinsAvg1, koalasAvg1)}`);
console.log(`Kết quả Dữ liệu 2: ${checkWinner(dolphinsAvg2, koalasAvg2)}`);
console.log(`Kết quả Dữ liệu 3: ${checkWinner(dolphinsAvg3, koalasAvg3)}`);

// bài 4
console.log('\n--------------------bài 4---------------------');
// Dữ liệu thử nghiệm
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// Hàm tính tiền boa
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// Mảng chứa tiền boa và tổng số tiền
const tips = [];
const totals = [];

// Vòng lặp tính toán tiền boa và tổng số tiền
for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log('Bills: ', bills);
console.log('Tips: ', tips);
console.log('Totals: ', totals);

// Phần thưởng: Hàm tính giá trị trung bình
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Tính trung bình của các mảng
const averageTip = calcAverage(tips);
const averageTotal = calcAverage(totals);

console.log('Average Tip: ', averageTip);
console.log('Average Total: ', averageTotal);

// Phần 2 - bài 1 
console.log('\n--------------------Phần 2 - bài 1---------------------');
// Dữ liệu thử nghiệm
const dolphinsData1 = [44, 23, 71];
const koalasData1 = [65, 54, 49];

const dolphinsData2 = [85, 54, 41];
const koalasData2 = [23, 34, 27];

// Hàm tính trung bình cộng
function calcAverage(arr) {
    return arr.reduce((sum, score) => sum + score, 0) / arr.length;
}

// Hàm xác định đội chiến thắng
function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins thắng (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas thắng (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('Không có đội nào thắng!');
    }
}

// Tính trung bình cho cả hai đội trong dữ liệu 1
const avgDolphins1 = calcAverage(dolphinsData1);
const avgKoalas1 = calcAverage(koalasData1);

// Xác định đội chiến thắng cho dữ liệu 1
checkWinner(avgDolphins1, avgKoalas1);

// Tính trung bình cho cả hai đội trong dữ liệu 2
const avgDolphins2 = calcAverage(dolphinsData2);
const avgKoalas2 = calcAverage(koalasData2);

// Xác định đội chiến thắng cho dữ liệu 2
checkWinner(avgDolphins2, avgKoalas2);

// Phần 2 - bài 2
console.log('\n--------------------Phần 2 - bài 2---------------------');
// Dữ liệu thử nghiệm
const billss = [125, 555, 44];

// Hàm tính tiền boa
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}

// Mảng chứa tiền boa và tổng số tiền
const tipss = [];
const totalss = [];

// Vòng lặp tính toán tiền boa và tổng số tiền
for (let i = 0; i < billss.length; i++) {
    const tip = calcTip(billss[i]);
    tipss.push(tip);
    totalss.push(billss[i] + tip);
}

console.log('Bills: ', billss);
console.log('Tips: ', tipss);
console.log('Totals: ', totalss);

// Phần 2 - bài 3

console.log('\n--------------------Phần 2 - bài 3---------------------');

const mark = {
    fullName: 'Mark Miller',
    mass: 78, // kg
    height: 1.69 // meters
};

const john = {
    fullName: 'John Smith',
    mass: 92, // kg
    height: 1.95 // meters
};


function calcBMI(person) {
    return person.mass / (person.height ** 2);
}


mark.bmi = calcBMI(mark);
john.bmi = calcBMI(john);

if (mark.bmi > john.bmi) {
    console.log(`Chỉ số BMI của ${mark.fullName} (${mark.bmi.toFixed(1)}) cao hơn của ${john.fullName} (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`Chỉ số BMI của ${john.fullName} (${john.bmi.toFixed(1)}) cao hơn của ${mark.fullName} (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`Chỉ số BMI của ${mark.fullName} và ${john.fullName} bằng nhau (${mark.bmi.toFixed(1)})!`);
}

// Phần 2 - bài 4
console.log('\n--------------------Phần 2 - bài 4---------------------');
function calcTip(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
}
const listBill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const listTip = [];
const listTotal = [];

for (let i = 0; i < listBill.length; i++) {
    const tip = calcTip(listBill[i]);
    listTip.push(tip);
    listTotal.push(listBill[i] + tip);
}

console.log('List Bills: ', listBill);
console.log('List Tips: ', listTip);
console.log('List Totals: ', listTotal);


// Phần thưởng: Hàm tính giá trị trung bình
function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Tính trung bình của các mảng
const tbTip = calcAverage(tips);
const tbTotal = calcAverage(totals);

console.log('Average Tip: ', tbTip);
console.log('Average Total: ', tbTotal);


// Phần 2 - bài 5

console.log('\n--------------------Phần 2 - bài 5---------------------');
function printForecast(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}°C in ${i + 1} days ... `;
    }

    console.log(str);
}

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];


console.log('----FORECAST 1----');
printForecast(data1);
console.log('----FORECAST 2----');
printForecast(data2);


