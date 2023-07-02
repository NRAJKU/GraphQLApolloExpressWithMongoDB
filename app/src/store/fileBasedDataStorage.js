module.exports.tags = [
    {"photoID": 1, "userID": "gPlake"},
    {"photoID": 2, "userID": "sSchmidt"},
    {"photoID": 2, "userID": "mHattrup"},
    {"photoID": 2, "userID": "gPlake"},
]

module.exports.users = [
    {"githubLogin": "mHattrup", "name": "Mike Hattrup"},
    {"githubLogin": "gPlake", "name": "Glen Pake"},
    {"githubLogin": "sSchmidt", "name": "Scot Schmidt"},
    {"githubLogin": "sPaul", "name": "Sam Paul"}
]

module.exports.photos = [
    {
        "id": 1,
        "name": "Dropping The Heart Chute",
        "description": "The heart chute is one of my favorite chutes",
        "category": "ACTION",
        "githubLogin": "gPlake",
        "created": "3-28-1977"
    }, {
        "id": 2,
        "name": "Dropping The Heart Chute",
        "description": "25 laps on gunbarrel today",
        "category": "LANDSCAPE",
        "githubLogin": "mHattrup",
        "created": "1-2-1985"
    }, {
        "id": 3,
        "name": "Dropping The Heart Chute",
        "description": "Enjoying the Sunshine",
        "category": "SELFIE",
        "githubLogin": "sSchmidt",
        "created": "2018-04-15T19:09:57.308Z"
    }, {
        "id": 4,
        "name": "Dropping The Heart Chute",
        "description": "A ring to rule them all",
        "category": "GRAPHIC",
        "githubLogin": "sPaul",
        "created": "2023-04-15T19:09:57.308Z"
    },
]

module.exports.isAfter = (d1, d2) => d1 - d2 > 0