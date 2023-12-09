function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Both of you provided inputs should be strings.";
    }

    else {
        return string1.includes(string2)
    }
}
console.log(matchFinder("Peter Parker","Pet"))

  
