let interval;
let timerthing;
let timerstate;

const decider = () => {
    if (document.getElementById("myswitch").checked) {
        document.getElementById("myButton").hidden = true;
        document.getElementById("directions").hidden = true;
        document.getElementById("intervalSec").hidden = true;

        getWord();
        let seconds = document.getElementById("intervalSec").value;
        seconds = (seconds != "" && seconds >= 1) ? seconds : 5;
        document.getElementById("intervalSec").value = seconds;
        interval = setInterval(getWord, 1000*seconds);
        timerstate = Number(document.getElementById("intervalSec").value);
        document.getElementById("timer").innerHTML = timerstate;
        timerthing = setInterval(changeTime, 1000);
    } else {
        clearInterval(interval);
        clearInterval(timerthing);
        document.getElementById("myButton").hidden = false;
        document.getElementById("directions").hidden = false;
        document.getElementById("intervalSec").hidden = false;
        document.getElementById("word").innerHTML = "";
        document.getElementById("type").innerHTML = "";
        document.getElementById("definition").innerHTML = "";
        document.getElementById("timer").innerHTML = "";
    }
}

const changeTime = () => {
    if (timerstate == 1){
        timerstate = Number(document.getElementById("intervalSec").value);
        document.getElementById("timer").innerHTML = timerstate;
    } else {
        timerstate--;
        document.getElementById("timer").innerHTML = timerstate;
    }
}

const getWord = () => {
    let allArr = csv.split('\n');
    let randomInte = Math.floor(Math.random() * (allArr.length -1));
    let final = allArr[randomInte].split("|");
    document.getElementById("word").innerHTML = final[0];
    document.getElementById("type").innerHTML = final[1];
    document.getElementById("definition").innerHTML = final[2];
}

const shuffle = () => {
    document.getElementById("myiframe").src = "https://www.youtube.com/embed/" + shuffle_list[Math.floor(Math.random() * shuffle_list.length)];
}

document.getElementById("myswitch").addEventListener("click", decider);
shuffle();

let csv = `
abate|verb|to reduce in amount, degree, intensity, etc.; lessen; diminish|http://www.dictionary.com/browse/abate
abbreviate|verb|to shorten (a word or phrase) by omitting letters, substituting shorter forms, etc., so that the shortened form can represent the whole word or phrase, as ft. for foot, ab. for about, R.I. for Rhode Island, NW for Northwest, or Xn for Christian.|http://www.dictionary.com/browse/abbreviate
abide|verb|to remain; continue; stay|http://www.dictionary.com/browse/abide
abnormally|adjective|not normal, average, typical, or usual; deviating from a standard|http://www.dictionary.com/browse/abnormally
abort|verb|to bring forth a fetus from the uterus before the fetus is viable; miscarry.|http://www.dictionary.com/browse/abort
abscond|verb|to depart in a sudden and secret manner, especially to avoid capture and legal prosecution|http://www.dictionary.com/browse/abscond
absentmindedly|adjective|so lost in thought that one does not realize what one is doing, what is happening, etc.; preoccupied to the extent of being unaware of one's immediate surroundings.|http://www.dictionary.com/browse/absentmindedly
absorb|verb|to suck up or drink in (a liquid); soak up|http://www.dictionary.com/browse/absorb
abstain|verb|to hold oneself back voluntarily, especially from something regarded as improper or unhealthy (usually followed by from)|http://www.dictionary.com/browse/abstain
abuse|verb|to use wrongly or improperly; misuse|http://www.dictionary.com/browse/abuse
accede|verb|to give consent, approval, or adherence; agree; assent; to accede to a request; to accede to the terms of a contract.|http://www.dictionary.com/browse/accede
accelerate|verb|to cause faster or greater activity, development, progress, advancement, etc., in|http://www.dictionary.com/browse/accelerate
accentuate|verb|to give emphasis or prominence to.|http://www.dictionary.com/browse/accentuate
accent|noun|prominence of a syllable in terms of differential loudness, or of pitch, or length, or of a combination of these.|http://www.dictionary.com/browse/accent
accept|verb|to take or receive (something offered); receive with approval or favor|http://www.dictionary.com/browse/accept
accidentally|adjective|happening by chance or accident; not planned; unexpected|http://www.dictionary.com/browse/accidentally
accommodate|verb|to do a kindness or a favor to; oblige|http://www.dictionary.com/browse/accommodate
accompany|verb|to go along or in company with; join in action|http://www.dictionary.com/browse/accompany
accost|verb|to confront boldly|http://www.dictionary.com/browse/accost
account|noun|an oral or written description of particular events or situations; narrative|http://www.dictionary.com/browse/account
accuse|verb|to charge with the fault, offense, or crime (usually followed by of)|http://www.dictionary.com/browse/accuse
ache|verb|to have or suffer a continuous, dull pain|http://www.dictionary.com/browse/ache
achiever|verb|to bring to a successful end; carry through; accomplish|http://www.dictionary.com/browse/achiever
achieve|verb|to bring to a successful end; carry through; accomplish|http://www.dictionary.com/browse/achieve
acidly|noun|Chemistry. a compound usually having a sour taste and capable of neutralizing alkalis and reddening blue litmus paper, containing hydrogen that can be replaced by a metal or an electropositive group to form a salt, or containing an atom that can accept a pair of electrons from a base. Acids are proton donors that yield hydronium ions in water solution, or electron-pair acceptors that combine with electron-pair donors or bases.|http://www.dictionary.com/browse/acidly
acknowledge|verb|to admit to be real or true; recognize the existence, truth, or fact of|http://www.dictionary.com/browse/acknowledge
acoustics|noun|Physics. the branch of physics that deals with sound and sound waves.|http://www.dictionary.com/browse/acoustics
acquiesce|verb|to assent tacitly; submit or comply silently or without protest; agree; consent|http://www.dictionary.com/browse/acquiesce
acquire|verb|to come into possession or ownership of; get as one's own|http://www.dictionary.com/browse/acquire
action|noun|the process or state of acting or of being active|http://www.dictionary.com/browse/action
activity|noun|the state or quality of being active|http://www.dictionary.com/browse/activity
actor|noun|a person who acts in stage plays, motion pictures, television broadcasts, etc.|http://www.dictionary.com/browse/actor
actually|adverb|as an actual or existing fact; really.|http://www.dictionary.com/browse/actually
act|noun|anything done, being done, or to be done; deed; performance|http://www.dictionary.com/browse/act
act|noun|anything done, being done, or to be done; deed; performance|http://www.dictionary.com/browse/act
adapt|verb|to make suitable to requirements or conditions; adjust or modify fittingly|http://www.dictionary.com/browse/adapt
addition|noun|the act or process of adding or uniting.|http://www.dictionary.com/browse/addition
address|noun|a speech or written statement, usually formal, directed to a particular group of persons|http://www.dictionary.com/browse/address
add|verb|to unite or join so as to increase the number, quantity, size, or importance|http://www.dictionary.com/browse/add
adhere|verb|to stay attached; stick fast; cleave; cling (usually followed by to)|http://www.dictionary.com/browse/adhere
adjustment|noun|the act of adjusting; adaptation to a particular condition, position, or purpose.|http://www.dictionary.com/browse/adjustment
adjust|verb|to change (something) so that it fits, corresponds, or conforms; adapt; accommodate|http://www.dictionary.com/browse/adjust
administer|verb|to manage (affairs, a government, etc.); have executive charge of|http://www.dictionary.com/browse/administer
admire|verb|to regard with wonder, pleasure, or approval.|http://www.dictionary.com/browse/admire
admit|verb|to allow to enter; grant or afford entrance to|http://www.dictionary.com/browse/admit
admonish|verb|to caution, advise, or counsel against something.|http://www.dictionary.com/browse/admonish
adore|verb|to regard with the utmost esteem, love, and respect; honor.|http://www.dictionary.com/browse/adore
adorn|verb|to decorate or add beauty to, as by ornaments|http://www.dictionary.com/browse/adorn
advance|verb|to move or bring forward|http://www.dictionary.com/browse/advance
adventurously|adjective|inclined or willing to engage in adventures; enjoying adventures.|http://www.dictionary.com/browse/adventurously
advertisement|noun|a paid announcement, as of goods for sale, in newspapers or magazines, on radio or television, etc.|http://www.dictionary.com/browse/advertisement
advertise|verb|to announce or praise (a product, service, etc.) in some public medium of communication in order to induce people to buy or use it|http://www.dictionary.com/browse/advertise
advice|noun|an opinion or recommendation offered as a guide to action, conduct, etc.|http://www.dictionary.com/browse/advice
advise|verb|to give counsel to; offer an opinion or suggestion as worth following|http://www.dictionary.com/browse/advise
advocate|verb|to speak or write in favor of; support or urge by argument; recommend publicly|http://www.dictionary.com/browse/advocate
affirm|verb|to state or assert positively; maintain as true|http://www.dictionary.com/browse/affirm
affix|verb|to fasten, join, or attach (usually followed by to)|http://www.dictionary.com/browse/affix
afk|abbreviation|away from keyboard|http://www.dictionary.com/browse/afk
afraid|adjective|feeling fear; filled with apprehension|http://www.dictionary.com/browse/afraid
aftermath|noun|something that results or follows from an event, especially one of a disastrous or unfortunate nature; consequence|http://www.dictionary.com/browse/aftermath
afternoon|noun|the time from noon until evening.|http://www.dictionary.com/browse/afternoon
afterthought|noun|a later or second thought; reconsideration.|http://www.dictionary.com/browse/afterthought
afterwards|adverb|at a later or subsequent time; subsequently.|http://www.dictionary.com/browse/afterwards
aggravate|verb|to make worse or more severe; intensify, as anything evil, disorderly, or troublesome|http://www.dictionary.com/browse/aggravate
agonize|verb|to suffer extreme pain or anguish; be in agony.|http://www.dictionary.com/browse/agonize
agreement|noun|the act of agreeing or of coming to a mutual arrangement.|http://www.dictionary.com/browse/agreement
agree|verb|to have the same views, emotions, etc.; harmonize in opinion or feeling (often followed by with)|http://www.dictionary.com/browse/agree
aid|verb|to provide support for or relief to; help|http://www.dictionary.com/browse/aid
aim|verb|to position or direct (a firearm, ball, arrow, rocket, etc.) so that, on firing or release, the discharged projectile will hit a target or travel along a certain path.|http://www.dictionary.com/browse/aim
airplane|noun|a heavier-than-air aircraft kept aloft by the upward thrust exerted by the passing air on its fixed wings and driven by propellers, jet propulsion, etc.|http://www.dictionary.com/browse/airplane
airport|noun|a tract of land or water with facilities for the landing, takeoff, shelter, supply, and repair of aircraft, especially one  for receiving or discharging passengers and cargo at regularly scheduled times.|http://www.dictionary.com/browse/airport
air|noun|a mixture of nitrogen, oxygen, and minute amounts of other gases that surrounds the earth and forms its atmosphere.|http://www.dictionary.com/browse/air
air|noun|a mixture of nitrogen, oxygen, and minute amounts of other gases that surrounds the earth and forms its atmosphere.|http://www.dictionary.com/browse/air
alarm|noun|a sudden fear or distressing suspense ca by an awareness of danger; apprehension; fright.|http://www.dictionary.com/browse/alarm
alert|adjective|fully aware and attentive; wide-awake; keen|http://www.dictionary.com/browse/alert
align|verb|to arrange in a straight line; adjust according to a line.|http://www.dictionary.com/browse/align
allege|verb|to assert without proof.|http://www.dictionary.com/browse/allege
alley|noun|a passage, as through a continuous row of houses, permitting access from the street to backyards, garages, etc.|http://www.dictionary.com/browse/alley
allow|verb|to give permission to or for; permit|http://www.dictionary.com/browse/allow
allude|verb|to refer casually or indirectly; make an allusion (usually followed by to)|http://www.dictionary.com/browse/allude
almost|adverb|very nearly; all but|http://www.dictionary.com/browse/almost
alphabetise|verb|to put or arrange in alphabetical order.|http://www.dictionary.com/browse/alphabetise
alphabetize|verb|to put or arrange in alphabetical order.|http://www.dictionary.com/browse/alphabetize
alternate|verb|to interchange repeatedly and regularly with one another in time or place; rotate (usually followed by with)|http://www.dictionary.com/browse/alternate
alter|verb|to make different in some particular, as size, style, course, or the like; modify|http://www.dictionary.com/browse/alter
always|adverb|every time; on every occasion; without exception|http://www.dictionary.com/browse/always
amble|verb|to go at a slow, easy pace; stroll; saunter|http://www.dictionary.com/browse/amble
amend|verb|to alter, modify, rephrase, or add to or subtract from (a motion, bill, constitution, etc.) by formal procedure|http://www.dictionary.com/browse/amend
amount|noun|the sum total of two or more quantities or sums; aggregate.|http://www.dictionary.com/browse/amount
amusement|noun|anything that amuses; pastime; entertainment.|http://www.dictionary.com/browse/amusement
amuse|verb|to hold the attention of (someone) pleasantly; entertain or divert in an enjoyable or cheerful manner|http://www.dictionary.com/browse/amuse
analyse|verb|analyze.|http://www.dictionary.com/browse/analyse
analyze|verb|to separate (a material or abstract entity) into constituent parts or elements; determine the elements or essential features of (opposed to synthesize)|http://www.dictionary.com/browse/analyze
anger|noun|a strong feeling of displeasure and belligerence aro by a wrong; wrath; ire.|http://www.dictionary.com/browse/anger
angrily|adjective|feeling or showing anger or strong resentment (usually followed by at, with, or about)|http://www.dictionary.com/browse/angrily
animal|noun|any member of the kingdom Animalia, comprising multicellular organisms that have a well-defined shape and usually limited growth, can move voluntarily, actively acquire food and digest it internally, and have sensory and nervous systems that allow them to respond rapidly to stimuli|http://www.dictionary.com/browse/animal
animate|verb|to give life to; make alive|http://www.dictionary.com/browse/animate
annotate|verb|to supply with critical or explanatory notes; comment upon in notes|http://www.dictionary.com/browse/annotate
announce|verb|to make known publicly or officially; proclaim; give notice of|http://www.dictionary.com/browse/announce
annoy|verb|to disturb or bother (a person) in a way that displeases, troubles, or slightly irritates.|http://www.dictionary.com/browse/annoy
annually|adjective|of, for, or pertaining to a year; yearly|http://www.dictionary.com/browse/annually
anoint|verb|to rub or sprinkle on; apply an unguent, ointment, or oily liquid to.|http://www.dictionary.com/browse/anoint
answer|noun|a spoken or written reply or response to a question, request, letter, etc.|http://www.dictionary.com/browse/answer
answer|noun|a spoken or written reply or response to a question, request, letter, etc.|http://www.dictionary.com/browse/answer
antagonise|verb|to make hostile or unfriendly; make an enemy or antagonist of|http://www.dictionary.com/browse/antagonise
antagonize|verb|to make hostile or unfriendly; make an enemy or antagonist of|http://www.dictionary.com/browse/antagonize
anticipate|verb|to realize beforehand; foretaste or foresee|http://www.dictionary.com/browse/anticipate
ants|noun|any of numerous black, red, brown, or yellow social insects of the family Formicidae, of worldwide distribution especially in warm climates, having a large head with inner jaws for chewing and outer jaws for carrying and digging, and living in highly organized colonies containing wingless female workers, a winged queen, and, during breeding seasons, winged males, some species being noted for engaging in warfare, slavemaking, or the cultivation of food sources.|http://www.dictionary.com/browse/ants
ant|noun|any of numerous black, red, brown, or yellow social insects of the family Formicidae, of worldwide distribution especially in warm climates, having a large head with inner jaws for chewing and outer jaws for carrying and digging, and living in highly organized colonies containing wingless female workers, a winged queen, and, during breeding seasons, winged males, some species being noted for engaging in warfare, slavemaking, or the cultivation of food sources.|http://www.dictionary.com/browse/ant
anxiously|adjective|full of mental distress or uneasiness because of fear of danger or misfortune; greatly worried; solicitous|http://www.dictionary.com/browse/anxiously
apologise|verb|to offer an apology or excuse for some fault, insult, failure, or injury|http://www.dictionary.com/browse/apologise
apologize|verb|to offer an apology or excuse for some fault, insult, failure, or injury|http://www.dictionary.com/browse/apologize
apparatus|noun|a group or combination of instruments, machinery, tools, materials, etc., having a particular function or intended for a specific use|http://www.dictionary.com/browse/apparatus
apparel|noun|clothing, especially outerwear; garments; attire; raiment.|http://www.dictionary.com/browse/apparel
appeal|noun|an earnest request for aid, support, sympathy, mercy, etc.; entreaty; petition; plea.|http://www.dictionary.com/browse/appeal
appear|verb|to come into sight; become visible|http://www.dictionary.com/browse/appear
appease|verb|to bring to a state of peace, quiet, ease, calm, or contentment; pacify; soothe|http://www.dictionary.com/browse/appease
applaud|verb|to clap the hands as an expression of approval, appreciation, acclamation, etc.|http://www.dictionary.com/browse/applaud
apples|adjective|well or fine; under control.|http://www.dictionary.com/browse/apples
apple|noun|the usually round, red or yellow, edible fruit of a small tree, Malus sylvestris, of the rose family.|http://www.dictionary.com/browse/apple
appliance|noun|an instrument, apparatus, or device for a particular purpose or use.|http://www.dictionary.com/browse/appliance
apply|verb|to make use of as relevant, suitable, or pertinent|http://www.dictionary.com/browse/apply
appraise|verb|to estimate the monetary value of; determine the worth of; assess|http://www.dictionary.com/browse/appraise
appreciate|verb|to be grateful or thankful for|http://www.dictionary.com/browse/appreciate
approach|verb|to come near or nearer to|http://www.dictionary.com/browse/approach
appropriate|adjective|suitable or fitting for a particular purpose, person, occasion, etc.|http://www.dictionary.com/browse/appropriate
approval|noun|the act of approving; approbation.|http://www.dictionary.com/browse/approval
approve|verb|to speak or think favorably of; pronounce or consider agreeable or good; judge favorably|http://www.dictionary.com/browse/approve
arch|noun|Architecture. a curved masonry construction for spanning an opening, consisting of a number of wedgelike stones, bricks, or the like, set with the narrower side toward the opening in such a way that forces on the arch are transmitted as vertical or oblique stresses on either side of the opening.|http://www.dictionary.com/browse/arch
arch|noun|Architecture. having a curved head; an archway. the curved head of an opening, as a doorway.|http://www.dictionary.com/browse/arch
arc|noun|Geometry. any unbroken part of the circumference of a circle or other curved line.|http://www.dictionary.com/browse/arc
argue|verb|to present reasons for or against a thing|http://www.dictionary.com/browse/argue
argument|noun|an oral disagreement; verbal opposition; contention; altercation|http://www.dictionary.com/browse/argument
arise|verb|to get up from sitting, lying, or kneeling; rise|http://www.dictionary.com/browse/arise
arithmetic|noun|the method or process of computation with figures|http://www.dictionary.com/browse/arithmetic
army|noun|the military forces of a nation, exclusive of the navy and in some countries the air force.|http://www.dictionary.com/browse/army
arm|noun|the upper limb of the human body, especially the part extending from the shoulder to the wrist.|http://www.dictionary.com/browse/arm
arrange|verb|to place in proper, desired, or convenient order; adjust properly|http://www.dictionary.com/browse/arrange
arrest|verb|to seize (a person) by legal authority or warrant; take into custody|http://www.dictionary.com/browse/arrest
arrogantly|adjective|making claims or pretensions to superior importance or rights; overbearingly assuming; insolently proud|http://www.dictionary.com/browse/arrogantly
articulate|adjective|uttered clearly in distinct syllables.|http://www.dictionary.com/browse/articulate
art|noun|the quality, production, expression, or realm, according to aesthetic principles, of what is beautiful, appealing, or of more than ordinary significance.|http://www.dictionary.com/browse/art
ascend|verb|to move, climb, or go upward; mount; rise|http://www.dictionary.com/browse/ascend
ascertain|verb|to find out definitely; learn with certainty or assurance; determine|http://www.dictionary.com/browse/ascertain
ask|verb|to put a question to; inquire of|http://www.dictionary.com/browse/ask
assail|verb|to attack vigorously or violently; assault.|http://www.dictionary.com/browse/assail
assault|noun|a sudden, violent attack; onslaught|http://www.dictionary.com/browse/assault
assay|verb|to examine or analyze|http://www.dictionary.com/browse/assay
assent|verb|to agree or concur; subscribe to (often followed by to)|http://www.dictionary.com/browse/assent
assert|verb|to state with assurance, confidence, or force; state strongly or positively; affirm; aver|http://www.dictionary.com/browse/assert
assess|verb|to estimate officially the value of (property, income, etc.) as a basis for taxation.|http://www.dictionary.com/browse/assess
assign|verb|to give or allocate; allot|http://www.dictionary.com/browse/assign
assist|verb|to give support or aid to; help|http://www.dictionary.com/browse/assist
assume|verb|to take for granted or without proof|http://www.dictionary.com/browse/assume
assure|verb|to declare earnestly to; inform or tell positively; state with confidence to|http://www.dictionary.com/browse/assure
astonish|verb|to fill with sudden and overpowering surprise or wonder; amaze|http://www.dictionary.com/browse/astonish
attach|verb|to fasten or affix; join; connect|http://www.dictionary.com/browse/attach
attack|verb|to set upon in a forceful, violent, hostile, or aggressive way, with or without a weapon; begin fighting with|http://www.dictionary.com/browse/attack
attack|verb|to set upon in a forceful, violent, hostile, or aggressive way, with or without a weapon; begin fighting with|http://www.dictionary.com/browse/attack
attempt|verb|to make an effort at; try; undertake; seek|http://www.dictionary.com/browse/attempt
attempt|verb|to make an effort at; try; undertake; seek|http://www.dictionary.com/browse/attempt
attend|verb|to be present at|http://www.dictionary.com/browse/attend
attention|noun|the act or faculty of attending, especially by directing the mind to an object.|http://www.dictionary.com/browse/attention
attraction|noun|the act, power, or property of attracting.|http://www.dictionary.com/browse/attraction
audit|noun|an official examination and verification of accounts and records, especially of financial accounts.|http://www.dictionary.com/browse/audit
aunt|noun|the sister of one's father or mother.|http://www.dictionary.com/browse/aunt
authorise|verb|to give authority or official power to; empower|http://www.dictionary.com/browse/authorise
authority|noun|the power to determine, adjudicate, or otherwise settle issues or disputes; jurisdiction; the right to control, command, or determine.|http://www.dictionary.com/browse/authority
authorize|verb|to give authority or official power to; empower|http://www.dictionary.com/browse/authorize
avert|verb|to turn away or aside|http://www.dictionary.com/browse/avert
aver|verb|to assert or affirm with confidence; declare in a positive or peremptory manner.|http://www.dictionary.com/browse/aver
avoid|verb|to keep away from; keep clear of; shun|http://www.dictionary.com/browse/avoid
avow|verb|to declare frankly or openly; own; acknowledge; confess; admit|http://www.dictionary.com/browse/avow
await|verb|to wait for; expect; look for|http://www.dictionary.com/browse/await
awaken|verb|to awake; waken.|http://www.dictionary.com/browse/awaken
awkwardly|adjective|lacking skill or dexterity.Synonyms|http://www.dictionary.com/browse/awkwardly
babble|verb|to utter sounds or words imperfectly, indistinctly, or without meaning.|http://www.dictionary.com/browse/babble
babies|noun|an infant or very young child.|http://www.dictionary.com/browse/babies
baby|noun|an infant or very young child.|http://www.dictionary.com/browse/baby
backhand|noun|a stroke, slap, etc., made with the palm of the hand turned toward the body and the back of the hand turned in the direction of the stroke, slap, etc.|http://www.dictionary.com/browse/backhand
backpedal|verb|to retard the forward motion by pressing backward on the pedal, especially of a bicycle with coaster brakes.|http://www.dictionary.com/browse/backpedal
backtrack|verb|to return over the same course or route.|http://www.dictionary.com/browse/backtrack
back|noun|the rear part of the human body, extending from the neck to the lower end of the spine.|http://www.dictionary.com/browse/back
badger|noun|any of various burrowing, carnivorous mammals of the family Mustelidae, as Taxidea taxus, of North America, and Meles meles, of Europe and Asia.|http://www.dictionary.com/browse/badger
badge|noun|a special or distinctive mark, token, or device worn as a sign of allegiance, membership, authority, achievement, etc.|http://www.dictionary.com/browse/badge
badly|adverb|in a defective, incorrect, or undesirable way|http://www.dictionary.com/browse/badly
badmouth|verb|Slang. to speak critically and often disloyally of; disparage|http://www.dictionary.com/browse/badmouth
baffle|verb|to confuse, bewilder, or perplex|http://www.dictionary.com/browse/baffle
bag|noun|a container or receptacle of leather, plastic, cloth, paper, etc., capable of being closed at the mouth; pouch.|http://www.dictionary.com/browse/bag
bait|noun|food, or some substitute,  as a lure in fishing, trapping, etc.|http://www.dictionary.com/browse/bait
bait|noun|food, or some substitute,  as a lure in fishing, trapping, etc.|http://www.dictionary.com/browse/bait
bake|verb|to cook by dry heat in an oven or on heated metal or stones.|http://www.dictionary.com/browse/bake
balance|noun|a state of equilibrium or equipoise; equal distribution of weight, amount, etc.|http://www.dictionary.com/browse/balance
balance|noun|a state of equilibrium or equipoise; equal distribution of weight, amount, etc.|http://www.dictionary.com/browse/balance
balloon|noun|a bag made of thin rubber or other light material, usually brightly colored, inflated with air or with some lighter-than-air gas and  as a children's plaything or as a decoration.|http://www.dictionary.com/browse/balloon
balls|noun|a spherical or approximately spherical body or shape; sphere|http://www.dictionary.com/browse/balls
ball|noun|a spherical or approximately spherical body or shape; sphere|http://www.dictionary.com/browse/ball
ball|noun|a spherical or approximately spherical body or shape; sphere|http://www.dictionary.com/browse/ball
banana|noun|a tropical plant of the genus Musa, certain species of which are cultivated for their nutritious fruit.|http://www.dictionary.com/browse/banana
band|noun|a company of persons or, sometimes, animals or things, joined, acting, or functioning together; aggregation; party; troop|http://www.dictionary.com/browse/band
bang|noun|a loud, sudden, explosive noise, as the discharge of a gun.|http://www.dictionary.com/browse/bang
banish|verb|to expel from or relegate to a country or place by authoritative decree; condemn to exile|http://www.dictionary.com/browse/banish
banter|noun|an exchange of light, playful, teasing remarks; good-natured raillery.|http://www.dictionary.com/browse/banter
bare|adjective|without covering or clothing; naked; nude|http://www.dictionary.com/browse/bare
bargain|noun|an advantageous purchase, especially one acquired at less than the usual cost|http://www.dictionary.com/browse/bargain
barge|noun|a capacious, flat-bottomed vessel, usually intended to be pushed or towed, for transporting freight or passengers; lighter.|http://www.dictionary.com/browse/barge
bark|noun|the abrupt, harsh, explosive cry of a dog.|http://www.dictionary.com/browse/bark
barrage|noun|Military. a heavy barrier of artillery fire to protect one's own advancing or retreating troops or to stop the advance of enemy troops.|http://www.dictionary.com/browse/barrage
barter|verb|to trade by exchange of commodities rather than by the use of money.|http://www.dictionary.com/browse/barter
baseball|noun|a game of ball between two nine-player teams played usually for nine innings on a field that has as a focal point a diamond-shaped infield with a home plate and three other bases, 90 feet (27 meters) apart, forming a circuit that must be completed by a base runner in order to score, the central offensive action entailing hitting of a pitched ball with a wooden or metal bat and running of the bases, the winner being the team scoring the most runs.|http://www.dictionary.com/browse/baseball
base|noun|the bottom support of anything; that on which a thing stands or rests|http://www.dictionary.com/browse/base
bashfully|adjective|uncomfortably diffident and easily embarrassed; shy; timid.|http://www.dictionary.com/browse/bashfully
bash|verb|to strike with a crushing or smashing blow.|http://www.dictionary.com/browse/bash
basin|noun|a circular container with a greater width than depth, becoming smaller toward the bottom,  chiefly to hold water or other liquid, especially for washing.|http://www.dictionary.com/browse/basin
basketball|noun|a game played by two teams of usually five players each on a rectangular court having a raised basket or goal at each end, points being scored by tossing the ball through the opponent's basket.|http://www.dictionary.com/browse/basketball
basket|noun|a container made of twigs, rushes, thin strips of wood, or other flexible material woven together.|http://www.dictionary.com/browse/basket
bask|verb|to lie in or be exposed to a pleasant warmth|http://www.dictionary.com/browse/bask
bathe|verb|to immerse (all or part of the body) in water or some other liquid, for cleansing, refreshment, etc.|http://www.dictionary.com/browse/bathe
bath|noun|a washing or immersion of something, especially the body, in water, steam, etc., as for cleansing or medical treatment|http://www.dictionary.com/browse/bath
battle|noun|a hostile encounter or engagement between opposing military forces|http://www.dictionary.com/browse/battle
bat|noun|Sports. the wooden club  in certain games, as baseball and cricket, to strike the ball.|http://www.dictionary.com/browse/bat
bat|noun|Sports. the wooden club  in certain games, as baseball and cricket, to strike the ball.|http://www.dictionary.com/browse/bat
bawl|verb|to cry or wail lustily.|http://www.dictionary.com/browse/bawl
bay|noun|a body of water forming an indentation of the shoreline, larger than a cove but smaller than a gulf.|http://www.dictionary.com/browse/bay
bead|noun|a small, usually round object of glass, wood, stone, or the like with a hole through it, often strung with others of its kind in necklaces, rosaries, etc.|http://www.dictionary.com/browse/bead
beam|noun|any of various relatively long pieces of metal, wood, stone, etc., manufactured or shaped especially for use as rigid members or parts of structures or machines.|http://www.dictionary.com/browse/beam
beam|noun|any of various relatively long pieces of metal, wood, stone, etc., manufactured or shaped especially for use as rigid members or parts of structures or machines.|http://www.dictionary.com/browse/beam
bean|noun|the edible nutritious seed of various plants of the legume family, especially of the genus Phaseolus.|http://www.dictionary.com/browse/bean
bears|verb|to hold up; support|http://www.dictionary.com/browse/bears
bear|verb|to hold up; support|http://www.dictionary.com/browse/bear
bear|verb|to hold up; support|http://www.dictionary.com/browse/bear
beast|noun|any nonhuman animal, especially a large, four-footed mammal.|http://www.dictionary.com/browse/beast
beat|verb|to strike violently or forcefully and repeatedly.|http://www.dictionary.com/browse/beat
beautifully|adjective|having beauty; possessing qualities that give great pleasure or satisfaction to see, hear, think about, etc.; delighting the senses or mind|http://www.dictionary.com/browse/beautifully
beautify|verb|to make or become beautiful.|http://www.dictionary.com/browse/beautify
beckon|verb|to signal, summon, or direct by a gesture of the head or hand.|http://www.dictionary.com/browse/beckon
become|verb|to come, change, or grow to be (as specified)|http://www.dictionary.com/browse/become
bedroom|noun|a room furnished and  for sleeping.|http://www.dictionary.com/browse/bedroom
beds|noun|Bedfordshire.|http://www.dictionary.com/browse/beds
bed|noun|a piece of furniture upon which or within which a person sleeps, rests, or stays when not well.|http://www.dictionary.com/browse/bed
beef|noun|the flesh of a cow, steer, or bull raised and killed for its meat.|http://www.dictionary.com/browse/beef
beetle|noun|any of numerous insects of the order Coleoptera, characterized by hard, horny forewings that cover and protect the membranous flight wings.|http://www.dictionary.com/browse/beetle
bee|noun|any hymenopterous insect of the superfamily Apoidea, including social and solitary species of several families, as the bumblebees, honeybees, etc.|http://www.dictionary.com/browse/bee
befall|verb|to happen or occur.|http://www.dictionary.com/browse/befall
beggar|noun|a person who begs alms or lives by begging.|http://www.dictionary.com/browse/beggar
beginner|noun|a person or thing that begins.|http://www.dictionary.com/browse/beginner
begin|verb|to proceed to perform the first or earliest part of some action; commence; start|http://www.dictionary.com/browse/begin
beg|verb|to ask for as a gift, as charity, or as a favor|http://www.dictionary.com/browse/beg
behave|verb|to act in a particular way; conduct or comport oneself or itself|http://www.dictionary.com/browse/behave
behavior|noun|manner of behaving or acting.|http://www.dictionary.com/browse/behavior
behold|verb|to observe; look at; see.|http://www.dictionary.com/browse/behold
belch|verb|to eject gas spasmodically and noisily from the stomach through the mouth; eruct.|http://www.dictionary.com/browse/belch
belief|noun|something believed; an opinion or conviction|http://www.dictionary.com/browse/belief
believe|verb|to have confidence in the truth, the existence, or the reliability of something, although without absolute proof that one is right in doing so|http://www.dictionary.com/browse/believe
believe|verb|to have confidence in the truth, the existence, or the reliability of something, although without absolute proof that one is right in doing so|http://www.dictionary.com/browse/believe
belittle|verb|to regard or portray as less impressive or important than appearances indicate; depreciate; disparage.|http://www.dictionary.com/browse/belittle
bellow|verb|to emit a hollow, loud, animal cry, as a bull or cow.|http://www.dictionary.com/browse/bellow
bell|noun|a hollow instrument of cast metal, typically cup-shaped with a flaring mouth, suspended from the vertex and rung by the strokes of a clapper, hammer, or the like.|http://www.dictionary.com/browse/bell
bemoan|verb|to express distress or grief over; lament|http://www.dictionary.com/browse/bemoan
bend|verb|to force (an object, especially a long or thin one) from a straight form into a curved or angular one, or from a curved or angular form into some different form|http://www.dictionary.com/browse/bend
berate|verb|to scold; rebuke|http://www.dictionary.com/browse/berate
berry|noun|any small, usually stoneless, juicy fruit, irrespective of botanical structure, as the huckleberry, strawberry, or hackberry.|http://www.dictionary.com/browse/berry
beseech|verb|to implore urgently|http://www.dictionary.com/browse/beseech
bestow|verb|to present as a gift; give; confer (usually followed by on or upon)|http://www.dictionary.com/browse/bestow
betray|verb|to deliver or expose to an enemy by treachery or disloyalty|http://www.dictionary.com/browse/betray
bet|verb|to wager with (something or someone).|http://www.dictionary.com/browse/bet
bicker|verb|to engage in petulant or peevish argument; wrangle|http://www.dictionary.com/browse/bicker
bid|verb|to command; order; direct|http://www.dictionary.com/browse/bid
bikes|noun|Informal. a bicycle. a motorbike. a motorcycle.|http://www.dictionary.com/browse/bikes
bike|noun|Informal. a bicycle. a motorbike. a motorcycle.|http://www.dictionary.com/browse/bike
bind|verb|to fasten or secure with a band or bond.|http://www.dictionary.com/browse/bind
birds|noun|any warm-blooded vertebrate of the class Aves, having a body covered with feathers, forelimbs modified into wings, scaly legs, a beak, and no teeth, and bearing young in a hard-shelled egg.|http://www.dictionary.com/browse/birds
bird|noun|any warm-blooded vertebrate of the class Aves, having a body covered with feathers, forelimbs modified into wings, scaly legs, a beak, and no teeth, and bearing young in a hard-shelled egg.|http://www.dictionary.com/browse/bird
birthday|noun|the anniversary of a birth.|http://www.dictionary.com/browse/birthday
birth|noun|an act or instance of being born|http://www.dictionary.com/browse/birth
bite|verb|to cut, wound, or tear with the teeth|http://www.dictionary.com/browse/bite
bite|verb|to cut, wound, or tear with the teeth|http://www.dictionary.com/browse/bite
bitterly|adjective|having a harsh, disagreeably acrid taste, like that of aspirin, quinine, wormwood, or aloes.|http://www.dictionary.com/browse/bitterly
bit|noun|Machinery. a removable boring head  on certain kinds of drills, as a rock drill. a device for drilling oil wells or the like, consisting of a horizontally rotating blade or an assembly of rotating toothed wheels.|http://www.dictionary.com/browse/bit
blade|noun|the flat cutting part of a sword, knife, etc.|http://www.dictionary.com/browse/blade
blame|verb|to hold responsible; find fault with; censure|http://www.dictionary.com/browse/blame
blanch|verb|to whiten by removing color; bleach|http://www.dictionary.com/browse/blanch
blare|verb|to emit a loud, raucous sound|http://www.dictionary.com/browse/blare
blaspheme|verb|to speak impiously or irreverently of (God or sacred things).|http://www.dictionary.com/browse/blaspheme
blather|noun|foolish, voluble talk|http://www.dictionary.com/browse/blather
blat|verb|bleat.|http://www.dictionary.com/browse/blat
bleakly|adjective|bare, desolate, and often windswept|http://www.dictionary.com/browse/bleakly
bleat|verb|to utter the cry of a sheep, goat, or calf or a sound resembling such a cry.|http://www.dictionary.com/browse/bleat
bleed|verb|to lose blood from the vascular system, either internally into the body or externally through a natural orifice or break in the skin|http://www.dictionary.com/browse/bleed
blend|verb|to mix smoothly and inseparably together|http://www.dictionary.com/browse/blend
bless|verb|to consecrate or sanctify by a religious rite; make or pronounce holy.|http://www.dictionary.com/browse/bless
blindly|adverb|in a blind manner|http://www.dictionary.com/browse/blindly
blind|adjective|unable to see; lacking the sense of sight; sightless|http://www.dictionary.com/browse/blind
blink|verb|to open and close the eye, especially involuntarily; wink rapidly and repeatedly.|http://www.dictionary.com/browse/blink
blissfully|adjective|full of, abounding in, enjoying, or conferring bliss.|http://www.dictionary.com/browse/blissfully
block|noun|a solid mass of wood, stone, etc., usually with one or more flat or approximately flat faces.|http://www.dictionary.com/browse/block
blood|noun|the fluid that circulates in the principal vascular system of human beings and other vertebrates, in humans consisting of plasma in which the red blood cells, white blood cells, and platelets are suspended.|http://www.dictionary.com/browse/blood
blossom|noun|the flower of a plant, especially of one producing an edible fruit.|http://www.dictionary.com/browse/blossom
blot|noun|a spot or stain, especially of ink on paper.|http://www.dictionary.com/browse/blot
blow|noun|a sudden, hard stroke with a hand, fist, or weapon|http://www.dictionary.com/browse/blow
blow|noun|a sudden, hard stroke with a hand, fist, or weapon|http://www.dictionary.com/browse/blow
blubber|noun|Zoology. the fat layer between the skin and muscle of whales and other cetaceans, from which oil is made.|http://www.dictionary.com/browse/blubber
bludgeon|noun|a short, heavy club with one end weighted, or thicker and heavier than the other.|http://www.dictionary.com/browse/bludgeon
bluff|adjective|good-naturedly direct, blunt, or frank; heartily outspoken|http://www.dictionary.com/browse/bluff
blunder|noun|a gross, stupid, or careless mistake|http://www.dictionary.com/browse/blunder
blurt|verb|to utter suddenly or inadvertently; divulge impulsively or unadvisedly (usually followed by out)|http://www.dictionary.com/browse/blurt
blush|verb|to redden, as from embarrassment or shame|http://www.dictionary.com/browse/blush
bluster|verb|to roar and be tumultuous, as wind.|http://www.dictionary.com/browse/bluster
board|noun|a piece of wood sawed thin, and of considerable length and breadth compared with the thickness.|http://www.dictionary.com/browse/board
boastfully|adjective|given to or characterized by boasting.|http://www.dictionary.com/browse/boastfully
boast|verb|to speak with exaggeration and excessive pride, especially about oneself.|http://www.dictionary.com/browse/boast
boats|noun|a vessel for transport by water, constructed to provide buoyancy by excluding water and shaped to give stability and permit propulsion.|http://www.dictionary.com/browse/boats
boat|noun|a vessel for transport by water, constructed to provide buoyancy by excluding water and shaped to give stability and permit propulsion.|http://www.dictionary.com/browse/boat
bob|noun|a short, jerky motion|http://www.dictionary.com/browse/bob
body|noun|the physical structure and material substance of an animal or plant, living or dead.|http://www.dictionary.com/browse/body
boggle|verb|to overwhelm or bewilder, as with the magnitude, complexity, or abnormality of|http://www.dictionary.com/browse/boggle
boldly|adjective|not hesitating or fearful in the face of actual or possible danger or rebuff; courageous and daring|http://www.dictionary.com/browse/boldly
bolster|noun|a long, often cylindrical, cushion or pillow for a bed, sofa, etc.|http://www.dictionary.com/browse/bolster
bolt|noun|a movable bar or rod that when slid into a socket fastens a door, gate, etc.|http://www.dictionary.com/browse/bolt
bomb|noun|Military. a projectile, formerly usually spherical, filled with a bursting charge and exploded by means of a fuze, by impact, or otherwise, now generally designed to be dropped from an aircraft.|http://www.dictionary.com/browse/bomb
bond|noun|something that binds, fastens, confines, or holds together.|http://www.dictionary.com/browse/bond
bone|noun|Anatomy, Zoology. one of the structures composing the skeleton of a vertebrate. the hard connective tissue forming the substance of the skeleton of most vertebrates, composed of a collagen-rich organic matrix impregnated with calcium, phosphate, and other minerals.|http://www.dictionary.com/browse/bone
bonk|verb|to hit, strike, collide, etc.|http://www.dictionary.com/browse/bonk
books|noun|a handwritten or printed work of fiction or nonfiction, usually on sheets of paper fastened or bound together within covers.|http://www.dictionary.com/browse/books
book|noun|a handwritten or printed work of fiction or nonfiction, usually on sheets of paper fastened or bound together within covers.|http://www.dictionary.com/browse/book
boom|verb|to make a deep, prolonged, resonant sound.|http://www.dictionary.com/browse/boom
boot|noun|a covering of leather, rubber, or the like, for the foot and all or part of the leg.|http://www.dictionary.com/browse/boot
boo|interjection|( to express contempt or disapprobation or to startle or frighten).|http://www.dictionary.com/browse/boo
border|noun|the part or edge of a surface or area that forms its outer boundary.|http://www.dictionary.com/browse/border
bore|verb|to weary by dullness, tedious repetition, unwelcome attentions, etc.|http://www.dictionary.com/browse/bore
boss|noun|a person who employs or superintends workers; manager.|http://www.dictionary.com/browse/boss
bottle|noun|a portable container for holding liquids, characteristically having a neck and mouth and made of glass or plastic.|http://www.dictionary.com/browse/bottle
bounce|verb|to spring back from a surface in a lively manner|http://www.dictionary.com/browse/bounce
boundary|noun|something that indicates bounds or limits; a limiting or bounding line.|http://www.dictionary.com/browse/boundary
bound|verb|simple past tense and past participle of bind.|http://www.dictionary.com/browse/bound
bow|verb|to bend the knee or body or incline the head, as in reverence, submission, salutation, recognition, or acknowledgment.|http://www.dictionary.com/browse/bow
box|noun|a container, case, or receptacle, usually rectangular, of wood, metal, cardboard, etc., and often with a lid or removable cover.|http://www.dictionary.com/browse/box
box|noun|a container, case, or receptacle, usually rectangular, of wood, metal, cardboard, etc., and often with a lid or removable cover.|http://www.dictionary.com/browse/box
boys|noun|a male child, from birth to full growth, especially one less than 18 years of age.|http://www.dictionary.com/browse/boys
boy|noun|a male child, from birth to full growth, especially one less than 18 years of age.|http://www.dictionary.com/browse/boy
brace|noun|something that holds parts together or in place, as a clasp or clamp.|http://www.dictionary.com/browse/brace
brag|verb|to use boastful language; boast|http://www.dictionary.com/browse/brag
braid|verb|to weave together strips or strands of; plait|http://www.dictionary.com/browse/braid
brain|noun|Anatomy, Zoology. the part of the central nervous system enclosed in the cranium of humans and other vertebrates, consisting of a soft, convoluted mass of gray and white matter and serving to control and coordinate the mental and physical actions.|http://www.dictionary.com/browse/brain
brake|noun|a device for slowing or stopping a vehicle or other moving mechanism by the absorption or transfer of the energy of momentum, usually by means of friction.|http://www.dictionary.com/browse/brake
branch|noun|a division or subdivision of the stem or axis of a tree, shrub, or other plant.|http://www.dictionary.com/browse/branch
brandish|verb|to shake or wave, as a weapon; flourish|http://www.dictionary.com/browse/brandish
brass|noun|any of various metal alloys consisting mainly of copper and zinc.|http://www.dictionary.com/browse/brass
bravely|adjective|possessing or exhibiting courage or courageous endurance.|http://www.dictionary.com/browse/bravely
brawl|noun|a noisy quarrel, squabble, or fight.|http://www.dictionary.com/browse/brawl
bray|noun|the loud, harsh cry of a donkey.|http://www.dictionary.com/browse/bray
bread|noun|a kind of food made of flour or meal that has been mixed with milk or water, made into a dough or batter, with or without yeast or other leavening agent, and baked.|http://www.dictionary.com/browse/bread
breakfast|noun|the first meal of the day; morning meal|http://www.dictionary.com/browse/breakfast
break|verb|to smash, split, or divide into parts violently; reduce to pieces or fragments|http://www.dictionary.com/browse/break
breathe|verb|to take air, oxygen, etc., into the lungs and expel it; inhale and exhale; respire.|http://www.dictionary.com/browse/breathe
breath|noun|the air inhaled and exhaled in respiration.|http://www.dictionary.com/browse/breath
breed|verb|to produce (offspring); procreate; engender.|http://www.dictionary.com/browse/breed
bribe|noun|money or any other valuable consideration given or promised with a view to corrupting the behavior of a person, especially in that person's performance as an athlete, public official, etc.|http://www.dictionary.com/browse/bribe
brick|noun|a block of clay hardened by drying in the sun or burning in a kiln, and  for building, paving, etc.|http://www.dictionary.com/browse/brick
bridge|noun|a structure spanning and providing passage over a river, chasm, road, or the like.|http://www.dictionary.com/browse/bridge
bridle|noun|part of the tack or harness of a horse, consisting usually of a headstall, bit, and reins.|http://www.dictionary.com/browse/bridle
briefly|adverb|for a short duration|http://www.dictionary.com/browse/briefly
brighten|verb|to become or make bright or brighter.|http://www.dictionary.com/browse/brighten
brightly|adjective|radiating or reflecting light; luminous; shining|http://www.dictionary.com/browse/brightly
bring|verb|to carry, convey, conduct, or cause (someone or something) to come with, to, or toward the speaker|http://www.dictionary.com/browse/bring
briskly|adjective|quick and active; lively|http://www.dictionary.com/browse/briskly
bristle|noun|one of the short, stiff, coarse hairs of certain animals, especially hogs,  extensively in making brushes.|http://www.dictionary.com/browse/bristle
broach|noun|Machinery. an elongated, tapered, serrated cutting tool for shaping and enlarging holes.|http://www.dictionary.com/browse/broach
broadcast|verb|to transmit (programs) from a radio or television station.|http://www.dictionary.com/browse/broadcast
broaden|verb|to become or make broad.|http://www.dictionary.com/browse/broaden
broadly|adjective|of great breadth|http://www.dictionary.com/browse/broadly
brood|noun|a number of young produced or hatched at one time; a family of offspring or young.|http://www.dictionary.com/browse/brood
brothers|noun|a male offspring having both parents in common with another offspring; a male sibling.|http://www.dictionary.com/browse/brothers
brother|noun|a male offspring having both parents in common with another offspring; a male sibling.|http://www.dictionary.com/browse/brother
browbeat|verb|to intimidate by overbearing looks or words; bully|http://www.dictionary.com/browse/browbeat
browse|verb|to eat, nibble at, or feed on (leaves, tender shoots, or other soft vegetation).|http://www.dictionary.com/browse/browse
brush|noun|an implement consisting of bristles, hair, or the like, set in or attached to a handle,  for painting, cleaning, polishing, grooming, etc.|http://www.dictionary.com/browse/brush
brush|noun|an implement consisting of bristles, hair, or the like, set in or attached to a handle,  for painting, cleaning, polishing, grooming, etc.|http://www.dictionary.com/browse/brush
bubble|noun|a nearly spherical body of gas contained in a liquid.|http://www.dictionary.com/browse/bubble
bucket|noun|a deep, cylindrical vessel, usually of metal, plastic, or wood, with a flat bottom and a semicircular bail, for collecting, carrying, or holding water, sand, fruit, etc.; pail.|http://www.dictionary.com/browse/bucket
buckle|noun|a clasp consisting of a rectangular or curved rim with one or more movable tongues, fixed to one end of a belt or strap,  for fastening to the other end of the same strap or to another strap.|http://www.dictionary.com/browse/buckle
buck|noun|the male of the deer, antelope, rabbit, hare, sheep, or goat.|http://www.dictionary.com/browse/buck
buffet|noun|a blow, as with the hand or fist.|http://www.dictionary.com/browse/buffet
buff|noun|a soft, thick, light-yellow leather with a napped surface, originally made from buffalo skin but later also from other skins,  for making belts, pouches, etc.|http://www.dictionary.com/browse/buff
bug|noun|Also called true bug, hemipteran, hemipteron. a hemipterous insect.|http://www.dictionary.com/browse/bug
building|noun|a relatively permanent enclosed construction over a plot of land, having a roof and usually windows and often more than one level,  for any of a wide variety of activities, as living, entertaining, or manufacturing.|http://www.dictionary.com/browse/building
build|verb|to construct (especially something complex) by assembling and joining parts or materials|http://www.dictionary.com/browse/build
bulb|noun|Botany. a usually subterranean and often globular bud having fleshy leaves emergent at the top and a stem reduced to a flat disk, rooting from the underside, as in the onion and lily.|http://www.dictionary.com/browse/bulb
bulge|noun|a rounded projection, bend, or protruding part; protuberance; hump|http://www.dictionary.com/browse/bulge
bully|noun|a blustering, quarrelsome, overbearing person who habitually badgers and intimidates smaller or weaker people.|http://www.dictionary.com/browse/bully
bumble|verb|to bungle or blunder awkwardly; muddle|http://www.dictionary.com/browse/bumble
bump|verb|to come more or less violently in contact with; collide with; strike|http://www.dictionary.com/browse/bump
bunch|noun|a connected group; cluster|http://www.dictionary.com/browse/bunch
bundle|noun|several objects or a quantity of material gathered or bound together|http://www.dictionary.com/browse/bundle
bun|noun|any of a wide variety of variously shaped bread rolls, usually leavened and slightly sweetened or plain, sometimes containing spices, dried currants, etc.|http://www.dictionary.com/browse/bun
burble|verb|to make a bubbling sound; bubble.|http://www.dictionary.com/browse/burble
burn|verb|to undergo rapid combustion or consume fuel in such a way as to give off heat, gases, and, usually, light; be on fire|http://www.dictionary.com/browse/burn
burn|verb|to undergo rapid combustion or consume fuel in such a way as to give off heat, gases, and, usually, light; be on fire|http://www.dictionary.com/browse/burn
burp|noun|a belch; eructation.|http://www.dictionary.com/browse/burp
burrow|noun|a hole or tunnel in the ground made by a rabbit, fox, or similar animal for habitation and refuge.|http://www.dictionary.com/browse/burrow
burst|verb|to break, break open, or fly apart with sudden violence|http://www.dictionary.com/browse/burst
burst|verb|to break, break open, or fly apart with sudden violence|http://www.dictionary.com/browse/burst
bury|verb|to put in the ground and cover with earth|http://www.dictionary.com/browse/bury
bushes|noun|a low plant with many branches that arise from or near the ground.|http://www.dictionary.com/browse/bushes
busily|adverb|in a busy manner; actively.|http://www.dictionary.com/browse/busily
business|noun|an occupation, profession, or trade|http://www.dictionary.com/browse/business
buss|noun, verb|kiss.|http://www.dictionary.com/browse/buss
bustle|verb|to move or act with a great show of energy (often followed by about)|http://www.dictionary.com/browse/bustle
bust|noun|a sculptured, painted, drawn, or engraved representation of the upper part of the human figure, especially a portrait sculpture showing only the head and shoulders of the subject.|http://www.dictionary.com/browse/bust
butcher|noun|a retail or wholesale dealer in meat.|http://www.dictionary.com/browse/butcher
butter|noun|the fatty portion of milk, separating as a soft whitish or yellowish solid when milk or cream is agitated or churned.|http://www.dictionary.com/browse/butter
button|noun|a small disk, knob, or the like for sewing or otherwise attaching to an article, as of clothing, serving as a fastening when passed through a buttonhole or loop.|http://www.dictionary.com/browse/button
button|noun|a small disk, knob, or the like for sewing or otherwise attaching to an article, as of clothing, serving as a fastening when passed through a buttonhole or loop.|http://www.dictionary.com/browse/button
buy|verb|to acquire the possession of, or the right to, by paying or promising to pay an equivalent, especially in money; purchase.|http://www.dictionary.com/browse/buy
buzz|noun|a low, vibrating, humming sound, as of bees, machinery, or people talking.|http://www.dictionary.com/browse/buzz
cabbage|noun|any of several cultivated varieties of a plant, Brassica oleracea capitata, of the mustard family, having a short stem and leaves formed into a compact, edible head.|http://www.dictionary.com/browse/cabbage
cable|noun|a heavy, strong rope.|http://www.dictionary.com/browse/cable
cackle|verb|to utter a shrill, broken sound or cry, as of a hen.|http://www.dictionary.com/browse/cackle
cactus|noun|any of numerous succulent plants of the family Cactaceae, of warm, arid regions of the New World, having fleshy, leafless, usually spiny stems, and typically having solitary, showy flowers.|http://www.dictionary.com/browse/cactus
cajole|verb|to persuade by flattery or promises; wheedle; coax.|http://www.dictionary.com/browse/cajole
cakes|noun|a sweet, baked, breadlike food, made with or without shortening, and usually containing flour, sugar, baking powder or soda, eggs, and liquid flavoring.|http://www.dictionary.com/browse/cakes
cake|noun|a sweet, baked, breadlike food, made with or without shortening, and usually containing flour, sugar, baking powder or soda, eggs, and liquid flavoring.|http://www.dictionary.com/browse/cake
calculate|verb|to determine or ascertain by mathematical methods; compute|http://www.dictionary.com/browse/calculate
calculator|noun|a person who calculates or computes.|http://www.dictionary.com/browse/calculator
calendar|noun|a table or register with the days of each month and week in a year|http://www.dictionary.com/browse/calendar
call|verb|to cry out in a loud voice; shout|http://www.dictionary.com/browse/call
calmly|adjective|without rough motion; still or nearly still|http://www.dictionary.com/browse/calmly
calm|adjective|without rough motion; still or nearly still|http://www.dictionary.com/browse/calm
camera|noun|a device for capturing a photographic image or recording a video, using film or digital memory.|http://www.dictionary.com/browse/camera
camp|noun|a place where an army or other group of persons or an individual is lodged in a tent or tents or other temporary means of shelter.|http://www.dictionary.com/browse/camp
cannon|noun|a mounted gun for firing heavy projectiles; a gun, howitzer, or mortar.|http://www.dictionary.com/browse/cannon
cantillate|verb|to chant; intone.|http://www.dictionary.com/browse/cantillate
canvass|verb|to solicit votes, subscriptions, opinions, or the like from.|http://www.dictionary.com/browse/canvass
canvas|noun|a closely woven, heavy cloth of cotton, hemp, or linen,  for tents, sails, etc.|http://www.dictionary.com/browse/canvas
can|auxiliary verb|to be able to; have the ability, power, or skill to|http://www.dictionary.com/browse/can
caper|verb|to leap or skip about in a sprightly manner; prance; frisk; gambol.|http://www.dictionary.com/browse/caper
capitulate|verb|to surrender unconditionally or on stipulated terms.|http://www.dictionary.com/browse/capitulate
caption|noun|a title or explanation for a picture or illustration, especially in a magazine.|http://www.dictionary.com/browse/caption
capture|verb|to take by force or stratagem; take prisoner; seize|http://www.dictionary.com/browse/capture
cap|noun|a close-fitting covering for the head, usually of soft supple material and having no visor or brim.|http://www.dictionary.com/browse/cap
card|noun|a usually rectangular piece of stiff paper, thin pasteboard, or plastic for various uses, as to write information on or printed as a means of identifying the holder|http://www.dictionary.com/browse/card
careen|verb|(of a vehicle) to lean, sway, or tip to one side while in motion|http://www.dictionary.com/browse/careen
carefully|adjective|cautious in one's actions|http://www.dictionary.com/browse/carefully
carelessly|adjective|not paying enough attention to what one does|http://www.dictionary.com/browse/carelessly
caress|noun|an act or gesture expressing affection, as an embrace or kiss, especially a light stroking or touching.|http://www.dictionary.com/browse/caress
care|noun|a state of mind in which one is troubled; worry, anxiety, or concern|http://www.dictionary.com/browse/care
care|noun|a state of mind in which one is troubled; worry, anxiety, or concern|http://www.dictionary.com/browse/care
carol|noun|a song, especially of joy.|http://www.dictionary.com/browse/carol
carpenter|noun|a person who builds or repairs wooden structures, as houses, scaffolds, or shelving.|http://www.dictionary.com/browse/carpenter
carriage|noun|a wheeled vehicle for conveying persons, as one drawn by horses and designed for comfort and elegance.|http://www.dictionary.com/browse/carriage
carry|verb|to take or support from one place to another; convey; transport|http://www.dictionary.com/browse/carry
cars|noun|an automobile.|http://www.dictionary.com/browse/cars
cartwheel|noun|the wheel of a cart.|http://www.dictionary.com/browse/cartwheel
cart|noun|a heavy two-wheeled vehicle, commonly without springs, drawn by mules, oxen, or the like,  for the conveyance of heavy goods.|http://www.dictionary.com/browse/cart
carve|verb|to cut (a solid material) so as to form something|http://www.dictionary.com/browse/carve
car|noun|an automobile.|http://www.dictionary.com/browse/car
cash|noun|money in the form of coins or banknotes, especially that issued by a government.|http://www.dictionary.com/browse/cash
castle|noun|a fortified, usually walled residence, as of a prince or noble in feudal times.|http://www.dictionary.com/browse/castle
cast|verb|to throw or hurl; fling|http://www.dictionary.com/browse/cast
cast|verb|to throw or hurl; fling|http://www.dictionary.com/browse/cast
catalog|noun|a list or record, as of items for sale or courses at a university, systematically arranged and often including descriptive material|http://www.dictionary.com/browse/catalog
catapult|noun|an ancient military engine for hurling stones, arrows, etc.|http://www.dictionary.com/browse/catapult
catcall|noun|a shrill, whistlelike sound or loud raucous shout made to express disapproval at a theater, meeting, etc.|http://www.dictionary.com/browse/catcall
catch|verb|to seize or capture, especially after pursuit|http://www.dictionary.com/browse/catch
categorise|verb|to arrange in categories or classes; classify.|http://www.dictionary.com/browse/categorise
categorize|verb|to arrange in categories or classes; classify.|http://www.dictionary.com/browse/categorize
caterwaul|verb|to utter long wailing cries, as cats in rutting time.|http://www.dictionary.com/browse/caterwaul
cats|noun|a small domesticated carnivore, Felis domestica or F. catus, bred in a number of varieties.|http://www.dictionary.com/browse/cats
cattle|noun|bovine animals, especially domesticated members of the genus Bos.|http://www.dictionary.com/browse/cattle
cat|noun|a small domesticated carnivore, Felis domestica or F. catus, bred in a number of varieties.|http://www.dictionary.com/browse/cat
cause|noun|a person or thing that acts, happens, or exists in such a way that some specific thing happens as a result; the producer of an effect|http://www.dictionary.com/browse/cause
cause|noun|a person or thing that acts, happens, or exists in such a way that some specific thing happens as a result; the producer of an effect|http://www.dictionary.com/browse/cause
caution|noun|alertness and prudence in a hazardous situation; care; wariness|http://www.dictionary.com/browse/caution
cautiously|adjective|showing, using, or characterized by caution|http://www.dictionary.com/browse/cautiously
cave|noun|a hollow in the earth, especially one opening more or less horizontally into a hill, mountain, etc.|http://www.dictionary.com/browse/cave
cavort|verb|to prance or caper about.|http://www.dictionary.com/browse/cavort
caw|noun|the harsh, grating cry of the crow, raven, etc.|http://www.dictionary.com/browse/caw
cease|verb|to stop; discontinue|http://www.dictionary.com/browse/cease
celebrate|verb|to observe (a day) or commemorate (an event) with ceremonies or festivities|http://www.dictionary.com/browse/celebrate
celery|noun|a plant, Apium graveolens, of the parsley family, whose leafstalks are eaten raw or cooked.|http://www.dictionary.com/browse/celery
cellar|noun|a room, or set of rooms, for the storage of food, fuel, etc., wholly or partly underground and usually beneath a building.|http://www.dictionary.com/browse/cellar
cemetery|noun|an area set apart for or containing graves, tombs, or funeral urns, especially one that is not a churchyard; burial ground; graveyard.|http://www.dictionary.com/browse/cemetery
center|noun|Geometry. the middle point, as the point within a circle or sphere equally distant from all points of the circumference or surface, or the point within a regular polygon equally distant from the vertices.|http://www.dictionary.com/browse/center
centre|noun, verb|center.|http://www.dictionary.com/browse/centre
cent|noun|a bronze coin of the U.S., the 100th part of a U.S. dollar|http://www.dictionary.com/browse/cent
certainly|adverb|with certainty; without doubt; assuredly|http://www.dictionary.com/browse/certainly
certify|verb|to attest as certain; give reliable information of; confirm|http://www.dictionary.com/browse/certify
chain|noun|a series of objects connected one after the other, usually in the form of a series of metal rings passing through one another,  either for various purposes requiring a flexible tie with high tensile strength, as for hauling, supporting, or confining, or in various ornamental and decorative forms.|http://www.dictionary.com/browse/chain
chairs|noun|a seat, especially for one person, usually having four legs for support and a rest for the back and often having rests for the arms.|http://www.dictionary.com/browse/chairs
chair|noun|a seat, especially for one person, usually having four legs for support and a rest for the back and often having rests for the arms.|http://www.dictionary.com/browse/chair
chalk|noun|a soft, white, powdery limestone consisting chiefly of fossil shells of foraminifers.|http://www.dictionary.com/browse/chalk
challenge|noun|a call or summons to engage in any contest, as of skill, strength, etc.|http://www.dictionary.com/browse/challenge
chance|noun|the absence of any cause of events that can be predicted, understood, or controlled|http://www.dictionary.com/browse/chance
change|verb|to make the form, nature, content, future course, etc., of (something) different from what it is or from what it would be if left alone|http://www.dictionary.com/browse/change
change|verb|to make the form, nature, content, future course, etc., of (something) different from what it is or from what it would be if left alone|http://www.dictionary.com/browse/change
channel|noun|the bed of a stream, river, or other waterway.|http://www.dictionary.com/browse/channel
chant|noun|a short, simple melody, especially one characterized by single notes to which an indefinite number of syllables are intoned,  in singing psalms, canticles, etc., in church services.|http://www.dictionary.com/browse/chant
chaperone|noun, verb|chaperon.|http://www.dictionary.com/browse/chaperone
charge|verb|to impose or ask as a price or fee|http://www.dictionary.com/browse/charge
chase|verb|to pursue in order to seize, overtake, etc.|http://www.dictionary.com/browse/chase
chasten|verb|to inflict suffering upon for purposes of moral improvement; chastise.|http://www.dictionary.com/browse/chasten
chastise|verb|to discipline, especially by corporal punishment.|http://www.dictionary.com/browse/chastise
chatter|verb|to talk rapidly in a foolish or purposeless way; jabber.|http://www.dictionary.com/browse/chatter
chat|verb|to converse in a familiar or informal manner.|http://www.dictionary.com/browse/chat
cheat|verb|to defraud; swindle|http://www.dictionary.com/browse/cheat
check|verb|to stop or arrest the motion of suddenly or forcibly|http://www.dictionary.com/browse/check
cheerfully|adjective|full of cheer; in good spirits|http://www.dictionary.com/browse/cheerfully
cheer|noun|a shout of encouragement, approval, congratulation, etc.|http://www.dictionary.com/browse/cheer
cheese|noun|the curd of milk separated from the whey and prepared in many ways as a food.|http://www.dictionary.com/browse/cheese
cherish|verb|to hold or treat as dear; feel love for|http://www.dictionary.com/browse/cherish
cherries|noun|the fruit of any of various trees belonging to the genus Prunus, of the rose family, consisting of a pulpy, globular drupe enclosing a one-seeded smooth stone.|http://www.dictionary.com/browse/cherries
cherry|noun|the fruit of any of various trees belonging to the genus Prunus, of the rose family, consisting of a pulpy, globular drupe enclosing a one-seeded smooth stone.|http://www.dictionary.com/browse/cherry
chess|noun|a game played on a chessboard by two people who maneuver sixteen pieces each according to rules governing movement of the six kinds of pieces (pawn, rook, knight, bishop, queen, king), the object being to bring the opponent's king into checkmate.|http://www.dictionary.com/browse/chess
chew|verb|to crush or grind with the teeth; masticate.|http://www.dictionary.com/browse/chew
chickens|noun|a domestic fowl, Gallus domesticus, descended from various jungle fowl of southeastern Asia and developed in a number of breeds for its flesh, eggs, and feathers.|http://www.dictionary.com/browse/chickens
chicken|noun|a domestic fowl, Gallus domesticus, descended from various jungle fowl of southeastern Asia and developed in a number of breeds for its flesh, eggs, and feathers.|http://www.dictionary.com/browse/chicken
chide|verb|to express disapproval of; scold; reproach|http://www.dictionary.com/browse/chide
children|noun|plural of child.|http://www.dictionary.com/browse/children
chill|noun|coldness, especially a moderate but uncomfortably penetrating coldness|http://www.dictionary.com/browse/chill
chime|noun|an apparatus for striking a bell so as to produce a musical sound, as one at the front door of a house by which visitors announce their presence.|http://www.dictionary.com/browse/chime
chinch|noun|chinch bug.|http://www.dictionary.com/browse/chinch
chin|noun|the lower extremity of the face, below the mouth.|http://www.dictionary.com/browse/chin
chip|noun|a small, slender piece, as of wood, separated by chopping, cutting, or breaking.|http://www.dictionary.com/browse/chip
chirp|verb|to make a characteristic short, sharp sound, as small birds and certain insects.|http://www.dictionary.com/browse/chirp
chirr|verb|to make a characteristic shrill, trilling sound, as a grasshopper.|http://www.dictionary.com/browse/chirr
chisel|noun|a wedgelike tool with a cutting edge at the end of the blade, often made of steel,  for cutting or shaping wood, stone, etc.|http://www.dictionary.com/browse/chisel
chitter|verb|to twitter.|http://www.dictionary.com/browse/chitter
choke|verb|to stop the breath of by squeezing or obstructing the windpipe; strangle; stifle.|http://www.dictionary.com/browse/choke
chomp|verb, noun|champ1 .|http://www.dictionary.com/browse/chomp
choose|verb|to select from a number of possibilities; pick by preference|http://www.dictionary.com/browse/choose
chop|verb|to cut or sever with a quick, heavy blow or a series of blows, using an ax, hatchet, etc. (often followed by down, off, etc.)|http://www.dictionary.com/browse/chop
chortle|verb|to chuckle gleefully.|http://www.dictionary.com/browse/chortle
chuckle|verb|to laugh softly or amly, usually with satisfaction|http://www.dictionary.com/browse/chuckle
chuck|verb|to toss; throw with a quick motion, usually a short distance.|http://www.dictionary.com/browse/chuck
church|noun|a building for public Christian worship.|http://www.dictionary.com/browse/church
cinch|noun|a strong girth  on stock saddles, having a ring at each end to which a strap running from the saddle is secured.|http://www.dictionary.com/browse/cinch
circle|noun|a closed plane curve consisting of all points at a given distance from a point within it called the center. Equation|http://www.dictionary.com/browse/circle
circle|noun|a closed plane curve consisting of all points at a given distance from a point within it called the center. Equation|http://www.dictionary.com/browse/circle
cite|verb|to quote (a passage, book, author, etc.), especially as an authority|http://www.dictionary.com/browse/cite
claim|verb|to demand by or as by virtue of a right; demand as a right or as due|http://www.dictionary.com/browse/claim
clamber|verb|to climb, using both feet and hands; climb with effort or difficulty.|http://www.dictionary.com/browse/clamber
clamor|noun|a loud uproar, as from a crowd of people|http://www.dictionary.com/browse/clamor
clamp|noun|a device, usually of some rigid material, for strengthening or supporting objects or fastening them together.|http://www.dictionary.com/browse/clamp
clam|noun|any of various bivalve mollusks, especially certain edible species.|http://www.dictionary.com/browse/clam
clang|verb|to give out a loud, resonant sound, as that produced by a large bell or two heavy pieces of metal striking together|http://www.dictionary.com/browse/clang
clap|verb|to strike the palms of (one's hands) against one another resoundingly, and usually repeatedly, especially to express approval|http://www.dictionary.com/browse/clap
clarify|verb|to make (an idea, statement, etc.) clear or intelligible; to free from ambiguity.|http://www.dictionary.com/browse/clarify
clash|verb|to make a loud, harsh noise|http://www.dictionary.com/browse/clash
clasp|noun|a device, usually of metal, for fastening together two or more things or parts of the same thing|http://www.dictionary.com/browse/clasp
classify|verb|to arrange or organize by classes; order according to class.|http://www.dictionary.com/browse/classify
class|noun|a number of persons or things regarded as forming a group by reason of common attributes, characteristics, qualities, or traits; kind; sort|http://www.dictionary.com/browse/class
claw|noun|a sharp, usually curved, nail on the foot of an animal, as on a cat, dog, or bird.|http://www.dictionary.com/browse/claw
cleanse|verb|to make clean.|http://www.dictionary.com/browse/cleanse
clean|adjective|free from dirt; unsoiled; unstained|http://www.dictionary.com/browse/clean
clearly|adverb|in a clear manner|http://www.dictionary.com/browse/clearly
clear|adjective|free from darkness, obscurity, or cloudiness; light|http://www.dictionary.com/browse/clear
cleave|verb|to adhere closely; stick; cling (usually followed by to).|http://www.dictionary.com/browse/cleave
clench|verb|to close (the hands, teeth, etc.) tightly.|http://www.dictionary.com/browse/clench
cleverly|adjective|mentally bright; having sharp or quick intelligence; able.|http://www.dictionary.com/browse/cleverly
click|noun|a slight, sharp sound|http://www.dictionary.com/browse/click
climb|verb|to go up or ascend, especially by using the hands and feet or feet only|http://www.dictionary.com/browse/climb
clinch|verb|to settle (a matter) decisively|http://www.dictionary.com/browse/clinch
cling|verb|to adhere closely; stick to|http://www.dictionary.com/browse/cling
clink|verb|to make or cause to make a light, sharp, ringing sound|http://www.dictionary.com/browse/clink
clip|verb|to cut, or cut off or out, as with shears|http://www.dictionary.com/browse/clip
clocks|noun|an instrument for measuring and recording time, especially by mechanical means, usually with hands or changing numbers to indicate the hour and minute|http://www.dictionary.com/browse/clocks
clock|noun|an instrument for measuring and recording time, especially by mechanical means, usually with hands or changing numbers to indicate the hour and minute|http://www.dictionary.com/browse/clock
clop|noun|a sound made by or as if by a horse's hoof striking the ground.|http://www.dictionary.com/browse/clop
closely|verb|to put (something) in a position to obstruct an entrance, opening, etc.; shut.|http://www.dictionary.com/browse/closely
close|verb|to put (something) in a position to obstruct an entrance, opening, etc.; shut.|http://www.dictionary.com/browse/close
clothe|verb|to dress; attire.|http://www.dictionary.com/browse/clothe
cloth|noun|a fabric formed by weaving, felting, etc., from wool, hair, silk, flax, cotton, or other fiber,  for garments, upholstery, and many other items.|http://www.dictionary.com/browse/cloth
clouds|noun|a visible collection of particles of water or ice suspended in the air, usually at an elevation above the earth's surface.|http://www.dictionary.com/browse/clouds
cloud|noun|a visible collection of particles of water or ice suspended in the air, usually at an elevation above the earth's surface.|http://www.dictionary.com/browse/cloud
clover|noun|any of various plants of the genus Trifolium, of the legume family, having trifoliolate leaves and dense flower heads, many species of which, as T. pratense, are cultivated as forage plants.|http://www.dictionary.com/browse/clover
club|noun|a heavy stick, usually thicker at one end than at the other, suitable for use as a weapon; a cudgel.|http://www.dictionary.com/browse/club
club|noun|a heavy stick, usually thicker at one end than at the other, suitable for use as a weapon; a cudgel.|http://www.dictionary.com/browse/club
cluck|verb|to utter the cry of a hen brooding or calling her chicks.|http://www.dictionary.com/browse/cluck
clutch|verb|to seize with or as with the hands or claws; snatch|http://www.dictionary.com/browse/clutch
coach|noun|a large, horse-drawn, four-wheeled carriage, usually enclosed.|http://www.dictionary.com/browse/coach
coach|noun|a large, horse-drawn, four-wheeled carriage, usually enclosed.|http://www.dictionary.com/browse/coach
coal|noun|a black or dark-brown combustible mineral substance consisting of carbonized vegetable matter,  as a fuel.|http://www.dictionary.com/browse/coal
coast|noun|the land next to the sea; seashore|http://www.dictionary.com/browse/coast
coat|noun|an outer garment with sleeves, covering at least the upper part of the body|http://www.dictionary.com/browse/coat
coaxingly|verb|to attempt to influence by gentle persuasion, flattery, etc.; cajole|http://www.dictionary.com/browse/coaxingly
coax|verb|to attempt to influence by gentle persuasion, flattery, etc.; cajole|http://www.dictionary.com/browse/coax
cobble|verb|to mend (shoes, boots, etc.); patch.|http://www.dictionary.com/browse/cobble
cobweb|noun|a web spun by a spider to entrap its prey.|http://www.dictionary.com/browse/cobweb
cock|noun|a male chicken; rooster.|http://www.dictionary.com/browse/cock
coddle|verb|to treat tenderly; nurse or tend indulgently; pamper|http://www.dictionary.com/browse/coddle
coerce|verb|to compel by force, intimidation, or authority, especially without regard for individual desire or volition|http://www.dictionary.com/browse/coerce
coil|verb|to wind into continuous, regularly spaced rings one above the other|http://www.dictionary.com/browse/coil
coil|verb|to wind into continuous, regularly spaced rings one above the other|http://www.dictionary.com/browse/coil
collapse|verb|to fall or cave in; crumble suddenly|http://www.dictionary.com/browse/collapse
collar|noun|the part of a shirt, coat, dress, blouse, etc., that encompasses the neckline of the garment and is sewn permanently to it, often so as to fold or roll over.|http://www.dictionary.com/browse/collar
collect|verb|to gather together; assemble|http://www.dictionary.com/browse/collect
collide|verb|to strike one another or one against the other with a forceful impact; come into violent contact; crash|http://www.dictionary.com/browse/collide
colorfully|adjective|abounding in color|http://www.dictionary.com/browse/colorfully
color|noun|the quality of an object or substance with respect to light reflected by the object, usually determined visually by measurement of hue, saturation, and brightness of the reflected light; saturation or chroma; hue.|http://www.dictionary.com/browse/color
color|noun|the quality of an object or substance with respect to light reflected by the object, usually determined visually by measurement of hue, saturation, and brightness of the reflected light; saturation or chroma; hue.|http://www.dictionary.com/browse/color
colour|noun, adjective, verb|color.|http://www.dictionary.com/browse/colour
combine|verb|to bring into or join in a close union or whole; unite|http://www.dictionary.com/browse/combine
comb|noun|a toothed strip of plastic, hard rubber, bone, wood, or metal,  for arranging the hair, untangling it, or holding it in place.|http://www.dictionary.com/browse/comb
comb|noun|a toothed strip of plastic, hard rubber, bone, wood, or metal,  for arranging the hair, untangling it, or holding it in place.|http://www.dictionary.com/browse/comb
comfort|verb|to soothe, console, or reassure; bring cheer to|http://www.dictionary.com/browse/comfort
comfort|verb|to soothe, console, or reassure; bring cheer to|http://www.dictionary.com/browse/comfort
command|verb|to direct with specific authority or prerogative; order|http://www.dictionary.com/browse/command
commence|verb|to begin; start.|http://www.dictionary.com/browse/commence
commend|verb|to present, mention, or praise as worthy of confidence, notice, kindness, etc.; recommend|http://www.dictionary.com/browse/commend
commentate|verb|to deliver a commentary on|http://www.dictionary.com/browse/commentate
comment|noun|a remark, observation, or criticism|http://www.dictionary.com/browse/comment
commiserate|verb|to feel or express sorrow or sympathy for; empathize with; pity.|http://www.dictionary.com/browse/commiserate
committee|noun|a person or group of persons elected or appointed to perform some service or function, as to investigate, report on, or act upon a particular matter.|http://www.dictionary.com/browse/committee
commit|verb|to give in trust or charge; consign.|http://www.dictionary.com/browse/commit
commonly|adverb|often; frequently|http://www.dictionary.com/browse/commonly
commune|verb|to converse or talk together, usually with profound intensity, intimacy, etc.; interchange thoughts or feelings.|http://www.dictionary.com/browse/commune
communicate|verb|to impart knowledge of; make known|http://www.dictionary.com/browse/communicate
company|noun|a number of individuals assembled or associated together; group of people.|http://www.dictionary.com/browse/company
compare|verb|to examine (two or more objects, ideas, people, etc.) in order to note similarities and differences|http://www.dictionary.com/browse/compare
comparison|noun|the act of comparing.|http://www.dictionary.com/browse/comparison
compel|verb|to force or drive, especially to a course of action|http://www.dictionary.com/browse/compel
compete|verb|to strive to outdo another for acknowledgment, a prize, supremacy, profit, etc.; engage in a contest; vie|http://www.dictionary.com/browse/compete
competition|noun|the act of competing; rivalry for supremacy, a prize, etc.|http://www.dictionary.com/browse/competition
complain|verb|to express dissatisfaction, pain, uneasiness, censure, resentment, or grief; find fault|http://www.dictionary.com/browse/complain
compliment|noun|an expression of praise, commendation, or admiration|http://www.dictionary.com/browse/compliment
comply|verb|to act or be in accordance with wishes, requests, demands, requirements, conditions, etc.; agree (sometimes followed by with)|http://www.dictionary.com/browse/comply
comport|verb|to bear or conduct (oneself); behave|http://www.dictionary.com/browse/comport
compose|verb|to make or form by combining things, parts, or elements|http://www.dictionary.com/browse/compose
comprehend|verb|to understand the nature or meaning of; grasp with the mind; perceive|http://www.dictionary.com/browse/comprehend
compress|verb|to press together; force into less space.|http://www.dictionary.com/browse/compress
compromise|noun|a settlement of differences by mutual concessions; an agreement reached by adjustment of conflicting or opposing claims, principles, etc., by reciprocal modification of demands.|http://www.dictionary.com/browse/compromise
conceal|verb|to hide; withdraw or remove from observation; cover or keep from sight|http://www.dictionary.com/browse/conceal
concede|verb|to acknowledge as true, just, or proper; admit|http://www.dictionary.com/browse/concede
concenter|verb|to bring or converge to a common center; concentrate.|http://www.dictionary.com/browse/concenter
concentrate|verb|to bring or draw to a common center or point of union; converge; direct toward one point; focus|http://www.dictionary.com/browse/concentrate
conclude|verb|to bring to an end; finish; terminate|http://www.dictionary.com/browse/conclude
concur|verb|to accord in opinion; agree|http://www.dictionary.com/browse/concur
condemn|verb|to express an unfavorable or adverse judgment on; indicate strong disapproval of; censure.|http://www.dictionary.com/browse/condemn
condescend|verb|to behave as if one is conscious of descending from a superior position, rank, or dignity.|http://www.dictionary.com/browse/condescend
condition|noun|a particular mode of being of a person or thing; existing state; situation with respect to circumstances.|http://www.dictionary.com/browse/condition
condone|verb|to disregard or overlook (something illegal, objectionable, or the like)|http://www.dictionary.com/browse/condone
conduct|noun|personal behavior; way of acting; bearing or deportment.|http://www.dictionary.com/browse/conduct
confer|verb|to consult together; compare opinions; carry on a discussion or deliberation.|http://www.dictionary.com/browse/confer
confess|verb|to acknowledge or avow (a fault, crime, misdeed, weakness, etc.) by way of revelation.|http://www.dictionary.com/browse/confess
confide|verb|to impart secrets trustfully; discuss private matters or problems (usually followed by in)|http://www.dictionary.com/browse/confide
confine|verb|to enclose within bounds; limit or restrict|http://www.dictionary.com/browse/confine
confirm|verb|to establish the truth, accuracy, validity, or genuineness of; corroborate; verify|http://www.dictionary.com/browse/confirm
confiscate|verb|to seize as forfeited to the public domain; appropriate, by way of penalty, for public use.|http://www.dictionary.com/browse/confiscate
confront|verb|to face in hostility or defiance; oppose|http://www.dictionary.com/browse/confront
confuse|verb|to perplex or bewilder|http://www.dictionary.com/browse/confuse
congratulate|verb|to express pleasure to (a person), as on a happy occasion|http://www.dictionary.com/browse/congratulate
conjecture|noun|the formation or expression of an opinion or theory without sufficient evidence for proof.|http://www.dictionary.com/browse/conjecture
connection|noun|the act or state of connecting.|http://www.dictionary.com/browse/connection
connect|verb|to join, link, or fasten together; unite or bind|http://www.dictionary.com/browse/connect
connote|verb|to signify or suggest (certain meanings, ideas, etc.) in addition to the explicit or primary meaning|http://www.dictionary.com/browse/connote
conquer|verb|to acquire by force of arms; win in war|http://www.dictionary.com/browse/conquer
consecrate|verb|to make or declare sacred; set apart or dedicate to the service of a deity|http://www.dictionary.com/browse/consecrate
consent|verb|to permit, approve, or agree; comply or yield (often followed by to or an infinitive)|http://www.dictionary.com/browse/consent
conserve|verb|to prevent injury, decay, waste, or loss of|http://www.dictionary.com/browse/conserve
consider|verb|to think carefully about, especially in order to make a decision; contemplate; reflect on|http://www.dictionary.com/browse/consider
consign|verb|to hand over or deliver formally or officially; commit (often followed by to).|http://www.dictionary.com/browse/consign
console|verb|to alleviate or lessen the grief, sorrow, or disappointment of; give solace or comfort|http://www.dictionary.com/browse/console
consort|noun|a husband or wife; spouse, especially of a reigning monarch.|http://www.dictionary.com/browse/consort
conspire|verb|to agree together, especially secretly, to do something wrong, evil, or illegal|http://www.dictionary.com/browse/conspire
constrain|verb|to force, compel, or oblige|http://www.dictionary.com/browse/constrain
constrict|verb|to draw or press in; cause to contract or shrink; compress.|http://www.dictionary.com/browse/constrict
construct|verb|to build or form by putting together parts; frame; devise.|http://www.dictionary.com/browse/construct
consult|verb|to seek advice or information from; ask guidance from|http://www.dictionary.com/browse/consult
contemplate|verb|to look at or view with continued attention; observe or study thoughtfully|http://www.dictionary.com/browse/contemplate
contend|verb|to struggle in opposition|http://www.dictionary.com/browse/contend
contest|noun|a race, conflict, or other competition between rivals, as for a prize.|http://www.dictionary.com/browse/contest
continually|adverb|very often; at regular or frequent intervals; habitually.|http://www.dictionary.com/browse/continually
continue|verb|to go on after suspension or interruption|http://www.dictionary.com/browse/continue
contort|verb|to twist, bend, or draw out of shape; distort.|http://www.dictionary.com/browse/contort
contract|noun|an agreement between two or more parties for the doing or not doing of something specified.|http://www.dictionary.com/browse/contract
contradict|verb|to assert the contrary or opposite of; deny directly and categorically.|http://www.dictionary.com/browse/contradict
contribute|verb|to give (money, time, knowledge, assistance, etc.) to a common supply, fund, etc., as for charitable purposes.|http://www.dictionary.com/browse/contribute
control|verb|to exercise restraint or direction over; dominate; command|http://www.dictionary.com/browse/control
control|verb|to exercise restraint or direction over; dominate; command|http://www.dictionary.com/browse/control
cont|1.|containing.|http://www.dictionary.com/browse/cont
convene|verb|to come together or assemble, usually for some public purpose.|http://www.dictionary.com/browse/convene
converge|verb|to tend to meet in a point or line; incline toward each other, as lines that are not parallel.|http://www.dictionary.com/browse/converge
converse|verb|to talk informally with another or others; exchange views, opinions, etc., by talking.|http://www.dictionary.com/browse/converse
convert|verb|to change (something) into a different form or properties; transmute; transform.|http://www.dictionary.com/browse/convert
convey|verb|to carry, bring, or take from one place to another; transport; bear.|http://www.dictionary.com/browse/convey
convict|verb|to prove or declare guilty of an offense, especially after a legal trial|http://www.dictionary.com/browse/convict
convince|verb|to move by argument or evidence to belief, agreement, consent, or a course of action|http://www.dictionary.com/browse/convince
convulse|verb|to shake violently; agitate.|http://www.dictionary.com/browse/convulse
cook|verb|to prepare (food) by the use of heat, as by boiling, baking, or roasting.|http://www.dictionary.com/browse/cook
cook|verb|to prepare (food) by the use of heat, as by boiling, baking, or roasting.|http://www.dictionary.com/browse/cook
coolly|adjective|moderately cold; neither warm nor cold|http://www.dictionary.com/browse/coolly
cool|adjective|moderately cold; neither warm nor cold|http://www.dictionary.com/browse/cool
cooperate|verb|to work or act together or jointly for a common purpose or benefit.|http://www.dictionary.com/browse/cooperate
coordinate|adjective|of the same order or degree; equal in rank or importance.|http://www.dictionary.com/browse/coordinate
coo|verb|to utter or imitate the soft, murmuring sound characteristic of doves.|http://www.dictionary.com/browse/coo
cope|verb|to struggle or deal, especially on fairly even terms or with some degree of success (usually followed by with)|http://www.dictionary.com/browse/cope
copper|noun|a malleable, ductile, metallic element having a characteristic reddish-brown color|http://www.dictionary.com/browse/copper
copy|noun|an imitation, reproduction, or transcript of an original|http://www.dictionary.com/browse/copy
copy|noun|an imitation, reproduction, or transcript of an original|http://www.dictionary.com/browse/copy
cord|noun|a string or thin rope made of several strands braided, twisted, or woven together.|http://www.dictionary.com/browse/cord
cork|noun|the outer bark of an oak, Quercus suber, of Mediterranean countries,  for making stoppers for bottles, floats, etc.|http://www.dictionary.com/browse/cork
corner|noun|the place at which two converging lines or surfaces meet.|http://www.dictionary.com/browse/corner
corn|noun|Also called Indian corn; especially technical and British, maize. a tall cereal plant, Zea mays, cultivated in many varieties, having a jointed, solid stem and bearing the grain, seeds, or kernels on large ears.|http://www.dictionary.com/browse/corn
correctly|verb|to set or make true, accurate, or right; remove the errors or faults from|http://www.dictionary.com/browse/correctly
correct|verb|to set or make true, accurate, or right; remove the errors or faults from|http://www.dictionary.com/browse/correct
correspond|verb|to be in agreement or conformity (often followed by with or to)|http://www.dictionary.com/browse/correspond
corrode|verb|to eat or wear away gradually as if by gnawing, especially by chemical action.|http://www.dictionary.com/browse/corrode
corrupt|adjective|guilty of dishonest practices, as bribery; lacking integrity; crooked|http://www.dictionary.com/browse/corrupt
cosset|verb|to treat as a pet; pamper; coddle.|http://www.dictionary.com/browse/cosset
cough|verb|to expel air from the lungs suddenly with a harsh noise, often involuntarily.|http://www.dictionary.com/browse/cough
cough|verb|to expel air from the lungs suddenly with a harsh noise, often involuntarily.|http://www.dictionary.com/browse/cough
counsel|noun|advice; opinion or instruction given in directing the judgment or conduct of another.|http://www.dictionary.com/browse/counsel
counteract|verb|to act in opposition to; frustrate by contrary action.|http://www.dictionary.com/browse/counteract
counter|noun|a table or display case on which goods can be shown, business transacted, etc.|http://www.dictionary.com/browse/counter
country|noun|a state or nation|http://www.dictionary.com/browse/country
count|verb|to check over (the separate units or groups of a collection) one by one to determine the total number; add up; enumerate|http://www.dictionary.com/browse/count
courageously|adjective|possessing or characterized by courage; brave|http://www.dictionary.com/browse/courageously
court|noun|Law. a judicial tribunal duly constituted for the hearing and determination of cases.|http://www.dictionary.com/browse/court
cover|verb|to be or serve as a covering for; extend over; rest on the surface of|http://www.dictionary.com/browse/cover
cover|verb|to be or serve as a covering for; extend over; rest on the surface of|http://www.dictionary.com/browse/cover
covet|verb|to desire wrongfully, inordinately, or without due regard for the rights of others|http://www.dictionary.com/browse/covet
cower|verb|to crouch, as in fear or shame.|http://www.dictionary.com/browse/cower
cows|noun|the mature female of a bovine animal, especially of the genus Bos.|http://www.dictionary.com/browse/cows
cow|noun|the mature female of a bovine animal, especially of the genus Bos.|http://www.dictionary.com/browse/cow
cozen|verb|to cheat, deceive, or trick.|http://www.dictionary.com/browse/cozen
cracker|noun|a thin, crisp biscuit.|http://www.dictionary.com/browse/cracker
crackle|verb|to make slight, sudden, sharp noises, rapidly repeated.|http://www.dictionary.com/browse/crackle
crack|verb|to break without complete separation of parts; become fissured|http://www.dictionary.com/browse/crack
crack|verb|to break without complete separation of parts; become fissured|http://www.dictionary.com/browse/crack
cradle|noun|a small bed for an infant, usually on rockers.|http://www.dictionary.com/browse/cradle
cram|verb|to fill (something) by force with more than it can easily hold.|http://www.dictionary.com/browse/cram
crane|noun|any large wading bird of the family Gruidae, characterized by long legs, bill, and neck and an elevated hind toe.|http://www.dictionary.com/browse/crane
crash|verb|to make a loud, clattering noise, as of something dashed to pieces.|http://www.dictionary.com/browse/crash
crate|noun|a slatted wooden box or framework for packing, shopping, or storing fruit, furniture, glassware, crockery, etc.|http://www.dictionary.com/browse/crate
crave|verb|to long for; want greatly; desire eagerly|http://www.dictionary.com/browse/crave
crawl|verb|to move in a prone position with the body resting on or close to the ground, as a worm or caterpillar, or on the hands and knees, as a young child.|http://www.dictionary.com/browse/crawl
crayon|noun|a pointed stick or pencil of colored clay, chalk, wax, etc.,  for drawing or coloring.|http://www.dictionary.com/browse/crayon
cream|noun|the fatty part of milk, which rises to the surface when the liquid is allowed to stand unless homogenized.|http://www.dictionary.com/browse/cream
crease|noun|a ridge or groove produced in anything by folding, heat, pressure, etc.; fold; furrow.|http://www.dictionary.com/browse/crease
create|verb|to cause to come into being, as something unique that would not naturally evolve or that is not made by ordinary processes.|http://www.dictionary.com/browse/create
creator|noun|a person or thing that creates.|http://www.dictionary.com/browse/creator
creature|noun|an animal, especially a nonhuman|http://www.dictionary.com/browse/creature
credit|noun|commendation or honor given for some action, quality, etc.|http://www.dictionary.com/browse/credit
creep|verb|to move slowly with the body close to the ground, as a reptile or an insect, or a person on hands and knees.|http://www.dictionary.com/browse/creep
crib|noun|a child's bed with enclosed sides.|http://www.dictionary.com/browse/crib
crime|noun|an action or an instance of negligence that is deemed injurious to the public welfare or morals or to the interests of the state and that is legally prohibited.|http://www.dictionary.com/browse/crime
crimp|verb|to press into small regular folds; make wavy.|http://www.dictionary.com/browse/crimp
cringe|verb|to shrink, bend, or crouch, especially in fear or servility; cower.|http://www.dictionary.com/browse/cringe
crinkle|verb|to wrinkle; crimple; ripple.|http://www.dictionary.com/browse/crinkle
criticise|verb|to censure or find fault with.|http://www.dictionary.com/browse/criticise
criticize|verb|to censure or find fault with.|http://www.dictionary.com/browse/criticize
critique|noun|an article or essay criticizing a literary or other work; detailed evaluation; review.|http://www.dictionary.com/browse/critique
croak|verb|to utter a low-pitched, harsh cry, as the sound of a frog or a raven.|http://www.dictionary.com/browse/croak
crook|noun|a bent or curved implement, piece, appendage, etc.; hook.|http://www.dictionary.com/browse/crook
crook|noun|a bent or curved implement, piece, appendage, etc.; hook.|http://www.dictionary.com/browse/crook
croon|verb|to sing or hum in a soft, soothing voice|http://www.dictionary.com/browse/croon
crop|noun|the cultivated produce of the ground, while growing or when gathered|http://www.dictionary.com/browse/crop
crossly|adverb|in a cross or angry manner.|http://www.dictionary.com/browse/crossly
cross|noun|a structure consisting essentially of an upright and a transverse piece,  to execute persons in ancient times.|http://www.dictionary.com/browse/cross
crouch|verb|to stoop or bend low.|http://www.dictionary.com/browse/crouch
crowd|noun|a large number of persons gathered closely together; throng|http://www.dictionary.com/browse/crowd
crowd|noun|a large number of persons gathered closely together; throng|http://www.dictionary.com/browse/crowd
crown|noun|any of various types of headgear worn by a monarch as a symbol of sovereignty, often made of precious metal and ornamented with valuable gems.|http://www.dictionary.com/browse/crown
crow|noun|any of several large oscine birds of the genus Corvus, of the family Corvidae, having a long, stout bill, lustrous black plumage, and a wedge-shaped tail, as the common C. brachyrhynchos, of North America.|http://www.dictionary.com/browse/crow
crow|noun|any of several large oscine birds of the genus Corvus, of the family Corvidae, having a long, stout bill, lustrous black plumage, and a wedge-shaped tail, as the common C. brachyrhynchos, of North America.|http://www.dictionary.com/browse/crow
cruelly|adjective|willfully or knowingly causing pain or distress to others.|http://www.dictionary.com/browse/cruelly
crumble|verb|to break into small fragments or crumbs.|http://www.dictionary.com/browse/crumble
crumple|verb|to press or crush into irregular folds or into a compact mass; bend out of shape; rumple; wrinkle.|http://www.dictionary.com/browse/crumple
crunch|verb|to crush with the teeth; chew with a crushing noise.|http://www.dictionary.com/browse/crunch
crush|verb|to press or squeeze with a force that destroys or deforms.|http://www.dictionary.com/browse/crush
crush|verb|to press or squeeze with a force that destroys or deforms.|http://www.dictionary.com/browse/crush
cry|verb|to utter inarticulate sounds, especially of lamentation, grief, or suffering, usually with tears.|http://www.dictionary.com/browse/cry
cry|verb|to utter inarticulate sounds, especially of lamentation, grief, or suffering, usually with tears.|http://www.dictionary.com/browse/cry
cub|noun|the young of certain animals, as the bear, lion, or tiger.|http://www.dictionary.com/browse/cub
cuddle|verb|to hold close in an affectionate manner; hug tenderly; fondle.|http://www.dictionary.com/browse/cuddle
cue|noun|anything said or done, on or off stage, that is followed by a specific line or action|http://www.dictionary.com/browse/cue
cuff|noun|a fold or band serving as a trimming or finish for the bottom of a sleeve.|http://www.dictionary.com/browse/cuff
cup|noun|a small, open container made of china, glass, metal, etc., usually having a handle and  chiefly as a receptable from which to drink tea, soup, etc.|http://www.dictionary.com/browse/cup
cup|noun|a small, open container made of china, glass, metal, etc., usually having a handle and  chiefly as a receptable from which to drink tea, soup, etc.|http://www.dictionary.com/browse/cup
curb|noun|Also, British, kerb. a rim, especially of joined stones or concrete, along a street or roadway, forming an edge for a sidewalk.|http://www.dictionary.com/browse/curb
cure|noun|a means of healing or restoring to health; remedy.|http://www.dictionary.com/browse/cure
curiously|adjective|eager to learn or know; inquisitive.|http://www.dictionary.com/browse/curiously
curl|verb|to form into coils or ringlets, as the hair.|http://www.dictionary.com/browse/curl
current|adjective|passing in time; belonging to the time actually passing|http://www.dictionary.com/browse/current
curse|noun|the expression of a wish that misfortune, evil, doom, etc., befall a person, group, etc.|http://www.dictionary.com/browse/curse
curtain|noun|a hanging piece of fabric  to shut out the light from a window, adorn a room, increase privacy, etc.|http://www.dictionary.com/browse/curtain
curtsey|noun|curtsy.|http://www.dictionary.com/browse/curtsey
curtsy|noun|a respectful bow made by women and girls, consisting of bending the knees and lowering the body.|http://www.dictionary.com/browse/curtsy
curve|noun|a continuously bending line, without angles.|http://www.dictionary.com/browse/curve
curve|noun|a continuously bending line, without angles.|http://www.dictionary.com/browse/curve
cushion|noun|a soft bag of cloth, leather, or rubber, filled with feathers, air, foam rubber, etc., on which to sit, kneel, or lie.|http://www.dictionary.com/browse/cushion
cuss|verb|to use profanity; curse; swear.|http://www.dictionary.com/browse/cuss
cut|verb|to penetrate with or as if with a sharp-edged instrument or object|http://www.dictionary.com/browse/cut
dabble|verb|to play and splash in or as if in water, especially with the hands.|http://www.dictionary.com/browse/dabble
dab|verb|to pat or tap gently, as with something soft or moist|http://www.dictionary.com/browse/dab
dad|noun|father.|http://www.dictionary.com/browse/dad
daily|adjective|of, done, occurring, or issued each day or each weekday|http://www.dictionary.com/browse/daily
daintily|adjective|of delicate beauty; exquisite|http://www.dictionary.com/browse/daintily
dally|verb|to waste time; loiter; delay.|http://www.dictionary.com/browse/dally
damage|noun|injury or harm that reduces value or usefulness|http://www.dictionary.com/browse/damage
dampen|verb|to make damp; moisten|http://www.dictionary.com/browse/dampen
dance|verb|to move one's feet or body, or both, rhythmically in a pattern of steps, especially to the accompaniment of music.|http://www.dictionary.com/browse/dance
dandle|verb|to move (a baby, child, etc.) lightly up and down, as on one's knee or in one's arms.|http://www.dictionary.com/browse/dandle
dangle|verb|to hang loosely, especially with a jerking or swaying motion|http://www.dictionary.com/browse/dangle
dare|verb|to have the necessary courage or boldness for something; be bold enough|http://www.dictionary.com/browse/dare
darken|verb|to make dark or darker.|http://www.dictionary.com/browse/darken
dart|noun|a small, slender missile that is pointed at one end and usually feathered at the other and is propelled by hand, as in the game of darts, or by a blowgun when  as a weapon.|http://www.dictionary.com/browse/dart
dash|verb|to strike or smash violently, especially so as to break to pieces|http://www.dictionary.com/browse/dash
daughter|noun|a female child or person in relation to her parents.|http://www.dictionary.com/browse/daughter
dawdle|verb|to waste time; idle; trifle; loiter|http://www.dictionary.com/browse/dawdle
daydream|noun|a reverie indulged in while awake.|http://www.dictionary.com/browse/daydream
day|noun|the interval of light between two successive nights; the time between sunrise and sunset|http://www.dictionary.com/browse/day
dazzle|verb|to overpower or dim the vision of by intense light|http://www.dictionary.com/browse/dazzle
deadpan|adjective|marked by or accomplished with a careful pretense of seriousness or calm detachment; impassive or expressionless|http://www.dictionary.com/browse/deadpan
deal|verb|to occupy oneself or itself (usually followed by with or in)|http://www.dictionary.com/browse/deal
dearly|adjective|beloved or loved|http://www.dictionary.com/browse/dearly
death|noun|the act of dying; the end of life; the total and permanent cessation of all the vital functions of an organism.|http://www.dictionary.com/browse/death
debate|noun|a discussion, as of a public question in an assembly, involving opposing viewpoints|http://www.dictionary.com/browse/debate
debt|noun|something that is owed or that one is bound to pay to or perform for another|http://www.dictionary.com/browse/debt
decay|verb|to become decomposed; rot|http://www.dictionary.com/browse/decay
deceivingly|verb|to mislead by a false appearance or statement; delude|http://www.dictionary.com/browse/deceivingly
decide|verb|to solve or conclude (a question, controversy, or struggle) by giving victory to one side|http://www.dictionary.com/browse/decide
decipher|verb|to make out the meaning of (poor or partially obliterated writing, etc.)|http://www.dictionary.com/browse/decipher
decision|noun|the act or process of deciding; determination, as of a question or doubt, by making a judgment|http://www.dictionary.com/browse/decision
declaim|verb|to speak aloud in an oratorical manner; make a formal speech|http://www.dictionary.com/browse/declaim
declare|verb|to make known or state clearly, especially in explicit or formal terms|http://www.dictionary.com/browse/declare
decline|verb|to withhold or deny consent to do, enter into or upon, etc.; refuse|http://www.dictionary.com/browse/decline
decorate|verb|to furnish or adorn with something ornamental or becoming; embellish|http://www.dictionary.com/browse/decorate
decrease|verb|to diminish or lessen in extent, quantity, strength, power, etc.|http://www.dictionary.com/browse/decrease
decree|noun|a formal and authoritative order, especially one having the force of law|http://www.dictionary.com/browse/decree
decry|verb|to speak disparagingly of; denounce as faulty or worthless; express censure of|http://www.dictionary.com/browse/decry
dedicate|verb|to set apart and consecrate to a deity or to a sacred purpose|http://www.dictionary.com/browse/dedicate
deduce|verb|to derive as a conclusion from something known or assumed; infer|http://www.dictionary.com/browse/deduce
deem|verb|to form or have an opinion; judge; think|http://www.dictionary.com/browse/deem
deeply|adverb|at or to a considerable extent downward; well within or beneath a surface.|http://www.dictionary.com/browse/deeply
deer|noun|any of several ruminants of the family Cervidae, most of the males of which have solid, deciduous antlers.|http://www.dictionary.com/browse/deer
defend|verb|to ward off attack from; guard against assault or injury (usually followed by from or against)|http://www.dictionary.com/browse/defend
defer|verb|to put off (action, consideration, etc.) to a future time|http://www.dictionary.com/browse/defer
defiantly|adjective|characterized by defiance; boldly resistant or challenging|http://www.dictionary.com/browse/defiantly
defile|verb|to make foul, dirty, or unclean; pollute; taint; debase.|http://www.dictionary.com/browse/defile
define|verb|to state or set forth the meaning of (a word, phrase, etc.)|http://www.dictionary.com/browse/define
deflate|verb|to release the air or gas from (something inflated, as a balloon)|http://www.dictionary.com/browse/deflate
deflect|verb|to bend or turn aside; turn from a true course or straight line; swerve.|http://www.dictionary.com/browse/deflect
defy|verb|to challenge the power of; resist boldly or openly|http://www.dictionary.com/browse/defy
degree|noun|any of a series of steps or stages, as in a process or course of action; a point in any scale.|http://www.dictionary.com/browse/degree
delay|verb|to put off to a later time; defer; postpone|http://www.dictionary.com/browse/delay
delegate|noun|a person designated to act for or represent another or others; deputy; representative, as in a political convention.|http://www.dictionary.com/browse/delegate
delete|verb|to strike out or remove (something written or printed); cancel; erase; expunge.|http://www.dictionary.com/browse/delete
deliberately|adjective|carefully weighed or considered; studied; intentional|http://www.dictionary.com/browse/deliberately
deliberate|adjective|carefully weighed or considered; studied; intentional|http://www.dictionary.com/browse/deliberate
delightfully|adjective|giving great pleasure or delight; highly pleasing|http://www.dictionary.com/browse/delightfully
delightfully|adjective|giving great pleasure or delight; highly pleasing|http://www.dictionary.com/browse/delightfully
deliver|verb|to carry and turn over (letters, goods, etc.) to the intended recipient or recipients|http://www.dictionary.com/browse/deliver
delve|verb|to carry on intensive and thorough research for data, information, or the like; investigate|http://www.dictionary.com/browse/delve
demand|verb|to ask for with proper authority; claim as a right|http://www.dictionary.com/browse/demand
demonstrate|verb|to make evident or establish by arguments or reasoning; prove|http://www.dictionary.com/browse/demonstrate
demur|verb|to make objection, especially on the grounds of scruples; take exception; object|http://www.dictionary.com/browse/demur
denounce|verb|to condemn or censure openly or publicly|http://www.dictionary.com/browse/denounce
deny|verb|to state that (something declared or believed to be true) is not true|http://www.dictionary.com/browse/deny
depend|verb|to rely; place trust (usually followed by on or upon)|http://www.dictionary.com/browse/depend
deplore|verb|to regret deeply or strongly; lament|http://www.dictionary.com/browse/deplore
deposit|verb|to place for safekeeping or in trust, especially in a bank account|http://www.dictionary.com/browse/deposit
deprive|verb|to remove or withhold something from the enjoyment or possession of (a person or persons)|http://www.dictionary.com/browse/deprive
deride|verb|to laugh at in scorn or contempt; scoff or jeer at; mock.|http://www.dictionary.com/browse/deride
descend|verb|to go or pass from a higher to a lower place; move or come down|http://www.dictionary.com/browse/descend
describe|verb|to tell or depict in written or spoken words; give an account of|http://www.dictionary.com/browse/describe
desecrate|verb|to divest of sacred or hallowed character or office.|http://www.dictionary.com/browse/desecrate
design|verb|to prepare the preliminary sketch or the plans for (a work to be executed), especially to plan the form and structure of|http://www.dictionary.com/browse/design
design|verb|to prepare the preliminary sketch or the plans for (a work to be executed), especially to plan the form and structure of|http://www.dictionary.com/browse/design
desire|verb|to wish or long for; crave; want.|http://www.dictionary.com/browse/desire
desk|noun|an article of furniture having a broad, usually level, writing surface, as well as drawers or compartments for papers, writing materials, etc.|http://www.dictionary.com/browse/desk
despair|noun|loss of hope; hopelessness.|http://www.dictionary.com/browse/despair
despoil|verb|to strip of possessions, things of value, etc.; rob; plunder; pillage.|http://www.dictionary.com/browse/despoil
destroy|verb|to reduce (an object) to useless fragments, a useless form, or remains, as by rending, burning, or dissolving; injure beyond repair or renewal; demolish; ruin; annihilate.|http://www.dictionary.com/browse/destroy
destruction|noun|the act of destroying|http://www.dictionary.com/browse/destruction
detach|verb|to unfasten and separate; disengage; disunite.|http://www.dictionary.com/browse/detach
detail|noun|an individual or minute part; an item or particular.|http://www.dictionary.com/browse/detail
detect|verb|to discover or catch (a person) in the performance of some act|http://www.dictionary.com/browse/detect
determine|verb|to settle or decide (a dispute, question, etc.) by an authoritative or conclusive decision.|http://www.dictionary.com/browse/determine
development|noun|the act or process of developing; growth; progress|http://www.dictionary.com/browse/development
develop|verb|to bring out the capabilities or possibilities of; bring to a more advanced or effective state|http://www.dictionary.com/browse/develop
devour|verb|to swallow or eat up hungrily, voraciously, or ravenously.|http://www.dictionary.com/browse/devour
diagnose|verb|to determine the identity of (a disease, illness, etc.) by a medical examination|http://www.dictionary.com/browse/diagnose
dictate|verb|to say or read (something) aloud for another person to transcribe or for a machine to record|http://www.dictionary.com/browse/dictate
die|verb|to cease to live; undergo the complete and permanent cessation of all vital functions; become dead.|http://www.dictionary.com/browse/die
differentiate|verb|to form or mark differently from other such things; distinguish.|http://www.dictionary.com/browse/differentiate
differ|verb|to be unlike, dissimilar, or distinct in nature or qualities (often followed by from)|http://www.dictionary.com/browse/differ
digestion|noun|the process in the alimentary canal by which food is broken up physically, as by the action of the teeth, and chemically, as by the action of enzymes, and converted into a substance suitable for absorption and assimilation into the body.|http://www.dictionary.com/browse/digestion
digest|verb|to convert (food) in the alimentary canal into absorbable form for assimilation into the system.|http://www.dictionary.com/browse/digest
digress|verb|to deviate or wander away from the main topic or purpose in speaking or writing; depart from the principal line of argument, plot, study, etc.|http://www.dictionary.com/browse/digress
dig|verb|to break up, turn over, or remove earth, sand, etc., as with a shovel, spade, bulldozer, or claw; make an excavation.|http://www.dictionary.com/browse/dig
dilate|verb|to make wider or larger; cause to expand.|http://www.dictionary.com/browse/dilate
diligently|adjective|constant in effort to accomplish something; attentive and persistent in doing anything|http://www.dictionary.com/browse/diligently
dime|noun|a cupronickel-clad coin of the U.S. and Canada, the 10th part of a dollar, equal to 10 cents.|http://www.dictionary.com/browse/dime
diminish|verb|to make or cause to seem smaller, less, less important, etc.; lessen; reduce.|http://www.dictionary.com/browse/diminish
dimly|adjective|not bright; obscure from lack of light or emitted light|http://www.dictionary.com/browse/dimly
dimple|noun|a small, natural hollow area or crease, permanent or transient, in some soft part of the human body, especially one formed in the cheek in smiling.|http://www.dictionary.com/browse/dimple
dim|adjective|not bright; obscure from lack of light or emitted light|http://www.dictionary.com/browse/dim
dine|verb|to eat the principal meal of the day; have dinner.|http://www.dictionary.com/browse/dine
dinner|noun|the main meal of the day, eaten in the evening or at midday.|http://www.dictionary.com/browse/dinner
dinosaurs|noun|any chiefly terrestrial, herbivorous or carnivorous reptile of the extinct orders Saurischia and Ornithischia, from the Mesozoic Era, certain species of which are the largest known land animals.|http://www.dictionary.com/browse/dinosaurs
dip|verb|to plunge (something, as a cloth or sponge) temporarily into a liquid, so as to moisten it, dye it, or cause it to take up some of the liquid|http://www.dictionary.com/browse/dip
direction|noun|the act or an instance of directing.|http://www.dictionary.com/browse/direction
direct|verb|to manage or guide by advice, helpful information, instruction, etc.|http://www.dictionary.com/browse/direct
dirt|noun|any foul or filthy substance, as mud, grime, dust, or excrement.|http://www.dictionary.com/browse/dirt
disagree|verb|to fail to agree; differ|http://www.dictionary.com/browse/disagree
disappear|verb|to cease to be seen; vanish from sight.|http://www.dictionary.com/browse/disappear
disapprove|verb|to think (something) wrong or reprehensible; censure or condemn in opinion.|http://www.dictionary.com/browse/disapprove
disbelieve|verb|to have no belief in; refuse or reject belief in|http://www.dictionary.com/browse/disbelieve
discern|verb|to perceive by the sight or some other sense or by the intellect; see, recognize, or apprehend|http://www.dictionary.com/browse/discern
discipline|noun|training to act in accordance with rules; drill|http://www.dictionary.com/browse/discipline
disclaim|verb|to deny or repudiate interest in or connection with; disavow; disown|http://www.dictionary.com/browse/disclaim
disclose|verb|to make known; reveal or uncover|http://www.dictionary.com/browse/disclose
discombobulate|verb|to confuse or disconcert; upset; frustrate|http://www.dictionary.com/browse/discombobulate
discourage|verb|to deprive of courage, hope, or confidence; dishearten; dispirit.|http://www.dictionary.com/browse/discourage
discovery|noun|the act or an instance of discovering.|http://www.dictionary.com/browse/discovery
discover|verb|to see, get knowledge of, learn of, find, or find out; gain sight or knowledge of (something previously unseen or unknown)|http://www.dictionary.com/browse/discover
discriminate|verb|to make a distinction in favor of or against a person or thing on the basis of the group, class, or category to which the person or thing belongs rather than according to actual merit; show partiality|http://www.dictionary.com/browse/discriminate
discussion|noun|an act or instance of discussing; consideration or examination by argument, comment, etc., especially to explore solutions; informal debate.|http://www.dictionary.com/browse/discussion
discuss|verb|to consider or examine by argument, comment, etc.; talk over or write about, especially to explore solutions; debate|http://www.dictionary.com/browse/discuss
disease|noun|a disordered or incorrectly functioning organ, part, structure, or system of the body resulting from the effect of genetic or developmental errors, infection, poisons, nutritional deficiency or imbalance, toxicity, or unfavorable environmental factors; illness; sickness; ailment.|http://www.dictionary.com/browse/disease
disentangle|verb|to free or become free from entanglement; untangle; extricate (often followed by from).|http://www.dictionary.com/browse/disentangle
disfavor|noun|unfavorable regard; displeasure; disesteem; dislike|http://www.dictionary.com/browse/disfavor
disfavour|noun|unfavorable regard; displeasure; disesteem; dislike|http://www.dictionary.com/browse/disfavour
disguise|verb|to change the appearance or guise of so as to conceal identity or mislead, as by means of deceptive garb|http://www.dictionary.com/browse/disguise
disgust|verb|to cause loathing or nausea in.|http://www.dictionary.com/browse/disgust
dishevel|verb|to let down, as hair, or wear or let hang in loose disorder, as clothing.|http://www.dictionary.com/browse/dishevel
dislodge|verb|to remove or force out of a particular place|http://www.dictionary.com/browse/dislodge
dismiss|verb|to direct (an assembly of persons) to disperse or go|http://www.dictionary.com/browse/dismiss
dismount|verb|to get off or alight from a horse, bicycle, etc.|http://www.dictionary.com/browse/dismount
disobey|verb|to neglect or refuse to obey.|http://www.dictionary.com/browse/disobey
disparage|verb|to speak of or treat slightingly; depreciate; belittle|http://www.dictionary.com/browse/disparage
displace|verb|to compel (a person or persons) to leave home, country, etc.|http://www.dictionary.com/browse/displace
display|verb|to show or exhibit; make visible|http://www.dictionary.com/browse/display
disport|verb|to divert or amuse (oneself).|http://www.dictionary.com/browse/disport
dispute|verb|to engage in argument or debate.|http://www.dictionary.com/browse/dispute
disregard|verb|to pay no attention to; leave out of consideration; ignore|http://www.dictionary.com/browse/disregard
disrespect|noun|lack of respect; discourtesy; rudeness.|http://www.dictionary.com/browse/disrespect
dissemble|verb|to give a false or misleading appearance to; conceal the truth or real nature of|http://www.dictionary.com/browse/dissemble
dissolve|verb|to make a solution of, as by mixing with a liquid; pass into solution|http://www.dictionary.com/browse/dissolve
distance|noun|the extent or amount of space between two things, points, lines, etc.|http://www.dictionary.com/browse/distance
distance|noun|the extent or amount of space between two things, points, lines, etc.|http://www.dictionary.com/browse/distance
distinguish|verb|to mark off as different (often followed by from or by)|http://www.dictionary.com/browse/distinguish
distort|verb|to twist awry or out of shape; make crooked or deformed|http://www.dictionary.com/browse/distort
distract|verb|to draw away or divert, as the mind or attention|http://www.dictionary.com/browse/distract
distribute|verb|to divide and give out in shares; deal out; allot.|http://www.dictionary.com/browse/distribute
distribution|noun|an act or instance of distributing.|http://www.dictionary.com/browse/distribution
distrust|verb|to regard with doubt or suspicion; have no trust in.|http://www.dictionary.com/browse/distrust
disturb|verb|to interrupt the quiet, rest, peace, or order of; unsettle.|http://www.dictionary.com/browse/disturb
disuse|noun|discontinuance of use or practice|http://www.dictionary.com/browse/disuse
dither|noun|a trembling; vibration.|http://www.dictionary.com/browse/dither
divert|verb|to turn aside or from a path or course; deflect.|http://www.dictionary.com/browse/divert
dive|verb|to plunge into water, especially headfirst.|http://www.dictionary.com/browse/dive
divide|verb|to separate into parts, groups, sections, etc.|http://www.dictionary.com/browse/divide
division|noun|the act or process of dividing; state of being divided.|http://www.dictionary.com/browse/division
divulge|verb|to disclose or reveal (something private, secret, or previously unknown).|http://www.dictionary.com/browse/divulge
dock|noun|a landing pier.|http://www.dictionary.com/browse/dock
doctor|noun|a person licensed to practice medicine, as a physician, surgeon, dentist, or veterinarian.|http://www.dictionary.com/browse/doctor
dodder|verb|to shake; tremble; totter.|http://www.dictionary.com/browse/dodder
dodge|verb|to elude or evade by a sudden shift of position or by strategy|http://www.dictionary.com/browse/dodge
doff|verb|to remove or take off, as clothing.|http://www.dictionary.com/browse/doff
dogs|noun|a domesticated canid, Canis familiaris, bred in many varieties.|http://www.dictionary.com/browse/dogs
dog|noun|a domesticated canid, Canis familiaris, bred in many varieties.|http://www.dictionary.com/browse/dog
dolls|noun|a small figure representing a baby or other human being, especially for use as a child's toy.|http://www.dictionary.com/browse/dolls
doll|noun|a small figure representing a baby or other human being, especially for use as a child's toy.|http://www.dictionary.com/browse/doll
donate|verb|to present as a gift, grant, or contribution; make a donation of, as to a fund or cause|http://www.dictionary.com/browse/donate
donkey|noun|the domestic ass, Equus asinus.|http://www.dictionary.com/browse/donkey
doodle|verb|to draw or scribble idly|http://www.dictionary.com/browse/doodle
door|noun|a movable, usually solid, barrier for opening and closing an entranceway, cupboard, cabinet, or the like, commonly turning on hinges or sliding in grooves.|http://www.dictionary.com/browse/door
dote|verb|to bestow or express excessive love or fondness habitually (usually followed by on or upon)|http://www.dictionary.com/browse/dote
doublecheck|verb|to check twice or again; recheck.|http://www.dictionary.com/browse/doublecheck
doubtfully|adjective|of uncertain outcome or result.|http://www.dictionary.com/browse/doubtfully
doubt|verb|to be uncertain about; consider questionable or unlikely; hesitate to believe.|http://www.dictionary.com/browse/doubt
download|verb|to transfer (software, data, character sets, etc.) from a distant to a nearby computer, from a larger to a smaller computer, or from a computer to a peripheral device.|http://www.dictionary.com/browse/download
downplay|verb|to treat or speak of (something) so as to reduce emphasis on its importance, value, strength, etc.|http://www.dictionary.com/browse/downplay
downtown|adverb|to or in the main business section of a city.|http://www.dictionary.com/browse/downtown
doze|verb|to sleep lightly or fitfully.|http://www.dictionary.com/browse/doze
draft|noun|a drawing, sketch, or design.|http://www.dictionary.com/browse/draft
drag|verb|to draw with force, effort, or difficulty; pull heavily or slowly along; haul; trail|http://www.dictionary.com/browse/drag
drain|verb|to withdraw or draw off (a liquid) gradually; remove slowly or by degrees, as by filtration|http://www.dictionary.com/browse/drain
drain|verb|to withdraw or draw off (a liquid) gradually; remove slowly or by degrees, as by filtration|http://www.dictionary.com/browse/drain
dramatise|verb|to put into a form suitable for acting on a stage.|http://www.dictionary.com/browse/dramatise
dramatize|verb|to put into a form suitable for acting on a stage.|http://www.dictionary.com/browse/dramatize
drape|verb|to cover or hang with cloth or other fabric, especially in graceful folds; adorn with drapery.|http://www.dictionary.com/browse/drape
drawer|noun|a sliding, lidless, horizontal compartment, as in a piece of furniture, that may be drawn out in order to gain access to it.|http://www.dictionary.com/browse/drawer
drawl|verb|to say or speak in a slow manner, usually prolonging the vowels.|http://www.dictionary.com/browse/drawl
draw|verb|to cause to move in a particular direction by or as if by a pulling force; pull; drag (often followed by along, away, in, out, or off).|http://www.dictionary.com/browse/draw
dreamily|adjective|of the nature of or characteristic of dreams; visionary.|http://www.dictionary.com/browse/dreamily
dream|noun|a succession of images, thoughts, or emotions passing through the mind during sleep.|http://www.dictionary.com/browse/dream
drench|verb|to wet thoroughly; soak.|http://www.dictionary.com/browse/drench
dress|noun|an outer garment for women and girls, consisting of bodice and skirt in one piece.|http://www.dictionary.com/browse/dress
dress|noun|an outer garment for women and girls, consisting of bodice and skirt in one piece.|http://www.dictionary.com/browse/dress
dribble|verb|to fall or flow in drops or small quantities; trickle.|http://www.dictionary.com/browse/dribble
drift|noun|a driving movement or force; impulse; impetus; pressure.|http://www.dictionary.com/browse/drift
drill|noun|Machinery, Building Trades. a shaftlike tool with two or more cutting edges for making holes in firm materials, especially by rotation.|http://www.dictionary.com/browse/drill
drink|verb|to take water or other liquid into the mouth and swallow it; imbibe.|http://www.dictionary.com/browse/drink
drink|verb|to take water or other liquid into the mouth and swallow it; imbibe.|http://www.dictionary.com/browse/drink
drip|verb|to let drops fall; shed drops|http://www.dictionary.com/browse/drip
drivel|noun|saliva flowing from the mouth, or mucus from the nose; slaver.|http://www.dictionary.com/browse/drivel
drive|verb|to send, expel, or otherwise cause to move by force or compulsion|http://www.dictionary.com/browse/drive
driving|adjective|demanding a high or unreasonable rate of work from subordinates.|http://www.dictionary.com/browse/driving
drone|noun|the male of the honeybee and other bees, stingless and making no honey.|http://www.dictionary.com/browse/drone
drool|verb|to water at the mouth, as in anticipation of food; salivate; drivel.|http://www.dictionary.com/browse/drool
droop|verb|to sag, sink, bend, or hang down, as from weakness, exhaustion, or lack of support.|http://www.dictionary.com/browse/droop
drop|noun|a small quantity of liquid that falls or is produced in a more or less spherical mass; a liquid globule.|http://www.dictionary.com/browse/drop
drop|noun|a small quantity of liquid that falls or is produced in a more or less spherical mass; a liquid globule.|http://www.dictionary.com/browse/drop
drug|noun|Pharmacology. a chemical substance  in the treatment, cure, prevention, or diagnosis of disease or  to otherwise enhance physical or mental well-being.|http://www.dictionary.com/browse/drug
drum|noun|a musical percussion instrument consisting of a hollow, usually cylindrical, body covered at one or both ends with a tightly stretched membrane, or head, which is struck with the hand, a stick, or a pair of sticks, and typically produces a booming, tapping, or hollow sound.|http://www.dictionary.com/browse/drum
drum|noun|a musical percussion instrument consisting of a hollow, usually cylindrical, body covered at one or both ends with a tightly stretched membrane, or head, which is struck with the hand, a stick, or a pair of sticks, and typically produces a booming, tapping, or hollow sound.|http://www.dictionary.com/browse/drum
dry|adjective|free from moisture or excess moisture; not moist; not wet|http://www.dictionary.com/browse/dry
dub|verb|to invest with any name, character, dignity, or title; style; name; call|http://www.dictionary.com/browse/dub
ducks|noun|any of numerous wild or domesticated web-footed swimming birds of the family Anatidae, especially of the genus Anas and allied genera, characterized by abroad, flat bill, short legs, and depressed body.|http://www.dictionary.com/browse/ducks
duck|noun|any of numerous wild or domesticated web-footed swimming birds of the family Anatidae, especially of the genus Anas and allied genera, characterized by abroad, flat bill, short legs, and depressed body.|http://www.dictionary.com/browse/duck
duck|noun|any of numerous wild or domesticated web-footed swimming birds of the family Anatidae, especially of the genus Anas and allied genera, characterized by abroad, flat bill, short legs, and depressed body.|http://www.dictionary.com/browse/duck
duel|noun|a prearranged combat between two persons, fought with deadly weapons according to an accepted code of procedure, especially to settle a private quarrel.|http://www.dictionary.com/browse/duel
dump|verb|to drop or let fall in a mass; fling down or drop heavily or suddenly|http://www.dictionary.com/browse/dump
dunk|verb|to dip (a doughnut, cake, etc.) into coffee, milk, or the like, before eating.|http://www.dictionary.com/browse/dunk
dust|noun|earth or other matter in fine, dry particles.|http://www.dictionary.com/browse/dust
dust|noun|earth or other matter in fine, dry particles.|http://www.dictionary.com/browse/dust
dwell|verb|to live or stay as a permanent resident; reside.|http://www.dictionary.com/browse/dwell
dye|noun|a coloring material or matter.|http://www.dictionary.com/browse/dye
earthquake|noun|a series of vibrations induced in the earth's crust by the abrupt rupture and rebound of rocks in which elastic strain has been slowly accumulating.|http://www.dictionary.com/browse/earthquake
earth|noun|(often initial capital letter) the planet third in order from the sun, having an equatorial diameter of 7926 miles (12,755 km) and a polar diameter of 7900 miles (12,714 km), a mean distance from the sun of 92.9 million miles (149.6 million km), and a period of revolution of 365.26 days, and having one satellite.|http://www.dictionary.com/browse/earth
ear|noun|the organ of hearing and equilibrium in vertebrates, in humans consisting of an external ear that gathers sound vibrations, a middle ear in which the vibrations resonate against the tympanic membrane, and a fluid-filled internal ear that maintains balance and that conducts the tympanic vibrations to the auditory nerve, which transmits them as impulses to the brain.|http://www.dictionary.com/browse/ear
ease|noun|freedom from labor, pain, or physical annoyance; tranquil rest; comfort|http://www.dictionary.com/browse/ease
easily|adverb|in an easy manner; with ease; without trouble|http://www.dictionary.com/browse/easily
east|noun|a cardinal point of the compass, 90° to the right of north.Abbreviation|http://www.dictionary.com/browse/east
eat|verb|to take into the mouth and swallow for nourishment; chew and swallow (food).|http://www.dictionary.com/browse/eat
eavesdrop|verb|to listen secretly to a private conversation.|http://www.dictionary.com/browse/eavesdrop
echo|noun|a repetition of sound produced by the reflection of sound waves from a wall, mountain, or other obstructing surface.|http://www.dictionary.com/browse/echo
edge|noun|a line or border at which a surface terminates|http://www.dictionary.com/browse/edge
edge|noun|a line or border at which a surface terminates|http://www.dictionary.com/browse/edge
educate|verb|to develop the faculties and powers of (a person) by teaching, instruction, or schooling.Synonyms|http://www.dictionary.com/browse/educate
education|noun|the act or process of imparting or acquiring general knowledge, developing the powers of reasoning and judgment, and generally of preparing oneself or others intellectually for mature life.|http://www.dictionary.com/browse/education
effect|noun|something that is produced by an agency or cause; result; consequence|http://www.dictionary.com/browse/effect
effuse|verb|to pour out or forth; shed; disseminate|http://www.dictionary.com/browse/effuse
eggnog|noun|a drink made of eggs, milk or cream, sugar, and, usually, rum or wine.|http://www.dictionary.com/browse/eggnog
eggs|noun|the roundish reproductive body produced by the female of certain animals, as birds and most reptiles, consisting of an ovum and its envelope of albumen, jelly, membranes, egg case, or shell, according to species.|http://www.dictionary.com/browse/eggs
egg|noun|the roundish reproductive body produced by the female of certain animals, as birds and most reptiles, consisting of an ovum and its envelope of albumen, jelly, membranes, egg case, or shell, according to species.|http://www.dictionary.com/browse/egg
elaborate|adjective|worked out with great care and nicety of detail; executed with great minuteness|http://www.dictionary.com/browse/elaborate
elbow|noun|the bend or joint of the human arm between upper arm and forearm.|http://www.dictionary.com/browse/elbow
elbow|noun|the bend or joint of the human arm between upper arm and forearm.|http://www.dictionary.com/browse/elbow
elect|verb|to choose or select by vote, as for an office|http://www.dictionary.com/browse/elect
elegantly|adjective|tastefully fine or luxurious in dress, style, design, etc.|http://www.dictionary.com/browse/elegantly
elevate|verb|to move or raise to a higher place or position; lift up.|http://www.dictionary.com/browse/elevate
elucidate|verb|to make lucid or clear; throw light upon; explain|http://www.dictionary.com/browse/elucidate
elude|verb|to avoid or escape by speed, cleverness, trickery, etc.; evade|http://www.dictionary.com/browse/elude
embellish|verb|to beautify by or as if by ornamentation; ornament; adorn.|http://www.dictionary.com/browse/embellish
emboss|verb|to raise or represent (surface designs) in relief.|http://www.dictionary.com/browse/emboss
embrace|verb|to take or clasp in the arms; press to the bosom; hug.|http://www.dictionary.com/browse/embrace
embroider|verb|to decorate with ornamental needlework.|http://www.dictionary.com/browse/embroider
emerge|verb|to come forth into view or notice, as from concealment or obscurity|http://www.dictionary.com/browse/emerge
empathise|verb|to experience empathy (often followed by with)|http://www.dictionary.com/browse/empathise
empathize|verb|to experience empathy (often followed by with)|http://www.dictionary.com/browse/empathize
emphasise|verb|to give emphasis to; lay stress upon; stress|http://www.dictionary.com/browse/emphasise
emphasize|verb|to give emphasis to; lay stress upon; stress|http://www.dictionary.com/browse/emphasize
employ|verb|to hire or engage the services of (a person or persons); provide employment for; have or keep in one's service|http://www.dictionary.com/browse/employ
empower|verb|to give power or authority to; authorize, especially by legal or official means|http://www.dictionary.com/browse/empower
empty|adjective|containing nothing; having none of the usual or appropriate contents|http://www.dictionary.com/browse/empty
emulate|verb|to try to equal or excel; imitate with effort to equal or surpass|http://www.dictionary.com/browse/emulate
encase|verb|to enclose in or as in a case|http://www.dictionary.com/browse/encase
encircle|verb|to form a circle around; surround; encompass|http://www.dictionary.com/browse/encircle
enclose|verb|to shut or hem in; close in on all sides|http://www.dictionary.com/browse/enclose
encompass|verb|to form a circle about; encircle; surround|http://www.dictionary.com/browse/encompass
encounter|verb|to come upon or meet with, especially unexpectedly|http://www.dictionary.com/browse/encounter
encourage|verb|to inspire with courage, spirit, or confidence|http://www.dictionary.com/browse/encourage
encroach|verb|to advance beyond proper, established, or usual limits; make gradual inroads|http://www.dictionary.com/browse/encroach
endanger|verb|to expose to danger; imperil|http://www.dictionary.com/browse/endanger
endorse|verb|to approve, support, or sustain|http://www.dictionary.com/browse/endorse
endure|verb|to hold out against; sustain without impairment or yielding; undergo|http://www.dictionary.com/browse/endure
end|noun|the last part or extremity, lengthwise, of anything that is longer than it is wide or broad|http://www.dictionary.com/browse/end
end|noun|the last part or extremity, lengthwise, of anything that is longer than it is wide or broad|http://www.dictionary.com/browse/end
energetically|adjective|possessing or exhibiting energy, especially in abundance; vigorous|http://www.dictionary.com/browse/energetically
energize|verb|to give energy to; rouse into activity|http://www.dictionary.com/browse/energize
enfold|verb|to wrap up; envelop|http://www.dictionary.com/browse/enfold
enforce|verb|to put or keep in force; compel obedience to|http://www.dictionary.com/browse/enforce
engage|verb|to occupy the attention or efforts of (a person or persons)|http://www.dictionary.com/browse/engage
engine|noun|a machine for converting thermal energy into mechanical energy or power to produce force and motion.|http://www.dictionary.com/browse/engine
engrave|verb|to chase (letters, designs, etc.) on a hard surface, as of metal, stone, or the end grain of wood|http://www.dictionary.com/browse/engrave
engulf|verb|to swallow up in or as in a gulf; submerge|http://www.dictionary.com/browse/engulf
enhance|verb|to raise to a higher degree; intensify; magnify|http://www.dictionary.com/browse/enhance
enjoy|verb|to experience with joy; take pleasure in|http://www.dictionary.com/browse/enjoy
enlarge|verb|to make larger; increase in extent, bulk, or quantity; add to|http://www.dictionary.com/browse/enlarge
enlighten|verb|to give intellectual or spiritual light to; instruct; impart knowledge to|http://www.dictionary.com/browse/enlighten
enormously|adjective|greatly exceeding the common size, extent, etc.; huge; immense|http://www.dictionary.com/browse/enormously
enquire|verb|inquire.|http://www.dictionary.com/browse/enquire
enshroud|verb|to shroud; conceal.|http://www.dictionary.com/browse/enshroud
ensnare|verb|to capture in, or involve as in, a snare|http://www.dictionary.com/browse/ensnare
entangle|verb|to make tangled; ensnarl; intertwine.|http://www.dictionary.com/browse/entangle
entertain|verb|to hold the attention of pleasantly or agreeably; divert; amuse.|http://www.dictionary.com/browse/entertain
enter|verb|to come or go in|http://www.dictionary.com/browse/enter
enthuse|verb|to be or become enthusiastic; show enthusiasm|http://www.dictionary.com/browse/enthuse
enthusiastically|adjective|full of or characterized by enthusiasm; ardent|http://www.dictionary.com/browse/enthusiastically
entice|verb|to lead on by exciting hope or desire; allure; inveigle|http://www.dictionary.com/browse/entice
entreat|verb|to ask (a person) earnestly; beseech; implore; beg|http://www.dictionary.com/browse/entreat
entwine|verb|to twine with, about, around, or together.|http://www.dictionary.com/browse/entwine
enumerate|verb|to mention separately as if in counting; name one by one; specify, as in a list|http://www.dictionary.com/browse/enumerate
enunciate|verb|to utter or pronounce (words, sentences, etc.), especially in an articulate or a particular manner|http://www.dictionary.com/browse/enunciate
envelop|verb|to wrap up in or as in a covering|http://www.dictionary.com/browse/envelop
envision|verb|to picture mentally, especially some future event or events|http://www.dictionary.com/browse/envision
envy|noun|a feeling of discontent or covetousness with regard to another's advantages, success, possessions, etc.|http://www.dictionary.com/browse/envy
equally|adverb|in an equal or identical manner|http://www.dictionary.com/browse/equally
equivocate|verb|to use ambiguous or unclear expressions, usually to avoid commitment or in order to mislead; prevaricate or hedge|http://www.dictionary.com/browse/equivocate
erase|verb|to rub or scrape out, as letters or characters written, engraved, etc.; efface.|http://www.dictionary.com/browse/erase
error|noun|a deviation from accuracy or correctness; a mistake, as in action or speech|http://www.dictionary.com/browse/error
escape|verb|to slip or get away, as from confinement or restraint; gain or regain liberty|http://www.dictionary.com/browse/escape
escort|noun|a group of persons, or a single person, accompanying another or others for protection, guidance, or courtesy|http://www.dictionary.com/browse/escort
especially|adverb|particularly; exceptionally; markedly|http://www.dictionary.com/browse/especially
espy|verb|to see at a distance; catch sight of.|http://www.dictionary.com/browse/espy
establish|verb|to found, institute, build, or bring into being on a firm or stable basis|http://www.dictionary.com/browse/establish
estimate|verb|to form an approximate judgment or opinion regarding the worth, amount, size, weight, etc., of; calculate approximately|http://www.dictionary.com/browse/estimate
etch|verb|to cut, bite, or corrode with an acid or the like; engrave with an acid or the like, as to form a design in furrows that when charged with ink will give an impression on paper.|http://www.dictionary.com/browse/etch
evade|verb|to escape from by trickery or cleverness|http://www.dictionary.com/browse/evade
evaluate|verb|to determine or set the value or amount of; appraise|http://www.dictionary.com/browse/evaluate
evaporate|verb|to change from a liquid or solid state into vapor; pass off in vapor.Synonyms|http://www.dictionary.com/browse/evaporate
evenly|adjective|level; flat; without surface irregularities; smooth|http://www.dictionary.com/browse/evenly
eventually|adverb|finally; ultimately; at some later time|http://www.dictionary.com/browse/eventually
event|noun|something that happens or is regarded as happening; an occurrence, especially one of some importance.|http://www.dictionary.com/browse/event
even|adjective|level; flat; without surface irregularities; smooth|http://www.dictionary.com/browse/even
evoke|verb|to call up or produce (memories, feelings, etc.)|http://www.dictionary.com/browse/evoke
exactly|adverb|in an exact manner; precisely; accurately.|http://www.dictionary.com/browse/exactly
exaggerate|verb|to magnify beyond the limits of truth; overstate; represent disproportionately|http://www.dictionary.com/browse/exaggerate
examine|verb|to inspect or scrutinize carefully|http://www.dictionary.com/browse/examine
example|noun|one of a number of things, or a part of something, taken to show the character of the whole|http://www.dictionary.com/browse/example
excavate|verb|to make hollow by removing the inner part; make a hole or cavity in; form into a hollow, as by digging|http://www.dictionary.com/browse/excavate
exchange|verb|to give up (something) for something else; part with for some equivalent; change for another.|http://www.dictionary.com/browse/exchange
exchange|verb|to give up (something) for something else; part with for some equivalent; change for another.|http://www.dictionary.com/browse/exchange
excitedly|adjective|stirred emotionally; agitated|http://www.dictionary.com/browse/excitedly
exclaim|verb|to cry out or speak suddenly and vehemently, as in surprise, strong emotion, or protest.|http://www.dictionary.com/browse/exclaim
exclude|verb|to shut or keep out; prevent the entrance of.|http://www.dictionary.com/browse/exclude
excuse|verb|to regard or judge with forgiveness or indulgence; pardon or forgive; overlook (a fault, error, etc.)|http://www.dictionary.com/browse/excuse
exhale|verb|to emit breath or vapor; breathe out.|http://www.dictionary.com/browse/exhale
exhibit|verb|to offer or expose to view; present for inspection|http://www.dictionary.com/browse/exhibit
exhort|verb|to urge, advise, or caution earnestly; admonish urgently.|http://www.dictionary.com/browse/exhort
existence|noun|the state or fact of existing; being.|http://www.dictionary.com/browse/existence
exist|verb|to have actual being; be|http://www.dictionary.com/browse/exist
exits|noun|a way or passage out|http://www.dictionary.com/browse/exits
expand|verb|to increase in extent, size, volume, scope, etc.|http://www.dictionary.com/browse/expand
expansion|noun|the act or process of expanding.|http://www.dictionary.com/browse/expansion
expect|verb|to look forward to; regard as likely to happen; anticipate the occurrence or the coming of|http://www.dictionary.com/browse/expect
experience|noun|a particular instance of personally encountering or undergoing something|http://www.dictionary.com/browse/experience
experience|noun|a particular instance of personally encountering or undergoing something|http://www.dictionary.com/browse/experience
expert|noun|a person who has special skill or knowledge in some particular field; specialist; authority|http://www.dictionary.com/browse/expert
explain|verb|to make plain or clear; render understandable or intelligible|http://www.dictionary.com/browse/explain
exploit|noun|a striking or notable deed; feat; spirited or heroic act|http://www.dictionary.com/browse/exploit
explore|verb|to traverse or range over (a region, area, etc.) for the purpose of discovery|http://www.dictionary.com/browse/explore
expose|verb|to lay open to danger, attack, harm, etc.|http://www.dictionary.com/browse/expose
expound|verb|to set forth or state in detail|http://www.dictionary.com/browse/expound
express|verb|to put (thought) into words; utter or state|http://www.dictionary.com/browse/express
extend|verb|to stretch out; draw out to the full length|http://www.dictionary.com/browse/extend
extinguish|verb|to put out (a fire, light, etc.); put out the flame of (something burning or lighted)|http://www.dictionary.com/browse/extinguish
extract|verb|to get, pull, or draw out, usually with special effort, skill, or force|http://www.dictionary.com/browse/extract
extrapolate|verb|to infer (an unknown) from something that is known; conjecture.|http://www.dictionary.com/browse/extrapolate
extremely|adverb|in an extreme degree; exceedingly|http://www.dictionary.com/browse/extremely
extricate|verb|to free or release from entanglement; disengage|http://www.dictionary.com/browse/extricate
exult|verb|to show or feel a lively or triumphant joy; rejoice exceedingly; be highly elated or jubilant|http://www.dictionary.com/browse/exult
eyeball|noun|the ball or globe of the eye.|http://www.dictionary.com/browse/eyeball
eyes|noun|the organ of sight, in vertebrates typically one of a pair of spherical bodies contained in an orbit of the skull and in humans appearing externally as a dense, white, curved membrane, or sclera, surrounding a circular, colored portion, or iris, that is covered by a clear, curved membrane, or cornea, and in the center of which is an opening, or pupil, through which light passes to the retina.|http://www.dictionary.com/browse/eyes
eye|noun|the organ of sight, in vertebrates typically one of a pair of spherical bodies contained in an orbit of the skull and in humans appearing externally as a dense, white, curved membrane, or sclera, surrounding a circular, colored portion, or iris, that is covered by a clear, curved membrane, or cornea, and in the center of which is an opening, or pupil, through which light passes to the retina.|http://www.dictionary.com/browse/eye
eye|noun|the organ of sight, in vertebrates typically one of a pair of spherical bodies contained in an orbit of the skull and in humans appearing externally as a dense, white, curved membrane, or sclera, surrounding a circular, colored portion, or iris, that is covered by a clear, curved membrane, or cornea, and in the center of which is an opening, or pupil, through which light passes to the retina.|http://www.dictionary.com/browse/eye
fabricate|verb|to make by art or skill and labor; construct|http://www.dictionary.com/browse/fabricate
face|noun|the front part of the head, from the forehead to the chin.|http://www.dictionary.com/browse/face
face|noun|the front part of the head, from the forehead to the chin.|http://www.dictionary.com/browse/face
fact|noun|something that actually exists; reality; truth|http://www.dictionary.com/browse/fact
fail|verb|to fall short of success or achievement in something expected, attempted, desired, or approved|http://www.dictionary.com/browse/fail
faint|adjective|lacking brightness, vividness, clearness, loudness, strength, etc.|http://www.dictionary.com/browse/faint
fairies|noun|(in folklore) one of a class of supernatural beings, generally conceived as having a diminutive human form and possessing magical powers with which they intervene in human affairs.|http://www.dictionary.com/browse/fairies
fairly|adverb|in a fair manner; justly or honestly; impartially.|http://www.dictionary.com/browse/fairly
faithfully|adjective|strict or thorough in the performance of duty|http://www.dictionary.com/browse/faithfully
fake|verb|prepare or make (something specious, deceptive, or fraudulent)|http://www.dictionary.com/browse/fake
fall|verb|to drop or descend under the force of gravity, as to a lower place through loss or lack of support.|http://www.dictionary.com/browse/fall
fall|verb|to drop or descend under the force of gravity, as to a lower place through loss or lack of support.|http://www.dictionary.com/browse/fall
falter|verb|to hesitate or waver in action, purpose, intent, etc.; give way|http://www.dictionary.com/browse/falter
familiarise|verb|to make (onself or another) well-acquainted or conversant with something.|http://www.dictionary.com/browse/familiarise
familiarize|verb|to make (onself or another) well-acquainted or conversant with something.|http://www.dictionary.com/browse/familiarize
family|noun|a basic social unit consisting of parents and their children, considered as a group, whether dwelling together or not|http://www.dictionary.com/browse/family
famously|adjective|having a widespread reputation, usually of a favorable nature; renowned; celebrated|http://www.dictionary.com/browse/famously
fancy|noun|imagination or fantasy, especially as exercised in a capricious manner.|http://www.dictionary.com/browse/fancy
fang|noun|one of the long, sharp, hollow or grooved teeth of a venomous snake by which poison is injected.|http://www.dictionary.com/browse/fang
fantasize|verb|to conceive fanciful or extravagant notions, ideas, suppositions, or the like (often followed by about)|http://www.dictionary.com/browse/fantasize
fan|noun|any device for producing a current of air by the movement of a broad surface or a number of such surfaces.|http://www.dictionary.com/browse/fan
fan|noun|any device for producing a current of air by the movement of a broad surface or a number of such surfaces.|http://www.dictionary.com/browse/fan
farmer|noun|a person who farms; person who operates a farm or cultivates land.|http://www.dictionary.com/browse/farmer
farm|noun|a tract of land, usually with a house, barn, silo, etc., on which crops and often livestock are raised for livelihood.|http://www.dictionary.com/browse/farm
far|adverb|at or to a great distance; a long way off; at or to a remote point|http://www.dictionary.com/browse/far
fasten|verb|to attach firmly or securely in place; fix securely to something else.|http://www.dictionary.com/browse/fasten
fast|adjective|moving or able to move, operate, function, or take effect quickly; quick; swift; rapid|http://www.dictionary.com/browse/fast
fatally|adverb|in a manner leading to death or disaster|http://www.dictionary.com/browse/fatally
father|noun|a male parent.|http://www.dictionary.com/browse/father
father|noun|a male parent.|http://www.dictionary.com/browse/father
faucet|noun|any device for controlling the flow of liquid from a pipe or the like by opening or closing an orifice; tap; cock.|http://www.dictionary.com/browse/faucet
favor|noun|something done or granted out of goodwill, rather than from justice or for remuneration; a kind act|http://www.dictionary.com/browse/favor
favour|noun, verb|favor.|http://www.dictionary.com/browse/favour
fawn|noun|a young deer, especially an unweaned one.|http://www.dictionary.com/browse/fawn
fear|noun|a distressing emotion aro by impending danger, evil, pain, etc., whether the threat is real or imagined; the feeling or condition of being afraid.Synonyms|http://www.dictionary.com/browse/fear
fear|noun|a distressing emotion aro by impending danger, evil, pain, etc., whether the threat is real or imagined; the feeling or condition of being afraid.Synonyms|http://www.dictionary.com/browse/fear
feast|noun|any rich or abundant meal|http://www.dictionary.com/browse/feast
feather|noun|one of the horny structures forming the principal covering of birds, consisting typically of a hard, tubular portion attached to the body and tapering into a thinner, stemlike portion bearing a series of slender, barbed processes that interlock to form a flat structure on each side.|http://www.dictionary.com/browse/feather
feed|verb|to give food to; supply with nourishment|http://www.dictionary.com/browse/feed
feeling|noun|the function or the power of perceiving by touch.|http://www.dictionary.com/browse/feeling
feel|verb|to perceive or examine by touch.|http://www.dictionary.com/browse/feel
feet|noun|a plural of foot.|http://www.dictionary.com/browse/feet
feign|verb|to represent fictitiously; put on an appearance of|http://www.dictionary.com/browse/feign
feint|noun|a movement made in order to deceive an adversary; an attack aimed at one place or point merely as a distraction from the real place or point of attack|http://www.dictionary.com/browse/feint
fence|noun|a barrier enclosing or bordering a field, yard, etc., usually made of posts and wire or wood,  to prevent entrance, to confine, or to mark a boundary.|http://www.dictionary.com/browse/fence
fend|verb|to ward off (often followed by off)|http://www.dictionary.com/browse/fend
ferociously|adjective|savagely fierce, as a wild beast, person, action, or aspect; violently cruel|http://www.dictionary.com/browse/ferociously
ferry|noun|a commercial service with terminals and boats for transporting persons, automobiles, etc., across a river or other comparatively small body of water.|http://www.dictionary.com/browse/ferry
fervently|adjective|having or showing great warmth or intensity of spirit, feeling, enthusiasm, etc.; ardent|http://www.dictionary.com/browse/fervently
fetch|verb|to go and bring back; return with; get|http://www.dictionary.com/browse/fetch
fib|noun|a small or trivial lie; minor falsehood.|http://www.dictionary.com/browse/fib
fiction|noun|the class of literature comprising works of imaginative narration, especially in prose form.|http://www.dictionary.com/browse/fiction
fiddle|noun|a musical instrument of the viol family.|http://www.dictionary.com/browse/fiddle
fidget|verb|to move about restlessly, nervously, or impatiently.|http://www.dictionary.com/browse/fidget
field|noun|an expanse of open or cleared ground, especially a piece of land suitable or  for pasture or tillage.|http://www.dictionary.com/browse/field
fiercely|adjective|menacingly wild, savage, or hostile|http://www.dictionary.com/browse/fiercely
fifth|adjective|next after the fourth; being the ordinal number for five.|http://www.dictionary.com/browse/fifth
fight|noun|a battle or combat.|http://www.dictionary.com/browse/fight
fight|noun|a battle or combat.|http://www.dictionary.com/browse/fight
file|noun|a folder, cabinet, or other container in which papers, letters, etc., are arranged in convenient order for storage or reference.|http://www.dictionary.com/browse/file
fill|verb|to make full; put as much as can be held into|http://www.dictionary.com/browse/fill
finalize|verb|to put into final form; complete all the details of.|http://www.dictionary.com/browse/finalize
find|verb|to come upon by chance; meet with|http://www.dictionary.com/browse/find
finger|noun|any of the terminal members of the hand, especially one other than the thumb.|http://www.dictionary.com/browse/finger
finger|noun|any of the terminal members of the hand, especially one other than the thumb.|http://www.dictionary.com/browse/finger
finger|noun|any of the terminal members of the hand, especially one other than the thumb.|http://www.dictionary.com/browse/finger
finish|verb|to bring (something) to an end or to completion; complete|http://www.dictionary.com/browse/finish
fireman|noun|a person employed to extinguish or prevent fires; firefighter.|http://www.dictionary.com/browse/fireman
fire|noun|a state, process, or instance of combustion in which fuel or other material is ignited and combined with oxygen, giving off light, heat, and flame.|http://www.dictionary.com/browse/fire
fish|noun|any of various cold-blooded, aquatic vertebrates, having gills, commonly fins, and typically an elongated body covered with scales.|http://www.dictionary.com/browse/fish
fish|noun|any of various cold-blooded, aquatic vertebrates, having gills, commonly fins, and typically an elongated body covered with scales.|http://www.dictionary.com/browse/fish
fit|adjective|adapted or suited; appropriate|http://www.dictionary.com/browse/fit
fix|verb|to repair; mend.|http://www.dictionary.com/browse/fix
flag|noun|a piece of cloth, varying in size, shape, color, and design, usually attached at one edge to a staff or cord, and  as the symbol of a nation, state, or organization, as a means of signaling, etc.; ensign; standard; banner; pennant.|http://www.dictionary.com/browse/flag
flail|noun|an instrument for threshing grain, consisting of a staff or handle to one end of which is attached a freely swinging stick or bar.|http://www.dictionary.com/browse/flail
flame|noun|burning gas or vapor, as from wood or coal, that is undergoing combustion; a portion of ignited gas or vapor.|http://www.dictionary.com/browse/flame
flank|noun|the side of an animal or a person between the ribs and hip.|http://www.dictionary.com/browse/flank
flap|verb|to swing or sway back and forth loosely, especially with noise|http://www.dictionary.com/browse/flap
flare|verb|to burn with an unsteady, swaying flame, as a torch or candle in the wind.|http://www.dictionary.com/browse/flare
flash|noun|a brief, sudden burst of bright light|http://www.dictionary.com/browse/flash
flatten|verb|to make flat.|http://www.dictionary.com/browse/flatten
flatter|verb|to try to please by complimentary remarks or attention.|http://www.dictionary.com/browse/flatter
flaunt|verb|to parade or display oneself conspicuously, defiantly, or boldly.|http://www.dictionary.com/browse/flaunt
flavor|noun|taste, especially the distinctive taste of something as it is experienced in the mouth.|http://www.dictionary.com/browse/flavor
flee|verb|to run away, as from danger or pursuers; take flight.|http://www.dictionary.com/browse/flee
flesh|noun|the soft substance of a human or other animal body, consisting of muscle and fat.|http://www.dictionary.com/browse/flesh
flex|verb|to bend, as a part of the body|http://www.dictionary.com/browse/flex
flick|noun|a sudden light blow or tap, as with a whip or the finger|http://www.dictionary.com/browse/flick
flight|noun|the act, manner, or power of flying.|http://www.dictionary.com/browse/flight
flinch|verb|to draw back or shrink, as from what is dangerous, difficult, or unpleasant.|http://www.dictionary.com/browse/flinch
fling|verb|to throw, cast, or hurl with force or violence|http://www.dictionary.com/browse/fling
flip|verb|to toss or put in motion with a sudden impulse, as with a snap of a finger and thumb, especially so as to cause to turn over in the air|http://www.dictionary.com/browse/flip
flirt|verb|to court triflingly or act amorously without serious intentions; play at love; coquet.|http://www.dictionary.com/browse/flirt
flit|verb|to move lightly and swiftly; fly, dart, or skim along|http://www.dictionary.com/browse/flit
float|verb|to rest or remain on the surface of a liquid; be buoyant|http://www.dictionary.com/browse/float
flock|noun|a number of animals of one kind, especially sheep, goats, or birds, that keep or feed together or are herded together.|http://www.dictionary.com/browse/flock
floor|noun|that part of a room, hallway, or the like, that forms its lower enclosing surface and upon which one walks.|http://www.dictionary.com/browse/floor
flop|verb|to fall or plump down suddenly, especially with noise; drop or turn with a sudden bump or thud (sometimes followed by down)|http://www.dictionary.com/browse/flop
flounce|verb|to go with impatient or impetuous, exaggerated movements|http://www.dictionary.com/browse/flounce
flounder|verb|to struggle with stumbling or plunging movements (usually followed by about, along, on, through, etc.)|http://www.dictionary.com/browse/flounder
flourish|verb|to be in a vigorous state; thrive|http://www.dictionary.com/browse/flourish
flout|verb|to treat with disdain, scorn, or contempt; scoff at; mock|http://www.dictionary.com/browse/flout
flowers|noun|the blossom of a plant.|http://www.dictionary.com/browse/flowers
flower|noun|the blossom of a plant.|http://www.dictionary.com/browse/flower
flow|verb|to move along in a stream|http://www.dictionary.com/browse/flow
flub|verb|to perform poorly; blunder; bungle|http://www.dictionary.com/browse/flub
fluff|noun|light, downy particles, as of cotton.|http://www.dictionary.com/browse/fluff
flush|noun|a blush; rosy glow|http://www.dictionary.com/browse/flush
flute|noun|a musical wind instrument consisting of a tube with a series of fingerholes or keys, in which the wind is directed against a sharp edge, either directly, as in the modern transverse flute, or through a flue, as in the recorder.|http://www.dictionary.com/browse/flute
flutter|verb|to wave, flap, or toss about|http://www.dictionary.com/browse/flutter
fly|verb|to move through the air using wings.|http://www.dictionary.com/browse/fly
fly|verb|to move through the air using wings.|http://www.dictionary.com/browse/fly
foam|noun|a collection of minute bubbles formed on the surface of a liquid by agitation, fermentation, etc.|http://www.dictionary.com/browse/foam
focus|noun|a central point, as of attraction, attention, or activity|http://www.dictionary.com/browse/focus
fog|noun|a cloudlike mass or layer of minute water droplets or ice crystals near the surface of the earth, appreciably reducing visibility.|http://www.dictionary.com/browse/fog
fold|verb|to bend (cloth, paper, etc.) over upon itself.|http://www.dictionary.com/browse/fold
fold|verb|to bend (cloth, paper, etc.) over upon itself.|http://www.dictionary.com/browse/fold
follow|verb|to come after in sequence, order of time, etc.|http://www.dictionary.com/browse/follow
fondle|verb|to handle or touch lovingly, affectionately, or tenderly; caress|http://www.dictionary.com/browse/fondle
fondly|adverb|in a fond manner; lovingly or affectionately|http://www.dictionary.com/browse/fondly
food|noun|any nourishing substance that is eaten, drunk, or otherwise taken into the body to sustain life, provide energy, promote growth, etc.|http://www.dictionary.com/browse/food
foolishly|adjective|resulting from or showing a lack of sense; ill-considered; unwise|http://www.dictionary.com/browse/foolishly
foot|noun|(in vertebrates) the terminal part of the leg, below the ankle joint, on which the body stands and moves.|http://www.dictionary.com/browse/foot
forbid|verb|to command (a person) not to do something, have something, etc., or not to enter some place|http://www.dictionary.com/browse/forbid
force|noun|physical power or strength possessed by a living being|http://www.dictionary.com/browse/force
force|noun|physical power or strength possessed by a living being|http://www.dictionary.com/browse/force
forecast|verb|to predict (a future condition or occurrence); calculate in advance|http://www.dictionary.com/browse/forecast
foretell|verb|to tell of beforehand; predict; prophesy.|http://www.dictionary.com/browse/foretell
forewarn|verb|to warn in advance.|http://www.dictionary.com/browse/forewarn
forget|verb|to cease or fail to remember; be unable to recall|http://www.dictionary.com/browse/forget
forge|verb|to form by heating and hammering; beat into shape.|http://www.dictionary.com/browse/forge
forgive|verb|to grant pardon for or remission of (an offense, debt, etc.); absolve.|http://www.dictionary.com/browse/forgive
fork|noun|an instrument having two or more prongs or tines, for holding, lifting, etc., as an implement for handling food or any of various agricultural tools.|http://www.dictionary.com/browse/fork
form|noun|external appearance of a clearly defined area, as distinguished from color or material; configuration|http://www.dictionary.com/browse/form
form|noun|external appearance of a clearly defined area, as distinguished from color or material; configuration|http://www.dictionary.com/browse/form
forsake|verb|to quit or leave entirely; abandon; desert|http://www.dictionary.com/browse/forsake
fortify|verb|to protect or strengthen against attack; surround or provide with defensive military works.|http://www.dictionary.com/browse/fortify
fortunately|adjective|having good fortune; receiving good from uncertain or unexpected sources; lucky|http://www.dictionary.com/browse/fortunately
found|verb|simple past tense and past participle of find.|http://www.dictionary.com/browse/found
fowl|noun|the domestic or barnyard hen or rooster; chicken.|http://www.dictionary.com/browse/fowl
frame|noun|a border or case for enclosing a picture, mirror, etc.|http://www.dictionary.com/browse/frame
frame|noun|a border or case for enclosing a picture, mirror, etc.|http://www.dictionary.com/browse/frame
frankly|adverb|in a frank manner; freely; candidly; openly; plainly|http://www.dictionary.com/browse/frankly
frantically|adjective|desperate or wild with excitement, passion, fear, pain, etc.; frenzied.|http://www.dictionary.com/browse/frantically
freely|adverb|in a free manner.|http://www.dictionary.com/browse/freely
freeze|verb|to become hardened into ice or into a solid body; change from the liquid to the solid state by loss of heat.|http://www.dictionary.com/browse/freeze
free|adjective|enjoying personal rights or liberty, as a person who is not in slavery|http://www.dictionary.com/browse/free
frenetically|adjective|frantic; frenzied.|http://www.dictionary.com/browse/frenetically
fret|verb|to feel or express worry, annoyance, discontent, or the like|http://www.dictionary.com/browse/fret
friction|noun|surface resistance to relative motion, as of a body sliding or rolling.|http://www.dictionary.com/browse/friction
friends|noun|a person attached to another by feelings of affection or personal regard.|http://www.dictionary.com/browse/friends
friend|noun|a person attached to another by feelings of affection or personal regard.|http://www.dictionary.com/browse/friend
frighten|verb|to make afraid or fearful; throw into a fright; terrify; scare.|http://www.dictionary.com/browse/frighten
frightfully|adjective|such as to cause fright; dreadful, terrible, or alarming|http://www.dictionary.com/browse/frightfully
frisk|verb|to dance, leap, skip, or gambol; frolic|http://www.dictionary.com/browse/frisk
frogs|noun|any tailless, stout-bodied amphibian of the order Anura, including the smooth, moist-skinned frog species that live in a damp or semiaquatic habitat and the warty, drier-skinned toad species that are mostly terrestrial as adults.|http://www.dictionary.com/browse/frogs
frog|noun|any tailless, stout-bodied amphibian of the order Anura, including the smooth, moist-skinned frog species that live in a damp or semiaquatic habitat and the warty, drier-skinned toad species that are mostly terrestrial as adults.|http://www.dictionary.com/browse/frog
frolic|noun|merry play; merriment; gaiety; fun.|http://www.dictionary.com/browse/frolic
front|noun|the foremost part or surface of anything.|http://www.dictionary.com/browse/front
froth|noun|an aggregation of bubbles, as on an agitated liquid or at the mouth of a hard-driven horse; foam; spume.|http://www.dictionary.com/browse/froth
frown|verb|to contract the brow, as in displeasure or deep thought; scowl.|http://www.dictionary.com/browse/frown
fruit|noun|any product of plant growth useful to humans or animals.|http://www.dictionary.com/browse/fruit
fry|verb|to cook in a pan or on a griddle over direct heat, usually in fat or oil.|http://www.dictionary.com/browse/fry
fuel|noun|combustible matter  to maintain fire, as coal, wood, oil, or gas, in order to create heat or power.|http://www.dictionary.com/browse/fuel
fulfil|verb|fulfill.|http://www.dictionary.com/browse/fulfil
fully|adverb|entirely or wholly|http://www.dictionary.com/browse/fully
fumble|verb|to feel or grope about clumsily|http://www.dictionary.com/browse/fumble
fume|noun|Often, fumes. any smokelike or vaporous exhalation from matter or substances, especially of an odorous or harmful nature|http://www.dictionary.com/browse/fume
furiously|adjective|full of fury, violent passion, or rage; extremely angry; enraged|http://www.dictionary.com/browse/furiously
furl|verb|to gather into a compact roll and bind securely, as a sail against a spar or a flag against its staff.|http://www.dictionary.com/browse/furl
furniture|noun|the movable articles, as tables, chairs, desks or cabinets, required for use or ornament in a house, office, or the like.|http://www.dictionary.com/browse/furniture
furrow|noun|a narrow groove made in the ground, especially by a plow.|http://www.dictionary.com/browse/furrow
fuss|noun|an excessive display of anxious attention or activity; needless or useless bustle|http://www.dictionary.com/browse/fuss
gabble|verb|to speak or converse rapidly and unintelligibly; jabber.|http://www.dictionary.com/browse/gabble
gag|verb|to stop up the mouth of (a person) by putting something in it, thus preventing speech, shouts, etc.|http://www.dictionary.com/browse/gag
gallivant|verb|to wander about, seeking pleasure or diversion; gad.|http://www.dictionary.com/browse/gallivant
gallop|verb|to ride a horse at a gallop; ride at full speed|http://www.dictionary.com/browse/gallop
gamble|verb|to play at any game of chance for money or other stakes.|http://www.dictionary.com/browse/gamble
gambol|verb|to skip about, as in dancing or playing; frolic.|http://www.dictionary.com/browse/gambol
game|noun|an amusement or pastime|http://www.dictionary.com/browse/game
gape|verb|to stare with open mouth, as in wonder.|http://www.dictionary.com/browse/gape
garden|noun|a plot of ground, usually near a house, where flowers, shrubs, vegetables, fruits, or herbs are cultivated.|http://www.dictionary.com/browse/garden
gargle|verb|to wash or rinse the throat or mouth with a liquid held in the throat and kept in motion by a stream of air from the lungs.|http://www.dictionary.com/browse/gargle
gash|noun|a long, deep wound or cut; slash.|http://www.dictionary.com/browse/gash
gasp|noun|a sudden, short intake of breath, as in shock or surprise.|http://www.dictionary.com/browse/gasp
gate|noun|a movable barrier, usually on hinges, closing an opening in a fence, wall, or other enclosure.|http://www.dictionary.com/browse/gate
gather|verb|to bring together into one group, collection, or place|http://www.dictionary.com/browse/gather
gauge|verb|to determine the exact dimensions, capacity, quantity, or force of; measure.|http://www.dictionary.com/browse/gauge
gawk|verb|to stare stupidly; gape|http://www.dictionary.com/browse/gawk
gaze|verb|to look steadily and intently, as with great curiosity, interest, pleasure, or wonder.|http://www.dictionary.com/browse/gaze
geese|noun|a plural of goose.|http://www.dictionary.com/browse/geese
generalize|verb|to infer (a general principle, trend, etc.) from particular facts, statistics, or the like.|http://www.dictionary.com/browse/generalize
generally|adverb|usually; commonly; ordinarily|http://www.dictionary.com/browse/generally
generously|adjective|liberal in giving or sharing; unselfish|http://www.dictionary.com/browse/generously
gently|adjective|kindly; amiable|http://www.dictionary.com/browse/gently
genuflect|verb|to bend the knee or touch one knee to the floor in reverence or worship.|http://www.dictionary.com/browse/genuflect
gesticulate|verb|to make or use gestures, especially in an animated or excited manner with or instead of speech.|http://www.dictionary.com/browse/gesticulate
gesture|noun|a movement or position of the hand, arm, body, head, or face that is expressive of an idea, opinion, emotion, etc.|http://www.dictionary.com/browse/gesture
get|verb|to receive or come to have possession, use, or enjoyment of|http://www.dictionary.com/browse/get
ghost|noun|the soul of a dead person, a disembodied spirit imagined, usually as a vague, shadowy or evanescent form, as wandering among or haunting living persons.|http://www.dictionary.com/browse/ghost
giants|noun|(in folklore) a being with human form but superhuman size, strength, etc.|http://www.dictionary.com/browse/giants
gibber|verb|to speak inarticulately or meaninglessly.|http://www.dictionary.com/browse/gibber
giggle|verb|to laugh in a silly, often high-pitched way, especially with short, repeated gasps and titters, as from juvenile or ill-concealed amusement or nervous embarrassment.|http://www.dictionary.com/browse/giggle
giraffe|noun|a tall, long-necked, spotted ruminant, Giraffa camelopardalis, of Africa|http://www.dictionary.com/browse/giraffe
girls|noun|a female child, from birth to full growth.|http://www.dictionary.com/browse/girls
girl|noun|a female child, from birth to full growth.|http://www.dictionary.com/browse/girl
give|verb|to present voluntarily and without expecting compensation; bestow|http://www.dictionary.com/browse/give
gladly|adjective|feeling joy or pleasure; delighted; pleased|http://www.dictionary.com/browse/gladly
glance|verb|to look quickly or briefly.|http://www.dictionary.com/browse/glance
glare|noun|a very harsh, bright, dazzling light|http://www.dictionary.com/browse/glare
glass|noun|a hard, brittle, noncrystalline, more or less transparent substance produced by fusion, usually consisting of mutually dissolved silica and silicates that also contain soda and lime, as in the ordinary variety  for windows and bottles.|http://www.dictionary.com/browse/glass
gleefully|adjective|full of exultant joy; merry; delighted.|http://www.dictionary.com/browse/gleefully
glide|verb|to move smoothly and continuously along, as if without effort or resistance, as a flying bird, a boat, or a skater.|http://www.dictionary.com/browse/glide
glimpse|noun|a very brief, passing look, sight, or view.|http://www.dictionary.com/browse/glimpse
gloat|verb|to look at or think about with great or excessive, often smug or malicious, satisfaction|http://www.dictionary.com/browse/gloat
glove|noun|a covering for the hand made with a separate sheath for each finger and for the thumb.|http://www.dictionary.com/browse/glove
glower|verb|to look or stare with sullen dislike, discontent, or anger.|http://www.dictionary.com/browse/glower
glow|noun|a light emitted by or as if by a substance heated to luminosity; incandescence.|http://www.dictionary.com/browse/glow
glue|noun|a hard, impure, protein gelatin, obtained by boiling skins, hoofs, and other animal substances in water, that when melted or diluted is a strong adhesive.|http://www.dictionary.com/browse/glue
gnash|verb|to grind or strike (the teeth) together, especially in rage or pain.|http://www.dictionary.com/browse/gnash
gnaw|verb|to bite or chew on, especially persistently.|http://www.dictionary.com/browse/gnaw
goad|noun|a stick with a pointed or electrically charged end, for driving cattle, oxen, etc.; prod.|http://www.dictionary.com/browse/goad
goat|noun|any of numerous agile, hollow-horned ruminants of the genus Capra, of the family Bovidae, closely related to the sheep, found native in rocky and mountainous regions of the Old World, and widely distributed in domesticated varieties.|http://www.dictionary.com/browse/goat
gobble|verb|to swallow or eat hastily or hungrily in large pieces; gulp.|http://www.dictionary.com/browse/gobble
goggle|noun|goggles.large spectacles equipped with special lenses, protective rims, etc., to prevent injury to the eyes from strong wind, flying objects, blinding light, etc.|http://www.dictionary.com/browse/goggle
goldfish|noun|a small, usually yellow or orange fish, Carassius auratus, of the carp family, native to China, bred in many varieties and often kept in fishbowls and pools.|http://www.dictionary.com/browse/goldfish
gold|noun|a precious yellow metallic element, highly malleable and ductile, and not subject to oxidation or corrosion. Symbol|http://www.dictionary.com/browse/gold
good-bye|interjection|farewell (a conventional expression  at parting).|http://www.dictionary.com/browse/good-bye
goose|noun|any of numerous wild or domesticated, web-footed swimming birds of the family Anatidae, especially of the genera Anser and Branta, most of which are larger and have a longer neck and legs than the ducks.|http://www.dictionary.com/browse/goose
goose|noun|any of numerous wild or domesticated, web-footed swimming birds of the family Anatidae, especially of the genera Anser and Branta, most of which are larger and have a longer neck and legs than the ducks.|http://www.dictionary.com/browse/goose
gossip|noun|idle talk or rumor, especially about the personal or private affairs of others|http://www.dictionary.com/browse/gossip
gouge|noun|a chisel having a partly cylindrical blade with the bevel on either the concave or the convex side.|http://www.dictionary.com/browse/gouge
government|noun|the political direction and control exercised over the actions of the members, citizens, or inhabitants of communities, societies, and states; direction of the affairs of a state, community, etc.; political administration|http://www.dictionary.com/browse/government
governor|noun|the executive head of a state in the U.S.|http://www.dictionary.com/browse/governor
govern|verb|to rule over by right of authority|http://www.dictionary.com/browse/govern
go|verb|to move or proceed, especially to or from something|http://www.dictionary.com/browse/go
grab|verb|to seize suddenly or quickly; snatch; clutch|http://www.dictionary.com/browse/grab
gracefully|adjective|characterized by elegance or beauty of form, manner, movement, or speech; elegant|http://www.dictionary.com/browse/gracefully
grade|noun|a degree or step in a scale, as of rank, advancement, quality, value, or intensity|http://www.dictionary.com/browse/grade
grade|noun|a degree or step in a scale, as of rank, advancement, quality, value, or intensity|http://www.dictionary.com/browse/grade
grain|noun|a small, hard seed, especially the seed of a food plant such as wheat, corn, rye, oats, rice, or millet.|http://www.dictionary.com/browse/grain
grandfather|noun|the father of one's father or mother.|http://www.dictionary.com/browse/grandfather
grandmother|noun|the mother of one's father or mother.|http://www.dictionary.com/browse/grandmother
grant|verb|to bestow or confer, especially by a formal act|http://www.dictionary.com/browse/grant
grape|noun|the edible, pulpy, smooth-skinned berry or fruit that grows in clusters on vines of the genus Vitis, and from which wine is made.|http://www.dictionary.com/browse/grape
grapple|verb|to hold or make fast to something, as with a grapple.|http://www.dictionary.com/browse/grapple
grasp|verb|to seize and hold by or as if by clasping with the fingers or arms.|http://www.dictionary.com/browse/grasp
grass|noun|any plant of the family Gramineae, having jointed stems, sheathing leaves, and seedlike grains.|http://www.dictionary.com/browse/grass
gratefully|adjective|warmly or deeply appreciative of kindness or benefits received; thankful|http://www.dictionary.com/browse/gratefully
grate|noun|a frame of metal bars for holding fuel when burning, as in a fireplace, furnace, or stove.|http://www.dictionary.com/browse/grate
gravitate|verb|to move or tend to move under the influence of gravitational force.|http://www.dictionary.com/browse/gravitate
graze|verb|to feed on growing grass and pasturage, as do cattle, sheep, etc.|http://www.dictionary.com/browse/graze
greatly|adverb|in or to a great degree; much|http://www.dictionary.com/browse/greatly
greedily|adjective|excessively or inordinately desirous of wealth, profit, etc.; avaricious|http://www.dictionary.com/browse/greedily
greet|verb|to address with some form of salutation; welcome.|http://www.dictionary.com/browse/greet
grieve|verb|to feel grief or great sorrow|http://www.dictionary.com/browse/grieve
grill|noun|a grated utensil for broiling meat, fish, vegetables, etc., over a fire; gridiron.|http://www.dictionary.com/browse/grill
grimace|noun|a facial expression, often ugly or contorted, that indicates disapproval, pain, etc.|http://www.dictionary.com/browse/grimace
grind|verb|to wear, smooth, or sharpen by abrasion or friction; whet|http://www.dictionary.com/browse/grind
grin|verb|to smile broadly, especially as an indication of pleasure, amusement, or the like.|http://www.dictionary.com/browse/grin
gripe|verb|Informal. to complain naggingly or constantly; grumble.|http://www.dictionary.com/browse/gripe
grip|noun|the act of grasping; a seizing and holding fast; firm grasp.|http://www.dictionary.com/browse/grip
grip|noun|the act of grasping; a seizing and holding fast; firm grasp.|http://www.dictionary.com/browse/grip
grit|noun|abrasive particles or granules, as of sand or other small, coarse impurities found in the air, food, water, etc.|http://www.dictionary.com/browse/grit
groan|noun|a low, mournful sound uttered in pain or grief|http://www.dictionary.com/browse/groan
groom|noun|a bridegroom.|http://www.dictionary.com/browse/groom
grope|verb|to feel about with the hands; feel one's way|http://www.dictionary.com/browse/grope
grouch|verb|to be sulky or morose; show discontent; complain, especially in an irritable way.|http://www.dictionary.com/browse/grouch
ground|noun|the solid surface of the earth; firm or dry land|http://www.dictionary.com/browse/ground
ground|noun|the solid surface of the earth; firm or dry land|http://www.dictionary.com/browse/ground
group|noun|any collection or assemblage of persons or things; cluster; aggregation|http://www.dictionary.com/browse/group
grovel|verb|to humble oneself or act in an abject manner, as in great fear or utter servility.|http://www.dictionary.com/browse/grovel
growl|verb|to utter a deep guttural sound of anger or hostility|http://www.dictionary.com/browse/growl
growth|noun|the act or process, or a manner of growing; development; gradual increase.|http://www.dictionary.com/browse/growth
grow|verb|to increase by natural development, as any living organism or part by assimilation of nutriment; increase in size or substance.|http://www.dictionary.com/browse/grow
grumble|verb|to murmur or mutter in discontent; complain sullenly.|http://www.dictionary.com/browse/grumble
grump|noun|a person given to constant complaining.|http://www.dictionary.com/browse/grump
grunt|verb|to utter the deep, guttural sound characteristic of a hog.|http://www.dictionary.com/browse/grunt
guarantee|noun|a promise or assurance, especially one in writing, that something is of specified quality, content, benefit, etc., or that it will perform satisfactorily for a given length of time|http://www.dictionary.com/browse/guarantee
guard|verb|to keep safe from harm or danger; protect; watch over|http://www.dictionary.com/browse/guard
guess|verb|to arrive at or commit oneself to an opinion about (something) without having sufficient evidence to support the opinion fully|http://www.dictionary.com/browse/guess
guffaw|noun|a loud, unrestrained burst of laughter.|http://www.dictionary.com/browse/guffaw
guide|verb|to assist (a person) to travel through, or reach a destination in, an unfamiliar area, as by accompanying or giving directions to the person|http://www.dictionary.com/browse/guide
guide|verb|to assist (a person) to travel through, or reach a destination in, an unfamiliar area, as by accompanying or giving directions to the person|http://www.dictionary.com/browse/guide
guitar|noun|a stringed musical instrument with a long, fretted neck, a flat, somewhat violinlike body, and typically six strings, which are plucked with the fingers or with a plectrum.|http://www.dictionary.com/browse/guitar
gulp|verb|to gasp or choke, as when taking large drafts of a liquid.|http://www.dictionary.com/browse/gulp
gun|noun|a weapon consisting of a metal tube, with mechanical attachments, from which projectiles are shot by the force of an explosive; a piece of ordnance.|http://www.dictionary.com/browse/gun
gurgle|verb|to flow in a broken, irregular, noisy current|http://www.dictionary.com/browse/gurgle
gush|verb|to flow out or issue suddenly, copiously, or forcibly, as a fluid from confinement|http://www.dictionary.com/browse/gush
guzzle|verb|to drink, or sometimes eat, greedily, frequently, or plentifully|http://www.dictionary.com/browse/guzzle
gyrate|verb|to move in a circle or spiral, or around a fixed point; whirl.|http://www.dictionary.com/browse/gyrate
hack|verb|to cut, notch, slice, chop, or sever (something) with or as with heavy, irregular blows (often followed by up or down)|http://www.dictionary.com/browse/hack
haggle|verb|to bargain in a petty, quibbling, and often contentious manner|http://www.dictionary.com/browse/haggle
hail|verb|to cheer, salute, or greet; welcome.|http://www.dictionary.com/browse/hail
haircut|noun|an act or instance of cutting the hair.|http://www.dictionary.com/browse/haircut
hair|noun|any of the numerous fine, usually cylindrical, keratinous filaments growing from the skin of humans and animals; a pilus.|http://www.dictionary.com/browse/hair
hallucinate|verb|to have hallucinations.|http://www.dictionary.com/browse/hallucinate
hall|noun|a corridor or passageway in a building.|http://www.dictionary.com/browse/hall
halt|verb|to stop; cease moving, operating, etc., either permanently or temporarily|http://www.dictionary.com/browse/halt
hammer|noun|a tool consisting of a solid head, usually of metal, set crosswise on a handle,  for beating metals, driving nails, etc.|http://www.dictionary.com/browse/hammer
hammer|noun|a tool consisting of a solid head, usually of metal, set crosswise on a handle,  for beating metals, driving nails, etc.|http://www.dictionary.com/browse/hammer
handle|noun|a part of a thing made specifically to be grasped or held by the hand.|http://www.dictionary.com/browse/handle
hands|noun|the terminal, prehensile part of the upper limb in humans and other primates, consisting of the wrist, metacarpal area, fingers, and thumb.|http://www.dictionary.com/browse/hands
hand|noun|the terminal, prehensile part of the upper limb in humans and other primates, consisting of the wrist, metacarpal area, fingers, and thumb.|http://www.dictionary.com/browse/hand
hand|noun|the terminal, prehensile part of the upper limb in humans and other primates, consisting of the wrist, metacarpal area, fingers, and thumb.|http://www.dictionary.com/browse/hand
hang|verb|to fasten or attach (a thing) so that it is supported only from above or at a point near its own top; suspend.|http://www.dictionary.com/browse/hang
happily|adverb|in a happy manner; with pleasure.|http://www.dictionary.com/browse/happily
harass|verb|to disturb persistently; torment, as with troubles or cares; bother continually; pester; persecute.|http://www.dictionary.com/browse/harass
harbor|noun|a part of a body of water along the shore deep enough for anchoring a ship and so situated with respect to coastal features, whether natural or artificial, as to provide protection from winds, waves, and currents.|http://www.dictionary.com/browse/harbor
harden|verb|to make hard or harder|http://www.dictionary.com/browse/harden
hark|verb|to listen attentively; hearken.|http://www.dictionary.com/browse/hark
harmonize|verb|to bring into harmony, accord, or agreement|http://www.dictionary.com/browse/harmonize
harmony|noun|agreement; accord; harmonious relations.|http://www.dictionary.com/browse/harmony
harm|noun|physical injury or mental damage; hurt|http://www.dictionary.com/browse/harm
harry|verb|to harass, annoy, or prove a nuisance to by or as if by repeated attacks; worry|http://www.dictionary.com/browse/harry
harvest|noun|Also, harvesting. the gathering of crops.|http://www.dictionary.com/browse/harvest
hassle|noun|a disorderly dispute.|http://www.dictionary.com/browse/hassle
hasten|verb|to move or act with haste; proceed with haste; hurry|http://www.dictionary.com/browse/hasten
hastily|adjective|moving or acting with haste; speedy; quick; hurried.|http://www.dictionary.com/browse/hastily
hatch|verb|to bring forth (young) from the egg.|http://www.dictionary.com/browse/hatch
hate|verb|to dislike intensely or passionately; feel extreme aversion for or extreme hostility toward; detest|http://www.dictionary.com/browse/hate
hate|verb|to dislike intensely or passionately; feel extreme aversion for or extreme hostility toward; detest|http://www.dictionary.com/browse/hate
hat|noun|a shaped covering for the head, usually with a crown and brim, especially for wear outdoors.|http://www.dictionary.com/browse/hat
haul|verb|to pull or draw with force; move by drawing; drag|http://www.dictionary.com/browse/haul
head-butt|verb |to deliberately strike (someone) with the head|http://www.dictionary.com/browse/head-butt
head|noun|the upper part of the body in humans, joined to the trunk by the neck, containing the brain, eyes, ears, nose, and mouth.|http://www.dictionary.com/browse/head
head|noun|the upper part of the body in humans, joined to the trunk by the neck, containing the brain, eyes, ears, nose, and mouth.|http://www.dictionary.com/browse/head
healthily|adjective|possessing or enjoying good health or a sound and vigorous mentality|http://www.dictionary.com/browse/healthily
health|noun|the general condition of the body or mind with reference to soundness and vigor|http://www.dictionary.com/browse/health
health|noun|the general condition of the body or mind with reference to soundness and vigor|http://www.dictionary.com/browse/health
heal|verb|to make healthy, whole, or sound; restore to health; free from ailment.|http://www.dictionary.com/browse/heal
hearing|noun|the faculty or sense by which sound is perceived.|http://www.dictionary.com/browse/hearing
hearten|verb|to give courage or confidence to; cheer.|http://www.dictionary.com/browse/hearten
heart|noun|Anatomy. a hollow, pumplike organ of blood circulation, composed mainly of rhythmically contractile smooth muscle, located in the chest between the lungs and slightly to the left and consisting of four chambers|http://www.dictionary.com/browse/heart
hear|verb|to perceive by the ear|http://www.dictionary.com/browse/hear
heat|noun|the state of a body perceived as having or generating a relatively high degree of warmth.|http://www.dictionary.com/browse/heat
heat|noun|the state of a body perceived as having or generating a relatively high degree of warmth.|http://www.dictionary.com/browse/heat
heave|verb|to raise or lift with effort or force; hoist|http://www.dictionary.com/browse/heave
heavily|adverb|with a great weight or burden|http://www.dictionary.com/browse/heavily
heckle|verb|to harass (a public speaker, performer, etc.) with impertinent questions, gibes, or the like; badger.|http://www.dictionary.com/browse/heckle
hector|noun|Classical Mythology. the eldest son of Priam and husband of Andromache|http://www.dictionary.com/browse/hector
hedge|noun|a row of bushes or small trees planted close together, especially when forming a fence or boundary; hedgerow|http://www.dictionary.com/browse/hedge
heed|verb|to give careful attention to|http://www.dictionary.com/browse/heed
heft|noun|weight; heaviness|http://www.dictionary.com/browse/heft
helpfully|adjective|giving or rendering aid or assistance; of service|http://www.dictionary.com/browse/helpfully
helplessly|adjective|unable to help oneself; weak or dependent|http://www.dictionary.com/browse/helplessly
help|verb|to give or provide what is necessary to accomplish a task or satisfy a need; contribute strength or means to; render assistance to; cooperate effectively with; aid; assist|http://www.dictionary.com/browse/help
help|verb|to give or provide what is necessary to accomplish a task or satisfy a need; contribute strength or means to; render assistance to; cooperate effectively with; aid; assist|http://www.dictionary.com/browse/help
hem|verb|to fold back and sew down the edge of (cloth, a garment, etc.); form an edge or border on or around.|http://www.dictionary.com/browse/hem
hen|noun|the female of the domestic fowl.|http://www.dictionary.com/browse/hen
herald|noun|(formerly) a royal or official messenger, especially one representing a monarch in an ambassadorial capacity during wartime.|http://www.dictionary.com/browse/herald
hesitate|verb|to be reluctant or wait to act because of fear, indecision, or disinclination|http://www.dictionary.com/browse/hesitate
hew|verb|to strike forcibly with an ax, sword, or other cutting instrument; chop; hack.|http://www.dictionary.com/browse/hew
hiccup|noun|a quick, involuntary inhalation that follows a spasm of the diaphragm and is suddenly checked by closure of the glottis, producing a short, relatively sharp sound.|http://www.dictionary.com/browse/hiccup
hide|verb|to conceal from sight; prevent from being seen or discovered|http://www.dictionary.com/browse/hide
highly|adverb|in or to a high degree; extremely|http://www.dictionary.com/browse/highly
hike|verb|to walk or march a great distance, especially through rural areas, for pleasure, exercise, military training, or the like.|http://www.dictionary.com/browse/hike
hill|noun|a natural elevation of the earth's surface, smaller than a mountain.|http://www.dictionary.com/browse/hill
hinder|verb|to cause delay, interruption, or difficulty in; hamper; impede|http://www.dictionary.com/browse/hinder
hint|noun|an indirect, covert, or helpful suggestion; clue|http://www.dictionary.com/browse/hint
hiss|verb|to make or emit a sharp sound like that of the letter s prolonged, as a snake does, or as steam does when forced under pressure through a small opening.|http://www.dictionary.com/browse/hiss
history|noun|the branch of knowledge dealing with past events.|http://www.dictionary.com/browse/history
hitch|verb|to fasten or tie, especially temporarily, by means of a hook, rope, strap, etc.; tether|http://www.dictionary.com/browse/hitch
hit|verb|to deal a blow or stroke to|http://www.dictionary.com/browse/hit
hoard|noun|a supply or accumulation that is hidden or carefully guarded for preservation, future use, etc.|http://www.dictionary.com/browse/hoard
hobbies|noun|an activity or interest pursued for pleasure or relaxation and not as a main occupation|http://www.dictionary.com/browse/hobbies
hobble|verb|to walk lamely; limp.|http://www.dictionary.com/browse/hobble
hog|noun|a hoofed mammal of the family Suidae, order Artiodactyla, comprising boars and swine.|http://www.dictionary.com/browse/hog
hoist|verb|to raise or lift, especially by some mechanical appliance|http://www.dictionary.com/browse/hoist
hold|verb|to have or keep in the hand; keep fast; grasp|http://www.dictionary.com/browse/hold
hole|noun|an opening through something; gap; aperture|http://www.dictionary.com/browse/hole
holiday|noun|a day fixed by law or custom on which ordinary business is suspended in commemoration of some event or in honor of some person.|http://www.dictionary.com/browse/holiday
holler|verb|to cry aloud; shout; yell|http://www.dictionary.com/browse/holler
home|noun|a house, apartment, or other shelter that is the usual residence of a person, family, or household.|http://www.dictionary.com/browse/home
honestly|adverb|in an honest manner.|http://www.dictionary.com/browse/honestly
honey|noun|a sweet, viscid fluid produced by bees from the nectar collected from flowers, and stored in nests or hives as food.|http://www.dictionary.com/browse/honey
hone|noun|a whetstone of fine, compact texture for sharpening razors and other cutting tools.|http://www.dictionary.com/browse/hone
honk|noun|the cry of a goose.|http://www.dictionary.com/browse/honk
hook|noun|a curved or angular piece of metal or other hard substance for catching, pulling, holding, or suspending something.|http://www.dictionary.com/browse/hook
hook|noun|a curved or angular piece of metal or other hard substance for catching, pulling, holding, or suspending something.|http://www.dictionary.com/browse/hook
hoot|verb|to cry out or shout, especially in disapproval or derision.|http://www.dictionary.com/browse/hoot
hopelessly|adjective|providing no hope; beyond optimism or hope; desperate|http://www.dictionary.com/browse/hopelessly
hope|noun|the feeling that what is wanted can be had or that events will turn out for the best|http://www.dictionary.com/browse/hope
hope|noun|the feeling that what is wanted can be had or that events will turn out for the best|http://www.dictionary.com/browse/hope
hop|verb|to make a short, bouncing leap; move by leaping with all feet off the ground.|http://www.dictionary.com/browse/hop
horn|noun|one of the bony, permanent, hollow paired growths, often curved and pointed, that project from the upper part of the head of certain ungulate mammals, as cattle, sheep, goats, or antelopes.|http://www.dictionary.com/browse/horn
horrify|verb|to cause to feel horror; strike with horror|http://www.dictionary.com/browse/horrify
horses|noun|a large, solid-hoofed, herbivorous quadruped, Equus caballus, domesticated since prehistoric times, bred in a number of varieties, and  for carrying or pulling loads, for riding, and for racing.|http://www.dictionary.com/browse/horses
horse|noun|a large, solid-hoofed, herbivorous quadruped, Equus caballus, domesticated since prehistoric times, bred in a number of varieties, and  for carrying or pulling loads, for riding, and for racing.|http://www.dictionary.com/browse/horse
hose|noun|a flexible tube for conveying a liquid, as water, to a desired point|http://www.dictionary.com/browse/hose
hospital|noun|an institution in which sick or injured persons are given medical or surgical treatment.|http://www.dictionary.com/browse/hospital
hot|adjective|having or giving off heat; having a high temperature|http://www.dictionary.com/browse/hot
hound|noun|one of any of several breeds of dogs trained to pursue game either by sight or by scent, especially one with a long face and large drooping ears.|http://www.dictionary.com/browse/hound
hourly|adjective|of, pertaining to, occurring, or done each successive hour|http://www.dictionary.com/browse/hourly
hour|noun|a period of time equal to one twenty-fourth of a mean solar or civil day and equivalent to 60 minutes|http://www.dictionary.com/browse/hour
houses|noun|a building in which people live; residence for human beings.|http://www.dictionary.com/browse/houses
house|noun|a building in which people live; residence for human beings.|http://www.dictionary.com/browse/house
hover|verb|to hang fluttering or suspended in the air|http://www.dictionary.com/browse/hover
howl|verb|to utter a loud, prolonged, mournful cry, as that of a dog or wolf.|http://www.dictionary.com/browse/howl
huddle|verb|to gather or crowd together in a close mass.|http://www.dictionary.com/browse/huddle
huff|noun|a mood of sulking anger; a fit of resentment|http://www.dictionary.com/browse/huff
hug|verb|to clasp tightly in the arms, especially with affection; embrace.|http://www.dictionary.com/browse/hug
humiliate|verb|to cause (a person) a painful loss of pride, self-respect, or dignity; mortify.|http://www.dictionary.com/browse/humiliate
humor|noun|a comic, absurd, or incongruous quality causing amusement|http://www.dictionary.com/browse/humor
humor|noun|a comic, absurd, or incongruous quality causing amusement|http://www.dictionary.com/browse/humor
humour|noun, verb|humor.|http://www.dictionary.com/browse/humour
hum|verb|to make a low, continuous, droning sound.|http://www.dictionary.com/browse/hum
hunch|verb|to thrust out or up in a hump; arch|http://www.dictionary.com/browse/hunch
hungrily|adjective|having a desire, craving, or need for food; feeling hunger.|http://www.dictionary.com/browse/hungrily
hunt|verb|to chase or search for (game or other wild animals) for the purpose of catching or killing.|http://www.dictionary.com/browse/hunt
hurl|verb|to throw or fling with great force or vigor.|http://www.dictionary.com/browse/hurl
hurrah|interjection|( as an exclamation of joy, exultation, appreciation, encouragement, or the like.)|http://www.dictionary.com/browse/hurrah
hurry|verb|to move, proceed, or act with haste (often followed by up)|http://www.dictionary.com/browse/hurry
hurtle|verb|to rush violently; move with great speed|http://www.dictionary.com/browse/hurtle
hurt|verb|to cause bodily injury to; injure|http://www.dictionary.com/browse/hurt
hush|interjection|( as a command to be silent or quiet.)|http://www.dictionary.com/browse/hush
hustle|verb|to proceed or work rapidly or energetically|http://www.dictionary.com/browse/hustle
hydrant|noun|an upright pipe with a spout, nozzle, or other outlet, usually in the street, for drawing water from a main or service pipe, especially for fighting fires.|http://www.dictionary.com/browse/hydrant
hypnotize|verb|to put in the hypnotic state.|http://www.dictionary.com/browse/hypnotize
ice|noun|the solid form of water, produced by freezing; frozen water.|http://www.dictionary.com/browse/ice
icicle|noun|a pendent, tapering mass of ice formed by the freezing of dripping water.|http://www.dictionary.com/browse/icicle
idealize|verb|to make ideal; represent in an ideal form or character; exalt to an ideal perfection or excellence.|http://www.dictionary.com/browse/idealize
idea|noun|any conception existing in the mind as a result of mental understanding, awareness, or activity.|http://www.dictionary.com/browse/idea
idea|noun|any conception existing in the mind as a result of mental understanding, awareness, or activity.|http://www.dictionary.com/browse/idea
identify|verb|to recognize or establish as being a particular person or thing; verify the identity of|http://www.dictionary.com/browse/identify
idolize|verb|to regard with blind adoration, devotion, etc.|http://www.dictionary.com/browse/idolize
ignite|verb|to set on fire; kindle.|http://www.dictionary.com/browse/ignite
ignore|verb|to refrain from noticing or recognizing|http://www.dictionary.com/browse/ignore
illuminate|verb|to supply or brighten with light; light up.|http://www.dictionary.com/browse/illuminate
illustrate|verb|to furnish (a book, magazine, etc.) with drawings, pictures, or other artwork intended for explanation, elucidation, or adornment.|http://www.dictionary.com/browse/illustrate
imagine|verb|to form a mental image of (something not actually present to the senses).|http://www.dictionary.com/browse/imagine
imbibe|verb|to consume (liquids) by drinking; drink|http://www.dictionary.com/browse/imbibe
imitate|verb|to follow or endeavor to follow as a model or example|http://www.dictionary.com/browse/imitate
immediately|adverb|without lapse of time; without delay; instantly; at once|http://www.dictionary.com/browse/immediately
immerse|verb|to plunge into or place under a liquid; dip; sink.|http://www.dictionary.com/browse/immerse
immolate|verb|to sacrifice.|http://www.dictionary.com/browse/immolate
impair|verb|to make or cause to become worse; diminish in ability, value, excellence, etc.; weaken or damage|http://www.dictionary.com/browse/impair
impale|verb|to fasten, stick, or fix upon a sharpened stake or the like.|http://www.dictionary.com/browse/impale
impart|verb|to make known; tell; relate; disclose|http://www.dictionary.com/browse/impart
impede|verb|to retard in movement or progress by means of obstacles or hindrances; obstruct; hinder.|http://www.dictionary.com/browse/impede
implant|verb|to put or fix firmly|http://www.dictionary.com/browse/implant
implore|verb|to beg urgently or piteously, as for aid or mercy; beseech; entreat|http://www.dictionary.com/browse/implore
imply|verb|to indicate or suggest without being explicitly stated|http://www.dictionary.com/browse/imply
import|verb|to bring in (merchandise, commodities, workers, etc.) from a foreign country for use, sale, processing, reexport, or services.|http://www.dictionary.com/browse/import
impose|verb|to lay on or set as something to be borne, endured, obeyed, fulfilled, paid, etc.|http://www.dictionary.com/browse/impose
impress|verb|to affect deeply or strongly in mind or feelings; influence in opinion|http://www.dictionary.com/browse/impress
imprint|noun|a mark made by pressure; a mark or figure impressed or printed on something.|http://www.dictionary.com/browse/imprint
imprison|verb|to confine in or as if in a prison.|http://www.dictionary.com/browse/imprison
improve|verb|to bring into a more desirable or excellent condition|http://www.dictionary.com/browse/improve
improvise|verb|to compose and perform or deliver without previous preparation; extemporize|http://www.dictionary.com/browse/improvise
impulse|noun|the influence of a particular feeling, mental state, etc.|http://www.dictionary.com/browse/impulse
inaugurate|verb|to make a formal beginning of; initiate; commence; begin|http://www.dictionary.com/browse/inaugurate
inch|noun|a unit of length, 1/12 (0.0833) foot, equivalent to 2.54 centimeters.|http://www.dictionary.com/browse/inch
incline|verb|to deviate from the vertical or horizontal; slant.|http://www.dictionary.com/browse/incline
include|verb|to contain, as a whole does parts or any part or element|http://www.dictionary.com/browse/include
income|noun|the monetary payment received for goods or services, or from other sources, as rents or investments.|http://www.dictionary.com/browse/income
increase|verb|to make greater, as in number, size, strength, or quality; augment; add to|http://www.dictionary.com/browse/increase
increase|verb|to make greater, as in number, size, strength, or quality; augment; add to|http://www.dictionary.com/browse/increase
incriminate|verb|to accuse of or present proof of a crime or fault|http://www.dictionary.com/browse/incriminate
indent|verb|to form deep recesses in|http://www.dictionary.com/browse/indent
indicate|verb|to be a sign of; betoken; evidence; show|http://www.dictionary.com/browse/indicate
induce|verb|to lead or move by persuasion or influence, as to some action or state of mind|http://www.dictionary.com/browse/induce
indulge|verb|to yield to an inclination or desire; allow oneself to follow one's will (often followed by in)|http://www.dictionary.com/browse/indulge
industry|noun|the aggregate of manufacturing or technically productive enterprises in a particular field, often named after its principal product|http://www.dictionary.com/browse/industry
infect|verb|to affect or contaminate (a person, organ, wound, etc.) with disease-producing germs.|http://www.dictionary.com/browse/infect
infer|verb|to derive by reasoning; conclude or judge from premises or evidence|http://www.dictionary.com/browse/infer
infest|verb|to live in or overrun to an unwanted degree or in a troublesome manner, especially as predatory animals or vermin do|http://www.dictionary.com/browse/infest
inflame|verb|to kindle or excite (passions, desires, etc.).|http://www.dictionary.com/browse/inflame
inflate|verb|to distend; swell or puff out; dilate|http://www.dictionary.com/browse/inflate
inflect|verb|to modulate (the voice).|http://www.dictionary.com/browse/inflect
influence|noun|the capacity or power of persons or things to be a compelling force on or produce effects on the actions, behavior, opinions, etc., of others|http://www.dictionary.com/browse/influence
inform|verb|to give or impart knowledge of a fact or circumstance to|http://www.dictionary.com/browse/inform
infuse|verb|to introduce, as if by pouring; cause to penetrate; instill (usually followed by into)|http://www.dictionary.com/browse/infuse
ingest|verb|to take, as food, into the body (opposed to egest).|http://www.dictionary.com/browse/ingest
inhale|verb|to breathe in; draw in by breathing|http://www.dictionary.com/browse/inhale
initiate|verb|to begin, set going, or originate|http://www.dictionary.com/browse/initiate
inject|verb|to force (a fluid) into a passage, cavity, or tissue|http://www.dictionary.com/browse/inject
injure|verb|to do or cause harm of any kind to; damage; hurt; impair|http://www.dictionary.com/browse/injure
ink|noun|a fluid or viscous substance  for writing or printing.|http://www.dictionary.com/browse/ink
ink|noun|a fluid or viscous substance  for writing or printing.|http://www.dictionary.com/browse/ink
innocently|adjective|free from moral wrong; without sin; pure|http://www.dictionary.com/browse/innocently
inquire|verb|to seek information by questioning; ask|http://www.dictionary.com/browse/inquire
inquisitively|adjective|given to inquiry, research, or asking questions; eager for knowledge; intellectually curious|http://www.dictionary.com/browse/inquisitively
inscribe|verb|to address or dedicate (a book, photograph, etc.) informally to a person, especially by writing a brief personal note in or on it.|http://www.dictionary.com/browse/inscribe
insect|noun|any animal of the class Insecta, comprising small, air-breathing arthropods having the body divided into three parts (head, thorax, and abdomen), and having three pairs of legs and usually two pairs of wings.|http://www.dictionary.com/browse/insect
insert|verb|to put or place in|http://www.dictionary.com/browse/insert
insinuate|verb|to suggest or hint slyly|http://www.dictionary.com/browse/insinuate
insist|verb|to be emphatic, firm, or resolute on some matter of desire, demand, intention, etc.|http://www.dictionary.com/browse/insist
inspect|verb|to look carefully at or over; view closely and critically|http://www.dictionary.com/browse/inspect
inspire|verb|to fill with an animating, quickening, or exalting influence|http://www.dictionary.com/browse/inspire
install|verb|to place in position or connect for service or use|http://www.dictionary.com/browse/install
instantly|adverb|immediately; at once.|http://www.dictionary.com/browse/instantly
instigate|verb|to cause by incitement; foment|http://www.dictionary.com/browse/instigate
instruct|verb|to furnish with knowledge, especially by a systematic method; teach; train; educate.|http://www.dictionary.com/browse/instruct
instrument|noun|a mechanical tool or implement, especially one  for delicate or precision work|http://www.dictionary.com/browse/instrument
insult|verb|to treat or speak to insolently or with contemptuous rudeness; affront.|http://www.dictionary.com/browse/insult
insurance|noun|the act, system, or business of insuring property, life, one's person, etc., against loss or harm arising in specified contingencies, as fire, accident, death, disablement, or the like, in consideration of a payment proportionate to the risk involved.|http://www.dictionary.com/browse/insurance
intensely|adjective|existing or occurring in a high or extreme degree|http://www.dictionary.com/browse/intensely
intently|adjective|firmly or steadfastly fixed or directed, as the eyes or mind|http://www.dictionary.com/browse/intently
interact|verb|to act one upon another.|http://www.dictionary.com/browse/interact
intercept|verb|to take, seize, or halt (someone or something on the way from one place to another); cut off from an intended destination|http://www.dictionary.com/browse/intercept
interestingly|adjective|engaging or exciting and holding the attention or curiosity|http://www.dictionary.com/browse/interestingly
interest|noun|the feeling of a person whose attention, concern, or curiosity is particularly engaged by something|http://www.dictionary.com/browse/interest
interfere|verb|to come into opposition, as one thing with another, especially with the effect of hampering action or procedure (often followed by with)|http://www.dictionary.com/browse/interfere
interject|verb|to insert between other things|http://www.dictionary.com/browse/interject
interlace|verb|to cross one another, typically passing alternately over and under, as if woven together; intertwine|http://www.dictionary.com/browse/interlace
interlock|verb|to fit into each other, as parts of machinery, so that all action is synchronized.|http://www.dictionary.com/browse/interlock
interpret|verb|to give or provide the meaning of; explain; explicate; elucidate|http://www.dictionary.com/browse/interpret
interrogate|verb|to ask questions of (a person), sometimes to seek answers or information that the person questioned considers personal or secret.|http://www.dictionary.com/browse/interrogate
interrupt|verb|to cause or make a break in the continuity or uniformity of (a course, process, condition, etc.).|http://www.dictionary.com/browse/interrupt
intertwine|verb|to twine together.|http://www.dictionary.com/browse/intertwine
intervene|verb|to come between disputing people, groups, etc.; intercede; mediate.|http://www.dictionary.com/browse/intervene
interview|noun|a formal meeting in which one or more persons question, consult, or evaluate another person|http://www.dictionary.com/browse/interview
intone|verb|to utter with a particular tone or voice modulation.|http://www.dictionary.com/browse/intone
introduce|verb|to present (a person) to another so as to make acquainted.|http://www.dictionary.com/browse/introduce
invention|noun|the act of inventing.|http://www.dictionary.com/browse/invention
inventory|noun|a complete listing of merchandise or stock on hand, work in progress, raw materials, finished goods on hand, etc., made each year by a business concern.|http://www.dictionary.com/browse/inventory
invent|verb|to originate or create as a product of one's own ingenuity, experimentation, or contrivance|http://www.dictionary.com/browse/invent
invert|verb|to turn upside down.|http://www.dictionary.com/browse/invert
investigate|verb|to examine, study, or inquire into systematically; search or examine into the particulars of; examine in detail.|http://www.dictionary.com/browse/investigate
invite|verb|to request the presence or participation of in a kindly, courteous, or complimentary way, especially to request to come or go to some place, gathering, entertainment, etc., or to do something|http://www.dictionary.com/browse/invite
invoke|verb|to call for with earnest desire; make supplication or pray for|http://www.dictionary.com/browse/invoke
inwardly|adverb|in or on, or with reference to, the inside or inner part; internally.|http://www.dictionary.com/browse/inwardly
iron|noun|Chemistry. a ductile, malleable, silver-white metallic element, scarcely known in a pure condition, but much  in its crude or impure carbon-containing forms for making tools, implements, machinery, etc. Symbol|http://www.dictionary.com/browse/iron
irritably|adjective|easily irritated or annoyed; readily excited to impatience or anger.|http://www.dictionary.com/browse/irritably
irritate|verb|to excite to impatience or anger; annoy.|http://www.dictionary.com/browse/irritate
island|noun|a tract of land completely surrounded by water, and not large enough to be called a continent.|http://www.dictionary.com/browse/island
iterate|verb|to utter again or repeatedly.|http://www.dictionary.com/browse/iterate
jabber|verb|to talk or utter rapidly, indistinctly, incoherently, or nonsensically; chatter.|http://www.dictionary.com/browse/jabber
jab|verb|to poke, or thrust abruptly or sharply, as with the end or point of a stick.|http://www.dictionary.com/browse/jab
jaggedly|adjective|having ragged notches, points, or teeth; zigzag|http://www.dictionary.com/browse/jaggedly
jail|noun|a prison, especially one for the detention of persons awaiting trial or convicted of minor offenses.|http://www.dictionary.com/browse/jail
jam|verb|to press, squeeze, or wedge tightly between bodies or surfaces, so that motion or extrication is made difficult or impossible|http://www.dictionary.com/browse/jam
jam|verb|to press, squeeze, or wedge tightly between bodies or surfaces, so that motion or extrication is made difficult or impossible|http://www.dictionary.com/browse/jam
jangle|verb|to produce a harsh, discordant sound, as two comparatively small, thin, or hollow pieces of metal hitting together|http://www.dictionary.com/browse/jangle
jar|noun|a broad-mouthed container, usually cylindrical and of glass or earthenware|http://www.dictionary.com/browse/jar
jealously|adjective|feeling resentment against someone because of that person's rivalry, success, or advantages (often followed by of)|http://www.dictionary.com/browse/jealously
jeer|verb|to speak or shout derisively; scoff or gibe rudely|http://www.dictionary.com/browse/jeer
jellyfish|noun|any of various marine coelenterates of a soft, gelatinous structure, especially one with an umbrellalike body and long, trailing tentacles; medusa.|http://www.dictionary.com/browse/jellyfish
jelly|noun|a food preparation of a soft, elastic consistency due to the presence of gelatin, pectin, etc., especially fruit juice boiled down with sugar and  as a sweet spread for bread and toast, as a filling for cakes or doughnuts, etc.|http://www.dictionary.com/browse/jelly
jerk|noun|a quick, sharp pull, thrust, twist, throw, or the like; a sudden movement|http://www.dictionary.com/browse/jerk
jest|noun|a joke or witty remark; witticism.|http://www.dictionary.com/browse/jest
jewel|noun|a cut and polished precious stone; gem.|http://www.dictionary.com/browse/jewel
jibe|verb|to shift from one side to the other when running before the wind, as a fore-and-aft sail or its boom.|http://www.dictionary.com/browse/jibe
jiggle|verb|to move up and down or to and fro with short, quick jerks.|http://www.dictionary.com/browse/jiggle
jingle|verb|to make clinking or tinkling sounds, as do coins, keys, or other light, resonant metal objects when coming into contact or being struck together repeatedly|http://www.dictionary.com/browse/jingle
jog|verb|to move or shake with a push or jerk|http://www.dictionary.com/browse/jog
join|verb|to bring in contact, connect, or bring or put together|http://www.dictionary.com/browse/join
join|verb|to bring in contact, connect, or bring or put together|http://www.dictionary.com/browse/join
joke|noun|something said or done to provoke laughter or cause amusement, as a witticism, a short and amusing anecdote, or a prankish act|http://www.dictionary.com/browse/joke
joke|noun|something said or done to provoke laughter or cause amusement, as a witticism, a short and amusing anecdote, or a prankish act|http://www.dictionary.com/browse/joke
jolt|verb|to jar, shake, or cause to move by or as if by a sudden rough thrust; shake up roughly|http://www.dictionary.com/browse/jolt
jostle|verb|to bump, push, shove, brush against, or elbow roughly or rudely.|http://www.dictionary.com/browse/jostle
journey|noun|a traveling from one place to another, usually taking a rather long time; trip|http://www.dictionary.com/browse/journey
jovially|adjective|endowed with or characterized by a hearty, joyous humor or a spirit of good-fellowship|http://www.dictionary.com/browse/jovially
joyfully|adjective|full of joy, as a person or one's heart; glad; delighted.|http://www.dictionary.com/browse/joyfully
joyously|adjective|joyful; happy; jubilant|http://www.dictionary.com/browse/joyously
jubilantly|adjective|showing great joy, satisfaction, or triumph; rejoicing; exultant|http://www.dictionary.com/browse/jubilantly
judge|noun|a public officer authorized to hear and decide cases in a court of law; a magistrate charged with the administration of justice.|http://www.dictionary.com/browse/judge
judge|noun|a public officer authorized to hear and decide cases in a court of law; a magistrate charged with the administration of justice.|http://www.dictionary.com/browse/judge
juggle|verb|to keep (several objects, as balls, plates, tenpins, or knives) in continuous motion in the air simultaneously by tossing and catching.|http://www.dictionary.com/browse/juggle
juice|noun|the natural fluid, fluid content, or liquid part that can be extracted from a plant or one of its parts, especially of a fruit|http://www.dictionary.com/browse/juice
jumble|verb|to mix in a conf mass; put or throw together without order|http://www.dictionary.com/browse/jumble
jump|verb|to spring clear of the ground or other support by a sudden muscular effort; leap|http://www.dictionary.com/browse/jump
jump|verb|to spring clear of the ground or other support by a sudden muscular effort; leap|http://www.dictionary.com/browse/jump
justify|verb|to show (an act, claim, statement, etc.) to be just or right|http://www.dictionary.com/browse/justify
justly|adverb|in a just manner; honestly; fairly|http://www.dictionary.com/browse/justly
jut|verb|to extend beyond the main body or line; project; protrude (often followed by out)|http://www.dictionary.com/browse/jut
keenly|adjective|finely sharpened, as an edge; so shaped as to cut or pierce substances readily|http://www.dictionary.com/browse/keenly
keen|adjective|finely sharpened, as an edge; so shaped as to cut or pierce substances readily|http://www.dictionary.com/browse/keen
keep|verb|to hold or retain in one's possession; hold as one's own|http://www.dictionary.com/browse/keep
kettle|noun|a metal container in which to boil liquids, cook foods, etc.; pot.|http://www.dictionary.com/browse/kettle
key|noun|a small metal instrument specially cut to fit into a lock and move its bolt.|http://www.dictionary.com/browse/key
kick|verb|to strike with the foot or feet|http://www.dictionary.com/browse/kick
kick|verb|to strike with the foot or feet|http://www.dictionary.com/browse/kick
kiddingly|verb|to talk or deal jokingly with; banter; jest with|http://www.dictionary.com/browse/kiddingly
kid|noun|Informal. a child or young person.|http://www.dictionary.com/browse/kid
kill|verb|to deprive of life in any manner; cause the death of; slay.Synonyms|http://www.dictionary.com/browse/kill
kindheartedly|adjective|having or showing sympathy or kindness|http://www.dictionary.com/browse/kindheartedly
kindly|adjective|having, showing, or proceeding from a benevolent disposition or spirit; kindhearted|http://www.dictionary.com/browse/kindly
kissingly|adverb|lightly; gently.|http://www.dictionary.com/browse/kissingly
kiss|verb|to touch or press with the lips slightly pursed, and then often to part them and to emit a smacking sound, in an expression of affection, love, greeting, reverence, etc.|http://www.dictionary.com/browse/kiss
kiss|verb|to touch or press with the lips slightly pursed, and then often to part them and to emit a smacking sound, in an expression of affection, love, greeting, reverence, etc.|http://www.dictionary.com/browse/kiss
kite|noun|a light frame covered with some thin material, to be flown in the wind at the end of a long string.|http://www.dictionary.com/browse/kite
kittens|noun|a young cat.|http://www.dictionary.com/browse/kittens
kitten|noun|a young cat.|http://www.dictionary.com/browse/kitten
kitty|noun|a kitten.|http://www.dictionary.com/browse/kitty
knavishly|adjective|like or befitting a knave; untrustworthy; dishonest.|http://www.dictionary.com/browse/knavishly
knead|verb|to work (dough, clay, etc.) into a uniform mixture by pressing, folding, and stretching.|http://www.dictionary.com/browse/knead
kneel|verb|to go down or rest on the knees or a knee.|http://www.dictionary.com/browse/kneel
knee|noun|Anatomy. the joint of the leg that allows for movement between the femur and tibia and is protected by the patella; the central area of the leg between the thigh and the lower leg.|http://www.dictionary.com/browse/knee
knee|noun|Anatomy. the joint of the leg that allows for movement between the femur and tibia and is protected by the patella; the central area of the leg between the thigh and the lower leg.|http://www.dictionary.com/browse/knee
knife|noun|an instrument for cutting, consisting essentially of a thin, sharp-edged, metal blade fitted with a handle.|http://www.dictionary.com/browse/knife
knit|verb|to make (a garment, fabric, etc.) by interlocking loops of one or more yarns either by hand with knitting needles or by machine.|http://www.dictionary.com/browse/knit
knock|verb|to strike a sounding blow with the fist, knuckles, or anything hard, especially on a door, window, or the like, as in seeking admittance, calling attention, or giving a signal|http://www.dictionary.com/browse/knock
knottily|adjective|having knots; full of knots|http://www.dictionary.com/browse/knottily
knot|noun|an interlacing, twining, looping, etc., of a cord, rope, or the like, drawn tight into a knob or lump, for fastening, binding, or connecting two cords together or a cord to something else.|http://www.dictionary.com/browse/knot
knot|noun|an interlacing, twining, looping, etc., of a cord, rope, or the like, drawn tight into a knob or lump, for fastening, binding, or connecting two cords together or a cord to something else.|http://www.dictionary.com/browse/knot
knowingly|adjective|affecting, implying, or deliberately revealing shrewd knowledge of secret or private information|http://www.dictionary.com/browse/knowingly
knowledgeably|adjective|possessing or exhibiting knowledge, insight, or understanding; intelligent; well-informed; discerning; perceptive.|http://www.dictionary.com/browse/knowledgeably
knowledge|noun|acquaintance with facts, truths, or principles, as from study or investigation; general erudition|http://www.dictionary.com/browse/knowledge
know|verb|to perceive or understand as fact or truth; to apprehend clearly and with certainty|http://www.dictionary.com/browse/know
kowtow|verb|to act in an obsequious manner; show servile deference.|http://www.dictionary.com/browse/kowtow
label|noun|a slip of paper, cloth, or other material, marked or inscribed, for attachment to something to indicate its manufacturer, nature, ownership, destination, etc.|http://www.dictionary.com/browse/label
laborer|noun|a person engaged in work that requires bodily strength rather than skill or training|http://www.dictionary.com/browse/laborer
lace|noun|a netlike ornamental fabric made of threads by hand or machine.|http://www.dictionary.com/browse/lace
lace|noun|a netlike ornamental fabric made of threads by hand or machine.|http://www.dictionary.com/browse/lace
ladybug|noun|any of numerous small, round, often brightly colored and spotted beetles of the family Coccinellidae, feeding chiefly on aphids and other small insects, but including several forms that feed on plants.|http://www.dictionary.com/browse/ladybug
lake|noun|a body of fresh or salt water of considerable size, surrounded by land.|http://www.dictionary.com/browse/lake
lament|verb|to feel or express sorrow or regret for|http://www.dictionary.com/browse/lament
lamp|noun|any of various devices furnishing artificial light, as by electricity or gas.|http://www.dictionary.com/browse/lamp
land|noun|any part of the earth's surface not covered by a body of water; the part of the earth's surface occupied by continents and islands|http://www.dictionary.com/browse/land
land|noun|any part of the earth's surface not covered by a body of water; the part of the earth's surface occupied by continents and islands|http://www.dictionary.com/browse/land
language|noun|a body of words and the systems for their use common to a people who are of the same community or nation, the same geographical area, or the same cultural tradition|http://www.dictionary.com/browse/language
languish|verb|to be or become weak or feeble; droop; fade.|http://www.dictionary.com/browse/languish
lap|noun|the front part of the human body from the waist to the knees when in a sitting position.|http://www.dictionary.com/browse/lap
lash|noun|the flexible part of a whip; the section of cord or the like forming the extremity of a whip.|http://www.dictionary.com/browse/lash
latch|noun|a device for holding a door, gate, or the like, closed, consisting basically of a bar falling or sliding into a catch, groove, hole, etc.|http://www.dictionary.com/browse/latch
lather|noun|foam or froth made by a detergent, especially soap, when stirred or rubbed in water, as by a brush  in shaving or by hands in washing.|http://www.dictionary.com/browse/lather
laud|verb|to praise; extol.|http://www.dictionary.com/browse/laud
laugh|verb|to express mirth, pleasure, derision, or nervousness with an audible, vocal expulsion of air from the lungs that can range from a loud burst of sound to a series of quiet chuckles and is usually accompanied by characteristic facial and bodily movements.|http://www.dictionary.com/browse/laugh
laugh|verb|to express mirth, pleasure, derision, or nervousness with an audible, vocal expulsion of air from the lungs that can range from a loud burst of sound to a series of quiet chuckles and is usually accompanied by characteristic facial and bodily movements.|http://www.dictionary.com/browse/laugh
launch|verb|to set (a boat or ship) in the water.|http://www.dictionary.com/browse/launch
lavish|adjective|expended, bestowed, or occurring in profusion|http://www.dictionary.com/browse/lavish
lawyer|noun|a person whose profession is to represent clients in a court of law or to advise or act for clients in other legal matters.|http://www.dictionary.com/browse/lawyer
lay|verb|to put or place in a horizontal position or position of rest; set down|http://www.dictionary.com/browse/lay
lazily|adjective|averse or disinclined to work, activity, or exertion; indolent.|http://www.dictionary.com/browse/lazily
lead|verb|to go before or with to show the way; conduct or escort|http://www.dictionary.com/browse/lead
lead|verb|to go before or with to show the way; conduct or escort|http://www.dictionary.com/browse/lead
leaf|noun|one of the expanded, usually green organs borne by the stem of a plant.|http://www.dictionary.com/browse/leaf
leaf|noun|one of the expanded, usually green organs borne by the stem of a plant.|http://www.dictionary.com/browse/leaf
lean|verb|to incline or bend from a vertical position|http://www.dictionary.com/browse/lean
leap|verb|to spring through the air from one point or position to another; jump|http://www.dictionary.com/browse/leap
learning|noun|knowledge acquired by systematic study in any field of scholarly application.|http://www.dictionary.com/browse/learning
leather|noun|the skin of an animal, with the hair removed, prepared for use by tanning or a similar process designed to preserve it against decay and make it pliable or supple when dry.|http://www.dictionary.com/browse/leather
leave|verb|to go out of or away from, as a place|http://www.dictionary.com/browse/leave
lecture|noun|a speech read or delivered before an audience or class, especially for instruction or to set forth some subject|http://www.dictionary.com/browse/lecture
leer|verb|to look with a sideways or oblique glance, especially suggestive of lascivious interest or sly and malicious intention|http://www.dictionary.com/browse/leer
legs|noun|either of the two lower limbs of a biped, as a human being, or any of the paired limbs of an animal, arthropod, etc., that support and move the body.|http://www.dictionary.com/browse/legs
leg|noun|either of the two lower limbs of a biped, as a human being, or any of the paired limbs of an animal, arthropod, etc., that support and move the body.|http://www.dictionary.com/browse/leg
lend|verb|to grant the use of (something) on condition that it or its equivalent will be returned.|http://www.dictionary.com/browse/lend
lengthen|verb|to make longer; make greater in length.|http://www.dictionary.com/browse/lengthen
less|adverb|to a smaller extent, amount, or degree|http://www.dictionary.com/browse/less
letters|noun|a written or printed communication addressed to a person or organization and usually transmitted by mail.|http://www.dictionary.com/browse/letters
letter|noun|a written or printed communication addressed to a person or organization and usually transmitted by mail.|http://www.dictionary.com/browse/letter
lettuce|noun|a cultivated plant, Lactuca sativa, occurring in many varieties and having succulent leaves  for salads.|http://www.dictionary.com/browse/lettuce
let|verb|to allow or permit|http://www.dictionary.com/browse/let
level|adjective|having no part higher than another; having a flat or even surface.|http://www.dictionary.com/browse/level
level|adjective|having no part higher than another; having a flat or even surface.|http://www.dictionary.com/browse/level
library|noun|a place set apart to contain books, periodicals, and other material for reading, viewing, listening, study, or reference, as a room, set of rooms, or building where books may be read or borrowed.|http://www.dictionary.com/browse/library
license|noun|formal permission from a governmental or other constituted authority to do something, as to carry on some business or profession.|http://www.dictionary.com/browse/license
lick|verb|to pass the tongue over the surface of, as to moisten, taste, or eat (often followed by up, off, from, etc.)|http://www.dictionary.com/browse/lick
lie|noun|a false statement made with deliberate intent to deceive; an intentional untruth; a falsehood.Synonyms|http://www.dictionary.com/browse/lie
lift|verb|to move or bring (something) upward from the ground or other support to a higher position; hoist.|http://www.dictionary.com/browse/lift
lift|verb|to move or bring (something) upward from the ground or other support to a higher position; hoist.|http://www.dictionary.com/browse/lift
lighten|verb|to become lighter or less dark; brighten|http://www.dictionary.com/browse/lighten
lightly|adverb|with little weight, force, intensity, etc.; gently|http://www.dictionary.com/browse/lightly
light|noun|something that makes things visible or affords illumination|http://www.dictionary.com/browse/light
light|noun|something that makes things visible or affords illumination|http://www.dictionary.com/browse/light
likely|adjective|probably or apparently destined (usually followed by an infinitive)|http://www.dictionary.com/browse/likely
like|adjective|of the same form, appearance, kind, character, amount, etc.|http://www.dictionary.com/browse/like
lilt|noun|rhythmic swing or cadence.|http://www.dictionary.com/browse/lilt
limit|noun|the final, utmost, or furthest boundary or point as to extent, amount, continuance, procedure, etc.|http://www.dictionary.com/browse/limit
limply|adjective|lacking stiffness or firmness, as of substance, fiber, structure, or bodily frame|http://www.dictionary.com/browse/limply
limp|verb|to walk with a labored, jerky movement, as when lame.|http://www.dictionary.com/browse/limp
linen|noun|fabric woven from flax yarns.|http://www.dictionary.com/browse/linen
line|noun|a mark or stroke long in proportion to its breadth, made with a pen, pencil, tool, etc., on a surface|http://www.dictionary.com/browse/line
linger|verb|to remain or stay on in a place longer than is usual or expected, as if from reluctance to leave|http://www.dictionary.com/browse/linger
lip|noun|either of the two fleshy parts or folds forming the margins of the mouth and functioning in speech.|http://www.dictionary.com/browse/lip
liquid|adjective|composed of molecules that move freely among themselves but do not tend to separate like those of gases; neither gaseous nor solid.|http://www.dictionary.com/browse/liquid
lisp|noun|a speech defect consisting in pronouncing s and z like or nearly like the th- sounds of thin and this, respectively.|http://www.dictionary.com/browse/lisp
listen|verb|to give attention with the ear; attend closely for the purpose of hearing; give ear.|http://www.dictionary.com/browse/listen
list|noun|a series of names or other items written or printed together in a meaningful grouping or sequence so as to constitute a record|http://www.dictionary.com/browse/list
list|noun|a series of names or other items written or printed together in a meaningful grouping or sequence so as to constitute a record|http://www.dictionary.com/browse/list
lively|adjective|full or suggestive of life or vital energy; active, vigorous, or brisk|http://www.dictionary.com/browse/lively
live|verb|to have life, as an organism; be alive; be capable of vital functions|http://www.dictionary.com/browse/live
lizards|noun|any of numerous scaly reptiles of the suborder Sauria, order Squamata, typically having a moderately elongate body, a tapering tail, and two pairs of legs held outward from the body, comprising mostly terrestrial and burrowing species.|http://www.dictionary.com/browse/lizards
load|noun|anything put in or on something for conveyance or transportation; freight; cargo|http://www.dictionary.com/browse/load
loaf|noun|a portion of bread or cake baked in a mass, usually oblong with a rounded top.|http://www.dictionary.com/browse/loaf
loaf|noun|a portion of bread or cake baked in a mass, usually oblong with a rounded top.|http://www.dictionary.com/browse/loaf
lob|verb|Tennis. to hit (a ball) in a high arc to the back of the opponent's court.|http://www.dictionary.com/browse/lob
locate|verb|to identify or discover the place or location of|http://www.dictionary.com/browse/locate
locket|noun|a small case for a miniature portrait, a lock of hair, or other keepsake, usually worn on a necklace.|http://www.dictionary.com/browse/locket
lock|noun|a device for securing a door, gate, lid, drawer, or the like in position when closed, consisting of a bolt or system of bolts propelled and withdrawn by a mechanism operated by a key, dial, etc.|http://www.dictionary.com/browse/lock
lock|noun|a device for securing a door, gate, lid, drawer, or the like in position when closed, consisting of a bolt or system of bolts propelled and withdrawn by a mechanism operated by a key, dial, etc.|http://www.dictionary.com/browse/lock
loftily|adjective|extending high in the air; of imposing height; towering|http://www.dictionary.com/browse/loftily
log|noun|a portion or length of the trunk or of a large limb of a felled tree.|http://www.dictionary.com/browse/log
loiter|verb|to linger aimlessly or as if aimless in or about a place|http://www.dictionary.com/browse/loiter
loll|verb|to recline or lean in a relaxed, lazy, or indolent manner; lounge|http://www.dictionary.com/browse/loll
longingly|noun|strong, persistent desire or craving, especially for something unattainable or distant|http://www.dictionary.com/browse/longingly
long|adjective|having considerable linear extent in space|http://www.dictionary.com/browse/long
look|verb|to turn one's eyes toward something or in some direction in order to see|http://www.dictionary.com/browse/look
look|verb|to turn one's eyes toward something or in some direction in order to see|http://www.dictionary.com/browse/look
loom|noun|a hand-operated or power-driven apparatus for weaving fabrics, containing harnesses, lay, reed, shuttles, treadles, etc.|http://www.dictionary.com/browse/loom
loop|noun|a portion of a cord, ribbon, etc., folded or doubled upon itself so as to leave an opening between the parts.|http://www.dictionary.com/browse/loop
loosely|adjective|free or released from fastening or attachment|http://www.dictionary.com/browse/loosely
loosen|verb|to unfasten or undo, as a bond or fetter.|http://www.dictionary.com/browse/loosen
lope|verb|to move or run with bounding steps, as a quadruped, or with a long, easy stride, as a person.|http://www.dictionary.com/browse/lope
lose|verb|to come to be without (something in one's possession or care), through accident, theft, etc., so that there is little or no prospect of recovery|http://www.dictionary.com/browse/lose
loss|noun|detriment, disadvantage, or deprivation from failure to keep, have, or get|http://www.dictionary.com/browse/loss
loudly|adjective|(of sound) strongly audible; having exceptional volume or intensity|http://www.dictionary.com/browse/loudly
lounge|verb|to pass time idly and indolently.|http://www.dictionary.com/browse/lounge
love|noun|a profoundly tender, passionate affection for another person.|http://www.dictionary.com/browse/love
love|noun|a profoundly tender, passionate affection for another person.|http://www.dictionary.com/browse/love
lovingly|adjective|feeling or showing love; warmly affectionate; fond|http://www.dictionary.com/browse/lovingly
lower|verb|to cause to descend; let or put down|http://www.dictionary.com/browse/lower
low|adjective|situated, placed, or occurring not far above the ground, floor, or base|http://www.dictionary.com/browse/low
loyally|adjective|faithful to one's sovereign, government, or state|http://www.dictionary.com/browse/loyally
lug|verb|to pull or carry with force or effort|http://www.dictionary.com/browse/lug
lull|verb|to put to sleep or rest by soothing means|http://www.dictionary.com/browse/lull
lumber|noun|timber sawed or split into planks, boards, etc.|http://www.dictionary.com/browse/lumber
lumber|noun|timber sawed or split into planks, boards, etc.|http://www.dictionary.com/browse/lumber
lunchroom|noun|a room, as in a school, where light meals or snacks can be bought or where food brought from home may be eaten.|http://www.dictionary.com/browse/lunchroom
lunch|noun|a light midday meal between breakfast and dinner; luncheon.|http://www.dictionary.com/browse/lunch
lunge|noun|a sudden forward thrust, as with a sword or knife; stab.|http://www.dictionary.com/browse/lunge
lurch|noun|an act or instance of swaying abruptly.|http://www.dictionary.com/browse/lurch
lure|noun|anything that attracts, entices, or allures.|http://www.dictionary.com/browse/lure
lurk|verb|to lie or wait in concealment, as a person in ambush; remain in or around a place secretly or furtively.|http://www.dictionary.com/browse/lurk
machine|noun|an apparatus consisting of interrelated parts with separate functions,  in the performance of some kind of work|http://www.dictionary.com/browse/machine
madly|adverb|insanely or wildly|http://www.dictionary.com/browse/madly
magic|noun|the art of producing illusions as entertainment by the use of sleight of hand, deceptive devices, etc.; legerdemain; conjuring|http://www.dictionary.com/browse/magic
maid|noun|a female servant.|http://www.dictionary.com/browse/maid
mailbox|noun|a public box in which mail is placed for pickup and delivery by the post office.|http://www.dictionary.com/browse/mailbox
maintain|verb|to keep in existence or continuance; preserve; retain|http://www.dictionary.com/browse/maintain
majestically|adjective|characterized by or possessing majesty; of lofty dignity or imposing aspect; stately; grand|http://www.dictionary.com/browse/majestically
make|verb|to bring into existence by shaping or changing material, combining parts, etc.|http://www.dictionary.com/browse/make
manager|noun|a person who has control or direction of an institution, business, etc., or of a part, division, or phase of it.|http://www.dictionary.com/browse/manager
manage|verb|to bring about or succeed in accomplishing, sometimes despite difficulty or hardship|http://www.dictionary.com/browse/manage
maneuver|noun|a planned and regulated movement or evolution of troops, warships, etc.|http://www.dictionary.com/browse/maneuver
mangle|verb|to injure severely, disfigure, or mutilate by cutting, slashing, or crushing|http://www.dictionary.com/browse/mangle
manhandle|verb|to handle roughly.|http://www.dictionary.com/browse/manhandle
manipulate|verb|to manage or influence skillfully, especially in an unfair manner|http://www.dictionary.com/browse/manipulate
manoeuvre|noun, verb|Chiefly British. maneuver.|http://www.dictionary.com/browse/manoeuvre
manufacture|noun|the making of goods or wares by manual labor or by machinery, especially on a large scale|http://www.dictionary.com/browse/manufacture
man|noun|an adult male person, as distinguished from a boy or a woman.|http://www.dictionary.com/browse/man
man|noun|an adult male person, as distinguished from a boy or a woman.|http://www.dictionary.com/browse/man
map|noun|a representation, usually on a flat surface, as of the features of an area of the earth or a portion of the heavens, showing them in their respective forms, sizes, and relationships according to some convention of representation|http://www.dictionary.com/browse/map
map|noun|a representation, usually on a flat surface, as of the features of an area of the earth or a portion of the heavens, showing them in their respective forms, sizes, and relationships according to some convention of representation|http://www.dictionary.com/browse/map
marble|noun|metamorphosed limestone, consisting chiefly of recrystallized calcite or dolomite, capable of taking a high polish, occurring in a wide range of colors and variegations and  in sculpture and architecture.|http://www.dictionary.com/browse/marble
march|verb|to walk with regular and measured tread, as soldiers on parade; advance in step in an organized body.|http://www.dictionary.com/browse/march
market|noun|an open place or a covered building where buyers and sellers convene for the sale of goods; a marketplace|http://www.dictionary.com/browse/market
market|noun|an open place or a covered building where buyers and sellers convene for the sale of goods; a marketplace|http://www.dictionary.com/browse/market
mark|noun|a visible impression or trace on something, as a line, cut, dent, stain, or bruise|http://www.dictionary.com/browse/mark
mark|noun|a visible impression or trace on something, as a line, cut, dent, stain, or bruise|http://www.dictionary.com/browse/mark
marry|verb|to take in marriage|http://www.dictionary.com/browse/marry
marvel|noun|something that causes wonder, admiration, or astonishment; a wonderful thing; a wonder or prodigy|http://www.dictionary.com/browse/marvel
mash|verb|to crush|http://www.dictionary.com/browse/mash
mask|noun|a covering for all or part of the face, worn to conceal one's identity.|http://www.dictionary.com/browse/mask
mask|noun|a covering for all or part of the face, worn to conceal one's identity.|http://www.dictionary.com/browse/mask
massage|noun|the act or art of treating the body by rubbing, kneading, patting, or the like, to stimulate circulation, increase suppleness, relieve tension, etc.|http://www.dictionary.com/browse/massage
mass|noun|a body of coherent matter, usually of indefinite shape and often of considerable size|http://www.dictionary.com/browse/mass
match|noun|a slender piece of wood, cardboard, or other flammable material tipped with a chemical substance that produces fire when rubbed on a rough or chemically prepared surface.|http://www.dictionary.com/browse/match
match|noun|a slender piece of wood, cardboard, or other flammable material tipped with a chemical substance that produces fire when rubbed on a rough or chemically prepared surface.|http://www.dictionary.com/browse/match
mate|noun|a partner in marriage; spouse.|http://www.dictionary.com/browse/mate
matter|noun|the substance or substances of which any physical object consists or is composed|http://www.dictionary.com/browse/matter
maul|noun|a heavy hammer, as for driving stakes or wedges.|http://www.dictionary.com/browse/maul
maunder|verb|to talk in a rambling, foolish, or meaningless way.|http://www.dictionary.com/browse/maunder
meal|noun|the food served and eaten especially at one of the customary, regular occasions for taking food during the day, as breakfast, lunch, or supper.|http://www.dictionary.com/browse/meal
meander|verb|to proceed by or take a winding or indirect course|http://www.dictionary.com/browse/meander
meaningfully|adjective|full of meaning, significance, purpose, or value; purposeful; significant|http://www.dictionary.com/browse/meaningfully
mean|verb|to have in mind as one's purpose or intention; intend|http://www.dictionary.com/browse/mean
measure|noun|a unit or standard of measurement|http://www.dictionary.com/browse/measure
measure|noun|a unit or standard of measurement|http://www.dictionary.com/browse/measure
meat|noun|the flesh of animals as  for food.|http://www.dictionary.com/browse/meat
mechanically|adjective|having to do with machinery|http://www.dictionary.com/browse/mechanically
meddle|verb|to involve oneself in a matter without right or invitation; interfere officiously and unwantedly|http://www.dictionary.com/browse/meddle
mediate|verb|to settle (disputes, strikes, etc.) as an intermediary between parties; reconcile.|http://www.dictionary.com/browse/mediate
meditate|verb|to engage in thought or contemplation; reflect.|http://www.dictionary.com/browse/meditate
meeting|noun|the act of coming together|http://www.dictionary.com/browse/meeting
meet|verb|to come upon; come into the presence of; encounter|http://www.dictionary.com/browse/meet
melt|verb|to become liquefied by warmth or heat, as ice, snow, butter, or metal.|http://www.dictionary.com/browse/melt
memorize|verb|to commit to memory; learn by heart|http://www.dictionary.com/browse/memorize
memory|noun|the mental capacity or faculty of retaining and reviving facts, events, impressions, etc., or of recalling or recognizing previous experiences.|http://www.dictionary.com/browse/memory
menace|noun|something that threatens to cause evil, harm, injury, etc.; a threat|http://www.dictionary.com/browse/menace
mend|verb|to make (something broken, worn, torn, or otherwise damaged) whole, sound, or usable by repairing|http://www.dictionary.com/browse/mend
mention|verb|to refer briefly to; name, specify, or speak of|http://www.dictionary.com/browse/mention
mentor|noun|a wise and trusted counselor or teacher.|http://www.dictionary.com/browse/mentor
men|noun|plural of man1 .|http://www.dictionary.com/browse/men
meow|noun|the characteristic sound a cat makes.|http://www.dictionary.com/browse/meow
merrily|noun|a female given name, form of Merry.|http://www.dictionary.com/browse/merrily
mesh|noun|any knit, woven, or knotted fabric of open texture.|http://www.dictionary.com/browse/mesh
metal|noun|any of a class of elementary substances, as gold, silver, or copper, all of which are crystalline when solid and many of which are characterized by opacity, ductility, conductivity, and a unique luster when freshly fractured.|http://www.dictionary.com/browse/metal
mewl|verb|to cry, as a baby, young child, or the like; whimper.|http://www.dictionary.com/browse/mewl
mew|noun|the tiny, high-pitched sound a cat or kitten makes.|http://www.dictionary.com/browse/mew
mice|noun|plural of mouse.|http://www.dictionary.com/browse/mice
middle|adjective|equally distant from the extremes or outer limits; central|http://www.dictionary.com/browse/middle
migrate|verb|to go from one country, region, or place to another.Synonyms|http://www.dictionary.com/browse/migrate
milk|noun|an opaque white or bluish-white liquid secreted by the mammary glands of female mammals, serving for the nourishment of their young.|http://www.dictionary.com/browse/milk
milk|noun|an opaque white or bluish-white liquid secreted by the mammary glands of female mammals, serving for the nourishment of their young.|http://www.dictionary.com/browse/milk
mime|noun|the art or technique of portraying a character, mood, idea, or narration by gestures and bodily movements; pantomime.|http://www.dictionary.com/browse/mime
mimic|verb|to imitate or copy in action, speech, etc., often playfully or derisively.|http://www.dictionary.com/browse/mimic
mince|verb|to cut or chop into very small pieces.|http://www.dictionary.com/browse/mince
mind|noun|(in a human or other conscious being) the element, part, substance, or process that reasons, thinks, feels, wills, perceives, judges, etc.|http://www.dictionary.com/browse/mind
mind|noun|(in a human or other conscious being) the element, part, substance, or process that reasons, thinks, feels, wills, perceives, judges, etc.|http://www.dictionary.com/browse/mind
mine|pronoun|a form of the possessive case of I  as a predicate adjective|http://www.dictionary.com/browse/mine
mine|pronoun|a form of the possessive case of I  as a predicate adjective|http://www.dictionary.com/browse/mine
mingle|verb|to become mixed, blended, or united.|http://www.dictionary.com/browse/mingle
minister|noun|a person authorized to conduct religious worship; member of the clergy; pastor.|http://www.dictionary.com/browse/minister
mint|noun|any aromatic herb of the genus Mentha, having opposite leaves and small, whorled flowers, as the spearmint and peppermint.|http://www.dictionary.com/browse/mint
minute|noun|the sixtieth part (1/60) of an hour; sixty seconds.|http://www.dictionary.com/browse/minute
misdirect|verb|to direct or address wrongly or incorrectly|http://www.dictionary.com/browse/misdirect
miserably|adjective|wretchedly unhappy, uneasy, or uncomfortable|http://www.dictionary.com/browse/miserably
mishear|verb|to hear incorrectly or imperfectly|http://www.dictionary.com/browse/mishear
misjudge|verb|to judge, estimate, or value wrongly or unjustly.|http://www.dictionary.com/browse/misjudge
mislead|verb|to lead or guide wrongly; lead astray.|http://www.dictionary.com/browse/mislead
mispronounce|verb|to pronounce incorrectly.|http://www.dictionary.com/browse/mispronounce
misspell|verb|to spell incorrectly.|http://www.dictionary.com/browse/misspell
miss|verb|to fail to hit or strike|http://www.dictionary.com/browse/miss
mistake|noun|an error in action, calculation, opinion, or judgment ca by poor reasoning, carelessness, insufficient knowledge, etc.|http://www.dictionary.com/browse/mistake
mist|noun|a cloudlike aggregation of minute globules of water suspended in the atmosphere at or near the earth's surface, reducing visibility to a lesser degree than fog.|http://www.dictionary.com/browse/mist
misunderstand|verb|to take (words, statements, etc.) in a wrong sense; understand wrongly.|http://www.dictionary.com/browse/misunderstand
mitten|noun|a hand covering enclosing the four fingers together and the thumb separately.|http://www.dictionary.com/browse/mitten
mix|verb|to combine (substances, elements, things, etc.) into one mass, collection, or assemblage, generally with a thorough blending of the constituents.|http://www.dictionary.com/browse/mix
moan|noun|a prolonged, low, inarticulate sound uttered from or as if from physical or mental suffering.|http://www.dictionary.com/browse/moan
mockingly|verb|to attack or treat with ridicule, contempt, or derision.|http://www.dictionary.com/browse/mockingly
mock|verb|to attack or treat with ridicule, contempt, or derision.|http://www.dictionary.com/browse/mock
model|noun|a standard or example for imitation or comparison.|http://www.dictionary.com/browse/model
modify|verb|to change somewhat the form or qualities of; alter partially; amend|http://www.dictionary.com/browse/modify
moisten|verb|to make or become moist.|http://www.dictionary.com/browse/moisten
mold|noun|a hollow form or matrix for giving a particular shape to something in a molten or plastic state.|http://www.dictionary.com/browse/mold
molest|verb|to bother, interfere with, or annoy.|http://www.dictionary.com/browse/molest
mollify|verb|to soften in feeling or temper, as a person; pacify; appease.|http://www.dictionary.com/browse/mollify
mollycoddle|noun|a man or boy who is  to being coddled; a milksop.|http://www.dictionary.com/browse/mollycoddle
mom|noun|mother1 .|http://www.dictionary.com/browse/mom
money|noun|any circulating medium of exchange, including coins, paper money, and demand deposits.|http://www.dictionary.com/browse/money
monitor|noun|(especially formerly) a student appointed to assist in the conduct of a class or school, as to help take attendance or keep order.|http://www.dictionary.com/browse/monitor
monkey|noun|any mammal of the order Primates, including the guenons, macaques, langurs, and capuchins, but excluding humans, the anthropoid apes, and, usually, the tarsier and prosimians.|http://www.dictionary.com/browse/monkey
monthly|adjective|pertaining to a month, or to each month.|http://www.dictionary.com/browse/monthly
month|noun|Also called calendar month. any of the twelve parts, as January or February, into which the calendar year is divided.|http://www.dictionary.com/browse/month
moon|noun|the earth's natural satellite, orbiting the earth at a mean distance of 238,857 miles (384,393 km) and having a diameter of 2160 miles (3476 km).|http://www.dictionary.com/browse/moon
moor|noun|a tract of open, peaty, wasteland, often overgrown with heath, common in high latitudes and altitudes where drainage is poor; heath.|http://www.dictionary.com/browse/moor
moo|verb|to utter the characteristic deep sound of a cow; low.|http://www.dictionary.com/browse/moo
mope|verb|to be sunk in dejection or listless apathy; sulk; brood.|http://www.dictionary.com/browse/mope
more|adjective|in greater quantity, amount, measure, degree, or number|http://www.dictionary.com/browse/more
more|adjective|in greater quantity, amount, measure, degree, or number|http://www.dictionary.com/browse/more
morning|noun|the first part or period of the day, extending from dawn, or from midnight, to noon.|http://www.dictionary.com/browse/morning
morph|noun|Linguistics. a sequence of phonemes constituting a minimal unit of grammar or syntax, and, as such, a representation, member, or contextual variant of a morpheme in a specific environment.|http://www.dictionary.com/browse/morph
mortally|adjective|subject to death; having a transitory life|http://www.dictionary.com/browse/mortally
mosey|verb|to wander or shuffle about leisurely; stroll; saunter (often followed by along, about, etc.).|http://www.dictionary.com/browse/mosey
mostly|adverb|for the most part; in the main|http://www.dictionary.com/browse/mostly
mother|noun|a female parent.|http://www.dictionary.com/browse/mother
motion|noun|the action or process of moving or of changing place or position; movement.|http://www.dictionary.com/browse/motion
motion|noun|the action or process of moving or of changing place or position; movement.|http://www.dictionary.com/browse/motion
motivate|verb|to provide with a motive, or a cause or reason to act; incite; impel.|http://www.dictionary.com/browse/motivate
mould|noun|a hollow form or matrix for giving a particular shape to something in a molten or plastic state.|http://www.dictionary.com/browse/mould
mountain|noun|a natural elevation of the earth's surface rising more or less abruptly to a summit, and attaining an altitude greater than that of a hill, usually greater than 2000 feet (610 meters).|http://www.dictionary.com/browse/mountain
mount|verb|to go up; climb; ascend|http://www.dictionary.com/browse/mount
mourn|verb|to feel or express sorrow or grief.|http://www.dictionary.com/browse/mourn
mouth|noun|Anatomy, Zoology. the opening through which an animal or human takes in food.the cavity containing the structures  in mastication.|http://www.dictionary.com/browse/mouth
mouth|noun|Anatomy: the opening through which an animal or human takes in food.|http://www.dictionary.com/browse/mouth
move|verb|to pass from one place or position to another.|http://www.dictionary.com/browse/move
move|verb|to pass from one place or position to another.|http://www.dictionary.com/browse/move
mow|verb|to cut down (grass, grain, etc.) with a scythe or a machine.|http://www.dictionary.com/browse/mow
muffle|verb|to wrap with something to deaden or prevent sound|http://www.dictionary.com/browse/muffle
mug|noun|a drinking cup, usually cylindrical in shape, having a handle, and often of a heavy substance, as earthenware.|http://www.dictionary.com/browse/mug
mull|verb|to study or ruminate; ponder.|http://www.dictionary.com/browse/mull
multiply|verb|to make many or manifold; increase the number, quantity, etc., of.|http://www.dictionary.com/browse/multiply
mumble|verb|to speak in a low indistinct manner, almost to an unintelligible extent; mutter.|http://www.dictionary.com/browse/mumble
munch|verb|to chew with steady or vigorous working of the jaws, often audibly.|http://www.dictionary.com/browse/munch
murder|noun|Law. the killing of another human being under conditions specifically covered in law. In the U.S., special statutory definitions include murder committed with malice aforethought, characterized by deliberation or premeditation or occurring during the commission of another serious crime, as robbery or arson (first-degree murder) and murder by intent but without deliberation or premeditation (second-degree murder)|http://www.dictionary.com/browse/murder
murmur|noun|a low, continuous sound, as of a brook, the wind, or trees, or of low, indistinct voices.|http://www.dictionary.com/browse/murmur
muscle|noun|a tissue composed of cells or fibers, the contraction of which produces movement in the body.|http://www.dictionary.com/browse/muscle
muse|verb|to think or meditate in silence, as on some subject.|http://www.dictionary.com/browse/muse
music|noun|an art of sound in time that expresses ideas and emotions in significant forms through the elements of rhythm, melody, harmony, and color.|http://www.dictionary.com/browse/music
muss|noun|a state of disorder or untidiness.|http://www.dictionary.com/browse/muss
mutilate|verb|to injure, disfigure, or make imperfect by removing or irreparably damaging parts|http://www.dictionary.com/browse/mutilate
mutter|verb|to utter words indistinctly or in a low tone, often as if talking to oneself; murmur.|http://www.dictionary.com/browse/mutter
mysteriously|adjective|full of, characterized by, or involving mystery|http://www.dictionary.com/browse/mysteriously
nag|verb|to annoy by persistent faultfinding, complaints, or demands.|http://www.dictionary.com/browse/nag
nail|noun|a slender, typically rod-shaped rigid piece of metal, usually in any of numerous standard lengths from a fraction of an inch to several inches and having one end pointed and the other enlarged and flattened, for hammering into or through wood, other building materials, etc., as  in building, in fastening, or in holding separate pieces together.|http://www.dictionary.com/browse/nail
nail|noun|a slender, typically rod-shaped rigid piece of metal, usually in any of numerous standard lengths from a fraction of an inch to several inches and having one end pointed and the other enlarged and flattened, for hammering into or through wood, other building materials, etc., as  in building, in fastening, or in holding separate pieces together.|http://www.dictionary.com/browse/nail
name|noun|a word or a combination of words by which a person, place, or thing, a body or class, or any object of thought is designated, called, or known.|http://www.dictionary.com/browse/name
name|noun|a word or a combination of words by which a person, place, or thing, a body or class, or any object of thought is designated, called, or known.|http://www.dictionary.com/browse/name
nap|verb|to sleep for a short time; doze.|http://www.dictionary.com/browse/nap
narrate|verb|to give an account or tell the story of (events, experiences, etc.).|http://www.dictionary.com/browse/narrate
narrow|adjective|of little breadth or width; not broad or wide; not as wide as usual or expected|http://www.dictionary.com/browse/narrow
nation|noun|a large body of people, associated with a particular territory, that is sufficiently conscious of its unity to seek or to possess a government peculiarly its own|http://www.dictionary.com/browse/nation
naturally|adverb|in a natural or normal manner.|http://www.dictionary.com/browse/naturally
navigate|verb|to move on, over, or through (water, air, or land) in a ship or aircraft|http://www.dictionary.com/browse/navigate
nearly|adverb|all but; almost|http://www.dictionary.com/browse/nearly
neaten|verb|to make neat|http://www.dictionary.com/browse/neaten
neatly|adjective|in a pleasingly orderly and clean condition|http://www.dictionary.com/browse/neatly
neck|noun|the part of the body of an animal or human being that connects the head and the trunk.|http://www.dictionary.com/browse/neck
needily|adjective|in a condition of need or want; poverty-stricken; impoverished; extremely poor; destitute.|http://www.dictionary.com/browse/needily
needle|noun|a small, slender, rodlike instrument, usually of polished steel, with a sharp point at one end and an eye or hole for thread at the other, for passing thread through cloth to make stitches in sewing.|http://www.dictionary.com/browse/needle
need|noun|a requirement, necessary duty, or obligation|http://www.dictionary.com/browse/need
need|noun|a requirement, necessary duty, or obligation|http://www.dictionary.com/browse/need
neglect|verb|to pay no attention or too little attention to; disregard or slight|http://www.dictionary.com/browse/neglect
negotiate|verb|to deal or bargain with another or others, as in the preparation of a treaty or contract or in preliminaries to a business deal.|http://www.dictionary.com/browse/negotiate
neigh|verb|to utter the cry of a horse; whinny.|http://www.dictionary.com/browse/neigh
nerve|noun|one or more bundles of fibers forming part of a system that conveys impulses of sensation, motion, etc., between the brain or spinal cord and other parts of the body.|http://www.dictionary.com/browse/nerve
nervously|adjective|highly excitable; unnaturally or acutely uneasy or apprehensive|http://www.dictionary.com/browse/nervously
nestle|verb|to lie close and snug, like a bird in a nest; snuggle or cuddle.|http://www.dictionary.com/browse/nestle
nest|noun|a pocketlike, usually more or less circular structure of twigs, grass, mud, etc., formed by a bird, often high in a tree, as a place in which to lay and incubate its eggs and rear its young; any protected place  by a bird for these purposes.|http://www.dictionary.com/browse/nest
nest|noun|a pocketlike, usually more or less circular structure of twigs, grass, mud, etc., formed by a bird, often high in a tree, as a place in which to lay and incubate its eggs and rear its young; any protected place  by a bird for these purposes.|http://www.dictionary.com/browse/nest
net|noun|a bag or other contrivance of strong thread or cord worked into an open, meshed fabric, for catching fish, birds, or other animals|http://www.dictionary.com/browse/net
never|adverb|not ever; at no time|http://www.dictionary.com/browse/never
never|adverb|not ever; at no time|http://www.dictionary.com/browse/never
news|noun|a report of a recent event; intelligence; information|http://www.dictionary.com/browse/news
nibble|verb|to bite off small bits.|http://www.dictionary.com/browse/nibble
nicely|adjective|pleasing; agreeable; delightful|http://www.dictionary.com/browse/nicely
nicker|noun|a person or thing that nicks.|http://www.dictionary.com/browse/nicker
nick|noun|a small notch, groove, chip, or the like, cut into or existing in something.|http://www.dictionary.com/browse/nick
night|noun|the period of darkness between sunset and sunrise.|http://www.dictionary.com/browse/night
nip|verb|to squeeze or compress tightly between two surfaces or points; pinch; bite.|http://www.dictionary.com/browse/nip
nod|verb|to make a slight, quick downward bending forward of the head, as in assent, greeting, or command.|http://www.dictionary.com/browse/nod
noise|noun|sound, especially of a loud, harsh, or conf kind|http://www.dictionary.com/browse/noise
noisily|adjective|making much noise|http://www.dictionary.com/browse/noisily
nominate|verb|to propose (someone) for appointment or election to an office.|http://www.dictionary.com/browse/nominate
normalize|verb|to make normal.|http://www.dictionary.com/browse/normalize
north|noun|a cardinal point of the compass, lying in the plane of the meridian and to the left of a person facing the rising sun.Abbreviation|http://www.dictionary.com/browse/north
nose|noun|the part of the face or facial region in humans and certain animals that contains the nostrils and the organs of smell and functions as the usual passageway for air in respiration|http://www.dictionary.com/browse/nose
notch|noun|an angular or V -shaped cut, indentation, or slit in an object, surface, or edge.|http://www.dictionary.com/browse/notch
notebook|noun|a book of or for notes.|http://www.dictionary.com/browse/notebook
note|noun|a brief record of something written down to assist the memory or for future reference.|http://www.dictionary.com/browse/note
note|noun|a brief record of something written down to assist the memory or for future reference.|http://www.dictionary.com/browse/note
notice|noun|an announcement or intimation of something impending; warning|http://www.dictionary.com/browse/notice
notify|verb|to inform (someone) or give notice to|http://www.dictionary.com/browse/notify
not|adverb|(used to express negation, denial, refusal, or prohibition)|http://www.dictionary.com/browse/not
nudge|verb|to push slightly or gently, especially with the elbow, to get someone's attention, prod someone into action, etc.|http://www.dictionary.com/browse/nudge
number|noun|a numeral or group of numerals.|http://www.dictionary.com/browse/number
number|noun|a numeral or group of numerals.|http://www.dictionary.com/browse/number
nurse|noun|a person formally educated and trained in the care of the sick or infirm.|http://www.dictionary.com/browse/nurse
nut|noun|a dry fruit consisting of an edible kernel or meat enclosed in a woody or leathery shell.|http://www.dictionary.com/browse/nut
nuzzle|verb|to burrow or root with the nose, snout, etc., as an animal does|http://www.dictionary.com/browse/nuzzle
oatmeal|noun|meal made from ground or rolled oats.|http://www.dictionary.com/browse/oatmeal
obediently|adjective|obeying or willing to obey; complying with or submissive to authority|http://www.dictionary.com/browse/obediently
obey|verb|to comply with or follow the commands, restrictions, wishes, or instructions of|http://www.dictionary.com/browse/obey
object|noun|anything that is visible or tangible and is relatively stable in form.|http://www.dictionary.com/browse/object
oblige|verb|to require or constrain, as by law, command, conscience, or force of necessity.|http://www.dictionary.com/browse/oblige
obnoxiously|adjective|highly objectionable or offensive; odious|http://www.dictionary.com/browse/obnoxiously
observation|noun|an act or instance of noticing or perceiving.|http://www.dictionary.com/browse/observation
observe|verb|to see, watch, perceive, or notice|http://www.dictionary.com/browse/observe
obsess|verb|to dominate or preoccupy the thoughts, feelings, or desires of (a person); beset, trouble, or haunt persistently or abnormally|http://www.dictionary.com/browse/obsess
obtain|verb|to come into possession of; get, acquire, or procure, as through an effort or by a request|http://www.dictionary.com/browse/obtain
occupy|verb|to take or fill up (space, time, etc.)|http://www.dictionary.com/browse/occupy
occur|verb|to happen; take place; come to pass|http://www.dictionary.com/browse/occur
ocean|noun|the vast body of salt water that covers almost three fourths of the earth's surface.|http://www.dictionary.com/browse/ocean
oddly|adjective|differing in nature from what is ordinary, usual, or expected|http://www.dictionary.com/browse/oddly
offend|verb|to irritate, annoy, or anger; cause resentful displeasure in|http://www.dictionary.com/browse/offend
offensively|adjective|causing resentful displeasure; highly irritating, angering, or annoying|http://www.dictionary.com/browse/offensively
offer|verb|to present for acceptance or rejection; proffer|http://www.dictionary.com/browse/offer
offer|verb|to present for acceptance or rejection; proffer|http://www.dictionary.com/browse/offer
office|noun|a room, set of rooms, or building where the business of a commercial or industrial organization or of a professional person is conducted|http://www.dictionary.com/browse/office
officially|noun|a person appointed or elected to an office or charged with certain duties.|http://www.dictionary.com/browse/officially
officiate|verb|to perform the office of a member of the clergy, as at a divine service.|http://www.dictionary.com/browse/officiate
often|adverb|many times; frequently|http://www.dictionary.com/browse/often
ogle|verb|to look at amorously, flirtatiously, or impertinently.|http://www.dictionary.com/browse/ogle
oil|noun|any of a large class of substances typically unctuous, viscous, combustible, liquid at ordinary temperatures, and soluble in ether or alcohol but not in water|http://www.dictionary.com/browse/oil
only|adverb|without others or anything further; alone; solely; exclusively|http://www.dictionary.com/browse/only
ooze|verb|(of moisture, liquid, etc.) to flow, percolate, or exude slowly, as through holes or small openings.|http://www.dictionary.com/browse/ooze
openly|adjective|not closed or barred at the time, as a doorway by a door, a window by a sash, or a gateway by a gate|http://www.dictionary.com/browse/openly
open|adjective|not closed or barred at the time, as a doorway by a door, a window by a sash, or a gateway by a gate|http://www.dictionary.com/browse/open
operate|verb|to work, perform, or function, as a machine does|http://www.dictionary.com/browse/operate
operation|noun|an act or instance, process, or manner of functioning or operating.|http://www.dictionary.com/browse/operation
opine|verb|to hold or express an opinion.|http://www.dictionary.com/browse/opine
opinion|noun|a belief or judgment that rests on grounds insufficient to produce complete certainty.|http://www.dictionary.com/browse/opinion
oppose|verb|to act against or provide resistance to; combat.|http://www.dictionary.com/browse/oppose
oppugn|verb|to assail by criticism, argument, or action.|http://www.dictionary.com/browse/oppugn
optimistically|adjective|disposed to take a favorable view of events or conditions and to expect the most favorable outcome.|http://www.dictionary.com/browse/optimistically
opt|verb|to make a choice; choose (usually followed by for).|http://www.dictionary.com/browse/opt
oranges|noun|a globose, reddish-yellow, bitter or sweet, edible citrus fruit.|http://www.dictionary.com/browse/oranges
orange|noun|a globose, reddish-yellow, bitter or sweet, edible citrus fruit.|http://www.dictionary.com/browse/orange
orate|verb|to deliver an oration; speak pompously; declaim.|http://www.dictionary.com/browse/orate
order|noun|an authoritative direction or instruction; command; mandate.|http://www.dictionary.com/browse/order
order|noun|an authoritative direction or instruction; command; mandate.|http://www.dictionary.com/browse/order
organise|verb|to form as or into a whole consisting of interdependent or coordinated parts, especially for united action|http://www.dictionary.com/browse/organise
organization|noun|the act or process of organizing.|http://www.dictionary.com/browse/organization
organize|verb|to form as or into a whole consisting of interdependent or coordinated parts, especially for united action|http://www.dictionary.com/browse/organize
orient|verb|to adjust with relation to, or bring into due relation to surroundings, circumstances, facts, etc.|http://www.dictionary.com/browse/orient
originate|verb|to take its origin or rise; begin; start; arise|http://www.dictionary.com/browse/originate
ornament|noun|an accessory, article, or detail  to beautify the appearance of something to which it is added or of which it is a part|http://www.dictionary.com/browse/ornament
ornament|noun|an accessory, article, or detail  to beautify the appearance of something to which it is added or of which it is a part|http://www.dictionary.com/browse/ornament
osculate|verb|to come into close contact or union.|http://www.dictionary.com/browse/osculate
outdo|verb|to surpass in execution or performance|http://www.dictionary.com/browse/outdo
outline|noun|the line by which a figure or object is defined or bounded; contour.|http://www.dictionary.com/browse/outline
outmaneuver|verb|to outwit, defeat, or frustrate by maneuvering.|http://www.dictionary.com/browse/outmaneuver
outmanoeuvre|verb|British. outmaneuver.|http://www.dictionary.com/browse/outmanoeuvre
outwit|verb|to get the better of by superior ingenuity or cleverness; outsmart|http://www.dictionary.com/browse/outwit
oven|noun|a chamber or compartment, as in a stove, for baking, roasting, heating, drying, etc.|http://www.dictionary.com/browse/oven
overbalance|verb|to outweigh|http://www.dictionary.com/browse/overbalance
overbear|verb|to bear over or down by weight or force|http://www.dictionary.com/browse/overbear
overcome|verb|to get the better of in a struggle or conflict; conquer; defeat|http://www.dictionary.com/browse/overcome
overcompensate|verb|to compensate or reward excessively; overpay|http://www.dictionary.com/browse/overcompensate
overconfidently|adjective|too confident.|http://www.dictionary.com/browse/overconfidently
overdo|verb|to do to excess; overindulge in|http://www.dictionary.com/browse/overdo
overdraw|verb|to draw upon (an account, allowance, etc.) in excess of the balance standing to one's credit or at one's disposal|http://www.dictionary.com/browse/overdraw
overflow|verb|to flow or run over, as rivers or water|http://www.dictionary.com/browse/overflow
overhear|verb|to hear (speech or a speaker) without the speaker's intention or knowledge|http://www.dictionary.com/browse/overhear
overlook|verb|to fail to notice, perceive, or consider|http://www.dictionary.com/browse/overlook
overpower|verb|to overcome, master, or subdue by superior force|http://www.dictionary.com/browse/overpower
overtake|verb|to catch up with in traveling or pursuit; draw even with|http://www.dictionary.com/browse/overtake
overthrow|verb|to depose, as from a position of power; overcome, defeat, or vanquish|http://www.dictionary.com/browse/overthrow
overturn|verb|to destroy the power of; overthrow; defeat; vanquish.|http://www.dictionary.com/browse/overturn
owe|verb|to be under obligation to pay or repay|http://www.dictionary.com/browse/owe
owlishly|adjective|resembling or characteristic of an owl|http://www.dictionary.com/browse/owlishly
owl|noun|any of numerous, chiefly nocturnal birds of prey, of the order Strigiformes, having a broad head with large, forward-directed eyes that are usually surrounded by disks of modified feathers|http://www.dictionary.com/browse/owl
owner|noun|a person who owns; possessor; proprietor.|http://www.dictionary.com/browse/owner
own|adjective|of, relating to, or belonging to oneself or itself (usually  after a possessive to emphasize the idea of ownership, interest, or relation conveyed by the possessive)|http://www.dictionary.com/browse/own
pace|noun|a rate of movement, especially in stepping, walking, etc.|http://www.dictionary.com/browse/pace
pack|noun|a group of things wrapped or tied together for easy handling or carrying; a bundle, especially one to be carried on the back of an animal or a person|http://www.dictionary.com/browse/pack
paddle|noun|a short, flat bladed oar for propelling and steering a canoe or small boat, usually held by both hands and moved more or less through a vertical arc.|http://www.dictionary.com/browse/paddle
pad|noun|a cushionlike mass of soft material  for comfort, protection, or stuffing.|http://www.dictionary.com/browse/pad
page|noun|one side of a leaf of something printed or written, as a book, manuscript, or letter.|http://www.dictionary.com/browse/page
pail|noun|bucket.|http://www.dictionary.com/browse/pail
painfully|adjective|affected with, causing, or characterized by pain|http://www.dictionary.com/browse/painfully
paint|noun|a substance composed of solid coloring matter suspended in a liquid medium and applied as a protective or decorative coating to various surfaces, or to canvas or other materials in producing a work of art.|http://www.dictionary.com/browse/paint
paint|noun|a substance composed of solid coloring matter suspended in a liquid medium and applied as a protective or decorative coating to various surfaces, or to canvas or other materials in producing a work of art.|http://www.dictionary.com/browse/paint
pain|noun|physical suffering or distress, as due to injury, illness, etc.|http://www.dictionary.com/browse/pain
palaver|noun|a conference or discussion.|http://www.dictionary.com/browse/palaver
pale|adjective|light-colored or lacking in color|http://www.dictionary.com/browse/pale
palm|noun|the part of the inner surface of the hand that extends from the wrist to the bases of the fingers.|http://www.dictionary.com/browse/palm
palpate|verb|to examine by touch, especially for the purpose of diagnosing disease or illness.|http://www.dictionary.com/browse/palpate
pamper|verb|to treat or gratify with extreme or excessive indulgence, kindness, or care|http://www.dictionary.com/browse/pamper
pancake|noun|a thin, flat cake of batter fried on both sides on a griddle or in a frying pan; griddlecake or flapjack.|http://www.dictionary.com/browse/pancake
panic|noun|a sudden overwhelming fear, with or without cause, that produces hysterical or irrational behavior, and that often spreads quickly through a group of persons or animals.|http://www.dictionary.com/browse/panic
pant|verb|to breathe hard and quickly, as after exertion.|http://www.dictionary.com/browse/pant
pan|noun|a broad, shallow container of metal, usually having sides flaring outward toward the top,  in various forms for frying, baking, washing, etc.|http://www.dictionary.com/browse/pan
paper|noun|a substance made from wood pulp, rags, straw, or other fibrous material, usually in thin sheets,  to bear writing or printing, for wrapping things, etc.|http://www.dictionary.com/browse/paper
parade|noun|a large public procession, usually including a marching band and often of a festive nature, held in honor of an anniversary, person, event, etc.|http://www.dictionary.com/browse/parade
paraphrase|noun|a restatement of a text or passage giving the meaning in another form, as for clearness; rewording.|http://www.dictionary.com/browse/paraphrase
parcel|noun|an object, article, container, or quantity of something wrapped or packed up; small package; bundle.|http://www.dictionary.com/browse/parcel
pardon|noun|kind indulgence, as in forgiveness of an offense or discourtesy or in tolerance of a distraction or inconvenience|http://www.dictionary.com/browse/pardon
parent|noun|a father or a mother.|http://www.dictionary.com/browse/parent
park|noun|an area of land, usually in a largely natural state, for the enjoyment of the public, having facilities for rest and recreation, often owned, set apart, and managed by a city, state, or nation.|http://www.dictionary.com/browse/park
park|noun|an area of land, usually in a largely natural state, for the enjoyment of the public, having facilities for rest and recreation, often owned, set apart, and managed by a city, state, or nation.|http://www.dictionary.com/browse/park
parrot|noun|any of numerous hook-billed, often brilliantly colored birds of the order Psittaciformes, as the cockatoo, lory, macaw, or parakeet, having the ability to mimic speech and often kept as pets.|http://www.dictionary.com/browse/parrot
parry|verb|to ward off (a thrust, stroke, weapon, etc.), as in fencing; avert.|http://www.dictionary.com/browse/parry
partially|adjective|being such in part only; not total or general; incomplete|http://www.dictionary.com/browse/partially
participate|verb|to take or have a part or share, as with others; partake; share (usually followed by in)|http://www.dictionary.com/browse/participate
partner|noun|a person who shares or is associated with another in some action or endeavor; sharer; associate.|http://www.dictionary.com/browse/partner
party|noun|a social gathering, as of invited guests at a private home, for conversation, refreshments, entertainment, etc.|http://www.dictionary.com/browse/party
part|noun|a portion or division of a whole that is separate or distinct; piece, fragment, fraction, or section; constituent|http://www.dictionary.com/browse/part
part|noun|a portion or division of a whole that is separate or distinct; piece, fragment, fraction, or section; constituent|http://www.dictionary.com/browse/part
passenger|noun|a person who is traveling in an automobile, bus, train, airplane, or other conveyance, especially one who is not the driver, pilot, or the like.|http://www.dictionary.com/browse/passenger
pass|verb|to move past; go by|http://www.dictionary.com/browse/pass
paste|noun|a mixture of flour and water, often with starch or the like,  for causing paper or other material to adhere to something.|http://www.dictionary.com/browse/paste
patch|noun|a small piece of material  to mend a tear or break, to cover a hole, or to strengthen a weak place|http://www.dictionary.com/browse/patch
patch|noun|a small piece of material  to mend a tear or break, to cover a hole, or to strengthen a weak place|http://www.dictionary.com/browse/patch
patiently|noun|a person who is under medical care or treatment.|http://www.dictionary.com/browse/patiently
patrol|verb|(of a police officer, soldier, etc.) to pass along a road, beat, etc., or around or through a specified area in order to maintain order and security.|http://www.dictionary.com/browse/patrol
patronize|verb|to give (a store, restaurant, hotel, etc.) one's regular patronage; trade with.|http://www.dictionary.com/browse/patronize
pat|verb|to strike lightly or gently with something flat, as with a paddle or the palm of the hand, usually in order to flatten, smooth, or shape|http://www.dictionary.com/browse/pat
pause|noun|a temporary stop or rest, especially in speech or action|http://www.dictionary.com/browse/pause
paw|noun|the foot of an animal having claws.|http://www.dictionary.com/browse/paw
payment|noun|something that is paid; an amount paid; compensation; recompense.|http://www.dictionary.com/browse/payment
pay|verb|to settle (a debt, obligation, etc.), as by transferring money or goods, or by doing something|http://www.dictionary.com/browse/pay
peace|noun|the normal, nonwarring condition of a nation, group of nations, or the world.|http://www.dictionary.com/browse/peace
pear|noun|the edible fruit, typically rounded but elongated and growing smaller toward the stem, of a tree, Pyrus communis, of the rose family.|http://www.dictionary.com/browse/pear
peck|noun|a dry measure of 8 quarts; the fourth part of a bushel, equal to 537.6 cubic inches (8.81 liters).|http://www.dictionary.com/browse/peck
pedal|noun|a foot-operated lever  to control certain mechanisms, as automobiles, or to play or modify the sounds of certain musical instruments, as pianos, organs, or harps.|http://www.dictionary.com/browse/pedal
peek|verb|to look or glance quickly or furtively, especially through a small opening or from a concealed location; peep; peer.|http://www.dictionary.com/browse/peek
peel|verb|to strip (something) of its skin, rind, bark, etc.|http://www.dictionary.com/browse/peel
peep|verb|to look through a small opening or from a concealed location.|http://www.dictionary.com/browse/peep
peer|noun|a person of the same legal status|http://www.dictionary.com/browse/peer
pelt|verb|to attack or assail with repeated blows or with missiles.|http://www.dictionary.com/browse/pelt
pencil|noun|a slender tube of wood, metal, plastic, etc., containing a core or strip of graphite, a solid coloring material, or the like,  for writing or drawing.|http://www.dictionary.com/browse/pencil
pen|noun|any of various instruments for writing or drawing with ink or a similar substance.|http://www.dictionary.com/browse/pen
perceive|verb|to become aware of, know, or identify by means of the senses|http://www.dictionary.com/browse/perceive
perch|noun|a pole or rod, usually horizontal, serving as a roost for birds.|http://www.dictionary.com/browse/perch
perfectly|adverb|in a perfect manner or to a perfect degree|http://www.dictionary.com/browse/perfectly
perfect|adjective|conforming absolutely to the description or definition of an ideal type|http://www.dictionary.com/browse/perfect
perform|verb|to carry out; execute; do|http://www.dictionary.com/browse/perform
perk|verb|to become lively, cheerful, or vigorous, as after depression or sickness (usually followed by up)|http://www.dictionary.com/browse/perk
permit|verb|to allow to do something|http://www.dictionary.com/browse/permit
persist|verb|to continue steadfastly or firmly in some state, purpose, course of action, or the like, especially in spite of opposition, remonstrance, etc.|http://www.dictionary.com/browse/persist
person|noun|a human being, whether an adult or child|http://www.dictionary.com/browse/person
perspire|verb|to secrete a salty, watery fluid from the sweat glands of the skin, especially when very warm as a result of strenuous exertion; sweat.|http://www.dictionary.com/browse/perspire
persuade|verb|to prevail on (a person) to do something, as by advising or urging|http://www.dictionary.com/browse/persuade
peruse|verb|to read through with thoroughness or care|http://www.dictionary.com/browse/peruse
pester|verb|to bother persistently with petty annoyances; trouble|http://www.dictionary.com/browse/pester
pest|noun|an annoying or troublesome person, animal, or thing; nuisance.|http://www.dictionary.com/browse/pest
pets|noun|any domesticated or tamed animal that is kept as a companion and cared for affectionately.|http://www.dictionary.com/browse/pets
pet|noun|any domesticated or tamed animal that is kept as a companion and cared for affectionately.|http://www.dictionary.com/browse/pet
pet|noun|any domesticated or tamed animal that is kept as a companion and cared for affectionately.|http://www.dictionary.com/browse/pet
philosophise|verb|to speculate or theorize, usually in a superficial or imprecise manner.|http://www.dictionary.com/browse/philosophise
philosophize|verb|to speculate or theorize, usually in a superficial or imprecise manner.|http://www.dictionary.com/browse/philosophize
phone|noun|telephone|http://www.dictionary.com/browse/phone
photograph|noun|a picture produced by photography.|http://www.dictionary.com/browse/photograph
physically|adverb|relating to the body or its appearance|http://www.dictionary.com/browse/physically
pickle|noun|a cucumber that has been preserved in brine, vinegar, or the like.|http://www.dictionary.com/browse/pickle
pick|verb|to choose or select from among a group|http://www.dictionary.com/browse/pick
picture|noun|a visual representation of a person, object, or scene, as a painting, drawing, photograph, etc.|http://www.dictionary.com/browse/picture
picture|noun|a visual representation of a person, object, or scene, as a painting, drawing, photograph, etc.|http://www.dictionary.com/browse/picture
pierce|verb|to penetrate into or run through (something), as a sharp, pointed dagger, object, or instrument does.|http://www.dictionary.com/browse/pierce
pies|noun|plural of pi2 .|http://www.dictionary.com/browse/pies
pie|noun|a baked food having a filling of fruit, meat, pudding, etc., prepared in a pastry-lined pan or dish and often topped with a pastry crust|http://www.dictionary.com/browse/pie
pigs|noun|Bay of. Bay of Pigs.|http://www.dictionary.com/browse/pigs
pig|noun|a young swine of either sex, especially a domestic hog, Sus scrofa, weighing less than 120 pounds (220 kg)|http://www.dictionary.com/browse/pig
pile|noun|an assemblage of things laid or lying one upon the other|http://www.dictionary.com/browse/pile
pilot|noun|a person duly qualified to steer ships into or out of a harbor or through certain difficult waters.|http://www.dictionary.com/browse/pilot
pinch|verb|to squeeze or compress between the finger and thumb, the teeth, the jaws of an instrument, or the like.|http://www.dictionary.com/browse/pinch
pine|noun|any evergreen, coniferous tree of the genus Pinus, having long, needle-shaped leaves, certain species of which yield timber, turpentine, tar, pitch, etc.|http://www.dictionary.com/browse/pine
pinpoint|noun|the point of a pin.|http://www.dictionary.com/browse/pinpoint
pin|noun|a small, slender, often pointed piece of wood, metal, etc.,  to fasten, support, or attach things.|http://www.dictionary.com/browse/pin
pin|noun|a small, slender, often pointed piece of wood, metal, etc.,  to fasten, support, or attach things.|http://www.dictionary.com/browse/pin
pioneer|noun|a person who is among those who first enter or settle a region, thus opening it for occupation and development by others.|http://www.dictionary.com/browse/pioneer
pipe|noun|a hollow cylinder of metal, wood, or other material,  for the conveyance of water, gas, steam, petroleum, etc.|http://www.dictionary.com/browse/pipe
pipe|noun|a hollow cylinder of metal, wood, or other material,  for the conveyance of water, gas, steam, petroleum, etc.|http://www.dictionary.com/browse/pipe
pitch|verb|to erect or set up (a tent, camp, or the like).|http://www.dictionary.com/browse/pitch
pity|noun|sympathetic or kindly sorrow evoked by the suffering, distress, or misfortune of another, often leading one to give relief or aid or to show mercy|http://www.dictionary.com/browse/pity
pivot|noun|a pin, point, or short shaft on the end of which something rests and turns, or upon and about which something rotates or oscillates.|http://www.dictionary.com/browse/pivot
pizzas|noun|a flat, open-faced baked pie of Italian origin, consisting of a thin layer of bread dough topped with spiced tomato sauce and cheese, often garnished with anchovies, sausage slices, mushrooms, etc.|http://www.dictionary.com/browse/pizzas
placate|verb|to appease or pacify, especially by concessions or conciliatory gestures|http://www.dictionary.com/browse/placate
place|noun|a particular portion of space, whether of definite or indefinite extent.|http://www.dictionary.com/browse/place
place|noun|a particular portion of space, whether of definite or indefinite extent.|http://www.dictionary.com/browse/place
plait|noun|a braid, especially of hair or straw.|http://www.dictionary.com/browse/plait
planes|noun|a flat or level surface.|http://www.dictionary.com/browse/planes
plane|noun|a flat or level surface.|http://www.dictionary.com/browse/plane
plantation|noun|a usually large farm or estate, especially in a tropical or semitropical country, on which cotton, tobacco, coffee, sugar cane, or the like is cultivated, usually by resident laborers.|http://www.dictionary.com/browse/plantation
plants|noun|any member of the kingdom Plantae, comprising multicellular organisms that typically produce their own food from inorganic matter by the process of photosynthesis and that have more or less rigid cell walls containing cellulose, including vascular plants, mosses, liverworts, and hornworts|http://www.dictionary.com/browse/plants
plant|noun|any member of the kingdom Plantae, comprising multicellular organisms that typically produce their own food from inorganic matter by the process of photosynthesis and that have more or less rigid cell walls containing cellulose, including vascular plants, mosses, liverworts, and hornworts|http://www.dictionary.com/browse/plant
plant|noun|any member of the kingdom Plantae, comprising multicellular organisms that typically produce their own food from inorganic matter by the process of photosynthesis and that have more or less rigid cell walls containing cellulose, including vascular plants, mosses, liverworts, and hornworts|http://www.dictionary.com/browse/plant
plan|noun|a scheme or method of acting, doing, proceeding, making, etc., developed in advance|http://www.dictionary.com/browse/plan
plastic|noun|Often, plastics. any of a group of synthetic or natural organic materials that may be shaped when soft and then hardened, including many types of resins, resinoids, polymers, cellulose derivatives, casein materials, and proteins|http://www.dictionary.com/browse/plastic
plate|noun|a shallow, usually circular dish, often of earthenware or porcelain, from which food is eaten.|http://www.dictionary.com/browse/plate
playfully|adjective|full of play or fun; sportive; frolicsome.|http://www.dictionary.com/browse/playfully
playground|noun|an area  for outdoor play or recreation, especially by children, and often containing recreational equipment such as slides and swings.|http://www.dictionary.com/browse/playground
play|noun|a dramatic composition or piece; drama.|http://www.dictionary.com/browse/play
play|noun|a dramatic composition or piece; drama.|http://www.dictionary.com/browse/play
plead|verb|to appeal or entreat earnestly|http://www.dictionary.com/browse/plead
please|adverb|( as a polite addition to requests, commands, etc.) if you would be so obliging; kindly|http://www.dictionary.com/browse/please
pleasure|noun|the state or feeling of being pleased.|http://www.dictionary.com/browse/pleasure
pledge|noun|a solemn promise or agreement to do or refrain from doing something|http://www.dictionary.com/browse/pledge
plod|verb|to walk heavily or move laboriously; trudge|http://www.dictionary.com/browse/plod
plonk|noun|inferior or cheap wine.|http://www.dictionary.com/browse/plonk
plop|verb|to make a sound like that of something falling or dropping into water|http://www.dictionary.com/browse/plop
plot|noun|a secret plan or scheme to accomplish some purpose, especially a hostile, unlawful, or evil purpose|http://www.dictionary.com/browse/plot
plot|noun|a secret plan or scheme to accomplish some purpose, especially a hostile, unlawful, or evil purpose|http://www.dictionary.com/browse/plot
plough|noun, verb|plow.|http://www.dictionary.com/browse/plough
plow|noun|an agricultural implement  for cutting, lifting, turning over, and partly pulverizing soil.|http://www.dictionary.com/browse/plow
pluck|verb|to pull off or out from the place of growth, as fruit, flowers, feathers, etc.|http://www.dictionary.com/browse/pluck
plug|noun|a piece of wood or other material  to stop up a hole or aperture, to fill a gap, or to act as a wedge.|http://www.dictionary.com/browse/plug
plump|adjective|well filled out or rounded in form; somewhat fleshy or fat.|http://www.dictionary.com/browse/plump
plunge|verb|to cast or thrust forcibly or suddenly into something, as a liquid, a penetrable substance, a place, etc.; immerse; submerge|http://www.dictionary.com/browse/plunge
pocket|noun|a shaped piece of fabric attached inside or outside a garment and forming a pouch  especially for carrying small articles.|http://www.dictionary.com/browse/pocket
point|noun|a sharp or tapering end, as of a dagger.|http://www.dictionary.com/browse/point
point|noun|a sharp or tapering end, as of a dagger.|http://www.dictionary.com/browse/point
poison|noun|a substance with an inherent property that tends to destroy life or impair health.|http://www.dictionary.com/browse/poison
poke|verb|to prod or push, especially with something narrow or pointed, as a finger, elbow, stick, etc.|http://www.dictionary.com/browse/poke
police|noun|Also called police force. an organized civil force for maintaining order, preventing and detecting crime, and enforcing the laws.|http://www.dictionary.com/browse/police
polish|verb|to make smooth and glossy, especially by rubbing or friction|http://www.dictionary.com/browse/polish
polish|verb|to make smooth and glossy, especially by rubbing or friction|http://www.dictionary.com/browse/polish
politely|adjective|showing good manners toward others, as in behavior, speech, etc.; courteous; civil|http://www.dictionary.com/browse/politely
pollution|noun|the act of polluting or the state of being polluted.|http://www.dictionary.com/browse/pollution
ponder|verb|to consider something deeply and thoroughly; meditate (often followed by over or upon).|http://www.dictionary.com/browse/ponder
pontificate|noun|the office or term of office of a pontiff.|http://www.dictionary.com/browse/pontificate
poorly|adverb|in a poor manner or way|http://www.dictionary.com/browse/poorly
popcorn|noun|any of several varieties of corn whose kernels burst open and puff out when subjected to dry heat.|http://www.dictionary.com/browse/popcorn
pop|verb|to make a short, quick, explosive sound|http://www.dictionary.com/browse/pop
pore|verb|to read or study with steady attention or application|http://www.dictionary.com/browse/pore
porter|noun|a person hired to carry burdens or baggage, as at a railroad station or a hotel.|http://www.dictionary.com/browse/porter
pose|verb|to assume a particular attitude or stance, especially with the hope of impressing others|http://www.dictionary.com/browse/pose
position|noun|condition with reference to place; location; situation.|http://www.dictionary.com/browse/position
position|noun|condition with reference to place; location; situation.|http://www.dictionary.com/browse/position
positively|adverb|with certainty; absolutely|http://www.dictionary.com/browse/positively
possess|verb|to have as belonging to one; have as property; own|http://www.dictionary.com/browse/possess
postulate|verb|to ask, demand, or claim.|http://www.dictionary.com/browse/postulate
post|noun|a strong piece of timber, metal, or the like, set upright as a support, a point of attachment, a place for displaying notices, etc.|http://www.dictionary.com/browse/post
potato|noun|Also called Irish potato, white potato. the edible tuber of a cultivated plant, Solanum tuberosum, of the nightshade family.|http://www.dictionary.com/browse/potato
potentially|adverb|possibly but not yet actually|http://www.dictionary.com/browse/potentially
pot|noun|a container of earthenware, metal, etc., usually round and deep and having a handle or handles and often a lid,  for cooking, serving, and other purposes.|http://www.dictionary.com/browse/pot
pounce|verb|to swoop down suddenly and grasp, as a bird does in seizing its prey.|http://www.dictionary.com/browse/pounce
pound|verb|to strike repeatedly with great force, as with an instrument, the fist, heavy missiles, etc.|http://www.dictionary.com/browse/pound
pour|verb|to send (a liquid, fluid, or anything in loose particles) flowing or falling, as from one container to another, or into, over, or on something|http://www.dictionary.com/browse/pour
pout|verb|to thrust out the lips, especially in displeasure or sullenness.|http://www.dictionary.com/browse/pout
powder|noun|any solid substance reduced to a state of fine, loose particles by crushing, grinding, disintegration, etc.|http://www.dictionary.com/browse/powder
powerfully|adjective|having or exerting great power or force.|http://www.dictionary.com/browse/powerfully
power|noun|ability to do or act; capability of doing or accomplishing something.|http://www.dictionary.com/browse/power
practice|noun|habitual or customary performance; operation|http://www.dictionary.com/browse/practice
practise|verb|practice.|http://www.dictionary.com/browse/practise
praise|noun|the act of expressing approval or admiration; commendation; laudation.|http://www.dictionary.com/browse/praise
prance|verb|to spring from the hind legs; to move by springing, as a horse.|http://www.dictionary.com/browse/prance
prattle|verb|to talk in a foolish or simple-minded way; chatter; babble.|http://www.dictionary.com/browse/prattle
pray|verb|to offer devout petition, praise, thanks, etc., to (God or an object of worship).|http://www.dictionary.com/browse/pray
preach|verb|to proclaim or make known by sermon (the gospel, good tidings, etc.).|http://www.dictionary.com/browse/preach
precede|verb|to go before, as in place, order, rank, importance, or time.|http://www.dictionary.com/browse/precede
predict|verb|to declare or tell in advance; prophesy; foretell|http://www.dictionary.com/browse/predict
preen|verb|(of animals, especially birds) to trim or dress (feathers, fur, etc.) with the beak or tongue|http://www.dictionary.com/browse/preen
prefer|verb|to set or hold before or above other persons or things in estimation; like better; choose rather than|http://www.dictionary.com/browse/prefer
prepare|verb|to put in proper condition or readiness|http://www.dictionary.com/browse/prepare
prescribe|verb|to lay down, in writing or otherwise, as a rule or a course of action to be followed; appoint, ordain, or enjoin.|http://www.dictionary.com/browse/prescribe
present|adjective|being, existing, or occurring at this time or now; current|http://www.dictionary.com/browse/present
preserve|verb|to keep alive or in existence; make lasting|http://www.dictionary.com/browse/preserve
pressure|noun|the exertion of force upon a surface by an object, fluid, etc., in contact with it|http://www.dictionary.com/browse/pressure
press|verb|to act upon with steadily applied weight or force.|http://www.dictionary.com/browse/press
presume|verb|to take for granted, assume, or suppose|http://www.dictionary.com/browse/presume
pretend|verb|to cause or attempt to cause (what is not so) to seem so|http://www.dictionary.com/browse/pretend
prevaricate|verb|to speak falsely or misleadingly; deliberately misstate or create an incorrect impression; lie.|http://www.dictionary.com/browse/prevaricate
prevent|verb|to keep from occurring; avert; hinder|http://www.dictionary.com/browse/prevent
price|noun|the sum or amount of money or its equivalent for which anything is bought, sold, or offered for sale.|http://www.dictionary.com/browse/price
prick|noun|a puncture made by a needle, thorn, or the like.|http://www.dictionary.com/browse/prick
primp|verb|to dress or adorn with care.|http://www.dictionary.com/browse/primp
print|verb|to produce (a text, picture, etc.) by applying inked types, plates, blocks, or the like, to paper or other material either by direct pressure or indirectly by offsetting an image onto an intermediate roller.|http://www.dictionary.com/browse/print
print|verb|to produce (a text, picture, etc.) by applying inked types, plates, blocks, or the like, to paper or other material either by direct pressure or indirectly by offsetting an image onto an intermediate roller.|http://www.dictionary.com/browse/print
prise|verb|prize3 .|http://www.dictionary.com/browse/prise
prison|noun|a building for the confinement of persons held while awaiting trial, persons sentenced after conviction, etc.|http://www.dictionary.com/browse/prison
probe|verb|to search into or examine thoroughly; question closely|http://www.dictionary.com/browse/probe
proceed|verb|to move or go forward or onward, especially after stopping.|http://www.dictionary.com/browse/proceed
process|noun|a systematic series of actions directed to some end|http://www.dictionary.com/browse/process
process|noun|a systematic series of actions directed to some end|http://www.dictionary.com/browse/process
proclaim|verb|to announce or declare in an official or formal manner|http://www.dictionary.com/browse/proclaim
procrastinate|verb|to defer action; delay|http://www.dictionary.com/browse/procrastinate
procure|verb|to obtain or get by care, effort, or the use of special means|http://www.dictionary.com/browse/procure
produce|verb|to bring into existence; give rise to; cause|http://www.dictionary.com/browse/produce
produce|verb|to bring into existence; give rise to; cause|http://www.dictionary.com/browse/produce
prod|verb|to poke or jab with or as if with something pointed|http://www.dictionary.com/browse/prod
profess|verb|to lay claim to, often insincerely; pretend to|http://www.dictionary.com/browse/profess
proffer|verb|to put before a person for acceptance; offer.|http://www.dictionary.com/browse/proffer
profit|noun|Often, profits. pecuniary gain resulting from the employment of capital in any transaction.|http://www.dictionary.com/browse/profit
prognosticate|verb|to forecast or predict (something future) from present indications or signs; prophesy.|http://www.dictionary.com/browse/prognosticate
progress|noun|a movement toward a goal or to a further or higher stage|http://www.dictionary.com/browse/progress
prohibit|verb|to forbid (an action, activity, etc.) by authority or law|http://www.dictionary.com/browse/prohibit
project|noun|something that is contemplated, devised, or planned; plan; scheme.|http://www.dictionary.com/browse/project
promenade|noun|a stroll or walk, especially in a public place, as for pleasure or display.|http://www.dictionary.com/browse/promenade
promise|noun|a declaration that something will or will not be done, given, etc., by one|http://www.dictionary.com/browse/promise
promote|verb|to help or encourage to exist or flourish; further|http://www.dictionary.com/browse/promote
promptly|adjective|done, performed, delivered, etc., at once or without delay|http://www.dictionary.com/browse/promptly
prompt|adjective|done, performed, delivered, etc., at once or without delay|http://www.dictionary.com/browse/prompt
prong|noun|one of the pointed tines of a fork.|http://www.dictionary.com/browse/prong
pronounce|verb|to enunciate or articulate (sounds, words, sentences, etc.).|http://www.dictionary.com/browse/pronounce
proofread|verb|to read (printers' proofs, copy, etc.) in order to detect and mark errors to be corrected.|http://www.dictionary.com/browse/proofread
propel|verb|to drive, or cause to move, forward or onward|http://www.dictionary.com/browse/propel
properly|adjective|adapted or appropriate to the purpose or circumstances; fit; suitable|http://www.dictionary.com/browse/properly
property|noun|that which a person owns; the possession or possessions of a particular owner|http://www.dictionary.com/browse/property
prophesy|verb|to foretell or predict.|http://www.dictionary.com/browse/prophesy
propose|verb|to offer or suggest (a matter, subject, case, etc.) for consideration, acceptance, or action|http://www.dictionary.com/browse/propose
proposition|noun|the act of offering or suggesting something to be considered, accepted, adopted, or done.|http://www.dictionary.com/browse/proposition
prop|verb|to support, or prevent from falling, with or as if with a prop (often followed by up)|http://www.dictionary.com/browse/prop
prose|noun|the ordinary form of spoken or written language, without metrical structure, as distinguished from poetry or verse.|http://www.dictionary.com/browse/prose
prostrate|verb|to cast (oneself) face down on the ground in humility, submission, or adoration.|http://www.dictionary.com/browse/prostrate
protect|verb|to defend or guard from attack, invasion, loss, annoyance, insult, etc.; cover or shield from injury or danger.|http://www.dictionary.com/browse/protect
protest|noun|an expression or declaration of objection, disapproval, or dissent, often in opposition to something a person is powerless to prevent or avoid|http://www.dictionary.com/browse/protest
protest|noun|an expression or declaration of objection, disapproval, or dissent, often in opposition to something a person is powerless to prevent or avoid|http://www.dictionary.com/browse/protest
prove|verb|to establish the truth or genuineness of, as by evidence or argument|http://www.dictionary.com/browse/prove
provide|verb|to make available; furnish|http://www.dictionary.com/browse/provide
provoke|verb|to anger, enrage, exasperate, or vex.|http://www.dictionary.com/browse/provoke
prowl|verb|to rove or go about stealthily, as in search of prey, something to steal, etc.|http://www.dictionary.com/browse/prowl
pry|verb|to inquire impertinently or unnecessarily into something|http://www.dictionary.com/browse/pry
publicize|verb|to give publicity to; bring to public notice; advertise|http://www.dictionary.com/browse/publicize
pucker|verb|to draw or gather into wrinkles or irregular folds, as material or a part of the face; constrict|http://www.dictionary.com/browse/pucker
puff|noun|a short, quick blast, as of wind or breath.|http://www.dictionary.com/browse/puff
pull|verb|to draw or haul toward oneself or itself, in a particular direction, or into a particular position|http://www.dictionary.com/browse/pull
pull|verb|to draw or haul toward oneself or itself, in a particular direction, or into a particular position|http://www.dictionary.com/browse/pull
pummel|verb|to beat or thrash with or as if with the fists.|http://www.dictionary.com/browse/pummel
pump|noun|an apparatus or machine for raising, driving, exhausting, or compressing fluids or gases by means of a piston, plunger, or set of rotating vanes.|http://www.dictionary.com/browse/pump
pump|noun|an apparatus or machine for raising, driving, exhausting, or compressing fluids or gases by means of a piston, plunger, or set of rotating vanes.|http://www.dictionary.com/browse/pump
punch|noun|a thrusting blow, especially with the fist.|http://www.dictionary.com/browse/punch
punctually|adjective|strictly observant of an appointed or regular time; not late; prompt.|http://www.dictionary.com/browse/punctually
puncture|noun|the act of piercing or perforating, as with a pointed instrument or object.|http://www.dictionary.com/browse/puncture
punishment|noun|the act of punishing.|http://www.dictionary.com/browse/punishment
punish|verb|to subject to pain, loss, confinement, death, etc., as a penalty for some offense, transgression, or fault|http://www.dictionary.com/browse/punish
purchase|verb|to acquire by the payment of money or its equivalent; buy.|http://www.dictionary.com/browse/purchase
purpose|noun|the reason for which something exists or is done, made, , etc.|http://www.dictionary.com/browse/purpose
purr|verb|to utter a low, continuous, murmuring sound expressive of contentment or pleasure, as a cat does.|http://www.dictionary.com/browse/purr
purse|noun|a woman's handbag or pocketbook.|http://www.dictionary.com/browse/purse
pursue|verb|to follow in order to overtake, capture, kill, etc.; chase.|http://www.dictionary.com/browse/pursue
push|verb|to press upon or against (a thing) with force in order to move it away.|http://www.dictionary.com/browse/push
push|verb|to press upon or against (a thing) with force in order to move it away.|http://www.dictionary.com/browse/push
putter|verb|to busy or occupy oneself in a leisurely, casual, or ineffective manner|http://www.dictionary.com/browse/putter
put|verb|to move or place (anything) so as to get it into or out of a specific location or position|http://www.dictionary.com/browse/put
quack|noun|the harsh, throaty cry of a duck or any similar sound.|http://www.dictionary.com/browse/quack
quaff|verb|to drink a beverage, especially an intoxicating one, copiously and with hearty enjoyment.|http://www.dictionary.com/browse/quaff
quail|noun|a small, migratory, gallinaceous game bird, Coturnix coturnix, of the Old World.|http://www.dictionary.com/browse/quail
quaintly|adjective|having an old-fashioned attractiveness or charm; oddly picturesque|http://www.dictionary.com/browse/quaintly
quake|verb|(of persons) to shake or tremble from cold, weakness, fear, anger, or the like|http://www.dictionary.com/browse/quake
qualify|verb|to provide with proper or necessary skills, knowledge, credentials, etc.; make competent|http://www.dictionary.com/browse/qualify
quarrelsomely|adjective|inclined to quarrel; argumentative; contentious.|http://www.dictionary.com/browse/quarrelsomely
quarrel|noun|an angry dispute or altercation; a disagreement marked by a temporary or permanent break in friendly relations.|http://www.dictionary.com/browse/quarrel
quarter|noun|one of the four equal or equivalent parts into which anything is or may be divided|http://www.dictionary.com/browse/quarter
quartz|noun|one of the commonest minerals, silicon dioxide, SiO 2 , having many varieties that differ in color, luster, etc., and occurring either in masses (as agate, bloodstone, chalcedony, jasper, etc.) or in crystals (as rock crystal, amethyst, citrine, etc.)|http://www.dictionary.com/browse/quartz
quaver|verb|to shake tremulously; quiver or tremble|http://www.dictionary.com/browse/quaver
queasily|adjective|inclined to or feeling nausea, as the stomach, a person, etc.; nauseous; nauseated.|http://www.dictionary.com/browse/queasily
queen|noun|a female sovereign or monarch.|http://www.dictionary.com/browse/queen
queerly|queer|strange or odd from a conventional viewpoint; unusually different; singular|http://www.dictionary.com/browse/queerly
query|noun|a question; an inquiry.|http://www.dictionary.com/browse/query
questionably|adjective|of doubtful propriety, honesty, morality, respectability, etc.|http://www.dictionary.com/browse/questionably
questioningly|adjective|indicating or implying a question|http://www.dictionary.com/browse/questioningly
question|noun|a sentence in an interrogative form, addressed to someone in order to get information in reply.|http://www.dictionary.com/browse/question
question|noun|a sentence in an interrogative form, addressed to someone in order to get information in reply.|http://www.dictionary.com/browse/question
queue|noun|a braid of hair worn hanging down behind.|http://www.dictionary.com/browse/queue
quibble|noun|an instance of the use of ambiguous, prevaricating, or irrelevant language or arguments to evade a point at issue.|http://www.dictionary.com/browse/quibble
quicken|verb|to make more rapid; accelerate; hasten|http://www.dictionary.com/browse/quicken
quicker|adjective|done, proceeding, or occurring with promptness or rapidity, as an action, process, etc.; prompt; immediate|http://www.dictionary.com/browse/quicker
quickly|adverb|with speed; rapidly; very soon.|http://www.dictionary.com/browse/quickly
quicksand|noun|a bed of soft or loose sand saturated with water and having considerable depth, yielding under weight and therefore tending to suck down any object resting on its surface.|http://www.dictionary.com/browse/quicksand
quietly|adjective|making no noise or sound, especially no disturbing sound|http://www.dictionary.com/browse/quietly
quiet|adjective|making no noise or sound, especially no disturbing sound|http://www.dictionary.com/browse/quiet
quiet|adjective|making no noise or sound, especially no disturbing sound|http://www.dictionary.com/browse/quiet
quill|noun|one of the large feathers of the wing or tail of a bird.|http://www.dictionary.com/browse/quill
quilt|noun|a coverlet for a bed, made of two layers of fabric with some soft substance, as wool or down, between them and stitched in patterns or tufted through all thicknesses in order to prevent the filling from shifting.|http://www.dictionary.com/browse/quilt
quince|noun|either of two small trees, Cydonia oblonga or C. sinensis, of the rose family, bearing hard, fragrant, yellowish fruit  chiefly for making jelly or preserves.|http://www.dictionary.com/browse/quince
quip|noun|a clever or witty remark or comment.|http://www.dictionary.com/browse/quip
quirkily|adjective|having or full of quirks.|http://www.dictionary.com/browse/quirkily
quirk|noun|a peculiarity of action, behavior, or personality; mannerism|http://www.dictionary.com/browse/quirk
quit|verb|to stop, cease, or discontinue|http://www.dictionary.com/browse/quit
quiver|verb|to shake with a slight but rapid motion; vibrate tremulously; tremble.|http://www.dictionary.com/browse/quiver
quiver|verb|to shake with a slight but rapid motion; vibrate tremulously; tremble.|http://www.dictionary.com/browse/quiver
quizzically|adjective|odd, queer, or comical.|http://www.dictionary.com/browse/quizzically
quiz|noun|an informal test or examination of a student or class.|http://www.dictionary.com/browse/quiz
quote|verb|to repeat (a passage, phrase, etc.) from a book, speech, or the like, as by way of authority, illustration, etc.|http://www.dictionary.com/browse/quote
rabbits|noun|any of several soft-furred, large-eared, rodentlike burrowing mammals of the family Leporidae, allied with the hares and pikas in the order Lagomorpha, having a divided upper lip and long hind legs, usually smaller than the hares and mainly distinguished from them by bearing blind and furless young in nests rather than fully developed young in the open.|http://www.dictionary.com/browse/rabbits
rabbit|noun|any of several soft-furred, large-eared, rodentlike burrowing mammals of the family Leporidae, allied with the hares and pikas in the order Lagomorpha, having a divided upper lip and long hind legs, usually smaller than the hares and mainly distinguished from them by bearing blind and furless young in nests rather than fully developed young in the open.|http://www.dictionary.com/browse/rabbit
race|noun|a contest of speed, as in running, riding, driving, or sailing.|http://www.dictionary.com/browse/race
radiate|verb|to extend, spread, or move like rays or radii from a center.|http://www.dictionary.com/browse/radiate
rage|noun|angry fury; violent anger (sometimes  in combination)|http://www.dictionary.com/browse/rage
railway|noun|a rail line with lighter-weight equipment and roadbed than a main-line railroad.|http://www.dictionary.com/browse/railway
rail|noun|a bar of wood or metal fixed horizontally for any of various purposes, as for a support, barrier, fence, or railing.|http://www.dictionary.com/browse/rail
rainstorm|noun|a storm with heavy rain.|http://www.dictionary.com/browse/rainstorm
rain|noun|water that is condensed from the aqueous vapor in the atmosphere and falls to earth in drops more than 1/50 inch (0.5 mm) in diameter.|http://www.dictionary.com/browse/rain
rain|noun|water that is condensed from the aqueous vapor in the atmosphere and falls to earth in drops more than 1/50 inch (0.5 mm) in diameter.|http://www.dictionary.com/browse/rain
raise|verb|to move to a higher position; lift up; elevate|http://www.dictionary.com/browse/raise
rake|noun|an agricultural implement with teeth or tines for gathering cut grass, hay, or the like or for smoothing the surface of the ground.|http://www.dictionary.com/browse/rake
rake|noun|an agricultural implement with teeth or tines for gathering cut grass, hay, or the like or for smoothing the surface of the ground.|http://www.dictionary.com/browse/rake
rally|verb|to bring into order again; gather and organize or inspire anew|http://www.dictionary.com/browse/rally
ramble|verb|to wander around in a leisurely, aimless manner|http://www.dictionary.com/browse/ramble
ram|noun|a male sheep.|http://www.dictionary.com/browse/ram
range|noun|the extent to which or the limits between which variation is possible|http://www.dictionary.com/browse/range
rank|noun|a number of persons forming a separate class in a social hierarchy or in any graded body.|http://www.dictionary.com/browse/rank
ransack|verb|to search thoroughly or vigorously through (a house, receptacle, etc.)|http://www.dictionary.com/browse/ransack
rant|verb|to speak or declaim extravagantly or violently; talk in a wild or vehement way; rave|http://www.dictionary.com/browse/rant
rapidly|adjective|occurring within a short time; happening speedily|http://www.dictionary.com/browse/rapidly
rap|verb|to strike, especially with a quick, smart, or light blow|http://www.dictionary.com/browse/rap
rarely|adverb|on rare occasions; infrequently; seldom|http://www.dictionary.com/browse/rarely
rasp|verb|to scrape or abrade with a rough instrument.|http://www.dictionary.com/browse/rasp
rate|noun|the amount of a charge or payment with reference to some basis of calculation|http://www.dictionary.com/browse/rate
rate|noun|the amount of a charge or payment with reference to some basis of calculation|http://www.dictionary.com/browse/rate
ratify|verb|to confirm by expressing consent, approval, or formal sanction|http://www.dictionary.com/browse/ratify
rationalise|verb|to ascribe (one's acts, opinions, etc.) to causes that superficially seem reasonable and valid but that actually are unrelated to the true, possibly unconscious and often less creditable or agreeable causes.|http://www.dictionary.com/browse/rationalise
rationalize|verb|to ascribe (one's acts, opinions, etc.) to causes that superficially seem reasonable and valid but that actually are unrelated to the true, possibly unconscious and often less creditable or agreeable causes.|http://www.dictionary.com/browse/rationalize
rattle|verb|to give out or cause a rapid succession of short, sharp sounds, as in consequence of agitation and repeated concussions|http://www.dictionary.com/browse/rattle
rat|noun|any of several long-tailed rodents of the family Muridae, of the genus Rattus and related genera, distinguished from the mouse by being larger.|http://www.dictionary.com/browse/rat
ravage|verb|to work havoc upon; damage or mar by ravages|http://www.dictionary.com/browse/ravage
rave|verb|to talk wildly, as in delirium.|http://www.dictionary.com/browse/rave
ray|noun|a narrow beam of light.|http://www.dictionary.com/browse/ray
re-evaluate|verb|to determine or set the value or amount of; appraise|http://www.dictionary.com/browse/re-evaluate
reach|verb|to get to or get as far as in moving, going, traveling, etc.|http://www.dictionary.com/browse/reach
reacquaint|verb|to make more or less familiar, aware, or conversant (usually followed by with)|http://www.dictionary.com/browse/reacquaint
reaction|noun|a reverse movement or tendency; an action in a reverse direction or manner.|http://www.dictionary.com/browse/reaction
react|verb|to act in response to an agent or influence|http://www.dictionary.com/browse/react
readily|adverb|promptly; quickly; easily|http://www.dictionary.com/browse/readily
reading|noun|the action or practice of a person who reads.|http://www.dictionary.com/browse/reading
readjust|verb|to adjust again or anew; rearrange.|http://www.dictionary.com/browse/readjust
ready|adjective|completely prepared or in fit condition for immediate action or use|http://www.dictionary.com/browse/ready
read|verb|to look at carefully so as to understand the meaning of (something written, printed, etc.)|http://www.dictionary.com/browse/read
reaffirm|verb|to state or assert positively; maintain as true|http://www.dictionary.com/browse/reaffirm
realign|verb|to arrange in a straight line; adjust according to a line.|http://www.dictionary.com/browse/realign
realise|verb|to grasp or understand clearly.|http://www.dictionary.com/browse/realise
realize|verb|to grasp or understand clearly.|http://www.dictionary.com/browse/realize
really|adverb|in reality; actually|http://www.dictionary.com/browse/really
rearrange|verb|to place in proper, desired, or convenient order; adjust properly|http://www.dictionary.com/browse/rearrange
reason|noun|a basis or cause, as for some belief, action, fact, event, etc.|http://www.dictionary.com/browse/reason
reason|noun|a basis or cause, as for some belief, action, fact, event, etc.|http://www.dictionary.com/browse/reason
reassert|verb|to state with assurance, confidence, or force; state strongly or positively; affirm; aver|http://www.dictionary.com/browse/reassert
reassess|verb|to estimate officially the value of (property, income, etc.) as a basis for taxation.|http://www.dictionary.com/browse/reassess
reassure|verb|to restore to assurance or confidence|http://www.dictionary.com/browse/reassure
reassuringly|verb|to restore to assurance or confidence|http://www.dictionary.com/browse/reassuringly
reattach|verb|to fasten or affix; join; connect|http://www.dictionary.com/browse/reattach
rebuff|noun|a blunt or abrupt rejection, as of a person making advances.|http://www.dictionary.com/browse/rebuff
rebuke|verb|to express sharp, stern disapproval of; reprove; reprimand.|http://www.dictionary.com/browse/rebuke
recall|verb|to bring back from memory; recollect; remember|http://www.dictionary.com/browse/recall
recap|verb|to recondition (a worn automobile tire) by cementing on a strip of prepared rubber and vulcanizing by subjecting to heat and pressure in a mold.|http://www.dictionary.com/browse/recap
receipt|noun|a written acknowledgment of having received, or taken into one's possession, a specified amount of money, goods, etc.|http://www.dictionary.com/browse/receipt
receive|verb|to take into one's possession (something offered or delivered)|http://www.dictionary.com/browse/receive
recess|noun|temporary withdrawal or cessation from the usual work or activity.|http://www.dictionary.com/browse/recess
reciprocate|verb|to give, feel, etc., in return.|http://www.dictionary.com/browse/reciprocate
recite|verb|to repeat the words of, as from memory, especially in a formal manner|http://www.dictionary.com/browse/recite
recklessly|adjective|utterly unconcerned about the consequences of some action; without caution; careless (usually followed by of)|http://www.dictionary.com/browse/recklessly
reckon|verb|to count, compute, or calculate, as in number or amount.|http://www.dictionary.com/browse/reckon
reclaim|verb|to bring (uncultivated areas or wasteland) into a condition for cultivation or other use.|http://www.dictionary.com/browse/reclaim
recline|verb|to lean or lie back; rest in a recumbent position.|http://www.dictionary.com/browse/recline
recognise|verb|to identify as something or someone previously seen, known, etc.|http://www.dictionary.com/browse/recognise
recognize|verb|to identify as something or someone previously seen, known, etc.|http://www.dictionary.com/browse/recognize
recoil|verb|to draw back; start or shrink back, as in alarm, horror, or disgust.|http://www.dictionary.com/browse/recoil
recollect|verb|to recall to mind; recover knowledge of by memory; remember.|http://www.dictionary.com/browse/recollect
recommend|verb|to present as worthy of confidence, acceptance, use, etc.; commend; mention favorably|http://www.dictionary.com/browse/recommend
reconcile|verb|to cause (a person) to accept or be resigned to something not desired|http://www.dictionary.com/browse/reconcile
reconsider|verb|to consider again, especially with a view to change of decision or action|http://www.dictionary.com/browse/reconsider
record|verb|to set down in writing or the like, as for the purpose of preserving evidence.|http://www.dictionary.com/browse/record
record|verb|to set down in writing or the like, as for the purpose of preserving evidence.|http://www.dictionary.com/browse/record
recount|verb|to relate or narrate; tell in detail; give the facts or particulars of.|http://www.dictionary.com/browse/recount
recover|verb|to get back or regain (something lost or taken away)|http://www.dictionary.com/browse/recover
recruit|noun|a newly enlisted or drafted member of the armed forces.|http://www.dictionary.com/browse/recruit
recruit|noun|a newly enlisted or drafted member of the armed forces.|http://www.dictionary.com/browse/recruit
recuperate|verb|to recover from sickness or exhaustion; regain health or strength.|http://www.dictionary.com/browse/recuperate
redden|verb|to make or cause to become red.|http://www.dictionary.com/browse/redden
redirect|verb|to direct again.|http://www.dictionary.com/browse/redirect
rediscover|verb|to see, get knowledge of, learn of, find, or find out; gain sight or knowledge of (something previously unseen or unknown)|http://www.dictionary.com/browse/rediscover
reduce|verb|to bring down to a smaller extent, size, amount, number, etc.|http://www.dictionary.com/browse/reduce
reel|noun|a cylinder, frame, or other device that turns on an axis and is  to wind up or pay out something.|http://www.dictionary.com/browse/reel
reference|noun|an act or instance of referring.|http://www.dictionary.com/browse/reference
refer|verb|to direct for information or anything required|http://www.dictionary.com/browse/refer
refill|verb|to fill again.|http://www.dictionary.com/browse/refill
refine|verb|to bring to a fine or a pure state; free from impurities|http://www.dictionary.com/browse/refine
reflect|verb|to cast back (light, heat, sound, etc.) from a surface|http://www.dictionary.com/browse/reflect
refocus|noun|a central point, as of attraction, attention, or activity|http://www.dictionary.com/browse/refocus
refrain|verb|to abstain from an impulse to say or do something (often followed by from)|http://www.dictionary.com/browse/refrain
refuse|verb|to decline to accept (something offered)|http://www.dictionary.com/browse/refuse
refute|verb|to prove to be false or erroneous, as an opinion or charge.|http://www.dictionary.com/browse/refute
regain|verb|to get again; recover|http://www.dictionary.com/browse/regain
regale|verb|to entertain lavishly or agreeably; delight.|http://www.dictionary.com/browse/regale
regard|verb|to look upon or think of with a particular feeling|http://www.dictionary.com/browse/regard
regret|verb|to feel sorrow or remorse for (an act, fault, disappointment, etc.)|http://www.dictionary.com/browse/regret
regret|verb|to feel sorrow or remorse for (an act, fault, disappointment, etc.)|http://www.dictionary.com/browse/regret
regularly|adverb|at regular times or intervals.|http://www.dictionary.com/browse/regularly
regulate|verb|to control or direct by a rule, principle, method, etc.|http://www.dictionary.com/browse/regulate
rehabilitate|verb|to restore to a condition of good health, ability to work, or the like.|http://www.dictionary.com/browse/rehabilitate
reign|noun|the period during which a sovereign occupies the throne.|http://www.dictionary.com/browse/reign
reinforce|verb|to strengthen with some added piece, support, or material|http://www.dictionary.com/browse/reinforce
reintroduce|verb|to present (a person) to another so as to make acquainted.|http://www.dictionary.com/browse/reintroduce
reiterate|verb|to say or do again or repeatedly; repeat, often excessively.|http://www.dictionary.com/browse/reiterate
reject|verb|to refuse to have, take, recognize, etc.|http://www.dictionary.com/browse/reject
rejoice|verb|to be glad; take delight (often followed by in)|http://www.dictionary.com/browse/rejoice
relate|verb|to tell; give an account of (an event, circumstance, etc.).|http://www.dictionary.com/browse/relate
relation|noun|an existing connection; a significant association between or among things|http://www.dictionary.com/browse/relation
relax|verb|to make less tense, rigid, or firm; make lax|http://www.dictionary.com/browse/relax
relay|noun|a series of persons relieving one another or taking turns; shift.|http://www.dictionary.com/browse/relay
release|verb|to free from confinement, bondage, obligation, pain, etc.; let go|http://www.dictionary.com/browse/release
relent|verb|to soften in feeling, temper, or determination; become more mild, compassionate, or forgiving.|http://www.dictionary.com/browse/relent
religion|noun|a set of beliefs concerning the cause, nature, and purpose of the universe, especially when considered as the creation of a superhuman agency or agencies, usually involving devotional and ritual observances, and often containing a moral code governing the conduct of human affairs.|http://www.dictionary.com/browse/religion
relinquish|verb|to renounce or surrender (a possession, right, etc.)|http://www.dictionary.com/browse/relinquish
relish|noun|liking or enjoyment of the taste of something.|http://www.dictionary.com/browse/relish
reluctantly|adjective|unwilling; disinclined|http://www.dictionary.com/browse/reluctantly
rely|verb|to depend confidently; put trust in (usually followed by on or upon)|http://www.dictionary.com/browse/rely
remain|verb|to continue in the same state; continue to be as specified|http://www.dictionary.com/browse/remain
remark|verb|to say casually, as in making a comment|http://www.dictionary.com/browse/remark
remember|verb|to recall to the mind by an act or effort of memory; think of again|http://www.dictionary.com/browse/remember
remind|verb|to cause (a person) to remember; cause (a person) to think (of someone or something)|http://www.dictionary.com/browse/remind
reminisce|verb|to recall past experiences, events, etc.; indulge in reminiscence.|http://www.dictionary.com/browse/reminisce
remonstrate|verb|to say or plead in protest, objection, or disapproval.|http://www.dictionary.com/browse/remonstrate
remove|verb|to move from a place or position; take away or off|http://www.dictionary.com/browse/remove
render|verb|to cause to be or become; make|http://www.dictionary.com/browse/render
rend|verb|to separate into parts with force or violence|http://www.dictionary.com/browse/rend
reorganize|verb|to organize again.|http://www.dictionary.com/browse/reorganize
repack|verb |to place or arrange (articles) in (a container) again or in a different way|http://www.dictionary.com/browse/repack
repair|verb|to restore to a good or sound condition after decay or damage; mend|http://www.dictionary.com/browse/repair
repeatedly|adjective|done, made, or said again and again|http://www.dictionary.com/browse/repeatedly
repeat|verb|to say or utter again (something already said)|http://www.dictionary.com/browse/repeat
repel|verb|to drive or force back (an assailant, invader, etc.).|http://www.dictionary.com/browse/repel
repent|verb|to feel sorry, self-reproachful, or contrite for past conduct; regret or be conscience-stricken about a past action, attitude, etc. (often followed by of)|http://www.dictionary.com/browse/repent
rephrase|verb|to phrase again or differently|http://www.dictionary.com/browse/rephrase
replace|verb|to assume the former role, position, or function of; substitute for (a person or thing)|http://www.dictionary.com/browse/replace
reply|verb|to make answer in words or writing; answer; respond|http://www.dictionary.com/browse/reply
report|noun|an account or statement describing in detail an event, situation, or the like, usually as the result of observation, inquiry, etc.|http://www.dictionary.com/browse/report
reposition|noun|the act of depositing or storing.|http://www.dictionary.com/browse/reposition
representative|noun|a person or thing that represents another or others.|http://www.dictionary.com/browse/representative
represent|verb|to serve to express, designate, stand for, or denote, as a word, symbol, or the like does; symbolize|http://www.dictionary.com/browse/represent
repress|verb|to keep under control, check, or suppress (desires, feelings, actions, tears, etc.).|http://www.dictionary.com/browse/repress
reprimand|noun|a severe reproof or rebuke, especially a formal one by a person in authority.|http://www.dictionary.com/browse/reprimand
reproachfully|adjective|full of or expressing reproach or censure|http://www.dictionary.com/browse/reproachfully
reproach|verb|to find fault with (a person, group, etc.); blame; censure.|http://www.dictionary.com/browse/reproach
reproduce|verb|to make a copy, representation, duplicate, or close imitation of|http://www.dictionary.com/browse/reproduce
repudiate|verb|to reject as having no authority or binding force|http://www.dictionary.com/browse/repudiate
repulse|verb|to drive back; repel|http://www.dictionary.com/browse/repulse
request|noun|the act of asking for something to be given or done, especially as a favor or courtesy; solicitation or petition|http://www.dictionary.com/browse/request
request|noun|the act of asking for something to be given or done, especially as a favor or courtesy; solicitation or petition|http://www.dictionary.com/browse/request
rescind|verb|to abrogate; annul; revoke; repeal.|http://www.dictionary.com/browse/rescind
rescue|verb|to free or deliver from confinement, violence, danger, or evil.|http://www.dictionary.com/browse/rescue
research|noun|diligent and systematic inquiry or investigation into a subject in order to discover or revise facts, theories, applications, etc.|http://www.dictionary.com/browse/research
resent|verb|to feel or show displeasure or indignation at (a person, act, remark, etc.) from a sense of injury or insult.|http://www.dictionary.com/browse/resent
reside|verb|to dwell permanently or for a considerable time|http://www.dictionary.com/browse/reside
resign|verb|to give up an office or position, often formally (often followed by from)|http://www.dictionary.com/browse/resign
resist|verb|to withstand, strive against, or oppose|http://www.dictionary.com/browse/resist
resolve|verb|to come to a definite or earnest decision about; determine (to do something)|http://www.dictionary.com/browse/resolve
respect|noun|a particular, detail, or point (usually preceded by in)|http://www.dictionary.com/browse/respect
respect|noun|a particular, detail, or point (usually preceded by in)|http://www.dictionary.com/browse/respect
respond|verb|to reply or answer in words|http://www.dictionary.com/browse/respond
restate|verb|to state again or in a new way.|http://www.dictionary.com/browse/restate
restfully|adjective|giving or conducive to rest.|http://www.dictionary.com/browse/restfully
restrain|verb|to hold back from action; keep in check or under control; repress|http://www.dictionary.com/browse/restrain
restructure|verb|to change, alter, or restore the structure of|http://www.dictionary.com/browse/restructure
rest|noun|the refreshing quiet or repose of sleep|http://www.dictionary.com/browse/rest
rest|noun|the refreshing quiet or repose of sleep|http://www.dictionary.com/browse/rest
resume|verb|to take up or go on with again after interruption; continue|http://www.dictionary.com/browse/resume
retaliate|verb|to return like for like, especially evil for evil|http://www.dictionary.com/browse/retaliate
retch|verb|to make efforts to vomit.|http://www.dictionary.com/browse/retch
retell|verb|to tell (a story, tale, etc.) over again or in a new way|http://www.dictionary.com/browse/retell
retire|verb|to withdraw, or go away or apart, to a place of privacy, shelter, or seclusion|http://www.dictionary.com/browse/retire
retort|verb|to reply to, usually in a sharp or retaliatory way; reply in kind to.|http://www.dictionary.com/browse/retort
retract|verb|to draw back or in|http://www.dictionary.com/browse/retract
retreat|noun|the forced or strategic withdrawal of an army or an armed force before an enemy, or the withdrawing of a naval force from action.|http://www.dictionary.com/browse/retreat
retrieve|verb|to recover or regain|http://www.dictionary.com/browse/retrieve
return|verb|to go or come back, as to a former place, position, or state|http://www.dictionary.com/browse/return
reveal|verb|to make known; disclose; divulge|http://www.dictionary.com/browse/reveal
revel|verb|to take great pleasure or delight (usually followed by in)|http://www.dictionary.com/browse/revel
revere|verb|to regard with respect tinged with awe; venerate|http://www.dictionary.com/browse/revere
reverse|adjective|opposite or contrary in position, direction, order, or character|http://www.dictionary.com/browse/reverse
revert|verb|to return to a former habit, practice, belief, condition, etc.|http://www.dictionary.com/browse/revert
review|noun|a critical article or report, as in a periodical, on a book, play, recital, or the like; critique; evaluation.|http://www.dictionary.com/browse/review
revise|verb|to amend or alter|http://www.dictionary.com/browse/revise
revoke|verb|to take back or withdraw; annul, cancel, or reverse; rescind or repeal|http://www.dictionary.com/browse/revoke
reward|noun|a sum of money offered for the detection or capture of a criminal, the recovery of lost or stolen property, etc.|http://www.dictionary.com/browse/reward
reward|noun|a sum of money offered for the detection or capture of a criminal, the recovery of lost or stolen property, etc.|http://www.dictionary.com/browse/reward
reword|verb|to put into other words|http://www.dictionary.com/browse/reword
rhapsodize|verb|to talk with extravagant enthusiasm.|http://www.dictionary.com/browse/rhapsodize
rhyme|noun|identity in sound of some part, especially the end, of words or lines of verse.|http://www.dictionary.com/browse/rhyme
rhythm|noun|movement or procedure with uniform or patterned recurrence of a beat, accent, or the like.|http://www.dictionary.com/browse/rhythm
rice|noun|the starchy seeds or grain of an annual marsh grass, Oryza sativa, cultivated in warm climates and  for food.|http://www.dictionary.com/browse/rice
riddle|noun|a question or statement so framed as to exercise one's ingenuity in answering it or discovering its meaning; conundrum.|http://www.dictionary.com/browse/riddle
riddle|noun|a question or statement so framed as to exercise one's ingenuity in answering it or discovering its meaning; conundrum.|http://www.dictionary.com/browse/riddle
ride|verb|to sit on and manage a horse or other animal in motion; be carried on the back of an animal.|http://www.dictionary.com/browse/ride
ridicule|noun|speech or action intended to cause contemptuous laughter at a person or thing; derision.|http://www.dictionary.com/browse/ridicule
rid|verb|to clear, disencumber, or free of something objectionable (usually followed by of)|http://www.dictionary.com/browse/rid
riffle|verb|to turn hastily; flutter and shift|http://www.dictionary.com/browse/riffle
rifle|noun|a shoulder firearm with spiral grooves cut in the inner surface of the gun barrel to give the bullet a rotatory motion and thus a more precise trajectory.|http://www.dictionary.com/browse/rifle
rifle|noun|a shoulder firearm with spiral grooves cut in the inner surface of the gun barrel to give the bullet a rotatory motion and thus a more precise trajectory.|http://www.dictionary.com/browse/rifle
righteously|adjective|characterized by uprightness or morality|http://www.dictionary.com/browse/righteously
rightfully|adjective|having a valid or just claim, as to some property or position; legitimate|http://www.dictionary.com/browse/rightfully
rigidly|adjective|stiff or unyielding; not pliant or flexible; hard|http://www.dictionary.com/browse/rigidly
rings|noun|a typically circular band of metal or other durable material, especially one of gold or other precious metal, often set with gems, for wearing on the finger as an ornament, a token of betrothal or marriage, etc.|http://www.dictionary.com/browse/rings
ring|noun|a typically circular band of metal or other durable material, especially one of gold or other precious metal, often set with gems, for wearing on the finger as an ornament, a token of betrothal or marriage, etc.|http://www.dictionary.com/browse/ring
ring|noun|a typically circular band of metal or other durable material, especially one of gold or other precious metal, often set with gems, for wearing on the finger as an ornament, a token of betrothal or marriage, etc.|http://www.dictionary.com/browse/ring
rinse|verb|to wash lightly, as by pouring water into or over or by dipping in water|http://www.dictionary.com/browse/rinse
riposte|noun|a quick, sharp return in speech or action; counterstroke|http://www.dictionary.com/browse/riposte
rip|verb|to cut or tear apart in a rough or vigorous manner|http://www.dictionary.com/browse/rip
rise|verb|to get up from a lying, sitting, or kneeling posture; assume an upright position|http://www.dictionary.com/browse/rise
risk|noun|exposure to the chance of injury or loss; a hazard or dangerous chance|http://www.dictionary.com/browse/risk
river|noun|a natural stream of water of fairly large size flowing in a definite course or channel or series of diverging and converging channels.|http://www.dictionary.com/browse/river
road|noun|a long, narrow stretch with a smoothed or paved surface, made for traveling by motor vehicle, carriage, etc., between two or more points; street or highway.|http://www.dictionary.com/browse/road
roam|verb|to walk, go, or travel without a fixed purpose or direction; ramble; wander; rove|http://www.dictionary.com/browse/roam
roar|verb|to utter a loud, deep cry or howl, as in excitement, distress, or anger.|http://www.dictionary.com/browse/roar
roast|verb|to bake (meat or other food) uncovered, especially in an oven.|http://www.dictionary.com/browse/roast
robin|noun|any of several small Old World birds having a red or reddish breast, especially Erithacus rubecula, of Europe.|http://www.dictionary.com/browse/robin
rob|verb|to take something from (someone) by unlawful force or threat of violence; steal from.|http://www.dictionary.com/browse/rob
rock|noun|a large mass of stone forming a hill, cliff, promontory, or the like.|http://www.dictionary.com/browse/rock
rock|noun|a large mass of stone forming a hill, cliff, promontory, or the like.|http://www.dictionary.com/browse/rock
rod|noun|a stick, wand, staff, or the like, of wood, metal, or other material.|http://www.dictionary.com/browse/rod
roll|verb|to move along a surface by revolving or turning over and over, as a ball or a wheel.|http://www.dictionary.com/browse/roll
roll|verb|to move along a surface by revolving or turning over and over, as a ball or a wheel.|http://www.dictionary.com/browse/roll
romp|verb|to play or frolic in a lively or boisterous manner.|http://www.dictionary.com/browse/romp
roof|noun|the external upper covering of a house or other building.|http://www.dictionary.com/browse/roof
room|noun|a portion of space within a building or other structure, separated by walls or partitions from other parts|http://www.dictionary.com/browse/room
root|noun|a part of the body of a plant that develops, typically, from the radicle and grows downward into the soil, anchoring the plant and absorbing nutriment and moisture.|http://www.dictionary.com/browse/root
rose|noun|any of the wild or cultivated, usually prickly-stemmed, pinnate-leaved, showy-flowered shrubs of the genus Rosa.|http://www.dictionary.com/browse/rose
rotate|verb|to cause to turn around an axis or center point; revolve.|http://www.dictionary.com/browse/rotate
rot|verb|to undergo decomposition; decay.|http://www.dictionary.com/browse/rot
roughly|adjective|having a coarse or uneven surface, as from projections, irregularities, or breaks; not smooth|http://www.dictionary.com/browse/roughly
round|adjective|having a flat, circular surface, as a disk.|http://www.dictionary.com/browse/round
rouse|verb|to bring out of a state of sleep, unconsciousness, inactivity, fancied security, apathy, depression, etc.|http://www.dictionary.com/browse/rouse
route|noun|a course, way, or road for passage or travel|http://www.dictionary.com/browse/route
rub|verb|to subject the surface of (a thing or person) to pressure and friction, as in cleaning, smoothing, polishing, coating, massaging, or soothing|http://www.dictionary.com/browse/rub
rub|verb|to subject the surface of (a thing or person) to pressure and friction, as in cleaning, smoothing, polishing, coating, massaging, or soothing|http://www.dictionary.com/browse/rub
rudely|adjective|discourteous or impolite, especially in a deliberate way|http://www.dictionary.com/browse/rudely
ruffle|verb|to destroy the smoothness or evenness of|http://www.dictionary.com/browse/ruffle
ruin|noun|ruins, the remains of a building, city, etc., that has been destroyed or that is in disrepair or a state of decay|http://www.dictionary.com/browse/ruin
rule|noun|a principle or regulation governing conduct, action, procedure, arrangement, etc.|http://www.dictionary.com/browse/rule
rule|noun|a principle or regulation governing conduct, action, procedure, arrangement, etc.|http://www.dictionary.com/browse/rule
rumble|verb|to make a deep, heavy, somewhat muffled, continuous sound, as thunder.|http://www.dictionary.com/browse/rumble
ruminate|verb|to chew the cud, as a ruminant.|http://www.dictionary.com/browse/ruminate
rummage|verb|to search thoroughly or actively through (a place, receptacle, etc.), especially by moving around, turning over, or looking through contents.|http://www.dictionary.com/browse/rummage
rumormonger|noun|a person given to spreading rumors, often maliciously.|http://www.dictionary.com/browse/rumormonger
run|verb|to go quickly by moving the legs more rapidly than at a walk and in such a manner that for an instant in each step all or both feet are off the ground.|http://www.dictionary.com/browse/run
run|verb|to go quickly by moving the legs more rapidly than at a walk and in such a manner that for an instant in each step all or both feet are off the ground.|http://www.dictionary.com/browse/run
rush|verb|to move, act, or progress with speed, impetuosity, or violence.|http://www.dictionary.com/browse/rush
rustle|verb|to make a succession of slight, soft sounds, as of parts rubbing gently one on another, as leaves, silks, or papers.|http://www.dictionary.com/browse/rustle
sack|noun|a large bag of strong, coarsely woven material, as for grain, potatoes, or coal.|http://www.dictionary.com/browse/sack
sack|noun|a large bag of strong, coarsely woven material, as for grain, potatoes, or coal.|http://www.dictionary.com/browse/sack
sadly|adjective|affected by unhappiness or grief; sorrowful or mournful|http://www.dictionary.com/browse/sadly
safely|adjective|secure from liability to harm, injury, danger, or risk|http://www.dictionary.com/browse/safely
sail|noun|an area of canvas or other fabric extended to the wind in such a way as to transmit the force of the wind to an assemblage of spars and rigging mounted firmly on a hull, raft, iceboat, etc., so as to drive it along.|http://www.dictionary.com/browse/sail
sail|noun|an area of canvas or other fabric extended to the wind in such a way as to transmit the force of the wind to an assemblage of spars and rigging mounted firmly on a hull, raft, iceboat, etc., so as to drive it along.|http://www.dictionary.com/browse/sail
salivate|verb|to produce saliva.|http://www.dictionary.com/browse/salivate
salt|noun|a crystalline compound, sodium chloride, NaCl, occurring as a mineral, a constituent of seawater, etc., and  for seasoning food, as a preservative, etc.|http://www.dictionary.com/browse/salt
salute|verb|Military. to pay respect to or honor by some formal act, as by raising the right hand to the side of the headgear, presenting arms, firing cannon, dipping colors, etc.|http://www.dictionary.com/browse/salute
salvage|noun|the act of saving a ship or its cargo from perils of the seas.|http://www.dictionary.com/browse/salvage
sand|noun|the more or less fine debris of rocks, consisting of small, loose grains, often of quartz.|http://www.dictionary.com/browse/sand
sashay|verb|to glide, move, or proceed easily or nonchalantly|http://www.dictionary.com/browse/sashay
satirize|verb|to attack or ridicule with satire.|http://www.dictionary.com/browse/satirize
satisfy|verb|to fulfill the desires, expectations, needs, or demands of (a person, the mind, etc.); give full contentment to|http://www.dictionary.com/browse/satisfy
saturate|verb|to cause (a substance) to unite with the greatest possible amount of another substance, through solution, chemical combination, or the like.|http://www.dictionary.com/browse/saturate
saunter|verb|to walk with a leisurely gait; stroll|http://www.dictionary.com/browse/saunter
savage|adjective|fierce, ferocious, or cruel; untamed|http://www.dictionary.com/browse/savage
save|verb|to rescue from danger or possible harm, injury, or loss|http://www.dictionary.com/browse/save
savor|noun|the quality in a substance that affects the sense of taste or of smell.|http://www.dictionary.com/browse/savor
savour|noun|the quality in a substance that affects the sense of taste or of smell.|http://www.dictionary.com/browse/savour
saw|noun|a tool or device for cutting, typically a thin blade of metal with a series of sharp teeth.|http://www.dictionary.com/browse/saw
say|verb|to utter or pronounce; speak|http://www.dictionary.com/browse/say
scale|noun|Zoology. one of the hard, bony or dentinal plates, either flat or denticulate, forming the covering of certain other animals, as fishes.|http://www.dictionary.com/browse/scale
scale|noun|Zoology. one of the thin, flat, horny plates forming the covering of certain animals, as snakes, lizards, and pangolins.|http://www.dictionary.com/browse/scale
scamper|verb|to run or go hastily or quickly.|http://www.dictionary.com/browse/scamper
scan|verb|to glance at or over or read hastily|http://www.dictionary.com/browse/scan
scarcely|adverb|barely; hardly; not quite|http://www.dictionary.com/browse/scarcely
scarecrow|noun|an object, usually a figure of a person in old clothes, set up to frighten crows or other birds away from crops.|http://www.dictionary.com/browse/scarecrow
scare|verb|to fill, especially suddenly, with fear or terror; frighten; alarm.|http://www.dictionary.com/browse/scare
scarf|noun|a long, broad strip of wool, silk, lace, or other material worn about the neck, shoulders, or head, for ornament or protection against cold, drafts, etc.; muffler.|http://www.dictionary.com/browse/scarf
scatter|verb|to throw loosely about; distribute at irregular intervals|http://www.dictionary.com/browse/scatter
scene|noun|the place where some action or event occurs|http://www.dictionary.com/browse/scene
scent|noun|a distinctive odor, especially when agreeable|http://www.dictionary.com/browse/scent
schedule|noun|a plan of procedure, usually written, for a proposed objective, especially with reference to the sequence of and time allotted for each item or operation necessary to its completion|http://www.dictionary.com/browse/schedule
scheme|noun|a plan, design, or program of action to be followed; project.|http://www.dictionary.com/browse/scheme
school|noun|an institution where instruction is given, especially to persons under college age|http://www.dictionary.com/browse/school
school|noun|an institution where instruction is given, especially to persons under college age|http://www.dictionary.com/browse/school
science|noun|a branch of knowledge or study dealing with a body of facts or truths systematically arranged and showing the operation of general laws|http://www.dictionary.com/browse/science
scissors|noun| a cutting instrument for paper, cloth, etc., consisting of two blades, each having a ring-shaped handle, that are so pivoted together that their sharp edges work one against the other (often  with pair of).|http://www.dictionary.com/browse/scissors
scoff|verb|to speak derisively; mock; jeer (often followed by at)|http://www.dictionary.com/browse/scoff
scold|verb|to find fault with angrily; chide; reprimand|http://www.dictionary.com/browse/scold
scoop|noun|a ladle or ladlelike utensil, especially a small, deep-sided shovel with a short, horizontal handle, for taking up flour, sugar, etc.|http://www.dictionary.com/browse/scoop
scoot|verb|to go swiftly or hastily; dart.|http://www.dictionary.com/browse/scoot
scorch|verb|to affect the color, taste, etc., of by burning slightly|http://www.dictionary.com/browse/scorch
score|noun|the record of points or strokes made by the competitors in a game or match.|http://www.dictionary.com/browse/score
scorn|noun|open or unqualified contempt; disdain|http://www.dictionary.com/browse/scorn
scour|verb|to remove dirt, grease, etc., from or to cleanse or polish by hard rubbing, as with a rough or abrasive material|http://www.dictionary.com/browse/scour
scowl|verb|to draw down or contract the brows in a sullen, displeased, or angry manner.|http://www.dictionary.com/browse/scowl
scramble|verb|to climb or move quickly using one's hands and feet, as down a rough incline.|http://www.dictionary.com/browse/scramble
scrape|verb|to deprive of or free from an outer layer, adhering matter, etc., or to smooth by drawing or rubbing something, especially a sharp or rough instrument, over the surface|http://www.dictionary.com/browse/scrape
scratch|verb|to break, mar, or mark the surface of by rubbing, scraping, or tearing with something sharp or rough|http://www.dictionary.com/browse/scratch
scrawl|verb|to write or draw in a sprawling, awkward manner|http://www.dictionary.com/browse/scrawl
scream|verb|to utter a loud, sharp, piercing cry.|http://www.dictionary.com/browse/scream
screech|verb|to utter or make a harsh, shrill cry or sound|http://www.dictionary.com/browse/screech
screw|noun|a metal fastener having a tapered shank with a helical thread, and topped with a slotted head, driven into wood or the like by rotating, especially by means of a screwdriver.|http://www.dictionary.com/browse/screw
screw|noun|a metal fastener having a tapered shank with a helical thread, and topped with a slotted head, driven into wood or the like by rotating, especially by means of a screwdriver.|http://www.dictionary.com/browse/screw
scribble|verb|to write hastily or carelessly|http://www.dictionary.com/browse/scribble
scribe|noun|a person who serves as a professional copyist, especially one who made copies of manuscripts before the invention of printing.|http://www.dictionary.com/browse/scribe
scrub|verb|to rub hard with a brush, cloth, etc., or against a rough surface in washing.|http://www.dictionary.com/browse/scrub
scrunch|verb|to crunch, crush, or crumple.|http://www.dictionary.com/browse/scrunch
scrutinise|verb|to examine in detail with careful or critical attention.|http://www.dictionary.com/browse/scrutinise
scrutinize|verb|to examine in detail with careful or critical attention.|http://www.dictionary.com/browse/scrutinize
scuff|verb|to scrape (something) with one's foot or feet.|http://www.dictionary.com/browse/scuff
scurry|verb|to go or move quickly or in haste.|http://www.dictionary.com/browse/scurry
scuttle|noun|a deep bucket for carrying coal.|http://www.dictionary.com/browse/scuttle
seal|noun|an embossed emblem, figure, symbol, word, letter, etc.,  as attestation or evidence of authenticity.|http://www.dictionary.com/browse/seal
seam|noun|the line formed by sewing together pieces of cloth, leather, or the like.|http://www.dictionary.com/browse/seam
searchingly|adjective|examining carefully or thoroughly|http://www.dictionary.com/browse/searchingly
search|verb|to go or look through (a place, area, etc.) carefully in order to find something missing or lost|http://www.dictionary.com/browse/search
seashore|noun|land along the sea or ocean.|http://www.dictionary.com/browse/seashore
seat|noun|something designed to support a person in a sitting position, as a chair, bench, or pew; a place on or in which one sits.|http://www.dictionary.com/browse/seat
sea|noun|the salt waters that cover the greater part of the earth's surface.|http://www.dictionary.com/browse/sea
secretary|noun|a person, usually an official, who is in charge of the records, correspondence, minutes of meetings, and related affairs of an organization, company, association, etc.|http://www.dictionary.com/browse/secretary
section|noun|a part that is cut off or separated.|http://www.dictionary.com/browse/section
secure|adjective|free from or not exposed to danger or harm; safe.|http://www.dictionary.com/browse/secure
sedately|adjective|calm, quiet, or composed; undisturbed by passion or excitement|http://www.dictionary.com/browse/sedately
seed|noun|the fertilized, matured ovule of a flowering plant, containing an embryo or rudimentary plant.|http://www.dictionary.com/browse/seed
seek|verb|to go in search or quest of|http://www.dictionary.com/browse/seek
seemingly|adjective|apparent; appearing, whether truly or falsely, to be as specified|http://www.dictionary.com/browse/seemingly
seem|verb|to appear to be, feel, do, etc.|http://www.dictionary.com/browse/seem
seep|verb|to pass, flow, or ooze gradually through a porous substance|http://www.dictionary.com/browse/seep
seethe|verb|to surge or foam as if boiling.|http://www.dictionary.com/browse/seethe
see|verb|to perceive with the eyes; look at.|http://www.dictionary.com/browse/see
seize|verb|to take hold of suddenly or forcibly; grasp|http://www.dictionary.com/browse/seize
seldom|adverb|on only a few occasions; rarely; infrequently; not often|http://www.dictionary.com/browse/seldom
selection|noun|an act or instance of selecting or the state of being selected; choice.|http://www.dictionary.com/browse/selection
select|verb|to choose in preference to another or others; pick out.|http://www.dictionary.com/browse/select
selfishly|adjective|devoted to or caring only for oneself; concerned primarily with one's own interests, benefits, welfare, etc., regardless of others.|http://www.dictionary.com/browse/selfishly
self|noun|a person or thing referred to with respect to complete individuality|http://www.dictionary.com/browse/self
sell|verb|to transfer (goods) to or render (services) for another in exchange for money; dispose of to a purchaser for a price|http://www.dictionary.com/browse/sell
sense|noun|any of the faculties, as sight, hearing, smell, taste, or touch, by which humans and animals perceive stimuli originating from outside or inside the body|http://www.dictionary.com/browse/sense
sense|noun|any of the faculties, as sight, hearing, smell, taste, or touch, by which humans and animals perceive stimuli originating from outside or inside the body|http://www.dictionary.com/browse/sense
sentence|noun|Grammar. a grammatical unit of one or more words that expresses an independent statement, question, request, command, exclamation, etc., and that typically has a subject as well as a predicate, as in John is here. or Is John here? In print or writing, a sentence typically begins with a capital letter and ends with appropriate punctuation; in speech it displays recognizable, communicative intonation patterns and is often marked by preceding and following pauses.|http://www.dictionary.com/browse/sentence
separately|verb|to keep apart or divide, as by an intervening barrier or space|http://www.dictionary.com/browse/separately
separate|verb|to keep apart or divide, as by an intervening barrier or space|http://www.dictionary.com/browse/separate
serenade|noun|a complimentary performance of vocal or instrumental music in the open air at night, as by a lover under the window of his lady.|http://www.dictionary.com/browse/serenade
seriously|adverb|in a serious manner|http://www.dictionary.com/browse/seriously
servant|noun|a person employed by another, especially to perform domestic duties.|http://www.dictionary.com/browse/servant
serve|verb|to act as a servant.|http://www.dictionary.com/browse/serve
service|noun|an act of helpful activity; help; aid|http://www.dictionary.com/browse/service
settle|verb|to appoint, fix, or resolve definitely and conclusively; agree upon (as time, price, or conditions).|http://www.dictionary.com/browse/settle
set|verb|to put (something or someone) in a particular place|http://www.dictionary.com/browse/set
sever|verb|to separate (a part) from the whole, as by cutting or the like.|http://www.dictionary.com/browse/sever
sew|verb|to join or attach by stitches.|http://www.dictionary.com/browse/sew
shade|noun|the comparative darkness ca by the interception or screening of rays of light from an object, place, or area.|http://www.dictionary.com/browse/shade
shade|noun|the comparative darkness ca by the interception or screening of rays of light from an object, place, or area.|http://www.dictionary.com/browse/shade
shake|verb|to move or sway with short, quick, irregular vibratory movements.|http://www.dictionary.com/browse/shake
shake|verb|to move or sway with short, quick, irregular vibratory movements.|http://www.dictionary.com/browse/shake
shakily|adjective|tending to shake or tremble.|http://www.dictionary.com/browse/shakily
shamble|noun|shambles, ( with a singular or plural verb)any scene of destruction|http://www.dictionary.com/browse/shamble
shame|noun|the painful feeling arising from the consciousness of something dishonorable, improper, ridiculous, etc., done by oneself or another|http://www.dictionary.com/browse/shame
shape|noun|the quality of a distinct object or body in having an external surface or outline of specific form or figure.|http://www.dictionary.com/browse/shape
shape|noun|the quality of a distinct object or body in having an external surface or outline of specific form or figure.|http://www.dictionary.com/browse/shape
share|noun|the full or proper portion or part allotted or belonging to or contributed or owed by an individual or group.|http://www.dictionary.com/browse/share
sharpen|verb|to make or become sharp or sharper.|http://www.dictionary.com/browse/sharpen
sharply|adjective|having a thin cutting edge or a fine point; well-adapted for cutting or piercing|http://www.dictionary.com/browse/sharply
shatter|verb|to break (something) into pieces, as by a blow.|http://www.dictionary.com/browse/shatter
shave|verb|to remove a growth of beard with a razor.|http://www.dictionary.com/browse/shave
shear|verb|to cut (something).|http://www.dictionary.com/browse/shear
sheathe|verb|to put (a sword, dagger, etc.) into a sheath.|http://www.dictionary.com/browse/sheathe
shed|noun|a slight or rude structure built for shelter, storage, etc.|http://www.dictionary.com/browse/shed
sheepishly|adjective|embarrassed or bashful, as by having done something wrong or foolish.|http://www.dictionary.com/browse/sheepishly
sheep|noun|any of numerous ruminant mammals of the genus Ovis, of the family Bovidae, closely related to the goats, especially O. aries, bred in a number of domesticated varieties.|http://www.dictionary.com/browse/sheep
sheet|noun|a large rectangular piece of cotton, linen, or other material  as an article of bedding, commonly spread in pairs so that one is immediately above and the other immediately below the sleeper.|http://www.dictionary.com/browse/sheet
shelf|noun|a thin slab of wood, metal, etc., fixed horizontally to a wall or in a frame, for supporting objects.|http://www.dictionary.com/browse/shelf
shelter|noun|something beneath, behind, or within which a person, animal, or thing is protected from storms, missiles, adverse conditions, etc.; refuge.|http://www.dictionary.com/browse/shelter
shield|noun|a broad piece of armor, varying widely in form and size, carried apart from the body, usually on the left arm, as a defense against swords, lances, arrows, etc.|http://www.dictionary.com/browse/shield
shift|verb|to put (something) aside and replace it by another or others; change or exchange|http://www.dictionary.com/browse/shift
shine|verb|to give forth or glow with light; shed or cast light.|http://www.dictionary.com/browse/shine
ship|noun|a vessel, especially a large oceangoing one propelled by sails or engines.|http://www.dictionary.com/browse/ship
shirk|verb|to evade (work, duty, responsibility, etc.).|http://www.dictionary.com/browse/shirk
shirt|noun|a long- or short-sleeved garment for the upper part of the body, usually lightweight and having a collar and a front opening.|http://www.dictionary.com/browse/shirt
shiver|verb|to shake or tremble with cold, fear, excitement, etc.|http://www.dictionary.com/browse/shiver
shock|noun|a sudden and violent blow or impact; collision.|http://www.dictionary.com/browse/shock
shock|noun|a sudden and violent blow or impact; collision.|http://www.dictionary.com/browse/shock
shoes|noun|an external covering for the human foot, usually of leather and consisting of a more or less stiff or heavy sole and a lighter upper part ending a short distance above, at, or below the ankle.|http://www.dictionary.com/browse/shoes
shoe|noun|an external covering for the human foot, usually of leather and consisting of a more or less stiff or heavy sole and a lighter upper part ending a short distance above, at, or below the ankle.|http://www.dictionary.com/browse/shoe
shoot|verb|to hit, wound, damage, kill, or destroy with a missile discharged from a weapon.|http://www.dictionary.com/browse/shoot
shoo|interjection|( to scare or drive away a cat, dog, chickens, birds, etc.)|http://www.dictionary.com/browse/shoo
shop|noun|a retail store, especially a small one.|http://www.dictionary.com/browse/shop
shop|noun|a retail store, especially a small one.|http://www.dictionary.com/browse/shop
shorten|verb|to make short or shorter.|http://www.dictionary.com/browse/shorten
shoulder|noun|the part of each side of the body in humans, at the top of the trunk, extending from each side of the base of the neck to the region where the arm articulates with the trunk.|http://www.dictionary.com/browse/shoulder
shout|verb|to call or cry out loudly and vigorously.|http://www.dictionary.com/browse/shout
shovel|noun|an implement consisting of a broad blade or scoop attached to a long handle,  for taking up, removing, or throwing loose matter, as earth, snow, or coal.|http://www.dictionary.com/browse/shovel
shove|verb|to move along by force from behind; push.|http://www.dictionary.com/browse/shove
showcase|noun|a glass case for the display and protection of articles in shops, museums, etc.|http://www.dictionary.com/browse/showcase
shower|noun|a brief fall of rain or, sometimes, of hail or snow.|http://www.dictionary.com/browse/shower
show|verb|to cause or allow to be seen; exhibit; display.|http://www.dictionary.com/browse/show
show|verb|to cause or allow to be seen; exhibit; display.|http://www.dictionary.com/browse/show
shred|noun|a piece cut or torn off, especially in a narrow strip.|http://www.dictionary.com/browse/shred
shriek|noun|a loud, sharp, shrill cry.|http://www.dictionary.com/browse/shriek
shrilly|adjective|high-pitched and piercing in sound quality|http://www.dictionary.com/browse/shrilly
shrink|verb|to draw back, as in retreat or avoidance|http://www.dictionary.com/browse/shrink
shrug|verb|to raise and contract (the shoulders), expressing indifference, disdain, etc.|http://www.dictionary.com/browse/shrug
shudder|verb|to tremble with a sudden convulsive movement, as from horror, fear, or cold.|http://www.dictionary.com/browse/shudder
shuffle|verb|to walk without lifting the feet or with clumsy steps and a shambling gait.|http://www.dictionary.com/browse/shuffle
shush|interjection|hush ( as a command to be quiet or silent).|http://www.dictionary.com/browse/shush
shut|verb|to put (a door, cover, etc.) in position to close or obstruct.|http://www.dictionary.com/browse/shut
shyly|adjective|bashful; retiring.|http://www.dictionary.com/browse/shyly
sidestep|verb|to step to one side.|http://www.dictionary.com/browse/sidestep
sidewalk|noun|a walk, especially a paved one, at the side of a street or road.|http://www.dictionary.com/browse/sidewalk
side|noun|one of the surfaces forming the outside of or bounding a thing, or one of the lines bounding a geometric figure.|http://www.dictionary.com/browse/side
sidle|verb|to move sideways or obliquely.|http://www.dictionary.com/browse/sidle
sift|verb|to separate and retain the coarse parts of (flour, ashes, etc.) with a sieve.|http://www.dictionary.com/browse/sift
sigh|verb|to let out one's breath audibly, as from sorrow, weariness, or relief.|http://www.dictionary.com/browse/sigh
signal|noun|anything that serves to indicate, warn, direct, command, or the like, as a light, a gesture, an act, etc.|http://www.dictionary.com/browse/signal
sign|noun|a token; indication.|http://www.dictionary.com/browse/sign
sign|noun|a token; indication.|http://www.dictionary.com/browse/sign
silence|noun|absence of any sound or noise; stillness.|http://www.dictionary.com/browse/silence
silently|adjective|making no sound; quiet; still|http://www.dictionary.com/browse/silently
silk|noun|the soft, lustrous fiber obtained as a filament from the cocoon of the silkworm.|http://www.dictionary.com/browse/silk
silver|noun|Chemistry. a white, ductile metallic element,  for making mirrors, coins, ornaments, table utensils, photographic chemicals, conductors, etc. Symbol|http://www.dictionary.com/browse/silver
simmer|verb|to cook or cook in a liquid at or just below the boiling point.|http://www.dictionary.com/browse/simmer
simper|verb|to smile in a silly, self-conscious way.|http://www.dictionary.com/browse/simper
simplify|verb|to make less complex or complicated; make plainer or easier|http://www.dictionary.com/browse/simplify
sing|verb|to utter words or sounds in succession with musical modulations of the voice; vocalize melodically.|http://www.dictionary.com/browse/sing
sink|verb|to displace part of the volume of a supporting substance or object and become totally or partially submerged or enveloped; fall or descend into or below the surface or to the bottom (often followed by in or into)|http://www.dictionary.com/browse/sink
sink|verb|to displace part of the volume of a supporting substance or object and become totally or partially submerged or enveloped; fall or descend into or below the surface or to the bottom (often followed by in or into)|http://www.dictionary.com/browse/sink
sin|Trigonometry.|sine.|http://www.dictionary.com/browse/sin
sip|verb|to drink (a liquid) a little at a time; take small tastes of|http://www.dictionary.com/browse/sip
sisters|noun|a female offspring having both parents in common with another offspring; female sibling.|http://www.dictionary.com/browse/sisters
sister|noun|a female offspring having both parents in common with another offspring; female sibling.|http://www.dictionary.com/browse/sister
sit|verb|to rest with the body supported by the buttocks or thighs; be seated.|http://www.dictionary.com/browse/sit
size|noun|the spatial dimensions, proportions, magnitude, or bulk of anything|http://www.dictionary.com/browse/size
size|noun|the spatial dimensions, proportions, magnitude, or bulk of anything|http://www.dictionary.com/browse/size
sketch|noun|a simply or hastily executed drawing or painting, especially a preliminary one, giving the essential features without the details.|http://www.dictionary.com/browse/sketch
skewer|noun|a long pin of wood or metal for inserting through meat or other food to hold or bind it in cooking.|http://www.dictionary.com/browse/skewer
skid|noun|a plank, bar, log, or the like, especially one of a pair, on which something heavy may be slid or rolled along.|http://www.dictionary.com/browse/skid
skim|verb|to take up or remove (floating matter) from the surface of a liquid, as with a spoon or ladle|http://www.dictionary.com/browse/skim
skin|noun|the external covering or integument of an animal body, especially when soft and flexible.|http://www.dictionary.com/browse/skin
skip|verb|to move in a light, springy manner by bounding forward with alternate hops on each foot.|http://www.dictionary.com/browse/skip
skirt|noun|the part of a gown, dress, slip, or coat that extends downward from the waist.|http://www.dictionary.com/browse/skirt
skitter|verb|to go, run, or glide lightly or rapidly.|http://www.dictionary.com/browse/skitter
ski|noun|one of a pair of long, slender runners made of wood, plastic, or metal  in gliding over snow.|http://www.dictionary.com/browse/ski
skulk|verb|to lie or keep in hiding, as for some evil reason|http://www.dictionary.com/browse/skulk
sky|noun|the region of the clouds or the upper air; the upper atmosphere of the earth|http://www.dictionary.com/browse/sky
slam|verb|to shut with force and noise|http://www.dictionary.com/browse/slam
slander|noun|defamation; calumny|http://www.dictionary.com/browse/slander
slap|noun|a sharp blow or smack, especially with the open hand or with something flat.|http://www.dictionary.com/browse/slap
slash|verb|to cut with a violent sweeping stroke or by striking violently and at random, as with a knife or sword.|http://www.dictionary.com/browse/slash
slather|verb|to spread or apply thickly|http://www.dictionary.com/browse/slather
slave|noun|a person who is the property of and wholly subject to another; a bond servant.|http://www.dictionary.com/browse/slave
slay|verb|to kill by violence.|http://www.dictionary.com/browse/slay
sleepily|adjective|ready or inclined to sleep; drowsy.|http://www.dictionary.com/browse/sleepily
sleep|verb|to take the rest afforded by a suspension of voluntary bodily functions and the natural suspension, complete or partial, of consciousness; cease being awake.|http://www.dictionary.com/browse/sleep
sleep|verb|to take the rest afforded by a suspension of voluntary bodily functions and the natural suspension, complete or partial, of consciousness; cease being awake.|http://www.dictionary.com/browse/sleep
sleet|noun|precipitation in the form of ice pellets created by the freezing of rain as it falls|http://www.dictionary.com/browse/sleet
slice|noun|a thin, flat piece cut from something|http://www.dictionary.com/browse/slice
slick|adjective|smooth and glossy; sleek.|http://www.dictionary.com/browse/slick
slide|verb|to move along in continuous contact with a smooth or slippery surface|http://www.dictionary.com/browse/slide
sling|noun|a device for hurling stones or other missiles that consists, typically, of a short strap with a long string at each end and that is operated by placing the missile in the strap, and, holding the ends of the strings in one hand, whirling the instrument around in a circle and releasing one of the strings to discharge the missile.|http://www.dictionary.com/browse/sling
slink|verb|to move or go in a furtive, abject manner, as from fear, cowardice, or shame.|http://www.dictionary.com/browse/slink
slip|verb|to move, flow, pass, or go smoothly or easily; glide; slide|http://www.dictionary.com/browse/slip
slip|verb|to move, flow, pass, or go smoothly or easily; glide; slide|http://www.dictionary.com/browse/slip
slither|verb|to slide down or along a surface, especially unsteadily, from side to side, or with some friction or noise|http://www.dictionary.com/browse/slither
slit|verb|to cut apart or open along a line; make a long cut, fissure, or opening in.|http://www.dictionary.com/browse/slit
slobber|verb|to let saliva or liquid run from the mouth; slaver; drivel.|http://www.dictionary.com/browse/slobber
slope|verb|to have or take an inclined or oblique direction or angle considered with reference to a vertical or horizontal plane; slant.|http://www.dictionary.com/browse/slope
slosh|verb|to splash or move through water, mud, or slush.|http://www.dictionary.com/browse/slosh
slouch|verb|to sit or stand with an awkward, drooping posture.|http://www.dictionary.com/browse/slouch
slowly|adverb|in a slow manner; at a slow speed|http://www.dictionary.com/browse/slowly
slow|adjective|moving or proceeding with little or less than usual speed or velocity|http://www.dictionary.com/browse/slow
slumber|verb|to sleep, especially lightly; doze; drowse.|http://www.dictionary.com/browse/slumber
slump|verb|to drop or fall heavily; collapse|http://www.dictionary.com/browse/slump
slurp|verb|to ingest (food or drink) with loud sucking noises|http://www.dictionary.com/browse/slurp
slur|verb|to pass over lightly or without due mention or consideration (often followed by over)|http://www.dictionary.com/browse/slur
smack|noun|a taste or flavor, especially a slight flavor distinctive or suggestive of something|http://www.dictionary.com/browse/smack
smash|verb|to break to pieces with violence and often with a crashing sound, as by striking, letting fall, or dashing against something; shatter|http://www.dictionary.com/browse/smash
smash|verb|to break to pieces with violence and often with a crashing sound, as by striking, letting fall, or dashing against something; shatter|http://www.dictionary.com/browse/smash
smear|verb|to spread or daub (an oily, greasy, viscous, or wet substance) on or over something|http://www.dictionary.com/browse/smear
smell|verb|to perceive the odor or scent of through the nose by means of the olfactory nerves; inhale the odor of|http://www.dictionary.com/browse/smell
smell|verb|to perceive the odor or scent of through the nose by means of the olfactory nerves; inhale the odor of|http://www.dictionary.com/browse/smell
smile|verb|to assume a facial expression indicating pleasure, favor, or amusement, but sometimes derision or scorn, characterized by an upturning of the corners of the mouth.|http://www.dictionary.com/browse/smile
smile|verb|to assume a facial expression indicating pleasure, favor, or amusement, but sometimes derision or scorn, characterized by an upturning of the corners of the mouth.|http://www.dictionary.com/browse/smile
smirk|verb|to smile in an affected, smug, or offensively familiar way.|http://www.dictionary.com/browse/smirk
smite|verb|to strike or hit hard, with or as with the hand, a stick, or other weapon|http://www.dictionary.com/browse/smite
smoke|noun|the visible vapor and gases given off by a burning or smoldering substance, especially the gray, brown, or blackish mixture of gases and suspended carbon particles resulting from the combustion of wood, peat, coal, or other organic matter.|http://www.dictionary.com/browse/smoke
smoke|noun|the visible vapor and gases given off by a burning or smoldering substance, especially the gray, brown, or blackish mixture of gases and suspended carbon particles resulting from the combustion of wood, peat, coal, or other organic matter.|http://www.dictionary.com/browse/smoke
smolder|verb|to burn without flame; undergo slow or suppressed combustion.|http://www.dictionary.com/browse/smolder
smooch|verb, noun|smutch.|http://www.dictionary.com/browse/smooch
smoothly|adjective|free from projections or unevenness of surface; not rough|http://www.dictionary.com/browse/smoothly
smooth|adjective|free from projections or unevenness of surface; not rough|http://www.dictionary.com/browse/smooth
smother|verb|to stifle or suffocate, as by smoke or other means of preventing free breathing.|http://www.dictionary.com/browse/smother
smoulder|verb, noun|smolder.|http://www.dictionary.com/browse/smoulder
smudge|noun|a dirty mark or smear.|http://www.dictionary.com/browse/smudge
smush|verb|to mash or push, especially to push down or in; compress|http://www.dictionary.com/browse/smush
snails|noun|any mollusk of the class Gastropoda, having a spirally coiled shell and a ventral muscular foot on which it slowly glides about.|http://www.dictionary.com/browse/snails
snail|noun|any mollusk of the class Gastropoda, having a spirally coiled shell and a ventral muscular foot on which it slowly glides about.|http://www.dictionary.com/browse/snail
snakes|noun|any of numerous limbless, scaly, elongate reptiles of the suborder Serpentes, comprising venomous and nonvenomous species inhabiting tropical and temperate areas.|http://www.dictionary.com/browse/snakes
snake|noun|any of numerous limbless, scaly, elongate reptiles of the suborder Serpentes, comprising venomous and nonvenomous species inhabiting tropical and temperate areas.|http://www.dictionary.com/browse/snake
snake|noun|any of numerous limbless, scaly, elongate reptiles of the suborder Serpentes, comprising venomous and nonvenomous species inhabiting tropical and temperate areas.|http://www.dictionary.com/browse/snake
snap|verb|to make a sudden, sharp, distinct sound; crack, as a whip; crackle.|http://www.dictionary.com/browse/snap
snarl|verb|to growl threateningly or viciously, especially with a raised upper lip to bare the teeth, as a dog.|http://www.dictionary.com/browse/snarl
snatch|verb|to make a sudden effort to seize something, as with the hand; grab (usually followed by at).|http://www.dictionary.com/browse/snatch
sneak|verb|to go in a stealthy or furtive manner; slink; skulk.|http://www.dictionary.com/browse/sneak
sneer|verb|to smile, laugh, or contort the face in a manner that shows scorn or contempt|http://www.dictionary.com/browse/sneer
sneeze|verb|to emit air or breath suddenly, forcibly, and audibly through the nose and mouth by involuntary, spasmodic action.|http://www.dictionary.com/browse/sneeze
sneeze|verb|to emit air or breath suddenly, forcibly, and audibly through the nose and mouth by involuntary, spasmodic action.|http://www.dictionary.com/browse/sneeze
snicker|verb|to laugh in a half-suppressed, indecorous or disrespectful manner.|http://www.dictionary.com/browse/snicker
sniffle|verb|to sniff repeatedly, as from a head cold or in repressing tears|http://www.dictionary.com/browse/sniffle
sniff|verb|to draw air through the nose in short, audible inhalations.|http://www.dictionary.com/browse/sniff
snigger|verb, noun|snicker.|http://www.dictionary.com/browse/snigger
snipe|noun|any of several long-billed game birds of the genera Gallinago (Capella) and Limnocryptes, inhabiting marshy areas, as G. gallinago (common snipe) of Eurasia and North America, having barred and striped white, brown, and black plumage.|http://www.dictionary.com/browse/snipe
snip|verb|to cut with a small, quick stroke, or a succession of such strokes, with scissors or the like.|http://www.dictionary.com/browse/snip
snitch|verb|to snatch or steal; pilfer.|http://www.dictionary.com/browse/snitch
snivel|verb|to weep or cry with sniffling.|http://www.dictionary.com/browse/snivel
snooze|verb|to sleep; slumber; doze; nap.|http://www.dictionary.com/browse/snooze
snore|verb|to breathe during sleep with hoarse or harsh sounds ca by the vibrating of the soft palate.|http://www.dictionary.com/browse/snore
snort|verb|(of animals) to force the breath violently through the nostrils with a loud, harsh sound|http://www.dictionary.com/browse/snort
snow|noun|Meteorology. a precipitation in the form of ice crystals, mainly of intricately branched, hexagonal form and often agglomerated into snowflakes, formed directly from the freezing of the water vapor in the air.|http://www.dictionary.com/browse/snow
snow|noun|Meteorology. a precipitation in the form of ice crystals, mainly of intricately branched, hexagonal form and often agglomerated into snowflakes, formed directly from the freezing of the water vapor in the air.|http://www.dictionary.com/browse/snow
snub|verb|to treat with disdain or contempt, especially by ignoring.|http://www.dictionary.com/browse/snub
snuffle|verb|to draw air into the nose for the purpose of smelling something; snuff.|http://www.dictionary.com/browse/snuffle
snuff|verb|to draw in through the nose by inhaling.|http://www.dictionary.com/browse/snuff
snuggle|verb|to lie or press closely, as for comfort or from affection; nestle; cuddle.|http://www.dictionary.com/browse/snuggle
soak|verb|to lie in and become saturated or permeated with water or some other liquid.|http://www.dictionary.com/browse/soak
soap|noun|a substance  for washing and cleansing purposes, usually made by treating a fat with an alkali, as sodium or potassium hydroxide, and consisting chiefly of the sodium or potassium salts of the acids contained in the fat.|http://www.dictionary.com/browse/soap
sober|adjective|not intoxicated or drunk.|http://www.dictionary.com/browse/sober
sob|verb|to weep with a convulsive catching of the breath.|http://www.dictionary.com/browse/sob
socialise|verb|to make social; make fit for life in companionship with others.|http://www.dictionary.com/browse/socialise
socialize|verb|to make social; make fit for life in companionship with others.|http://www.dictionary.com/browse/socialize
social|adjective|relating to, devoted to, or characterized by friendly companionship or relations|http://www.dictionary.com/browse/social
society|noun|an organized group of persons associated together for religious, benevolent, cultural, scientific, political, patriotic, or other purposes.|http://www.dictionary.com/browse/society
sock|noun|a short stocking usually reaching to the calf or just above the ankle.|http://www.dictionary.com/browse/sock
soda|noun|sodium hydroxide.|http://www.dictionary.com/browse/soda
sofa|noun|a long, upholstered couch with a back and two arms or raised ends.|http://www.dictionary.com/browse/sofa
soften|verb|to make soft or softer.|http://www.dictionary.com/browse/soften
softly|adjective|yielding readily to touch or pressure; easily penetrated, divided, or changed in shape; not hard or stiff|http://www.dictionary.com/browse/softly
solemnly|adjective|grave, sober, or mirthless, as a person, the face, speech, tone, or mood|http://www.dictionary.com/browse/solemnly
solidly|adjective|having three dimensions (length, breadth, and thickness), as a geometrical body or figure.|http://www.dictionary.com/browse/solidly
solve|verb|to find the answer or explanation for; clear up; explain|http://www.dictionary.com/browse/solve
somersault|noun|an acrobatic movement, either forward or backward, in which the body rolls end over end, making a complete revolution.|http://www.dictionary.com/browse/somersault
sometimes|adverb|on some occasions; at times; now and then.|http://www.dictionary.com/browse/sometimes
songs|noun|a short metrical composition intended or adapted for singing, especially one in rhymed stanzas; a lyric; a ballad.|http://www.dictionary.com/browse/songs
song|noun|a short metrical composition intended or adapted for singing, especially one in rhymed stanzas; a lyric; a ballad.|http://www.dictionary.com/browse/song
son|noun|a male child or person in relation to his parents.|http://www.dictionary.com/browse/son
soon|adverb|within a short period after this or that time, event, etc.|http://www.dictionary.com/browse/soon
soothe|verb|to tranquilize or calm, as a person or the feelings; relieve, comfort, or refresh|http://www.dictionary.com/browse/soothe
soothsay|verb|to foretell events; predict.|http://www.dictionary.com/browse/soothsay
sort|noun|a particular kind, species, variety, class, or group, distinguished by a common character or nature|http://www.dictionary.com/browse/sort
sort|noun|a particular kind, species, variety, class, or group, distinguished by a common character or nature|http://www.dictionary.com/browse/sort
sough|verb|to make a rushing, rustling, or murmuring sound|http://www.dictionary.com/browse/sough
sound|noun|the sensation produced by stimulation of the organs of hearing by vibrations transmitted through the air or other medium.|http://www.dictionary.com/browse/sound
sound|noun|the sensation produced by stimulation of the organs of hearing by vibrations transmitted through the air or other medium.|http://www.dictionary.com/browse/sound
soup|noun|a liquid food made by boiling or simmering meat, fish, or vegetables with various added ingredients.|http://www.dictionary.com/browse/soup
sow|verb|to scatter (seed) over land, earth, etc., for growth; plant.|http://www.dictionary.com/browse/sow
space|noun|the unlimited or incalculably great three-dimensional realm or expanse in which all material objects are located and all events occur.|http://www.dictionary.com/browse/space
spade|noun|a tool for digging, having an iron blade adapted for pressing into the ground with the foot and a long handle commonly with a grip or crosspiece at the top, and with the blade usually narrower and flatter than that of a shovel.|http://www.dictionary.com/browse/spade
spank|verb|to strike (a person, usually a child) with the open hand, a slipper, etc., especially on the buttocks, as in punishment.|http://www.dictionary.com/browse/spank
span|noun|the distance between the tip of the thumb and the tip of the little finger when the hand is fully extended.|http://www.dictionary.com/browse/span
spare|verb|to refrain from harming or destroying; leave uninjured; forbear to punish, hurt, or destroy|http://www.dictionary.com/browse/spare
sparkle|verb|to issue in or as if in little sparks, as fire or light|http://www.dictionary.com/browse/sparkle
spark|noun|an ignited or fiery particle such as is thrown off by burning wood or produced by one hard body striking against another.|http://www.dictionary.com/browse/spark
spark|noun|an ignited or fiery particle such as is thrown off by burning wood or produced by one hard body striking against another.|http://www.dictionary.com/browse/spark
spasm|noun|Pathology. a sudden, abnormal, involuntary muscular contraction, consisting of a continued muscular contraction (tonic spasm) or of a series of alternating muscular contractions and relaxations (clonic spasm)|http://www.dictionary.com/browse/spasm
speak|verb|to utter words or articulate sounds with the ordinary voice; talk|http://www.dictionary.com/browse/speak
specify|verb|to mention or name specifically or definitely; state in detail|http://www.dictionary.com/browse/specify
speculate|verb|to engage in thought or reflection; meditate (often followed by on, upon, or a clause).|http://www.dictionary.com/browse/speculate
speedily|adjective|characterized by speed; rapid; swift; fast.|http://www.dictionary.com/browse/speedily
speed|noun|rapidity in moving, going, traveling, proceeding, or performing; swiftness; celerity|http://www.dictionary.com/browse/speed
spell|verb|to name, write, or otherwise give the letters, in order, of (a word, syllable, etc.)|http://www.dictionary.com/browse/spell
spend|verb|to pay out, disburse, or expend; dispose of (money, wealth, resources, etc.)|http://www.dictionary.com/browse/spend
spiders|noun|any of numerous predaceous arachnids of the order Araneae, most of which spin webs that serve as nests and as traps for prey.|http://www.dictionary.com/browse/spiders
spike|noun|a naillike fastener, 3 to 12 inches (7.6 to 30.5 cm) long and proportionately thicker than a common nail, for fastening together heavy timbers or railroad track.|http://www.dictionary.com/browse/spike
spill|verb|to cause or allow to run or fall from a container, especially accidentally or wastefully|http://www.dictionary.com/browse/spill
spin|verb|to make (yarn) by drawing out, twisting, and winding fibers|http://www.dictionary.com/browse/spin
spite|noun|a malicious, usually petty, desire to harm, annoy, frustrate, or humiliate another person; bitter ill will; malice.|http://www.dictionary.com/browse/spite
spit|verb|to eject saliva from the mouth; expectorate.|http://www.dictionary.com/browse/spit
splash|verb|to wet or soil by dashing masses or particles of water, mud, or the like; spatter|http://www.dictionary.com/browse/splash
splay|verb|to spread out, expand, or extend.|http://www.dictionary.com/browse/splay
splinter|noun|a small, thin, sharp piece of wood, bone, or the like, split or broken off from the main body.|http://www.dictionary.com/browse/splinter
split|verb|to divide or separate from end to end or into layers|http://www.dictionary.com/browse/split
splutter|verb|to talk rapidly and somewhat incoherently, as when conf, excited, or embarrassed|http://www.dictionary.com/browse/splutter
spoil|verb|to damage severely or harm (something), especially with reference to its excellence, value, usefulness, etc.|http://www.dictionary.com/browse/spoil
sponge|noun|any aquatic, chiefly marine animal of the phylum Porifera, having a porous structure and usually a horny, siliceous or calcareous internal skeleton or framework, occurring in large, sessile colonies.|http://www.dictionary.com/browse/sponge
spoon|noun|a utensil for use in eating, stirring, measuring, ladling, etc., consisting of a small, shallow bowl with a handle.|http://www.dictionary.com/browse/spoon
spot|noun|a rounded mark or stain made by foreign matter, as mud, blood, paint, ink, etc.; a blot or speck.|http://www.dictionary.com/browse/spot
spot|noun|a rounded mark or stain made by foreign matter, as mud, blood, paint, ink, etc.; a blot or speck.|http://www.dictionary.com/browse/spot
sprawl|verb|to be stretched or spread out in an unnatural or ungraceful manner|http://www.dictionary.com/browse/sprawl
spray|noun|water or other liquid broken up into minute droplets and blown, ejected into, or falling through the air.|http://www.dictionary.com/browse/spray
spread|verb|to draw, stretch, or open out, especially over a flat surface, as something rolled or folded (often followed by out).|http://www.dictionary.com/browse/spread
spring|verb|to rise, leap, move, or act suddenly and swiftly, as by a sudden dart or thrust forward or outward, or being suddenly released from a coiled or constrained position|http://www.dictionary.com/browse/spring
spring|verb|to rise, leap, move, or act suddenly and swiftly, as by a sudden dart or thrust forward or outward, or being suddenly released from a coiled or constrained position|http://www.dictionary.com/browse/spring
sprinkle|verb|to scatter (a liquid, powder, etc.) in drops or particles|http://www.dictionary.com/browse/sprinkle
sprint|verb|to race or move at full speed, especially for a short distance, as in running, rowing, etc.|http://www.dictionary.com/browse/sprint
sprout|verb|to begin to grow; shoot forth, as a plant from a seed.|http://www.dictionary.com/browse/sprout
spurn|verb|to reject with disdain; scorn.|http://www.dictionary.com/browse/spurn
spur|noun|a U -shaped device that slips over and straps to the heel of a boot and has a blunt, pointed, or roweled projection at the back for use by a mounted rider to urge a horse forward.|http://www.dictionary.com/browse/spur
sputter|verb|to make explosive popping or sizzling sounds.|http://www.dictionary.com/browse/sputter
spy|noun|a person employed by a government to obtain secret information or intelligence about another, usually hostile, country, especially with reference to military or naval affairs.|http://www.dictionary.com/browse/spy
spy|noun|a person employed by a government to obtain secret information or intelligence about another, usually hostile, country, especially with reference to military or naval affairs.|http://www.dictionary.com/browse/spy
squall|noun|a sudden, violent gust of wind, often accompanied by rain, snow, or sleet.|http://www.dictionary.com/browse/squall
square|noun|a rectangle having all four sides of equal length.|http://www.dictionary.com/browse/square
square|noun|a rectangle having all four sides of equal length.|http://www.dictionary.com/browse/square
squash|verb|to press into a flat mass or pulp; crush|http://www.dictionary.com/browse/squash
squat|verb|to sit in a low or crouching position with the legs drawn up closely beneath or in front of the body; sit on one's haunches or heels.|http://www.dictionary.com/browse/squat
squawk|verb|to utter a loud, harsh cry, as a duck or other fowl when frightened.|http://www.dictionary.com/browse/squawk
squeak|noun|a short, sharp, shrill cry; a sharp, high-pitched sound.|http://www.dictionary.com/browse/squeak
squeal|noun|a somewhat prolonged, sharp, shrill cry, as of pain, fear, or surprise.|http://www.dictionary.com/browse/squeal
squeeze|verb|to press forcibly together; compress.|http://www.dictionary.com/browse/squeeze
squint|verb|to look with the eyes partly closed.|http://www.dictionary.com/browse/squint
squirm|verb|to wriggle or writhe.|http://www.dictionary.com/browse/squirm
squirrel|noun|any of numerous arboreal, bushy-tailed rodents of the genus Sciurus, of the family Sciuridae.|http://www.dictionary.com/browse/squirrel
squirt|verb|to eject liquid in a jet from a narrow orifice|http://www.dictionary.com/browse/squirt
squish|verb|to squeeze or squash.|http://www.dictionary.com/browse/squish
stabilize|verb|to make or hold stable, firm, or steadfast.|http://www.dictionary.com/browse/stabilize
stab|verb|to pierce or wound with or as if with a pointed weapon|http://www.dictionary.com/browse/stab
stack|noun|a more or less orderly pile or heap|http://www.dictionary.com/browse/stack
stage|noun|a single step or degree in a process; a particular phase, period, position, etc., in a process, development, or series.|http://www.dictionary.com/browse/stage
stagger|verb|to walk, move, or stand unsteadily.|http://www.dictionary.com/browse/stagger
stain|noun|a discoloration produced by foreign matter having penetrated into or chemically reacted with a material; a spot not easily removed.|http://www.dictionary.com/browse/stain
stalk|noun|the stem or main axis of a plant.|http://www.dictionary.com/browse/stalk
stall|noun|a compartment in a stable or shed for the accommodation of one animal.|http://www.dictionary.com/browse/stall
stammer|verb|to speak with involuntary breaks and pauses, or with spasmodic repetitions of syllables or sounds.|http://www.dictionary.com/browse/stammer
stamp|verb|to strike or beat with a forcible, downward thrust of the foot.|http://www.dictionary.com/browse/stamp
stamp|verb|to strike or beat with a forcible, downward thrust of the foot.|http://www.dictionary.com/browse/stamp
stand|verb|(of a person) to be in an upright position on the feet.|http://www.dictionary.com/browse/stand
stare|verb|to gaze fixedly and intently, especially with the eyes wide open.|http://www.dictionary.com/browse/stare
startle|verb|to disturb or agitate suddenly as by surprise or alarm.|http://www.dictionary.com/browse/startle
start|verb|to begin or set out, as on a journey or activity.|http://www.dictionary.com/browse/start
start|verb|to begin or set out, as on a journey or activity.|http://www.dictionary.com/browse/start
star|noun|any of the heavenly bodies, except the moon, appearing as fixed luminous points in the sky at night.|http://www.dictionary.com/browse/star
stash|verb|to put by or away as for safekeeping or future use, usually in a secret place (usually followed by away)|http://www.dictionary.com/browse/stash
statement|noun|something stated.|http://www.dictionary.com/browse/statement
state|noun|the condition of a person or thing, as with respect to circumstances or attributes|http://www.dictionary.com/browse/state
station|noun|a place or position in which a person or thing is normally located.|http://www.dictionary.com/browse/station
station|noun|a place or position in which a person or thing is normally located.|http://www.dictionary.com/browse/station
stay|verb|to spend some time in a place, in a situation, with a person or group, etc.|http://www.dictionary.com/browse/stay
steady|adjective|firmly placed or fixed; stable in position or equilibrium|http://www.dictionary.com/browse/steady
stealthily|adjective|done, characterized, or acting by stealth; furtive|http://www.dictionary.com/browse/stealthily
steal|verb|to take (the property of another or others) without permission or right, especially secretly or by force|http://www.dictionary.com/browse/steal
steam|noun|water in the form of an invisible gas or vapor.|http://www.dictionary.com/browse/steam
steel|noun|any of various modified forms of iron, artificially produced, having a carbon content less than that of pig iron and more than that of wrought iron, and having qualities of hardness, elasticity, and strength varying according to composition and heat treatment|http://www.dictionary.com/browse/steel
steeple|noun|an ornamental construction, usually ending in a spire, erected on a roof or tower of a church, public building, etc.|http://www.dictionary.com/browse/steeple
steer|verb|to guide the course of (something in motion) by a rudder, helm, wheel, etc.|http://www.dictionary.com/browse/steer
stem|noun|the ascending axis of a plant, whether above or below ground, which ordinarily grows in an opposite direction to the root or descending axis.|http://www.dictionary.com/browse/stem
step|noun|a movement made by lifting the foot and setting it down again in a new position, accompanied by a shifting of the weight of the body in the direction of the new position, as in walking, running, or dancing.|http://www.dictionary.com/browse/step
step|noun|a movement made by lifting the foot and setting it down again in a new position, accompanied by a shifting of the weight of the body in the direction of the new position, as in walking, running, or dancing.|http://www.dictionary.com/browse/step
sternly|adjective|firm, strict, or uncompromising|http://www.dictionary.com/browse/sternly
stew|verb|to cook (food) by simmering or slow boiling.|http://www.dictionary.com/browse/stew
sticks|noun|a branch or shoot of a tree or shrub that has been cut or broken off.|http://www.dictionary.com/browse/sticks
stick|noun|a branch or shoot of a tree or shrub that has been cut or broken off.|http://www.dictionary.com/browse/stick
stick|noun|a branch or shoot of a tree or shrub that has been cut or broken off.|http://www.dictionary.com/browse/stick
stiffen|verb|to make stiff.|http://www.dictionary.com/browse/stiffen
stifle|verb|to quell, crush, or end by force|http://www.dictionary.com/browse/stifle
still|adjective|remaining in place or at rest; motionless; stationary|http://www.dictionary.com/browse/still
stimulate|verb|to rouse to action or effort, as by encouragement or pressure; spur on; incite|http://www.dictionary.com/browse/stimulate
sting|verb|to prick or wound with a sharp-pointed, often venom-bearing organ.|http://www.dictionary.com/browse/sting
stink|verb|to emit a strong offensive smell.|http://www.dictionary.com/browse/stink
stipulate|verb|to make an express demand or arrangement as a condition of agreement (often followed by for).|http://www.dictionary.com/browse/stipulate
stir|verb|to move one's hand or an implement continuously or repeatedly through (a liquid or other substance) in order to cool, mix, agitate, dissolve, etc., any or all of the component parts|http://www.dictionary.com/browse/stir
stitch|noun|one complete movement of a threaded needle through a fabric or material such as to leave behind it a single loop or portion of thread, as in sewing, embroidery, or the surgical closing of wounds.|http://www.dictionary.com/browse/stitch
stitch|noun|one complete movement of a threaded needle through a fabric or material such as to leave behind it a single loop or portion of thread, as in sewing, embroidery, or the surgical closing of wounds.|http://www.dictionary.com/browse/stitch
stocking|noun|a close-fitting covering for the foot and part of the leg, usually knitted, of wool, cotton, nylon, silk, or similar material.|http://www.dictionary.com/browse/stocking
stockpile|noun|a supply of material, as a pile of gravel in road maintenance.|http://www.dictionary.com/browse/stockpile
stock|noun|a supply of goods kept on hand for sale to customers by a merchant, distributor, manufacturer, etc.; inventory.|http://www.dictionary.com/browse/stock
stoke|verb|to poke, stir up, and feed (a fire).|http://www.dictionary.com/browse/stoke
stomach|noun|Anatomy, Zoology. a saclike enlargement of the alimentary canal, as in humans and certain animals, forming an organ for storing, diluting, and digesting food.|http://www.dictionary.com/browse/stomach
stomp|verb|stamp|http://www.dictionary.com/browse/stomp
stone|noun|the hard substance, formed of mineral matter, of which rocks consist.|http://www.dictionary.com/browse/stone
stoop|verb|to bend the head and shoulders, or the body generally, forward and downward from an erect position|http://www.dictionary.com/browse/stoop
stop|verb|to cease from, leave off, or discontinue|http://www.dictionary.com/browse/stop
stop|verb|to cease from, leave off, or discontinue|http://www.dictionary.com/browse/stop
store|noun|an establishment where merchandise is sold, usually on a retail basis.|http://www.dictionary.com/browse/store
store|noun|an establishment where merchandise is sold, usually on a retail basis.|http://www.dictionary.com/browse/store
storm|noun|a disturbance of the normal condition of the atmosphere, manifesting itself by winds of unusual force or direction, often accompanied by rain, snow, hail, thunder, and lightning, or flying sand or dust.|http://www.dictionary.com/browse/storm
story|noun|a narrative, either true or fictitious, in prose or verse, designed to interest, amuse, or instruct the hearer or reader; tale.|http://www.dictionary.com/browse/story
stove|noun|a portable or fixed apparatus that furnishes heat for warmth, cooking, etc., commonly using coal, oil, gas, wood, or electricity as a source of power.|http://www.dictionary.com/browse/stove
stow|verb|Nautical. to put (sails, spars, gear, etc.) in the proper place or condition when not in use.|http://www.dictionary.com/browse/stow
straddle|verb|to walk, stand, or sit with the legs wide apart; stand or sit astride.|http://www.dictionary.com/browse/straddle
straighten|verb|to make or become straight in direction, form, position, character, conduct, condition, etc. (often followed by up or out).|http://www.dictionary.com/browse/straighten
strain|verb|to draw tight or taut, especially to the utmost tension; stretch to the full|http://www.dictionary.com/browse/strain
stranger|noun|a person with whom one has had no personal acquaintance|http://www.dictionary.com/browse/stranger
strangle|verb|to kill by squeezing the throat in order to compress the windpipe and prevent the intake of air, as with the hands or a tightly drawn cord.|http://www.dictionary.com/browse/strangle
strap|noun|a narrow strip of flexible material, especially leather, as for fastening or holding things together.|http://www.dictionary.com/browse/strap
straw|noun|a single stalk or stem, especially of certain species of grain, chiefly wheat, rye, oats, and barley.|http://www.dictionary.com/browse/straw
stray|verb|to deviate from the direct course, leave the proper place, or go beyond the proper limits, especially without a fixed course or purpose; ramble|http://www.dictionary.com/browse/stray
streak|noun|a long, narrow mark, smear, band of color, or the like|http://www.dictionary.com/browse/streak
streamline|noun|a teardrop line of contour offering the least possible resistance to a current of air, water, etc.|http://www.dictionary.com/browse/streamline
stream|noun|a body of water flowing in a channel or watercourse, as a river, rivulet, or brook.Synonyms|http://www.dictionary.com/browse/stream
street|noun|a public thoroughfare, usually paved, in a village, town, or city, including the sidewalk or sidewalks.|http://www.dictionary.com/browse/street
strengthen|verb|to make stronger; give strength to.|http://www.dictionary.com/browse/strengthen
stress|noun|importance attached to a thing|http://www.dictionary.com/browse/stress
stretch|verb|to draw out or extend (oneself, a body, limbs, wings, etc.) to the full length or extent (often followed by out)|http://www.dictionary.com/browse/stretch
stretch|verb|to draw out or extend (oneself, a body, limbs, wings, etc.) to the full length or extent (often followed by out)|http://www.dictionary.com/browse/stretch
strictly|adverb|in a strict manner; rigorously; stringently|http://www.dictionary.com/browse/strictly
stride|verb|to walk with long steps, as with vigor, haste, impatience, or arrogance.|http://www.dictionary.com/browse/stride
strike|verb|to deal a blow or stroke to (a person or thing), as with the fist, a weapon, or a hammer; hit.|http://www.dictionary.com/browse/strike
string|noun|a slender cord or thick thread  for binding or tying; line.|http://www.dictionary.com/browse/string
string|noun|a slender cord or thick thread  for binding or tying; line.|http://www.dictionary.com/browse/string
strip|verb|to deprive of covering|http://www.dictionary.com/browse/strip
strive|verb|to exert oneself vigorously; try hard|http://www.dictionary.com/browse/strive
stroke|noun|the act or an instance of striking, as with the fist, a weapon, or a hammer; a blow.|http://www.dictionary.com/browse/stroke
stroll|verb|to walk leisurely as inclination directs; ramble; saunter; take a walk|http://www.dictionary.com/browse/stroll
structure|noun|mode of building, construction, or organization; arrangement of parts, elements, or constituents|http://www.dictionary.com/browse/structure
structure|noun|mode of building, construction, or organization; arrangement of parts, elements, or constituents|http://www.dictionary.com/browse/structure
struggle|verb|to contend with an adversary or opposing force.|http://www.dictionary.com/browse/struggle
strum|verb|to play on (a stringed musical instrument) by running the fingers lightly across the strings.|http://www.dictionary.com/browse/strum
strut|verb|to walk with a vain, pompous bearing, as with head erect and chest thrown out, as if expecting to impress observers.|http://www.dictionary.com/browse/strut
study|noun|application of the mind to the acquisition of knowledge, as by reading, investigation, or reflection|http://www.dictionary.com/browse/study
stuff|noun|the material of which anything is made|http://www.dictionary.com/browse/stuff
stumble|verb|to strike the foot against something, as in walking or running, so as to stagger or fall; trip.|http://www.dictionary.com/browse/stumble
stump|noun|the lower end of a tree or plant left after the main part falls or is cut off; a standing tree trunk from which the upper part and branches have been removed.|http://www.dictionary.com/browse/stump
stutter|verb|to speak in such a way that the rhythm is interrupted by repetitions, blocks or spasms, or prolongations of sounds or syllables, sometimes accompanied by contortions of the face and body.|http://www.dictionary.com/browse/stutter
style|noun|a particular kind, sort, or type, as with reference to form, appearance, or character|http://www.dictionary.com/browse/style
subdue|verb|to conquer and bring into subjection|http://www.dictionary.com/browse/subdue
sublet|verb|to sublease.|http://www.dictionary.com/browse/sublet
submerge|verb|to put or sink below the surface of water or any other enveloping medium.|http://www.dictionary.com/browse/submerge
submerse|verb|to submerge.|http://www.dictionary.com/browse/submerse
submit|verb|to give over or yield to the power or authority of another (often  reflexively).|http://www.dictionary.com/browse/submit
subside|verb|to sink to a low or lower level.|http://www.dictionary.com/browse/subside
substance|noun|that of which a thing consists; physical matter or material|http://www.dictionary.com/browse/substance
subtract|verb|to withdraw or take away, as a part from a whole.|http://www.dictionary.com/browse/subtract
succeed|verb|to happen or terminate according to desire; turn out successfully; have the desired result|http://www.dictionary.com/browse/succeed
successfully|adjective|achieving or having achieved success.|http://www.dictionary.com/browse/successfully
succumb|verb|to give way to superior force; yield|http://www.dictionary.com/browse/succumb
suck|verb|to draw into the mouth by producing a partial vacuum by action of the lips and tongue|http://www.dictionary.com/browse/suck
suddenly|adjective|happening, coming, made, or done quickly, without warning, or unexpectedly|http://www.dictionary.com/browse/suddenly
suffer|verb|to undergo or feel pain or distress|http://www.dictionary.com/browse/suffer
sugar|noun|a sweet, crystalline substance, C 1 2 H 2 2 O 1 1 , obtained chiefly from the juice of the sugarcane and the sugar beet, and present in sorghum, maple sap, etc.|http://www.dictionary.com/browse/sugar
suggestion|noun|the act of suggesting.|http://www.dictionary.com/browse/suggestion
suggest|verb|to mention or introduce (an idea, proposition, plan, etc.) for consideration or possible action|http://www.dictionary.com/browse/suggest
suit|noun|a set of clothing, armor, or the like, intended for wear together.|http://www.dictionary.com/browse/suit
suit|noun|a set of clothing, armor, or the like, intended for wear together.|http://www.dictionary.com/browse/suit
sulk|verb|to remain silent or hold oneself aloof in a sullen, ill-humored, or offended mood|http://www.dictionary.com/browse/sulk
summarise|verb|to make a summary of; state or express in a concise form.|http://www.dictionary.com/browse/summarise
summarize|verb|to make a summary of; state or express in a concise form.|http://www.dictionary.com/browse/summarize
summer|noun|the season between spring and autumn, in the Northern Hemisphere from the summer solstice to the autumnal equinox, and in the Southern Hemisphere from the winter solstice to the vernal equinox.|http://www.dictionary.com/browse/summer
summon|verb|to call upon to do something specified.|http://www.dictionary.com/browse/summon
sunder|verb|to separate; part; divide; sever.|http://www.dictionary.com/browse/sunder
sun|noun|(often initial capital letter) the star that is the central body of the solar system, around which the planets revolve and from which they receive light and heat|http://www.dictionary.com/browse/sun
supervise|verb|to oversee (a process, work, workers, etc.) during execution or performance; superintend; have the oversight and direction of.|http://www.dictionary.com/browse/supervise
supplement|noun|something added to complete a thing, supply a deficiency, or reinforce or extend a whole.|http://www.dictionary.com/browse/supplement
supply|verb|to furnish or provide (a person, establishment, place, etc.) with what is lacking or requisite|http://www.dictionary.com/browse/supply
support|verb|to bear or hold up (a load, mass, structure, part, etc.); serve as a foundation for.|http://www.dictionary.com/browse/support
support|verb|to bear or hold up (a load, mass, structure, part, etc.); serve as a foundation for.|http://www.dictionary.com/browse/support
suppose|verb|to assume (something), as for the sake of argument or as part of a proposition or theory|http://www.dictionary.com/browse/suppose
surge|noun|a strong, wavelike, forward movement, rush, or sweep|http://www.dictionary.com/browse/surge
surmise|verb|to think or infer without certain or strong evidence; conjecture; guess.|http://www.dictionary.com/browse/surmise
surprise|verb|to strike or occur to with a sudden feeling of wonder or astonishment, as through unexpectedness|http://www.dictionary.com/browse/surprise
surprise|verb|to strike or occur to with a sudden feeling of wonder or astonishment, as through unexpectedness|http://www.dictionary.com/browse/surprise
surprisingly|adjective|causing surprise, wonder, or astonishment.|http://www.dictionary.com/browse/surprisingly
surrender|verb|to yield (something) to the possession or power of another; deliver up possession of on demand or under duress|http://www.dictionary.com/browse/surrender
surround|verb|to enclose on all sides; encompass|http://www.dictionary.com/browse/surround
survey|verb|to take a general or comprehensive view of or appraise, as a situation, area of study, etc.|http://www.dictionary.com/browse/survey
suspect|verb|to believe to be guilty, false, counterfeit, undesirable, defective, bad, etc., with little or no proof|http://www.dictionary.com/browse/suspect
suspend|verb|to hang by attachment to something above|http://www.dictionary.com/browse/suspend
suspiciously|adjective|tending to cause or excite suspicion; questionable|http://www.dictionary.com/browse/suspiciously
susurrate|verb|(intransitive) (literary) to make a soft rustling sound; whisper; murmur|http://www.dictionary.com/browse/susurrate
swab|noun|a large mop  on shipboard for cleaning decks, living quarters, etc.|http://www.dictionary.com/browse/swab
swagger|verb|to walk or strut with a defiant or insolent air.|http://www.dictionary.com/browse/swagger
swallow|verb|to take into the stomach by drawing through the throat and esophagus with a voluntary muscular action, as food, drink, or other substances.|http://www.dictionary.com/browse/swallow
swat|verb|to hit; slap; smack.|http://www.dictionary.com/browse/swat
sway|verb|to move or swing to and fro, as something fixed at one end or resting on a support.|http://www.dictionary.com/browse/sway
swear|verb|to make a solemn declaration or affirmation by some sacred being or object, as a deity or the Bible.|http://www.dictionary.com/browse/swear
sweater|noun|a knitted jacket or jersey, in pullover or cardigan style, with or without sleeves.|http://www.dictionary.com/browse/sweater
sweat|verb|to perspire, especially freely or profusely.|http://www.dictionary.com/browse/sweat
sweep|verb|to move or remove (dust, dirt, etc.) with or as if with a broom, brush, or the like.|http://www.dictionary.com/browse/sweep
sweetly|adjective|having the taste or flavor characteristic of sugar, honey, etc.|http://www.dictionary.com/browse/sweetly
swell|verb|to grow in bulk, as by the absorption of moisture or the processes of growth.|http://www.dictionary.com/browse/swell
swerve|verb|to turn aside abruptly in movement or direction; deviate suddenly from the straight or direct course.|http://www.dictionary.com/browse/swerve
swiftly|adjective|moving or capable of moving with great speed or velocity; fleet; rapid|http://www.dictionary.com/browse/swiftly
swill|noun|liquid or partly liquid food for animals, especially kitchen refuse given to swine; hogwash.|http://www.dictionary.com/browse/swill
swim|verb|to move in water by movements of the limbs, fins, tail, etc.|http://www.dictionary.com/browse/swim
swim|verb|to move in water by movements of the limbs, fins, tail, etc.|http://www.dictionary.com/browse/swim
swing|verb|to cause to move to and fro, sway, or oscillate, as something suspended from above|http://www.dictionary.com/browse/swing
swing|verb|to cause to move to and fro, sway, or oscillate, as something suspended from above|http://www.dictionary.com/browse/swing
swipe|noun|a strong, sweeping blow, as with a cricket bat or golf club.|http://www.dictionary.com/browse/swipe
swirl|verb|to move around or along with a whirling motion; whirl; eddy.|http://www.dictionary.com/browse/swirl
swish|verb|to move with or make a sibilant sound, as a slender rod cutting sharply through the air or as small waves washing on the shore.|http://www.dictionary.com/browse/swish
switch|noun|a slender, flexible shoot, rod, etc.,  especially in whipping or disciplining.|http://www.dictionary.com/browse/switch
swivel|noun|a fastening device that allows the thing fastened to turn around freely upon it, especially to turn in a full circle.|http://www.dictionary.com/browse/swivel
swoon|verb|to faint; lose consciousness.|http://www.dictionary.com/browse/swoon
symbolize|verb|to be a symbol of; stand for or represent in the manner of a symbol.|http://www.dictionary.com/browse/symbolize
sympathetically|adjective|characterized by, proceeding from, exhibiting, or feeling sympathy; sympathizing; compassionate|http://www.dictionary.com/browse/sympathetically
sympathise|verb|to be in sympathy or agreement of feeling; share in a feeling (often followed by with).|http://www.dictionary.com/browse/sympathise
sympathize|verb|to be in sympathy or agreement of feeling; share in a feeling (often followed by with).|http://www.dictionary.com/browse/sympathize
systemize|verb|systematize.|http://www.dictionary.com/browse/systemize
system|noun|an assemblage or combination of things or parts forming a complex or unitary whole|http://www.dictionary.com/browse/system
table|noun|an article of furniture consisting of a flat, slablike top supported on one or more legs or other supports|http://www.dictionary.com/browse/table
tabulate|verb|to put or arrange in a tabular, systematic, or condensed form; formulate tabularly.|http://www.dictionary.com/browse/tabulate
tackle|noun|equipment, apparatus, or gear, especially for fishing|http://www.dictionary.com/browse/tackle
tailor|noun|a person whose occupation is the making, mending, or altering of clothes, especially suits, coats, and other outer garments.|http://www.dictionary.com/browse/tailor
tail|noun|the hindmost part of an animal, especially that forming a distinct, flexible appendage to the trunk.|http://www.dictionary.com/browse/tail
take|verb|to get into one's hold or possession by voluntary action|http://www.dictionary.com/browse/take
talk|verb|to communicate or exchange ideas, information, etc., by speaking|http://www.dictionary.com/browse/talk
talk|verb|to communicate or exchange ideas, information, etc., by speaking|http://www.dictionary.com/browse/talk
tally|noun|an account or reckoning; a record of debit and credit, of the score of a game, or the like.|http://www.dictionary.com/browse/tally
tame|adjective|changed from the wild or savage state; domesticated|http://www.dictionary.com/browse/tame
tangle|verb|to bring together into a mass of confly interlaced or intertwisted threads, strands, or other like parts; snarl.|http://www.dictionary.com/browse/tangle
tank|noun|a large receptacle, container, or structure for holding a liquid or gas|http://www.dictionary.com/browse/tank
tantalize|verb|to torment with, or as if with, the sight of something desired but out of reach; tease by arousing expectations that are repeatedly disappointed.|http://www.dictionary.com/browse/tantalize
tap|verb|to strike with a light but audible blow or blows; hit with repeated, slight blows|http://www.dictionary.com/browse/tap
target|noun|an object, usually marked with concentric circles, to be aimed at in shooting practice or contests.|http://www.dictionary.com/browse/target
task|noun|a definite piece of work assigned to, falling to, or expected of a person; duty.|http://www.dictionary.com/browse/task
taste|verb|to try or test the flavor or quality of (something) by taking some into the mouth|http://www.dictionary.com/browse/taste
taste|verb|to try or test the flavor or quality of (something) by taking some into the mouth|http://www.dictionary.com/browse/taste
tattle|verb|to let out secrets.|http://www.dictionary.com/browse/tattle
tattoo|noun|a signal on a drum, bugle, or trumpet at night, for soldiers or sailors to go to their quarters.|http://www.dictionary.com/browse/tattoo
taunt|verb|to reproach in a sarcastic, insulting, or jeering manner; mock.|http://www.dictionary.com/browse/taunt
tax|noun|a sum of money demanded by a government for its support or for specific facilities or services, levied upon incomes, property, sales, etc.|http://www.dictionary.com/browse/tax
teaching|noun|the act or profession of a person who teaches.|http://www.dictionary.com/browse/teaching
teach|verb|to impart knowledge of or skill in; give instruction in|http://www.dictionary.com/browse/teach
team|noun|a number of persons forming one of the sides in a game or contest|http://www.dictionary.com/browse/team
tear|noun|a drop of the saline, watery fluid continually secreted by the lacrimal glands between the surface of the eye and the eyelid, serving to moisten and lubricate these parts and keep them clear of foreign particles.Synonyms|http://www.dictionary.com/browse/tear
tease|verb|to irritate or provoke with persistent petty distractions, trifling raillery, or other annoyance, often in sport.|http://www.dictionary.com/browse/tease
teeter|verb|to move unsteadily.|http://www.dictionary.com/browse/teeter
teeth|noun|plural of tooth.|http://www.dictionary.com/browse/teeth
telephone|noun|an apparatus, system, or process for transmission of sound or speech to a distant point, especially by an electric device.|http://www.dictionary.com/browse/telephone
tell|verb|to give an account or narrative of; narrate; relate (a story, tale, etc.)|http://www.dictionary.com/browse/tell
temper|noun|a particular state of mind or feelings.|http://www.dictionary.com/browse/temper
temper|noun|a particular state of mind or feelings.|http://www.dictionary.com/browse/temper
tempt|verb|to entice or allure to do something often regarded as unwise, wrong, or immoral.|http://www.dictionary.com/browse/tempt
tendency|noun|a natural or prevailing disposition to move, proceed, or act in some direction or toward some point, end, or result|http://www.dictionary.com/browse/tendency
tenderly|adjective|soft or delicate in substance; not hard or tough|http://www.dictionary.com/browse/tenderly
tend|verb|to be disposed or inclined in action, operation, or effect to do something|http://www.dictionary.com/browse/tend
tensely|adjective|stretched tight, as a cord, fiber, etc.; drawn taut; rigid.|http://www.dictionary.com/browse/tensely
tense|adjective|stretched tight, as a cord, fiber, etc.; drawn taut; rigid.|http://www.dictionary.com/browse/tense
tent|noun|a portable shelter of skins, canvas, plastic, or the like, supported by one or more poles or a frame and often secured by ropes fastened to pegs in the ground.|http://www.dictionary.com/browse/tent
terribly|adverb|in a terrible manner.|http://www.dictionary.com/browse/terribly
terrify|verb|to fill with terror or alarm; make greatly afraid.|http://www.dictionary.com/browse/terrify
territory|noun|any tract of land; region or district.|http://www.dictionary.com/browse/territory
testify|verb|to bear witness; give or afford evidence.|http://www.dictionary.com/browse/testify
test|noun|the means by which the presence, quality, or genuineness of anything is determined; a means of trial.|http://www.dictionary.com/browse/test
test|noun|the means by which the presence, quality, or genuineness of anything is determined; a means of trial.|http://www.dictionary.com/browse/test
texture|noun|the visual and especially tactile quality of a surface|http://www.dictionary.com/browse/texture
thankfully|adjective|feeling or expressing gratitude; appreciative.|http://www.dictionary.com/browse/thankfully
thank|verb|to express gratitude, appreciation, or acknowledgment to|http://www.dictionary.com/browse/thank
thaw|verb|to pass or change from a frozen to a liquid or semiliquid state; melt.|http://www.dictionary.com/browse/thaw
theorise|verb|to form a theory or theories.|http://www.dictionary.com/browse/theorise
theorize|verb|to form a theory or theories.|http://www.dictionary.com/browse/theorize
theory|noun|a coherent group of tested general propositions, commonly regarded as correct, that can be  as principles of explanation and prediction for a class of phenomena|http://www.dictionary.com/browse/theory
things|noun|a material object without life or consciousness; an inanimate object.|http://www.dictionary.com/browse/things
thing|noun|a material object without life or consciousness; an inanimate object.|http://www.dictionary.com/browse/thing
think|verb|to have a conscious mind, to some extent of reasoning, remembering experiences, making rational decisions, etc.|http://www.dictionary.com/browse/think
thoroughly|adverb|in a thorough manner or degree; completely and carefully|http://www.dictionary.com/browse/thoroughly
thoughtfully|adjective|showing consideration for others; considerate.|http://www.dictionary.com/browse/thoughtfully
thought|noun|the product of mental activity; that which one thinks|http://www.dictionary.com/browse/thought
thrash|verb|to beat soundly in punishment; flog.|http://www.dictionary.com/browse/thrash
thread|noun|a fine cord of flax, cotton, or other fibrous material spun out to considerable length, especially when composed of two or more filaments twisted together.|http://www.dictionary.com/browse/thread
thread|noun|a fine cord of flax, cotton, or other fibrous material spun out to considerable length, especially when composed of two or more filaments twisted together.|http://www.dictionary.com/browse/thread
threaten|verb|to utter a threat against; menace|http://www.dictionary.com/browse/threaten
thrill|verb|to affect with a sudden wave of keen emotion or excitement, as to produce a tremor or tingling sensation through the body.|http://www.dictionary.com/browse/thrill
thrive|verb|to prosper; be fortunate or successful.|http://www.dictionary.com/browse/thrive
throat|noun|the passage from the mouth to the stomach or to the lungs, including the pharynx, esophagus, larynx, and trachea.|http://www.dictionary.com/browse/throat
throne|noun|the chair or seat occupied by a sovereign, bishop, or other exalted personage on ceremonial occasions, usually raised on a dais and covered with a canopy.|http://www.dictionary.com/browse/throne
throttle|noun|Also called throttle lever. a lever, pedal, handle, etc., for controlling or manipulating a throttle valve.|http://www.dictionary.com/browse/throttle
throw|verb|to propel or cast in any way, especially to project or propel from the hand by a sudden forward motion or straightening of the arm and wrist|http://www.dictionary.com/browse/throw
thrust|verb|to push forcibly; shove; put or drive with force|http://www.dictionary.com/browse/thrust
thumb|noun|the short, thick, inner digit of the human hand, next to the forefinger.|http://www.dictionary.com/browse/thumb
thumb|noun|the short, thick, inner digit of the human hand, next to the forefinger.|http://www.dictionary.com/browse/thumb
thump|noun|a blow with something thick and heavy, producing a dull sound; a heavy knock.|http://www.dictionary.com/browse/thump
thunder|noun|a loud, explosive, resounding noise produced by the explosive expansion of air heated by a lightning discharge.|http://www.dictionary.com/browse/thunder
thunder|noun|a loud, explosive, resounding noise produced by the explosive expansion of air heated by a lightning discharge.|http://www.dictionary.com/browse/thunder
thwack|verb|to strike or beat vigorously with something flat; whack.|http://www.dictionary.com/browse/thwack
ticket|noun|a slip, usually of paper or cardboard, serving as evidence that the holder has paid a fare or admission or is entitled to some service, right, or the like|http://www.dictionary.com/browse/ticket
tickle|verb|to touch or stroke lightly with the fingers, a feather, etc., so as to excite a tingling or itching sensation in; titillate.|http://www.dictionary.com/browse/tickle
tick|noun|a slight, sharp, recurring click, tap, or beat, as of a clock.|http://www.dictionary.com/browse/tick
tidy|adjective|neat, orderly, or trim, as in appearance or dress|http://www.dictionary.com/browse/tidy
tie|verb|to bind, fasten, or attach with a cord, string, or the like, drawn together and knotted|http://www.dictionary.com/browse/tie
tiger|noun|a large, carnivorous, tawny-colored and black-striped feline, Panthera tigris, of Asia, ranging in several subspecies from India and the Malay Peninsula to Siberia|http://www.dictionary.com/browse/tiger
tighten|verb|to make or become tight or tighter.|http://www.dictionary.com/browse/tighten
tightly|adjective|firmly or closely fixed in place; not easily moved; secure|http://www.dictionary.com/browse/tightly
tilt|verb|to cause to lean, incline, slope, or slant.|http://www.dictionary.com/browse/tilt
time|noun|the system of those sequential relations that any event has to any other, as past, present, or future; indefinite and continuous duration regarded as that in which events succeed one another.|http://www.dictionary.com/browse/time
time|noun|the system of those sequential relations that any event has to any other, as past, present, or future; indefinite and continuous duration regarded as that in which events succeed one another.|http://www.dictionary.com/browse/time
tingle|verb|to have a sensation of slight prickles, stings, or tremors, as from cold, a sharp blow, excitement, etc.|http://www.dictionary.com/browse/tingle
tinker|noun|a mender of pots, kettles, pans, etc., usually an itinerant.|http://www.dictionary.com/browse/tinker
tinkle|verb|to give forth or make a succession of short, light, ringing sounds, as a small bell.|http://www.dictionary.com/browse/tinkle
tin|noun|Chemistry. a low-melting, malleable, ductile metallic element nearly approaching silver in color and luster|http://www.dictionary.com/browse/tin
tiptoe|noun|the tip or end of a toe.|http://www.dictionary.com/browse/tiptoe
tip|noun|a slender or pointed end or extremity, especially of anything long or tapered|http://www.dictionary.com/browse/tip
tire|verb|to reduce or exhaust the strength of, as by exertion; make weary; fatigue|http://www.dictionary.com/browse/tire
title|noun|the distinguishing name of a book, poem, picture, piece of music, or the like.|http://www.dictionary.com/browse/title
titter|verb|to laugh in a restrained, self-conscious, or affected way, as from nervousness or in ill-suppressed amusement.|http://www.dictionary.com/browse/titter
toad|noun|any of various tailless amphibians that are close relatives of the frogs in the order Anura and that typically have dry, warty skin and are terrestrial or semiterrestrial in habit.|http://www.dictionary.com/browse/toad
toast|noun|sliced bread that has been browned by dry heat.|http://www.dictionary.com/browse/toast
toddle|verb|to move with short, unsteady steps, as a young child.|http://www.dictionary.com/browse/toddle
toes|noun|one of the terminal digits of the human foot.|http://www.dictionary.com/browse/toes
toe|noun|one of the terminal digits of the human foot.|http://www.dictionary.com/browse/toe
toe|noun|one of the terminal digits of the human foot.|http://www.dictionary.com/browse/toe
toil|noun|hard and continuous work; exhausting labor or effort.|http://www.dictionary.com/browse/toil
tolerate|verb|to allow the existence, presence, practice, or act of without prohibition or hindrance; permit.|http://www.dictionary.com/browse/tolerate
tomatoes|noun|any of several plants belonging to the genus Lycopersicon, of the nightshade family, native to Mexico and Central and South America, especially the widely cultivated species L. lycopersicum, bearing a mildly acid, pulpy, usually red fruit eaten raw or cooked as a vegetable.|http://www.dictionary.com/browse/tomatoes
tomorrow|noun|the day following today|http://www.dictionary.com/browse/tomorrow
tongue|noun|Anatomy. the usually movable organ in the floor of the mouth in humans and most vertebrates, functioning in eating, in tasting, and, in humans, in speaking.|http://www.dictionary.com/browse/tongue
toothbrush|noun|a small brush with a long handle, for cleaning the teeth.|http://www.dictionary.com/browse/toothbrush
toothpaste|noun|a dentifrice in the form of paste.|http://www.dictionary.com/browse/toothpaste
tooth|noun|(in most vertebrates) one of the hard bodies or processes usually attached in a row to each jaw, serving for the prehension and mastication of food, as weapons of attack or defense, etc., and in mammals typically composed chiefly of dentin surrounding a sensitive pulp and covered on the crown with enamel.|http://www.dictionary.com/browse/tooth
toot|verb|(of a horn or whistle) to give forth its characteristic sound.|http://www.dictionary.com/browse/toot
too|adverb|in addition; also; furthermore; moreover|http://www.dictionary.com/browse/too
topple|verb|to fall forward, as from having too heavy a top; pitch; tumble down.|http://www.dictionary.com/browse/topple
top|noun|the highest or loftiest point or part of anything; apex; summit.Synonyms|http://www.dictionary.com/browse/top
toss|verb|to throw, pitch, or fling, especially to throw lightly or carelessly|http://www.dictionary.com/browse/toss
tote|verb|to carry, as on one's back or in one's arms|http://www.dictionary.com/browse/tote
totter|verb|to walk or go with faltering steps, as if from extreme weakness.|http://www.dictionary.com/browse/totter
touch|verb|to put the hand, finger, etc., on or into contact with (something) to feel it|http://www.dictionary.com/browse/touch
touch|verb|to put the hand, finger, etc., on or into contact with (something) to feel it|http://www.dictionary.com/browse/touch
toughen|verb|to make or become tough or tougher.|http://www.dictionary.com/browse/toughen
tour|noun|a traveling around from place to place.|http://www.dictionary.com/browse/tour
tousle|verb|to disorder or dishevel|http://www.dictionary.com/browse/tousle
tower|noun|a building or structure high in proportion to its lateral dimensions, either isolated or forming part of a building.|http://www.dictionary.com/browse/tower
town|noun|a thickly populated area, usually smaller than a city and larger than a village, having fixed boundaries and certain local powers of government.|http://www.dictionary.com/browse/town
tow|verb|to pull or haul (a car, barge, trailer, etc.) by a rope, chain, or other device|http://www.dictionary.com/browse/tow
toys|noun|an object, often a small representation of something familiar, as an animal or person, for children or others to play with; plaything.|http://www.dictionary.com/browse/toys
toy|noun|an object, often a small representation of something familiar, as an animal or person, for children or others to play with; plaything.|http://www.dictionary.com/browse/toy
toy|noun|an object, often a small representation of something familiar, as an animal or person, for children or others to play with; plaything.|http://www.dictionary.com/browse/toy
trace|noun|a surviving mark, sign, or evidence of the former existence, influence, or action of some agent or event; vestige|http://www.dictionary.com/browse/trace
track|noun|a structure consisting of a pair of parallel lines of rails with their crossties, on which a railroad train, trolley, or the like runs.|http://www.dictionary.com/browse/track
trade|noun|the act or process of buying, selling, or exchanging commodities, at either wholesale or retail, within a country or between countries|http://www.dictionary.com/browse/trade
trade|noun|the act or process of buying, selling, or exchanging commodities, at either wholesale or retail, within a country or between countries|http://www.dictionary.com/browse/trade
trail|verb|to drag or let drag along the ground or other surface; draw or drag along behind.|http://www.dictionary.com/browse/trail
trail|verb|to drag or let drag along the ground or other surface; draw or drag along behind.|http://www.dictionary.com/browse/trail
trains|noun|Railroads. a self-propelled, connected group of rolling stock.|http://www.dictionary.com/browse/trains
train|noun|Railroads. a self-propelled, connected group of rolling stock.|http://www.dictionary.com/browse/train
train|noun|Railroads. a self-propelled, connected group of rolling stock.|http://www.dictionary.com/browse/train
traipse|verb|to walk or go aimlessly or idly or without finding or reaching one's goal|http://www.dictionary.com/browse/traipse
trample|verb|to tread or step heavily and noisily; stamp.|http://www.dictionary.com/browse/trample
tramp|verb|to tread or walk with a firm, heavy, resounding step.|http://www.dictionary.com/browse/tramp
tramp|verb|to tread or walk with a firm, heavy, resounding step.|http://www.dictionary.com/browse/tramp
transcribe|verb|to make a written copy, especially a typewritten copy, of (dictated material, notes taken during a lecture, or other spoken material).|http://www.dictionary.com/browse/transcribe
transfer|verb|to convey or remove from one place, person, etc., to another|http://www.dictionary.com/browse/transfer
transform|verb|to change in form, appearance, or structure; metamorphose.|http://www.dictionary.com/browse/transform
translate|verb|to turn from one language into another or from a foreign language into one's own|http://www.dictionary.com/browse/translate
transmit|verb|to send or forward, as to a recipient or destination; dispatch; convey.|http://www.dictionary.com/browse/transmit
transport|verb|to carry, move, or convey from one place to another.|http://www.dictionary.com/browse/transport
transport|verb|to carry, move, or convey from one place to another.|http://www.dictionary.com/browse/transport
trap|noun|a contrivance  for catching game or other animals, as a mechanical device that springs shut suddenly.|http://www.dictionary.com/browse/trap
travel|verb|to go from one place to another, as by car, train, plane, or ship; take a trip; journey|http://www.dictionary.com/browse/travel
traverse|verb|to pass or move over, along, or through.|http://www.dictionary.com/browse/traverse
tray|noun|a flat, shallow container or receptacle made of wood, metal, etc., usually with slightly raised edges,  for carrying, holding, or displaying articles of food, glass, china, etc.|http://www.dictionary.com/browse/tray
tread|verb|to set down the foot or feet in walking; step; walk.|http://www.dictionary.com/browse/tread
treasure|noun|wealth or riches stored or accumulated, especially in the form of precious metals, money, jewels, or plate.|http://www.dictionary.com/browse/treasure
treatment|noun|an act or manner of treating.|http://www.dictionary.com/browse/treatment
treat|verb|to act or behave toward (a person) in some specified way|http://www.dictionary.com/browse/treat
trees|noun|a plant having a permanently woody main stem or trunk, ordinarily growing to a considerable height, and usually developing branches at some distance from the ground.|http://www.dictionary.com/browse/trees
tree|noun|a plant having a permanently woody main stem or trunk, ordinarily growing to a considerable height, and usually developing branches at some distance from the ground.|http://www.dictionary.com/browse/tree
tremble|verb|to shake involuntarily with quick, short movements, as from fear, excitement, weakness, or cold; quake; quiver.|http://www.dictionary.com/browse/tremble
tremendously|adjective|extraordinarily great in size, amount, or intensity|http://www.dictionary.com/browse/tremendously
trick|noun|a crafty or underhanded device, maneuver, stratagem, or the like, intended to deceive or cheat; artifice; ruse; wile.|http://www.dictionary.com/browse/trick
trick|noun|a crafty or underhanded device, maneuver, stratagem, or the like, intended to deceive or cheat; artifice; ruse; wile.|http://www.dictionary.com/browse/trick
trill|verb|to sing or play with a vibratory or quavering effect.|http://www.dictionary.com/browse/trill
trim|verb|to put into a neat or orderly condition by clipping, paring, pruning, etc.|http://www.dictionary.com/browse/trim
trip|noun|a journey or voyage|http://www.dictionary.com/browse/trip
trip|noun|a journey or voyage|http://www.dictionary.com/browse/trip
triumphantly|adjective|having achieved victory or success; victorious; successful.|http://www.dictionary.com/browse/triumphantly
triumph|noun|the act, fact, or condition of being victorious or triumphant; victory; conquest.|http://www.dictionary.com/browse/triumph
trivialize|verb|to make trivial; cause to appear unimportant, trifling, etc.|http://www.dictionary.com/browse/trivialize
trot|verb|(of a horse) to go at a gait between a walk and a run, in which the legs move in diagonal pairs, but not quite simultaneously, so that when the movement is slow one foot at least is always on the ground, and when fast all four feet are momentarily off the ground at once.|http://www.dictionary.com/browse/trot
troubleshoot|verb|to act or be employed as a troubleshooter|http://www.dictionary.com/browse/troubleshoot
trouble|verb|to disturb the mental calm and contentment of; worry; distress; agitate.|http://www.dictionary.com/browse/trouble
trouble|verb|to disturb the mental calm and contentment of; worry; distress; agitate.|http://www.dictionary.com/browse/trouble
trounce|verb|to beat severely; thrash.|http://www.dictionary.com/browse/trounce
trousers|noun|Sometimes, trouser. Also called pants. a usually loose-fitting outer garment for the lower part of the body, having individual leg portions that reach typically to the ankle but sometimes to any of various other points from the upper leg down.|http://www.dictionary.com/browse/trousers
trucks|noun|any of various forms of vehicle for carrying goods and materials, usually consisting of a single self-propelled unit but also often composed of a trailer vehicle hauled by a tractor unit.|http://www.dictionary.com/browse/trucks
truck|noun|any of various forms of vehicle for carrying goods and materials, usually consisting of a single self-propelled unit but also often composed of a trailer vehicle hauled by a tractor unit.|http://www.dictionary.com/browse/truck
trudge|verb|to walk, especially laboriously or wearily|http://www.dictionary.com/browse/trudge
truly|adverb|in accordance with fact or truth; truthfully.|http://www.dictionary.com/browse/truly
trumpet|noun|Music. any of a family of brass wind instruments with a powerful, penetrating tone, consisting of a tube commonly curved once or twice around on itself and having a cup-shaped mouthpiece at one end and a flaring bell at the other.|http://www.dictionary.com/browse/trumpet
trundle|verb|to cause (a circular object) to roll along; roll.|http://www.dictionary.com/browse/trundle
trust|noun|reliance on the integrity, strength, ability, surety, etc., of a person or thing; confidence.|http://www.dictionary.com/browse/trust
truthfully|adjective|telling the truth, especially habitually|http://www.dictionary.com/browse/truthfully
try|verb|to attempt to do or accomplish|http://www.dictionary.com/browse/try
tub|noun|a bathtub.|http://www.dictionary.com/browse/tub
tuck|verb|to put into a small, close, or concealing place|http://www.dictionary.com/browse/tuck
tug|verb|to pull at with force, vigor, or effort.|http://www.dictionary.com/browse/tug
tumble|verb|to fall helplessly down, end over end, as by losing one's footing, support, or equilibrium; plunge headlong|http://www.dictionary.com/browse/tumble
tune|noun|a succession of musical sounds forming an air or melody, with or without the harmony accompanying it.|http://www.dictionary.com/browse/tune
turkey|noun|a large, gallinaceous bird of the family Meleagrididae, especially Meleagris gallopavo, of America, that typically has green, reddish-brown, and yellowish-brown plumage of a metallic luster and that is domesticated in most parts of the world.|http://www.dictionary.com/browse/turkey
turn|verb|to cause to move around on an axis or about a center; rotate|http://www.dictionary.com/browse/turn
turn|verb|to cause to move around on an axis or about a center; rotate|http://www.dictionary.com/browse/turn
tutor|noun|a person employed to instruct another in some branch or branches of learning, especially a private instructor.|http://www.dictionary.com/browse/tutor
tweak|verb|to pinch and pull with a jerk and twist|http://www.dictionary.com/browse/tweak
tweeze|verb|to pluck, as with tweezers.|http://www.dictionary.com/browse/tweeze
twiddle|verb|to turn about or play with lightly or idly, especially with the fingers; twirl.|http://www.dictionary.com/browse/twiddle
twig|noun|a slender shoot of a tree or other plant.|http://www.dictionary.com/browse/twig
twine|noun|a strong thread or string composed of two or more strands twisted together.|http://www.dictionary.com/browse/twine
twinkle|verb|to shine with a flickering gleam of light, as a star or distant light.|http://www.dictionary.com/browse/twinkle
twirl|verb|to cause to rotate rapidly; spin; revolve; whirl.|http://www.dictionary.com/browse/twirl
twist|verb|to combine, as two or more strands or threads, by winding together; intertwine.|http://www.dictionary.com/browse/twist
twist|verb|to combine, as two or more strands or threads, by winding together; intertwine.|http://www.dictionary.com/browse/twist
twitch|verb|to tug or pull at with a quick, short movement; pluck|http://www.dictionary.com/browse/twitch
twitter|verb|to utter a succession of small, tremulous sounds, as a bird.|http://www.dictionary.com/browse/twitter
type|noun|a number of things or persons sharing a particular characteristic, or set of characteristics, that causes them to be regarded as a group, more or less precisely defined or designated; class; category|http://www.dictionary.com/browse/type
ultimately|adjective|last; furthest or farthest; ending a process or series|http://www.dictionary.com/browse/ultimately
ululate|verb|to howl, as a dog or a wolf; hoot, as an owl.|http://www.dictionary.com/browse/ululate
umbrella|noun|a light, small, portable, usually circular cover for protection from rain or sun, consisting of a fabric held on a collapsible frame of thin ribs radiating from the top of a carrying stick or handle.|http://www.dictionary.com/browse/umbrella
unabashedly|adjective|not ashamed, disconcerted, or apologetic; boldly certain of one's position.|http://www.dictionary.com/browse/unabashedly
unaccountably|adjective|impossible to account for; unexplained; inexplicable|http://www.dictionary.com/browse/unaccountably
unbearably|adjective|not bearable; unendurable; intolerable.|http://www.dictionary.com/browse/unbearably
unbend|verb|to straighten from a bent form or position.|http://www.dictionary.com/browse/unbend
unbind|verb|to release from bonds or restraint, as a prisoner; free.|http://www.dictionary.com/browse/unbind
unbraid|verb|to separate (anything braided, as hair) into the several strands.|http://www.dictionary.com/browse/unbraid
unbuckle|verb|to unfasten the buckle or buckles of.|http://www.dictionary.com/browse/unbuckle
unbutton|verb|to free (buttons) from buttonholes; unfasten or undo.|http://www.dictionary.com/browse/unbutton
unclasp|verb|to undo the clasp or clasps of; unfasten.|http://www.dictionary.com/browse/unclasp
unclench|verb|to open or become opened from a clenched state.|http://www.dictionary.com/browse/unclench
uncle|noun|a brother of one's father or mother.|http://www.dictionary.com/browse/uncle
uncoil|verb|to unwind from a coiled position.|http://www.dictionary.com/browse/uncoil
uncover|verb|to lay bare; disclose; reveal.|http://www.dictionary.com/browse/uncover
uncross|verb|to change from a crossed position, as the legs.|http://www.dictionary.com/browse/uncross
uncurl|verb|to straighten or become straightened out from a curl or curled position.|http://www.dictionary.com/browse/uncurl
undergo|verb|to be subjected to; experience; pass through|http://www.dictionary.com/browse/undergo
understand|verb|to perceive the meaning of; grasp the idea of; comprehend|http://www.dictionary.com/browse/understand
understate|verb|to state or represent less strongly or strikingly than the facts would bear out; set forth in restrained, moderate, or weak terms|http://www.dictionary.com/browse/understate
undertake|verb|to take upon oneself, as a task, performance, etc.; attempt|http://www.dictionary.com/browse/undertake
underwear|noun|clothing worn next to the skin under outer clothes.|http://www.dictionary.com/browse/underwear
undo|verb|to reverse the doing of; cause to be as if never done|http://www.dictionary.com/browse/undo
undress|verb|to take the clothes off (a person); disrobe.|http://www.dictionary.com/browse/undress
undulate|verb|to move with a sinuous or wavelike motion; display a smooth rising-and-falling or side-to-side alternation of movement|http://www.dictionary.com/browse/undulate
unethically|adjective|lacking moral principles; unwilling to adhere to proper rules of conduct.|http://www.dictionary.com/browse/unethically
unexpectedly|adjective|not expected; unforeseen; surprising|http://www.dictionary.com/browse/unexpectedly
unfasten|verb|to release from or as from fastenings; detach.|http://www.dictionary.com/browse/unfasten
unfold|verb|to bring out of a folded state; spread or open out|http://www.dictionary.com/browse/unfold
unfortunately|adjective|suffering from bad luck|http://www.dictionary.com/browse/unfortunately
unfurl|verb|to spread or shake out from a furled state, as a sail or a flag; unfold.|http://www.dictionary.com/browse/unfurl
unhand|verb|to take the hand or hands from; release from a grasp; let go|http://www.dictionary.com/browse/unhand
unhook|verb|to detach by or as if by releasing a hook|http://www.dictionary.com/browse/unhook
unify|verb|to make or become a single unit; unite|http://www.dictionary.com/browse/unify
unimpressively|adjective|having the ability to impress the mind; arousing admiration, awe, respect, etc.; moving; admirable|http://www.dictionary.com/browse/unimpressively
unite|verb|to join, combine, or incorporate so as to form a single whole or unit.|http://www.dictionary.com/browse/unite
unit|noun|a single thing or person.|http://www.dictionary.com/browse/unit
unknot|verb|to untie by or as if by undoing a knot|http://www.dictionary.com/browse/unknot
unlace|verb|to loosen or undo the lacing or laces of (a pair of shoes, a corset, etc.).|http://www.dictionary.com/browse/unlace
unleash|verb|to release from or as if from a leash; set loose to pursue or run at will.|http://www.dictionary.com/browse/unleash
unlock|verb|to undo the lock of (a door, chest, etc.), especially with a key.|http://www.dictionary.com/browse/unlock
unmake|verb|to cause to be as if never made; reduce to the original elements or condition; undo; destroy.|http://www.dictionary.com/browse/unmake
unmask|verb|to strip a mask or disguise from.|http://www.dictionary.com/browse/unmask
unnaturally|adjective|contrary to the laws or course of nature.|http://www.dictionary.com/browse/unnaturally
unnecessarily|adjective|not necessary or essential; needless; unessential.|http://www.dictionary.com/browse/unnecessarily
unpack|verb|to undo or remove the contents from (a box, trunk, etc.).|http://www.dictionary.com/browse/unpack
unpin|verb|to remove pins from.|http://www.dictionary.com/browse/unpin
unravel|verb|to separate or disentangle the threads of (a woven or knitted fabric, a rope, etc.).|http://www.dictionary.com/browse/unravel
unroll|verb|to open or spread out (something rolled or coiled)|http://www.dictionary.com/browse/unroll
untangle|verb|to bring out of a tangled state; disentangle; unsnarl.|http://www.dictionary.com/browse/untangle
untie|verb|to loose or unfasten (anything tied); let or set loose by undoing a knot.|http://www.dictionary.com/browse/untie
untuck|verb|to release from or bring out of a tucked condition|http://www.dictionary.com/browse/untuck
untwine|verb|to bring or come out of a twined condition.|http://www.dictionary.com/browse/untwine
untwist|verb|to bring or come out of a twisted condition.|http://www.dictionary.com/browse/untwist
unveil|verb|to remove a veil or other covering from; display; reveal|http://www.dictionary.com/browse/unveil
unwind|verb|to undo or loosen from or as if from a coiled condition|http://www.dictionary.com/browse/unwind
unwrap|verb|to remove or open the wrapping of.|http://www.dictionary.com/browse/unwrap
upbeat|noun|an unaccented beat, especially immediately preceding a downbeat.|http://www.dictionary.com/browse/upbeat
update|verb|to bring (a book, figures, or the like) up to date as by adding new information or making corrections|http://www.dictionary.com/browse/update
upgrade|noun|an incline going up in the direction of movement.|http://www.dictionary.com/browse/upgrade
uphold|verb|to support or defend, as against opposition or criticism|http://www.dictionary.com/browse/uphold
upright|adjective|erect or vertical, as in position or posture.|http://www.dictionary.com/browse/upright
upset|verb|to overturn|http://www.dictionary.com/browse/upset
upside-down|adverb|with the upper part undermost.|http://www.dictionary.com/browse/upside-down
upwardly|adverb|toward a higher place or position|http://www.dictionary.com/browse/upwardly
upward|adverb|toward a higher place or position|http://www.dictionary.com/browse/upward
urgently|adjective|compelling or requiring immediate action or attention; imperative; pressing|http://www.dictionary.com/browse/urgently
urge|verb|to push or force along; impel with force or vigor|http://www.dictionary.com/browse/urge
usefully|adjective|being of use or service; serving some purpose; advantageous, helpful, or of good effect|http://www.dictionary.com/browse/usefully
uselessly|adjective|of no use; not serving the purpose or any purpose; unavailing or futile|http://www.dictionary.com/browse/uselessly
use|verb|to employ for some purpose; put into service; make use of|http://www.dictionary.com/browse/use
use|verb|to employ for some purpose; put into service; make use of|http://www.dictionary.com/browse/use
usher|noun|a person who escorts people to seats in a theater, church, etc.|http://www.dictionary.com/browse/usher
usually|adjective|habitual or customary|http://www.dictionary.com/browse/usually
utilize|verb|to put to use; turn to profitable account|http://www.dictionary.com/browse/utilize
utterly|adverb|in an utter manner; completely; absolutely.|http://www.dictionary.com/browse/utterly
utterly|adverb|in an utter manner; completely; absolutely.|http://www.dictionary.com/browse/utterly
utter|verb|to give audible expression to; speak or pronounce|http://www.dictionary.com/browse/utter
vacantly|adjective|having no contents; empty; void|http://www.dictionary.com/browse/vacantly
vacation|noun|a period of suspension of work, study, or other activity, usually  for rest, recreation, or travel; recess or holiday|http://www.dictionary.com/browse/vacation
vacillate|verb|to waver in mind or opinion; be indecisive or irresolute|http://www.dictionary.com/browse/vacillate
vaguely|adjective|not clearly or explicitly stated or expressed|http://www.dictionary.com/browse/vaguely
vainly|adjective|excessively proud of or concerned about one's own appearance, qualities, achievements, etc.; conceited|http://www.dictionary.com/browse/vainly
valiantly|adjective|boldly courageous; brave; stout-hearted|http://www.dictionary.com/browse/valiantly
validate|verb|to make valid; substantiate; confirm|http://www.dictionary.com/browse/validate
value|noun|relative worth, merit, or importance|http://www.dictionary.com/browse/value
vanish|verb|to disappear from sight, especially quickly; become invisible|http://www.dictionary.com/browse/vanish
van|noun|the foremost or front division of an army, a fleet, or any group leading an advance or in position to lead an advance.|http://www.dictionary.com/browse/van
vase|noun|a vessel, as of glass, porcelain, earthenware, or metal, usually higher than it is wide,  chiefly to hold cut flowers or for decoration.|http://www.dictionary.com/browse/vase
vastly|adjective|of very great area or extent; immense|http://www.dictionary.com/browse/vastly
vault|noun|an arched structure, usually made of stones, concrete, or bricks, forming a ceiling or roof over a hall, room, sewer, or other wholly or partially enclosed construction.|http://www.dictionary.com/browse/vault
veer|verb|to change direction or turn about or aside; shift, turn, or change from one course, position, inclination, etc., to another|http://www.dictionary.com/browse/veer
vegetable|noun|any plant whose fruit, seeds, roots, tubers, bulbs, stems, leaves, or flower parts are  as food, as the tomato, bean, beet, potato, onion, asparagus, spinach, or cauliflower.|http://www.dictionary.com/browse/vegetable
veil|noun|a piece of opaque or transparent material worn over the face for concealment, for protection from the elements, or to enhance the appearance.|http://www.dictionary.com/browse/veil
vein|noun|one of the system of branching vessels or tubes conveying blood from various parts of the body to the heart.|http://www.dictionary.com/browse/vein
venture|noun|an undertaking involving uncertainty as to the outcome, especially a risky or dangerous one|http://www.dictionary.com/browse/venture
vent|noun|an opening, as in a wall, serving as an outlet for air, smoke, fumes, or the like.|http://www.dictionary.com/browse/vent
verbalize|verb|to express in words|http://www.dictionary.com/browse/verbalize
verbally|adjective|of or relating to words|http://www.dictionary.com/browse/verbally
verify|verb|to prove the truth of, as by evidence or testimony; confirm; substantiate|http://www.dictionary.com/browse/verify
verse|noun|(not in technical use) a stanza.|http://www.dictionary.com/browse/verse
very|adverb|in a high degree; extremely; exceedingly|http://www.dictionary.com/browse/very
vessel|noun|a craft for traveling on water, now usually one larger than an ordinary rowboat; a ship or boat.|http://www.dictionary.com/browse/vessel
vest|noun|a close-fitting, waist-length, sleeveless garment that buttons down the front, designed to be worn under a jacket.|http://www.dictionary.com/browse/vest
vex|verb|to irritate; annoy; provoke|http://www.dictionary.com/browse/vex
vibrate|verb|to move rhythmically and steadily to and fro, as a pendulum; oscillate.|http://www.dictionary.com/browse/vibrate
viciously|adjective|addicted to or characterized by vice; grossly immoral; depraved; profligate|http://www.dictionary.com/browse/viciously
victoriously|adjective|having achieved a victory; conquering; triumphant|http://www.dictionary.com/browse/victoriously
view|noun|an instance of seeing or beholding; visual inspection.|http://www.dictionary.com/browse/view
view|noun|an instance of seeing or beholding; visual inspection.|http://www.dictionary.com/browse/view
violently|adjective|acting with or characterized by uncontrolled, strong, rough force|http://www.dictionary.com/browse/violently
visitor|noun|a person who visits, as for reasons of friendship, business, duty, travel, or the like.|http://www.dictionary.com/browse/visitor
visit|verb|to go to and stay with (a person or family) or at (a place) for a short time for reasons of sociability, politeness, business, curiosity, etc.|http://www.dictionary.com/browse/visit
visualise|verb|to recall or form mental images or pictures.|http://www.dictionary.com/browse/visualise
visualize|verb|to recall or form mental images or pictures.|http://www.dictionary.com/browse/visualize
vituperate|verb|to use or address with harsh or abusive language; revile.|http://www.dictionary.com/browse/vituperate
vivaciously|adjective|lively; animated; spirited|http://www.dictionary.com/browse/vivaciously
vocalise|noun|a musical composition consisting of the singing of melody with vowel sounds or nonsense syllables rather than text, as for special effect in classical compositions, in polyphonic jazz singing by special groups, or in virtuoso vocal exercises.|http://www.dictionary.com/browse/vocalise
vocalize|verb|to make vocal; utter; articulate; sing.|http://www.dictionary.com/browse/vocalize
vociferate|verb|to speak or cry out loudly or noisily; shout; bawl.|http://www.dictionary.com/browse/vociferate
voice|noun|the sound or sounds uttered through the mouth of living creatures, especially of human beings in speaking, shouting, singing, etc.|http://www.dictionary.com/browse/voice
volcano|noun|a vent in the earth's crust through which lava, steam, ashes, etc., are expelled, either continuously or at irregular intervals.|http://www.dictionary.com/browse/volcano
volleyball|noun|a game for two teams in which the object is to keep a large ball in motion, from side to side over a high net, by striking it with the hands before it touches the ground.|http://www.dictionary.com/browse/volleyball
volley|noun|the simultaneous discharge of a number of missiles or firearms.|http://www.dictionary.com/browse/volley
voluntarily|adjective|done, made, brought about, undertaken, etc., of one's own accord or by free choice|http://www.dictionary.com/browse/voluntarily
volunteer|noun|a person who voluntarily offers himself or herself for a service or undertaking.|http://www.dictionary.com/browse/volunteer
vomit|verb|to eject the contents of the stomach through the mouth; regurgitate; throw up.|http://www.dictionary.com/browse/vomit
vote|noun|a formal expression of opinion or choice, either positive or negative, made by an individual or body of individuals.|http://www.dictionary.com/browse/vote
vouch|verb|to support as being true, certain, reliable, etc. (usually followed by for)|http://www.dictionary.com/browse/vouch
vow|noun|a solemn promise, pledge, or personal commitment|http://www.dictionary.com/browse/vow
voyage|noun|a course of travel or passage, especially a long journey by water to a distant place.|http://www.dictionary.com/browse/voyage
waddle|verb|to walk with short steps, swaying or rocking from side to side, as a duck.|http://www.dictionary.com/browse/waddle
wade|verb|to walk in water, when partially immersed|http://www.dictionary.com/browse/wade
waft|verb|to carry lightly and smoothly through the air or over water|http://www.dictionary.com/browse/waft
wager|noun|something risked or staked on an uncertain event; bet|http://www.dictionary.com/browse/wager
waggle|verb|to wobble or shake, especially while in motion|http://www.dictionary.com/browse/waggle
wag|verb|to move from side to side, forward and backward, or up and down, especially rapidly and repeatedly|http://www.dictionary.com/browse/wag
wail|verb|to utter a prolonged, inarticulate, mournful cry, usually high-pitched or clear-sounding, as in grief or suffering|http://www.dictionary.com/browse/wail
wait|verb|to remain inactive or in a state of repose, as until something expected happens (often followed by for, till, or until)|http://www.dictionary.com/browse/wait
wake|verb|to become ro from sleep; awake; awaken; waken (often followed by up).|http://www.dictionary.com/browse/wake
walk|verb|to advance or travel on foot at a moderate speed or pace; proceed by steps; move by advancing the feet alternately so that there is always one foot on the ground in bipedal locomotion and two or more feet on the ground in quadrupedal locomotion.|http://www.dictionary.com/browse/walk
walk|verb|to advance or travel on foot at a moderate speed or pace; proceed by steps; move by advancing the feet alternately so that there is always one foot on the ground in bipedal locomotion and two or more feet on the ground in quadrupedal locomotion.|http://www.dictionary.com/browse/walk
wallop|verb|to beat soundly; thrash.|http://www.dictionary.com/browse/wallop
wallow|verb|to roll about or lie in water, snow, mud, dust, or the like, as for refreshment|http://www.dictionary.com/browse/wallow
wall|noun|any of various permanent upright constructions having a length much greater than the thickness and presenting a continuous surface except where pierced by doors, windows, etc.|http://www.dictionary.com/browse/wall
waltz|noun|a ballroom dance, in moderately fast triple meter, in which the dancers revolve in perpetual circles, taking one step to each beat.|http://www.dictionary.com/browse/waltz
wander|verb|to ramble without a definite purpose or objective; roam, rove, or stray|http://www.dictionary.com/browse/wander
want|verb|to feel a need or a desire for; wish for|http://www.dictionary.com/browse/want
warble|verb|to sing or whistle with trills, quavers, or melodic embellishments|http://www.dictionary.com/browse/warble
warmly|adjective|having or giving out a moderate degree of heat, as perceived by the senses|http://www.dictionary.com/browse/warmly
warm|adjective|having or giving out a moderate degree of heat, as perceived by the senses|http://www.dictionary.com/browse/warm
warn|verb|to give notice, advice, or intimation to (a person, group, etc.) of danger, impending evil, possible harm, or anything else unfavorable|http://www.dictionary.com/browse/warn
warp|verb|to bend or twist out of shape, especially from a straight or flat form, as timbers or flooring.|http://www.dictionary.com/browse/warp
war|noun|a conflict carried on by force of arms, as between nations or between parties within a nation; warfare, as by land, sea, or air.|http://www.dictionary.com/browse/war
wash|verb|to apply water or some other liquid to (something or someone) for the purpose of cleansing; cleanse by dipping, rubbing, or scrubbing in water or some other liquid.|http://www.dictionary.com/browse/wash
wash|verb|to apply water or some other liquid to (something or someone) for the purpose of cleansing; cleanse by dipping, rubbing, or scrubbing in water or some other liquid.|http://www.dictionary.com/browse/wash
waste|verb|to consume, spend, or employ uselessly or without adequate return; use to no avail or profit; squander|http://www.dictionary.com/browse/waste
waste|verb|to consume, spend, or employ uselessly or without adequate return; use to no avail or profit; squander|http://www.dictionary.com/browse/waste
watch|verb|to be alertly on the lookout, look attentively, or observe, as to see what comes, is done, or happens|http://www.dictionary.com/browse/watch
watch|verb|to be alertly on the lookout, look attentively, or observe, as to see what comes, is done, or happens|http://www.dictionary.com/browse/watch
water|noun|a transparent, odorless, tasteless liquid, a compound of hydrogen and oxygen, H 2 O, freezing at 32°F or 0°C and boiling at 212°F or 100°C, that in a more or less impure state constitutes rain, oceans, lakes, rivers, etc.|http://www.dictionary.com/browse/water
waver|verb|to sway to and fro; flutter|http://www.dictionary.com/browse/waver
waves|noun|the Women's Reserve of the U.S. Naval Reserve, the distinct force of women enlistees in the U.S. Navy, organized during World War II.|http://www.dictionary.com/browse/waves
wave|noun|a disturbance on the surface of a liquid body, as the sea or a lake, in the form of a moving ridge or swell.|http://www.dictionary.com/browse/wave
wave|noun|a disturbance on the surface of a liquid body, as the sea or a lake, in the form of a moving ridge or swell.|http://www.dictionary.com/browse/wave
way|noun|manner, mode, or fashion|http://www.dictionary.com/browse/way
weakly|adjective|weak or feeble in constitution; not robust; sickly.|http://www.dictionary.com/browse/weakly
wealth|noun|a great quantity or store of money, valuable possessions, property, or other riches|http://www.dictionary.com/browse/wealth
wearily|adjective|physically or mentally exhausted by hard work, exertion, strain, etc.; fatigued; tired|http://www.dictionary.com/browse/wearily
wear|verb|to carry or have on the body or about the person as a covering, equipment, ornament, or the like|http://www.dictionary.com/browse/wear
weather|noun|the state of the atmosphere with respect to wind, temperature, cloudiness, moisture, pressure, etc.|http://www.dictionary.com/browse/weather
weave|verb|to interlace (threads, yarns, strips, fibrous material, etc.) so as to form a fabric or material.|http://www.dictionary.com/browse/weave
wedge|noun|a piece of hard material with two principal faces meeting in a sharply acute angle, for raising, holding, or splitting objects by applying a pounding or driving force, as from a hammer.|http://www.dictionary.com/browse/wedge
wed|verb|to marry (another person) in a formal ceremony.|http://www.dictionary.com/browse/wed
week|noun|a period of seven successive days, usually understood as beginning with Sunday and ending with Saturday.|http://www.dictionary.com/browse/week
weep|verb|to express grief, sorrow, or any overpowering emotion by shedding tears; shed tears; cry|http://www.dictionary.com/browse/weep
weight|noun|the amount or quantity of heaviness or mass; amount a thing weighs.|http://www.dictionary.com/browse/weight
weigh|verb|to determine or ascertain the force that gravitation exerts upon (a person or thing) by use of a balance, scale, or other mechanical device|http://www.dictionary.com/browse/weigh
welcome|interjection|(a word of kindly greeting, as to one whose arrival gives pleasure)|http://www.dictionary.com/browse/welcome
well|adverb|in a good or satisfactory manner|http://www.dictionary.com/browse/well
wend|verb|to pursue or direct (one's way).|http://www.dictionary.com/browse/wend
wetly|adjective|moistened, covered, or soaked with water or some other liquid|http://www.dictionary.com/browse/wetly
wet|adjective|moistened, covered, or soaked with water or some other liquid|http://www.dictionary.com/browse/wet
whack|verb|to strike with a smart, resounding blow or blows.|http://www.dictionary.com/browse/whack
wheedle|verb|to endeavor to influence (a person) by smooth, flattering, or beguiling words or acts|http://www.dictionary.com/browse/wheedle
wheel|noun|a circular frame or disk arranged to revolve on an axis, as on or in vehicles or machinery.|http://www.dictionary.com/browse/wheel
wheeze|verb|to breathe with difficulty and with a whistling sound|http://www.dictionary.com/browse/wheeze
whet|verb|to sharpen (a knife, tool, etc.) by grinding or friction.|http://www.dictionary.com/browse/whet
whimper|verb|to cry with low, plaintive, broken sounds.|http://www.dictionary.com/browse/whimper
whine|verb|to utter a low, usually nasal, complaining cry or sound, as from uneasiness, discontent, peevishness, etc.|http://www.dictionary.com/browse/whine
whinny|verb|to utter the characteristic cry of a horse; neigh.|http://www.dictionary.com/browse/whinny
whip|verb|to beat with a strap, lash, rod, or the like, especially by way of punishment or chastisement; flog; thrash|http://www.dictionary.com/browse/whip
whip|verb|to beat with a strap, lash, rod, or the like, especially by way of punishment or chastisement; flog; thrash|http://www.dictionary.com/browse/whip
whirl|verb|to turn around, spin, or rotate rapidly|http://www.dictionary.com/browse/whirl
whisk|verb|to move with a rapid, sweeping stroke|http://www.dictionary.com/browse/whisk
whisper|verb|to speak with soft, hushed sounds, using the breath, lips, etc., but with no vibration of the vocal cords.|http://www.dictionary.com/browse/whisper
whistle|verb|to make a clear musical sound, a series of such sounds, or a high-pitched, warbling sound by the forcible expulsion of the breath through a small opening formed by contracting the lips, or through the teeth, with the aid of the tongue.|http://www.dictionary.com/browse/whistle
whistle|verb|to make a clear musical sound, a series of such sounds, or a high-pitched, warbling sound by the forcible expulsion of the breath through a small opening formed by contracting the lips, or through the teeth, with the aid of the tongue.|http://www.dictionary.com/browse/whistle
whittle|verb|to cut, trim, or shape (a stick, piece of wood, etc.) by carving off bits with a knife.|http://www.dictionary.com/browse/whittle
wholly|adverb|entirely; totally; altogether; quite.|http://www.dictionary.com/browse/wholly
whoop|noun|a loud cry or shout, as of excitement or joy.|http://www.dictionary.com/browse/whoop
who|pronoun;|what person or persons?|http://www.dictionary.com/browse/who
widen|verb|to make or become wide or wider; broaden; expand.|http://www.dictionary.com/browse/widen
wield|verb|to exercise (power, authority, influence, etc.), as in ruling or dominating.|http://www.dictionary.com/browse/wield
wiggle|verb|to move or go with short, quick, irregular movements from side to side|http://www.dictionary.com/browse/wiggle
wilderness|noun|a wild and uncultivated region, as of forest or desert, uninhabited or inhabited only by wild animals; a tract of wasteland.|http://www.dictionary.com/browse/wilderness
wildly|adjective|living in a state of nature; not tamed or domesticated|http://www.dictionary.com/browse/wildly
willfully|adjective|deliberate, voluntary, or intentional|http://www.dictionary.com/browse/willfully
wilt|verb|to become limp and drooping, as a fading flower; wither.|http://www.dictionary.com/browse/wilt
wince|verb|to draw back or tense the body, as from pain or from a blow; start; flinch.|http://www.dictionary.com/browse/wince
windmill|noun|any of various machines for grinding, pumping, etc., driven by the force of the wind acting upon a number of vanes or sails.|http://www.dictionary.com/browse/windmill
window|noun|an opening in the wall of a building, the side of a vehicle, etc., for the admission of air or light, or both, commonly fitted with a frame in which are set movable sashes containing panes of glass.|http://www.dictionary.com/browse/window
wind|noun|air in natural motion, as that moving horizontally at any velocity along the earth's surface|http://www.dictionary.com/browse/wind
wind|noun|air in natural motion, as that moving horizontally at any velocity along the earth's surface|http://www.dictionary.com/browse/wind
wine|noun|the fermented juice of grapes, made in many varieties, such as red, white, sweet, dry, still, and sparkling, for use as a beverage, in cooking, in religious rites, etc., and usually having an alcoholic content of 14 percent or less.|http://www.dictionary.com/browse/wine
wing|noun|either of the two forelimbs of most birds and of bats, corresponding to the human arms, that are specialized for flight.|http://www.dictionary.com/browse/wing
wink|verb|to close and open one or both eyes quickly.|http://www.dictionary.com/browse/wink
winter|noun|the cold season between autumn and spring in northern latitudes (in the Northern Hemisphere from the winter solstice to the vernal equinox; in the Southern Hemisphere from the summer solstice to the autumnal equinox).|http://www.dictionary.com/browse/winter
win|verb|to finish first in a race, contest, or the like.|http://www.dictionary.com/browse/win
wipe|verb|to rub lightly with or on a cloth, towel, paper, the hand, etc., in order to clean or dry the surface of|http://www.dictionary.com/browse/wipe
wire|noun|a slender, stringlike piece or filament of relatively rigid or flexible metal, usually circular in section, manufactured in a great variety of diameters and metals depending on its application.|http://www.dictionary.com/browse/wire
wisely|adjective|having the power of discerning and judging properly as to what is true or right; possessing discernment, judgment, or discretion.|http://www.dictionary.com/browse/wisely
wish|verb|to want; desire; long for (usually followed by an infinitive or a clause)|http://www.dictionary.com/browse/wish
wish|verb|to want; desire; long for (usually followed by an infinitive or a clause)|http://www.dictionary.com/browse/wish
withdraw|verb|to draw back, away, or aside; take back; remove|http://www.dictionary.com/browse/withdraw
withhold|verb|to hold back; restrain or check.|http://www.dictionary.com/browse/withhold
withstand|verb|to stand or hold out against; resist or oppose, especially successfully|http://www.dictionary.com/browse/withstand
witness|verb|to see, hear, or know by personal presence and perception|http://www.dictionary.com/browse/witness
wobble|verb|to incline to one side and to the other alternately, as a wheel, top, or other rotating body when not properly balanced.|http://www.dictionary.com/browse/wobble
woefully|adjective|full of woe; wretched; unhappy|http://www.dictionary.com/browse/woefully
woman|noun|the female human being, as distinguished from a girl or a man.|http://www.dictionary.com/browse/woman
women|noun|plural of woman.|http://www.dictionary.com/browse/women
wonderfully|adjective|excellent; great; marvelous|http://www.dictionary.com/browse/wonderfully
wonder|verb|to think or speculate curiously|http://www.dictionary.com/browse/wonder
wood|noun|the hard, fibrous substance composing most of the stem and branches of a tree or shrub, and lying beneath the bark; the xylem.|http://www.dictionary.com/browse/wood
wool|noun|the fine, soft, curly hair that forms the fleece of sheep and certain other animals, characterized by minute, overlapping surface scales that give it its felting property.|http://www.dictionary.com/browse/wool
woo|verb|to seek the favor, affection, or love of, especially with a view to marriage.Synonyms|http://www.dictionary.com/browse/woo
word|noun|a unit of language, consisting of one or more spoken sounds or their written representation, that functions as a principal carrier of meaning. Words are composed of one or more morphemes and are either the smallest units susceptible of independent use or consist of two or three such units combined under certain linking conditions, as with the loss of primary accent that distinguishes blackآirdנfrom blackנbird׮ Words are usually separated by spaces in writing, and are distinguished phonologically, as by accent, in many languages.|http://www.dictionary.com/browse/word
work|noun|exertion or effort directed to produce or accomplish something; labor; toil.|http://www.dictionary.com/browse/work
work|noun|exertion or effort directed to produce or accomplish something; labor; toil.|http://www.dictionary.com/browse/work
worm|noun|Zoology. any of numerous long, slender, soft-bodied, legless, bilaterally symmetrical invertebrates, including the flatworms, roundworms, acanthocephalans, nemerteans, gordiaceans, and annelids.|http://www.dictionary.com/browse/worm
worriedly|adjective|having or characterized by worry; concerned; anxious|http://www.dictionary.com/browse/worriedly
worry|verb|to torment oneself with or suffer from disturbing thoughts; fret.|http://www.dictionary.com/browse/worry
worship|noun|reverent honor and homage paid to God or a sacred personage, or to any object regarded as sacred.|http://www.dictionary.com/browse/worship
wound|noun|an injury, usually involving division of tissue or rupture of the integument or mucous membrane, due to external violence or some mechanical agency rather than disease.|http://www.dictionary.com/browse/wound
wrack|noun|wreck or wreckage.|http://www.dictionary.com/browse/wrack
wrangle|verb|to argue or dispute, especially in a noisy or angry manner.|http://www.dictionary.com/browse/wrangle
wrap|verb|to enclose in something wound or folded about (often followed by up)|http://www.dictionary.com/browse/wrap
wreck|noun|any building, structure, or thing reduced to a state of ruin.|http://www.dictionary.com/browse/wreck
wrench|verb|to twist suddenly and forcibly; pull, jerk, or force by a violent twist|http://www.dictionary.com/browse/wrench
wrench|verb|to twist suddenly and forcibly; pull, jerk, or force by a violent twist|http://www.dictionary.com/browse/wrench
wren|noun|any of numerous small, active songbirds of the family Troglodytidae, especially Troglodytes troglodytes, of the Northern Hemisphere, having dark-brown plumage barred with black and a short, upright tail.|http://www.dictionary.com/browse/wren
wrestle|verb|to engage in wrestling.|http://www.dictionary.com/browse/wrestle
wrest|verb|to twist or turn; pull, jerk, or force by a violent twist.|http://www.dictionary.com/browse/wrest
wriggle|verb|to twist to and fro; writhe; squirm.|http://www.dictionary.com/browse/wriggle
wring|verb|to twist forcibly|http://www.dictionary.com/browse/wring
wrinkle|noun|a small furrow or crease in the skin, especially of the face, as from aging or frowning.|http://www.dictionary.com/browse/wrinkle
wrist|noun|the carpus or lower part of the forearm where it joins the hand.|http://www.dictionary.com/browse/wrist
writer|noun|a person engaged in writing books, articles, stories, etc., especially as an occupation or profession; an author or journalist.|http://www.dictionary.com/browse/writer
write|verb|to trace or form (characters, letters, words, etc.) on the surface of some material, as with a pen, pencil, or other instrument or means; inscribe|http://www.dictionary.com/browse/write
writhe|verb|to twist the body about, or squirm, as in pain, violent effort, etc.|http://www.dictionary.com/browse/writhe
writing|noun|the act of a person or thing that writes.|http://www.dictionary.com/browse/writing
wrongly|adjective|not in accordance with what is morally right or good|http://www.dictionary.com/browse/wrongly
yawningly|adjective|being or standing wide open; gaping|http://www.dictionary.com/browse/yawningly
yearly|adjective|pertaining to a year or to each year.|http://www.dictionary.com/browse/yearly
yearningly|noun|deep longing, especially when accompanied by tenderness or sadness|http://www.dictionary.com/browse/yearningly
yesterday|adverb|on the day preceding this day.|http://www.dictionary.com/browse/yesterday
yieldingly|adjective|inclined to give in; submissive; compliant|http://www.dictionary.com/browse/yieldingly
youthfully|adjective|characterized by youth; young.|http://www.dictionary.com/browse/youthfully
zealously|adjective|full of, characterized by, or due to zeal; ardently active, devoted, or diligent.Synonyms|http://www.dictionary.com/browse/zealously
zestfully|adjective|full of zest.|http://www.dictionary.com/browse/zestfully`
