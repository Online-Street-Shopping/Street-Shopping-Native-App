import React from 'react'
import { Text } from 'react-native'
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MyHeader from "./layout/Header";
import Profile from "./screens/Profile";
import ChangePassword from "./screens/ChangePassword";
import Tabs from "./navigation/Tabs";

const App = ()=>{
	return (
		<>
			{/* <StatusBar backgroundColor={ COLORS.primary } /> */}
			{/* <SignIn /> */}
			{/* <SignUp/> */}
			<MyHeader/>
			<Tabs/>
			{/* <Profile/> */}
			{/* <ChangePassword/> */}
			{/* <SignUp/> */}
			{/* <SignIn /> */}
		</>
	);
};

export default App;
