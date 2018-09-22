/**
 * Helper file for MongoDB instance
* author    - Ragav & Andrew
* version   - 1.0
* since     - 09/19/2018
 */

var MongoClient = require('mongodb').MongoClient;
var config = require('../config.json');

/*Function to get MongoDB Instance*/
function getMongoDBInstance() {
    return new Promise((resolve, reject) => {
        var mongoConfig = fetchValueByKey('mongodb');
        var url = '';
        var username = '';
        var password = '';

        if (mongoConfig != '') {
            url = mongoConfig.value.url;
            username = mongoConfig.value.username;
            password = mongoConfig.value.password;

            try {
                MongoClient.connect(url, {
                    // auth: {
                    //     user: username,
                    //     password: password,
                    //    }
                }, function (err, client) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        if (client != undefined) {
                            var db = client.db('victor');
                            resolve(db);
                        }
                        else {
                            reject('Unable to get connection');
                        }
                    }
                });
            }
            catch (e) {
                reject(e);
            }
        }
        else {
            reject('Database configuration not found');
        }
    });
}

//Function to get configuration values from config.json
function fetchValueByKey(key) {
    for (var index of config) {
        if (index['type'] == key) {
            return index;
        }
    }

    return '';
}

module.exports = {
    getMongoDBInstance: getMongoDBInstance
}