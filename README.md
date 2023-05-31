# GRID GOLD FAMILY APPLICATION

## Collecting User Data and Storing in DynamoDB

This project allows you to collect user data through forms in your React application and store it in a DynamoDB table using AWS services like API Gateway, Lambda function, and DynamoDB.

## Prerequisites

Before getting started, make sure you have the following:

- An AWS account with appropriate permissions to create and configure AWS services.
- Node.js and npm (Node Package Manager) installed on your local machine.
- Basic knowledge of React, API Gateway, Lambda, and DynamoDB.

## Getting Started

Follow the steps below to set up the project and start collecting user data.

### Step 1: Setting up the AWS Services

1. Create an AWS DynamoDB table to store the user data. Take note of the table name and its attributes.

2. Set up an API Gateway in the AWS Management Console to serve as the endpoint for your React application. Ensure that you enable CORS (Cross-Origin Resource Sharing) to allow cross-origin requests.

   
   
   - **Problem Encountered: CORS Issue**
   
     If you faced CORS-related issues while making requests from your React application to the API Gateway, follow these steps to enable CORS in the API Gateway console:
     
     - Go to the API Gateway in the AWS Management Console.
     - Select your API Gateway.
     - In the API Gateway settings, enable CORS by following the documentation provided by AWS.
     - Update the necessary CORS configurations to allow the desired origins, methods, and headers.

3. Create an AWS Lambda function to handle the incoming requests from the API Gateway and interact with DynamoDB. This function should have the necessary permissions to read from and write to the DynamoDB table.

### Step 2: Building the React Application

1. Clone or create a new React application on your local machine.

2. Install the required dependencies, including Axios, which will be used to make HTTP requests to the API Gateway.
   
   - **Solution to Axios Installation:**
   
     After conducting research, the recommended approach to resolve the Axios installation issue is as follows:
     
     - In your project directory, run the following command to install Axios as a dependency:
       ```
       npm install axios
       ```
     - Verify that Axios is now listed as a dependency in your `package.json` file.

3. Create a form component in your React application to collect user data. Include fields for full name, age, occupation, nationality, marital status, and email address.

4. Implement form validation and handle form submission in your React application. Use the Axios library to make a POST request to the API Gateway endpoint with the user data.

### Step 3: Handling the API Gateway and Lambda Function

1. Configure the API Gateway to integrate with the Lambda function you created earlier. Define the appropriate request and response mappings.

2. In the Lambda function, implement the logic to handle the incoming request from the API Gateway. Extract the user data from the request and write it to the DynamoDB table.

3. Test the integration by submitting the form in your React application and verifying that the user data is successfully stored in the DynamoDB table.


## Email Confirmation Feature

This project includes an email confirmation feature that sends a confirmation email to users after they fill out the form. The email will display a message such as "Thank you for filling out the form. Welcome to the Gold Grid family." This feature utilizes AWS services like Lambda, DynamoDB streams, and SES (Simple Email Service).

## Solution

To address the problem encountered during the implementation of the email confirmation feature, the following solution was implemented:

1. Create a new DynamoDB table named "sent-email" with a partition key to track sent emails. This table will help prevent duplicate email confirmations.

2. When the Lambda function is triggered by the DynamoDB stream, perform the following steps:
   - Check if the corresponding partition key exists in the "sent-email" table.
   - If the partition key exists and its value is set to true, ignore the email confirmation process.
   - If the partition key does not exist or its value is not set to true, send the confirmation email using the AWS SES service.
   - After successfully sending the email, add a new item to the "sent-email" table with the partition key set to true.



To implement the email confirmation feature in your project, follow these steps:

1. Set up an AWS DynamoDB table to store user data. Note the table name and its attributes.

2. Create an AWS Lambda function to handle incoming requests and interact with DynamoDB. Ensure the Lambda function has the necessary permissions to read from and write to the DynamoDB table.

3. Enable DynamoDB streams for the DynamoDB table where user data is stored.

4. Follow the solution steps mentioned above to modify the Lambda function for email confirmation.

5. Configure the AWS SES service to send confirmation emails.

6. Deploy the Lambda function and configure it as a trigger for the DynamoDB stream.

## Problem Encountered

During the implementation of the email confirmation feature, the DynamoDB stream kept invoking the Lambda function repeatedly, causing the SES service to reach the sending limit. This resulted in an inability to send confirmation emails.



## Dashboard Feature

The dashboard feature provides real-time data visualization for the application. It displays the following information:

