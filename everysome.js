module.exports = function checkUsersValid(goodUsers) {
	'use strict';
	
	// function isGoodUser(testUser) {
	// 	return goodUsers.some(function (user) {
	// 		return testUser.id === user.id;
	// 	});
	// }

	// return function (submittedUsers) {
	// 	return submittedUsers.every(isGoodUser);
	// };

	return function (submittedUsers) {
		return submittedUsers.every(function (submittedUser) {
			return goodUsers.some(function (user) {
				return user.id === submittedUser.id;
			});
		});
	};
};