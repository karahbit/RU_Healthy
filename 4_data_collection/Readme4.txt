README4.TXT (DATA COLLECTION)


GENERAL INFORMATION

The code is based on the a class project at Rutgers University. 
Project Title: RU Healthy?
Class:  Software Engineering I   
Course No: ECE 567
Professor: Ivan Marsic
Semester: Fall 2017


This project retrieves activity and heart rate information using Android phone sensors.  It displays this information to the user/patient on the android side.  The web application will allow clients to access this information via online SQL databases stored on the android locally. 


GROUP PARTICIPANTS
Aymen F Al-Saadi, Tahiya Chowdhury, Tina Drew, 
George Koubbe, Himabindu Paruchuri and Ramya Tadepalli



For the 1st Demo, Data collected includes:
User Profile
Heart Rate
Step Count

For the purpose, the database used was SQLite Database(local database). When the user registers in the mobile application, three tables are created in Database named ‘UserDataBase’.
usertable - This table has 8 columns to store the user profile data which includes Name, Email, Password, Age, Gender, Height, Weight and Target Step Count.
stepCount  - This table has three columns which includes the email of specific user, the date , and the step count.
heartRate - This table has three columns which includes the email of specific user, the date and the heart rate. 


For the future purpose, online database , mainly Firebase,  will be used after syncing the mobile application with the web application and  web application