- Users logged onto the app
- Number of users
- Timestamp of logging onto the app
- Nationality counts

### AWS Services Used

To implement the dashboard feature, the following AWS services were utilized:

- API Gateway: It serves as the endpoint for the dashboard data and enables secure communication between the frontend application and the Lambda function.
- Lambda: It retrieves the real-time data from the DynamoDB table and prepares it for display on the dashboard.
- DynamoDB: It stores the user data, including the logged-in status, timestamps, and nationality information.
- Cognito: It provides user authentication and management, allowing us to count the number of registered users.

### Implementation

To set up the dashboard feature in your project, follow these steps:

1. Set up an AWS DynamoDB table to store user data. Include attributes for the user's logged-in status, timestamps, and nationality information.

2. Create an AWS Lambda function to retrieve the real-time data from the DynamoDB table. The Lambda function should query the table and process the data for display on the dashboard.

3. Set up an API Gateway in the AWS Management Console to serve as the endpoint for the dashboard data. Configure the necessary routes and ensure secure communication between the frontend application and the Lambda function.

4. Implement the dashboard component in your frontend application. Use suitable libraries or frameworks (e.g., React, Vue.js) to render and display the real-time data retrieved from the API Gateway.

5. Utilize AWS Cognito to manage user authentication and registration. You can count the number of registered users by using the AWS Cognito SDK or API.

6. Incorporate the number of registered users into the dashboard component by retrieving the user count from AWS Cognito and displaying it accordingly.

7. Deploy the Lambda function and configure it as a trigger for any DynamoDB table updates, ensuring that real-time data is reflected on the dashboard.

## Problem Encountered: Creating Custom Signing and Signout Page

When attempting to create a custom signing and signout page for the React application, I encountered issues communicating with my user pool in the AWS console. Additionally, the pre-built UI provided by AWS Amplify was disarranged.

### Problem 1: Issues with User Pool Communication

I faced difficulties in establishing communication between my React application and the user pool in the AWS console. This hindered the implementation of custom signing and signout functionality.

### Solution 1: Utilizing AWS Amplify Signin and Signout Pre-built UI

To overcome the communication issues, I decided to leverage the pre-built UI provided by AWS Amplify for signing in and signing out. By integrating the pre-built Amplify sign-in UI, I was able to establish a seamless connection between my React application and the user pool.

## Problem 2: Disarranged Signing Page with Custom Styling

After integrating the Amplify sign-in UI, I noticed that my signing page appeared disarranged. This issue was specifically caused by the conflicting CSS selector.

### Solution 2: Modifying CSS Selector

To resolve the disarranged signing page issue, I made changes to the CSS selector. Initially, I was using the "Form" selector, which conflicted with the Amplify sign-in UI styles. I modified the selector to ".Form" class to avoid any conflicts and ensure proper styling and alignment of the signing page.


## Automation for Data Backup

To optimize the workflow and allow the Gold Grid team to focus on other projects, an automation solution was implemented to perform regular data backups. This ensures the safety and integrity of the data stored in the DynamoDB table. The automation involves using AWS services like Lambda, S3, and EventBridge.

### AWS Services Used

The following AWS services were utilized to automate the data backup process:

- Lambda: It executes a function that performs the backup operation.
- S3: It provides a secure and scalable storage solution for the backed-up data.
- EventBridge: It schedules the backup function to be triggered at specified intervals.

### Implementation

To automate the data backup process, the following steps were followed:

1. Create an AWS Lambda function that retrieves the data from the DynamoDB table and uploads it to an S3 bucket. This function should be properly configured with the necessary permissions to access the DynamoDB table and write to the S3 bucket.

2. Set up an S3 bucket to store the backups. Ensure that the bucket has appropriate access control and versioning enabled to maintain data integrity.

3. Configure an EventBridge rule to schedule the backup function to be triggered at desired intervals. Specify the frequency and timing of the backups according to the requirements of the Gold Grid team.

4. Test the automation setup by manually triggering the Lambda function and verifying that the data is successfully backed up to the S3 bucket.

5. Monitor the automation process to ensure that backups are executed as scheduled and that data is being properly stored in the S3 bucket. Set up appropriate alerts and notifications for any failures or issues.



- Scalability: The automation solution can be easily scaled to handle larger datasets and accommodate future growth of the Gold Grid application.

- Reliability: By utilizing AWS services, the backup process is reliable and robust, minimizing the risk of data loss.





