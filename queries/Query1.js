// How many tweets are not retweets or replies?

db.tweet.countDocuments({
  "in_reply_to_status_id": null,
  "retweeted_status": { "$exists": false }
});