import { Given, When, Then } from '@cucumber/cucumber'
import { Builder, By, until } from 'selenium-webdriver'

let driver: any

Given('I am on the Google homepage', async () => {
	driver = await new Builder().forBrowser('chrome').build()
	await driver.get('https://www.google.com/en')
})

When('I search for {string}', async (searchTerm: string) => {
	const element = await driver.findElement(By.name('q'))
	await element.sendKeys(searchTerm)
	await element.submit()
})


Then('I should see {string}', async (expectedText: string) => {
	await driver.wait(until.elementLocated(By.partialLinkText(expectedText)), 5000)
})

Given('I accept the cookies', async () => {
	const agreeButton = await driver.findElement(By.id('L2AGLb'))
	await agreeButton.click()
})

