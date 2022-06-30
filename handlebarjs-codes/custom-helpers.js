const Handlebars = require('handlebars');

var inputdata = {
   firstname: 'Yehuda',
   lastname: 'Katz',
};

Handlebars.registerHelper('capital', function (aString) {
   return aString.toUpperCase();
});

var source = 'hi my firstname is {{ capital firstname}}';
output_template = Handlebars.compile(source);

console.log(output_template(inputdata));
