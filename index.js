const lighthouse = require('lighthouse');
const chromeLauncher = require('lighthouse/chrome-launcher');
const http = require('http');
const url = require('url');

const flags = {
  chromeFlags: ['--headless', '--disable-gpu', '--no-sandbox']
};

const responseHeaders = {
  'Content-Type': 'application/json; charset=utf-8'
};

function requestHandler(request, response) {
  var query = url.parse(request.url, true).query;

  if ( ! query.url ) {
    response.writeHead(400, responseHeaders);
    response.end(JSON.stringify({'error': 'Missing the URL query parameter.'}));
    return;
  }

  launchChromeAndRunLighthouse(query.url, flags).then(results => {
    response.writeHead(200, responseHeaders);
    response.end(JSON.stringify(results));
  });
}

function launchChromeAndRunLighthouse(url, flags = {}, config = null) {
  return chromeLauncher.launch(flags).then(chrome => {
    flags.port = chrome.port;

    return lighthouse(url, flags, config).then(results =>
      chrome.kill().then(() => results));
  });
}

http.createServer(requestHandler).listen( 80 );
