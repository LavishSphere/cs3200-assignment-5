// Return the top 10 screen_names by their number of followers.

db.tweet.find(
  {},
  { "user.screen_name": 1, "user.followers_count": 1, "_id": 0 }
)
.sort({ "user.followers_count": -1 })
.limit(10);