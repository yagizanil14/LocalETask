/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Rooter from './src/Rooter';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => Rooter);
