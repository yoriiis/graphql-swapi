const PeopleType = require('../schema/People');
const {
	GraphQLInt,
	GraphQLList
} = require('graphql');

const getAllPeople = {
	type: new GraphQLList(PeopleType),
	args: {
		page: {
			type: GraphQLInt,
			description: 'Page number'
		},
		limit: {
			type: GraphQLInt,
			description: 'Count of result'
		},
		offset: {
			type: GraphQLInt,
			description: 'Offset for the research'
		}
	},
	resolve: async (_source, { page, limit, offset }, { dataSources }) => {
		return dataSources.swAPI.getAllPeople({ page, limit, offset }).then(response => response.results);
	}
};

module.exports = getAllPeople;
