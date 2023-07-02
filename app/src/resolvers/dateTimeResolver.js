const {GraphQLScalarType} = require("graphql/index");

module.exports.dateTimeTypeResolver = new GraphQLScalarType({
    name: 'DateTime',
    description: 'A valid DateTime value.',
    parseValue: value => {
        console.log("sent from argument: ", value)
        console.log("@parseValue: ", new Date(value))
        return new Date(value)
    },
    serialize: value => {
        console.log("@serialize: ", new Date(value).toISOString())
        return new Date(value).toISOString()
    },
    parseLiteral: ast => {
        console.log("@parseLiteral: ", ast.value)
        return ast.value
    }
})