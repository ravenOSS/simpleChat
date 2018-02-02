1. Download and install Node.js
www.nodejs.org
On the command line (terminal) check installation by issuing:
node --version
If you get a message about node not being found, take a look at the docs on nodejs.org.
NPM should automatically install
npm --version
2. On github.com in the 'https://github.com/ravenOSS/simpleChat.git' repository, look for the green clone/download button. Choose "download zip" or another method if you're familiar with git.
Download the zip file to a working directory of your choosing and unzip.
3. In terminal, install all the necessary node packages by issuing "npm install --save"
You'll see a stream of messages as the packages install. A node_modules directory will be created.
4. In terminal, issue "npm start"
This should give you a message about listening on a certain port.
5. In a browser, type "localhost:port"
(localhost:3000)
6. You should see a chat screen.
7. Open a second browser window and enter same address.
8. Enter message in one window and check the other window. Have fun chatting with yourself!
9. In 'https://github.com/ravenOSS/ltChatLite.git' there is another chat application that stores the messages in mongodb and when a user loads the page, the messages should load. Follow install instructions that somewhat overlap these.
