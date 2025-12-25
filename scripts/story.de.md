# start
scene: intro2


(Schritte auf nassem Kopfsteinpflaster, in der Ferne rattert eine Straßenbahn)



**H (H, #87CEEB)**: (Seufzt) Petersburg... Ja, das ist eine Geisterstadt, eine Stadt der Erinnerungen, eine Stadt, wo die Vergangenheit dir im Nacken atmet. Hier ist alles wie von Geschichte durchdrungen, sie sickert aus jedem Stein, jedem Bogen, jedem Kanal...

# intro
scene: intro1

**H**: Das ist nicht Moskau mit seinem Drang und Streben nach der Zukunft. Petersburg schaut in die Vergangenheit, als würde es versuchen zu verstehen, wie wir zu so einem Leben gekommen sind. Hier ist jeder Hof eine eigene Geschichte, jeder Hausflur wie eine Kulisse für einen Historienfilm.
# yard
scene: yard

(H schaut sich um und bewundert die Durchfahrt)

**H**: Der Newski-Prospekt ist natürlich großartig, aber in diesen stillen Gassen spürt man die wahre Seele der Stadt. Dostojewskis Welt, wenn Sie so wollen... Armut und Luxus Hand in Hand, als wären sie schon immer zusammen gewesen. Hier erinnert man sich an Gribojedow, Blok, Achmatowa... Die Tauben fliegen wie Geister von Dichtern über unseren Köpfen...

(H stolpert über einen Müllhaufen)

**H**: (Leise) Selbst in dieser Durchfahrt gibt's einen gewissen Charme... Petersburg kann überraschen.

(Bemerkt den "Müllwächter")

sprite: trashman-pointing center lg

**Müllwächter (MW, #FF6B9D)**: (Heiser) Na, na, na... Wer kommt denn da zu uns? Ich bin der Müllwächter, und ich kenne hier jeden! Zahl ordentlich für den Durchgang! Aber okay, heute gibt's Rabatt für Trottel.

**H**: Müllwächter... Originell. Und was bewachst du? Wovor?

sprite: trashman-glaring center lg

**MW**: Ich bewache vor deiner dummen Fresse! Was willst du hier, he?

**H**: (Schaut sich um) Na ja, hier gibt's schon was zu bewachen... Ein Haufen Müll.

sprite: trashman-pointing center lg

**MW**: (Gereizt) Steh nicht wie ein Pfahl rum! Du versperrst mir die Sicht auf die Tauben!

**H**: Auf die Tauben? Was ist mit denen?

sprite: trashman-wise center lg

**MW**: Das sind verdammt nochmal die Elite des Hofes! Die besten Bomberpiloten Petersburgs!

**H**: Hmm... Bombardieren die auch dich?

sprite: trashman-thinking center lg

**MW**: (Seufzt) Na ja... ständig. Aber das ist eine Ehre! Das bedeutet, ich bin ein würdiges Ziel für den Angriff! Das ist wie ein Gütesiegel, verstehst du?! Die bombardieren nicht irgendeinen Mist, die brauchen einen würdigen Gegner.

**H**: Und du bist nicht beleidigt?

sprite: trashman-pointing center lg

**MW**: Sich über Tauben ärgern ist wie sich über Regen in Petersburg ärgern! Zwecklos! Dafür schaffen sie Atmosphäre, geben Farbe! Und ihr Kot ist Dünger für meine Zeitungsschichten. Also, eine Win-Win-Zusammenarbeit!

**H**: (Lächelt) Logisch. Also sind die Tauben deine Verbündeten?

sprite: trashman-pointing center lg

**MW**: Verbündete, Waffenbrüder, Elite des Hofes! Sie kennen alle Geheimnisse dieses Ortes, und wenn was ist - fliegen sie zur Hilfe! Wichtig ist nur, schau ihnen nicht zu lange in die Augen, sonst bombardieren sie dich zu Tode.

**H**: Werd ich mir merken. Bestichst du sie irgendwie?

sprite: trashman-pointing left-third lg

**MW**: (Zeigt mit der Hand auf ein Stück Brot, das bei seinen "Füßen" liegt) Hier, ich füttere sie mit frischem Brot! Sie mögen französisches Baguette, diese Tauben-Snobs! Und wag es bloß nicht, ihren Anteil zu klauen, sonst kriegst du eins auf die Rübe von meiner Schlaghand!

[Das Brot klauen](#steal_path)
[Einen Keks geben](#bribe_path)

# steal_path
scene: yard
sprite: trashman-thinking center lg

**H**: (Schnappt sich schnell das Stück Baguette und beißt ab) Lecker! Danke für die Bewirtung, Wächter.

sprite: trashman-wise center lg

**MW**: (Schmunzelt) Ah du Dieb! Na gut, die Tauben sind nicht besonders nachtragend, sie sind an die Frechheit von Touristen gewöhnt... aber dieses Baguette war was Besonderes! Französisch, mit Trüffeln! Ihr Lieblingsdelikatesse.

# pigeon_death
scene: pigeon_death

Plötzlich verdunkelt sich der Himmel von Tauben. Sie beginnen den Helden mit einer Wut anzugreifen, die der besten Bomberpiloten würdig ist. Schnäbel und Krallen fliegen ins Gesicht, Federn stopfen den Mund...

**H**: (Keuchend) Verdammt! Was zur Hölle?!

sprite: trashman-wise right-third lg

**MW**: (Beobachtet ruhig das Geschehen) Du hast es gewagt, ihr Trüffel-Baguette zu stehlen! Jetzt rächen sie sich für all die Beleidigungen, die ihnen Touristen angetan haben. Tauben sind rachsüchtige Kreaturen, besonders wenn's ums Essen geht.

sprite:

**H**: (Keuchend) Trüffel… ich bin in Not! Hätt ich lieber Pilzkuchen gegessen statt diesem Tod!

sprite: trashman-wise right-third lg

**MW**: (Beobachtet ruhig das Geschehen)
Die Gier hat er nun teuer zahlen müssen,
Lach nicht über fremdes Leid, es könnt dich selbst bald grüßen.

[Du bist gestorben](#end_scene)

# bribe_path
scene: yard

**H**: (Holt einen Keks aus der Tasche) Hier, bitte! Tauben, bedient euch! Vielleicht haben sie genug vom französischen Baguette?

Die Tauben kommen freudig zum Helden geflogen und beginnen den Keks zu picken. Der Müllwächter beobachtet dies erstaunt.

sprite: trashman-thinking right-third lg

**MW**: Wow... "Jubilejny"-Keks! Diese Tauben-Snobs lieben Abwechslung! Gut gemacht, Junge, du hast sie bestochen! Normalerweise rümpfen sie die Nase bei allem Nicht-Französischen.

# pigeon_achievement
scene: pigeon_achievement

Eine besonders große Taube setzt sich auf die Schulter des Helden und gurrt dankbar.

**H**: (Lächelt) Scheint, als hätte ich ihnen gefallen. Sie schnurrt sogar!

sprite: trashman-wise right-third lg

**MW**: Gefallen! Jetzt hast du ein Tauben-Gefolge. Wenn du dich verirrst - pfeif einfach, sie führen dich zur nächsten Dönerbude oder Kneipe. Und wenn jemand mit dir streitet - bombardieren sie ihn!

[Achievement erhalten: **Tauben-Mafia**](#second_scene)

# second_scene
scene: yard
sprite: trashman-glaring center lg

**MW**: (Schaut respektvoll) Okay, Junge, du bist nicht so ein blöder Trottel, wie du auf den ersten Blick wirktest. Geh durch und frag, wenn du was über unseren Hof wissen musst.

**H**: Hör mal, ich wollte schon immer auf das Dach eines dieser alten Häuser! Weißt du nicht, wo ich einen Führer finde?

sprite: trashman-thinking center lg

**MW**: (Nachdenklich) Aufs Dach sagst du... Hmm... Dann musst du ins Haus Nummer 12 in der Kusnezny-Gasse. Dort wohnen zwei Freunde-Opas - einer ein romantischer Architekt, der ewig in den Wolken schwebt, und der andere ein grummeliger Ingenieur.

sprite: trashman-pointing center lg

**MW**: Sie führen dich zum Dachboden. Und die Dächer dort regiert eine Matriarchin-Katze. Wenn du ihr einen ordentlichen Gangsta-Rap vorrappst, bin ich sicher, lässt sie dich nach oben.

(H pfeift, und ein Schwarm Tauben fliegt auf und zeigt ihm den Weg zur Kusnezny-Gasse.)

[Zur Kusnezny-Gasse](#kuku)
# kuku
scene: kuku

(Der Held nähert sich der Baustelle in der Kusnezny-Gasse, angelockt vom Lärm und Trubel.)

sprite: prosphor-amused left-third lg

**Prosphor (P, #D0E37F)**: (Mit Pathos) Ach, Wolkenwunderland... Dort, wo Wolken die Häuserspitzen küssen, eine Oase der Ruhe und Inspiration, erhaben über dem Weltgetümmel!

sprite: el-annoyed right-third lg

**Elias (El, #A148C4)**: (Murmelt vor sich hin und kratzt sich am Hinterkopf) Oase? Hier bricht bald alles zusammen, wenn wir die Stützen nicht verstärken! Schönheit ist gut, aber noch besser, wenn einen nicht der erste Windstoß erschlägt.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Hallo, Männer! Was ist hier los?

sprite: prosphor-excited left-third xl

**P**: (Hebt ab vor Freude) Wir bauen Wolkenwunderland! Eine Stadt in den Wolken, wo man vor all diesen irdischen Problemen und Sorgen fliehen kann! Dort wird es Brunnen aus Sternenstaub und Gärten mit singenden Blumen geben!

sprite: el-annoyed right-third lg

**El**: (Schmunzelt) Bauen... Eher versuchen zu bauen. Dieser Romantiker will ständig irgendwelche Schnörkel hinzufügen, damit's schön aussieht, aber man muss einfach die Bretter fest verschrauben, damit's nicht zusammenfällt!

sprite: prosphor-indignated left-third lg

**P**: (Schmollend) Schnörkel?! Na klar, am einfachsten ist's, wieder so einen langweiligen Würfel zu bauen.

sprite: prosphor-amused left-third lg

**P**: Wolkenwunderland soll ein Gedicht in Stein sein!

sprite: el-annoyed right-third lg

**El**: Schön ist, wenn's beim ersten Windstoß nicht zusammenbricht! Schau, hier brauchen wir noch eine Stütze... Und dieser Romantiker will ständig eine Amor-Statue mit Pfeil und Bogen aufs Dach schrauben! Wozu brauchen wir hier Liebe-Schmuh, wenn das Haus stehen bleiben soll?!

sprite:

**H**: (Schaut sich um, kratzt sich am Kinn) Interessant... Kann ich irgendwie helfen? Nägel einschlagen oder Bretter bringen?

sprite: prosphor-amused left-third lg

**P**: Hilf uns, das beste Material für das Dach zu wählen! Ich schlage vor, alte Regenschirme zu verwenden - sie sind leicht, schön und schaffen eine gemütliche Atmosphäre! Stell dir vor, wie niedlich der Regen klingen wird, der auf ein Regenschirmdach prasselt!

sprite: el-annoyed right-third lg

**El**: (Verdreht die Augen) Regenschirme?! Die schützen vor Regen, aber tragen kein Dach! Besser nehmen wir stabile Bretter, die Schnee, Wind und sogar einen Elefanten aushalten, falls er beschließt, auf unserem Dach spazieren zu gehen!

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Interessantes Dilemma habt ihr da...

**P**: Hilfst du also bei der Entscheidung? Regenschirme oder Bretter?

[Regenschirme wählen](#kuku_umbrellas)
[Bretter wählen](#kuku_boards)
[Versuchen, unbemerkt zu verschwinden](#kuku_escape)

# kuku_escape
scene: kuku

**H**: (Macht einen Schritt zurück) Wisst ihr, mir fällt gerade was Dringendes ein...

sprite: prosphor-indignated left-third lg

**P**: Was?! Du hast doch versprochen zu helfen!

**H**: Ich hab nichts versprochen... ich hab nur gefragt...

sprite: el-annoyed right-third lg

**El**: (Winkt ab) Ach geh schon! Aber frag dann nicht nach Zugang zum Dachboden - wir lassen da keine Gaffer rein!

sprite:

(Der Held verschwindet schnell um die Ecke. Die Tauben gurren enttäuscht und fliegen weg. Achievement **Tauben-Mafia** verloren)

# sneak_attempt
scene: kuku

**H**: (Schaut sich um) Okay, wenn sie nicht helfen wollen... Versuch ich's selbst.

(Der Held umgeht die Baustelle von hinten. Dort sind lose Bretter, Leitern und Baugerüste zu sehen)

(Beginnt auf den Gerüsten hochzuklettern)

**H**: (Schwer atmend) Wenigstens ist die Konstruktion stabil... Elias hat gute Arbeit geleistet.
# dangerous_ledge
scene: ledge

(Erreicht den oberen Teil, von wo aus ein schmaler Sims des alten Hauses sichtbar ist)

**H**: (Schaut auf den Sims) Von hier kann ich auf den Sims klettern... Und darüber - zur Feuerleiter. Dann - aufs Dach!

(Steigt vorsichtig vom Gerüst auf den Sims)

**H**: (Drückt sich an die Wand) Nicht nach unten schauen... Bloß nicht nach unten...

(Der Sims ist schmal, unter den Füßen bröckelt alter Putz)

**H**: (Macht einen Schritt) Vorsichtig... Vorsichtig...

(Der Wind wird stärker, zerrt an der Kleidung)

**H**: (Erstarrt) Ruhig... Noch ein bisschen...

# dangerous_ledge_fall
scene: ledge_fall

(Plötzlich kommt von oben eine Taube geflogen und setzt sich mit lautem Flügelschlagen direkt vor dem Helden auf den Sims)

**Taube**: (Gurrt laut, empört)

**H**: (Zuckt zusammen vor Schreck) Ah?! Du?!

(Verliert das Gleichgewicht, versucht sich an der Wand festzuhalten)

**H**: (Verzweifelt, im Fallen) NEEEEE-eee-ein!
# fall_end
scene: intro1

**Erzähler**: Deine Reise durch Petersburg endete tragisch.

**Erzähler**: Manchmal kehrt sich die Unwilligkeit, anderen zu helfen, gegen uns selbst.

**Erzähler**: Hättest du den Opas geholfen, hätten sie dir Zugang und einen sicheren Weg aufs Dach gegeben.

**Erzähler**: Stattdessen hast du versucht, ihre Baustelle heimlich zu nutzen - und dafür bezahlt.

**Taube (Stimme aus dem Off)**: (Gurrt traurig)

**Erzähler**: Selbst die Tauben konnten dich nicht retten. Sie helfen nur denen, die anderen helfen.

[Neu starten?](#start)

# kuku_umbrellas
scene: kuku

**H**: Ich bin für Regenschirme! Schönheit ist das Wichtigste in der Architektur!

sprite: prosphor-excited left-third xl

**P**: (Begeistert) Bravo! Das ist ein wahrer Ästhet! Zusammen schaffen wir ein Meisterwerk!

sprite: el-annoyed right-third lg

**El**: (Verdreht die Augen) Na klar... Noch ein Träumer ist aufgetaucht.

sprite:

(Zeit vergeht. Die Opas schrauben mit dem Helden die Regenschirme aufs Dach)

sprite: prosphor-amused left-third lg

**P**: Schau, wie elegant! Wie luftig! Das ist ein Gedicht!

sprite: el-annoyed right-third lg

**El**: (Skeptisch) Ja... Ein Gedicht. Wenn nur kein Wind kommt.

**El**: (Zeigt auf den Schlüssel) Hier, nimm den Schlüssel zum Dachboden. Steig aufs Dach und schau dir Wolkenwunderland von außen an - ob die Stützen von diesen Schönheiten nicht schief geworden sind!

**H**: Kein Problem! Viel Glück mit eurem Meisterwerk!

[Schlüssel zum Dachboden nehmen](#matriarch_cat)

# kuku_boards
scene: kuku

**H**: Ich denke, Bretter sind zuverlässiger. Sicherheit geht vor.

sprite: el-annoyed right-third lg

**El**: (Zufrieden) Endlich! Ein Mensch mit Kopf auf den Schultern!

sprite: prosphor-amused left-third lg

**P**: (Schmollt) Na und sitz in deiner stabilen Scheune! Wo ist da die Schönheit, wo die Luftigkeit?

sprite:

**H**: Dafür fällt's beim ersten Wind nicht auseinander. Aber man könnte doch noch geschnitzte Bretter und eine lustige Wetterfahne mit einem Kuckuck für die Schönheit hinzufügen?

sprite: el-annoyed right-third lg

**El**: (Lächelt) Das ist die richtige Einstellung! Kompromiss ist alles!

sprite:

(Die Opas schrauben mit dem Helden schnell die Verzierungen aufs Dach.)

sprite: el-annoyed right-third lg

**El**: Stabil, zuverlässig und sogar hübsch geworden.

sprite: prosphor-excited left-third xl

**P**: (Begutachtet das Dach) Na ja... mit den Schnitzereien sieht's wirklich besser aus!

sprite: el-annoyed right-third lg

**El**: Siehst du! Hier, nimm den Schlüssel zum Dachboden, Junge. Für die Praktikabilität und dafür, dass du mich und Prosphor versöhnt hast.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Danke, Männer! Viel Glück mit der Stadt in den Wolken!

[Achievement erhalten: **Architekt-Diplomat**](#matriarch_cat)

# matriarch_cat
scene: attic

(Der Held kommt zum Dachboden und sieht die Matriarchin-Katze, die es sich auf einem Kissen aus alten Zeitungen bequem gemacht hat.)

sprite: matriarch-side center lg

**Matriarchin-Katze (MK, #594157)**: (Rappt mit zusammengekniffenen Augen)
**MK**: Nacht im Hof, und ich weiß nicht wohin
**MK**: Teure Schüssel und teures Wasser, das ist mein Gewinn
**MK**: Weiche Pfoten, weiche Worte, ich bin so fein
**MK**: Seh mein Futter, ich bin so, oh yeah, genau so will ich sein

sprite: matriarch-licking center lg

**MK**: Hab deinen Fisch geklaut, während du geschlafen hast, nicht erwischt - kein Dieb

(Öffnet die Augen und schaut den Helden an)

sprite: matriarch-side center lg

**MK**: Was stehst du da? Maul aufgerissen wie ein Tourist am Newski?

**H**: Ich... Der Müllwächter sagte, Sie könnten mich aufs Dach führen...

sprite: matriarch-licking center lg

**MK**: Müllwächter? (Schnaubt) Dieser Schwätzer schickt alle zu mir. Und wer bist du überhaupt?

[Sich ehrlich vorstellen](#honest_intro)
[Lügen, dass man von hier ist](#lie_intro)
[Versuchen, die Katze zu streicheln](#pet_cat)

# pet_cat
scene: attic

**H**: (Streckt die Hand aus) Was für ein süßes Kätzchen...

sprite: matriarch-angry center xl

**MK**: (Faucht) KÄTZCHEN?! SÜß?!

**MK**: Ich bin eine MATRIARCHIN! Ich herrsche seit zwanzig Jahren über diese Dächer! Ich habe drei Kater und fünf Hunde überlebt! Selbst Tauben fürchten mich!

sprite:

**H**: Entschuldigung, Eure Katzenhoheit. Sie wirkten einfach süß.

sprite: matriarch-licking center lg

**MK**: (Beruhigt sich, aber immer noch unzufrieden) Nimm deine Hände weg. Ich bin nicht irgendeine Hofkatze, die man knuddeln kann.

**H**: (Lässt die Hand sinken) Verstanden. Entschuldigung.

**MK**: Genau. Und jetzt verschwinde. Aufs Dach kommst du nicht.

**H**: Aber...

**MK**: RAUS!

[Mit leeren Händen gehen](#end_scene)

# honest_intro
scene: attic

sprite: matriarch-side center lg

**H**: Ich bin nur Gast in der Stadt. Petersburg hat mich mit seiner Atmosphäre erobert. Wollte die Stadt von oben sehen, besonders schön muss es jetzt sein, mit dem Weihnachtsbaum!

sprite: matriarch-licking center lg

**MK**: Ich führe dich aufs Dach, aber zuerst - ein Battle. Kultureller Austausch, sozusagen.

**H**: Battle?

**MK**: Rap-Battle. Du rappst eine Strophe über Petersburg, ich bewerte. Bestanden - du kriegst den Schlüssel. Nicht bestanden - du gehst.

[Zum Battle einwilligen](#rap_battle)
[Alternative vorschlagen](#alternative_task)

# lie_intro
scene: attic

sprite: matriarch-side center lg

**H**: Ich bin von hier! Wohne hier... am Newski!

sprite: matriarch-licking center lg

**MK**: (Hebt eine Augenbraue) Am Newski? Hausnummer?

**H**: Äh... 45?

sprite: matriarch-laughing center lg

**MK**: (Lacht) 45?! Da ist ein Geschäft, Dummkopf! Du kannst überhaupt nicht lügen!

**H**: Na ja... ich bin erst kürzlich umgezogen...

sprite: matriarch-side center lg

**MK**: (Streng) Lüg die Matriarchin nicht an! Ich kenne hier jeden Bewohner persönlich! Und jeden Fremden rieche ich meilenweit!

sprite: matriarch-side center lg

**MK**: Und nimm deine Tauben mit, die haben mir hier alles vollgeschissen!

(Die Tauben fliegen enttäuscht weg. Achievement **Tauben-Mafia** verloren)

[Mit leeren Händen gehen](#end_scene)

# alternative_task
scene: attic

sprite: matriarch-side center lg

**H**: Kann ich vielleicht was anderes machen? Ich bin nicht besonders gut im Rappen...

**MK**: (Nachdenklich) Hmm. Und was kannst du?

**H**: Na ja... Ich könnte Ihnen was Leckeres bringen?

sprite: matriarch-licking center lg

**MK**: (Wird lebhaft) Oh! Geschäftsansatz! Das mag ich!

**MK**: Hör zu. Unten, in der Durchfahrt bei Haus 7, gibt's eine Oma, die Piroggen verkauft. Ich brauche eine Pirogge mit Fisch. Frisch!

**H**: Das ist alles?

**MK**: Das ist alles?! Diese Piroggen sind eine Legende der Gegend! Die Oma kocht nur eine Stunde am Tag, und die Schlange ist wie zum Mausoleum! Schaffst du's - der Schlüssel gehört dir.

[Die Pirogge holen](#fetch_pie)
[Doch das Battle versuchen](#rap_battle)

# fetch_pie
scene: attic

(Der Held geht hinunter und kehrt nach einiger Zeit mit einer Pirogge zurück)

**H**: (Außer Atem) Hier! Hab's gerade noch geschafft, war die letzte!

sprite: matriarch-licking center lg

**MK**: (Schnuppert) Mmm... Frisch! Heiß! (Beißt ab) Köstlich!

sprite: matriarch-candid center lg

**MK**: (Mit vollem Mund) Du bist ein guter Kerl. Hier ist der Schlüssel. Durch diese Luke - aufs Dach.

**H**: Danke!

**MK**: (Isst die Pirogge auf) Und pass auf, dass du nicht runterfällst. Sonst wer bringt mir Piroggen?

[Achievement erhalten: **Matriarchins Laufbursche**](#roof_scene_normal)

# rap_battle
scene: attic

sprite: matriarch-side center lg

**MK**: Okay, Rapper. Ich höre aufmerksam zu.

[Los geht's!](#rap_battle_start)

# rap_battle_start
scene: attic

**H**: (Beginnt) In Wolkenwunderland ist Winter...

[Poetisch fortfahren](#rap_battle_poetic_start)
[Ironisch fortfahren](#rap_battle_ironic_start)
# rap_battle_poetic_start
scene: attic

**H**: In Wolkenwunderland ist Winter, die Zeit steht still seit Jahr und Tag. Hier ist jeder Hof - wie ein Portal in vergess'nen Welten Schlag.

sprite: matriarch-side center lg

**MK**: In Wolkenwunderland ist Winter? Hier ist ewiger Frost! In Welten Portale? Hier sind nur Mülltonnen-Post!

sprite:

**H**: Mülltonnen sind nur Spiegelung unseres Lebens hier.
**H**: "Im Feuer waren wir..." Also, muss ich reimen mit Manier.

[Gestählt?](#rap_forged_in_fire)
[Äh... Straßenbahn?](#rap_forged_in_tram)
# rap_forged_in_fire
scene: attic

sprite: matriarch-candid center lg

**H**: Mülltonnen sind nur Spiegelung unseres Lebens hier.
**H**: Im Feuer waren wir, gestählt durch Leid und Not so schwer

sprite: matriarch-side center lg

**MK**: Die Welt brennt immer, ich wärm mich nur am Flammentier

sprite:

**H**: Deine Flamme ist nur Schein von Laternen in der Nacht, deine Ideen schmelzen weg wie erster Schnee entfacht. In dieser Stadt bin ich der Stratege mit Macht, mein Zug ist immer richtig, hab die Weisheit mitgebracht.

sprite: matriarch-licking center lg

**MK**: Stratege? Du bist nur ein kleines Kätzchen! Ich regier hier den ganzen Hof und jeden Mülleimer! Und weiß sogar, wer heute was weggeworfen hat, ist feiner!

sprite: matriarch-candid center lg

**MK**: Aber du bist wirklich nicht schlecht.

[Sich verbeugen](#rap_battle_win)
# rap_forged_in_tram
scene: attic

**H**: Mülltonnen sind nur Spiegelung unseres Lebens hier.
**H**: Im Feuer waren wir, in Straßenbahn Nummer vier!

sprite: matriarch-laughing center lg

[Scheint, ich hab was Falsches gesagt...](#rap_battle_fail)
# rap_battle_ironic_start
scene: attic

**H**: In Wolkenwunderland ist Winter, Schnee fliegt wie aus der Kanone geschwind. Und du bist nur ein kleines Kätzchen in diesem harten Fell, mein Kind.

sprite: matriarch-licking center lg

**MK**: Ich bin hier die Chefin, ich bin hier der Boss. Und wenn du mir nicht gefällst - gibt's 'ne Tatze aufs Ross.

sprite:

**H**: "Dein Stolz ist nur Illusion für die Augen"... Aber wie beende ich diesen Reim?

[Denkst du, du herrschst hier?](#rap_battle_i_am_not_the_boss)
[Merk dir diese Zeit!](#rap_battle_i_am_the_boss)
# rap_battle_i_am_the_boss
scene: attic

**H**: Dein Stolz ist nur Illusion für die Augen fein. Und ich bin hier der Boss, merk dir diese Zeitenreihn.

sprite: matriarch-licking center lg

**MK**: Rap ist nicht dein Ding, kann passieren, einfach nicht gegeben im Sein.

sprite:

**H**: Prosa ist langweiliger Mist, auch wenn du schon ewig Texte schreibst, das ist gewiss

sprite: matriarch-candid center lg

**MK**: Aber du bist wirklich nicht schlecht, ich muss gestehen.

[Sich verbeugen](#rap_battle_win)
# rap_battle_i_am_not_the_boss
scene: attic

**H**: Dein Stolz ist nur Illusion für die Augen klar
**H**: Du dachtest, du herrschst hier? Na ja, ich pass mal, ist wahr

sprite: matriarch-laughing center lg

[Scheint, ich hab was Falsches gesagt...](#rap_battle_fail)

# rap_battle_fail
scene: attic

**H**: Ich wollte nicht persönlich werden, Skandale sind ein Bug, kein Feature

sprite: matriarch-laughing center lg

**MK**: Doch du hast dich selbst entlarvt, dein Track war dein bester Teacher

[Nochmal versuchen](#rap_battle)
[Alternative vorschlagen](#alternative_task)
# rap_battle_win
scene: attic

sprite: matriarch-candid center lg

**MK**: Okay, okay. Nicht schlecht für einen Menschen. Du hast mich fast unterhalten!
**MK**: Kein Bushido, aber für einen Anfänger - geht klar. Hier ist der Schlüssel!
# roof_scene_normal
scene: rooftop

**H**: (Kommt aufs Dach und erstarrt vor Begeisterung) Wow!

(Vor ihm - das Panorama des abendlichen Petersburg, überflutet von Lichtern. Ein leuchtender Weihnachtsbaum erhebt sich über dem Platz.)

**H**: Die Isaakskathedrale... Die Admiralität... Die Kirchenkuppeln... Wie in einem Weihnachtsmärchen!

(Glockenschlag, Tauben kreisen über dem Platz und begrüßen das neue Jahr.)
# roof_scene_snow
scene: rooftop_snow

🎄Frohes Neues Jahr 2026 🎄 [video:catjammer.mp4]

[ENDE](#end_scene)

# end_scene
scene: intro1
**Erzähler**: Danke, dass Sie Zeit mit uns verbracht haben!
**Erzähler**: Damit ist unsere Visual Novel zu Ende.
**Erzähler**: Sie können nochmal spielen und andere Wege ausprobieren, um alle Geschichten zu entdecken!
