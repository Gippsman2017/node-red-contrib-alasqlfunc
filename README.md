# AlaSQLFunc additional Alasql nodenode

## node-red-contrib-alasqlfunc

This additional  Node-red `alasql` node lets you use msg.query as the query/insert/update

## Eg: 

msg.query='select * from abc where Id="'+msg.payload.response.id+'"';

or

  var a = 'wombat';
  var b = 'platypus';
  msg.query='insert into abc values ("'+a+'","'+b,+'")';

