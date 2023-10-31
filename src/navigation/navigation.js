import { NavigationContainer } from '@react-navigation/native';
import CreateTask from '../screen/createTask/createTask';
import CreateNote from '../screen/createNote/createNote';
import { Home } from '../screen/home/home';
import { createStackNavigator } from '@react-navigation/stack';
import EditNote from '../screen/editNote/editNote';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import EditTask from '../screen/editTask/editTask';

const Stack = createStackNavigator();

export default function NavigationStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Note" component={Home} />

        <Stack.Screen name="CreateNote" component={CreateNote} />

        <Stack.Screen name="EditNote" component={EditNote} />

        <Stack.Screen name="CreateTask" component={CreateTask} />

        <Stack.Screen name="EditTask" component={EditTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
