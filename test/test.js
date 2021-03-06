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

 logTest(driver_fx);
 logTest(driver_chr);
  // logTest(driver_saf);

refreshTest(driver_chr)
refreshTest(driver_fx)
// refreshTest(driver_saf)


// deleteTest(driver_saf)
deleteTest(driver_fx)
deleteTest(driver_chr)

// checkUpVote(driver_saf)
checkUpVote(driver_fx)
checkUpVote(driver_chr)

// checkUpVotes(driver_saf)
checkUpVotes(driver_fx)
checkUpVotes(driver_chr)

// checkDownVote(driver_saf)
checkDownVote(driver_fx)
checkDownVote(driver_chr)

// checkDownVote(driver_saf)
checkDownVotes(driver_fx)
checkDownVotes(driver_chr)

// checkSearch(driver_saf)
checkSearch(driver_fx)
checkSearch(driver_chr)

// checkSearch2(driver_saf)
checkSearch2(driver_fx)
checkSearch2(driver_chr)

// noneTest(driver_fx)
// noneTest(driver_chr)
// noneTest(driver_saf)

function logTest(driver) {
  driver.get('https://cjorda15.github.io/2DoBox-Pivot/');
  driver.findElement(By.id('title-input')).sendKeys("Code");
  driver.findElement(By.id('content-input')).sendKeys("Now!");
  driver.sleep(500)
  driver.findElement(By.id("submit")).click();
  driver.sleep(500).then(function() {
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
      driver.sleep(500)
    });
  });
 };





function deleteTest(driver){
  driver.findElement(By.id('title-input')).sendKeys("Wombat");
  driver.findElement(By.id('content-input')).sendKeys("shout!");
  driver.findElement(By.id("submit")).click();
  driver.sleep(2000).then(function() {
  driver.findElement(By.id('title-input')).sendKeys("panda");
  driver.findElement(By.id('content-input')).sendKeys("dog!");
  driver.sleep(500)
  driver.findElement(By.id("submit")).click();
  driver.findElement(By.className("clear")).click();
  driver.findElement(By.className('entry-body')).getText().then(function(text) {
  driver.findElement(By.className('entry-title')).getText().then(function(title){
      if(text === 'shout!' && title==="Wombat") {
        console.log('Test 3 passed');
      } else {
        console.log('Test 3 failed');
      }
      driver.sleep(500)
    });
  });
 });
}

 function checkUpVote(driver){
driver.findElement(By.className('upvote')).click();
driver.findElement(By.className('quality')).getText().then(function(text){
  if(text ==='High'){
    console.log('Test 4 passed')
  }else{
    console.log('Test 4 failed')
  }
  driver.sleep(500)
})
}

function checkUpVotes(driver){
driver.findElement(By.className('upvote')).click();
driver.findElement(By.className('upvote')).click();
driver.findElement(By.className('upvote')).click();
driver.findElement(By.className('quality')).getText().then(function(text){
 if(text ==='Critical'){
   console.log('Test 5 passed')
 }else{
   console.log('Test 5 failed')
 }
 driver.sleep(500)
})
}

function checkDownVote(driver){
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('quality')).getText().then(function(text){
    if(text ==='High'){
      console.log('Test 6 passed')
    }else{
      console.log('Test 6 failed')
    }
    driver.sleep(500)
  })
}

function checkDownVotes(driver){
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('downvote')).click();
  driver.findElement(By.className('quality')).getText().then(function(text){
    if(text ==='None'){
      console.log('Test 7 passed')
    }else{
      console.log('Test 7 failed')
    }
    driver.sleep(500)
  })
}

function checkSearch(driver){
  driver.findElement(By.id('title-input')).sendKeys("Grateful");
  driver.findElement(By.id('content-input')).sendKeys("Always");
  driver.findElement(By.id('submit')).click();
  driver.findElement(By.id('search')).sendKeys("Gra")
  driver.sleep(500)
  driver.findElement(By.className("entry-title")).getText().then(function(title){
  if(title==="Grateful"){
    console.log("Test 8 passed")
  }else{
    console.log("Test 8 failed")
  }
  driver.sleep(500)


  })
}

function checkSearch2(driver){
  driver.findElement(By.id('title-input')).sendKeys("goodness");
  driver.findElement(By.id('content-input')).sendKeys("gracious");
  driver.findElement(By.id('submit')).click();
  driver.findElement(By.id('search')).clear()
  driver.findElement(By.id('search')).sendKeys("goo")
  driver.sleep(500)
  driver.findElement(By.className("entry-title")).getText().then(function(title){
  if(title==="goodness"){
    console.log("Test 9 passed")
  }else{
    console.log("Test 9 failed")
  }
  driver.sleep(2000)
  driver.quit();


  })
}


 // function noneTest(driver) {
 //     driver.findElement(By.id('search')).sendKeys("")
 //     driver.findElement(By.id('title-input')).sendKeys("1");
 //     driver.findElement(By.id('content-input')).sendKeys("1");
 //     driver.findElement(By.id('submit')).click();
 //     driver.findElement(By.id('title-input')).sendKeys("2");
 //     driver.findElement(By.id('content-input')).sendKeys("2");
 //     driver.findElement(By.id('submit')).click();
 //     driver.findElement(By.id('title-input')).sendKeys("3");
 //     driver.findElement(By.id('content-input')).sendKeys("3");
 //     driver.findElement(By.id('submit')).click();
 //     driver.sleep(500)
 //     driver.findElement(By.className('downvote')).click();
 //     driver.findElement(By.className('downvote')).click();
 //     driver.findElement(By.id('none')).click()
 //     driver.findElement(By.className('newIdea')).then(function(card) {
 //             if (driver.findElement(By.className('newIdea')).length === 1) {
 //                 console.log("Test 9 passed")
 //             } else {
 //                 console.log("Test 9 failed")
 //             }
 //             driver.sleep(2000)
 //
 //         })
 //
 //     }
