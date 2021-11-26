# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Directory structure

```
task-manager-app/
   README.md
   node_modules/
   package.json
	tsconfig.json
   public/
      index.html
    src/
      app.tsx
      index.tsx
      interfaces.ts
      enum.ts
      constants.ts
      global.styles.ts
      server/
        db.json
      components/
        signInForm
      pages
        homePage
          HomePage.tsx
          HomePage.styles.ts
        signInPage
          SignInPage.tsx
          SignInPage.styles.ts
      store
        store.ts
        slices.ts
        selector.ts
```

## Redux Toolkit

For configure store go to store.ts file.

For adding reducers to slice go to store/slices.tsx file. For example:

```
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.push(action.payload);
      return state;
    },
```

For more details follow https://redux-toolkit.js.org/

## Formik

Use formik-mui for validate form created with mui.
Example

```
import { Field } from 'formik';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Select } from 'formik-mui';

<Field
  component={Select}
  formControl={{ sx: sxFormControl }}
  formHelperText={{ children: 'How old are you?' }}
  id="age"
  name="age"
  labelId="age-simple"
  label="Age"
  validate={(age: number) =>
    !age
      ? 'Please enter your age'
      : age < 21
      ? 'You must be 21 or older'
      : undefined
  }
>
  <MenuItem value={10}>Ten</MenuItem>
  <MenuItem value={20}>Twenty</MenuItem>
  <MenuItem value={30}>Thirty</MenuItem>
</Field>;
```

For adding validationSchema go to validationSchema.ts file

```
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email().required("This field is required"),
  password: Yup.string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  username: Yup.string().required("This field is required"),
  accountType: Yup.number().required("This field is required"),
  country: Yup.string().required("This field is required"),
});

export default validationSchema;
```

For more details follow https://stackworx.github.io/formik-mui/

## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
