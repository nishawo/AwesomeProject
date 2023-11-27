/**
 * DO NOT MODIFY AND SAVE TO REPO
 * When Modifing this file use internal application processes.
 * This script is used to bootstrap the client application.
 * This script will check the document location to set up
 * the environment it will run based on the API Server
 * requirements.
 * This script is ment to die silently if there is an error,
 * use error handling with in the application to catch errors
 * before they get here.
 */

const AppConfig = {
  version: '2.1.0',
  host: '123',
  port: 4903,
  SHIPPING_CODE_QUERY_PARMAS: 'appcode',
};
AppConfig.host = process.env.REACT_APP_DEV_HTTPS_HOST;
AppConfig.port = process.env.REACT_APP_DEV_HTTPS_PORT;
const hostArr = document.location.pathname.split('/');
if (
  Array.isArray(hostArr) &&
  hostArr.length >= 1 &&
  hostArr[1].indexOf('~') !== -1
) {
  AppConfig.basename = `/${hostArr[1]}/${hostArr[2]}`;
}
export default AppConfig;
