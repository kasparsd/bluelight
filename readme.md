# Lighthouse Web Service

Run [Lighthouse](https://github.com/GoogleChrome/lighthouse) as a web service.

## Requirements

- [Chromium](https://www.chromium.org) (version 59 or later which supports the [headless mode](https://developers.google.com/web/updates/2017/04/headless-chrome))
- [Node.js](https://nodejs.org)

### On Debian

	$ sudo apt-get install chromium
	$ curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
	$ sudo apt-get install nodejs


## Usage

	$ git clone https://github.com/kasparsd/bluelight.git
	$ cd bluelight
	$ npm install
	$ node index.js
