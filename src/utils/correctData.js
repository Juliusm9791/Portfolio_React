function fixTitleName(title) {
    title = title.toLowerCase()
    let titleSplit = title.split("_");
    for (let i = 0; i < titleSplit.length; i++) {
        titleSplit[i] = titleSplit[i].charAt(0).toUpperCase() + titleSplit[i].slice(1);
    }
    title = titleSplit.join(" ")
    return title;
}

export default fixTitleName;
