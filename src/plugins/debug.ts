import createDebug from 'debug'
import type { Debugger } from 'debug'

const debugInit: Debugger = createDebug('[app initialization]: ')
const debugHttp: Debugger = createDebug('[app http]: ')
const debugDb: Debugger = createDebug('[app db]: ')

export { debugInit, debugDb, debugHttp }
