//Capitalizing Each Word Function

export function capitalize(capital) {
    capital = capital.split(" ");
    for (var i = 0, x = capital.length; i < x; i++) {
        capital[i] = capital[i][0].toUpperCase() + capital[i].substr(1);
    }

    return capital.join(" ");
}

//Capitalizing Each Letter Function

export function capitalizeAll(allcapital) {
    return allcapital.toUpperCase();
}

// Word Existence Check Function

export function isExist(sentance, word) {
    return sentance.includes(word);
}

// Word Occurrence Count Function

export function getOccurrenceCount(sentance, word) {
    const regex = new RegExp(word, "g");
    const matches = sentance.match(regex);
    return matches.length;
}

//Word Density Calculation Function

export function wordDensity(sentance) {
    const cleanedText = sentance.replace(/[^\w\s]/g, "").toLowerCase();
    const words = cleanedText.split(/\s+/);
    const totalWords = words.length;
    const wordCounts = {};

    words.forEach(word => {
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    });

    const wordDensityMap = {};

    for (const word in wordCounts) {
        const occurrenceCount = wordCounts[word];
        const density = (occurrenceCount / totalWords) * 100;
        wordDensityMap[word] = density;
    }

    return wordDensityMap;
}
