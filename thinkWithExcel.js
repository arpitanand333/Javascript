let fs =  require("fs");
let xlsx = require("xlsx");
let data = require("./basicInfo.json");

// workbook => filepath, worksheet => name, json data

//new worksheet
// let newWB = xlsx.utils.book_new();

// // json data => excel format
// let newWS = xlsx.utils.json_to_sheet(data);

// xlsx.utils.book_append_sheet(newWB, newWS, "abc1");
// xlsx.writeFile(newWB, "abc.xlsx");

//*************** */ To read from excel

//to get workbook
let wb = xlsx.readFile("abc.xlsx");

// to get worksheet
let excelData =  wb.Sheets["abc1"];
//to get sheet data
let ans = xlsx.utils.sheet_to_json(excelData);
console.log(ans);
