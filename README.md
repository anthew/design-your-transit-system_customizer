# Bus Bux (Customizer for BlinkTag's "Design Your Transit System")

Created by Anthony Hewitt



## Description

Bus Bux is an extension of BlinkTag's "Design Your Transit System" that allows you to customize the survey using a Word document.
   


## Setup on Local PC

### Install [Node.js](https://nodejs.org/en)

### Create a [MongoDB database](https://www.mongodb.com/)

### Add a `.env` file to the [Website_Source_Code](https://github.com/anthew/design-your-transit-system_customizer/tree/master/black_rock_survey/Website_Source_Code) folder with the `MONGODB_URI` of the MongoDB database you created.

    MONGODB_URI=mongodb://127.0.0.1:27017/yoursurveydatabase

### Follow the instructions in the [Designing Survey](https://github.com/anthew/design-your-transit-system_customizer/blob/master/Designing%20Survey.docx Word document to deploy to port 3000.

### To download the results of a survey as a .csv file, visit the following link and enter the `Username` and `Password` of your MongoDB database.

    http://localhost:3000/api/export



## [License](https://github.com/anthew/design-your-transit-system_customizer/blob/master/LICENSE)

Just like the original code from BlinkTag, this project is licensed under GNU General Public License v3.0.
