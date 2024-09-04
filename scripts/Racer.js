/**
 * Exports
 */
export { Racer };

/**
 * Racer class
 */
 class Racer {
    completedRace = false;
    errorCount = 0;
    wordSkips = 1;
    lettersSkipped = 0;
    typingIndex = 0;
    wordsPerMinute = 0;
    accuracy = 0;
    raceFinishTime = 0;

    /**
     * Creates a Racer
     * @param {string} name The name of the racer
     * @param {bool} isPlayer If this racer is the current user/player
     */
    constructor(name, isPlayer = false) {
        this.name = name;
        this.isPlayer = isPlayer;
    }

    /**
     * Uses a word skip to skip the next space in the race text
     * @param {string} raceText The text that the user is currently typing for the race
     */
    useWordSkip(raceText) {
        // Make sure the player has at least 1 word skip, if not return early
        if (this.wordSkips <= 0) return;

        // Skip to the next space located in the string and decrease the racer's word skips
        let oldTypingIndex = this.typingIndex;
        this.typingIndex += raceText.slice(this.typingIndex, raceText.length).indexOf(" ") + 1;
        this.wordSkips--;

        // Get the amount of letters skipped
        this.lettersSkipped += this.typingIndex - oldTypingIndex;
    }

    /**
     * Completes the race and calculates all the data for this racer
     * @param {int} raceTime How long the race lasted for this player (measured in centiseconds)
     * @param {string} raceText The text that the user is currently typing for the race
     */
    finishRace(raceTime, raceText) {
        // Calculate the statistics based on the completed time and word count
        this.raceFinishTime = raceTime / 100; // Convert the centiseconds to seconds
        this.updateStats(raceTime, raceText);

        // Set the completed race to true
        this.completedRace = true;
    }

    /**
     * Updates and displays the stats for this racer based on the provided credentials
     * @param {int} raceTime The duration of the race
     * @param {string} raceText The text that the user is currently typing for the race
     */
    updateStats(raceTime, raceText) {
        // Get the word count which is just the number of characters divided by 5
        // Also make sure to factor out the letters that were skipped by using word skips
        let wordCount = Math.round((this.typingIndex - this.lettersSkipped) / 5);

        // Calculate the statistics based on the current race time and word count
        this.accuracy = Math.round(((raceText.length - this.errorCount) / raceText.length) * 100);
        this.wordsPerMinute = Math.round(wordCount / ((raceTime / 100) / 60));

        // Display results only if this is the current user/player
        if (this.isPlayer) {
            document.getElementById("wordsPerMinuteContainer").innerHTML = this.wordsPerMinute;
            document.getElementById("accuracyContainer").innerHTML = this.accuracy;
        }
    }
};

/**
 * Exports
 */
export { Racer };