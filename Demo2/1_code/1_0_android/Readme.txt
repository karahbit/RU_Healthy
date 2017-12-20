ANDROID CODE

INSTALLATION
In order to access the RU Healthy? android code, install the RU Healthy? App on your phone. 
Please note that the program requires a Android API level 15 of (Codename: Ice Cream Sandwich, 
version 4.0.3)  or above for proper installation. 

OPERATION
For operation instructions please refer to the user_docmenation.pdf file in the documents folder of the github repository. 

FOLDER LAYOUT 

The folder contains the android application.
The Java files are available at this path :  demo1\app\src\main\java\com\example\himabindu\demo1

We are using Firebase Cloud Database for storing the Physician and Patient data and User authentication purposes.

A brief description of each file is as follows:

-----------------------------------------------------------------------------------------------------------
REGISTRATION
MainActivity: Starts user instance by initializing login objects. Relevant object calls from different files.
LoginActivity: User login is initiated. Authentication using database values
RegisterActivity: New user Registration. Opens the database and enters data.
ProfileActivity: User profile created. All user details are stored in the database.
DashboardActivity: App options - Profile, Heart Rate Monitor, Step Counter
-------------------------------------------------------------------------------------------------------------
STEP COUNTER FUNCTIONALITY
StepCounter: Starts StepDetection by calling relevant objects.
StepDetector: Reads sensor values and calculation of step count 
SensorFilter: Normalization of values
-------------------------------------------------------------------------------------------------------------------
EXERCISE SCHEDULER
ToDoMain: Start the user instance by initializing the New EXERCISE functionality.
AlaramReciver: Provides access to the system alarm services.
DataBaseHANDLER: Provide The Temporary Storage for the Scheduler Data.
NewToDo: Create New Scheduler to add it to the list.
ToDoAdapter: Connect the ToDO XML Layout File with the ToDoMain.
-------------------------------------------------------------------------------------------------------------
HEART RATE MONITOR
HeartRateMonitor: Initialize all necessary sensors - camera, wake screen, flash etc. Get preview frame and process red values using rolling average filter.
ImageProcessing: Calculate Redness in camera images
---------------------------------------------------------------------------------------------------------------
RECOVERY RATE
RecoveryRate: A clock is set from the time user places his finger after exercise to the time his heart rate reaches a normal value.
BayesianPrediction: Based on last 10 days of recovery rate values, a value is predicted every day. This is compared with actual value to predict whether the recovery rate is in normal rage or higher than expected.
---------------------------------------------------------------------------------------------------------------
SELECT PHYSICIAN
SelectPhysician: Physician names and details are retrieved from the Firebase Database and displayed as a list, from which user can select one Physician.Only then the Physician can see the patients data.

