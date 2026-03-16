// Who is the person that got the most tweets?

db.tweet.aggregate([
  { $unwind: "$entities.user_mentions" },
  { 
    $group: { 
      _id: "$entities.user_mentions.screen_name", 
      mention_count: { $sum: 1 } 
    } 
  },  
  { $sort: { mention_count: -1 } },  
  { $skip: 1 },  
  { $limit: 1 }
]);

/* 
Since the result ieeevis (the conference) isn't a person, I think we are looking for the individual human who was tagged the most.
So based on the data, that is tmrhyne (Theresa-Marie Rhyne) and that's why I'm skipping the first one.
*/