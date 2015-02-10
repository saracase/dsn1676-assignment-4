var blueBerries = {
    latinName: 'vaccinium corymbosum',
    growsOnShrub: true,
    energy: '240 kJ',
    carbohydrates: '14.49 g',
    protein: '0.74 g'
};

var grapes = {
    latinName:'vitis vinifera',
    growsOnShrub: false,
    energy: '288 kJ',
    carbohydrates: '18.1 g',
    protein: '0.72 g'
};

var redCurrant = {
    latinName:'ribes rubrum',
    growsOnShrub: 'true',
    energy: '234 kJ',
    carbohydrates: '13.8 g',
    protein: '1.4 g'
};

var fruitBerries = {blueBerries, grapes, redCurrant}

fruitBerries.forEach(function (item) {
  document.write('<dl>');
    
  document.write('<dt>Latin Name</dt>');
  document.write('<dd>' + item.latinName + '</dd>');
    
  document.write('<dt>Grows On Shrubs</dt>');
  document.write('<dd>' + item.growsOnShrub + '</dd>');
    
  document.write('<dt>Energy</dt>');
  document.write('<dd>' + item.energy + '</dd>');
    
  document.write('<dt>Carbohydrates</dt>');
  document.write('<dd>' + item.carbohydrates + '</dd>');
    
  document.write('<dt>Protein</dt>');
  document.write('<dd>' + item.protein + '</dd>');
    
  document.write('<dl>');
});