var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver_fx = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// var driver_saf = new webdriver.Builder()
//     .forBrowser('safari')
//  .build();

searchTest(driver_fx);
searchTest(driver_chr);
 // searchTest(driver_saf);

function searchTest(driver) {
  driver.get('https://cjorda15.github.io/2DoBox-Pivot/');
  driver.findElement(By.id('title-input')).sendKeys("Code");
  driver.findElement(By.id('content-input')).sendKeys("Now!");
  driver.findElement(By.id("submit")).click();

  driver.sleep(2000).then(function() {
    driver.findElement(By.className('entry-body')).getText().then(function(title) {
      driver.findElement(By.className('entry-title')).getText().then(function(text){
      if(title === 'Now!' && text==="Code") {
        console.log('Test passed');
      } else {
        console.log('Test failed');
      }
    });
  });
 });
  driver.quit();
}
