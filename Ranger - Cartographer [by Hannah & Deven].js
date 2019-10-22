/*	-INFORMATION-
	Archetype:	Cartographer (by Hannah Rose and Deven Rue)
	Source URL:	https://www.dmsguild.com/product/278978/Cartographer
	Code:		u/macarser
*/

var iFileName = "Ranger - Cartographer.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
//RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

	"ranger", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"cartographer", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /cartographer/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "Cartographer", //required; the name of the subclass

		source : ["HR:C"], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Cartographer (Ranger)", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		//abilitySave : 6, //overwrites the abilitySave that was defined in the ClassList
		//abilitySaveAlt : 2,//overwrites the abilitySaveAlt that was defined in the ClassList
		//spellcastingFactor : 2, //overwrites the spellcastingFactor that was defined in the ClassList

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight
			"subclassfeatures3" : {
				name : "Cartographer Magic",
				source : ["HR:C", 3],
				minlevel : 3,
				description : "\n   " + "Starting at level 3, you learn an additional spell when you reach certain levels in this class." + "\n  " + "This spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				spellcastingExtra : ["entangle", "skywrite", "speak with plants", "hallucinatory terrain", "tree stride"].concat(new Array(95)).concat("AddToKnown")
			},
			/*"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Cartographer Magic",
				source : ["HR:C", 3],
				minlevel : 3,
				description : "\n   " + "Starting at level 3, you learn an additional spell when you reach certain levels in this class." + "\n  " + "This spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				spellcastingExtra : ["entangle"],
				//spellcastingBonus : [{
					//name : "Cartog Magic (level 3)",
					//spells : ["entangle"],
					//selection : ["entangle"],
					//spellcastingExtra : ["entangle"],
					//prepared: true,
				//}]
			},
			"subclassfeatures3.0.1" : {
				name : "Cartographer Magic",
				source : ["HR:C", 3],
				minlevel : 5,
				description : "\n   " + "Starting at level 3, you learn an additional spell when you reach certain levels in this class." + "\n  " + "This spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				spellcastingExtra : ["skywrite"],
				//spellcastingBonus : [{
					//name : "Cartog Magic (level 5)",
					//spells : ["skywrite"],
					//selection : ["skywrite"],
					//spellcastingExtra : ["skywrite"],
					//prepared: true,
				//}]
			},
			"subclassfeatures3.0.2" : {
				name : "Cartographer Magic",
				source : ["HR:C", 3],
				minlevel : 9,
				description : "\n   " + "Starting at level 3, you learn an additional spell when you reach certain levels in this class." + "\n  " + "This spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				spellcastingExtra : ["speak with plants"],
				//spellcastingBonus : [{
					//name : "Cartog Magic (level 9)",
					//spells : ["speak with plants"],
					//selection : ["speak with plants"],
					//spellcastingExtra : ["speak with plants"],
					//prepared: true,
				//}]
			},
			"subclassfeatures3.0.3" : {
				name : "Cartographer Magic",
				source : ["HR:C", 3],
				minlevel : 13,
				description : "\n   " + "Starting at level 3, you learn an additional spell when you reach certain levels in this class." + "\n  " + "This spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				spellcastingExtra : ["hallucinatory terrain"],
				//spellcastingBonus : [{
					//name : "Cartog Magic (level 13)",
					//spells : ["hallucinatory terrain"],
					//selection : ["hallucinatory terrain"],
					//spellcastingExtra : ["hallucinatory terrain"],
					//prepared: true,
				//}]
			},
			"subclassfeatures3.0.4" : {
				name : "Cartographer Magic",
				source : ["HR:C", 3],
				minlevel : 17,
				description : "\n   " + "Starting at level 3, you learn an additional spell when you reach certain levels in this class." + "\n  " + "This spell counts as a ranger spell for you, but it doesn't count against the number of ranger spells you know.",
				spellcastingExtra : ["tree stride"],
				//spellcastingBonus : [{
					//name : "Cartog Magic (level 17)",
					//spells : ["tree stride"],
					//selection : ["tree stride"],
					//spellcastingExtra : ["tree stride"],
					//prepared: true,
				//}]
			},*/
			"subclassfeature3.1" : {
				name : "Wisdom of the Wilds",
				source : ["HR:C", 3],
				minlevel : 3,				
				description : "\n   " + "Starting at level 3, you gain proficiency in either Medicine or Survival skill." + "\n   " + "You also gain proficiency with cartographer's tools.",
				skillstxt : "\n\n" + toUni("Cartographer (Ranger)") + ": Medicine or Survival proficiency.",
				skills : ["Medicine"],
			},
			"subclassfeature3.2" : {
				name : "Arcane Cartography",
				source : ["HR:C", 3],
				minlevel : 3,
				description : "\n   " + "Starting at level 3, you map your travels with exceptional accuracy and artistry, creating a Master Map." + "\n   " + "Additionally, when you are in a location you have mapped, you gain the following benefits:" + "\n   " + "• You always know which way is north, and you cannot become lost except by magical means." + "\n   " + "• You have advantage on Wisdom (Survival) and Intellience (Nature) checks.",
				savetxt : { adv_vs : ["Wisdom (Survival) and Intelligence (Nature) checks"] }
			},
			"subclassfeature7" : {
				name : "Cartograher's Vision",
				source : ["HR:C", 3],
				minlevel : 7,
				usages : 1,
				recovery : "short rest",
				action : "[action]",
				description : "\n   " + "Starting at level 7, the maps you create become imbued with the magical energy of the land itself. By concentrating on a location on your Master Map, you can see the chosen location as if you were standing in that space. You can concentrate on that location (as if concentrating on a spell) for up to 10 minutes, during which time you are blind with regard to your own senses." + "\n   " + "Once you use this feature, you can't use it again until you complete a short or long rest.",
			},
			"subclassfeature11" : {
				name : "Hostile Geography",
				source : ["HR:C", 3],
				minlevel : 11,			
				usages: "Wis mod", 
				usagescalc : "event.value = What('Wis Mod');",
				recovery : "short rest",
				description : "\n   " + "Starting at level 11, you can cause the land around you to rise up against your foes. As a bonus action, you designate one creature withint 60 feet of you as the target of this feature. Whenever the creature moves without teleporting, it must make a Dexterity saving through against your spell save DC or take 1d6 slashing damage for each five feet of movement. This effect lasts for 1 minute or until you use this feature again." + "\n   " + "You can use this feature a number of times equal to your Wisdom modifier (minimum of once). You retain all expenses uses when you finish a long rest.",
				action : "[bonus action]"
			},
			"subclassfeature15" : {
				name : "Mapwalking",
				source : ["HR:C", 3],
				minlevel : 15,
				usages : 1,
				recovery : "long rest",
				description : "\n   " + "When you reach level 15, the power of your Master Map allows you to travel between locations as easily as folding a map. As an action, you can transport yourself and up to six willing creatures of your choice within 10 feet of you to a location on your Master Map. Once you use this feature, you can't use it again until you complete a long rest.",
				action: "[action]"
			},
		}
	}
);

SourceList["HR:C"] = { //Object name; This is the way the source is called upon, so the way you would enter it as the "Source" in any other of the JavaScript Syntax. Note that this is case sensitive! //Also note that this has to be an unique value. Look at the default sources in the "Ranger - Cartographer.js" file

	name : "Cartographer", //Required; The name of the source as written in full. This will be used in the tooltips/mouseover text.

	abbreviation : "HR:C", //Required; The abbreviation of the source. This can only be letters and a colon! This will be used to refer to the source in the form fields //Note that this doesn't have to be the same as the way the source is called upon, but it can be for convenience

	group : "default", //Optional; Adding this will make the sheet put the source into a group when using the "Sources" function where you can include/exclude sources. // The default options for this are "Unearthed Arcana", "Official Sources", "Official Sources (small)", and "default". // If you enter "default", the source can't be excluded using the "Sources" function

	url : "https://www.dmsguild.com/product/278978/Cartographer", //Optional; A link to the source if it can be found on the internet. This link is used in the Source Selection Dialogue

	//date : "2017/09/27", //Optional; the date of the resource, written as year/month/day
}