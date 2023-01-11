//Regular Expressions
// /literal/, /.wildcard/, /c[las]s/
// regular expressions are used to match parts of strings.
// one way to test regex is to use the .test() method. Returns true or false
let regexString = "Hello, world! And Hello you!";
let regexTest1 = /Hello/;
let regexTest = () => regexTest1.test(regexString); // let result = myRegex.test(myString); // outputs "true" because regexString contains "Hello"
// these regex tests are case sensitive.
// regex or operator: |
let regexOrTest = /yes|no|maybe/; //search for yes OR no OR maybe
//regex flags
// i, g
// i => ignore case sensitiveness on regex match
let regexTest2 = /hello/i; // regex match any hello with different cases (ex: HeLlO)
// .match() method //applies on a string to match the regex and extract the string in the regex
let regexMatch = () => regexString.match(regexTest1); //"Hello"
/* If a string has multiple "Hello" the above match will only return one. To return all matches on the string you need the regex flag /g for global. 
 Returns an array with the matches. */
// to combine tags you just concatenate them (ex: /hello/gi => this will apply both /g and /i tags to the regex)
let regexTest3 = /hello/gi;
let regexMatchGlobalIgnore = () => regexString.match(regexTest3); //["Hello", "Hello"]
// wildcard character: . => "." will match any one character, /hell./ would match "hello", "hellv", "hella".
// character classes: [] => /b[aiu]g/ will match "bag", "big", "bug".
// range of characters such as from "a" to "z" in a dictionary: /[a-z]/. Also works on range of numbers. Also both at the same time: /[a-z0-9]/
// negated characters => set of characters you do not want to match: ^ => Ex: /[^aeiou]/gi will match all characters that are not vowels.
// /a+/gi when used on "abc" would return ["a"]. Used on "aabc" would return ["aa"]. Used on "abab" would return ["a", "a"].
// /go*/ => match start with "g" and then 0 or more "o". "gooooal" => ["goooo"]. "gut feeling" => ["g"]. "over the moon" => null
// lazy match => smallest possible part of a string that matches the regex pattern. ?
// greedy match => largest possible part of a string that matches the regex pattern. This is the default behavior.
let regexString2 = "Titanic";
let greedyRegex = () => regexString2.match(/t[a-z]*i/); //pattern that starts with "t" and ends with "i". Returns ["titani"] in this case.
let lazyRegex = () => regexString2.match(/t[a-z]*?i/); //Returns ["ti"]
