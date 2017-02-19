var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

// var driver_fx = new webdriver.Builder()
//     .forBrowser('firefox')
//     .build();

var driver_chr = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// var driver_saf = new webdriver.Builder()
//     .forBrowser('safari')
//  .build();

// searchTest(driver_fx);
searchTest(driver_chr);
 // searchTest(driver_saf);

refreshTest(driver_chr)

deleteTest(driver_chr)

checkUpVote(driver_chr)

checkDownVote(driver_chr)

checkSearch(driver_chr)

function searchTest(driver) {
  driver.get('https://cjorda15.github.io/2DoBox-Pivot/');
  driver.findElement(By.id('title-input')).sendKeys("Code");
  driver.findElement(By.id('content-input')).sendKeys("Now!");
  driver.findElement(By.id("submit")).click();
  driver.sleep(2000).then(function() {
  driver.findElement(By.className('entry-body')).getText().then(function(text) {
  driver.findElement(By.className('entry-title')).getText().then(function(title){
      if(text === 'Now!' && title==="Code") {
        console.log('Test 1 passed');
      } else {
        console.log('Test 1 failed');
      }
    });
  });
 });
}

function refreshTest(driver) {
  driver.get('https://cjorda15.github.io/2DoBox-Pivot/');
  driver.findElement(By.className('entry-body')).getText().then(function(text) {
  driver.findElement(By.className('entry-title')).getText().then(function(title){
      if(text === 'Now!' && title==="Code") {
        console.log('Test 2 passed');
      } else {
        console.log('Test 2 failed');
      }
    });
  });
 };





function deleteTest(driver){
  driver.findElement(By.id('title-input')).sendKeys("Wombat");
  driver.findElement(By.id('content-input')).sendKeys("shout!");
  driver.findElement(By.id("submit")).click();
  driver.sleep(2000).then(function() {
  driver.findElement(By.className("clear")).click();
  driver.findElement(By.className('entry-body')).getText().then(function(text) {
  driver.findElement(By.className('entry-title')).getText().then(function(title){
      if(text === 'Now!' && title==="Code") {
        console.log('Test 3 passed');
      } else {
        console.log('Test 3 failed');
      }
    });
  });
 });
}

 function checkUpVote(driver){
driver.findElement(By.className('upvote')).click();
driver.findElement(By.className('quality')).getText().then(function(text){
  if(text ==='plausible'){
    console.log('Test 4 passed')
  }else{
    console.log('Test 4 failed')
  }
})
}

function checkDownVote(driver){
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('quality')).getText().then(function(text){
    if(text ==='swill'){
      console.log('Test 5 passed')
    }else{
      console.log('Test 5 failed')
    }
  })
}

function checkSearch(driver){
  driver.findElement(By.id('title-input')).sendKeys("Grateful");
  driver.findElement(By.id('content-input')).sendKeys("Always");
  driver.findElement(By.id('submit')).click();
  driver.findElement(By.id('search')).sendKeys("Gra")
  driver.findElement(By.className("entry-title")).getText().then(function(title){
  if(title==="Grateful"){
    console.log("Test 6 passed")
  }else{
    console.log("Test 6 failed")
  }
  })
}


function testId(driver){
  driver.findElement(By.id('title-input')).sendKeys("Grateful");
  driver.findElement(By.id('content-input')).sendKeys("Always");
  driver.findElement(By.id('submit')).click().then(function(id){
    

  })
}
