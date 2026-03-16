/* Write the instructions that will separate the Users information into a different collection
Create a user collection that contains all the unique users.
Create a new Tweets_Only collection, that doesn't embed the user information, but instead references it using the user id */

// Step 1: Create the users Collection
db.tweet.aggregate([
  {
    $group: {
      _id: "$user.id",
      userData: { $first: "$user" }
    }
  },
  {
    $replaceRoot: { newRoot: "$userData" }
  },
  { $out: "users" }
]);
// Step 2: Create the Tweets_Only Collection
db.tweet.aggregate([
  {
    $addFields: {
      user_id: "$user.id"
    }
  },
  {
    $unset: "user"
  },
  {
    $out: "Tweets_Only"
  }
]);