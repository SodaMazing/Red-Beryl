//Red Beryl

const game = require('./game.json');

var Discord = require("discord.js");
	bot = new Discord.Client();
	pre = "b!";
	perm = "You are not a Rhodochrosite";
	
/*Message Checker --
  Defines if a code is a valid command*/
function cmd(str, msg) {
  return msg.content.toLowerCase().startsWith(pre + str);
}

/*Plucker --
  Discerns one piece of info from the rest*/
function pluck(array){
  return array.map(function(item){return item["name"];});
}

/*Role Checker --
  Checks if a user has a role*/
function role(mem) {
  if(pluck(mem.roles).includes("Rhodochrosite")) {
	return true; //has the Rhodochrosite role
  }else{
	return false; //does not have the Rhodochrosite role
  }
}

/*Console Logbook --
  Returns back value to log for command module in a standardized manner*/
function cmdLog(x, msg){
  return x + " by " + msg.author.username;
}

/*Login Processes --
  Things to do when a login is successful*/
bot.on('ready', () => {
  console.log('Logged in.'); //Login Message
  bot.user.setGame(game.game, game.stream);
});

/*Login --
  Logs code into Red Beryl*/
bot.login(process.env.BOT_TOKEN);

/*Message Response --
  Responds to messages and sets commands or variables*/
