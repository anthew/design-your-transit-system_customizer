import color from 'color'


export const colors = {
	background: "#FFD674",
	link: "#BF1E00",
	linkHover: color("#BF1E00").darken(0.1),
	btnLight: "#F5F5F5",
	btnLightText: "#1F2D39",
	btnLightHover: color("#F5F5F5").darken(0.1),
	btnDark: "#E6843B",
	btnDarkText: "#1F2D39",
	btnDarkHover: color("#E6843B").darken(0.1),
	btnDarkDisabled: color("#E6843B").darken(0.5),
	headerStripe: "#BF1E00",
	footerBackground: "#BF1E00",
	footerText: "#FFFFFF",
	footerTextHover: color("#FFFFFF").darken(0.1),
	cardDark: `${"#BF1E00"}!important`,
	dashboard: "#E6843B",
	dashboardText: "#1F2D39",
	dashboardMeterBackground: "#FFFFFF",
	dashboardMeter: "#FAB100",
	dashboardMeterCost: "#699639",
	dashboardMeterOverCost: "#BF1E00",
	dashboardMeterTextDark: "#1F2D39",
	dashboardMeterTextLight: "#FFFFFF",
	strategy: "#F5F5F5",
	strategySelected: "#BF1E00",
	strategySelectedText: "#FFFFFF",
	strategyBar: "#FAB100",
	strategyCostSigns: "#699639",


	//New attributes below (btnLight still controls Translate button, strategyText is color of text when a strategy is selected)
	resetBtn: "#F5F5F5",
	resetBtnText: "#1F2D39",
	strategyText: "#1F2D39",
}


export const breakpoints = {
	medium: '768px',
	large: '992px',
}