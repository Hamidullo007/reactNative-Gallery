import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from './components/Login';
import Main from './components/Main';

const screens = {
    Login:{
        title: 'Salom',
        screen: Login,
        navigationOptions:{
            headerShown: false
        }
    },
    Main:{
        screen: Main,
        navigationOptions:{
            headerShown: false
        }
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);