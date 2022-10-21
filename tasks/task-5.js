function meeting(friendsList) {
  let friendsArray = friendsList.toUpperCase().split(";");
  friendsArray.forEach(
    (friend, index) => (friendsArray[index] = friend.split(":"))
  );
  friendsArray.sort(function (a, b) {
    //sort by last name
    if (a[1] < b[1]) {
      return -1;
    }
    if (b[1] < a[1]) {
      return 1;
    }

    //sort by first name
    if (a[0] < b[0]) {
      return -1;
    }
    if (b[0] < a[0]) {
      return 1;
    }
    return 0;
  });

  let result = "";
  friendsArray.forEach(
    (friend) => (result = result.concat("", `(${friend[1]}, ${friend[0]})`))
  );
  return result;
}

module.exports = meeting;
