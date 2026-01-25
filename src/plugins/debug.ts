import createDebug from 'debug'

const debugInit = createDebug('[app initialization]: ')
const debugHttp = createDebug('[app http]: ')
const debugDb = createDebug('[app db]: ')

export { debugInit, debugDb, debugHttp }
