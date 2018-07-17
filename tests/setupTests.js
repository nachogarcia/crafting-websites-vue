/* global flushPromises */
global.flushPromises = () => new Promise(resolve => setImmediate(resolve))
