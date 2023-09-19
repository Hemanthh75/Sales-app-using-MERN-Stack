# Sales-app-using-MERN-Stack
I have created a sales app where we can sales and get the top 5 sales and the total revenue. I have also added the Login and Register functionalities using APIs.
Note: Since the size of the app is too big to upload I have deleted the node modules and uploaded the assignment.


1.First of all I have created a folder named 'sales-fe' and opened it in the code editor.
2.Using the terminal I have created a new ReactJS application with create-react-app command.
3.Then in the App.js I have cleared everything and then imported react.
4.I have imported the bootstrap and google-fonts in the index.html folder which located in the public folder.
5.We need the routes for different pages so I have installed 'react-router-dom' using npm install.

Navbar Creation:
1.In the src folder I have created a folder named components.
2.Then in that folder I have created two files names 'Navbar.js' and 'Navbar.css'
3.Now in the Navbar.js I have imported react, Navbar.css and then created an arrow function named Navbar and exported it.
4.Now I have opened App.js and imported the Navbar.js component.
5.Then in the App function i have returned the Navbar component.
6.So now when we save the app and type the terminal 'npm start' we can open the react app.
7.Now whatever changes we made in the Navbar will reflect in react app
8.So coming to Navbar I took a navbar from bootstrap and edited the names to the requirement.
9.For the color and styling I have used Navbar.css.


Add Sales Page creation:
1.In the src folder I have created a folder named pages.
2.In that I have created two new files which are 'SalesAdd.js' and 'SalesAdd.css'
3.Now I have opened the js files and imported react and created the SalesAdd function and exported it.
4.Then I have opened App.js and imported Router, Routes and Route from react-router-dom.
5.Now in the div section I have created nested html tages of Router followed by Routes followed by Route.
6.In the Route I have created the attributes path and added the path as 'addsales' and element as the 'SalesAdd' page element.
7.Then I have opened Navbar.js and imported Navlink from react-router-dom.
8.Then in the navitems I found the 'Add Sales' item and enclosed it in the Navlink tag and gave the attribute 'to'.
9.The value of the 'to' attribute should be the Route path value from the App.js.
10.So the router connection is made, so that when we tap on Add sales item it will redirect to the Addsales page.
11.Now coming the content in SalesAdd page I have created two bootstrap rows.
12.In the first row I have created a div with class col-12 and added a h1 tag that is the heading.
13.In the second row I have created a div with class col-12 and added a card from bootstrap.
14.In the card I have created a form and entered the labels and input fields.
15.Then I have created a bootstrap button submit.
16.I have styled the content using the SalesAdd.css file.

Top 5 Sales page creation:
1.In the pages I have created two new files which are 'Topsales.js' and 'Topsales.css'
2.Now I have opened the js files and imported react and created the Topsales function and exported it.
3.Then I have opened App.js, in the div section I have created another Route with the attributes path and added the path as 'top5sales' and element as the 'Topsales' page element.
4.Then I have opened Navbar.js, then in the navitems I found the 'Top 5 Sales' item and enclosed it in the Navlink tag and gave the attribute 'to'.
5.The value of the 'to' attribute should be the Route path value from the App.js.
6.Now coming the content in Topsales page I have created two bootstrap rows.
7.In the first row I gave the heading.
8.In the second row I have added a bootstrap card.
9.Then in the card i have created three more bootstrap rows.
10.Then in first row I have added the headings, in the second and third rows I have added the details of products.
11.I have styled the content using the Topsales.css file.

Today's revenue Page creation:
1.In the pages I have created two new files which are 'Todaysrevenue.js' and 'Todaysrevenue.css'
2.Now I have opened the js files and imported react and created the Todaysrevenue function and exported it.
3.Then I have opened App.js, in the div section I have created another Route with the attributes path and added the path as 'todaysrevenue' and element as the 'Todaysrevenue' page element.
4.Then I have opened Navbar.js, then in the navitems I found the 'Todays Total revenue' item and enclosed it in the Navlink tag and gave the attribute 'to'.
5.The value of the 'to' attribute should be the Route path value from the App.js.
6.Now coming the content in Todaysrevenue page I have created one bootstrap rows.
7.Then I have added the details of the revenue.
8.I gave some margin using the corresponding css file.

Login Form page creation:
1.In the pages I have created two new files which are 'Login.js' and 'Login.css'
2.Now I have opened the js files and imported react and created the Login function and exported it.
3.Then I have opened App.js, in the div section I have created another Route with the attributes path and added the path as 'login' and element as the 'Login' page element.
4.Then I have opened Navbar.js, then in the navitems I found the 'Login Form' item and enclosed it in the Navlink tag and gave the attribute 'to'.
5.The value of the 'to' attribute should be the Route path value from the App.js.
6.Now coming the content in Login page I have created two bootstrap rows.
7.In the first row I gave the heading.
8.In the second row I have added a bootstrap card.
9.Then in the card i have created a form and entered the labels and input fields.
10.Then I have created a bootstrap button submit.
11.I have styled the content using the corresponding file.

