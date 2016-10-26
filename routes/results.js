function get(req,res){
  var pollId = req.query.pollId;
  if(!(pollId)){
    res.send("No Poll Id Sent.");
    return;
  }

}

var exports = {};
exports.get = get;
module.exports = exports;
