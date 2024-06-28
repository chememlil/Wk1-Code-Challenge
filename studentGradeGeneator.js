const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function generateStudentGrade() {
    rl.question("Enter the student's marks (between 0 and 100): ", (input) => {
        let marks = parseFloat(input);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Error: Marks should be a number between 0 and 100.");
        } else {
            let grade;

            if (marks > 79) {
                grade = "A";
            } else if (marks >= 60) {
                grade = "B";
            } else if (marks >= 50) {
                grade = "C";
            } else if (marks >= 40) {
                grade = "D";
            } else {
                grade = "E";
            }

            console.log(`The student's grade is: ${grade}`);
        }

        rl.close();
    });
}

generateStudentGrade();
