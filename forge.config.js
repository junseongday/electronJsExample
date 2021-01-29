module.exports = {
    packagerConfig: {},
    makers: [
      {
        name: '@electron-forge/maker-zip'
      },
      {
        name: '@electron-forge/maker-dmg',
        // config: {
        //   background: './favicon.ico',
        //   format: 'ULFO'
        // }
      }
    ]
  }