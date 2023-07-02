const { postPhotos } = require("./mutations/photoMutations")
const { allPhotos, totalPhotos } = require("./queries/photoQueries")
const { photoTypeResolver } = require("./resolvers/photoResolver")
const { userTypeResolver } = require("./resolvers/userResolver")
const { dateTimeTypeResolver } = require("./resolvers/dateTimeResolver")

let _id = 0

module.exports.resolvers = {
    Query: {
        allPhotos,
        totalPhotos
    },
    Mutation: {
        postPhotos
    },
    Photo: photoTypeResolver,
    User: userTypeResolver,
    DateTime: dateTimeTypeResolver
}