# npm_backend


### Prerequisites 

- PostGreSQl Installed in System
- Node Must be installed
- ExpressJs Installed 
- NodeMon for better ReExicution of files after changes
- pg npm package to connect with DB
- Validate.js for validation


### Requirements 

- Create RestfulAPI to store users Favorate npm Package name and Description(why this Package is favorate)
- Create Rest API for CRUD Oprations like CreateUser, GetAllUsers, UpdateUser,DeleteUser, and other than that add FavoratePackage updateComments delete comments etc.
- By using Validator.js, Data validation is done before sending data to the sequalize.


# API Documentation

For this project we can use two routes one is related to user and other one is for users fevorate packege. with user route we can create user related information like user info and and with package route we can handle favorate package related to user.

### Table for Storing data

- For this project we need two table : one is for users related information and other one is for user fevorate packages

#### 1. User Table

| ID |   Name  |    EmailId    |  Contact_No  |  password   |
|:--:| :-----: | :-----------: | :----------: | :--------:  |
| 23 |  rahul  | rahul@abc.com |  1234567890  | hashed pass |

#### 2. FavoratePackageTable 

| Id | User_Id | Package_Name |       Comment        |
|:--:| :-----: | :----------: | :------------------: |
|  1 |    23   |    react     | React is easy to use |


## How to use 

### users

- to get all user(get) 
[Click here](https://myfevnpm.onrender.com/api/v1/users/)

- to signup (post)
[Click here](https://myfevnpm.onrender.com/api/v1/users/signup)

- to login (get with login details(email password))
[Click here](https://myfevnpm.onrender.com/api/v1/users/login)  

- to delete user(delete with id)
[Click here](https://myfevnpm.onrender.com/api/v1/users/)

### users favorates

- to get all fevorate package (get)
[Click here](https://myfevnpm.onrender.com/api/v1/package/:id) 

- to get all fevorate package (get)
[Click here](https://myfevnpm.onrender.com/api/v1/package/:id)  