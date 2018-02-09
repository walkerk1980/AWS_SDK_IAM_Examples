// JavaScript File
const aws = require('aws-sdk');

exports.handler = (event, context, callback) => {

    var roleToAssume1 = {RoleArn: 'arn:aws:iam::123456789012:role/ec2RoleAccount11', RoleSessionName: 'session1', DurationSeconds: 900,};
    var roleCreds1;

    var roleToAssume2 = {RoleArn: 'arn:aws:iam::234567890123:role/ec2RoleAccount2', RoleSessionName: 'session1', DurationSeconds: 900,};
    var roleCreds2;

    var sts = new aws.STS({apiVersion: '2011-06-15'});

    sts.assumeRole(roleToAssume1, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else{
            //console.log(data);           // successful response
            roleCreds1 = { accessKeyId: data.Credentials.AccessKeyId,secretAccessKey: data.Credentials.SecretAccessKey,sessionToken: data.Credentials.SessionToken};
            ec2Describe(roleCreds1);
        }
    });

    sts.assumeRole(roleToAssume2, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else{
            //console.log(data);           // successful response
            roleCreds2 = { accessKeyId: data.Credentials.AccessKeyId,secretAccessKey: data.Credentials.SecretAccessKey,sessionToken: data.Credentials.SessionToken};
            ec2Describe(roleCreds2);
        }
    });


    function ec2Describe(creds) {
        var ec2Params = {credentials: creds };
        var ec2 = new aws.EC2(ec2Params);
        var diParams = {};

        ec2.describeInstances(diParams, function(err, data) {
            if (err) {
                console.log(err, err.stack);
            }
            else {
                for (var i=0; i < data.Reservations.length; i++ ) {
                    console.log(data.Reservations[i].Instances[0].InstanceId)
                }

            }
        });

    }
}
