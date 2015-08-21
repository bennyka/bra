// read language and use last saved one
var currentLanguage = Ti.App.Properties.getString('de.hpm.translate.language', 'de');

// language cache
var texts = null;

/**
 * read language into memory
 */
function readLanguage() {
	var file = Ti.Filesystem.getFile(Titanium.Filesystem.getResourcesDirectory(), 'languages', currentLanguage + '.json');
	if ( !file.exists() ) {
		throw "language file for '" + currentLanguage +"' not found";
	}

	var fileContent = file.read();
	try {
		texts = JSON.parse(fileContent);
		Ti.API.log("de.hpm.translate", "readLanguage", currentLanguage);
	}
	catch (err) {
		throw "language file could not be parsed:\n" + err;
	}
}

/**
 * read a language key
 * @param {String} key
 * @param {String} fallback
 * @return {String}
 */
function getText (key, fallback) {
	// init texts if read the first time
	if ( !texts ) {
		readLanguage();
	}
	return texts[key] || fallback || '';
}

/**
 * sets a new language
 * @param {String} language
 */
function setLanguage (language) {
	currentLanguage = language;
	readLanguage();
	Ti.App.Properties.setString('de.hpm.translate.language', currentLanguage);
}

/**
 * returns the currently set language
 * @return {String}
 */
function getLanguage () {
	return currentLanguage;
}

module.exports = {
	_: getText,
	setLanguage: setLanguage,
	getLanguage: getLanguage
};