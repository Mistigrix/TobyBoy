const Discord = require('discord.js');
const bot = new Discord.Client();
const request = require('request');
var prefix = "*";
var TobyVersion = "1.0.0";

bot.on('ready', () => {
	bot.user.setActivity(bot.users.size + ' fanboys', { type: 'WATCHING' });
	
});

bot.login(process.env.TOKEN);

bot.on('message', message => {

let sender = message.author;
let cont = message.content.slice(prefix.length).split(" ");
const args = message.content.slice(prefix.length).trim().split(/ +/g);
	
if(message.author.bot) return;
let msg = message.content.toUpperCase();
	
if(msg.startsWith(`${prefix}contact`)) {
	const furbaka = users.get("328514801124900866")
	let mess = msg.content.split(' ').splice(1).join(' ');
	let msgcont = mess[0];
	bot.users.get("328514801124900866").sendMessage("Nouveau message : " + msgcont);
	
}
if(msg.startsWith(`${prefix}prefix`)) {
let newprefix = args[0];

	if(newprefix === null){
	const embedprefixnull = new Discord.RichEmbed()
	.setAuthor(message.author.name, message.author.avatarURL)
	.setFooter("TobyBoy " + TobyVersion, bot.user.avatarURL)
	.setColor("953da0")
	.setTitle("Préfix")
	.setDescription(`le préfix est défini en tant que : **${prefix}**`)
	message.channel.sendEmbed(embedprefixnull);
	}

}

});
