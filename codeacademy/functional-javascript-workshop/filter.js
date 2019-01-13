function getShortMessages(messages) {
      res=messages.filter(function (x){ return x.message.length<50;}).map(x => x.message);
      return res;
    }

    module.exports = getShortMessages