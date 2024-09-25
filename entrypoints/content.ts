import './popup/style.css'

export default defineContentScript({
  matches: ['*://*.linkedin.com/messaging/thread/*'],
  cssInjectionMode:'ui',
  main(ctx) {
  
  }
});
