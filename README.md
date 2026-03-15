# cs3200-assignment-5
## Use MongoDB

### By: Ashsmith Khayrul

Queries can be found in [queries](./queries).

- Query1: How many tweets are not retweets or replies? (hint the field retweeted_status contains an object when the tweet is a retweeet)

- Query2: Return the top 10 screen_names by their number of followers.

- Query3: Who is the person that got the most tweets?

- Query4: Who are the top 10 people that got more retweets in average, after tweeting more than 3 times

- Query5: Write the instructions that will separate the Users information into a different collection
    - Create a user collection that contains all the unique users.
    - Create a new Tweets_Only collection, that doesn't embed the user information, but instead references it using the user id
