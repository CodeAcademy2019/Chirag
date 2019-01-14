function checkUsersValid(goodUsers) {
      return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function (x){return goodUsers.includes(x);});
      };
    }

    module.exports = checkUsersValid