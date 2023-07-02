const {photos} = require("../store/fileBasedDataStorage");

let _id= 0;

module.exports.postPhotos = (parent, args) => {
    let newPhoto = {
        id: _id++,
        ...args.input
    }
    photos.push(newPhoto)
    return newPhoto
}