module.exports = {
  'Demo test Google' : function (client) {

    console.log('title: ', client.url('http://www.google.com').title);
    client
      .url('http://www.google.com')
      //.waitForElementVisible('body', 1000)
      .assert.title('Google')
      // .assert.visible('input[type=text]')
      .end();
      // .setValue('input[type=text]', 'rembrandt van rijn')
      // .waitForElementVisible('button[name=btnG]', 1000)
      // .click('button[name=btnG]')
      // .pause(1000)
      // .assert.containsText('ol#rso li:first-child',
      //   'Rembrandt - Wikipedia')
      // .end();
  }
};
