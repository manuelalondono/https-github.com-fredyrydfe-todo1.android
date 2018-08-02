import {browser, ExpectedConditions, ElementFinder} from 'protractor';

export class GlobalActivities {
    
    public async getTitlePage(): Promise<string> {
        return await browser.getTitle();
    }

    public async enterThePage(url: string) {
        browser.ignoreSynchronization = true;
		await browser.get(url);
    }

    public async waitForElement(parameter: ElementFinder, seconds: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
    }

}