/* global monogatari */

// Define the messages used in the game.
monogatari.action('message').messages({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	},
	'Skill': {
		title: 'TIP',
		body: `
		You’re about to make your first skill choice! Skill choices shape your hero, choose carefully. It could later mean life or death.
		`
	}
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {
	'arrowFly': 'Arrow Flying Past 1.wav',
	'pullString': 'Pulling string back (Bow) 1.wav',
	'pullString2': 'Pulling string back (Bow) 15.wav',
	'arrowFly2': 'Releasing string (Bow) 13.wav',
	'unsheathe': 'Sword Unsheathed Sound Effect - High Quality.mp3',
	'swordWoosh': 'Sword Woosh 1.wav',
	'dullThud': 'Sword hit armor 1.wav',
	'punch': 'Punch 2.wav',
	'punch2': 'Punch 8.wav',
	'mudRun': 'Footsteps Dirt (Running) 5.wav',
	'water': 'Water 8.wav',
	'rustle': 'rustle.mp3',
	'rustle2': 'rustle2.mp3'
});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {
	'sunsetMountain': 'sunsetMountain.jpg'
});


// Define the Characters
monogatari.characters({
	'n': {
		name: ''
	},
	'v': {
		name: 'Voice'
	},

	'p': {
		name: 'You'
	},

	'm': {
		name: 'Maya',
		directory: 'Maya',
		sprites: {
			angryBlush: 'MayaBlushAngry.png',
			neutralBlush: 'MayaBlushNeutral.png',
			shockBlush: 'MayaBlushShock.png',
			happyBlush: 'MayaBlushHappy.png',
			sadBlush: 'MayaBlushSad.png',

			angry: 'MayaAngry.png',
			happy: 'MayaHappy.png',
			neutral: 'MayaNeutral.png',
			sad: 'MayaSad.png',
			shock: 'MayaShock.png',

			angrySweat: 'MayaSweatAngry.png',
			happySweat: 'MayaSweatHappy.png',
			neutralSweat: 'MayaSweatNeutral.png',
			sadSweat: 'MayaSweatSad.png',
			shockSweat: 'MayaSweatShock.png',

			angryUI: 'MayaUIAngry.png',
			happyUI: 'MayaUIHappy.png',
			shockUI: 'MayaUIShock.png'
		}
	}
});

