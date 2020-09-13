$(function() {
  let $hoge = $(".hoge");
  $hoge.ripples({
    dropRadius: 20,
    perturbance: 0.03,
    resolution: 256,
    interactive: true,
    crossOrigin: ""
  });
});
