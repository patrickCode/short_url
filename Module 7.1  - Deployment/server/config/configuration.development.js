var config = {
    port:  process.env.PORT || 5000,
    mongoDbConnectionString: process.env.MONGO_URI ||"mongodb+srv://tester:tester001@cluster0.pdakw.azure.mongodb.net/vanity_url?retryWrites=true&w=majority"
};

module.exports = config;