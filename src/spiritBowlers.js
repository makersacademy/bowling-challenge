var faceA = "images/0.jpg"
var faceB = "images/50.jpg"
var faceC = "images/100.jpg"
var faceD = "images/150.jpg"
var faceE = "images/200.jpg"
var faceF = "images/250.jpg"
var faceG = "images/299.jpg"
var faceH = "images/300.jpg"

var bioA = '\nName: Oliver Manzanilla\n\nAge: 0.4\n\nFavourite word: fruchtzubereitung\n\nLikes: user stories\n\nFavourite Quote: "In the struggle between yourself and the world, hold the world\'s coat."'
var bioB = '\nName: Mike Ianucci\n\nFuture Occupation: assistant\n\nFavourite Medicine: anticoagulants\n\nLifetime goals: 2\n\nFavourite Quote: "I’m an educated man, the prisons I know are subtle ones."'
var bioC = '\nName: Jean Althusser\n\nFavourite Film: Empire (1964)\n\nDislikes: Apparatuses\n\nVaccination Status: uncertain\n\nFavourite Quote: "You may never get to touch the Master, but you can tickle his creatures."'
var bioD = '\nName: Belinda Power-Flakes\n\nAge: 100\n\nFavourite weekday: Tuesdays\n\nFuture Plans: fuck that shit\n\nFavourite Quote: "Flow more sicker, so much shake in the street / They measure my weight in Richter"'
var bioE = '\nName: Jamie Schlaudraff\n\nYearnings: lighter fluid, a whiff of life, even if in the form of pain\n\nFavourite Quote: "In Evelyn\'s face, I saw the travels of Marco Polo, the fall of Constantinople, the irredentist yearnings of Hungaro-Romanians. How many ancestors vanished when Evelyn had her teeth fixed? In Evelyn\'s face I saw the hordes of Genghis Khan invading Poland. Among them was a yellow brute, with a long mustache flowing away from his nostrills like black ribbons. He raped Evelyn\'s great-great-great-grandmother with his fierce prick, thereby giving a distinctly slanted plane to Evelyn\'s cheekbones, her nicest feature."'
var bioF = '\nName: Yasujiro Naruse\n\nHobbies: scream swallowing\n\nMisses: public shame\n\nFuture Plans: left\n\nFavourite Quote: "The blood that soils your body becomes stars."'
var bioG = '\nName: Magnus Fonseca\n\nFavourite Book: "A Most Subtle Question: Whether a Chimera Bombinating in the Void Can Swallow up Second Intentions: as Debated over Ten Weeks at the Council of Constance"\n\nBlood Type: C\n\nFavourite Quote: "Whiskey is not incompatible with theology, particularly magic whiskey that is ancient and also a week old."'
var bioH = '\nName: Cacilda Schlaudraff\n\nHobbies: misanthropy, holding things while looking in a direction opposite to the one of the things being held\n\nFavourite Psychopathologist: Cacilda Schlaudraff\n\nDislikes: bowling, the sound produced by your breathing\n\nFavourite Quote: "Zarathustra is gentle to the sick."'

var faces = [faceA, faceB, faceC, faceD, faceE, faceF, faceG, faceH]
var bios = [bioA, bioB, bioC, bioD, bioE, bioF, bioG, bioH]


function getSpiritFace(score) {
    if (score === 300) {
        return faces[7]
    }
    return faces[Math.ceil(score / 50)];
}

function getSpiritBio(score) {
    if (score === 300) {
        return bios[7]
    }
    return bios[Math.ceil(score / 50)];
}
