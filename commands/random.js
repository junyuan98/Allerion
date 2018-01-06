function randomnumber(y){
	return [Math.floor(Math.random() * y + 1)];
};

exports.run = (client, msg, args) => {
    var y = parseInt(args[0], 10);
    if ( isNaN(y) === true )
        msg.channel.sendMessage("Please enter a valid number");
    else {
			var x = randomnumber(y);
			msg.channel.sendMessage("You have randomed " + x );
    }
}

//args[0] = msg.content.substr("a!random ".length)
