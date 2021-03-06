ej.addCulture( "lv-LV", {
	name: "lv-LV",
	englishName: "Latvian (Latvia)",
	nativeName: "latviešu (Latvija)",
	language: "lv",
	numberFormat: {
		pattern : ["-n"],
		",": " ",
		".": ",",
		groupSizes: [3],
		"NaN": "Nav skaitlis",
		negativeInfinity: "-∞",
		positiveInfinity: "∞",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "%"
		},
		currency: {
			pattern: ["-$ n","$ n"],
			groupSizes: [3],
			",": " ",
			".": ",",
			symbol: "Ls"
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["svētdiena","pirmdiena","otrdiena","trešdiena","ceturtdiena","piektdiena","sestdiena"],
				namesAbbr: ["sv","pr","ot","tr","ce","pk","se"],
				namesShort: ["sv","pr","ot","tr","ce","pk","se"]
			},
			months: {
				names: ["janvāris","februāris","marts","aprīlis","maijs","jūnijs","jūlijs","augusts","septembris","oktobris","novembris","decembris",""],
				namesAbbr: ["jan","feb","mar","apr","mai","jūn","jūl","aug","sep","okt","nov","dec",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd.MM.yyyy.",
				D: "dddd, yyyy'. gada 'd. MMMM",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, yyyy'. gada 'd. MMMM H:mm",
				F: "dddd, yyyy'. gada 'd. MMMM H:mm:ss",
				M: "d. MMMM",
				Y: "yyyy'. gada 'MMMM"
			}
		}
	}
});