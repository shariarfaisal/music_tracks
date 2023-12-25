const MongoDB = require("../utils/mongo");
const Joi = require("joi");

const schema = Joi.array()
  .items(
    Joi.object({
      title: Joi.string().required(),
      artist: Joi.string().required(),
      album: Joi.string().required(),
      imageUrl: Joi.string().required(),
      audioUrl: Joi.string().required(),
    })
  )
  .preferences({ abortEarly: false });

const addNewTrack = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).send({
      error: error.details.map((er) => er.message),
    });
  }

  try {
    const coll = await MongoDB.getCollection("tracks");

    // Insert all tracks in parallel
    const tracks = await Promise.all(
      req.body.map(async (track) => {
        const result = await coll.insertOne(track);
        track._id = result.insertedId;
        return track;
      })
    );

    return res.send(tracks);
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
};

module.exports = {
  addNewTrack,
};
