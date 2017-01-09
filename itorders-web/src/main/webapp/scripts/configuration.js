'use strict';

console.log("Loading configuration...");


var application = {
    'page_size' : 10,
    'kieserver_container' : 'itorders',
    'kieserver_processId' : '',
    'kieserver_url' : 'http://localhost:8080/rest/server',
    'suppliers' : [
       {'id': 'apple', 'name': 'Apple'},
       {'id': 'dell', 'name': 'Dell'},
       {'id': 'lenovo', 'name': 'Lenovo'},
       {'id': 'other', 'name': 'Other'}
   ],
   'managers' : [
      {'id': 'krisv', 'name': 'Kris'},
      {'id': 'mary', 'name': 'Mary'},
      {'id': 'paul', 'name': 'Paul'},
      {'id': 'maciek', 'name': 'Maciek'}
   ]
};