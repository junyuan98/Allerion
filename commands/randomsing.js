var songLyrics = [
			'Havana oh nana, half of my heart is in havana na na na',
			'Is it too late now to say sorry',
			'2+2 IS 4, MINUS 1 THATS 3 QUICK MATHS',
			'BOOM BOOM POW GONNA GET GET',
			'Despacito, nlskdnflkjkljfklsrfkljdlk burito',
			'You just want attention, you dont want my heart',
			'We were just kids when we fell , in, love',
			'People fall in love in mysterious ways, maybe just the touch of a hand',
			'你好吗,我会中文 Ching Chong',
			'AND IIIIIIIIIII***IIII***IIII WILL ALWAYSSSSS LOVEEE YOUUUUU_UUU_**UUU**UUUuuu',
			'When I see your face, theres not a thing that I would change, cause youre amazing, just the way you are',
			'Gave you all I had and you tossed it in the trash, you tossed it in the trash, you did',
			'I hear Jerusalem bells a-ringing, Roman Cavalry choirs are singing',
			'Duuuuuuuuuuuuuuuuuuuuuuun, Dun dun dun dun dun dun dun dun dun dun dun dundun dun dundundun dun dun dun dun dun dun dundun dundun, BOOM',
			'Im a barbie girl, in a barbie world',
];

exports.run = (client, msg, args) => {
    var number = Math.floor(Math.random() * songLyrics.length);
    msg.channel.sendMessage(`${songLyrics[number]}`);
}
