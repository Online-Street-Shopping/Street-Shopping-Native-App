import React from 'react'
import { Text } from 'react-native'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MyHeader from "./layout/Header";
import Profile from "./screens/Profile";
import ChangePassword from "./screens/ChangePassword"

const App = ()=>{
	return (
		<>
			{/* <StatusBar backgroundColor={ COLORS.primary } /> */}
			{/* <SignIn /> */}
			{/* <SignUp/> */}
			<MyHeader/>
			{/* <Profile/> */}
			<ChangePassword/>
		</>
	);
};

export default App;
