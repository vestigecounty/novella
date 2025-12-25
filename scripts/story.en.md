# start
scene: intro2

(Sound of footsteps on wet cobblestones, a tram hums in the distance)

**H (H, #87CEEB)**: (Sighs) Petersburg... Yes, this is a ghost city, a city of memories, a city where the past breathes down your neck. Everything here seems soaked in history, it seeps from every stone, every arch, every canal...

# intro
scene: intro1

**H**: This isn't Moscow with its drive and focus on the future. Petersburg looks to the past, as if trying to understand how we got to this point. Here every courtyard is a separate story, every entrance hall is like a set for a historical film.

# yard
scene: yard

(H looks around, admiring the archway)

**H**: Nevsky Prospect is magnificent, of course, but in these quiet alleys you can feel the true soul of the city. Dostoevsky's world, if you will... Poverty and luxury hand in hand, as if they've always been together. Here they remember Griboedov, Blok, Akhmatova... The pigeons flying overhead are like the spirits of poets...

(H stumbles over a pile of garbage)

**H**: (Quietly) Even in this archway there's a certain charm... Petersburg knows how to surprise.

(Notices the "Trash Guardian")

sprite: trashman-pointing center lg

**Trash Guardian (TG, #FF6B9D)**: (Hoarsely) Well, well, well... Who do we have here? I'm the Trash Guardian, and I know everyone here! Get ready to pay for passage! Though okay, today there's a special discount for suckers.

**H**: Trash Guardian... Original. And what are you guarding? From what?

sprite: trashman-glaring center lg

**TG**: Guarding from your stupid face! What are you doing here, huh?

**H**: (Looks around) Well yes, there's something to guard... A pile of trash.

sprite: trashman-pointing center lg

**TG**: (Irritated) Don't just stand there! You're blocking my view of the pigeons!

**H**: Pigeons? What about them?

sprite: trashman-wise center lg

**TG**: They're the damn elite of the yard! The best bombers in Petersburg!

**H**: Hmm... Do they bomb you too?

sprite: trashman-thinking center lg

**TG**: (Sighs) Well yeah… constantly. But it's an honor! It means I'm a worthy target for attack! It's like a quality mark, understand?! They don't bomb just any trash, they need a worthy opponent.

**H**: And you're not offended?

sprite: trashman-pointing center lg

**TG**: Being offended by pigeons is like being offended by rainfall in Petersburg! Pointless! Besides, they create atmosphere, add color! And their droppings are fertilizer for my newspaper layers. In short, mutually beneficial cooperation!

**H**: (Smiles) Logical. So the pigeons are your allies?

sprite: trashman-pointing center lg

**TG**: Allies, brothers in arms, the elite of the yard! They know all the secrets of this place, and if needed - they'll fly to help! Just don't look them in the eyes too long, or they'll bomb you to death.

**H**: I'll keep that in mind. Do you bribe them somehow?

sprite: trashman-pointing left-third lg

**TG**: (Points to a piece of bread lying at his "feet") Here, I treat them to fresh bread! They love French baguette, these snobbish pigeons! And don't you dare steal their share, or you'll get hit on the head by my silencer hand!

[Steal the baguette](#steal_path)
[Treat them with cookies](#bribe_path)

# steal_path
scene: yard
sprite: trashman-thinking center lg

**H**: (Quickly grabs the piece of baguette and takes a bite) Delicious! Thanks for the treat, Guardian.

sprite: trashman-wise center lg

**TG**: (Chuckles) Ah, you thief! Well okay, the pigeons aren't too offended, they're used to the audacity of tourists… but that baguette was special! French, with truffles! Their favorite delicacy.

# pigeon_death
scene: pigeon_death

Suddenly the sky darkens with pigeons. They begin attacking the Hero with fury worthy of the best bombers. Beaks and claws fly at his face, feathers stuff his mouth...

**H**: (Choking) Damn! What the hell?!

sprite: trashman-wise right-third lg

**TG**: (Calmly watching) You dared to steal their truffle baguette! Now they'll avenge all the offense tourists have caused them. Pigeons are vengeful creatures, especially when it comes to food.

sprite:

**H**: (Choking) Truffles… what a bummer! Should've eaten a simple mushroom pie, much dumber!

sprite: trashman-wise right-third lg

**TG**: (Calmly watching)
For greed he paid the highest toll,
Don't mock misfortune, foolish soul.

[You died](#end_scene)

# bribe_path
scene: yard

**H**: (Takes out cookies from his pocket) Here, have some! Pigeons, enjoy! Maybe they're tired of French baguette?

The pigeons happily flock to the Hero and begin pecking at the cookies. The Trash Guardian watches in surprise.

sprite: trashman-thinking right-third lg

**TG**: Wow... Cookies! These snobbish pigeons love variety! Good job, guy, you've bribed them! They usually turn their noses up at anything non-French.

# pigeon_achievement
scene: pigeon_achievement

One particularly large pigeon lands on the Hero's shoulder and coos gratefully.

**H**: (Smiles) Seems like they like me. It even purred!

sprite: trashman-wise right-third lg

**TG**: They like you! Now you have a pigeon entourage. If you get lost - just whistle, they'll lead you to the nearest shawarma or pub. And if someone argues with you - they'll bomb them!

[Achievement unlocked **Pigeon Mafia**](#second_scene)

# second_scene
scene: yard
sprite: trashman-glaring center lg

**TG**: (Looks with respect) Alright, guy, you're not such a snotty jerk as you seemed at first glance. Go ahead and ask if you need to know anything about our yard.

**H**: Listen, I've always dreamed of getting on the roof of one of these old buildings! Don't you know where I could find a guide?

sprite: trashman-thinking center lg

**TG**: (Thoughtfully) On the roof you say... Hmm... Then you need to go to house number 12 on Kuznechny Lane. Two old friends live there - one is a romantic architect, always with his head in the clouds, and the other is a grumpy engineer.

sprite: trashman-pointing center lg

**TG**: They'll take you to the attic. And the roofs there are held by a matriarch cat - if you recite some hardcore gangsta rap to her, I'm sure she'll let you up.

(H whistles, and a flock of pigeons takes off, showing him the way to Kuznechny Lane.)

[To Kuznechny Lane](#kuku)

# kuku
scene: kuku

(The Hero approaches a construction site on Kuznechny Lane, attracted by noise and commotion.)

sprite: prosphor-amused left-third lg

**Prosphor (P, #D0E37F)**: (With pomp) Ah, Cuckoocloudland... Where clouds kiss the tops of houses, an oasis of peace and inspiration, rising above the world's bustle!

sprite: el-annoyed right-third lg

**Elisey (E, #A148C4)**: (Muttering under his breath, scratching his head) Oasis? Soon everything here will collapse to hell if we don't reinforce the supports! Beauty is good, but it's even better when you're not crushed by the first gust of wind.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Hey there, guys! What's all this noise about?

sprite: prosphor-excited left-third xl

**P**: (Rising to seventh heaven with happiness) We're building Cuckoocloudland! A city in the skies where you can escape from all these earthly problems and worries! There will be fountains of stardust and gardens with singing flowers!

sprite: el-annoyed right-third lg

**E**: (Chuckles) Building... More like trying to build. This romantic always wants to add some curlicues to please the eye, but we just need to securely fasten the boards so it doesn't fall apart!

sprite: prosphor-indignated left-third lg

**P**: (Pouting) Curlicues?! Well yes, of course, it's easiest to build another dull cube.

sprite: prosphor-amused left-third lg

**P**: Cuckoocloudland must be a poem in stone!

sprite: el-annoyed right-third lg

**E**: Beautiful is when it doesn't collapse from the first gust of wind! Look, here we need to add another support... And this romantic always wants to attach a statue of Cupid with a bow and arrows to the roof! Why do we need love-shmove here when the house needs to stand?!

sprite:

**H**: (Looking around, scratching his chin) Interesting... Maybe I can help somehow? Hammer in nails or bring boards?

sprite: prosphor-amused left-third lg

**P**: Help us choose the best material for the roof! I suggest using old umbrellas - they're light, beautiful and create a cozy atmosphere! Imagine how cute the rain will look, drumming on the umbrella roof!

sprite: el-annoyed right-third lg

**E**: (Rolls his eyes) Umbrellas?! They protect from rain, they don't hold up roofs! Better to take stronger boards that can withstand snow, wind, and even an elephant if it decides to walk on our roof!

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: You have an interesting dilemma...

**P**: So will you help decide? Umbrellas or boards?

[Choose umbrellas](#kuku_umbrellas)
[Choose boards](#kuku_boards)
[Try to sneak away quietly](#kuku_escape)

# kuku_escape
scene: kuku

**H**: (Takes a step back) You know, I remembered an urgent matter...

sprite: prosphor-indignated left-third lg

**P**: What?! But you promised to help!

**H**: I didn't promise... I just asked...

sprite: el-annoyed right-third lg

**E**: (Waves his hand) Just go already! But don't ask for access to the attic - we don't let random gawkers in there!

sprite:

(The Hero quickly leaves around the corner. The pigeons coo disappointedly and fly away. Achievement **Pigeon Mafia** lost)

# sneak_attempt
scene: kuku

**H**: (Looks around) Well, if they don't want to help... I'll try myself.

(The Hero goes around the construction from the back. There are visible unfastened boards, extension ladders, scaffolding)

(Starts climbing the scaffolding)

**H**: (Breathing heavily) Good thing the structure is solid... Elisey did his best.

# dangerous_ledge
scene: ledge

(Reaches the upper part, from where a narrow ledge of the old building is visible)

**H**: (Looks at the ledge) From here I can get to the ledge... And along it - to the fire escape. Then - to the roof!

(Carefully steps from the scaffolding onto the ledge)

**H**: (Pressing against the wall) Don't look down... The main thing - don't look down...

(The ledge is narrow, old plaster crumbles underfoot)

**H**: (Taking a step) Carefully... Carefully...

(The wind picks up, flapping his clothes)

**H**: (Freezes) Calm... Just a bit more...

# dangerous_ledge_fall
scene: ledge_fall

(Suddenly a pigeon flies from somewhere above and with noisy flapping of wings lands on the ledge right in front of the Hero)

**Pigeon**: (Coos loudly, indignantly)

**H**: (Startles) Ah?! You?!

(Loses balance, tries to grab the wall)

**H**: (Desperately, falling) NOOO-ooo-ooo!

# fall_end
scene: intro1

**Narrator**: Your journey through Petersburg ended tragically.

**Narrator**: Sometimes unwillingness to help others turns against us.

**Narrator**: If you had helped the old men, they would have given you access and a safe path to the roof.

**Narrator**: Instead, you tried to use their construction secretly - and paid the price.

**Pigeon (voice-over)**: (Coos sadly)

**Narrator**: Even the pigeons couldn't save you. They only help those who help others.

[Start over?](#start)

# kuku_umbrellas
scene: kuku

**H**: I'm for umbrellas! Beauty is the main thing in architecture!

sprite: prosphor-excited left-third xl

**P**: (Enthusiastically) Bravo! Now that's a true aesthete! Together we'll create a masterpiece!

sprite: el-annoyed right-third lg

**E**: (Rolls his eyes) Of course... Another dreamer has appeared.

sprite:

(Time passes. The old men with the Hero attach umbrellas to the roof)

sprite: prosphor-amused left-third lg

**P**: Look how elegant! How airy! This is a poem!

sprite: el-annoyed right-third lg

**E**: (Skeptically) Uh-huh... A poem. Let's just hope there's no wind.

**E**: (Points to a key) Here, take the key to the attic. Go up to the roof and look at Cuckoocloudland from the side - make sure the supports haven't tilted from all these beauties!

**H**: No problem! Good luck with your masterpiece!

[Take the attic key](#matriarch_cat)

# kuku_boards
scene: kuku

**H**: I think boards are more reliable. Safety above all.

sprite: el-annoyed right-third lg

**E**: (Satisfied) Finally! A man with a head on his shoulders!

sprite: prosphor-amused left-third lg

**P**: (Pouts) Well, sit in your sturdy barn then! Where's the beauty, where's the airiness?

sprite:

**H**: But it won't fall apart from the first wind. Though we could still add carved boards and a funny weathervane with a cuckoo for beauty?

sprite: el-annoyed right-third lg

**E**: (Smiles) Now that's the spirit! Compromise is everything!

sprite:

(The old men with the Hero quickly attach decorations to the roof.)

sprite: el-annoyed right-third lg

**E**: Sturdy, reliable and even pretty good looking.

sprite: prosphor-excited left-third xl

**P**: (Examines the roof) Well… with the carvings it really did get better!

sprite: el-annoyed right-third lg

**E**: See! Here, take the attic key, guy. For being practical and for reconciling me with Prosphor.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Thanks, guys! Good luck with your city in the clouds!

[Achievement unlocked **Architect-Diplomat**](#matriarch_cat)

# matriarch_cat
scene: attic

(The Hero exits to the attic and sees the Matriarch Cat, comfortably settled on a pillow of old newspapers.)

sprite: matriarch-side center lg

**Matriarch Cat (MC, #594157)**: (Rapping, squinting)
**MC**: Night in the yard, don't know where to go
**MC**: Expensive bowl and expensive H2O
**MC**: Soft paws, soft words I bestow
**MC**: See my food, I'm like that, yo

sprite: matriarch-licking center lg

**MC**: Stole your fish while you slept, not caught - not a thief, that's the rep

(Opens eyes and looks at the Hero)

sprite: matriarch-side center lg

**MC**: What are you standing for? Mouth open like a tourist on Nevsky?

**H**: I... The Trash Guardian said you could lead me to the roof...

sprite: matriarch-licking center lg

**MC**: Trash Guardian? (Snorts) That blabbermouth sends everyone to me. And who are you anyway?

[Introduce yourself honestly](#honest_intro)
[Lie that you're local](#lie_intro)
[Try to pet the cat](#pet_cat)

# pet_cat
scene: attic

**H**: (Reaches out) Such a cute kitty...

sprite: matriarch-angry center xl

**MC**: (Hisses) KITTY?! CU-TE?!

**MC**: I am a MATRIARCH! I've ruled these roofs for twenty years! I've outlived three toms and five dogs! Even pigeons fear me!

sprite:

**H**: Sorry, your feline majesty. Just seemed cute.

sprite: matriarch-licking center lg

**MC**: (Calms down but still displeased) Keep your hands to yourself. I'm not some yard cat you can squeeze.

**H**: (Lowers hand) Got it. Sorry.

**MC**: That's better. Now get out of here. The roof is off-limits to you.

**H**: But...

**MC**: SCRAM!

[Leave empty-handed](#end_scene)

# honest_intro
scene: attic

sprite: matriarch-side center lg

**H**: I'm just a guest of the city. Petersburg captivated me with its atmosphere. I wanted to see the city from above, especially beautiful it should be now, with the New Year tree!

sprite: matriarch-licking center lg

**MC**: I'll take you to the roof, but first - a battle. Cultural exchange, so to speak.

**H**: Battle?

**MC**: Rap battle. You spit a verse about Petersburg, I judge. Pass - you get the key. Fail - you're out.

[Agree to battle](#rap_battle)
[Suggest an alternative](#alternative_task)

# lie_intro
scene: attic

sprite: matriarch-side center lg

**H**: I'm local! I live here… on Nevsky!

sprite: matriarch-licking center lg

**MC**: (Raises an eyebrow) On Nevsky? House number?

**H**: Uh... 45?

sprite: matriarch-laughing center lg

**MC**: (Laughs) 45?! There's a shop there, dummy! You can't lie at all!

**H**: Well… I just moved...

sprite: matriarch-side center lg

**MC**: (Sternly) Don't lie to the matriarch! I know every resident here by sight! And I smell every outsider a mile away!

sprite: matriarch-side center lg

**MC**: And take your pigeons, they've messed everything up here!

(The pigeons fly away disappointedly. Achievement **Pigeon Mafia** lost)

[Leave empty-handed](#end_scene)

# alternative_task
scene: attic

sprite: matriarch-side center lg

**H**: Maybe I can do something else? I'm not very good at rap...

**MC**: (Thoughtfully) Hmm. What can you do?

**H**: Well... I could bring you something tasty?

sprite: matriarch-licking center lg

**MC**: (Perks up) Oh! Business approach! I like it!

**MC**: Listen up. Down there, in the archway at house 7, there's a grandma who sells pies. I need a fish pie. Fresh!

**H**: That's all?

**MC**: That's all?! These pies are a legend of the district! The old lady cooks only an hour a day, and the line is like to a mausoleum! Handle it - the key is yours.

[Go get the pie](#fetch_pie)
[Try the battle anyway](#rap_battle)

# fetch_pie
scene: attic

(The Hero goes down and returns after some time with a pie)

**H**: (Out of breath) Here! Barely made it, it was the last one!

sprite: matriarch-licking center lg

**MC**: (Sniffs) Mmm... Fresh! Hot! (Takes a bite) Delicious!

sprite: matriarch-candid center lg

**MC**: (With full mouth) You're good, guy. Here's the key. Through this hatch - to the roof.

**H**: Thanks!

**MC**: (Finishing the pie) And watch you don't fall from there. Who else will bring me pies?

[Achievement unlocked **Matriarch's Errand Runner**](#roof_scene_normal)

# rap_battle
scene: attic

sprite: matriarch-side center lg

**MC**: Okay, rapper. I'm listening carefully.

[Let's go!](#rap_battle_start)

# rap_battle_start
scene: attic

**H**: (Begins) In Cuckoocloudland winter reigns...

[Continue poetically](#rap_battle_poetic_start)
[Continue ironically](#rap_battle_ironic_start)

# rap_battle_poetic_start
scene: attic

**H**: In Cuckoocloudland winter reigns, time frozen through the ages. Here every yard - a portal through forgotten pages.

sprite: matriarch-side center lg

**MC**: In Cuckoocloudland it's winter? Here's eternal freeze instead! Portal worlds? Just trash cans, use your head!

sprite:

**H**: Trash cans are just reflections of our life's design.
**H**: "Through fire we have been..." Now, need to make it rhyme.

[Forged?](#rap_forged_in_fire)
[Uh... A tram?](#rap_forged_in_tram)

# rap_forged_in_fire
scene: attic

sprite: matriarch-candid center lg

**H**: Trash cans are just reflections of our life's design.
**H**: Through fire we have been, in suffering refined

sprite: matriarch-side center lg

**MC**: World's always burning bright, I just warm myself by flame

sprite:

**H**: Your flame's just streetlights' glow, your ideas melt like first snow. In this city I'm chief strategist in the game, my move's always right, you know.

sprite: matriarch-licking center lg

**MC**: Strategist? You're just a tiny kitten! I run this whole yard and every dumpster written! And even know who threw out what today, no kiddin'!

sprite: matriarch-candid center lg

**MC**: But you're really not bad.

[Bow](#rap_battle_win)

# rap_forged_in_tram
scene: attic

**H**: Trash cans are just reflections of our life's design.
**H**: Through fire we have been, on tram number nine!

sprite: matriarch-laughing center lg

[Seems I said something wrong...](#rap_battle_fail)

# rap_battle_ironic_start
scene: attic

**H**: In Cuckoocloudland winter's here, snow falls like from a gun. And you're just a tiny kitten in this harsh setting, hun.

sprite: matriarch-licking center lg

**MC**: I'm the boss of this position, I'm the chief around this place. And if I don't like you - my paw will smack you in the face

sprite:

**H**: "Your pride's just an illusion for the eyes"... But how to end this rhyme right?

[Think you rule here?](#rap_battle_i_am_not_the_boss)
[Remember this night!](#rap_battle_i_am_the_boss)

# rap_battle_i_am_the_boss
scene: attic

**H**: Your pride's just an illusion for the eyes. I'm the real boss here, remember this time flies.

sprite: matriarch-licking center lg

**MC**: Rap's not your thing, it happens, just not your vocation.

sprite:

**H**: Prose is boring trash, though you write it wall-to-wall as recreation

sprite: matriarch-candid center lg

**MC**: But you're really not bad.

[Bow](#rap_battle_win)

# rap_battle_i_am_not_the_boss
scene: attic

**H**: Your pride's just an illusion for the eyes
**H**: You thought you ruled here? Well, yeah, I'll pass on that, nice tries

sprite: matriarch-laughing center lg

[Seems I said something wrong...](#rap_battle_fail)

# rap_battle_fail
scene: attic

**H**: I didn't mean it personal, scandals are a bug not feature

sprite: matriarch-laughing center lg

**MC**: That L's on you, your bars became your teacher

[Try again](#rap_battle)
[Suggest an alternative](#alternative_task)

# rap_battle_win
scene: attic

sprite: matriarch-candid center lg

**MC**: Alright, alright. Not bad for a human. You almost entertained me!
**MC**: Not Eminem, but for a beginner - decent. Here's the key!

# roof_scene_normal
scene: rooftop

**H**: (Exits to the roof and freezes in delight) Wow!

(Before him - a panorama of evening Petersburg, flooded with lights. A shining New Year tree towers over the square.)

**H**: St Isaac's… The Admiralty… Church domes… Like stepping into a New Year's fairy tale!

(Chimes strike, pigeons circle over the square, welcoming the New Year.)

# roof_scene_snow
scene: rooftop_snow

🎄Happy New Year 2026 🎄 [video:catjammer.mp4]

[THE END](#end_scene)

# end_scene
scene: intro1
**Narrator**: Thank you for spending time with us!
**Narrator**: This concludes our visual novel.
**Narrator**: You can play again and try different paths to unlock all the stories!
