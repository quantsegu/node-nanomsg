/*var nano = require('..');
var test = require('tape');

test('pipe msgs between incompatible socket types', function(t){

  var pub = nano.socket('pub');
  var sub = nano.socket('sub');

  var push = nano.socket('push');
  var pull = nano.socket('pull');

  pub.bind('tcp://127.0.0.1:64999');
  sub.connect('tcp://127.0.0.1:64999');

  pull.bind('tcp://127.0.0.1:64998');
  push.connect('tcp://127.0.0.1:64998');

  sub.pipe(push);
  pull.on('data', function(msg){
    t.equal( msg, 'hello from nanomsg pub socket!', 'piped a pub/pull combo');
    pub.close();
    push.close();
    pull.close();
    sub.close();
    t.end();
  });

  pub.send('hello from nanomsg pub socket!');

})

*/
