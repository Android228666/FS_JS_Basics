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

const makeProfileMarkup = function (userProfile) {
    const {
        avatar = "https://media.macphun.com/img/uploads/customer/how-to/579/15531840725c93b5489d84e9.43781620.jpg?q=85&w=1340",
        name,
        tag,
        location = "Planet Earth",
        stats: { followers, views, likes },
    } = userProfile;

    return `<div>
        <img src = "${avatar}" alt = "user avatar">
        <p>${name}<span>@${tag}</span></p>
        <p>Location: ${location}</p>
        <ul>
            <li>Followers: ${followers}</li>
            <li>Views: ${views}</li>
            <li>Likes: ${likes}</li>
        </ul>
    </div>`;
};

const markup = makeProfileMarkup(profile);

console.log(markup);

document.body.insertAdjacentHTML("afterbegin", markup);
