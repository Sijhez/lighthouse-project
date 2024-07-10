const fs = require("fs") 
const lighthouse = require("lighthouse")
const chromeLauncher = require('chrome-launcher')
const { response } = require('express')



exports.makeAnalisys = async(require, response) => {
  const {
    path
  } = require.body
  
  try {
    try {
      const chrome = await ChromeLauncher.launch({chromeFlags: ['--headless']})
      const options = {
        logLevel: 'info', 
        output: 'html', 
        onlyCategories: ['performance'], 
        port: chrome.port};
  
      const runnerResult = await lighthouse(url, options);
  
      console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
      console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);
      
      chrome.kill();
    } catch (error) {
      throw error;
    }
  fs.writeFileSync('lhreport.html', reportHtml)
  if(fs != null) {
    response.json({
      msg: "El analisis se generó correctamente",
      data: reportHtml
    })
  } else {
    response.json({
      msg: "SIN RESULTADOS",
      data: reportHtml
    })
  }
  chrome.kill();
  } catch (error) {
    
    console.log(error)
    res.status(500)({
        msg:"No se hizo el test",
        data:error
    } )
  }
}


