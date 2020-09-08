describe('Your Playground test suite', () => {
    
    
    it('Your Playground test', () => {
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(`Loaded ${params.response.url}`)
        })
        browser.url('https://bsa-builder.xyz');
        const puppeteer = browser.getPuppeteer()
        const page = browser.call(() => puppeteer.pages())[0]
        console.log("TITLE", browser.call(() => page.title()))
        //find way to use async await
    });
});

