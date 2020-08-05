import { Button } from '@material-ui/core';
import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import InputText from '../../components/inputText';
import { initialValues, IValues, validationSchema } from './model';

const SignUp: React.FunctionComponent = () => {
  const onLogin = (data: IValues, resetForm: Function): void => {
    console.log(data);
    resetForm({});
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values: IValues, actions) => {
          onLogin(values, actions.resetForm);
          setTimeout(() => {
            actions.setSubmitting(false);
          }, 500);
        }}
        validationSchema={validationSchema}
      >
        {(props: FormikProps<IValues>) => {
          return (
            <Form>
              <h1>Sign up</h1>

              <InputText
                label="Usuário"
                onChange={props.handleChange}
                type="text"
                textError={props.errors.username}
                hasError={!!props.errors.username}
                name="username"
                value={props.values.username}
              />

              <Button type="submit" variant="contained" color="secondary">
                Submit
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUp;
