var mongoose = require("mongoose");

// Reference to Schema constructor
var Schema = mongoose.Schema;

// Create a new UserSchema object
var ArticleSchema = new Schema({
  // `title` is required & String type
  title: {
    type: String,
    required: true
  },
  // `link` is required and string type
  link: {
    type: String,
    required: true
  },
  // `note` is an object that stores a Note id
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});

// Creates our model from the above schema, using mongoose's model method
var Article = mongoose.model("Article", ArticleSchema);

// Export the Article model
module.exports = Article;

//
