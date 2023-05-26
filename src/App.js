import { Amplify } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { withAuthenticator } from '@aws-amplify/ui-react';


import awsExports from './aws-exports';

import FormInput from "./FormInput";
Amplify.configure(awsExports);


const App = ({ signOut }) => {
  return (
    <div className="App">
      <FormInput signOut={signOut} />
    </div>
  );
};

export default withAuthenticator(App);