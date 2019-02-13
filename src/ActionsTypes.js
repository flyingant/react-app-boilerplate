const createActionTypes = (args) => {
  var obj = {}, i = args.length
  while (i--) {
    obj[args[i]] = args[i]
  }
  return obj
}

export const APP = createActionTypes([
  'INITIALIZE_APP',
  'INITIALIZE_APP_COMPLETED',
  'INITIALIZE_APP_FAILED',
  'SWITCH_LANGUAGE'
]);

export const COMMON = createActionTypes([
  'LOADING',
  'LOADING_COMPLETED'
]);

export const UI = createActionTypes([
  
]);