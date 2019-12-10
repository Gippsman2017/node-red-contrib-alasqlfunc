# AlaSQLFunc additional complimentary Alasql node

## node-red-contrib-alasqlfunc

This additional  node-red `alasql` node lets you use msg.query to send in query commands like query/insert/update
Note: This node now uses alasql-nr as its base, it has extra fixes for known alasql faults

## Eg: 

##### msg.query='select * from abc where Id="'+msg.payload.response.id+'"';

or

##### var a = 'wombat';
##### var b = 'platypus';
##### msg.query='insert into abc values ("'+a+'","'+b,+'")';

