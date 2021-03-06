ej.addCulture( "am", {
	name: "am",
	englishName: "Amharic",
	nativeName: "አማርኛ",
	language: "am",
	numberFormat: {
		"NaN": "NAN",
		percent: {
			pattern: ["-n%","n%"]
		},
		currency: {
			pattern: ["-$n","$n"],
			symbol: "ETB"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["እሑድ","ሰኞ","ማክሰኞ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],
				namesAbbr: ["እሑድ","ሰኞ","ማክሰ","ረቡዕ","ሐሙስ","ዓርብ","ቅዳሜ"],
				namesShort: ["እሑ","ሰኞ","ማክ","ረቡ","ሐሙ","ዓር","ቅዳ"]
			},
			months: {
				names: ["ጥር","የካቲት","መጋቢት","ሚያዚያ","ግንቦት","ሰኔ","ሐምሌ","ነሐሴ","መስከረም","ጥቅምት","ህዳር","ታህሳስ",""],
				namesAbbr: ["ጥር","የካ.","መጋ.","ሚያ.","ግን.","ሰኔ","ሐም.","ነሐ.","መስ.","ጥቅ.","ህዳ.","ታህ.",""]
			},
			AM: ["ጧት","ጧት","ጧት"],
			PM: ["ከሰዓት በኋላ","ከሰዓት በኋላ","ከሰዓት በኋላ"],
			patterns: {
				d: "d/M/yyyy",
				D: "dddd '፣' MMMM d 'ቀን' yyyy",
				f: "dddd '፣' MMMM d 'ቀን' yyyy h:mm tt",
				F: "dddd '፣' MMMM d 'ቀን' yyyy h:mm:ss tt",
				M: "MMMM d' ቀን'"
			}
		}
	}
});