monogatari.script({

	// The game starts here.
	'Start': [
		'show scene sunsetMountain',
		'n I was not followed.',
		'n I make sure of it as I set down my satchel, flask, and belongings on the weathered grass, glancing occasionally behind.',
		'n I know I have nothing to hide. Nothing that would be seen as dangerous, or questionable, but I didn’t need the attention.',
		'n From here, the setting sun has only begun to soak the town below in its warm orange hue, and although beautiful, time is running out.',
		'n I steady my breath, ready to pull back my favoured...',

		"show message Skill",

		{
			'Choice': {

				'Bow & Arrow': {
					'Text': 'Bow & Arrow',
					'Do': 'jump BowChoice'
				},
				'Sword': {
					'Text': 'Sword',
					'Do': 'jump SwordChoice'
				},
				'Knuckle-Dusters': {
					'Text': 'Knuckle-Dusters',
					'Do': 'jump KnuckleChoice'
				}
			}
		},

		'end'
	],

	'BowChoice': [
		function () {
			changeSkill('combat', 'bow')
			notify("+Bow and Arrow")
		},
		"n ...bow and arrow.",
		"play sound pullString",
		"n My hands tighten across the grip. The bow was the only weapon I ever found myself proficient in. ",
		"n I remember the mantra I had been telling myself earlier.",
		"n Keep my feet shoulder-width apart. Keep my aim true and steady. My shoulders lowered, not too tense. ",
		"play sound arrowFly",
		"n I take a stance and release.",
		"n It misses.",
		"play sound pullString2",
		"n In the same beat, I reach for my side-belt quiver and draw the next arrow.",
		"n I convince myself that I am pushing out a fog from my mind’s eye.",
		"n That I only need practice.",
		"play sound arrowFly2",
		"n The arrow falters again.",
		"n And again.",
		"n At one point, when I held a bow, I felt most like myself, but now…",
		"n My aim’s only gotten worse. My draw is weak.",
		"jump TalkToMaya"
	],

	'SwordChoice': [
		function () {
			changeSkill('combat', 'sword')
			notify("+Sword")
		},
		"play sound unsheathe with volume 40",
		"n …sword.",
		"n My hands wrap around the hilt. The two-sided blade has always been an extension of myself.",
		"It was the only thing I knew best.",
		"play sound swordWoosh",
		"n It’s ingrained now that my left foot steps forward, my right foot back, my knees bent.",
		"n I repeat the mantra as I swivel to strike a non-existent enemy.",
		"n It feels weak.",
		"n I go again, this time my thumb positioned ever so slightly under the gilded hilt, I convince myself that I’m pushing out the fog from my mind’s eye.",
		"n That I only need to practice.",
		"n At some point, when I held my sword, I felt most like myself, but now…",
		"play sound swordWoosh",
		"play sound dullThud",
		"n I shift my weight, guiding the blade with my hand. In my final swing a dull sensation ripples through my arm, and the sword falls.",
		"n My form is stiff. I keep throwing my weight around needlessly.",
		"jump TalkToMaya"
	],

	'KnuckleChoice': [
		function () {
			changeSkill('combat', 'fists')
			notify('+Fist')
		},
		"play sound dullThud",
		"n …knuckle-dusters.",
		"n My thumbs trail against the grain and spikes. They were the truest extension of myself.",
		"n Light, but strong enough to do irreversible damage. ",
		'play sound punch',
		"n The last time I entered a fight, I was nearly laughed out, but people seldom know what to do in wild close combat. I thrived on knowing it was my own power.",
		'play sound punch2',
		"n One, two, one, two.",
		"n My fists clench between the carved wood, allowing me to focus and convince myself I was pushing the fog from my mind’s eye.",
		"n That I simply need practice.",
		"n At some point, when I slipped these on, I felt most likely myself, but now…",
		"n I exhale. My chest tightens as I manoeuvre through the space in front.",
		"n My footwork and stamina have gotten sloppy.",
		"jump TalkToMaya"
	],

	'TalkToMaya': [
		"n My own hands don’t feel like they’re mine.",
		"n I try again to focus when a sudden, familiar voice calls out my name:",
		{
			'Input': {
				'Text': 'Enter your name',
				'Validation': (input) => {
					return input.trim().length > 0;
				},
				'Save': (input) => {
					monogatari.storage({ player: { name: input } });
					monogatari.characters({ p: { name: input } })
				},
				'Revert': () => {
					monogatari.storage({ player: { name: '' } });
				},
				'Warning': 'You must enter a name!',

				'Attributes': {
					'placeholder': 'Adel',
					'minlength': 3,
					'maxlength': 20
				}
			}
		},
		"play sound mudRun with loop",
		"v {{player.name}}!",
		"stop sound mudRun with fade 2",
		"n I pivot back, catching the owner of the voice sprinting up the hillside. She waves at me wildly, balancing the bounce in her gait with the bobbing satchel at her hip.",
		"show character m shockSweat with zoomIn",
		"My best friend, Maya.",
		"show character m shock",
		"n I rest my stance and meet her a pitiful half way. Her dark curls drop in front of me when she catches up.",
		"n {{player.name}}! I— You— Argh!",
		"m <i>Fire.</i> My throat feels like it’s on fire!",
		"p Maya, did you run up the entire hillside?",
		"p How did you know I was here?",
		// "show character m angryBlush",
		// "m How did you know I was here?",
		"show character m angryBlush",
		"n She waves her hand dismissively, trying to catch her breath.",
		"m Why do— you always— hide when you train?",
		"play sound water",
		"n Maya gasps, reaching out with grabbing hands for my leather-bound flask. I hand it over and once she’s emptied every drop, she returns to her usual rejuvenated spark.",
		"show character m happyUI",
		"p I wasn’t <i>hiding</i>. This is just a good spot to practice.",
		"show character m angryUI",
		"m I looked everywhere for you. If you had just told me you were going to train, I could have been helping with your form!",
		"n She folds her arms assertively.",
		"n Whenever Maya took this stance, I knew I’d offended her in some way. Which was fine, because Maya was always offended.",
		"show character m neutral",
		"m You don’t have to be shy.",
		"m I don’t <i>mind</i> helping you train.",
		"n I raise a brow.",
		"p But you’re not here to train with me, are you?",
		"show character m happy",
		"m Of course not! You clearly need me for something greater.",
		"n As always, there’s a worrying amount of determination in her voice.",
		'jump Flail{{combat.name}}'
	],
	
	'FlailLongsword': [
		"show character m shock",
		'm I saw how you flailed about with your sword. ',
		"show character m happy",
		'n She mimics me, swaying about an invisible blade. She stops when our eyes connect and I avert my gaze.',
		"show character m neutral",
		"m Sorry.",
		"n I nod, the soreness of her words still reaching me. Maya doesn’t usually take an interest in my training. I thought it only reminded her of what had happened.",
		"p You have a lot of energy for a girl who can barely run up a hill. ",
		"show character m happy",
		"m I have a lot of energy for anyone.",
		"p Must be nice. I think it’s fair to say I’m just a little tired, it is getting late.",
		'jump FlailConcern'
	],

	'FlailFists': [
		"show character m shock",
		"m I saw your shoddy footwork.",
		"m You left yourself wide open for an attack!",
		"show character m happy",
		"n She mimics me, throwing soft punches at my center. I catch her fist, ending the playfulness.",
		"p Don’t think I’m too tired to spar with you and <i>win>/i>.",
		'n Still, it was odd. She didn’t usually take interest in my training. It only reminded her of what had happened.',
		'm With footwork like that, you’d injure yourself just punching air.',
		'p I’m just a little tired, it’s getting late. ',
		'jump FlailConcern'
	],

	'FlailBow & Arrow': [
		"show character m shock",
		'm The MC I remember could hit a target with their eyes closed. ',
		"show character m shockSweat",
		'm Now, you look like you need about four extra.',
		'p Very funny. I just lost my focus, I’m still a good shot.',
		'm I saw you miss… <i>thrice.</i>',
		'jump FlailConcern'
	],
	
	'FlailConcern': [
		"show character m neutralSweat",
		"n She sighs, giving me a concerned look. ",
		"m {{player.name}}, I care about you deeply, I do, but you’re getting… too comfortable here.",
		"m You’re practically losing your touch.",
		"p Losing my touch? I’ve done this hundreds of times. ",
		"p I’ve had songs written about me, Maya.",
		"n Tutting, she shakes her head.",
		"show character m shock",
		"m That was an awful birthday present. ",
		"m Wait, don’t deflect from this! I’ve noticed you creeping up here late at night, like some creepy old hermit. ",
		"show character m angry",
		"m You’re too young to be reminiscing glory days, {{player.name}}!",
		"show character m shock",
		"m Last year's {{combat.name}} could do serious damage. You practically tore through every monster you met! ",
		"p That was then. ",
		"n She places a hand tentatively on my shoulder. ",
		"show character m sad",
		"m I know you miss being out there, even if you won’t say it to my face. ",
		"show character m happy",
		"m Which is why I want to help you. ",
		"p Help me… how?",
		"m I got you a gift.",
		"n I think back to the last “gift” Maya presented me. ",
		"show character m shock",
		"m Oh, seriously. Don’t make that face. It’s not the same, and that was an honest mistake!",
		"n I throw her a look. ",
		"p Several tons of manure.",
		"show character m angry",
		"n She folds her arms. ",
		"m It was coming from my heart!",
		"p Uh-huh, definitely smelled like it.",
		"play sound punch",
		"show character m angryBlush",
		"m We’ll never speak of it again. ",
		"show character m neutral",
		"play sound rustle",
		"n Maya reaches into her satchel and pulls out a tightly wound parchment bound by a simple string. ",
		"play sound rustle2",
		"n Unfurled, it reveals a familiar coat of arms. A dragon and lion posed for an attack. ",
		"show character m happy",
		"m It’s an application for the adventurer’s guild. We can make it official!",
		"n The words sink in.",
		"n Maya’s voice begins to feel more distant. ",
		"show character m happyUI",
		"m Think about it! Me and you, back in action. Slaying beasts, saving babies, kissing bards! I don’t think I even have enough B’s. ",
		"m Maya.",
		"show character m happy",
		"m We can start tomorrow— No, today! As soon as the sun rises. ",
		"p Maya, no.",
		"m I know— Wait.",
		"show character m neutral",
		"m What do you mean, no?",
		"p I’m not signing up to this. I’m not doing more “adventures” that end up being more trouble than they’re worth. ",
		"show character m sadSweat",
		"m But— {{player.name}}, we’re adventurers. ",
		"p We <i>were</i> adventurers. ",
		"show character m sad",
		"n But you… you love adventuring. You love helping others!",
		"show character m happy",
		"m {{player.name}}… Just trust me. Once you go, you’ll completely change your mind. I know it. I know <i>you.</i> ",
		"m We have a whole <i>life</i> of adventures waiting for us! One full of no regrets.",
		"show character m neutralSweat",
		"m <i>I</i> don’t want you to regret anything… ",
		"show character m shock",
		"p There isn’t anything to regret. I like it here. It’s peaceful. Do you not like it here?"



	]
});