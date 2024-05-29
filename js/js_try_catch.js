function parseJson(jsonString) {
    try {
        const parsedData = JSON.parse(jsonString);
        console.log("Parsed data:", parsedData);
    } catch (error) {
        // Handle any errors that occur during parsing
        console.error("Failed to parse JSON:", error.message);
    }
}

const validJson = '{"name": "John", "age": 30}';
const invalidJson = '{"name": "John", "age": 30'; // Missing closing brace

console.log("Parsing valid JSON:");
parseJson(validJson); 

console.log("\nParsing invalid JSON:");
parseJson(invalidJson); 
