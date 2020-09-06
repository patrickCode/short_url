var config = {
    port: 3000,
    mongoDbConnectionString: "mongodb+srv://pratikb:tester001@cluster0.pdakw.azure.mongodb.net/books_db?retryWrites=true&w=majority" || process.env.MONGO_URI
};

module.exports = config;