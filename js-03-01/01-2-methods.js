const playlist = {
    name: "My super playlist",
    rating: 5,
    tracks: ["track - 1", "track - 2", "track - 3"],
    // getName: function (a) {
    //     console.log("It is getName method!!!", a);
    // },
    // getName(a) {
    //     console.log("It is111 getName method!!!", a);
    // },

    changeName(newName) {
        console.log("This in playlist function: ", this);
        this.name = newName;
    },

    addTrack(track) {
        this.tracks.push(track);
    },

    updateRating(newRating) {
        this.rating = newRating;
    },

    getTrackCount() {
        return this.tracks.length;
    },
};

console.log(playlist);

// playlist.getName(5);

playlist.changeName("NewName");
playlist.addTrack("track - 4");
playlist.addTrack("track - 5");
playlist.addTrack("track - 6");
console.log("Result of getTrackCount: ", playlist.getTrackCount());
playlist.addTrack("track - 7");
playlist.updateRating(3);
console.log("Result of getTrackCount: ", playlist.getTrackCount());
console.log(playlist);
