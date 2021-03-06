ej.addCulture( "fy", {
	name: "fy",
	englishName: "Frisian",
	nativeName: "Frysk",
	language: "fy",
	numberFormat: {
		",": ".",
		".": ",",
		percent: {
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": ".",
			".": ",",
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			"/": "-",
			firstDay: 1,
			days: {
				names: ["snein","moandei","tiisdei","woansdei","tongersdei","freed","sneon"],
				namesAbbr: ["sni","moa","tii","woa","ton","fre","sno"],
				namesShort: ["si","mo","ti","wo","to","fr","so"]
			},
			months: {
				names: ["jannewaris","febrewaris","maart","april","maaie","juny","july","augustus","septimber","oktober","novimber","desimber",""],
				namesAbbr: ["jan","feb","mrt","apr","maa","jun","jul","aug","sep","okt","nov","des",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "d-M-yyyy",
				D: "dddd d MMMM yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd d MMMM yyyy H:mm",
				F: "dddd d MMMM yyyy H:mm:ss",
				M: "d MMMM"
			}
		}
	}
});
