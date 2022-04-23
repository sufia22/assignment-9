

const studentInfo = [
    ['Safa', '3', '1', '9', 'female', 'Jatrabari', 4500],
    ['Sadaf', '4', '2', '10', 'male', 'Uttara', 5500],
    ['Hasib', '5', '3', '12', 'male', 'Banani', 7500],
    ['Neha', '5', '4', '11', 'female', 'Jatrabari', 3500],
    ['Sajib', '3', '5', '24', 'male', 'Uttara', 1500],
    ['Nayeem', '4', '6', '21', 'male', 'Banani', 2000],
    ['Ayesha', '3', '7', '19', 'female', 'Jatrabari', 2300],
    ['Nahid', '5', '8', '15', 'male', 'Uttara', 8500],
    ['Sumi', '4', '9', '14', 'female', 'Banani', 8500],
    ['Jibon', '4', '10', '16', 'male', 'Jatrabari', 6500],
    ['Sarmin', '3', '11', '15', 'female', 'Banani', 7000],
    ['Polash', '5', '12', '12', 'male', 'Uttara', 2500],
    ['Anis', '4', '13', '23', 'male', 'Jatrabari', 1500],
    ['Habib', '3', '14', '17', 'male', 'Uttara', 5800],
    ['Shuvo', '5', '15', '34', 'male', 'Banani', 7500],
    ['Fahim', '4', '16', '26', 'male', 'Jatrabari', 2800],
    ['Faiza', '3', '17', '19', 'female', 'Jatrabari', 9500],
    ['Habib', '4', '18', '23', 'male', 'Banani', 1500],
    ['Faysal', '5', '19', '29', 'male', 'Jatrabari', 3700],
    ['Khokon', '3', '20', '27', 'male', 'Banani', 3600],
    ['Krishna', '5', '21', '18', 'male', 'Uttara', 4500],
    ['Hasan', '4', '22', '22', 'male', 'Jatrabari', 8500],
    ['Sufia', '3', '23', '23', 'female', 'Jatrabari', 4500],
    ['Sajol', '4', '24', '26', 'male', 'Banani', 5500],
    ['Rabiul', '5', '25', '25', 'male', 'Uttara', 2800],
    ['Taher', '4', '26', '28', 'male', 'Jatrabari', 3400],
    ['Imran', '3', '27', '27', 'male', 'Banani', 1500],
    ['Istiak', '4', '28', '18', 'male', 'Uttara', 3500],
    ['Mahdi', '5', '29', '17', 'male', 'Jatrabari', 6700],
    ['Masud', '3', '30', '15', 'male', 'Jatrabari', 7800],
];


// Total Admnission fees
let total_amount = 0;
studentInfo.map( ( data, index ) => {

    console.log(`Name : ${ data[0] } - Amount : ${ data[6] }`);
    total_amount += data[6];

    
    
} );

console.log(`
================================
Total Amount    =    ${total_amount}
`);




// All Female Students
studentInfo.map( ( data, index ) => {
    
    if( data[4] == 'female' ){
        console.log(`
            Name     : ${ data[0] }
            Class    : ${ data[1] }
            Roll     : ${ data[2] }
            Age      : ${ data[3] }
            Gender   : ${ data[4] }
            Location : ${ data[5] }
            Fee      : ${ data[6] }
        `);
        }
    
} );





// Students of Class 3
studentInfo.map( ( data, index ) => {
    if( data[1] == '3' ){
        console.log(`
            Name      : ${ data[0] }
            Class     : ${ data[1] }
            Roll      : ${ data[2] }
            Age       : ${ data[3] }
            Gender    : ${ data[4] }
            Locayion  : ${ data[5] }
            Fee       : ${ data[6] }
        `);
    }
} );





// Students of Class 4
studentInfo.map( ( data, index ) => {
    if( data[1] == '4' ){
        console.log(`
            Name      : ${ data[0] }
            Class     : ${ data[1] }
            Roll      : ${ data[2] }
            Age       : ${ data[3] }
            Gender    : ${ data[4] }
            Locayion  : ${ data[5] }
            Fee       : ${ data[6] }
        `);
    }
} );




// Students of Class 5
studentInfo.map( ( data, index ) => {
    if( data[1] == '5' ){
        console.log(`
            Name     : ${ data[0] }
            Class    : ${ data[1] }
            Roll     : ${ data[2] }
            Age      : ${ data[3] }
            Gender   : ${ data[4] }
            Location : ${ data[5] }
            Fee      : ${ data[6] }
        `);
    }
} );




// Location wise student
studentInfo.map( ( data, index ) => {
    if( data[5] == 'Banani' ){
        console.log(`
            Name       : ${ data[0] }
            Class      : ${ data[1] }
            Roll       : ${ data[2] }
            Age        : ${ data[3] }
            Gender     : ${ data[4] }
            Location   : ${ data[5] }
            Fee        : ${ data[6] }
        `);
    }
} );



studentInfo.map( ( data, index ) => {
    if( data[5] == 'Jatrabari' && data[4] == 'male'){
        console.log(`
            Name        : ${ data[0] }
            Class       : ${ data[1] }
            Roll        : ${ data[2] }
            Age         : ${ data[3] }
            Gender      : ${ data[4] }
            Location    : ${ data[5] }
            Fee         : ${ data[6] }
        `);
    }
} );




studentInfo.map( ( data, index ) => {
    if( data[5] == 'Uttara' ){
        console.log(`
            Name        : ${ data[0] } 
            Class       : ${ data[1] } 
            Roll        : ${ data[2] } 
            Age         : ${ data[3] } 
            Gender      : ${ data[4] } 
            Location    : ${ data[5] } 
            Fee         : ${ data[6] } 
        `);
    }
} );






// Student between 10 - 25 age

studentInfo.map( ( data, index ) => {
    
    if( data[3] > 9 && data[3] <= 25 ){
        console.log(`
            Name      : ${ data[0] }
            Class     : ${ data[1] }
            Roll      : ${ data[2] }
            Age       : ${ data[3] }
            Gender    : ${ data[4] }
            Location  : ${ data[5] }
            Fee       : ${ data[6] }
        `);
    }
} );





