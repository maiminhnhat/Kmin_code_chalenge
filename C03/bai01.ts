// Step 01: Khai bao thu vien
import { question } from "readline-sync";

// Step 02: Khai bao va nhap gia tri
let n:number = Number(question("Nhap n: "));
let output = "";

// Step 03: Lap va in ra ket qua
for(let i = 1; i <= n; i++){
    output += "Kmin " + i;
    if(i != n){
        output += ", ";
    }
    else{
        output += ".";
    }
}
console.log(output);

