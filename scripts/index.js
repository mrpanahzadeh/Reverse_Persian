

const com = require('commander');
var myObject = require('../reverse.js');

const program = new com.Command();
program.version('0.0.1');

 
program
   .option('-t, --input <type>', 'input file')
   .option('-o, --output <type>', 'output file')
   .name("reverse")
   .usage(" [options] [options]")
   .on('--help', function () {
    console.log('')
    console.log('Examples:');
    console.log(' i -in indexfile -o outputfile');
});

var x = program.parse(process.argv);
// console.log(21212341132,x) 
 console.log(21212341132,x.rawArgs[3],x.rawArgs[5])  

    if (!(x.rawArgs[3] !== undefined && x.rawArgs[5] !== undefined)) {
        console.log("Error:", "app-name not set");
        console.log(program.help());
        process.exit(1)
    }
    else{
        myObject.revfunction(x.rawArgs[3],x.rawArgs[5])    
    }

//if (program.source) console.log(`- ${program.source}`);

//return;



