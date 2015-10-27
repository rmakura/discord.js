"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Channel = require("./channel.js");

var VoiceChannel = (function (_Channel) {
	_inherits(VoiceChannel, _Channel);

	function VoiceChannel(data, server) {
		_classCallCheck(this, VoiceChannel);

		_Channel.call(this, data, server);
	}

	return VoiceChannel;
})(Channel);