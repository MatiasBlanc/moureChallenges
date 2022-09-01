function areaPolygon (width, height, form) {
    const formLowerCase = form.toLowerCase();
    if(formLowerCase === 'cuadrado' || formLowerCase === 'rectangulo') {
        area = width * height;
        console.log(area)
    } else if (formLowerCase === 'triangulo') {
        area = (width * height) / 2;
        console.log(area)
    } else {
        console.log('Poligono no soportado');
    }
}

areaPolygon(2, 5, 'Triangulo');