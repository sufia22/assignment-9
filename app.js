const result = [

    {
        name        : 'akash',
        reg         : 15487554,
        roll        : 1,
        location    : 'manikgonj',


        bn          : 50,
        en          : 70,
        math        : 80,
        s           : 60,
        ss          : 40,
        rel         : 90,

    },

    {
        name        : 'rakib',
        reg         : 15527554,
        roll        : 2,
        location    : 'dhaka',


        bn          : 50,
        en          : 60,
        math        : 50,
        s           : 60,
        ss          : 40,
        rel         : 90,

    },

    {
        name        : 'abu said',
        reg         : 15448554,
        roll        : 3,
        location    : 'mirpur',


        bn          : 40,
        en          : 35,
        math        : 40,
        s           : 50,
        ss          : 70,
        rel         : 59,

    },

    {
        name        : 'abu sufial',
        reg         : 15445554,
        roll        : 4,
        location    : 'shelat',


        bn          : 50,
        en          : 66,
        math        : 50,
        s           : 60,
        ss          : 40,
        rel         : 70,

    },

    {
        name        : 'nur amin',
        reg         : 15486854,
        roll        : 5,
        location    : 'uttora',


        bn          : 50,
        en          : 60,
        math        : 50,
        s           : 60,
        ss          : 49,
        rel         : 48,

    },

    {
        name        : 'Ridom',
        reg         : 15478958,
        roll        : 6,
        location    : 'mirpur',


        bn          : 60,
        en          : 70,
        math        : 90,
        s           : 50,
        ss          : 60,
        rel         : 77,
    },
    {
        name        : 'Fahim',
        reg         : 15478958,
        roll        : 7,
        location    : 'Dhaka',


        bn          : 60,
        en          : 70,
        math        : 47,
        s           : 50,
        ss          : 60,
        rel         : 25,
    },
    {
        name        : 'Ayon',
        reg         : 15478958,
        roll        : 8,
        location    : 'Manikgonj',


        bn          : 60,
        en          : 70,
        math        : 90,
        s           : 50,
        ss          : 60,
        rel         : 80,
    },
    {
        name        : 'Shanta',
        reg         : 15478958,
        roll        : 9,
        location    : 'Gazipur',


        bn          : 60,
        en          : 70,
        math        : 70,
        s           : 50,
        ss          : 45,
        rel         : 60,
    }
]




result.map((data) =>{

let bn      = data.bn;
let en      = data.en ;
let math    = data.math ;
let s       = data.s ;
let ss      = data.ss ;
let rel     = data.rel ;

   
    function Akash (){



        this.gpa = function (mark){
            if(mark >= 0 && mark < 33 ){
                return 0

            }else if ( mark >= 33 && mark < 40){
                return 1

            }else if ( mark >= 40 && mark < 50 ){
                return 2

            }else if ( mark >= 50 && mark < 60 ){
                return 3

            }else if ( mark >= 60 && mark < 70 ){
                return 3.5

            }else if ( mark >= 70 && mark < 80 ){
                return 4

            }else if ( mark >= 80 && mark <=100 ){
                return 5
            }
        }






        this.grade =function (mark){
            if( mark >= 0 && mark < 33 ){
                return 'F'
    
            }else if ( mark >= 33 && mark < 40 ){
                return 'D'

            }else if ( mark >= 40 && mark < 50 ){
                return 'C'

            }else if ( mark >= 50 && mark < 60 ){
                return 'B'

            }else if ( mark >= 60 && mark < 70 ){
                return 'A-'

            }else if ( mark >= 70 && mark < 80 ){
                return 'A'

            }else if ( mark >= 80 && mark <= 100){
                return 'A+'
            }
        
        }


        this.fainalgpa = function (bn, en, math, s, ss, rel){


            total = ( bn + en + math + s + ss + rel);
            cgpa   = ( total / 6 )


            if( bn == 0 || en == 0 || math == 0 || s == 0 || ss == 0 || rel == 0 ){
                return `you are feaild`
                
            }else{
                return ` ${cgpa} and your total grade ${this.fainalgrade(cgpa)} `
            }
        }

        this.fainalgrade = function (cgpa){

            if( cgpa >= 0 && cgpa < 1 ){
                return 'F'

            }else if ( cgpa >= 1 && cgpa < 2 ){
                return 'D'

            }else if ( cgpa >= 2 && cgpa < 3 ){
                return 'C'

            }else if ( cgpa >= 3 && cgpa < 3.5 ){
                return 'B'
                
            }else if ( cgpa >= 3.5 && cgpa < 4 ){
                return 'A-'

            }else if ( cgpa >= 4 && cgpa < 5){
                return 'A'

            }else if ( cgpa == 5){
                return 'A+'
            }
        }
        

        


    }

    let akash = new Akash ;

    console.log(`
    
    name        : ${data.name}
    reg         : ${data.reg}
    roll        : ${data.roll}
    location    : ${data.location}
    Subjuct                     Mark                        Gpa                             Grade
-------------------------------------------------------------------------------------------------------
    Bangla              =       ${bn}                   ${akash.gpa(bn)}                    ${akash.grade(bn)}                            
    English             =       ${en}                   ${akash.gpa(en)}                    ${akash.grade(en)}                       
    Math                =       ${math}                 ${akash.gpa(math)}                  ${akash.grade(math)}                   
    Science             =       ${s}                    ${akash.gpa(s)}                     ${akash.grade(s)}              
    Social Science      =       ${ss}                   ${akash.gpa(ss)}                    ${akash.grade(ss)}                
    Reagion             =       ${rel}                  ${akash.gpa(rel)}                   ${akash.grade(rel)}   
    
===========================================================================================================================
 your total gpa = ${akash.fainalgpa(akash.gpa(bn),akash.gpa(en),akash.gpa(math),akash.gpa(s),akash.gpa(ss),akash.gpa(rel))}
        
    `); 



})