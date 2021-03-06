ej.addCulture( "mt", {
	name: "mt",
	englishName: "Maltese",
	nativeName: "Malti",
	language: "mt",
	numberFormat: {
		currency: {
			pattern: ["-$n","$n"],
			symbol: "€"
		}
	},
	calendars: {
		standard: {
			firstDay: 1,
			days: {
				names: ["Il-Ħadd","It-Tnejn","It-Tlieta","L-Erbgħa","Il-Ħamis","Il-Ġimgħa","Is-Sibt"],
				namesAbbr: ["Ħad","Tne","Tli","Erb","Ħam","Ġim","Sib"],
				namesShort: ["Ħd","Tn","Tl","Er","Ħm","Ġi","Si"]
			},
			months: {
				names: ["Jannar","Frar","Marzu","April","Mejju","Ġunju","Lulju","Awwissu","Settembru","Ottubru","Novembru","Diċembru",""],
				namesAbbr: ["Jan","Fra","Mar","Apr","Mej","Ġun","Lul","Aww","Set","Ott","Nov","Diċ",""]
			},
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, d' ta\\' 'MMMM yyyy",
				t: "HH:mm",
				T: "HH:mm:ss",
				f: "dddd, d' ta\\' 'MMMM yyyy HH:mm",
				F: "dddd, d' ta\\' 'MMMM yyyy HH:mm:ss",
				M: "d' ta\\' 'MMMM"
			}
		}
	}
});
