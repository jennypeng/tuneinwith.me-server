// get started page
exports.index = function(req, res){
	res.render('index', { title: 'tuneinwith.me' });
};
//show room page
exports.room = function(req, res){
	var roomId = req.params.roomid;
	res.render('room', {
		"roomId" : roomId
    });
};
//change room action
exports.changeRoom = function(req, res){
    console.log("catch");
    res.redirect("rooms/"+req.body.room);
}
