# start
scene: intro2


(Zvuk koraka po mokrom popločenju, u daljini zuji tramvaj)



**H (H, #87CEEB)**: (Uzdiše) Peterburg... Da, to je grad-duh, grad-sjećanje, grad gdje ti prošlost diše za vratom. Ovdje je sve kao natopljeno poviješću, ona curi iz svakog kamena, svakog luka, svakog kanala...

# intro
scene: intro1

**H**: Ovo nije Moskva s njenim nagonom i težnjom za budućnošću. Peterburg gleda u prošlost, kao da pokušava razumjeti kako smo došli do ovakvog života. Ovdje je svako dvorište posebna priča, svaki ulaz kao kulisa za povijesni film.
# yard
scene: yard

(H se osvrće oko sebe, dive se prolazu)

**H**: Nevski prospekt je, naravno, veličanstven, ali u ovim tihim uličicama osjeća se prava duša grada. Dostojevski svijet, ako hoćete... Siromaštvo i raskoš ruku pod ruku, kao da su oduvijek bili zajedno. Ovdje pamte Gribojedova, Bloka, Ahmatovu... Golubovi lete kao duhovi pjesnika iznad naših glava...

(H se spotakne o hrpu smeća)

**H**: (Tiho) Čak i u ovom prolazu ima svoje čari... Peterburg zna iznenaditi.

(Primijeti "Čuvara smeća")

sprite: trashman-pointing center lg

**Čuvar smeća (ČS, #FF6B9D)**: (Promuklo) Tako, tako, tako... Tko nam je došao? Ja sam Čuvar smeća, i ovdje sve znam! Plati za prolaz! Ali dobro, danas je popust za budale.

**H**: Čuvar smeća... Originalno. I što čuvaš? Od čega?

sprite: trashman-glaring center lg

**ČS**: Čuvam od tvoje glupe face! Što si došao, ha?

**H**: (Osvrće se) Pa da, ima što čuvati... Hrpa smeća.

sprite: trashman-pointing center lg

**ČS**: (Razdraženo) Ne stoj kao stub! Zaklanjač mi pogled na golubove!

**H**: Na golubove? Što s njima?

sprite: trashman-wise center lg

**ČS**: To je jebena elita dvorišta! Najbolji bombarderi Peterburga!

**H**: Mmm... I tebe bombardiraju?

sprite: trashman-thinking center lg

**ČS**: (Uzdiše) Pa da... stalno. Ali to je počasno! Znači, ja sam dostojan cilj za napad! To je kao znak kvalitete, kužiš?! Oni ne bombardiraju bilo kakvo smeće, trebaju im dostojan protivnik.

**H**: I ne ljutiš se?

sprite: trashman-pointing center lg

**ČS**: Ljutiti se na golubove - to je kao ljutiti se na kišu u Peterburgu! Beskorisno! Ali oni stvaraju atmosferu, dodaju boju! A njihov izmet - to je gnojivo za moje slojeve novina. Dakle, obostrano korisna suradnja!

**H**: (Osmjehuje se) Logično. Znači, golubovi su tvoji saveznici?

sprite: trashman-pointing center lg

**ČS**: Saveznici, braća po oružju, elita dvorišta! Oni znaju sve tajne ovog mjesta, i ako što - doletjet će u pomoć! Samo im nemoj gledati predugo u oči, inače te zakidaju nasmrt.

**H**: Imat ću na umu. Kako ih pridobijaš?

sprite: trashman-pointing left-third lg

**ČS**: (Pokazuje rukom na komad kruha koji leži kod njegovih "nogu") Evo, častim ih svježim kruhom! Oni vole francuski baguette, ti golubovi-snobovi! I nemoj im ukrasti njihov dio, inače ćeš dobiti po glavi od moje udaračke ruke!

[Ukrasti kruh](#steal_path)
[Ponuditi keks](#bribe_path)

# steal_path
scene: yard
sprite: trashman-thinking center lg

**H**: (Brzo grabi komad baguettea i zagrize) Ukusno! Hvala na gostoprimstvu, Čuvare.

sprite: trashman-wise center lg

**ČS**: (Cerekanje) Ah ti lopove! Pa dobro, golubovi nisu previše mstoljubivi, navikli su na drskost turista... ali ovaj baguette je bio poseban! Francuski, s tartufima! Njihova omiljena delicija.

# pigeon_death
scene: pigeon_death

Iznenada nebo potamni od golubova. Počinju napadati Heroja s bijesom dostojnim najboljih bombardera. Kljunovi i pandže lete u lice, perje se gura u usta...

**H**: (Dahtajući) Dovraga! Što je ovo?!

sprite: trashman-wise right-third lg

**ČS**: (Mirno promatra što se događa) Usudio si se ukrasti njihov tartufni baguette! Sada će se osvetiti za svu uvredu koju su im nanijeli turisti. Golubovi su mstoljubiva bića, posebno kad je hrana u pitanju.

sprite:

**H**: (Dahtajući) Tartufi... kakva tuga! Trebao sam jesti običnu pitu, bila bi to mudra sluga!

sprite: trashman-wise right-third lg

**ČS**: (Mirno promatra što se događa)
Za pohlepu platio je životom sad,
Ne rugaj se nesreći, budalo, to ti je savjet mlad.

[Umrli ste](#end_scene)

# bribe_path
scene: yard

**H**: (Vadi iz džepa keks) Evo, izvolite! Golubovi, poslužite se! Možda im je već dosta francuskog baguettea?

Golubovi radosno dolijeću k Heroju i počinju kljuckati keks. Čuvar smeća začuđeno promatra to.

sprite: trashman-thinking right-third lg

**ČS**: Vau... "Plazma"! Ti golubovi-snobovi vole raznolikost! Bravo, čovječe, potkupio si ih! Oni obično okreću nos od svega što nije francusko.

# pigeon_achievement
scene: pigeon_achievement

Jedan osobito krupan golub sjeda Heroju na rame i zahvalno guka.

**H**: (Osmjehuje se) Čini se da sam im se svidio. Čak i guka!

sprite: trashman-wise right-third lg

**ČS**: Svidio si im se! Sada imaš golubiju pratnju. Ako se izgubiš - samo zviždni, odvest će te do najbliže ćevabdžinice ili pivnice. A ako se netko s tobom bude svađao - zakidat će ga!

[Dobiveno postignuće **Golublja mafija**](#second_scene)

# second_scene
scene: yard
sprite: trashman-glaring center lg

**ČS**: (Gleda s poštovanjem) Dobro, čovječe, nisi takva glupa budala kakvom si se činio na prvi pogled. Prođi i pitaj ako ti treba nešto saznati o našem dvorištu.

**H**: Slušaj, oduvijek sam sanjao popeti se na krov jedne od ovih starih zgrada! Ne znaš gdje bih mogao naći vodiča?

sprite: trashman-thinking center lg

**ČS**: (Zamišljeno) Na krov kažeš... Hmm... Onda ti treba u kuću broj 12 u Kuznečnoj uličici. Tamo žive dva prijatelja-djeda - jedan arhitekt-romantik, vječno lebdi u oblacima, a drugi mrzovoljni inženjer.

sprite: trashman-pointing center lg

**ČS**: Oni će te odvesti na tavan. A krovovima tamo vlada mačka-matrijarh, ako joj odrappaš opaki gangsta-rep, siguran sam da će te pustiti gore.

(H zviždne, i jato golubova uzlijeće, pokazujući mu put do Kuznečne uličice.)

[U Kuznečnu uličicu](#kuku)
# kuku
scene: kuku

(Heroj prilazi gradilištu u Kuznečnoj uličici, privučen bukom i gurajnijom.)

sprite: prosphor-amused left-third lg

**Prosfora (P, #D0E37F)**: (S patosom) Ah, Kukutučevo... Tamo gdje oblaci ljube vrhove kuća, oaza mira i inspiracije, iznad svih svjetskih briga!

sprite: el-annoyed right-third lg

**Jelisej (J, #A148C4)**: (Mrmlja sebi pod nos, češući potiljak) Oaza? Pa ovdje će sve uskoro pasti k vragu, ako ne učvrstimo potpore! Ljepota je dobra, ali još je bolje kad te ne sruši prvi nalet vjetra.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Zdravo, ljudi! Što je ovdje ova buka?

sprite: prosphor-excited left-third xl

**P**: (Uzdiže se na sedmo nebo od sreće) Gradimo Kukutučevo! Grad u oblacima, kamo se može pobjeći od svih ovih zemaljskih problema i briga! Tamo će biti fontane od zvjezdane prašine i vrtovi s pjevajućim cvijećem!

sprite: el-annoyed right-third lg

**J**: (Cerekanje) Gradimo... Radije pokušavamo graditi. Ovaj romantik stalno hoće dodati neke ukrase, da oko veseli, a treba jednostavno čvrsto pričvrstiti daske, da ne padne!

sprite: prosphor-indignated left-third lg

**P**: (Naduvao se) Ukrase?! Pa da, naravno, najlakše je sagraditi još jednu dosadnu kocku.

sprite: prosphor-amused left-third lg

**P**: Kukutučevo mora biti poema u kamenu!

sprite: el-annoyed right-third lg

**J**: Lijepo je kad ne padne od prvog naleta vjetra! Gledaj, ovdje treba dodati još jednu potporu... A ovaj romantik stalno hoće pričvrstiti na krov kip Kupida s lukom i strijelama! Zašto nam tu ljubav-mrkva, kad treba da kuća stoji?!

sprite:

**H**: (Osvrće se, češući bradu) Zanimljivo... Mogu li nekako pomoći? Zakucati čavle ili donijeti daske?

sprite: prosphor-amused left-third lg

**P**: Pomozi nam izabrati najbolji materijal za krov! Predlažem da koristimo stare kišobrane - lagani su, lijepi i stvaraju ugodnu atmosferu! Zamisli kako će slatko zvučati kiša koja bubnja po kišobranskom krovu!

sprite: el-annoyed right-third lg

**J**: (Prevrće očima) Kišobrani?! Oni od kiše štite, ne drže krov! Bolje uzeti čvrste daske, da izdrže i snijeg, i vjetar, pa čak i slona, ako odluči prošetati našim krovom!

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Zanimljiva dilema...

**P**: Hoćeš li pomoći odlučiti? Kišobrani ili daske?

[Izabrati kišobrane](#kuku_umbrellas)
[Izabrati daske](#kuku_boards)
[Pokušati nezapaženo otići](#kuku_escape)

# kuku_escape
scene: kuku

**H**: (Čini korak unatrag) Znate, sjetio sam se hitnog posla...

sprite: prosphor-indignated left-third lg

**P**: Kako?! Obećao si pomoći!

**H**: Nisam obećao... samo sam pitao...

sprite: el-annoyed right-third lg

**J**: (Maše rukom) Pa idi već! Samo nemoj tražiti pristup tavanu - mi tamo ne puštamo zevače!

sprite:

(Heroj brzo odlazi iza ugla. Golubovi razočarano gukaju i odlijeću. Postignuće **Golublja mafija** izgubljeno)

# sneak_attempt
scene: kuku

**H**: (Osvrće se) Dobro, ako neće pomoći... Pokušat ću sam.

(Heroj zaobilazi gradilište sa stražnje strane. Tamo se vide nepričvršćene daske, ljestve, građevinske skele)

(Počinje se penjati po skelama)

**H**: (Teško diše) Dobro barem što je konstrukcija čvrsta... Jelisej se potrudio.
# dangerous_ledge
scene: ledge

(Dolazi do gornjeg dijela, odakle se vidi uzak izbočeni rub stare zgrade)

**H**: (Gleda na rub) Odavde mogu prijeći na rub... A preko njega - do požarnih ljestava. Dalje - na krov!

(Oprezno prelazi sa skele na rub)

**H**: (Priljubljujući se uz zid) Ne gledati dolje... Glavno - ne gledati dolje...

(Rub je uzak, pod nogama se drobi stara žbuka)

**H**: (Čini korak) Oprezno... Oprezno...

(Vjetar se pojačava, trese odjeću)

**H**: (Stane) Mirno... Još malo...

# dangerous_ledge_fall
scene: ledge_fall

(Iznenada odozgo dolijeće golub i s glasnim mahanjem krila slijeće na rub upravo pred Herojem)

**Golub**: (Glasno guka, ogorčeno)

**H**: (Trgne se od iznenađenja) A?! Ti?!

(Gubi ravnotežu, pokušava se uhvatiti za zid)

**H**: (Očajno, u padu) NEEEE-eee-e!
# fall_end
scene: intro1

**Pripovjedač**: Vaše putovanje Peterburgom završilo je tragično.

**Pripovjedač**: Ponekad se nevoljkost da se pomogne drugima okrene protiv nas samih.

**Pripovjedač**: Da ste pomogli djedovima, dali bi vam pristup i siguran put na krov.

**Pripovjedač**: Umjesto toga pokušali ste potajno koristiti njihovo gradilište - i platili ste.

**Golub (glas iz pozadine)**: (Tužno guka)

**Pripovjedač**: Čak ni golubovi vas nisu mogli spasiti. Oni pomažu samo onima koji pomažu drugima.

[Početi iznova?](#start)

# kuku_umbrellas
scene: kuku

**H**: Ja sam za kišobrane! Ljepota je najvažnija u arhitekturi!

sprite: prosphor-excited left-third xl

**P**: (Oduševljeno) Bravo! Eto pravog estete! Zajedno ćemo stvoriti remek-djelo!

sprite: el-annoyed right-third lg

**J**: (Prevrće očima) Pa naravno... Još jedan sanjar se pojavio.

sprite:

(Prolazi vrijeme. Djedovi s Herojem pričvršćuju kišobrane na krov)

sprite: prosphor-amused left-third lg

**P**: Gledaj kako elegantno! Kako prozračno! To je poema!

sprite: el-annoyed right-third lg

**J**: (Skeptično) Aha... Poema. Samo da nema vjetra.

**J**: (Pokazuje na ključ) Na, uzmi ključ od tavana. Popni se na krov i pogledaj Kukutučevo sa strane - jesu li potpore pokrivile od ovih ljepota!

**H**: Bez problema! Sretno s vašim remek-djelom!

[Uzeti ključ od tavana](#matriarch_cat)

# kuku_boards
scene: kuku

**H**: Mislim da su daske pouzdanije. Sigurnost iznad svega.

sprite: el-annoyed right-third lg

**J**: (Zadovoljno) Napokon! Čovjek s glavom na ramenima!

sprite: prosphor-amused left-third lg

**P**: (Naduvao se) Pa i sjedi u svojoj čvrstoj šupi! Gdje je tu ljepota, gdje prozračnost?

sprite:

**H**: Ali neće pasti od prvog vjetra. No mogu se dodati rezbarene daske i zabavna vjetrokaza s kukavcem za ljepotu?

sprite: el-annoyed right-third lg

**J**: (Osmjehuje se) Eto to! Kompromis je sve!

sprite:

(Djedovi s Herojem brzo pričvršćuju ukrase na krov.)

sprite: el-annoyed right-third lg

**J**: Čvrsto, pouzdano i čak simpatično ispalo.

sprite: prosphor-excited left-third xl

**P**: (Promatra krov) Pa... s rezbarijama stvarno izgleda bolje!

sprite: el-annoyed right-third lg

**J**: Vidiš! Uzmi ključ od tavana, čovječe. Za praktičnost i što si nas s Prosforom pomirio.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Hvala, ljudi! Sretno s gradom u oblacima!

[Dobiveno postignuće **Arhitekt-diplomat**](#matriarch_cat)

# matriarch_cat
scene: attic

(Heroj izlazi na tavan i vidi Mačku-matrijarha, ugodno smještenu na jastuku od starih novina.)

sprite: matriarch-side center lg

**Mačka-matrijarh (MM, #594157)**: (Rappa, prižmirujući oči)
**MM**: Noć u dvorištu, ne znam kud da idem ja
**MM**: Skupa zdjela, skup H2O, to je moja stvar
**MM**: Meke šape, meke riječi, uvijek imam dar
**MM**: Vidim svoju hranu, ja sam takav, yo, baš car

sprite: matriarch-licking center lg

**MM**: Ukrala ribu dok si spavao, nisam uhvaćena - nisam kriminalac, to je zakon stvar

(Otvara oči i gleda Heroja)

sprite: matriarch-side center lg

**MM**: Što stojiš? Razjapljena usta kao turist na Nevskom?

**H**: Ja... Čuvar smeća je rekao da me možete odvesti na krov...

sprite: matriarch-licking center lg

**MM**: Čuvar? (Pršti) Taj brbljavac sve meni šalje. A ti tko si uopće?

[Iskreno se predstaviti](#honest_intro)
[Slagati da si ovdje lokalni](#lie_intro)
[Pokušati pomiliti mačku](#pet_cat)

# pet_cat
scene: attic

**H**: (Pruža ruku) Kakva slatka mačkica...

sprite: matriarch-angry center xl

**MM**: (Šišti) MAČKICA?! SLA-TKA?!

**MM**: Ja sam MATRIJARH! Vladam ovim krovovima dvadeset godina! Preživjela sam tri mačora i pet pasa! Čak i golubovi me se boje!

sprite:

**H**: Oprostite, vaše mačje veličanstvo. Samo ste mi se činili slatki.

sprite: matriarch-licking center lg

**MM**: (Smiruje se, ali još uvijek nezadovoljna) Skloni ruke. Nisam neka dvorišna mačka koju možeš milovati.

**H**: (Spušta ruku) Razumijem. Oprostite.

**MM**: Tako je. A sad gubi odavde. Na krov ti je put zabranjen.

**H**: Ali...

**MM**: MARŠ!

[Otići ni s čim](#end_scene)

# honest_intro
scene: attic

sprite: matriarch-side center lg

**H**: Ja sam samo gost grada. Peterburg me je osvojio svojom atmosferom. Htio sam vidjeti grad s visine, posebno mora biti lijepo sada, s novogodišnjom jelkom!

sprite: matriarch-licking center lg

**MM**: Odvest ću te na krov, ali prvo - battle. Kulturna razmjena, tako reći.

**H**: Battle?

**MM**: Rep-battle. Ti rappaš strofu o Peterburgu, ja ocjenjujem. Položiš - dobivaš ključ. Ne položiš - ideš.

[Pristati na battle](#rap_battle)
[Predložiti alternativu](#alternative_task)

# lie_intro
scene: attic

sprite: matriarch-side center lg

**H**: Ja sam ovdje lokalni! Živim ovdje... na Nevskom!

sprite: matriarch-licking center lg

**MM**: (Podiže obrvu) Na Nevskom? Broj kuće?

**H**: E-e... 45?

sprite: matriarch-laughing center lg

**MM**: (Smije se) 45?! Tamo je dućan, budaletino! Uopće ne znaš lagati!

**H**: Pa... tek sam se doselio...

sprite: matriarch-side center lg

**MM**: (Strogo) Ne lažeš matrijarha! Ja ovdje znam svaku stanara osobno! I svakog stranca osjećam s milje!

sprite: matriarch-side center lg

**MM**: I uzmi svoje golubove, sve su mi ovdje zaprljali!

(Golubovi razočarano odlijeću. Postignuće **Golublja mafija** izgubljeno)

[Otići ni s čim](#end_scene)

# alternative_task
scene: attic

sprite: matriarch-side center lg

**H**: Možda mogu napraviti nešto drugo? Nisam baš dobar u repanju...

**MM**: (Zamišljeno) Hm. A što znaš?

**H**: Pa... Mogu ti donijeti nešto ukusno?

sprite: matriarch-licking center lg

**MM**: (Oživljava) O! Poslovni pristup! Sviđa mi se!

**MM**: Slušaj. Dolje, u prolazu kod kuće 7, ima baka koja prodaje piroške. Treba mi piroška s ribom. Svježa!

**H**: Samo to?

**MM**: Samo to?! Ti piroški su legenda kvarta! Baka kuha samo sat vremena dnevno, i red je kao u mauzolej! Ako uspiješ - ključ je tvoj.

[Otići po pirošku](#fetch_pie)
[Ipak pokušati battle](#rap_battle)

# fetch_pie
scene: attic

(Heroj silazi i nakon nekog vremena se vraća s piroškom)

**H**: (Zadihan) Evo! Jedva sam stigao, bila je zadnja!

sprite: matriarch-licking center lg

**MM**: (Njuši) Mmm... Svježa! Vruća! (Zagrize) Odlično!

sprite: matriarch-candid center lg

**MM**: (S punim ustima) Ti si dobar čovjek. Evo ključ. Kroz ovaj otvor - na krov.

**H**: Hvala!

**MM**: (Jede pirošku) I pazi da ne padneš odozgo. Inače tko će mi piroške nositi?

[Dobiveno postignuće **Matrijarhov dostavljač**](#roof_scene_normal)

# rap_battle
scene: attic

sprite: matriarch-side center lg

**MM**: Okej, reper. Slušam pažljivo.

[Idemo!](#rap_battle_start)

# rap_battle_start
scene: attic

**H**: (Počinje) U Kukutučevu je zima...

[Nastaviti poetično](#rap_battle_poetic_start)
[Nastaviti ironično](#rap_battle_ironic_start)
# rap_battle_poetic_start
scene: attic

**H**: U Kukutučevu je zima, vrijeme stalo u vjekovima stoji. Ovdje svako dvorište - kao portal u zaboravljene svjetove se kroji.

sprite: matriarch-side center lg

**MM**: U Kukutučevu je zima? Pa tu je vječna smrzlina! Portali u svjetove? Kante za smeće, to je stvarnost jedina!

sprite:

**H**: Kante za smeće su samo odraz našeg života brate.
**H**: "U vatri bili smo..." Tak', treba li nekako srimat... odmah?

[Kaljeni?](#rap_forged_in_fire)
[E-e-e... Tramvaj?](#rap_forged_in_tram)
# rap_forged_in_fire
scene: attic

sprite: matriarch-candid center lg

**H**: Kante za smeće su samo odraz našeg života brate.
**H**: U vatri bili smo, kaljeni patnjom sve na ovoj kati

sprite: matriarch-side center lg

**MM**: Svijet uvijek gori, ja se grijem na plamenu, bravo za te.

sprite:

**H**: Tvoj plamen je samo odsjaj svjetiljki, tvoje ideje tope se kao prvi snijeg. U ovom gradu ja sam glavni strateg, moj potez je uvijek pravi tijek.

sprite: matriarch-licking center lg

**MM**: Strateg? Ti si samo mala maca! Ja vladam ovim dvorom i svim kantama, to je istina prava! I čak znam tko je što bacio, nikad se ne varam, slava!

sprite: matriarch-candid center lg

**MM**: Ali stvarno nisi loš.

[Nakloniti se](#rap_battle_win)
# rap_forged_in_tram
scene: attic

**H**: Kante za smeće su odraz života, slušaj ti.
**H**: U vatri bili smo, u tramvaju broj tri!

sprite: matriarch-laughing center lg

[Čini se da sam rekao nešto krivo...](#rap_battle_fail)
# rap_battle_ironic_start
scene: attic

**H**: U Kukutučevu je zima, snijeg leti ko iz topa. A ti si samo malo mače u ovom tvrdom krznu, jadan si tropa.

sprite: matriarch-licking center lg

**MM**: Ja sam ovdje šefica, ja sam tu boss. I ako ti se ne svidim - šapa će ti doć' do kos.

sprite:

**H**: "Tvoja gordost je samo iluzija za oči"... Ali kako završiti ovu rimu?

[Misliš da ovdje vladaš?](#rap_battle_i_am_not_the_boss)
[Zapamti ovaj čas!](#rap_battle_i_am_the_boss)
# rap_battle_i_am_the_boss
scene: attic

**H**: Tvoja gordost je samo iluzija za oči sve. Ja sam ovdje boss, zapamti ovaj trenutak, znaš ve'.

sprite: matriarch-licking center lg

**MM**: Rep nije tvoje, pokušavaš al' nemaš taj flow.

sprite:

**H**: Proza je dosadno smeće, pišeš je zidovima, to je tvoj show.

sprite: matriarch-candid center lg

**MM**: Ali stvarno nisi loš, moram priznat.

[Nakloniti se](#rap_battle_win)
# rap_battle_i_am_not_the_boss
scene: attic

**H**: Tvoja gordost je samo iluzija za oči sve
**H**: Misliš da ovdje vladaš? Pa, ja pasu igram, znam ve'

sprite: matriarch-laughing center lg

[Čini se da sam rekao nešto krivo...](#rap_battle_fail)

# rap_battle_fail
scene: attic

**H**: Nisam mislio osobno, skandali su bug, ne fičr

sprite: matriarch-laughing center lg

**MM**: Ali sve si sam izlančao, tvoj track je autobiografski, to je sičr

[Pokušati ponovno](#rap_battle)
[Predložiti alternativu](#alternative_task)
# rap_battle_win
scene: attic

sprite: matriarch-candid center lg

**MM**: Dobro, dobro. Nije loše za čovjeka. Gotovo si me zabavio!
**MM**: Nisi Škabo, ali za početniku - prođe. Evo ključ!
# roof_scene_normal
scene: rooftop

**H**: (Izlazi na krov i stane od oduševljenja) Vau!

(Pred njim - panorama večernjeg Peterburga, preplavljenog svjetlima. Sjajna novogodišnja jelka uzdiže se iznad trga.)

**H**: Isaakij... Admiralitet... Kupole crkava... Kao da sam upao u novogodišnju bajku!

(Boj satova, golubovi kruže iznad trga, pozdravljajući Novu godinu.)
# roof_scene_snow
scene: rooftop_snow

🎄Sretna Nova 2026. godina 🎄 [video:catjammer.mp4]

[KRAJ](#end_scene)

# end_scene
scene: intro1
**Pripovjedač**: Hvala što ste proveli vrijeme s nama!
**Pripovjedač**: Time naša vizualna novela dolazi do kraja.
**Pripovjedač**: Možete igrati ponovno i pokušati druge puteve kako biste otkrili sve priče!
