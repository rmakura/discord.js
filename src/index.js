var request = require("superagent");
var Endpoints = require("./Endpoints.js"); 
var Client = require("./Client.js");
var Color = require("../ref/colours.js");

var Discord = {
	Endpoints : Endpoints,
	Client : Client,
	Color : Color,
	User : require("./user.js"),
	Server : require("./server.js"),
	Channel : require("./channel.js"),
	Message : require("./message.js"),
	Invite : require("./invite.js"),
	PMChannel : require("./PMChannel.js"),
	ServerPermissions : require("./ServerPermissions.js"),
	ChannelPermissions : require("./ChannelPermissions.js"),
	EvaluatedPermissiosn : require("./EvaluatedPermissions.js"),
	VoiceChannel : require("./VoiceChannel.js"),
	gameMap : require("../ref/gameMap.json")
}

Discord.patchStrings = function () {

	defineProperty("bold", "**");
	defineProperty("underline", "__");
	defineProperty("strike", "~~");
	defineProperty("code", "`");
	defineProperty("codeblock", "```");
	defineProperty("newline", "\n");

	Object.defineProperty(String.prototype, "italic", {
		get: function () {
			return "*" + this + "*";
		}
	});

	function defineProperty(name, joiner) {
		Object.defineProperty(String.prototype, name, {
			get: function () {
				return joiner + this + joiner;
			}
		});
	}
}

module.exports = Discord;