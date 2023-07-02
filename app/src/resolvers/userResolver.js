const {photos, tags} = require("../store/fileBasedDataStorage");
module.exports.userTypeResolver = {
    postedPhotos: parent => {
        return photos.filter(p => p.githubLogin === parent.githubLogin)
    },
    inPhotos: parent => tags
        .filter(tag => tag.userID === parent.id)
        .map(tag => tag.photoID)
        .map(photoID => photos.find(p => p.id === photoID))
}