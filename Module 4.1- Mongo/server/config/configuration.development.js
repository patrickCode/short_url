var config = {
    port: 9000,
    mongoDbConnectionString: "mongodb+srv://tester:tester001@cluster0.pdakw.azure.mongodb.net/books_db?retryWrites=true&w=majority" || process.env.MONGO_URI
};

module.exports = config;