Register page creation:
1.In the pages I have created two new files which are 'Register.js' and 'Register.css'
2.Now I have opened the js files and imported react and created the Register function and exported it.
3.Then I have opened App.js, in the div section I have created another Route with the attributes path and added the path as 'register' and element as the 'Register' page element.
4.Then I have opened Navbar.js, then in the navitems I found the 'Register' item and enclosed it in the Navlink tag and gave the attribute 'to'.
5.The value of the 'to' attribute should be the Route path value from the App.js.
6.Now coming the content in Register page I have created two bootstrap rows.
7.In the first row I gave the heading.
8.In the second row I have added a bootstrap card.
9.Then in the card i have created a form and entered the labels and input fields.
10.Then I have created a bootstrap button submit.
11.I have styled the content using the corresponding file.


Backend Code for creating the APIs using express:

Index file and config file:

1.I have created a new folder named 'sales-be' and I opened it in the code editor.
2.In the terminal using 'npm init', I gave the dependencies.
3.Then I have installed express, cors and mongoose using npm install.
4.Then in the app I have created a new file named 'index.js' and imported express, cors, mongoose and stored them in different variables.
5.I have also stored the PORT number.
6.Then I have created a new file named 'config.js' and in that I have stored the mongoDB url and exported it.
7.In the index file I have imported the mongodb url by config.js.
8.Now using the command 'mongoose.connect' I gave the connection for the node application with the database.
9.To check whether the connection is set or not I have used the commands, 'mongoose.connection.on' and console logged the output in success case and
  in the error case.
10.I have allowed the app to use cors and express.json() by using 'app.use' command.
11.Finally using app.listen I have setup the server so that it 


User Model and User Route files:
I have created two folder named models and routes.

User Model file:
1.In the models folder, I created a file named 'user_model.js'
2.In that I have imported the mongoose.
3.Then I have created a schema as follows.
4.I have declared a variable named 'userSchema', and in that using the command 'new mongoose.Schema', which takes the user details object as paramater.
5.In the object, I have given the all the user details required for the user route with the details type and whether required or not.
6.Then I have used mongoose.model command which takes two parameters, which is the model name and the schema variable itself which will be helpful 
  while exporting.
7.In the index file I have imported it.


User Route file:
1.In the routes folder I have created a new file named 'user_route.js'.
2.In this file we will create the required APIs.
3.In this user route we are going to create the registration and login APIs.
4.So first of all I have imported express, express.Router(), mongoose and UserModel.
5.I have exported the router using module exports.
6.In the index file I have imported this using app.use.



Registration functionality API:
1.First of all I have installed new library called 'bcryptjs' which is used for the encryption of the password.
2.Simply we can say the database will store the password in encrypted format.
3.Now I started creating the registration API.
4.Using router.post , which takes two paramaters one is the endpoint as '/register' and a callback with req, res as paramters.
5.Now in the callback I have destructured the user details from the req.body.
6.Then I have used the if condition so that if one of the fields is empty, it will return an error.
7.Then I took the UserModel and tried to find the email from the database which matches the email in the request by using 'findOne' method.
8.If there is an email that matches the email in request, then by using promises I have set the response as an error saying email exists.
9.Then I have used the bcryptjs library and used the hash method on the password to encrypt it.
10.Then I have used promise and stored the encrypted password in the new UserModel and store it in a variable named user.
11.Then i have saved the user.
12.Then I used promise and if the logged in user is a new user, I have sent the successful response saying registration succesfull.
13.Meanwhile in the catch blocks I have logged the error.
14.Then using postman tool I have tested the API and it is working fine.

Login Functionality API:
1.Using router.post , which takes two paramaters one is the endpoint as '/login' and a callback with req, res as paramters.
2.Now in the callback I have destructured the user details from the req.body.
3.Then I have used the if condition so that if one of the fields is empty, it will return an error.
4.Then I took the UserModel and tried to find the email from the database which matches the email in the request by using 'findOne' method.
5.If there is no email that matches the email in request, then by using promises I have set the response as an error saying email exists.
6.Then by using 'bcryptjs' and applied the compare method to compare the database password and the password in the request url.
7.Here bcryptjs decrypts the password in the database and compares it.
8.Then if the passwords match,  I have sent a successful response otherwise I have sent an error response.
9.In the catch blocks I have logged the error.
10.Then using postman tool I have tested the API and it is working fine.


Sales Model and Sales Route:

Sales Model file:
1.In the models folder, I created a file named 'sales_model.js'
2.In that I have imported the mongoose.
3.Then I have created a schema as follows.
4.I have declared a variable named 'salesSchema', and in that using the command 'new mongoose.Schema', which takes the product details object as paramater.
5.In the object, I have given the all the product details required for the product route with the details type and whether required or not.
6.Then I have used mongoose.model command which takes two parameters, which is the model name and the schema variable itself which will be helpful 
  while exporting.
7.In the index file I have imported it.


Sales Route file:
1.In the routes folder I have created a new file named 'sales_route.js'.
2.In this file we will create the required APIs.
3.In this user route we are going to create the addsales, top 5 sales and Total revenue.
4.So first of all I have imported express, express.Router(), mongoose and UserModel.
5.I have exported the router using module exports.
6.In the index file I have imported this using app.use.

