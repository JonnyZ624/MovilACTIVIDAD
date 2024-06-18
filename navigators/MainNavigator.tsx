import { createDrawerNavigator } from '@react-navigation/drawer';
import Welcome from '../screens/Welcome';
import Registro from '../screens/Registro';
import LoginScreen from '../screens/LoginScreen';
import UsuarioScreen from '../screens/UsuarioScreen';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Welcome" component={Welcome} />
      <Drawer.Screen name="Registro" component={Registro} />
      <Drawer.Screen name="Login" component={LoginScreen} />
      
    </Drawer.Navigator>
  );
}

export default function DrawerNavigator(){
    return(
        <NavigationContainer>
            <MyDrawer></MyDrawer>
        </NavigationContainer>

    )

}
