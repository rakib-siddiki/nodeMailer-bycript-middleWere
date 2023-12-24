//this is middleWere file
function TestMiddleWere(req, res, next) {
  req.headers.authorization == 12345? next(): res.json("Authorization faild Please Try Again");
}
module.exports = TestMiddleWere;
