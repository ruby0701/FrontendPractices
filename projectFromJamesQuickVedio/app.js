const linkCategory = document.getElementById("linkCategory");
const submitBtn = document.getElementById("submitBtn");
const addBtn = document.getElementById("addBtn");
const cancelBtn = document.getElementById("cancelBtn");
const addLinkPanel = document.getElementById("addLinkPanel");
const addedCategories = document.getElementById("addedCategories");

const linksList = document.getElementById("linksList");

const addLinkContainer = document.getElementById("addLinkContainer");

let editIndex = -1;

console.log("Here");
console.log(linkCategory);
console.log("Here 2");

let linkCategories = [];
let links = [
    {
        title: 'New Link 1',
        url: 'url.com1',
        categories: ['node', 'angular']

    },
    {
        title: 'New Link 2',
        url: 'url.com2',
        categories: ['node', 'angular']

    },
    {
        title: 'New Link 3',
        url: 'url.com3',
        categories: ['node', 'angular']

    }
];


displayLinks();

addBtn.addEventListener('click', function (event) {
    console.log("Add btn clicked");
    showFormPanel();
})

cancelBtn.addEventListener('click', function (event) {
    console.log("Cancel btn clicked");
    hideFormPanel();
})

function showFormPanel() {
    addLinkContainer.classList.remove('hidden');
    displayLinkCategories();
}

function hideFormPanel() {
    addLinkPanel.classList.add('hidden');
    clearLinkForm();
}

linkCategory.addEventListener('keydown', function (event) {

    if (event.key === ",") {
        event.preventDefault();
        console.log("User pressed comma");
        console.log(linkCategory.value);

        linkCategories.push(linkCategory.value);

        console.log(linkCategories);

        linkCategory.value = '';

        //display the updated categories
        displayLinkCategories();
    }
})

function displayLinkCategories() {
    console.log("Displaying link categories");
    addedCategories.innerHTML = '';

    for (let category of linkCategories) {
        var categoryHTMLString = `<span class="category">${category}</span>`;
        addedCategories.innerHTML += categoryHTMLString;
    }

}

function clearLinkForm() {
    linkTitle.value = '';
    linkUrl.value = '';
    linkCategory.value = '';
    linkCategories = [];
    addedCategories.innerHTML = '';
}

submitBtn.addEventListener('click', function (event) {
    //stop form from submitting
    event.preventDefault();

    console.log("submit pressed");

    const title = linkTitle.value;
    const url = linkUrl.value;
    const categories = linkCategories;

    const newLink = {
        title,
        url,
        categories
    }

    if (editIndex === -1) {
        //push new link to array
        links.unshift(newLink);
    }
    else {
        links[editIndex] = newLink;
        editIndex = -1;
    }


    clearLinkForm();

    displayLinkCategories();

    //hide the addLinkPanel form
    hideFormPanel();

    displayLinks();
})

function displayLinks() {
    linksList.innerHTML = '';

    let index = 0;

    for (let link of links) {
        console.log(link);

        let linkHTMLString = `
        <div class="flex-item">
        <div class="link panel">
            <div class="link-options">
                <button class="btn-sm" onclick="deleteLink(${index})">Delete</button>
                <button class="btn-sm" onclick="editLink(${index})">Edit</button>
            </div>

            <a href=${link.url}>
            <h1 class="header">${link.title}</h1></a>
            <p class="link-date">${Date.now()}</p>

            <div class="categories">
                Categories:`;
        for (let category of link.categories) {
            linkHTMLString += `<span class="category">${category}</span>`;
        }

        linkHTMLString += `
            </div>
        </div>
        </div>
        `;

        linksList.innerHTML += linkHTMLString;
        index += 1;

    }
}

function deleteLink(index) {
    console.log("deleting link at index", index);
    links.splice(index, 1);
    console.log(links);
    displayLinks();
}

function editLink(index) {
    console.log("editing link at index", index);
    editIndex = index;
    linkTitle.value = links[index].title;
    linkUrl.value = links[index].url;
    linkCategories = links[index].categories;

    showFormPanel();
}