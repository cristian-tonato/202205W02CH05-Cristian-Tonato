const  grupo =[
    [0,0,0,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,1,0,0],
    [0,0,0,0,0],
];
function vivo(arraysCelulasParaNacer){
    const arrayVivas= [];
    let arrayCelulasVivas =[];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; i++) {
            if (array[i][j] === 1) {
                arrayCelulasVivas.push(i,j);
                arrayVivas.push(arrayCelulasVivas)
            }
        }
        
    }
    juegoDeLaVida(arrayVivas)
    return arrayVivas;
}

export function juegoDeLaVida(arrayConVida){
    let celulasVivasCercanas= -1;
    let arrayCelulasMuertas = [];
    let arrayMuerte=[];
    let arrayNacen =[];
    for (let elemento of arrayConVida) {
        let x = elemento[0];
        let y = elemento[1];
        celulasVivasCercanas = celulasCercanasVivas (x,y)-1;
        if (celulasVivasCercanas === 2 ||  celulasVivasCercanas === 3) {
            arrayNacen = nacen(x, y);
        } else if ( celulasVivasCercanas < 2 ||  celulasVivasCercanas > 3) {
            arrayCelulasMuertas.push(x, y);
            arrayMuerte.push(arrayCelulasMuertas);
            arrayCelulasMuertas = [];
        }
           celulasVivasCercanas = -1;
    }
    celulasDebenMorir(arrayMuerte);
    celulasDebenNacer(arrayNacen);
}
  
export function celulasCercanasVivas(ejeX, ejeY) {
    let vecinos = 0;
    for (let i = ejeX - 1; i <= ejeX + 1; i++) {
      for (let j = ejeY - 1; j <= ejeY + 1; j++) {
        if (i >= 0 && i < grupo.length && j >= 0 && j < grupo.length) {
          if (grupo[i][j] === 1) vecinos++;
        }
      }
    }
    return vecinos;
 }
  
  export function nacen(ejeX, ejeY) {
    let arraysCelulasParaNacer = [];
    let celulasANacer;
    for (let i = ejeX - 1; i <= ejeX + 1; i++) {
      for (let j = ejeY - 1; j <= ejeY + 1; j++) {
        if (i >= 0 && i < grupo.length && j >= 0 && j < grupo.length) {
          let x = i;
          let y = j;
          celulasANacer = nuevosNacimientos(x, y);
          if (!celulasANacer === false) {
            arraysCelulasParaNacer.push(celulasANacer);
            celulasANacer = [];
          }
        }
      }
    }
    return arraysCelulasParaNacer;
  }

  function nuevosNacimientos(xLine, yLine) {
    let nacenCelulasAmigas = 0;
    let celulasANacer = [];
    if (grupo[xLine][yLine] === 0) {
      let a = xLine;
      let b = yLine;
      nacenCelulasAmigas = celulasCercanasVivas(a, b);
      if (nacenCelulasAmigas === 3) {
        celulasANacer.push(xLine, yLine);
        return celulasANacer;
      }
    }
  }
  
  function celulasDebenNacer(arraydeMuerte) {
    for (lecelulasDebenMorir of arraydeMuerte) {
      let x = element[0];
      let y = element[1];
      grupo[x][y] = 0;
    }
  }
  
  function celulasDebenNacer(arrayDeNaciemitno) {
    for (let element of arrayDeNaciemitno) {
      let x = element[0];
      let y = element[1];
      grupo[x][y] = 1;
    }
  }
  
  vivo(grupo);
  console.log(grupo);
  