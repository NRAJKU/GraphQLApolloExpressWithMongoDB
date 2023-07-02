const {users, tags} = require("../store/fileBasedDataStorage");

module.exports.photoTypeResolver = {
    url: parent => `http://yoursite.com/img/${parent.id}.jpg`,
    postedBy: parent => {
        return users.find(u => u.githubLogin === parent.githubLogin )
    },
    taggedUsers: parent => tags
        .filter(tag => tag.photoID === parent.id)
        .map(tag => tag.userID)
        .map(userID => users.find(u => u.githubLogin === userID))
}