bot.on("message", msg => {

	var tf = Math.floor(Math.random() * (2)); //Generates random true or false value
		maya = Math.floor(Math.random() * (50)); //Generates value for random Maya Cleavage
		itsallfuckinglewds = Math.floor(Math.random() * (3)); //Generates value for random itsallfuckinglewds
		roast = Math.floor(Math.random() * (16)); //Generates value for randomly roasting people
		arg = msg.content.split(/[ ]+/); //Creates argument values; i.e arg[1], arg[2], etc.
		sentence = "";

	for (var i = 1; i < arg.length; i++) {
		sentence = sentence + " " + arg[i]; //Makes all arguments into one, so that entire sentences can be a single argument
	}

	//help
	if (cmd("help", msg) || cmd("commands", msg)) {
	  //General
	  msg.channel.send("Hello, it is i, Red Beryl. Here are my commands:" +
      "\n```'b!help' displays this message" +
	  "\n'b!help rhodochrosite' will give you a list of the Rhodochrosite commands" +
	  "\n'b!ping' will test whether the bot is active" +
	  "\n'b!maya' posts a random Maya Cleavage" +
	  "\n'b!nuke [place]' will nuke the bad guys" +
	  "\n'b!impregnate [person]' will impregnate someone" +
	  "\n'b!itsallfuckinglewds' posts a random 'IT'S ALL FUCKING LEWDS!!!' picture" +
	  "\n'b!noswearing' warns a user if they sweared" +
	  "\n'b!understandable' posts an understanding" +
	  "\n'b!perhaps' posts Perhaps Otis" +
	  "\n'b!berhaps' posts Perhaps :b:eter" +
	  "\n'b!jerhaps' posts Perhaps Jason" +
	  "\n'b!lit' breaks it down" +
	  "\n'b!deku' ditto" +
	  "\n'b!reference' understands that reference" +
	  "\n'b!lewd' points out the lewdness" +
	  "\n'b!ascii' posts Ascii-chan" +
	  "\n'b!youngotisjizz' checks the dairy section" +
	  "\n'b!iamwood' notifies you that he is indeed wood" +
	  "\n'b!iamthefuckingstrong' lets you know that he is the fucking strong" +
	  "\n'b!duwang' complements the duwang" +
	  "\n'b!chew' chews" +
	  "\n'b!youropinion' thats just like, your opinion man" +
	  "\n'b!ihadaboner' lets you in on a secret" +
      "\n'b!info [pagename]' will display info from that YTP Wiki page, but currently only works for a select few pages" +
	  "\n'b!ask [question]' asks a yes/no question" +
      "\n'b!advice [problem]' will give you some life-lessons, such as 'getrichquick' or more" +
      "\n'b!miltrupee [number]' converts Dollars to Miltrupees (Hyrule Currency)" +
      "\n'b!roll [dice side number]' will roll a totally fair 6-sided-die (or with more sides if you wish)" +
      "\n'b!avatar [@user]' will post the avatar of that user, or yourself if no user is mentioned" +
      "\n'b!coinflip' will flip a *totally* fair coin" +
      "\n'b!argnumber' will tell you the amount of words you typed" +
      "\n'b!lenny' will add a nice lenny, and add the word 'gang' to get a gang of lennies" +
      "\n'b!roast' will roast you as bad as never before seen (not that you aren't roasted all the time already)" +
      "\n'b!scp [SCP number]' posts an SCP entry (001-3000)" +
      "\n'b!serverlist' lists all servers that Red Beryl is logged onto```");

      //Info concerning Retro's 8-Bit-Paradise
	  if (cmd("help retro", msg)) {
        msg.channel.send("Secret 8-Bit-Paradise Commands:" +
		"\n```'b!pleach' is a cool promo" +
		"\n'b!MM list' will show the Playlist for Music Monday" +
		"\n'b!joke' will tell a funny joke" +
		"\n'b!retrolink' will give you a invite link, so you can spam your friends```");
      }
      //Info concerning the 5th World Server
	  if (cmd("help 5thworld", msg)) {
        msg.channel.send("Secret 5th World Commands:" +
        "\n```'b!map [blank, or climate]' will post a map of the fifth World; type 'b!map ?' for more info" +
        "\n'b!asc [conlang-name] [question]' will ask a question in that conlang```");
      }
      //Info concerning Rhodochrosite commands
	  if (cmd("help rhodochrosite", msg))  {
		msg.channel.send("This is the list of Rhodochrosite commands:" +
		"\n```'b!help rhodochrosite' displays this message" +
		"\n'b!role' checks if you can use the Rhodochrosite commands (You need the Rhodochrosite role to use them)" +
		"\n'b!delete [message number]' deletes messages" +
		"\n'b!say [something]' gets me to say something" +
		"\n'b!warn [@user] [reason]' warns that user, sending both you and them a message" +
		"\n'b!ban [@user] [reason]' unleashes a banhammer upon that user, sending both you and them a message```");
      }
	  //Friendly hint to better use the comment area a second time for commands
      msg.channel.send("Remember to join the Rhodochrosites.");
      console.log(cmdLog("help", msg));
	}

	/*----------------------------MAIN-COMMANDS----------------------------
    Commands that are not intended to be used on any non-specific server*/
	
	//ping
	else if (cmd("ping", msg)) {
		msg.channel.send("I am here to serve you, my king.");
		console.log(cmdLog("ping", msg));
      }
	//noswearing
	else if (cmd("noswearing", msg)) {
		msg.channel.send("https://i.imgur.com/TaFOA1F.jpg");
		console.log(cmdLog("noswearing", msg));
      }
	//understandable
	else if (cmd("understandable", msg)) {
		msg.channel.send("https://i.imgur.com/HNbb2Z0.png");
		console.log(cmdLog("understandable", msg));
      }
	//perhaps
	else if (cmd("perhaps", msg)) {
		msg.channel.send("https://i.imgur.com/PX0mKib.jpg");
		console.log(cmdLog("perhaps", msg));
      }
	//berhaps
	else if (cmd("berhaps", msg)) {
		msg.channel.send("https://i.imgur.com/zdafPwd.jpg");
		console.log(cmdLog("berhaps", msg));
      }
	//jerhaps
	else if (cmd("jerhaps", msg)) {
		msg.channel.send("https://i.imgur.com/5zzudPZ.png");
		console.log(cmdLog("jerhaps", msg));
      }
	//lit
	else if (cmd("lit", msg)) {
		msg.channel.send("https://i.imgur.com/nqQTXa9.gif");
		console.log(cmdLog("lit", msg));
      }
	//deku
	else if (cmd("deku", msg)) {
		msg.channel.send("https://i.imgur.com/ofeagvQ.gif");
		console.log(cmdLog("deku", msg));
      }
	//reference
	else if (cmd("reference", msg)) {
		msg.channel.send("https://i.imgur.com/ZBdYYl2.jpg");
		console.log(cmdLog("reference", msg));
      }
	//lewd
	else if (cmd("lewd", msg)) {
		msg.channel.send("https://www.youtube.com/watch?v=qr89xoZyE1g");
		console.log(cmdLog("lewd", msg));
      }
	//ascii
	else if (cmd("ascii", msg)) {
		msg.channel.send("\n⣿⣿⣿⣿⣿⣿⡷⣯⢿⣿⣷⣻⢯⣿⡽⣻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⠸⣿⣿⣆⠹⣿⣿⢾⣟⣯⣿⣿⣿⣿⣿⣿⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣷⡌" +
	"\n⣿⣿⣿⣿⣿⣿⣻⣽⡿⣿⣎⠙⣿⣞⣷⡌⢻⣟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣿⣿⡄⠹⣿⣿⡆⠻⣿⣟⣯⡿⣽⡿⣿⣿⣿⣿⣽⡷⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣟⣷⣿⣿⣿⡀⠹⣟⣾⣟⣆⠹⣯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢠⡘⣿⣿⡄⠉⢿⣿⣽⡷⣿⣻⣿⣿⣿⣿⡝⣷⣯⢿⣿⣿⣿⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣯⢿⣾⢿⣿⡄⢄⠘⢿⣞⡿⣧⡈⢷⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⢸⣧⠘⣿⣷⠈⣦⠙⢿⣽⣷⣻⣽⣿⣿⣿⣿⣌⢿⣯⢿⣿⣿⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣟⣯⣿⢿⣿⡆⢸⡷⡈⢻⡽⣷⡷⡄⠻⣽⣿⣿⡿⣿⣿⣿⣿⣿⣿⣷⣿⣿⣿⣿⣏⢰⣯⢷⠈⣿⡆⢹⢷⡌⠻⡾⢋⣱⣯⣿⣿⣿⣿⡆⢻⡿⣿⣿⣿⣿⡟⣿" +
	"\n⣿⣿⣿⣿⣿⣿⡎⣿⢾⡿⣿⡆⢸⣽⢻⣄⠹⣷⣟⣿⣄⠹⣟⣿⣿⣟⣿⣿⣿⣿⣿⣿⣽⣿⣿⣿⡇⢸⣯⣟⣧⠘⣷⠈⡯⠛⢀⡐⢾⣟⣷⣻⣿⣿⣿⡿⡌⢿⣻⣿⣿⣿⣿⡌" +
	"\n⣿⣿⣿⣿⣿⣿⣧⢸⡿⣟⣿⡇⢸⣯⣟⣮⢧⡈⢿⣞⡿⣦⠘⠏⣹⣿⣽⢿⣿⣿⣿⣿⣯⣿⣿⣿⡇⢸⣿⣿⣾⡆⠹⢀⣠⣾⣟⣷⡈⢿⣞⣯⢿⣿⣿⣿⢷⠘⣯⣿⣿⣿⣿⣷" +
	"\n⣿⣿⣿⣿⣿⣿⣿⡈⣿⢿⣽⡇⠘⠛⠛⠛⠓⠓⠈⠛⠛⠟⠇⢀⢿⣻⣿⣯⢿⣿⣿⣿⣷⢿⣿⣿⠁⣾⣿⣿⣿⣧⡄⠇⣹⣿⣾⣯⣿⡄⠻⣽⣯⢿⣻⣿⣿⡇⢹⣾⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⡽⡇⢸⣿⣿⣿⣿⣿⣞⣆⠰⣶⣶⡄⢀⢻⡿⣯⣿⡽⣿⣿⣿⢯⣟⡿⢀⣿⣿⣿⣿⣿⣧⠐⣸⣿⣿⣷⣿⣿⣆⠹⣯⣿⣻⣿⣿⣿⢀⣿⢿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣿⣿⠘⣯⡿⡇⢸⣿⣿⣿⣿⣿⣿⣿⣧⡈⢿⣳⠘⡄⠻⣿⢾⣽⣟⡿⣿⢯⣿⡇⢸⣿⣿⣿⣿⣿⣿⡀⢾⣿⣿⣿⣿⣿⣿⣆⠹⣾⣷⣻⣿⡿⡇⢸⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣿⣿⡇⢹⣿⠇⢸⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⠻⡇⢹⣆⠹⣟⣾⣽⣻⣟⣿⣽⠁⣾⣿⣿⣿⣿⣿⣿⣇⣿⣿⠿⠛⠛⠉⠙⠋ ⠁⢘⣯⣿⣿⣧⠘⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣿⣿⣿⡈⣿⡃⢼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⡙⠌⣿⣆⠘⣿⣞⡿⣞⡿⡞⢠⣿⣿⣿⣿⣿⡿⠛⠉⠁⢀⣀⣠⣤⣤⣶⣶⣶⡆⢻⣽⣞⡿⣷⠈⣿⣻⣿⣿" +
	"\n⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⠘⠁⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⢿⣄⢻⣿⣧⠘⢯⣟⡿⣽⠁⣾⣿⣿⣿⣿⣿⡃  ⠘⠛⠿⢿⣻⣟⣯⣽⣻⣵⡀⢿⣯⣟⣿⢀⣿⣽⣿⣿" +
	"\n⣿⣿⣿⣟⣿⣿⣿⣿⣶⣶⡆⢀⣿⣾⣿⣾⣷⣿⣶⠿⠚⠉ ⢀⣤⣿⣷⣿⣿⣷⡈⢿⣻⢃⣼⣿⣿⣿⣿⣻⣿⣿⣿⡶⣦⣤⣄⣀ ⠉⠛⠛⠷⣯⣳⠈⣾⡽⣾⢀⣿⢾⣿⣿" +
	"\n⣿⢿⣿⣿⣻⣿⣿⣿⣿⣿⡿⠐⣿⣿⣿⣿⠿⠋⠁  ⣤⣾⣿⣿⣿⣿⣿⣿⣿⣿⣌⣥⣾⡿⣿⣿⣷⣿⣿⢿⣷⣿⣿⣟⣾⣽⣳⢯⣟⣶⣦⣤⡾⣟⣦⠘⣿⢾⡁⢺⣿⣿⣿" +
	"\n⣿⣻⣿⣿⡷⣿⣿⣿⣿⣿⡗⣦⠸⡿⠋⠁  ⣠⣴⢿⣿⣽⣻⢽⣾⣟⣷⣿⣟⣿⣿⣿⣳⠿⣵⣧⣼⣿⣿⣿⣿⣿⣾⣿⣿⣿⣿⣿⣽⣳⣯⣿⣿⣿⣽⢀⢷⣻⠄⠘⣯⣿⣿" +
	"\n⣿⢷⣻⣿⣿⣷⣻⣿⣿⣿⡷⠛⣁⢀⣀⣤⣶⣿⣛⡿⣿⣮⣽⡻⣿⣮⣽⣻⢯⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣯⢀⢸⣿⢀⡆⣿⣿⣿" +
	"\n⠸⣟⣯⣿⣿⣷⢿⣽⣿⣿⣷⣿⣷⣆⠹⣿⣶⣯⠿⣿⣶⣟⣻⢿⣷⣽⣻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢀⣯⣟⢀⡇⢼⣿⣿" +
	"\n⣇⠹⣟⣾⣻⣿⣿⢾⡽⣿⣿⣿⣿⣿⣆⢹⣶⣿⣻⣷⣯⣟⣿⣿⣽⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⢀⡿⡇⢸⡇⢸⣿⡇" +
	"\n⣿⣆⠹⣷⡻⣽⣿⣯⢿⣽⣻⣿⣿⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⢸⣿⠇⣼⡇⢸⡿⢠" +
	"\n⡙⠾⣆⠹⣿⣦⠛⣿⢯⣷⢿⡽⣿⣿⣿⣿⣆⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠎⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏⢀⣿⣾⣣⡿⡇⢸⢃⣾" +
	"\n⣿⣷⡌⢦⠙⣿⣿⣌⠻⣽⢯⣿⣽⣻⣿⣿⣿⣧⠩⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡏⢰⢣⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠃⢀⢀⢿⣞⣷⢿⡇⠉⣼⣿" +
	"\n⣿⣽⣆⠹⣧⠘⣿⣿⡷⣌⠙⢷⣯⡷⣟⣿⣿⣿⣷⡀⡹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣈⠃⣸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⢀⣴⡧⢀⠸⣿⡽⣿⢀⣾⣿⣿" +
	"\n⢻⣽⣿⡄⢻⣷⡈⢿⣿⣿⢧⢀⠙⢿⣻⡾⣽⣻⣿⣿⣄⠌⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⢁⣰⣾⣟⡿⢀⡄⢿⣟⣿⢀⣿⣿⣿" +
	"\n⡄⢿⣿⣷⢀⠹⣟⣆⠻⣿⣿⣆⢀⣀⠉⠻⣿⡽⣯⣿⣿⣷⣈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⢀⣠⠘⣯⣷⣿⡟⢀⢆⠸⣿⡟⢸⣿⣿⣿" +
	"\n⣷⡈⢿⣿⣇⢱⡘⢿⣷⣬⣙⠿⣧⠘⣆⢀⠈⠻⣷⣟⣾⢿⣿⣆⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⣠⡞⢡⣿⢀⣿⣿⣿⠇⡄⢸⡄⢻⡇⣼⣿⣿⣿" +
	"\n⣿⣷⡈⢿⣿⡆⢣⡀⠙⢾⣟⣿⣿⣷⡈⠂⠘⣦⡈⠿⣯⣿⢾⣿⣆⠙⠻⠿⠿⠿⠿⡿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢋⣠⣾⡟⢠⣿⣿⢀⣿⣿⡟⢠⣿⢈⣧⠘⢠⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣄⠻⣿⡄⢳⡄⢆⡙⠾⣽⣿⣿⣆⡀⢹⡷⣄⠙⢿⣿⡾⣿⣆⢀⡀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⢀⣀⣠⣴⡿⣯⠏⣠⣿⣿⡏⢸⣿⡿⢁⣿⣿⢀⣿⠆⢸⣿⣿⣿⣿" +
	"\n⣿⣿⣿⣿⣦⡙⣿⣆⢻⡌⢿⣶⢤⣉⣙⣿⣷⡀⠙⠽⠷⠄⠹⣿⣟⣿⣆⢙⣋⣤⣤⣤⣄⣀⢀⢀⢀⢀⣾⣿⣟⡷⣯⡿⢃⣼⣿⣿⣿⠇⣼⡟⣡⣿⣿⣿⢀⡿⢠⠈⣿⣿⣿⡟" +
	"\n⣿⣿⣿⣿⣿⣷⣮⣿⣿⣿⡌⠁⢤⣤⣤⣤⣬⣭⣴⣶⣶⣶⣆⠈⢻⣿⣿⣆⢻⣿⣿⣿⣿⣿⣿⣷⣶⣤⣌⣉⡘⠛⠻⠶⣿⣿⣿⣿⡟⣰⣫⣴⣿⣿⣿⣿⠄⣷⣿⠆⢻");
		console.log(cmdLog("ascii", msg));
      }
	//youropinion
	else if (cmd("youropinion", msg)) {
		msg.channel.send("https://i.imgur.com/YxFWfuf.jpg");
		console.log(cmdLog("youropinion", msg));
      }
	//youngotisjizz
	else if (cmd("youngotisjizz", msg)) {
		msg.channel.send("http://i.imgur.com/XQ6CAtl.gif");
		console.log(cmdLog("youngotisjizz", msg));
      }
	//iamwood
  	else if (cmd("iamwood", msg)) {
		msg.channel.send("i");
		msg.channel.send("am wood");
		console.log(cmdLog("iamwood", msg));
      }
	//iamthefuckingstrong
  	else if (cmd("iamthefuckingstrong", msg)) {
		msg.channel.send("i am the fucking strong");
		msg.channel.send("stoopid");
		console.log(cmdLog("iamthefuckingstrong", msg));
      }
	//duwang
  	else if (cmd("duwang", msg)) {
		msg.channel.send("what a beautiful");
		msg.channel.send("duwang");
		console.log(cmdLog("duwang", msg));
      }
	//chew
  	else if (cmd("chew", msg)) {
		msg.channel.send("chew");
		console.log(cmdLog("chew", msg));
      }
	//ihadaboner
  	else if (cmd("ihadaboner", msg)) {
		msg.channel.send("i had a boner");
		console.log(cmdLog("ihadaboner", msg));
      }
	//info (YTP Wiki Pages)
    else if (cmd("info", msg)){
	  if (cmd("info billy mays", msg)) {
		  //Billy Mays
          msg.channel.send("Billy Mays (July 20, 1958 - June 28, 2009) was a person known for selling various useless products. Some of these products include; Kaboom Putty, Green Away, and the Suicide Ladder.");
  	  }else if (cmd("info wampa", msg)) {
		  //Wampa
          msg.channel.send("Wampa Krabs is the sadistic brother of Mr. Krabs and a morbid version of him. He is also the biggest enemy of Pranktin. He is the founder of the Rusty Krap and the only employee on it.");
  	  }else if (cmd("info weegee", msg)) {
		  //weegee
          msg.channel.send("While people confuse Weegee with Luigi, they are in fact wrong. Luigi is an Italian Plumber while Weegee is an evil being (presumed by some to be a god) bent on universal domination, leaving their appearance their only similarity. He is believed to be the younger brother of Malleo. He is currently the owner of The Krusty Krust. He likes transform others into him. You must obey Weegee or else you will die. ");
  	  }else if (cmd("info malleo", msg)) {
		  //Malleo
          msg.channel.send("Malleo is the brother of Weegee and founder of the Toast Club in the Mushroom Kingdom. At first Malleo and Weegee were best friends, but then the two turned against each other over some spaghetti. It should be noted that Malleo is equally as creepy and unsettling as Weegee is.");
      }else if (cmd("info donald trump", msg)) {
		  //Donald Trump
          msg.channel.send("Donald John Trump (A.K.A. Pepe the Frog) (born June 14, 1946) is America's President who likes to insult people to make him look good. He intends on making toilets across the border-wall between MURICA and Mexico, so the illegals begging to get into the country, AND the border patrol can PEE legally! He is the founder of several companies such as Trumps Blazing Blenders which went bankrupt in 2009. He also likes ISIS, and sends em' guns, dogs, oil, and potatoes, all of which, they throw back at him, starting at the famous date 9/11. He is the current president of our 'great' nation.");
      }else if (cmd("info retro", msg)) {
		  //Retro's 8-bit Paradise
          msg.channel.send("The best Discord Server in existence!");
      }else if (cmd("info facebook", msg)) {
		  //Facebook
          msg.channel.send("Shitbook is a site founded in 2004 by a man named Mark Suckerberg at Hahvahd (Harvard) University. He is reportedly the 5th shittiest person in the world and even has his own page to puke at too.");
      }else if (cmd("info twitter", msg)) {
		  //Twitter
          msg.channel.send("Shitter is a site founded two years after Facebook was born. It's really a pointless site because it is just nothing but hashtags and tweets, getting followers, retweeting, and favoriting.");
      }else if (cmd("info usa", msg)) {
		  //USA
          msg.channel.send("The United States (USA), also called Murica, The Great State(s) of America, Freedom Land or just We trust Gawwd (aka Jesusland) is a ruin of a once great nation People here often mindlessly carry out their lives without any hopes or dreams, despite the immense wealth, which is held by the top 0.00001%.");
      }else if (cmd("info pranktin", msg)) {
		  //Pranktin
          msg.channel.send("Pranktin was a deformed counterpart of Plankton, portrayed as a a psycho, fearmonger and sadistic murderer who wants to see the whole world burn. He was a member of the Skodwarde Squad, but all he really wanted was to abuse the other members.");
      }else if (cmd("info ytp", msg)) {
		  //YTP (YouTube Poop)
          msg.channel.send("YouTube Poop (YTP for short) is a video mashup used by poopers to make videos hilarious, terrifying, or confusing. YouTube Poop does not actually have anything to do with poop, despite the name. It just means that the stuff you see is a load of shit.");
      }else if (cmd("info you", msg)) {
		  //You!
          msg.channel.send("You are the viewer of the YouTube Poop, the best friend of I, the hero of YouTube Poop World and the main protagonist of YouTube Poop and Undertale. Who, during Hotel Mario helps Mario and Luigi at the insistence of the latter. Nobody is sure who 'You' really is, but Mario apparently does as he trusts You enough to allow You to read the Enclosed Instruction Book. You have also been referred to as 'the best player ever', whatever that means.");
      }else if (cmd("info i", msg)) {
		  //I
          msg.channel.send("I (also called sometimes My, Me or Mine, if he's talking with himself also with -self as end) is the most important conversation partner of You. Some people keep I and You as so good buddies, they sometimes say the quote 'You is I and I is you' (not to be confused with 'You are me and I am you').");
      }else if (cmd("info morshu", msg)) {
		  //Morshu
          msg.channel.send("Morshu is a Koridian shopkeeper. He currently has one employee. Even though he's not a member of the UMA, he aides them and lets them use his shop as a hideout. He has a thyroid condition that gives him his obesity.");
      }else if (cmd("info pepe", msg)) {
		  //Pepe
          msg.channel.send("Pepe is a green nazi frog with a dark-blue shirt and orange shorts. He has black eyes and big brown lips for sucking on You's cock. One of his most popular catchphrases is 'Feels good man'.");
      }else if (cmd("info youtube", msg)) {
		  //YouTube
          msg.channel.send("YouTube is the place where nearly all YouTube Poops are uploaded, hence the name. Although it seems friendly, it has a darker side, which was created when Google bought YouTube, and when companies like Viacom, Warner Music Group (WMG), and Colgate began taking our stuff down. The website is also controversial for other reasons (such as YouTube 2.0), but it's home.");
      }else if (cmd("info shrek", msg)) {
		  //Shrek
          msg.channel.send("Shrek is an ogre from the movie 'Shrek' (you guessed it!!). He is also from the short Machinima 'Shrek is Love, Shrek is life'. For most of his life, he kept asked people what they were doing in his swamp, followed by a rape..");
      }else if (cmd("info rusty krap", msg)) {
		  //Rusty Krap
          msg.channel.send("The Rusty Krap is a restaurant which is rusty as crap and the creator, Wampa Krabs still has it today as one of the most evil restaurants in all YTP history, being even worse than The Krab Krusty.");
      }else if (cmd("info cum bucket", msg)) {
		  //Cum Bucket
          msg.channel.send("The Cum Bucket is a restaurant owned by Plankton. It is right across the street from the Krusty Krab, and next to the Krab Krusty and the Rusty Krap, its know for sell the most tasty food in Bikini Bottom.");
      }else if (cmd("info gay luigi", msg)) {
		  //Gay Luigi
          msg.channel.send('"Nice of the princess to invite us over to a pick-nick, gay luigi?" - Fat Mario Gay Luigi (born July 23 1979, age 36) is the character played by the famous Luigi in Hotel Mario.');
	  }else if (cmd("info barack obama", msg)) {
		  //Barack Obama
          msg.channel.send("Barack Obama (full name Kim Jong Mubarak Clinton Hussein Mussolini Donner Harper Stalin Hideki Bin Hitler Osama Trump Obama II, also known as Lil' B, Black Jesus, Token black guy, Bogeyman, etc.) is the reason You need to get the fuck over to Canada. He was hand picked in 2008 to be next shit brain to drive America further downward.");
	  }else if (cmd("info yo momma", msg)) {
		  //Yo Momma
          msg.channel.send("Yo Momma was born in 1490, causing the note she's so old, that archaeologists from Wumbo University found ancient pottery in her vagina. In school she was often bullied because she looked like she had all the male members of Duck Dynasty in a headlock. Eventually some retard (Yo Faddah) knocked her up. She then became so fat that she had two watches one for each time zone she was in. After nine ~~thousand and one~~months she gave birth to You.");
      }else if (cmd("info mother russia", msg)) {
		  //Mother Russia
          msg.channel.send("Mother Russia, also known as Мать Россия or V-Land, is a nation which lies partly in Asia and partly in Europe (though it's seen as a European country). Mother Russia is currently being run by Nikolai Belinski. Mother Russia is the reason half of the world's military can't compete with it.");
      }else if (cmd("info vodka", msg)) {
		  //Vodka
          msg.channel.send("Vodka is an alcoholic product that is usually made to be mixed with another beverage. It's common and fast selling in the YouTube Poop World, being sold at Morshu's shop and Ganon's Pub.");
	  }else if (cmd("info youtube poop world", msg)) {
		  //The YouTube Poop World
          msg.channel.send("The YouTube Poop World is a magical place in which every YouTube Poop character lives. It now takes up about half of YouTube. This world is the setting for all poops. It is largely owned by Hyrule, part of which is an undersea ruin called Bikini Bottom. Another small portion is owned the Mushroom Kingdom, a smaller kingdom nearby.  Another section is ruled by a nearby planet called Planet Mobius.  Among all three of these realms exist many, many other, smaller cities, towns, and villages that are taken up by the less popular YTP characters.");
      }else if (cmd("info gods of ytp", msg)) {
		  //Gods of YTP
          msg.channel.send("The Gods of YTP are the people responsible of creating what we call now YouTube Poop. They are universally respected by their people and no matter how many times they die, they will always come back.");
      }else if (cmd("info great mighty poo", msg)) {
		  //Great Mighty Poo
          msg.channel.send("The Great Mighty Poo is the god of all fecal matter and one of the creators of The YouTube Poop World. He lives in the Poo Mountain where he would continue growing into a mountain of defecation if he didn't keep throwing shit at intruders like Conker. He and his disciple, Cyrus wish to merge all worlds into one with the YTP World, they only have one to go.");
	  }else if (cmd("info fuhur", msg)) {
		  //Fuhur
          msg.channel.send("The Forced Uncary-Hartzian Union Republic (or Fuhur) is a nation between United States of America and the Mushroom Kingdom, and the home of metal music. It blocks the sea route of the USA to other nations at the east side. The capitol of Fuhur was Darth Tendo, and its national language is German Language.");
	  }else if (cmd("info german language", msg)) {
		  //German Language
          msg.channel.send("German (or also *~~Dutch~~* Deutsch) is a language that is spoken in Germany (Duh), Fuhur, Austria, and part of Sparta. It is almost impossible to learn for people who do not speak a Germanic language. Their words are extremely long and plentiful. Despite their grammar being marginally close to english, it has many rules that further fuck up Google translate's attempts to reconcile. http://youtubepoop.wikia.com/wiki/File:LanguageSuprise.jpg");
      }else if (cmd("info king leonidas", msg)) {
		  //King Leonidas
          msg.channel.send("King Leonidas has been known kicking or Shoop Da Whooping enemy Persian messengers down the local well (Which has long since lost it's drinkibility due to the bodies of messegers piling up) He is a warrior of incredible muscular physique. Leonidas has a personal score to settle with King Xerxes due to the loss of a certan 300 spartans and vows to have vengeance upon his mortal enemy (Who appears to have limitless amounts of thugs to do his bidding). He later died.");
      }else if (cmd("info mario", msg)) {
		  //Mario
          msg.channel.send("Mario (born October 11, 1981; age  35) is the older and more successful brother of Luigi. Mario and his brother are one of the most important and highly regarded characters in YouTube Poop World with those such as King Harkinian, Link and Sonic the Hedgehog. He is the only living being who knows what is written in the Enclosed Instruction Book.");
      }else if (cmd("info link", msg)) {
		  //Link
          msg.channel.send("Link (born January 1, 1985 XDXD age 31) is a Hyrulian slave descended from a long line of similar looking boy toys with the same name. Link is the last of his line due to a genital deformity, being unable to reproduce. Link is also the main protagonist in YouTube Poop World. His most respected quote is EXXXCUUUSSMMMMEEEEE Princess!");
      }else if (cmd("info moar krabs", msg)) {
		  //Moar Krabs
          msg.channel.send("Moar Krabs (pronounced as More Crabs) is one of the Skodwarde Squad. It is especially popular among Kortez3000/SantaWithTeeth/SantaWithGuns fan segments. It is also something a person wanting to have unprotected sex with several hookers might say.");		  
	  }else if (cmd("info list", msg) ||cmd("info help", msg)) {
		  //List of current YTP wiki pages
		  msg.channel.send("***LIST OF YTP WIKI PAGES:***"+
		  "\n``Billy Mays``, ``Wampa``, ``Weegee``, ``Malleo``, ``Donald Trump``, ``Retro's 8-bit Paradise``, ``Facebook``, ``Twitter``, ``USA``, ``Pranktin``, ``YTP (YouTube Poop)``, ``You``, ``I``, ``Morshu``, ``Pepe``, ``YouTube``, ``Shrek``, ``Rusty Krap``,``Cum Bucket``, ``Gay Luigi``, ``Barack Obama``, ``Yo Momma``, ``Mother Russia``, ``Vodka``, ``The YouTube Poop World``, ``Gods of YTP``, ``Great Mighty Poo``, ``Fuhur``, ``German Language``, ``King Leonidas``, ``Mario``, ``Link``, ``Moar Krabs``");
	  }else {
		  //ERROR
        msg.channel.send("Page for YTP Wiki info not found!");
	  }
      console.log(cmdLog("info", msg));
	}
	//scp
	else if(cmd("scp ", msg)) {
	  msg.channel.send("http://www.scp-wiki.net/scp-" + arg[1]);
	  console.log(cmdLog("scp", msg));
	}
	//argnumber (number of arguments posted; very useful for debugging)
    else if (cmd("argnumber", msg)) {
      msg.channel.send(arg.length);
      console.log(cmdLog("argnumber: " + arg.length, msg));
    }
	//role
	else if (cmd("role", msg)) {
	  if (role(msg.member)) {
	  msg.channel.send("You are a Rhodochrosite"); //User has sufficient roles
	  }
	  else {
	  msg.channel.send(perm); //Has no sufficient roles
	  }
	  console.log(cmdLog("role check: " + role(msg.member), msg));
	}
	//nuke (the most underdeveloped, yet complicated command as of now)
    else if (cmd("nuke", msg)) {
      //nuke help command
      if (cmd("nuke ?", msg) || (cmd("nuke help", msg))) {
        msg.channel.send("The nuke command currently works for the following places:" +
      "\n ``USA``, ``Russia``, ``North Korea``, ``North Pole``, ``Canada``, ``Hyrule``, ``Gamelon``, ``Red Beryl``, ``Switzerland``, ``Mushroom Kingdom``, ``Myself``, ``Brazil``, ``Germany``,  ``China``, ``Australia``, ``Moon``, ``France``, ``Britain``, ``Japan``, ``Cringe``, ``Alabama``, ``Bronies``, ``Bikini Bottom``.");
		//America
      }else if (cmd("nuke usa", msg) || cmd("nuke america", msg) || cmd("nuke murica", msg) || cmd("nuke united states", msg)) {
        if (tf >= 1){
            msg.channel.send("Successful.");
            msg.channel.send("http://img.myconfinedspace.com/wp-content/uploads/tdomf-2/456866/usa-nuke.jpg");
          }else{
            msg.channel.send("Wrong!");
            msg.channel.send("http://images.christianpost.com/full/87442/donald-trump.jpg");
          }
  		//Russia
      }else if (cmd("nuke russia", msg)) {
        if (tf >= 1){
            msg.channel.send("Successful.");
            msg.channel.send("http://www.cubanet.org/wp-content/uploads/2015/06/putin-sad.jpg");
          }else{
            msg.channel.send("Putin punched the nuke back to your country!");
            msg.channel.send("http://viralswarm.s3.amazonaws.com/wp-content/uploads/2016/09/putin-smug-tnd.jpg");
        }
  		//North Korea
      }else if (cmd("nuke north korea", msg)) {
			msg.channel.send("Successful.");
			msg.channel.send("http://static5.businessinsider.com/image/54e709e4dd0895dd288b4663-1200-924/kim-jong-un-haircut.jpg");
  		//Rhodesia
      }else if (cmd("nuke rhodesia", msg)) {
			msg.channel.send("Failure, the nuke lands but Rhodesians never die.");
			msg.channel.send("https://www.youtube.com/watch?v=tBVDdr3wqm4");
  		//Red Beryl
      }else if (cmd("nuke red beryl", msg)) {
			msg.channel.send("You must be a fool if you think you can kill me.");
			msg.channel.send("https://i.imgur.com/UkGrhwk.png");
  		//North Pole
      }else if (cmd("nuke north pole", msg)) {
			msg.channel.send("Santa fights back.");
			msg.channel.send("http://www.myorganizedchaos.net/wp-content/uploads/2012/11/terrible-family-christmas-photo.jpeg");
		//Canada
  	  }else if (cmd("nuke canada", msg)) {
			msg.channel.send("Successful.");
			msg.channel.send("http://www.simpsonseh.com/images/episodepics/CABF18_1.png");
  		//Hyrule
      }else if (cmd("nuke hyrule", msg) || cmd("nuke gamelon", msg)) {
			msg.channel.send("Duke Onkled begs for thy mercy.");
			msg.channel.send("https://baasdebeer.files.wordpress.com/2015/07/duke_onkled.jpg");
    	//Switzerland
      }else if (cmd("nuke switzerland", msg)) {
			msg.channel.send("Failure; the neutrality of Switzerland blocks the nuke.");
			msg.channel.send("http://www.nationalstereotype.com/wp-content/uploads/2014/10/Switzerlands-feelings-on-your-national-stereotypes.jpg");
  		//Mushroom Kingdom
      }else if (cmd("nuke mushroom kingdom", msg)) {
			msg.channel.send("Successful.");
			msg.channel.send("http://www.todayifoundout.com/wp-content/uploads/2016/03/mushroom.jpg");
  		//Yourself
      }else if (cmd("nuke myself", msg)) {
			msg.channel.send("Don't you think bleach is a little less overkill?");
  		//Brazil
      }else if (cmd("nuke brazil", msg)) {
			msg.channel.send("A football-shaped nuke with the colors 'red, black, and gold' has recently been dropped in Sao Paolo!");
			msg.channel.send("http://img2.izismile.com/img/img7/20140710/640/brazils_world_cup_fans_break_down_at_teams_loss_640_27.jpg");
  		//Bikini Bottom
      }else if (cmd("nuke bikini bottom", msg)) {
			msg.channel.send("Success!");
			msg.channel.send("https://www.youtube.com/watch?v=2ObokySagiQ");
  		//Germany
      }else if(cmd("nuke germany", msg) || cmd("nuke berlin", msg)) {
        if (tf >= 0.5){
            msg.channel.send("Erfolgreich.");
            msg.channel.send("http://www.dailystormer.com/wp-content/uploads/2016/04/Angela-Merkel-With-Sad-Face-Funny-Photoshop-Image.jpg");
          }else{
            msg.channel.send("The Berlin Wall blocks the nuke!");
            msg.channel.send("http://cdn.theatlantic.com/static/infocus/wall110414/w20_04180444.jpg");
        }
  		//Japan
      }else if (cmd("nuke japan", msg)) {
        if (tf >= 1){
            msg.channel.send("Anime eliminated!");
            msg.channel.send("https://img.ifcdn.com/images/de067181a7ec587982397a5e58931f18f0fa21d59e20dd2fff0f4eca20287f8a_1.jpg");
        }else{
            msg.channel.send("It just got gallick-gun'd back to 'Murika!");
            msg.channel.send("http://www.finalsayan.com/images/immaggini/tecniche/Vegeta-Big_Bang_Attack.jpg");
        }
  		//France
      }else if (cmd("nuke france", msg)) {
        if (tf >= 1){
            msg.channel.send("France surrenders before the nuke touches down!");
            msg.channel.send("http://img2.wikia.nocookie.net/__cb20131028164608/polandball/images/f/f2/Franceball.png");
        }else{
            msg.channel.send("Radiation bleaches France's flag!");
            msg.channel.send("http://img2.wikia.nocookie.net/__cb20131028164608/polandball/images/f/f2/Franceball.png");
        }
		//Australia
      }else if (cmd("nuke australia", msg)) {
			msg.channel.send("Kangaroos eliminated!");
			msg.channel.send("http://www.abc.net.au/radionational/image/7314278-1x1-700x700.jpg");
		//China
      }else if (cmd("nuke china", msg)) {
			msg.channel.send("Successful!");
			msg.channel.send("http://sd.keepcalm-o-matic.co.uk/i/kill-koreans-and-nuke-china.png");
		//Moon
      }else if (cmd("nuke moon", msg)) {
			msg.channel.send("Cheese melted!");
			msg.channel.send("http://media.moddb.com/images/mods/1/12/11217/Editor_2009-04-15_01-54-08-29.jpg");
		//UK
      }else if (cmd("nuke uk", msg) || cmd("nuke britain", msg) || cmd("nuke united kingdom", msg) || (cmd("nuke england", msg))) {
			msg.channel.send("Successful!");
			msg.channel.send("http://i.dailymail.co.uk/i/pix/2012/02/15/article-2101508-11BF02C3000005DC-577_634x359.jpg");
  		//Cringe
      }else if (cmd("nuke cringe", msg)) {
			msg.channel.send("You just nuked yourself!");
			msg.channel.send("http://jokideo.com/wp-content/uploads/meme/2014/06/Reaction-pic---Cringe.jpg");
		//Alabama
      }else if (cmd("nuke alabama", msg)) {
			msg.channel.send("A tornado picks up the nuke and takes it away.");
			msg.channel.send("https://upload.wikimedia.org/wikipedia/en/2/28/Waff_Tower_Cam.jpg");
		//Bronies
      }else if (cmd("nuke bronies", msg)) {
			msg.channel.send("The cancer has been washed.");
			msg.channel.send("https://i.ytimg.com/vi/FaKnwWj4lZ4/maxresdefault.jpg");
		//Users
	  }else if (msg.guild.member(msg.mentions.users.first()) != null) {
			msg.channel.send("Nice try.");
      }else {
		msg.channel.send("Nuke target not found! Type ``b!nuke help`` for more infos!");
      }
      console.log(cmdLog("nuke launched in " + arg[1], msg));
    }
	//impregnate
    else if (cmd("impregnate", msg)) {
      //impregnate help command
      if (cmd("impregnate ?", msg) || (cmd("impregnate help", msg))) {
        msg.channel.send("Who do you wish to impregnate?" +
      "\n ``Nicholas``, ``Cyclops``, ``Austin``, ``Nimble``, ``Soda``.");
		//Nicholas
      }else if (cmd("impregnate nicholas", msg)) {
        msg.channel.send("Nicholas is now ***P R E G N A N T***.");
        msg.channel.send("https://i.imgur.com/Ca8gJ5N.jpg");
  		//Cyclops
      }else if (cmd("impregnate cyclops", msg)) {
        msg.channel.send("Purple Bitch is now ***P R E G N A N T***.");
        msg.channel.send("https://i.imgur.com/sVoTK50.jpg");
		//Austin
      }else if (cmd("impregnate austin", msg)) {
        msg.channel.send("DT is now ***P R E G N A N T***.");
        msg.channel.send("https://i.imgur.com/n1gbv04.jpg");
		//Nimble
      }else if (cmd("impregnate nimble", msg)) {
        msg.channel.send("Nimble is now ***P R E G N A N T***.");
        msg.channel.send("http://i.imgur.com/62wFN9B.jpg");
		//Soda
      }else if (cmd("impregnate soda", msg)) {
        msg.channel.send("Soda is now ***P R E G N A N T***.");
        msg.channel.send("http://i.imgur.com/frrgvMG.jpg");
		//Rhodochrosite
      }else if (cmd("impregnate rhodochrosite", msg)) {
        msg.channel.send("I am not ready yet.");
        msg.channel.send("https://i.imgur.com/5QoFbx1.jpg");
      }else {
        msg.channel.send("Invalid pregnancy! Type ``b!impregnate help`` for more infos!");
	  }
      console.log(cmdLog("impregnated " + arg[1], msg));
    }
	//roast (über-funny jokes)
    else if (cmd("roast", msg)) {
      if (arg.length != 1) {
        roast = arg[1]; //allows roast number to be set manually
      }
      if (roast <= 1){
        msg.channel.send("Your life must've gone pretty far downhill if you are speaking with me instead of a real human!");
      }else if (roast <= 2){
        msg.channel.send("Your mom! OHHHHHHHHHHH11111!!!!1!1111");
      }else if (roast <= 3){
        msg.channel.send("You don't belong on this server. You belong in a Gulag eating corn off the ground like the subhuman filth you are.");
      }else if (roast <= 4){
        msg.channel.send("Keep rolling your eyes, maybe you'll find a brain back there.");
      }else if (roast <= 4){
        msg.channel.send("Being ugly is okay, but you're overdoing it.");
      }else if (roast <= 5){
        msg.channel.send("I see you were so impressed with your first chin, that you decided to have two more.");
      }else if (roast <= 6){
        msg.channel.send("Too bad you can't wear those Instagram filters in real life.");
      }else if (roast <= 7){
        msg.channel.send("Keep on talking, *maybe* you'll say something intelligent someday.");
      }else if (roast <= 8){
        msg.channel.send("I never forget a face, but in your case I would love to make an exception..");
      }else if (roast <= 9){
        msg.channel.send("Roses are red, violets are blue, god made us beautiful, but what happened to you?");
      }else if (roast <= 10){
        msg.channel.send("I know I'm talking like an idiot, that's the only language you'll understand..");
      }else if (roast <= 11){
        msg.channel.send("Mirrors don't talk, and lucky for you, they don't laugh.");
      }else if (roast <= 12){
        msg.channel.send("I'd slap you, but you know, shit splatters.");
      }else if (roast <= 13){
        msg.channel.send("Can I take your picture? I love photos of natural disasters.");
      }else if (roast <= 14){
        msg.channel.send("I would love to insult you, but I'm afraid I cannot perform as well as nature did.");
      }else if (roast <= 15){
        msg.channel.send("https://cdn.discordapp.com/attachments/251095673259163658/305370280530804736/download_4.jpg");
      }else{
        msg.channel.send("You suck at life so much that you are on this server.");
      }
      console.log(cmdLog('roast', msg));
    }
	//maya
    else if (cmd("maya", msg)) {
      if (arg.length != 1) {
        maya = arg[1]; //allows maya number to be set manually
      }
	  if (maya <= 1){
        msg.channel.send("Burger Queen");
        msg.channel.send("https://i.imgur.com/c0JyOVQ.png");
	  }else if (maya <= 2){
        msg.channel.send("https://i.imgur.com/HZKt3MB.png");
	  }else if (maya <= 3){
        msg.channel.send("https://i.imgur.com/OqyIzEO.jpg");
      }else if (maya <= 4){
        msg.channel.send("https://i.imgur.com/JYabaJ8.jpg");
      }else if (maya <= 5){
        msg.channel.send("https://i.imgur.com/89Mhbbw.jpg");
      }else if (maya <= 6){
        msg.channel.send("https://i.imgur.com/zomecHS.png");
      }else if (maya <= 7){
        msg.channel.send("https://i.imgur.com/l6VVAjS.png");
      }else if (maya <= 8){
        msg.channel.send("https://i.imgur.com/GciiXoL.jpg");
      }else if (maya <= 9){
        msg.channel.send("https://i.imgur.com/zw0GPPv.jpg");
      }else if (maya <= 10){
        msg.channel.send("https://i.imgur.com/9v9QHmu.jpg");
      }else if (maya <= 11){
        msg.channel.send("https://i.imgur.com/L2PgOKd.jpg");
      }else if (maya <= 12){
        msg.channel.send("https://i.imgur.com/FjWIDnx.png");
      }else if (maya <= 13){
        msg.channel.send("https://i.imgur.com/dmMdjxi.png");
      }else if (maya <= 14){
        msg.channel.send("https://i.imgur.com/1TW0vYr.jpg");
      }else if (maya <= 15){
        msg.channel.send("http://i.imgur.com/UAZ5EBU.gif");
      }else if (maya <= 16){
        msg.channel.send("http://i.imgur.com/6OTAZl9.jpg");
      }else if (maya <= 17){
        msg.channel.send("https://i.imgur.com/3aGORow.jpg");
      }else if (maya <= 18){
        msg.channel.send("http://i.imgur.com/hvtbKRy.gif");
      }else if (maya <= 19){
        msg.channel.send("https://i.imgur.com/gHydAj2.jpg");
      }else if (maya <= 20){
        msg.channel.send("https://i.imgur.com/EfCi16j.jpg");
      }else if (maya <= 21){
        msg.channel.send("https://i.imgur.com/TEx1mbV.jpg");
      }else if (maya <= 22){
        msg.channel.send("https://i.imgur.com/frLc853.png");
      }else if (maya <= 23){
        msg.channel.send("http://i.imgur.com/xBdIPsl.gif");
      }else if (maya <= 24){
        msg.channel.send("https://i.imgur.com/DYbcMQH.jpg");
      }else if (maya <= 25){
        msg.channel.send("https://i.imgur.com/2yEW9sF.png");
      }else if (maya <= 26){
        msg.channel.send("http://i.imgur.com/CTUUX7S.gif");
      }else if (maya <= 27){
        msg.channel.send("https://i.imgur.com/QaL9aEl.png");
      }else if (maya <= 28){
        msg.channel.send("https://i.imgur.com/mJLzQnO.jpg");
      }else if (maya <= 29){
        msg.channel.send("https://i.imgur.com/maCT9DR.jpg");
      }else if (maya <= 30){
        msg.channel.send("https://i.imgur.com/c4AUZeR.png");
      }else if (maya <= 31){
        msg.channel.send("https://i.imgur.com/oc5TsI9.jpg");
      }else if (maya <= 32){
        msg.channel.send("https://i.imgur.com/3h0H45M.jpg");
      }else if (maya <= 33){
        msg.channel.send("https://i.imgur.com/yPq4n7m.jpg");
      }else if (maya <= 34){
        msg.channel.send("https://i.imgur.com/v2K9tn1.png");
      }else if (maya <= 35){
        msg.channel.send("http://i.imgur.com/1CWD6pf.gif");
      }else if (maya <= 36){
        msg.channel.send("http://i.imgur.com/8PUXNgR.gif");
      }else if (maya <= 37){
        msg.channel.send("https://i.imgur.com/bvZUkmY.jpg");
      }else if (maya <= 38){
        msg.channel.send("https://i.imgur.com/wQ5iytx.jpg");
      }else if (maya <= 39){
        msg.channel.send("https://i.imgur.com/EmNRKgs.jpg");
      }else if (maya <= 40){
        msg.channel.send("http://i.imgur.com/P8iyEDv.gif");
      }else if (maya <= 41){
        msg.channel.send("https://i.imgur.com/rE0hH1e.png");
      }else if (maya <= 42){
        msg.channel.send("https://i.imgur.com/CaZvFsq.jpg");
      }else if (maya <= 43){
        msg.channel.send("https://i.imgur.com/IIz5rsx.jpg");
      }else if (maya <= 44){
        msg.channel.send("https://i.imgur.com/ooGxQLH.png");
      }else if (maya <= 45){
        msg.channel.send("https://i.imgur.com/mLHF6fu.jpg");
      }else if (maya <= 46){
        msg.channel.send("https://i.imgur.com/nsssDXq.png");
      }else if (maya <= 47){
        msg.channel.send("https://i.imgur.com/oZyalZr.jpg");
      }else if (maya <= 48){
        msg.channel.send("https://i.imgur.com/R6E24ZN.jpg");
      }else if (maya <= 49){
        msg.channel.send("https://i.imgur.com/W2xqb5f.jpg");
      }else{
        msg.channel.send("https://i.imgur.com/Zc06u7A.jpg");
      }
      console.log(cmdLog('maya', msg));
    }
	//itsallfuckinglewds
    else if (cmd("itsallfuckinglewds", msg)) {
      if (arg.length != 1) {
        itsallfuckinglewds = arg[1]; //allows itsallfuckinglewds number to be set manually
      }
	  if (itsallfuckinglewds <= 1){
        msg.channel.send("https://i.imgur.com/jX98Jkf.jpg");
	  }else if (itsallfuckinglewds <= 2){
        msg.channel.send("https://i.imgur.com/mCAkXIV.jpg");
      }else{
        msg.channel.send("https://i.imgur.com/5yllVF9.png");
      }
      console.log(cmdLog('itsallfuckinglewds', msg));
    }
	//avatar
    else if(cmd("avatar", msg)) {
      if (arg.length === 2){
        if (msg.guild.member(msg.mentions.users.first()) === null) {
          //checks if no user is mentioned
          msg.channel.send("No proper user mentioned! Use the following syntax! ``b!avatar [@user]``")
        }else{
          msg.channel.send(msg.mentions.users.first().avatarURL);
        }
      }else{
        msg.channel.send(msg.author.avatarURL);
      }
      console.log(cmdLog('avatar of ' + arg[1], msg));
    }
	//advice (still a WIP)
    else if (cmd("advice", msg)) {
      if(cmd("advice getrichquick", msg)) {
        msg.channel.send("https://youtu.be/zZKp_jFxQJc");
  	  }else if(cmd("advice future", msg)) {
  		  msg.channel.send("https://www.youtube.com/watch?v=NH0eJY95rMY");
      }else if(cmd("advice olddisneymovies", msg)) {
  		  msg.channel.send("https://www.youtube.com/watch?v=YVEY24ieq08");
  	  }else if(cmd("advice forgottenmeme", msg)) {
    	  msg.channel.send("https://www.youtube.com/watch?v=3Y_Ps4ETwo0");
  	  }else if(cmd("advice getnewfamily", msg)) {
    	  msg.channel.send("https://www.youtube.com/watch?v=LB871SVYMhI");
  	  }else if(cmd("advice glitch", msg)) {
    	  msg.channel.send("https://www.youtube.com/watch?v=8Q2P4LjuVA8");
  	  }else if(cmd("advice drugs", msg)) {
    	  msg.channel.send("https://www.youtube.com/watch?v=JYEDrNC9AWQ");
  	  }else if(cmd("advice party", msg)) {
    	  msg.channel.send("https://www.youtube.com/watch?v=C8G8cdbPmp8");
      }else if(cmd("advice help", msg)) {
        msg.channel.send("type b!help, or maybe call a suicide hotline!");
      }else {
        msg.channel.send("Google it for fucks sake. Too lazy? ok... http://lmgtfy.com/?s=d&q=" + sentence);
      }
     console.log(cmdLog("advice", msg));
    }
	//ask - English
    else if (cmd("ask ", msg)) {
      if (tf >= 1){
        msg.channel.send("Yes!");
      }else{
        msg.channel.send("No..");
      }
      console.log(cmdLog("ask", msg));
    }
	//coinflip (same infrastructure as the b!ask command, just different name and response)
    else if (cmd("coinflip", msg)) {
      if (tf >= 1){
        msg.channel.send("Heads!");
      }else{
        msg.channel.send("Tails!");
      }
      console.log(cmdLog("coinflip", msg));
    }
	//roll
    else if (cmd("roll", msg)) {
		var maxSides = arg[1];
		if (arg.length < 2) {
			maxSides = 6; //default value is 6
		}
		var dice = Math.floor(Math.random() * (maxSides)) + 1; //generates dice value
		if (dice < maxSides){
			msg.channel.send("What a failure. You got " + dice + "! 🎲");
		}else{
			msg.channel.send("Nice job. You got " + dice + "! 🎲");
		}
      console.log(cmdLog("roll " + dice, msg));
    }
	//lenny ( ͡° ͜ʖ ͡°)
	else if (cmd("lenny", msg)) {
      if (cmd("lenny gang", msg)) {
        msg.channel.send("( ͡° ͜ʖ ͡°( ͡° ͜ʖ ͡°( ͡° ͜ʖ ͡°) ͡° ͜ʖ ͡°) ͡° ͜ʖ ͡°)");
      }else{
        msg.channel.send("( ͡° ͜ʖ ͡°)");
      }
      console.log(cmdLog("lenny", msg));
    }
	//serverlist (lists all weegefied servers)
    else if(cmd("serverlist", msg)) {
      msg.channel.send(bot.guilds.array());
      console.log(cmdLog("serverlist", msg))
    }
	//ytp link
    else if(cmd("ytp link", msg)) {
      msg.channel.send("https://discord.gg/dG6GUst");
      console.log(cmdLog("ytp link", msg))
    }
	//miltrupee
    else if(cmd("miltrupee", msg)) {
		var divisor = "1";
		for (i = 0; i < arg[1].length-1; i++) {
			divisor += "0";
		} 
		var miltrupee = arg[1]/divisor+"*10^" + (7701019+arg[1].length);
		if (arg.length < 1) {
			msg.channel.send("Enter a numerical value");
		}else{
			msg.channel.send("The value of that in Miltrupees is:");
			msg.channel.send("``"+miltrupee+"``");
		}
      console.log(cmdLog("miltrupee", msg))
    }

	/*--------5THWORLD-COMMANDS--------
    Commands for the 5th World Server*/

	//asc (also for various conlangs)
    else if (cmd("asc", msg)) {
      //Unch
      if(cmd("asc unch", msg)) {
        if (tf >= 1){
          msg.channel.send("Jau!");
        }else{
          msg.channel.send("Nypv!");
        }
      //Lowlandic
      }else if(cmd("asc lowlandic", msg)) {
        if (tf >= 1){
          msg.channel.send("Jeti!");
        }else{
          msg.channel.send("Net..");
        }
      }
      console.log(cmdLog("ask " + arg[1], msg));
    }
	//map
    else if (cmd('map', msg)) {
      if (cmd("map ?", msg) || (cmd("map help", msg))) {
  		  //Help
		    msg.channel.send("*Map* shows the current versions of maps of The 5th World:" +
    		"\n```'b!map climate' shows a map of the continental climate areas." +
    		"\n'b!map blank' prints a blank map." +
    		"\n'b!map lowlandia' prints a map of Lowlandia." +
    		"\n'b!map grid' prints a gridded map with lati- and longitude." +
    		"\nWithout an explicit argument, it will return a political map.```");
      }else if (cmd("map climate", msg)) {
  		  //climate map
		    msg.channel.send("https://cdn.discordapp.com/attachments/291974093820133387/295650249077293056/5thworld_climate_gridded.png");
      }else if (cmd("map blank", msg)) {
  		  //blank
		    msg.channel.send("https://cdn.discordapp.com/attachments/291974093820133387/295975093928984576/5thworld.png");
      }else if (cmd("map lowlandia", msg)) {
  		  //lowlandia federal map
		    msg.channel.send("https://cdn.discordapp.com/attachments/285866165589508098/298557508463755264/niederien-karte.png");
      }else if (cmd("map grid", msg)) {
  		  //grid map with lati- and longitude
		    msg.channel.send("https://cdn.discordapp.com/attachments/291974093820133387/298552381350608896/5thworld.png");
	    }else{
  		  //Palitikle map (default)
        msg.channel.send("https://cdn.discordapp.com/attachments/291974093820133387/298309872787914752/5thworld.png");
      }
      console.log(cmdLog("map", msg));
    }

	/*-----------RETRO-COMMANDS------------
    Commands for the 8Bit-Paradise server*/
	
	//pleach
    else if (cmd("pleach", msg)) {
      msg.channel.send("_You get the sweetness of a peach but with the effects of bleach_");
      msg.channel.send("**PEACH BLEACH**");
      msg.channel.send("**PLEACH**");
      console.log(cmdLog("pleach", msg));
	  }
	//Music Monday List
    else if (cmd("mm list", msg)) {
      msg.channel.send("Here is the Music Monday Playlist: ```https://www.youtube.com/playlist?list=PLUOWqvTpye3Vyd2n58Q4Zp59hXEQ8m2mo```");
      console.log(cmdLog('mm list', msg));
    }
	//retrolink (links to retro's 8bit paradise)
    else if (cmd("retrolink", msg)) {
      msg.channel.send("Retro's 8bit Paradise: https://discord.gg/cRjS4ay");
      console.log(cmdLog("retrolink", msg));
    }
	//joke (WIP)
    else if (cmd("joke", msg)) {
      if (tf >= 0.5){
        msg.channel.send("```Reporter: Hello sir, what's your name?"+
    	"\nMan: Abdul Al-Rhazim."+
        "\nReporter: Sex?"+
        "\nMan: Three to five times a week."+
        "\nReporter: No no! I mean male or female?"+
    	"\nMan: Yes, male, female... sometimes camel."+
    	"\nReporter: Holy cow!"+
        "\nMan: Yes, cow, sheep... animals in general."+
        "\nReporter: But isn't that hostile?"+
        "\nMan: Yes, horse style, dog style, any style."+
        "\nReporter: Oh dear!"+
        "\nMan: No, no deer. Deer run too fast. Hard to catch.```");
      }else{
        msg.channel.send("Your life...");
      }
      console.log(cmdLog('joke', msg));
     }

	/*------------------------------RHODOCHROSITE-COMMANDS-------------------------------
    Commands meant to be used only by Rhodochrosites, includes a single decline message*/

	//each command needs the role checker   if (role(msg.member))
    //delete (deltes set amt. of messages)
	else if(cmd("delete", msg) || cmd("clear", msg)){
        if (role(msg.member)) {
          var messageNumber;
          if(arg.length === 1){
            messageNumber = 2; //default messages to delete is 2
          } else {
              messageNumber=parseInt(arg[1]) + 1;
          }
          msg.channel.fetchMessages({limit: messageNumber}).then(messages => msg.channel.bulkDelete(messages)); //deletes messages
          msg.channel.send(arg[1] + " messages deleted!"); //posts message about deletion
          console.log(cmdLog(messageNumber + " messages deleted", msg));
        }else{
          msg.channel.send(perm);
        }
      }
    //spammy command
    else if(cmd("dos", msg)) {
        if (role(msg.member)) {
          for (var i = 0; i < arg[1]; i++) {
            msg.channel.send("spam: " + (i+1) + " of " + arg[1] + "!!!");
          }
          console.log(cmdLog("spam", msg));
        }else{
          msg.channel.send(perm);
        }
      }
    //banhammer!
    else if(cmd("ban", msg)) {
        if (role(msg.member)) {
          if (arg.length < 2) {
            msg.channel.send("Not enough arguments! Use the following syntax! ``b!ban [@user-to-be-banned] [reason]``");
          }else{
            if (msg.guild.member(msg.mentions.users.first()) === null) {
				//checks if no user is mentioned
				msg.channel.send("No proper user mentioned! Use the following syntax! ``b!ban [@user-to-be-banned] [reason]``")
            }else{
				msg.guild.member(msg.mentions.users.first()).ban();
				msg.mentions.users.first().send("You have been banned by " + msg.author.username + " for " + arg[2]); //messages bannee
				msg.author.send("You have banned " + msg.mentions.users.first().username + " for " + arg[2]); //messages banner
            }
          }
          console.log(cmdLog("ban " + arg[1], msg));
        }else{
          msg.channel.send(perm);
        }
      }
	//say (says what you say)
    else if (cmd("say", msg)) {
		if(role(msg.member)) {
			msg.channel.send(sentence);
		}else{
			msg.channel.send(perm);
		}
	 console.log(cmdLog("say", msg));
    }
    //warn (warns users sending message both to warnee and warner)
    else if(cmd("warn", msg)) {
        if (role(msg.member)) {
          if (arg.length > 3){
            //too many arguments
            msg.channel.send("Too many arguments. To use this command do: ``b!warn [@user-to-be-warned] [reason]``. For more than one word in a warn reason use _ or - instead of a space");
          }else{
            if (msg.guild.member(msg.mentions.users.first()) === null) {
              //checks if no user is mentioned
              msg.channel.send("No proper user mentioned! Use the following syntax! ``b!warn [@user-to-be-warned] [reason]``")
            }else{
              msg.mentions.users.first().send("You are warned by " + msg.author.username + " for " + arg[2]); //messages the warnee
              msg.author.send("You are warning " + msg.mentions.users.first().username + " for " + arg[2]); //messages the warner
              console.log(cmdLog("warn " + msg.mentions.users.first().username, msg))
            }
          }
        }else {
          msg.channel.send(perm);
        }
      }
	//repeat (says what you say x times)
    else if (cmd("repeat", msg)) {
		if (role(msg.member)) {
			var x ="";
			for (var i = 2; i < arg.length; i++) {
				x = x + " " + arg[i];
			}
			for (var i = 0; i < arg[1]; i++) {
				msg.channel.send(x);
			}
		}else{
			msg.channel.send(perm);
		}
	 console.log(cmdLog("repeat " + x + " " + arg[1] + " times", msg));
	}
});
