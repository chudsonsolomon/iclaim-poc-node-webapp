var instanceHelper = require('../helper/InstanceHelper');


function RegisterSurvey(inputData) {
    return new Promise((resolve, reject) => {
        // Get mongodb instance
        instanceHelper.getMongoDBInstance().then((dbConnection) => {
            dbConnection.collection('survey').insert(inputData, function (err, response) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(response);
                }
            })
        }).catch((error) => {
            reject(error);
        });
    });
}

module.exports = {
    RegisterSurvey: RegisterSurvey
}