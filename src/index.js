// import Vue from 'vue'

// Facebook Analytics
(function (d, s, id) {
  /* eslint one-var: 0 */
  // console.log('init FB in application.js')
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) { return }
  js = d.createElement(s); js.id = id
  js.src = '//connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

var FBControl = {
  install (Vue, options) {
    if (options && options.awaitAsyncTime) {
      this.awaitAsyncTime = options.awaitAsyncTime
    }

    if (options && options.appId) {
      this.appId = options.appId
    }

    if (options && options.version) {
      this.version = options.version
    }

    if (!window.FB) {
      // the following is template from FB developers
      // with compliance for ESlint
      window.fbAsyncInit = () => {
        var FB = this.init(this.appId, this.version)
        Object.defineProperty(Vue.prototype, '$FB', { value: FB })
      }
    } else {
      this.init(this.appId, this.version)
    }
  },
  awaitAsyncTime: 100,
  init: function (appId, version) {
    /* global FB */
    FB.init({
      appId: appId,
      xfbml: true,
      version: version
    })
    window.FB = FB
    return FB
  },
  getFB: async function () {
    return await new Promise((resolve, reject) => {
      var failsafe = 100
      var repeat = setInterval(() => {
        // console.log('logging event pending...' + Vue.$FB + ',' + window.FB)
        if (Vue.$FB !== undefined) {
          // console.log('logging event logged later with Vue.$FB')
          resolve(Vue.$FB)
          clearInterval(repeat)
        } else if (window.FB !== undefined) {
          // console.log('logging event logged later with window.FB')
          resolve(window.FB)
          clearInterval(repeat)
        }
        failsafe--
        if (failsafe <= 0) {
          clearInterval(repeat)
        }
      }, this.awaitAsyncTime)
    })
  },
  logEvent: async function (name) {
    // console.log('logging event prepare: ' + name)
    if (Vue.$FB !== undefined) {
      // console.log('logging event logged now with Vue.$FB')
      Vue.$FB.AppEvents.logEvent(name)
    } else if (window.FB !== undefined) {
      // console.log('logging event logged now with window.FB')
      window.FB.AppEvents.logEvent(name)
    } else {
      if (!this.awaitAsyncTime) {
        console.error('Invalid await async time')
        return
      }
      await this.getFB()
      .then((FB) => {
        FB.AppEvents.logEvent(name)
      })
      .catch((error) => {
        console.error('Internal error in FBControl failsafe', error)
      })
    }
  },
  logPageView: async function () {
    if (Vue.$FB !== undefined) {
      Vue.$FB.AppEvents.logPageView()
    } else if (window.FB !== undefined) {
      window.FB.AppEvents.logPageView()
    } else {
      if (!this.awaitAsyncTime) {
        console.error('Invalid await async time')
        return
      }
      await this.getFB()
      .then((FB) => {
        FB.AppEvents.logPageView()
      })
      .catch((error) => {
        console.error('Internal error in FBControl failsafe', error)
      })
    }
  }
}

export default FBControl
