//template
var Handlebars = require('handlebars');
var source =
   ' hi guys my name is {{name}} and since my passing year is {{passingYear}} I have {{studyStatus passingYear}} and I am {{examStatus Score}}';

//custom handlebar helper functions

Handlebars.registerHelper('studyStatus', function (passingYear) {
   if (passingYear < 2015) {
      return 'passed';
   } else {
      return 'not passed';
   }
});

Handlebars.registerHelper('examStatus', function (Score) {
   if (Score > 90) {
      return 'a topper';
   } else {
      return 'not a topper';
   }
});

//input-data

var inputdata = {
   students: [
      {name: 'John', passingYear: 2013, Score: 91},
      {name: 'Doe', passingYear: 2016, Score: 75},
   ],
};

//Compile the template data into a function
var templateScript = Handlebars.compile(source);

var answer = templateScript(inputdata.students[0]);
console.log(answer);
