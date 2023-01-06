$(function () {
  NProgress.configure({
    minimum: 0.08,
    easing: "ease",
    positionUsing: "",
    speed: 2000,
    trickle: true,
    trickleSpeed: 200,
    showSpinner: false,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: "body",
    template:
      '<div class="bar" role="bar"><div class="peg"><img src="./picachu.gif" width="50px"/></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
  });
  NProgress.start();

  $(document).ready(function () {
    NProgress.done();
  });
});
