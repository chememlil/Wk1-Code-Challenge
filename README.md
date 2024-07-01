How it works

Gross Salary Calculation:

The gross salary is calculated by adding the basic salary and benefits.
PAYE (Tax) Calculation:

The PAYE is calculated based on the gross salary using a tiered tax rate:
10% for income up to 24,000
15% for income from 24,001 to 40,000
20% for income from 40,001 to 60,000
25% for income from 60,001 to 80,000
30% for income above 80,000
NHIF Contributions:

The NHIF contribution is calculated based on the gross salary using predefined slabs.
NSSF Contributions:

The NSSF contribution is 6% of the gross salary.
Net Salary Calculation:

The net salary is calculated by subtracting the PAYE, NHIF, and NSSF from the gross salary.


How It Works
Speed Limit: The function assumes a speed limit of 70 km/h.
Points Calculation:
If the driver's speed (speed) is less than or equal to the speed limit, it logs "Ok", indicating no demerit points.
If the driver exceeds the speed limit, it calculates demerit points based on how much the speed exceeds the limit:
1 point for every 5 km/h over the limit.
The calculated points are logged to the console as "Points: <Points>".
License Suspension Check:
If the calculated points exceed 12, it logs "License suspended"



Student Grade Calculator
This Node.js script allows you to input a student's marks and calculate their corresponding grade based on predefined grade boundaries.

Functionality
The script utilizes the readline module to interactively take input from the user (marks) via the command line. It then determines the grade based on the following criteria:

Grades are assigned based on the following ranges:

A: 80 and above
B: 60 to 79
C: 50 to 59
D: 40 to 49
E: Below 40
If the input marks are not a number or fall outside the range of 0 to 100, an error message is displayed.

Setup and Usage
Setup:

Ensure you have Node.js installed on your system.
Installation:

Clone the repository or save the script file locally.
Running the Script:

Open your terminal or command prompt.
Navigate to the directory where the script is saved.
Run node <scriptFileName>.js.
Usage:

Follow the prompts in the terminal:
Enter the student's marks when prompted.
The script will output the calculated grade based on the input marks.
