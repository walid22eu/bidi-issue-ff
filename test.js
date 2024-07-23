import { remote } from 'webdriverio'

const session = await remote({
    capabilities: {
        browserName: 'firefox',
        browserVersion: '130.0a1',
        webSocketUrl: true
    },
})

await session.url('http://guinea-pig.webdriver.io/')
await session.deleteSession()
