const express = require("express");
const router = express.Router();
const passport = require('passport');
const validateTweetInput = require('../../validation/tweets');
const Tweet = require('../../models/Tweet');

router.get("/test", (req, res) => res.json({msg: "This is the tweets route"}));

//Return all tweets
router.get("/", (req, res) => {
  Tweet.find()
    .sort({ date: -1})
    .then(tweets => res.json(tweets))
    .catch(err => res.status(400).json(err));
});

//Return all tweets made by a specific user
router.get("/user/:user_id", (req, res) => {
  Tweet.find({ user: req.params.user_id })
    .then(tweets => res.json(tweets))
    .catch(err => res.status(400).json(err));
});

router.get("/:id", (req, res) => {
  Tweet.findById(req.params.id)
    .then(tweet => res.json(tweet))
    .catch(err => res.status(400).json(err));
})
//Create a tweet, user auth
router.post("/", 
  passport.authenticate("jwt", { session: false }), 
  (req, res) => {
    const { errors, isValid } = validateTweetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newTweet = new Tweet({
      user: req.user.id,
      text: req.body.text
    });

    newTweet.save()
      .then( tweet => res.json(tweet));
});
router.delete("/:id", 
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
  Tweet.findByIdAndDelete(req.params.id)
    .then(tweet => res.json(tweet))
    .catch(err => console.log("something went wrong!"));
})


module.exports = router;