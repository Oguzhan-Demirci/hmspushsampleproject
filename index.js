/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { NativeModules } from 'react-native';

AppRegistry.registerComponent(appName, () => App);

const { RNHmsInstanceId } = NativeModules;
export default RNHmsInstanceId;
