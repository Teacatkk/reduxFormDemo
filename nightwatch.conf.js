module.exports = {
  src_folders: ['src/tets/e2e/specs'],
  output_folder: 'src/test/e2e/report',
  custom_assertions_path: [],
  page_objects_path: 'src/test/e2e/page-objects',
  globals_path: '',

  selenium: {
    start_process: true,
    server_path: require('selenium-server').path,
    host: '127.0.0.1',
    port: 5555,
    cli_args: {
      'webdriver.chrome.driver': require('chromedriver').path
    }
  },

  test_settings: {
    default: {
      desiredCapabilities: {
        browserName: "chrome",
        chromeOptions: {
          args: ["--no-sandbox"],
          w3c: false
        },
        loggingPrefs: {
          driver: "INFO",
          server: "OFF", 
          browser: "INFO"
        }
      },
      selenium_port: 5555,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: 'http://localhost:' + (process.env.PORT || 1111)
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}