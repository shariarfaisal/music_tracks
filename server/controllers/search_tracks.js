const MongoDB = require("../utils/mongo");
const Joi = require("joi");

const schema = Joi.object({
  search: Joi.string().allow("").default(""),
  limit: Joi.number().default(10),
  page: Joi.number().default(1),
});

const searchTracks = async (req, res) => {
  const { error, value } = schema.validate(req.query);
  if (error) {
    return res.status(400).send({
      error: error.details.map((er) => er.message),
    });
  }

  try {
    const coll = await MongoDB.getCollection("tracks");

    // $search is available only in atlas collections
    // so we are using $match with $regex to search

    const match = {
      $match: {
        $or: [
          { title: { $regex: value.search, $options: "i" } },
          { artist: { $regex: value.search, $options: "i" } },
          { album: { $regex: value.search, $options: "i" } },
        ],
      },
    };

    const pipeline = [
      {
        $limit: value.limit,
      },
      {
        $skip: (value.page - 1) * value.limit,
      },
      {
        $sort: {
          title: 1,
        },
      },
      {
        $project: {
          _id: 1,
          title: 1,
          artist: 1,
          album: 1,
          imageUrl: 1,
          audioUrl: 1,
        },
      },
    ];

    if (value.search) {
      pipeline.unshift(match);
    }

    const cursor = coll.aggregate(pipeline);
    const result = await cursor.toArray();

    return res.send(result);
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
};

module.exports = {
  searchTracks,
};
