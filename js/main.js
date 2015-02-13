var blueBerries = {
    latin: 'vaccinium corymbosum',
    growsOnShrub: 'Yes',
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};

var grapes = {
    latin:'vitis vinifera',
    growsOnShrub: 'No',
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g'
};

var redCurrant = {
    latin:'ribes rubrum',
    growsOnShrub: 'Yes',
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g'
};

var allBerries = [blueBerries, grapes, redCurrant];

var writeBerries = function (allBerries) {
  allBerries.forEach(function (item) {
  document.write('<dl>');
    
  document.write('<dt>Latin:</dt>');
  document.write('<dd>' + item.latin + '</dd>');
    
  document.write('<dt>Grows On Shrubs:</dt>');
  document.write('<dd>' + item.growsOnShrub + '</dd>');
    
  document.write('<dt>Energy:</dt>');
  document.write('<dd>' + item.energy + '</dd>');
    
  document.write('<dt>Carbohydrates:</dt>');
  document.write('<dd>' + item.carbohydrates + '</dd>');
    
  document.write('<dt>Protein:</dt>');
  document.write('<dd>' + item.protein + '</dd>');
    
  document.write('<dl>');
  });
};

writeBerries( [blueBerries] );
writeBerries( [grapes] );
writeBerries( [redCurrant] );