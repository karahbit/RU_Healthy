README1.TXT (CODING)

GENERAL INFORMATION

The code is based on the a class project at Rutgers University. 
Project Title: RU Healthy?
Class:  Software Engineering I   
Course No: ECE 567
Professor: Ivan Marsic
Semester: Fall 2017

This project retrieves activity and heart rate information using Android phone sensors.  
It displays this information to the user/patient on the android side.  The web application will 
allow clients to access this information via online SQL databases stored on the android locally. 

AUTHORS
Aymen F Al-Saadi, Tahiya Chowdhury, Tina Drew, 
George Koubbe, Himabindu Paruchuri and Ramya Tadepalli


ANDROID CODE

INSTALLATION
In order to access the RU Healthy? android code, install the RU Healthy? App on your phone. 
Please note that the program requires a Android API level 15 of (Codename: Ice Cream Sandwich, 
version 4.0.3)  or above for proper installation. 

OPERATION
For operation instructions please refer to the user_docmenation.pdf file in the documents folder of the github repository. 

FOLDER LAYOUT 

The folder demo1 contains the android application.
The Java files are available at this path :  demo1\app\src\main\java\com\example\himabindu\demo1
A brief description of each file is as follows:


-----------------------------------------------------------------------------------------------------------
REGISTRATION
MainActivity: Starts user instance by initializing login objects. Relevant object calls from different files.
LoginActivity: User login is initiated. Authentication using database values
RegisterActivity: New user Registration. Opens the database and enters data.
ProfileActivity: User profile created. All user details are stored in the database.
DashboardActivity: App options - Profile, Heart Rate Monitor, Step Counter
SQLiteHelper: Definition of database attributes.
-------------------------------------------------------------------------------------------------------------
STEP COUNTER FUNCTIONALITY
StepCounter: Starts StepDetection by calling relevant objects.
StepDetector: Reads sensor values and calculation of step count 
SensorFilter: Normalization of values
-------------------------------------------------------------------------------------------------------------
HEART RATE MONITOR
HeartRateMonitor: Initialize all necessary sensors - camera, wake screen, flash etc. Get preview frame and process red values using rolling average filter.
ImageProcessing: Calculate Redness in camera images
---------------------------------------------------------------------------------------------------------------


LAYOUT FILES:
The folder demo1 also contains UI design files for the project.
Path to Layout files: demo1\app\src\main\res\layout
Each xml file is the layout for the respective pages.
activity_dashboard: App options
activity_main: Login page
activity_register: Register page
hrm: Heart rate Monitor
profile: User Profile page
step_count: Steps,miles,calorie counter page

Some images are stored in the mipmap folders which are used in the Heart rate Monitor to calculate redness.



WEBSITE CODE
 
INSTALLATION
The website code does not require installation.  It is an online application only.  
In order the access the RUHealthy website application, visit the following link from your device:   
https://ruhealthy.github.io/ruhealthy.  The website is compatible with android, iphone, windows, linux, and mac devices.  

The web app is supported on the following web browsers: 
Google Chrome (version 61.0.3163.100)
Internet Explorer (version 11.674.150.63.0)
Mozilla Firefox (version 56.0.2)
Microsoft Edge (version 40.15063.674.0)
Safari (version 5.1.7 (7534.57.2))

OPERATION
For operation instructions please refer to the user_docmenation.pdf file in the documents folder of the github repository. 

FOLDER LAYOUT 

In the 1_code folder there is a subfolder title webcode that contains the website pages. .
The website can be accessed at the following link: https://ruhealthy.github.io/ruhealthy . 


-----------------------------------------------------------------------------------------------------------
LOGIN
The Login..html will allow access your account in the RU Healthy? Web application platform.  
For now this page is a placebo and is not connected to the database.  It will be updated eventually to link the client SQL databases.
------------------------------------------------------------------------------------------------------------
REGISTRATION
The Register..html will allow to create an account in the RU Healthy? Web application platform.  
For now this page is a placebo and is not connected to the database.  It will be updated eventually to link the client SQL database. 

-------------------------------------------------------------------------------------------------------------
VIEW PATIENT ACTIVITY
The patient profile pages will allow access to patient summary information. For now there are three pages (
Patient1.html, Patient2,html, and Patient3.html) which are placebos not connected to the database.  
It will be updated eventually to link the client SQL database.  
-------------------------------------------------------------------------------------------------------------
 
PROFILE PAGE
The profile page, will serve the main page for the patient or client. 
There are two profile pages (ProfilePage.html and ProfilePageBlank.html) which are 
samples of populated and unpopulated pages respectively. 
-------------------------------------------------------------------------------------------------------------


FILES:
Login.html	 
Patient1.html	
Patient2.html	 
Patient3.html	 
ProfilePage.html	
ProfilePageBlank.html	
RU Healthy Logo.jpg	 
Register.html	
Index.html 

ACKNOWLEDGEMENTS

We would like to thank Professor Ivan Marsic for the opportunity to work on this project. 
We would also like to acknowledge Rutgers university for the access to the abundance of its resources.

