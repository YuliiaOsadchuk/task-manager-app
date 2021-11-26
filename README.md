# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To install dependencies run

```
npm install
```

To run the app in the development mode run 
```
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Directory structure

```
task-manager-app/
   public/
      index.html
    src/
      app.tsx
      index.tsx
      interfaces.ts
      enums.ts
      constants.ts
      global.styles.ts
      server/
        db.json
      components/
        sign-in-form/
      pages/
        home-page/
          home-page.tsx
          home-age.styles.ts
        sign-in-page/
          sign-in-page.tsx
          sign-in-page.styles.ts
      store/
        store.ts
        slices.ts
        selectors.ts
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
