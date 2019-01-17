function Spy(target, method) {
    var sp={
        count: 0
    };
    var re=target[method];
    target[method]=function abc(){
        sp.count++;
        return re.call(null,...arguments);
    }
    return sp;
  }

  module.exports = Spy;