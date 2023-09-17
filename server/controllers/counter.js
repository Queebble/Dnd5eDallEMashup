import AWS from "aws-sdk";

// Define an asynchronous function named userCounter that takes request (req) and response (res) objects
export const userCounter = async (req, res) => {
  // Specify the AWS S3 bucket and object key
  const bucket = "n10214747cloudmashup";
  const counterKey = "usercounter.json";

  // Create a new instance of the AWS S3 class
  const s3 = new AWS.S3();
  try {
    // Attempt to retrieve the content of the specified S3 object
    const { Body } = await s3
      .getObject({ Bucket: bucket, Key: counterKey })
      .promise();

    // Parse the content of the S3 object (assumed to be in JSON format)
    const counter = JSON.parse(Body.toString());

    // Increment the 'count' property in the parsed JSON data
    counter.count++;

    // Upload the updated JSON data back to the S3 bucket
    await s3
      .putObject({
        Bucket: bucket,
        Key: counterKey,
        Body: JSON.stringify(counter),
        ContentType: "application/json",
      })
      .promise();

    // Respond with a JSON object containing the updated count
    res.json({ count: counter.count });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error handling GET request:", error);

    // Respond with a 500 Internal Server Error status and an error message
    res.status(500).json({ error: "Internal server error" });
  }
};