Add Sales functionality API:
1.Using router.post , which takes two paramaters one is the endpoint as '/addsales' and a callback with req, res as paramters.
2.Now in the callback I have destructured the product details from the req.body.
3.Then I have used the if condition so that if one of the fields is empty, it will return an error.
4.Then I took the SalesModel and tried to find the product name from the database which matches the product name in the request by using 'findOne' method.
5.If there is no product that matches the product in request, then by using promises I have set the response as an error saying product exists.
6.Then I have stored a new SalesModel with the paramaters that I got from the request.
7.Then I have saved the new product.
8.So for the new product I have returned the successful response otherwise I have logged the error.
9.In the catch blocks I have logged the error.

Top 5 sales functionality API:
1.Using router.post , which takes two paramaters one is the endpoint as '/topsales' and a callback with req, res as paramters.
2.Now in the callback I have took the SalesModel and used find method, so that it will find all the products in the database.
3.Then I have used the sort method and I took an object paramter with value 'product-quantity: -1'.
4.The above command belongs to mongoDB which results in sorting the product_quantity in descending order.
5.Then I have used limit method as 5 so that it will filter the top 5 values.
6.By using the promise I have sent the response so that it will print the top 5 sales.
7.In the catch block I have returned the error.

Total Revenue Functionality API:
1.Using router.post , which takes two paramaters one is the endpoint as '/totalrevenue' and a callback with req, res as paramters.
2.Now in the callback I have took the SalesModel and used the aggregate method, which will take an array of object.
3.The object contains mongoDB commands, where we can put the total revenue as the sum of all the product _amount.
4.After that I have used promise, where in then using ternary operator I got the totalrevenue result and send that as response.
5.In catch block I have logged the error.

By this the backend API creation is completed.


Connecting frontend and backend:
In the front end folder install axios and sweetalert2 libraries using npm install.

Registration functionality:
1.Open the fe code and open the registration file.
2.Import useState hook and set the initial values of the input fields as empty.
3.Then create a function named 'handlesubmit' and attach it to the onSubmit attribute of the form so that we can handle the form.
4.Meanwhile in the input fields give the value as the initial value variable of the corresponding useState hook and use onChange and use the callback in it as follows.
5.Use an arrow function which takes event as paramter and set the final values of the each input fileds as 'event.target.value', so that the user input values will be
 stored in them.
6.Now in the handlesubmit function, use event.preventDefault(), so that it will prevent the default values while submitting the form.
7.After that declare a variable named requestData which takes an object of input field and key value pair the input field data to the APIs user details.
8.Then used axios.post which takes two paramters one is the API url and another is requestData varible.
9.After that using promises I have used the sweetalert functionality.
10.In the catch blocks I have logged the error.

Login functionality:
1.Open the fe code and open the Login file.
2.Import useState hook and set the initial values of the input fields as empty.
3.Then create a function named 'handlesubmit' and attach it to the onSubmit attribute of the form so that we can handle the form.
4.Meanwhile in the input fields give the value as the initial value variable of the corresponding useState hook and use onChange and use the callback in it as follows.
5.Use an arrow function which takes event as paramter and set the final values of the each input fileds as 'event.target.value', so that the user input values will be
 stored in them.
6.Now in the handlesubmit function, use event.preventDefault(), so that it will prevent the default values while submitting the form.
7.After that declare a variable named requestData which takes an object of input field and key value pair the input field data to the APIs user details.
8.Then used axios.post which takes two paramters one is the API url and another is requestData varible.
9.After that using promises I have used the sweetalert functionality.
10.In the catch blocks I have logged the error.

Add Sales functionality:
Just like the above two I have connected the frontend and backend.

Top Sales functionality:
1.Open the fe code and open the topsales file.
2.Using useState hook on top sales, I have set the initial value as an empty array.
3.Then I have used UseEffect and in that I took two paramaters one callback and empty array as dependency.
4.In callback I have used axios.get and fetched the data from topsales API.
5.Using promises, I have set the setTopsales value as response.data which is an array of top 5 products.
6.I have logged the error in the catch block.
7.Coming to JSX, after headings I have used the map method on topsales, which takes two parameters, sale and index.
8.Here sale is the item of the array.
9.Then in the first sell I have added {index+1} which will give the serial number.
10.In the second cell I have used the code {sale._id} which gives the id from DB.
11.Similar to that I have applied object methods and set the values of each cell.

Total Revenue functionality:
1.Open the fe code and open the toprevenue file.
2.Using useState hook on totalrevenue, I have set the initial value as an empty string.
3.Then in the useEffect hook I have fetched the totalrevenue url and then used the promise and stored the response.data in the setTotalrevenue.
4.So that now the value of the totalrevenue will be equal to response.data.
5.While in the JSX in the place where we need to show the total revenue, I have used thise code {totalrevenue} which will dispalye the value in the screen.


Hence the Sales APP is creating with the front-end and back-end functionality.
