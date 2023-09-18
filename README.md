
> For This project use [PERN stack]

## Project commands

`yarn start` - to launch your project  

## Pre requirements

1. Pull repo.
2. `git checkout -b <name that you have set in pre-requirements>/main`
3. `git push origin <name that you have set in pre-requirements>/main`
4. If you are windows user, make sure that `bash` have been installed if not check [Installation link](https://hackernoon.com/how-to-install-bash-on-windows-10-lqb73yj3);
5. Open Terminal in your project (make sure that you are in main directory with `hooks` folder)
6. (ONLY FOR WINDOWS USERS) Change first line in `./hooks/commit-msg`, `./hooks/pre-commit` and `./hooks/setup/hooks` from `#!/bin/sh` to `#!/bin/bash`;
7. Run `nano ./hooks/pre-commit` and change `USER_NAME="user_name"` on third string to `USER_NAME="<YOUR-NAME_LAST_NAME>"` Example: `USER_NAME="my_name"` and save the file.
8. Run command `yarn configure:hooks` (FOR WINDOWS USERS `yarn configure:hooks:windows`);
9. Run command `yarn start`

Now you can run project by calling `yarn start`

Avoid Upper case! Do not use `N_Surname` syntax or `Implement-Crud-Todo` syntax

If you keep experiencing something like: **tslint: command not found**
please do the following:

```

yarn global add tslint typescript

```

link: https://stackoverflow.com/questions/36910592/enabling-eslint-on-typescript-files/64175035#64175035


## Required features

1. **Todo list - CRUD operations on backend**;

- _Implemented validation of req.body for PUT and POST requests and handling errors with a 400 status code when validation fails._
- _Separated your logic from routes. All interactions with the database are performed in the services/<filename>.service.ts file and imported into controllers/<filename>.controller.ts. You then call your controllers in the routes._
- _Created a generic validator, isExist (for PUT, DELETE, and GET by ID), and tryCatch middlewares._

2. **Todo list - Connect your CRUD operations with frontend**;

- _Split your code into logical components (<TodoContainer />, <TodoElement/>, etc);_
- _Used forms written with Formik for editing/adding._
- _Moved logic related to server interactions to the service/http.ts file._
- _Used React Query for data fetching and global data management_
- _Implemented different behaviors for the todo list page on different devices: desktop - displayed as a table, tablet - as a slider, mobile - as a list._
- _Created QUERY_KEYS and ROUTER_KEYS constants for routing._
- _Used styled components for styling._ 
- _Made the design responsive for tablets and mobile devices._

3. **Authorization (login/signup) backend;**

- _Used JWT authorization and Passport._
- _Logic related to token processing is stored in middlewares/auth.middleware.ts._
- _Private todos are accessible only to their creators._
- _Implemented a change password endpoint_

4. **Authorization (login/signup) frontend;**

- _Stored the token in localStorage._
- _Used Formik for validation and submission_
- _Extended the http service to handle auth requests._
- _Integrated UI for logout and editing user information._

5. **Filters for todo list by title and statuses (private and completed);**

- _Passed filter parameters through req.params (localhost:3000/todo?search=test&status=completed)_
- _Connected backend filtering with UI components._
  
6. **Button pagination;**

- _Handled all pagination on the backend._
- _Adjusted frontend requests with pagination parameters_
- _Implemented different pagination styles for different devices: desktop - button pagination, tablet - horizontal scroll pagination, mobile - vertical scroll pagination._


## Useful links and technologies

[Corporate Codestyle](https://github.com/CodeGeneration-2020/code-generation-code-style)  
[Formik](https://formik.org/docs/overview)  
[Mongoose](https://mongoosejs.com/)  
[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)  
[Passport](http://www.passportjs.org/)  
[React Query](https://react-query.tanstack.com/)  
[Styled component](https://styled-components.com/)  

```

```
