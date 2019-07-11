'use strict';

const cryptrFactory = require('./lib/cryptr-factory');

/**
 * Decrypt
 *
 * @param	{String}	cipherKey
 * @param	{String}	String to be decrypted
 */
function decrypt(key, str) {

	const cryptr = cryptrFactory(key);

	return cryptr.decrypt(str);

}

module.exports = decrypt;
