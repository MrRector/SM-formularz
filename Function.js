function getSequenceC(A, B) {
    // Helper function to check if a number is prime
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i < n; i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Use a Map to count the frequency of each number in B
    const frequencyMap = new Map();
    for (const num of B) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // Initialize the result array C
    const C = [];

    // Iterate through A and add elements to C if they are not present p times in B, where p is a prime number
    for (const num of A) {
        const frequency = frequencyMap.get(num) || 0;
        if (frequency === 0 || !isPrime(frequency)) {
            C.push(num);
        }
    }

    return C;
}