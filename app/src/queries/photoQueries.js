const {photos, isAfter} = require("../store/fileBasedDataStorage");

module.exports.totalPhotos = () => photos.length

module.exports.allPhotos = (parent, args) => {
    if (typeof args.after !== 'undefined')
        return photos.filter(e => isAfter(new Date(e.created), new Date(args.after)))
    else return photos
}