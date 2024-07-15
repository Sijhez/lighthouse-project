import * as ChromeLauncher from 'chrome-launcher';
import lighthouse from 'lighthouse';
import fs from 'fs';

async function main(url) {

  try {
    const chrome = await ChromeLauncher.launch({chromeFlags: ['--headless']})
    const options = {
      logLevel: 'info',
      output: 'html',
      onlyCategories: ['performance'],
      port: chrome.port};

    const runnerResult = await lighthouse(url, options);
    const reportHtml = runnerResult.report;
    fs.writeFileSync('ReportePrimario.html', reportHtml);

    console.log('Report is done for', runnerResult.lhr.finalDisplayedUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

    chrome.kill();
  } catch (error) {
    throw error;
  }
}

export default main