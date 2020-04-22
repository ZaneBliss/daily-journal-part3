const journalEntries = [
    {
        date: "4/14/20",
        concepts: "Figma and wireframing, navigation, communication",
        entry: "We learned a lot about design.",
        mood: "🙂"
    },
    {
        date: "4/15/20",
        concepts: "Team collaboration and working on Sprint 1.",
        entry: "We work together great as a team!",
        mood: "🙂"
    },
    {
        date: "4/16/20",
        concepts: "Presenting, introduction to JS",
        entry: "There was a lot of information, but I am feeling comfortable with the exercises.",
        mood: "🙂" 
    },
    {
        date: "4/17/20",
        concepts: "Datatypes, objects, DOM",
        entry: "This was a little challenging, but I am excited about manipulating HTML elements using the DOM.",
        mood: "🙂"
    }
]

const makeJournalEntryComponent = (journalEntry) => {
    return `
    <h1>${journalEntry.concepts}</h1>
    <p>${journalEntry.entry}</p>
    <p>${journalEntry.date}</p>
    <p>${journalEntry.mood}</p>
    `
}

const renderJournalEntries = (entries) => {
    for (let index = 0; index < entries.length; index++) {
        let journalElement = document.querySelector(".entryLog");
        journalElement.innerHTML += makeJournalEntryComponent(entries[index]);
    }
}
renderJournalEntries(journalEntries)