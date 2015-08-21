var Platform;

function init () {
	Platform = {};
	var osname          = Ti.Platform.osname,
		version         = Ti.Platform.version,
		isTablet,
		isPhablet
	;

	// UI vars may not be available in a background task
	try {
		var height          = Ti.Platform.displayCaps.platformHeight,
			width           = Ti.Platform.displayCaps.platformWidth,
			screenWidthInch = Titanium.Platform.displayCaps.platformWidth / Titanium.Platform.displayCaps.dpi,
			screenHeightInch= Titanium.Platform.displayCaps.platformHeight / Titanium.Platform.displayCaps.dpi;

		var screenSizeInch      = Math.sqrt( Math.pow(screenWidthInch, 2) + Math.pow(screenHeightInch, 2) );

		isTablet = osname === 'ipad' || (osname === 'android' && screenSizeInch > 7 && (width > 899 || height > 899) );
		isPhablet = (osname === 'android' && screenSizeInch >= 6 && screenSizeInch <= 7 && (width > 899 || height > 899) );
		
		if ( !isTablet && !isPhablet ) {
			if ( Ti.Platform.displayCaps.density == 'high'){
				//iPhone 4, 4s
				if ( Ti.Platform.displayCaps.platformHeight == 480 ) {
					Platform.iPhoneDevice = 4;
				};
				//iPhone 5, 5c, 5s
				if ( Ti.Platform.displayCaps.platformHeight >= 568 ) {
					Platform.iPhoneDevice = 5;
				};
				//iPhone 6
				if ( Ti.Platform.displayCaps.platformHeight >= 667 ) {
					Platform.iPhoneDevice = 6;
				};
				//iPhone 6 Plus
				if ( Ti.Platform.displayCaps.platformHeight >= 1104 ) {
					Platform.iPhoneDevice = "6+";
				};
			} else {
				//iPhone 3 and lower
				Platform.iPhoneDevice = 3;
			}
		}
	}

	// set some default vars for non UI processes
	catch (e) {
		isTablet = false;
		isPhablet = false;
		Platform.iPhoneDevice = 5;
	}

	// set some global flags
	Platform.isTablet = isTablet;
	Platform.isPhablet = isPhablet;
	Platform.isPhone = (!isTablet && !isPhablet);
	Platform.isAndroid = (osname === 'android');
	Platform.isIos = (osname === 'ipad' || osname === 'iphone' || osname === 'ipod');
	Platform.isIos7 = (Platform.isIos && parseInt(Titanium.Platform.getVersion().split('.')[0], 10) == 7);
	Platform.isIos7Plus = (Platform.isIos && parseInt(Titanium.Platform.getVersion().split('.')[0], 10) >= 7);
	Platform.isSimulator = (Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1 );
	Platform.iPhoneAbove5c = (!Platform.isSimulator && (Ti.Platform.model.indexOf('iPhone') !== -1) && (Ti.Platform.model.indexOf(',') !== -1) && (parseFloat(Ti.Platform.model.slice(-3).replace(',', '.')) > 5.4));
	Platform.widthDip = (Platform.isAndroid) ? ( Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor ) : Ti.Platform.displayCaps.platformWidth;
	Platform.heightDip = (Platform.isAndroid) ? ( Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor ) : Ti.Platform.displayCaps.platformHeight;
}

if ( !Platform ) {
	init();
	Platform.reInit = init;
}

module.exports = Platform;