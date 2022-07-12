onEvent("button4", "click", function( ) {
  setScreen("Inicio");
  setText("lblexpli", " ");
  setText("lblnome", " ");
});
onEvent("button1", "click", function( ) {
  setScreen("CT");
});
onEvent("button2", "click", function( ) {
  setScreen("SS");
});
onEvent("button3", "click", function( ) {
  setScreen("FA");
});
onEvent("mercúrio", "click", function( ) {
  setText("lblnome", "Mercúrio");
  setText("lblexpli", "O menor e mais interno planeta do Sistema Solar");
});
onEvent("Venus", "click", function( ) {
  setText("lblnome", "Vênus");
  setText("lblexpli", "O planeta mais quente do Sistema Solar");
});
onEvent("Terre", "click", function( ) {
  setText("lblnome", "Terra");
  setText("lblexpli", "Planeta onde se tem condições de vida");
});
onEvent("Marte", "click", function( ) {
  setText("lblnome", "Marte");
  setText("lblexpli", "Esse planeta possui 2 satélites (luas - Phobos e Deimos) e é visível a olho nú durante a noite");
});
onEvent("Jupiter", "click", function( ) {
  setText("lblnome", "Júpiter");
  setText("lblexpli", "Júpiter é o maior planeta do Sistema Solar, caberiam mil planetas como a Terra em Júpiter");
});
onEvent("Saturno", "click", function( ) {
  setText("lblnome", "Saturno");
  setText("lblexpli", "O planeta tem uma forma achatada e tem 82 luas");
});
onEvent("Urano", "click", function( ) {
  setText("lblnome", "Urano");
  setText("lblexpli", "É o terceiro maior planeta do Sistema Solar e sua massa é formada por gases");
});
onEvent("Netuno", "click", function( ) {
  setText("lblnome", "Netuno");
  setText("lblexpli", "Com um centro sólido do tamanho da Terra, Netuno tem em sua composição água, amônia e metano");
});
onEvent("Sol", "click", function( ) {
  setText("lblnome", "Sol");
  setText("lblexpli", "O Sol é uma estrela e é responsável por manter todo o Sistema Solar em sua interação gravitacional");
});
