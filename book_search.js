/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} listOfBooks - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */
function findSearchTermInBooks(searchTerm, listOfBooks) {
    if (searchTerm === null || searchTerm === "") { 
        return "Please enter word or term to search for";
    }

    /** Changed data type from var to const */
    const result = {
        "SearchTerm": "",
        "Results": []
    };
    /** Book object for Results array */
    const bookResult = {
        "ISBN": "",
        "Page": 0,
        "Line": 0
    }
   
    const separators = new RegExp("[\\s\\(\),.;]+");
    searchTerm = String(searchTerm)
    result.SearchTerm = searchTerm;

    listOfBooks.forEach((book) => {
        book.Content.forEach((page) => {
            const wordsFromText = page.Text.split(separators);
            for (const word of wordsFromText) {
                /** Use strict equality for accuracy */
                if (searchTerm === word) {
                    /** Create bookResult object and store data 
                     * into results object */
                    let matching = { ...bookResult }
                    matching.ISBN = book.ISBN;
                    matching.Page = page.Page;
                    matching.Line = page.Line;
                    result.Results.push(matching);
                }
            }
        })
    })

    return result;
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            }
        ]
    }
]

/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn);
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** ADDITIONAL UNIT TESTS */
/** INPUT OBJECTS */
const threeBooks = [
    {
        "Title": "The Enchanted Quest",
        "ISBN": "9781234567890",
        "Content": [
            {
                "Page": 1,
                "Line": 1,
                "Text": "In a land of mythical creatures and ancient wonders..."
            },
            {
                "Page": 1,
                "Line": 2,
                "Text": "Follow the journey of a young adventurer on the Enchanted Quest."
            },
        ]
    },
    {
        "Title": "Symphony of Sounds: Exploring Onomatopoeias",
        "ISBN": "9782345678901",
        "Content": [
            {
                "Page": 50,
                "Line": 34,
                "Text": "that bring the world to life. Explore the pitter-patter of rain, the chirpi-"
            },
            {
                "Page": 50,
                "Line": 35,
                "Text": "ng of birds, and the hiss of a snake through vibrant and immersive storytelli-"
            },
        ]
    },
    {
        "Title": "Greek Mythology",
        "ISBN": "9783456789012",
        "Content": [
            {
                "Page": 10,
                "Line": 14,
                "Text": "Encounter the 3 enigmatic figures of Mount Olympus, where Zeus (Ζεῦς), Hera (Ἥρα), and"
            },
            {
                "Page": 10,
                "Line": 15,
                "Text": "Poseidon (Ποσειδῶν) reign. Heroes like Odysseus (Ὀδυσσεὺς), are"
            },
        ]
    }
]

const caseSensitiveBooks = [
    {
        "Title": "A Journey in Time",
        "ISBN": "9784567890123",
        "Content": [
            {
                "Page": 6,
                "Line": 19,
                "Text": "journey in time, where the past and present intertwine in mysterious ways."
            }
        ]
    },
    {
        "Title": "Zombie Apocalypse",
        "ISBN": "9785678901234",
        "Content": [
            {
                "Page": 90,
                "Line": 26,
                "Text": "\"GET IN HERE!\" the man yelled. He held the door open just enough for a person to"
            }
        ]
    },
    {
        "Title": "Wind Whispers",
        "ISBN": "9786789012345",
        "Content": [
            {
                "Page": 35,
                "Line": 7,
                "Text": "In the wind, it is said that you can hear the secrets and tales of ancient civilizations"
            }
        ]
    }
]

/** POSITIVE TESTS */
/** TEST 3: Search through multiple books for one word, multiple results */
/** This returns the same line twice, as the Text contains "in" 2 times in the string.
 * This led to an edge case I did not initially consider.
 */
const testPositiveMatch1 = findSearchTermInBooks("in", caseSensitiveBooks);
if (testPositiveMatch1.Results.length === 2) {
    console.log("PASS: Test 3 - testPositiveMatch1");
} else {
    console.log("FAIL: Test 3 - testPositiveMatch1");
    console.log("Expected:", 2);
    console.log("Received:", testPositiveMatch1.Results.length);
}

/** TEST 4: Search with a non-string type, a number (int) */
/** This led to an edge case I did not consider and promptly fixed my code. It now 
 * correctly searches for numbers as the search term/word. Originally written as a negative test.
 */
const testPositiveMatch2 = findSearchTermInBooks(3, threeBooks);
if (testPositiveMatch2.Results.length === 1) {
    console.log("PASS: Test 4 - testPositiveMatch2");
} else {
    console.log("FAIL: Test 4 - testPositiveMatch2");
    console.log("Expected:", 1);
    console.log("Received:", testPositiveMatch2.Results.length);
}

/** NEGATIVE TESTS */
/** TEST 5: Search with an empty string */
const testNegativeMatch1 = findSearchTermInBooks("", threeBooks)
if (typeof(testNegativeMatch1) === 'string') {
    console.log("PASS: Test 5 - testNegativeMatch1");
} else {
    console.log("FAIL: Test 5 - testNegativeMatch1");
    console.log("Expected:", 'string');
    console.log("Received:", typeof(testNegativeMatch1));
}

/** CASE-SENSITVE TESTS */
/** TEST 6: Search for case-sensitivity for the word "in" */
const cases = ["In", "iN", "IN"]; // "in" tested in Positive Tests
let count = 0;
for (const word of cases) {
    let testCaseSensitive = findSearchTermInBooks(word, caseSensitiveBooks);
    if (testCaseSensitive.Results.length === 1) count += 1;
}
if (count === 2) {
    console.log("PASS: Test 6 - testCaseSensitive");
} else {
    console.log("FAIL: Test 6 - testCaseSensitive");
    console.log("Expected:", 2);
    console.log("Received:", count);
}
