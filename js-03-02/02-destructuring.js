const playlist = {
    name: "My super playlist",
    rating: 5,
    tracks: ["track - 1", "track - 2", "track - 3"],
    trackCount: 3,
    // author: "Mango",
};

// const {
//     rating,
//     tracks,
//     name,
//     trackCount: numberOfTracks = 0,
//     author = "user",
// } = playlist;

// console.log(numberOfTracks);

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackCount);

// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.trackCount,
// );

// console.log(name, rating, tracks, trackCount);
// tracks.push("dvnjv");
// console.log(tracks);
// console.log(playlist);

// const profile = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Ocho Rios, Jamaica",
//     avatar: "https://www.amazon.pl/",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//         a: {
//             b: 1,
//             c: 1,
//             d: 1,
//         },
//     },
// };

// const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: {
//         followers: myFollowers,
//         views,
//         likes,
//         a: { b, c, d },
//     },
// } = profile;
// console.log(name, tag, location, avatar, myFollowers, views, likes, b, c, d);

// const a = profile.stats.followers;
// console.log("a = ", a);

// const {
//     stats: { followers, views, likes },
// } = profile;

// console.log(followers, views, likes);

// const { name: name1 } = profile;
// const { naem: name2 } = profile;
// // console.log(name1, name2);

const rgb = [255, 100, 80];

const [red, green, blue] = rgb;

// console.log(red, green, blue);
const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

const entries = Object.entries(authors);
// console.log(Math.max(...ratings));

// console.log(entries);

for (const [name, rating] of entries) {
    // console.log(entry);
    // const [name, rating] = entry;
    // const name = entry[0];
    // const rating = entry[1];
    // console.log(name, rating);
}

// const profile = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Ocho Rios, Jamaica",
//     avatar: "https://www.amazon.pl/",
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//         a: {
//             b: 1,
//             c: 1,
//             d: 1,
//         },
//     },
// };

// const { name, tag, location, ...restProps } = profile;
// console.log(name, tag, location);

// console.log(restProps);
// console.log(profile);

// const restProps = {
//     avatar: profile.avatar,
//     stats: profile.stats,
// };

const profile = {
    name: "Jacques Gluke",
    tag: "jgluke",
    location: "Ocho Rios, Jamaica",
    avatar: "https://www.amazon.pl/",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
        a: {
            b: 1,
            c: 1,
            d: 1,
        },
    },
};

const showProfileInfo = function ({ name, tag, location, ...restProps }) {
    // const {
    //     name,
    //     tag,
    //     location,
    //     avatar,
    //     stats: { followers, views, likes },
    // } = userProfile;
    console.log(name, tag, location, restProps);
};

showProfileInfo(profile);

// const fn = function (params) {};

// fn({
//     age: 10,
//     friends: 5,
//     isOnline: true,
//     hobies: [],
//     games: {},
//     rating: 6,
// });
