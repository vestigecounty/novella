# start
scene: intro2

(Lyden af fodtrin på våde brolægningssten, en sporvogn brummer i det fjerne)

**H (H, #87CEEB)**: (Sukker) Petersborg... Ja, dette er en spøgelsesby, en by af erindringer, en by hvor fortiden ånder dig i nakken. Alt her virker gennemsyret af historie, den siver fra hver sten, hver bue, hver kanal...

# intro
scene: intro1

**H**: Dette er ikke Moskva med sin drift og fokus på fremtiden. Petersborg ser på fortiden, som om den forsøger at forstå, hvordan vi kom til dette punkt. Her er hver gårdhave en særskilt historie, hver indgang er som et kulissesæt til en historisk film.

# yard
scene: yard

(H ser sig omkring og beundrer arkaden)

**H**: Nevskij Prospekt er selvfølgelig storslået, men i disse stille gyder kan man fornemme byens sande sjæl. Dostojevskijs verden, om man vil... Fattigdom og luksus hånd i hånd, som om de altid har været sammen. Her husker man Gribojedov, Blok, Achmatova... Duerne, der flyver over hovedet, er som digternes ånder...

(H snubler over en bunke affald)

**H**: (Stille) Selv i denne arkade er der en vis charme... Petersborg ved, hvordan man skal overraske.

(Bemærker "Skraldevogteren")

sprite: trashman-pointing center lg

**Skraldevogteren (SV, #FF6B9D)**: (Hæst) Nå, nå, nå... Hvem har vi her? Jeg er Skraldevogteren, og jeg kender alle her! Gør dig klar til at betale for passage! Selvom okay, i dag er der særlig rabat til fjolser.

**H**: Skraldevogteren... Originalt. Og hvad vogter du? Mod hvad?

sprite: trashman-glaring center lg

**SV**: Vogter mod dit dumme fjæs! Hvad laver du her, hva'?

**H**: (Ser sig omkring) Nå ja, der er da noget at vogte... En bunke skrald.

sprite: trashman-pointing center lg

**SV**: (Irriteret) Stå ikke bare der! Du blokerer mit udsyn til duerne!

**H**: Duerne? Hvad med dem?

sprite: trashman-wise center lg

**SV**: De er gårdhavens forbandede elite! De bedste bombefly i Petersborg!

**H**: Hmm... Bomber de også dig?

sprite: trashman-thinking center lg

**SV**: (Sukker) Nå ja... konstant. Men det er en ære! Det betyder, at jeg er et værdigt mål for angreb! Det er som et kvalitetsstempel, forstår du?! De bomber ikke bare hvilket som helst skrald, de har brug for en værdig modstander.

**H**: Og du er ikke fornærmet?

sprite: trashman-pointing center lg

**SV**: At være fornærmet over duer er som at være fornærmet over regn i Petersborg! Meningsløst! Desuden skaber de atmosfære, tilføjer farve! Og deres ekskrementer er gødning til mine avislag. Kort sagt, gensidigt fordelagtigt samarbejde!

**H**: (Smiler) Logisk. Så duerne er dine allierede?

sprite: trashman-pointing center lg

**SV**: Allierede, våbenbrødre, gårdhavens elite! De kender alle hemmelighederne på dette sted, og hvis det er nødvendigt - flyver de til hjælp! Bare lad være med at se dem i øjnene for længe, ellers bomber de dig ihjel.

**H**: Jeg skal huske det. Bestikker du dem på en eller anden måde?

sprite: trashman-pointing left-third lg

**SV**: (Peger på et stykke brød, der ligger ved hans "fødder") Her, jeg trakterer dem med friskt brød! De elsker fransk baguette, disse snobede duer! Og vov ikke at stjæle deres andel, ellers får du min lyddæmperhånd i hovedet!

[Stjæl baguetten](#steal_path)
[Traktér dem med småkager](#bribe_path)

# steal_path
scene: yard
sprite: trashman-thinking center lg

**H**: (Griber hurtigt stykket baguette og tager en bid) Lækkert! Tak for godbiddet, Vogter.

sprite: trashman-wise center lg

**SV**: (Fniser) Åh, din tyv! Nå okay, duerne er ikke for fornærmede, de er vant til turisternes frækhed... men den baguette var speciel! Fransk, med trøfler! Deres yndlingsdelikatesse.

# pigeon_death
scene: pigeon_death

Pludselig bliver himlen mørk af duer. De begynder at angribe Helten med raseri værdigt til de bedste bombefly. Næb og kløer flyver mod hans ansigt, fjer stopper hans mund...

**H**: (Kvæles) Fanden! Hvad pokker?!

sprite: trashman-wise right-third lg

**SV**: (Betragter roligt) Du vovede at stjæle deres trøffelbaguette! Nu vil de hævne alle de krænkelser, turisterne har påført dem. Duer er hævngerrige skabninger, især når det drejer sig om mad.

sprite:

**H**: (Kvæles) Trøfler... sikken møj! Skulle ha' valgt en tærte uden trøj!

sprite: trashman-wise right-third lg

**SV**: (Betragter roligt)
For grådighed han betalte med sit liv,
Spot ej ulykken, tåbelig og stiv.

[Du døde](#end_scene)

# bribe_path
scene: yard

**H**: (Tager småkager frem fra lommen) Værsgo! Duer, nyd det! Måske er de trætte af fransk baguette?

Duerne stimler glade til Helten og begynder at hakke i småkagerne. Skraldevogteren kigger overrasket.

sprite: trashman-thinking right-third lg

**SV**: Wow... Småkager! Disse snobede duer elsker variation! Godt klaret, gut, du har bestukket dem! De rynker normalt på næsen ad alt ikke-fransk.

# pigeon_achievement
scene: pigeon_achievement

En særlig stor due lander på Heltens skulder og kurrer taknemmelig.

**H**: (Smiler) Det ser ud til, at de kan lide mig. Den snurrede endda!

sprite: trashman-wise right-third lg

**SV**: De kan lide dig! Nu har du et duefølge. Hvis du farer vild - bare fløjt, de vil føre dig til den nærmeste shawarma eller kro. Og hvis nogen skændes med dig - bomber de dem!

[Bedrift låst op: **Duemafiaen**](#second_scene)

# second_scene
scene: yard
sprite: trashman-glaring center lg

**SV**: (Ser med respekt) Okay, gut, du er ikke sådan en snottede idiot, som du virkede ved første øjekast. Gå videre og spørg, hvis du har brug for at vide noget om vores gårdhave.

**H**: Hør, jeg har altid drømt om at komme op på taget af en af disse gamle bygninger! Ved du ikke, hvor jeg kunne finde en guide?

sprite: trashman-thinking center lg

**SV**: (Tankefuldt) På taget siger du... Hmm... Så skal du gå til hus nummer 12 på Kuznetjnij Gade. To gamle venner bor der - den ene er en romantisk arkitekt, altid med hovedet i skyerne, og den anden er en gnaven ingeniør.

sprite: trashman-pointing center lg

**SV**: De vil tage dig op på loftet. Og tagene der holdes af en matriarkkat - hvis du reciterer noget hardcore gangsta-rap til hende, er jeg sikker på, at hun lader dig komme op.

(H fløjter, og en flok duer letter og viser ham vejen til Kuznetjnij Gade.)

[Til Kuznetjnij Gade](#kuku)

# kuku
scene: kuku

(Helten nærmer sig en byggeplads på Kuznetjnij Gade, tiltrukket af larm og tumult.)

sprite: prosphor-amused left-third lg

**Prosphor (P, #D0E37F)**: (Med pomp) Ah, Gøgeskyen... Hvor skyerne kysser husenes toppe, en oase af fred og inspiration, der rejser sig over verdens travlhed!

sprite: el-annoyed right-third lg

**Elisej (E, #A148C4)**: (Mumler for sig selv og klør sig i hovedet) Oase? Snart kollapser alt her til helvede, hvis vi ikke forstærker støtterne! Skønhed er godt, men det er endnu bedre, når man ikke bliver knust af det første vindstød.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Hej folkens! Hvad er al den larm om?

sprite: prosphor-excited left-third xl

**P**: (Stiger til syvende himmel af lykke) Vi bygger Gøgeskyen! En by i skyerne, hvor man kan flygte fra alle disse jordiske problemer og bekymringer! Der vil være springvand af stjernestøv og haver med syngende blomster!

sprite: el-annoyed right-third lg

**E**: (Fniser) Bygger... Mere som prøver at bygge. Denne romantiker vil altid tilføje nogle krusseduller for at behage øjet, men vi skal bare sikkert fastgøre brædterne, så det ikke falder fra hinanden!

sprite: prosphor-indignated left-third lg

**P**: (Prutte) Krusseduller?! Nå ja, selvfølgelig er det nemmest at bygge endnu en kedelig terning.

sprite: prosphor-amused left-third lg

**P**: Gøgeskyen skal være et digt i sten!

sprite: el-annoyed right-third lg

**E**: Smukt er, når det ikke kollapser fra det første vindstød! Se, her skal vi tilføje endnu en støtte... Og denne romantiker vil altid fastgøre en statue af Amor med bue og pile på taget! Hvorfor har vi brug for kærlighed-smærlighed her, når huset skal stå?!

sprite:

**H**: (Ser sig omkring og klør sig i hagen) Interessant... Måske kan jeg hjælpe på en eller anden måde? Hamre søm i eller bringe brædder?

sprite: prosphor-amused left-third lg

**P**: Hjælp os med at vælge det bedste materiale til taget! Jeg foreslår at bruge gamle paraplyer - de er lette, smukke og skaber en hyggelig atmosfære! Forestil dig, hvor sødt regnen vil se ud, mens den trommer på parapytaget!

sprite: el-annoyed right-third lg

**E**: (Ruller øjne) Paraplyer?! De beskytter mod regn, de holder ikke tage oppe! Bedre at tage stærkere brædder, der kan modstå sne, vind og endda en elefant, hvis den beslutter sig for at gå på vores tag!

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: I har et interessant dilemma...

**P**: Så vil du hjælpe med at beslutte? Paraplyer eller brædder?

[Vælg paraplyer](#kuku_umbrellas)
[Vælg brædder](#kuku_boards)
[Prøv at snige dig stille væk](#kuku_escape)

# kuku_escape
scene: kuku

**H**: (Tager et skridt tilbage) Ved du hvad, jeg huskede en presserende sag...

sprite: prosphor-indignated left-third lg

**P**: Hvad?! Men du lovede at hjælpe!

**H**: Jeg lovede ikke... Jeg spurgte bare...

sprite: el-annoyed right-third lg

**E**: (Vinker med hånden) Bare gå allerede! Men spørg ikke om adgang til loftet - vi lukker ikke tilfældige gloere ind der!

sprite:

(Helten forlader hurtigt rundt om hjørnet. Duerne kurrer skuffede og flyver væk. Bedrift **Duemafiaen** mistet)

# sneak_attempt
scene: kuku

**H**: (Ser sig omkring) Nå, hvis de ikke vil hjælpe... Jeg prøver selv.

(Helten går rundt om konstruktionen bagfra. Der er synlige ufastgjorte brædder, stiger, stilladser)

(Begynder at klatre op ad stilladserne)

**H**: (Ånder tungt) Godt, at strukturen er solid... Elisej gjorde sit bedste.

# dangerous_ledge
scene: ledge

(Når den øverste del, hvorfra en smal afsats af den gamle bygning er synlig)

**H**: (Ser på afsatsen) Herfra kan jeg komme til afsatsen... Og langs den - til brandtrappen. Så - til taget!

(Træder forsigtigt fra stilladset over på afsatsen)

**H**: (Presser sig mod væggen) Kig ikke ned... Hovedsagen - kig ikke ned...

(Afsatsen er smal, gammel puds smuldrer under fødderne)

**H**: (Tager et skridt) Forsigtigt... Forsigtigt...

(Vinden tager til og slår hans tøj)

**H**: (Fryser) Rolig... Bare lidt mere...

# dangerous_ledge_fall
scene: ledge_fall

(Pludselig flyver en due fra et sted ovenfor og med støjende vingeslag lander på afsatsen lige foran Helten)

**Due**: (Kurrer højt, indigneret)

**H**: (Skriger) Ah?! Dig?!

(Mister balancen, forsøger at gribe væggen)

**H**: (Desperat, falder) NEJ-eej-eej!

# fall_end
scene: intro1

**Fortæller**: Din rejse gennem Petersborg endte tragisk.

**Fortæller**: Nogle gange vender manglende vilje til at hjælpe andre sig mod os.

**Fortæller**: Hvis du havde hjulpet de gamle mænd, ville de have givet dig adgang og en sikker vej til taget.

**Fortæller**: I stedet prøvede du at bruge deres konstruktion i hemmelighed - og betalte prisen.

**Due (voice-over)**: (Kurrer trist)

**Fortæller**: Selv duerne kunne ikke redde dig. De hjælper kun dem, der hjælper andre.

[Start forfra?](#start)

# kuku_umbrellas
scene: kuku

**H**: Jeg går ind for paraplyer! Skønhed er det vigtigste i arkitektur!

sprite: prosphor-excited left-third xl

**P**: (Entusiastisk) Bravo! Nu er det en sand æstet! Sammen skaber vi et mesterværk!

sprite: el-annoyed right-third lg

**E**: (Ruller øjne) Selvfølgelig... Endnu en drømmer er dukket op.

sprite:

(Tiden går. De gamle mænd med Helten fastgør paraplyer på taget)

sprite: prosphor-amused left-third lg

**P**: Se hvor elegant! Hvor luftigt! Dette er et digt!

sprite: el-annoyed right-third lg

**E**: (Skeptisk) Uh-huh... Et digt. Lad os bare håbe, at der ikke er vind.

**E**: (Peger på en nøgle) Her, tag nøglen til loftet. Gå op på taget og se på Gøgeskyen fra siden - sørg for, at støtterne ikke er vippet fra alle disse skønheder!

**H**: Intet problem! Held og lykke med jeres mesterværk!

[Tag loftnøglen](#matriarch_cat)

# kuku_boards
scene: kuku

**H**: Jeg synes, brædder er mere pålidelige. Sikkerhed frem for alt.

sprite: el-annoyed right-third lg

**E**: (Tilfreds) Endelig! En mand med hoved på skuldrene!

sprite: prosphor-amused left-third lg

**P**: (Prutte) Nå, sid så i jeres robuste lade! Hvor er skønheden, hvor er luftigheden?

sprite:

**H**: Men det falder ikke fra hinanden fra den første vind. Selvom vi stadig kunne tilføje udskårne brædder og en sjov vejrhane med en gøg for skønhedens skyld?

sprite: el-annoyed right-third lg

**E**: (Smiler) Det er ånden! Kompromis er alt!

sprite:

(De gamle mænd med Helten fastgør hurtigt dekorationer på taget.)

sprite: el-annoyed right-third lg

**E**: Robust, pålideligt og endda pænt godt udseende.

sprite: prosphor-excited left-third xl

**P**: (Undersøger taget) Nå... med udskæringerne blev det virkelig bedre!

sprite: el-annoyed right-third lg

**E**: Ser du! Her, tag loftnøglen, gut. For at være praktisk og for at forlige mig med Prosphor.

sprite: prosphor-amused left-third lg
sprite: el-annoyed right-third lg

**H**: Tak, folkens! Held og lykke med jeres by i skyerne!

[Bedrift låst op: **Arkitekt-Diplomat**](#matriarch_cat)

# matriarch_cat
scene: attic

(Helten går ud på loftet og ser Matriarkkatten, bekvemt placeret på en pude af gamle aviser.)

sprite: matriarch-side center lg

**Matriarkkatten (MK, #594157)**: (Rapper, kniber øjnene sammen)
**MK**: Nat i gården, ved ej hvor man går
**MK**: Dyr skål og dyrt H2O i år
**MK**: Bløde poter, bløde ord jeg får
**MK**: Se min mad, jeg er sådan, yo klar

sprite: matriarch-licking center lg

**MK**: Stjal din fisk mens du sov, ej fanget - ej tyv, det erlov

(Åbner øjne og ser på Helten)

sprite: matriarch-side center lg

**MK**: Hvad står du for? Mund åben som en turist på Nevskij?

**H**: Jeg... Skraldevogteren sagde, at du kunne føre mig til taget...

sprite: matriarch-licking center lg

**MK**: Skraldevogteren? (Fnøser) Den sladrehank sender alle til mig. Og hvem er du i øvrigt?

[Præsentér dig selv ærligt](#honest_intro)
[Løg om at du er lokal](#lie_intro)
[Prøv at klappe katten](#pet_cat)

# pet_cat
scene: attic

**H**: (Rækker ud) Sådan en sød killing...

sprite: matriarch-angry center xl

**MK**: (Hvæser) KILLING?! SØ-D?!

**MK**: Jeg er en MATRIARKAT! Jeg har regeret over disse tage i tyve år! Jeg har overlevet tre hankat og fem hunde! Selv duer frygter mig!

sprite:

**H**: Beklager, Deres kattelige majestæt. Virkede bare sød.

sprite: matriarch-licking center lg

**MK**: (Rolig men stadig utilfreds) Hold dine hænder for dig selv. Jeg er ikke en gårdhavekat, du kan klemme på.

**H**: (Sænker hånden) Forstået. Beklager.

**MK**: Det er bedre. Forsvind herfra nu. Taget er forbudt område for dig.

**H**: Men...

**MK**: FORSVIND!

[Forlad tomhændet](#end_scene)

# honest_intro
scene: attic

sprite: matriarch-side center lg

**H**: Jeg er bare gæst i byen. Petersborg fangede mig med sin atmosfære. Jeg ville se byen oppefra, især smuk skulle den være nu, med nytårstræet!

sprite: matriarch-licking center lg

**MK**: Jeg tager dig til taget, men først - en kamp. Kulturel udveksling, så at sige.

**H**: Kamp?

**MK**: Rap-kamp. Du spytter et vers om Petersborg, jeg dømmer. Bestå - du får nøglen. Fejl - du er ude.

[Acceptér kampen](#rap_battle)
[Foreslå et alternativ](#alternative_task)

# lie_intro
scene: attic

sprite: matriarch-side center lg

**H**: Jeg er lokal! Jeg bor her... på Nevskij!

sprite: matriarch-licking center lg

**MK**: (Løfter et øjenbryn) På Nevskij? Husnummer?

**H**: Øh... 45?

sprite: matriarch-laughing center lg

**MK**: (Griner) 45?! Der er en butik der, dumrian! Du kan slet ikke lyve!

**H**: Nå... jeg er lige flyttet...

sprite: matriarch-side center lg

**MK**: (Strengt) Lyv ikke for matriarken! Jeg kender hver beboer her ved synet! Og jeg lugter hver udenforstående en mil væk!

sprite: matriarch-side center lg

**MK**: Og tag dine duer, de har rodet alt sammen her!

(Duerne flyver skuffede væk. Bedrift **Duemafiaen** mistet)

[Forlad tomhændet](#end_scene)

# alternative_task
scene: attic

sprite: matriarch-side center lg

**H**: Måske kan jeg gøre noget andet? Jeg er ikke særlig god til rap...

**MK**: (Tankefuldt) Hmm. Hvad kan du?

**H**: Nå... Jeg kunne bringe dig noget lækkert?

sprite: matriarch-licking center lg

**MK**: (Spidser ører) Åh! Forretningsmetode! Det kan jeg lide!

**MK**: Hør her. Dernede, i arkaden ved hus 7, er der en bedstemor, der sælger tærter. Jeg har brug for en fisketærte. Frisk!

**H**: Det er alt?

**MK**: Det er alt?! Disse tærter er en legende i kvarteret! Den gamle dame laver kun mad en time om dagen, og køen er som til et mausoleum! Klarer du det - nøglen er din.

[Gå og hent tærten](#fetch_pie)
[Prøv kampen alligevel](#rap_battle)

# fetch_pie
scene: attic

(Helten går ned og vender tilbage efter nogen tid med en tærte)

**H**: (Forpustet) Her! Nåede det lige, det var den sidste!

sprite: matriarch-licking center lg

**MK**: (Snuser) Mmm... Frisk! Varm! (Tager en bid) Lækkert!

sprite: matriarch-candid center lg

**MK**: (Med fuld mund) Du er god, gut. Her er nøglen. Gennem denne luge - til taget.

**H**: Tak!

**MK**: (Færdiggør tærten) Og pas på, du ikke falder derfra. Hvem ellers vil bringe mig tærter?

[Bedrift låst op: **Matriarkens Buddreng**](#roof_scene_normal)

# rap_battle
scene: attic

sprite: matriarch-side center lg

**MK**: Okay, rapper. Jeg lytter omhyggeligt.

[Lad os køre!](#rap_battle_start)

# rap_battle_start
scene: attic

**H**: (Begynder) I Gøgeskyen vinteren råder...

[Fortsæt poetisk](#rap_battle_poetic_start)
[Fortsæt ironisk](#rap_battle_ironic_start)

# rap_battle_poetic_start
scene: attic

**H**: I Gøgeskyen vinteren råder, hver gård gemmer glemte tider. Her hver port - en adgang til de svundne verdners sider.

sprite: matriarch-side center lg

**MK**: I Gøgeskyen er det vinter? Her er bare kulde, mand! Svundne sider? Bare skraldespande, brug din sunde forstand!

sprite:

**H**: Skraldespande er kun refleksioner af vores livs design.
**H**: "Gennem ild vi har været..." Nu skal det rimes fint.

[Smedet?](#rap_forged_in_fire)
[Øh... En sporvogn?](#rap_forged_in_tram)

# rap_forged_in_fire
scene: attic

sprite: matriarch-candid center lg

**H**: Skraldespande er kun spejle af vores livs kampe hårde.
**H**: Gennem ild vi har været smedet, det ved enhver kloge gårde.

sprite: matriarch-side center lg

**MK**: Verden brænder altid lyst, jeg varmer mig ved ildens nærde.

sprite:

**H**: Din flamme er kun gadelygters gløden, dine ideer smelter som første sneen. I denne by er jeg strateg i kampen bold, mit træk er altid rigtigt, det er skønt og koldt.

sprite: matriarch-licking center lg

**MK**: Strateg? Du er bare en lille killing! Jeg styrer hele gården og hver skraldespand til fylding! Og ved endda hvem der smed hvad ud i dag, det' vilding!

sprite: matriarch-candid center lg

**MK**: Men du er virkelig ikke dårlig.

[Buk](#rap_battle_win)

# rap_forged_in_tram
scene: attic

**H**: Skraldespande er kun spejle af livets hårde kår.
**H**: Gennem ild vi har været, på sporvogn uden spor!

sprite: matriarch-laughing center lg

[Ser ud til jeg sagde noget forkert...](#rap_battle_fail)

# rap_battle_ironic_start
scene: attic

**H**: I Gøgeskyen vinteren her, sne falder som hagl fra sky. Og du er bare en lille killing i denne verden kold og gry.

sprite: matriarch-licking center lg

**MK**: Jeg er bossen her på stedet, jeg styrer alt hvad du kan se. Og liker jeg dig ikke - så får du poter op i dit ansigt, ve!

sprite:

**H**: "Din stolthed er bare en illusion for øjnene"... Men hvordan skal dette rim sluttes?

[Tror du regerer her?](#rap_battle_i_am_not_the_boss)
[Husk denne nat!](#rap_battle_i_am_the_boss)

# rap_battle_i_am_the_boss
scene: attic

**H**: Din stolthed er bluff og skin, jeg er den rigtige boss i by'n.

sprite: matriarch-licking center lg

**MK**: Rap er ikke din ting, du prøver, men skills mangler du desværre fyn.

sprite:

**H**: Prosa er kedeligt skrald, selvom du krads'r det på væggen med din klo så kold.

sprite: matriarch-candid center lg

**MK**: Men du er virkelig ikke dårlig.

[Buk](#rap_battle_win)

# rap_battle_i_am_not_the_boss
scene: attic

**H**: Din stolthed er bare en illusion for øjnene
**H**: Du troede du regerede her? Nå ja, jeg springer over det, pæne forsøg mener jeg nene

sprite: matriarch-laughing center lg

[Ser ud til jeg sagde noget forkert...](#rap_battle_fail)

# rap_battle_fail
scene: attic

**H**: Jeg mente det ikke personligt, skandaler er en fejl ikke et træk

sprite: matriarch-laughing center lg

**MK**: Det L er på dig, dine bars blev din læremester, ræk

[Prøv igen](#rap_battle)
[Foreslå et alternativ](#alternative_task)

# rap_battle_win
scene: attic

sprite: matriarch-candid center lg

**MK**: Okay, okay. Ikke dårligt for et menneske. Du underholdt mig næsten!
**MK**: Ikke Gasolin, men for en begynder - anstændigt. Her er nøglen!

# roof_scene_normal
scene: rooftop

**H**: (Går ud på taget og fryser i begejstring) Wow!

(Foran ham - et panorama af aften-Petersborg, oversvømmet med lys. Et skinnende nytårstræ rager op over pladsen.)

**H**: Isakskirken... Admiralitetet... Kirke-kupler... Som at træde ind i et nytårseventyr!

(Klokkespil slår, duer kredser over pladsen og byder det nye år velkommen.)

# roof_scene_snow
scene: rooftop_snow

🎄Godt Nytår 2026 🎄 [video:catjammer.mp4]

[SLUT](#end_scene)

# end_scene
scene: intro1
**Fortæller**: Tak fordi du brugte tid sammen med os!
**Fortæller**: Dette afslutter vores visuelle roman.
**Fortæller**: Du kan spille igen og prøve forskellige veje for at låse alle historierne op!
