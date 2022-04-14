

/**
 * Children to Old People
 */

 const ageCal = (name, byear) => {

    let age = 2022 - byear;
    let people = '';

    if( age >= 0 && age <= 12 ){
        people = 'a Children';
    }else if( age >= 13 && age <= 19 ){
        people = 'a Teenager';
    }else if( age >= 20 && age <= 30 ){
        people = 'a Young People';
    }else if( age >= 31 && age <= 50 ){
        people = 'an Adult';
    }else if( age > 51 ){
        people = 'an Old People';
    }

    return `Hi ${name}, You are ${age} years old & You are ${people}`;

}






/**
 * AREA Calculation
 */

 const areaCal = ( type, val1, val2 = null ) => {
    
    let shape = '';
    let area  = '';
    switch(type){
        case 'r':
            shape = 'Rectangle';
            area  = (val1 * val2);
            break;

        case 's':
            shape = 'Square';
            area  = (val1 * val1);
            break;

        case 't':
            shape = 'Triangle';
            area  = .5 * (val1 * val2);
            break;

        case 'c':
            shape = 'Circle';
            area  = 3.1416 * (val1 * val1);
            break;
    }


    return `The area of ${shape} is ${area}`;

}




/**
 * Result Calculation
 */

const getGpa = (marks) => {

    let gpa ;

    if( marks >= 0 && marks < 33 ){
        gpa = 'F';
    }else if( marks >= 33 && marks < 40 ){
        gpa = 'D';
    }else if( marks >= 40 && marks < 50 ){
        gpa = 'C';
    }else if( marks >= 50 && marks < 60 ){
        gpa = 'B';
    }else if( marks >= 60 && marks < 70 ){
        gpa = 'A-';
    }else if( marks >= 70 && marks < 80 ){
        gpa = 'A';
    }else if( marks >= 80 && marks <= 100 ){
        gpa = 'A+';
    }else{
        gpa = 'Invalid';
    }

    return gpa;

}


const getGrade = (marks) => {

    let grade;

    if( marks >= 0 && marks < 33 ){
        grade = 0;
    }else if( marks >= 33 && marks < 40 ){
        grade = 1;
    }else if( marks >= 40 && marks < 50 ){
        grade = 2;
    }else if( marks >= 50 && marks < 60 ){
        grade = 3;
    }else if( marks >= 60 && marks < 70 ){
        grade = 3.5;
    }else if( marks >= 70 && marks < 80 ){
        grade = 4;
    }else if( marks >= 80 && marks <= 100 ){
        grade = 5;
    }else{
        grade = 'Invalid';
    }

    return grade ;

}













/**
 * Age Calculation
 */

const agefunc = (name, byear) => {

    let age = 2022 - byear;

    let welcome = ( age >= 18 ) ? `Hi ${name}, You are welcome` : `Hi ${name}, We are Sorry, You are not allowed` ;

    return welcome;

}













/**
 * BMI Calculation
 */

let bmiCal = (name, weight, height) => {

    let bmi = weight / ( height * height );

    if( bmi < 18.5 ){
        return `Hi ${name}, Your BMI Score is ${bmi} and you are Underweight`;
    }else if( bmi >= 18.5 && bmi < 25 ){
        return `Hi ${name}, Your BMI Score is ${bmi} and you are Normal`;
    }else if( bmi >= 25 && bmi < 30 ){
        return `Hi ${name}, Your BMI Score is ${bmi} and you are Overweight`;
    }else if( bmi >= 30 ){
        return `Hi ${name}, Your BMI Score is ${bmi} and you are Very Overweight`;
    }

}













/**
 * Currency Convert
 */

let currencyConvert = ( amount , type ) => {

    let rate = 0;

    switch(type){
        case 'USD':
            rate = 86;
            break;

        case 'CAD':
            rate = 67;
            break;

        case 'Pound':
            rate = 112;
            break;

        case 'Euro':
            rate = 93;
            break;

    }

    return `${amount} ${type} = ${amount * rate} BDT`;

}









































































