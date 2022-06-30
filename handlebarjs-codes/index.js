const Handlebars = require('handlebars');

var source =
   'Hello, my name is {{name}}. I am from {{hometown}}. I have ' +
   '{{kids.length}} kids:' +
   '<ul>{{#kids}}<li>{{name}} is {{age}}</li>{{/kids}}</ul>';
var output_template = Handlebars.compile(source);

var inputdata = {
   name: 'Alan',
   hometown: 'Somewhere, TX',
   kids: [
      { name: 'Jimmy', age: '12' },
      { name: 'Sally', age: '4' },
   ],
};

var result = output_template(inputdata);

console.log(result);
