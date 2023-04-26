/**
 * EXERCISE: we have a text and a search, censor all matches of the search in the text with [-CENSORED-].
 *
 * # If the text and the search are empty show "you can't to read the text
 *      and the search" in the case of that both parameters don´t arrive.
 *
 * # EXAMPLES:
 * censored("hello hello", "hello") // return: [-CENSORED-] [-CENSORED-]
 *
 * censored() // return: "you cannot to read the text and te busqueda"
 *
 * censored("hello") // return: "you can't do the search"
 */

function censored(words, wordToCensor) {
    if (words == undefined && wordToCensor == undefined) {
        return "you cannot to read the text and te busqueda";
    } else if (wordToCensor == undefined) {
        return "you can't do the search";
    } else {
        return words.split(" ").map((word) => {
            return censorWord(word, wordToCensor);
        }).join(' ');
    }
}

function censorWord(word, wordToCensor) {
    if (word.includes(wordToCensor)) {
        return word.replace(wordToCensor, "[-CENSORED-]");
    }
    return word
}

console.log(censored("hello Braian helloBraian braianhello braihelloan hello", "hello"));
