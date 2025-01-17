const mdLinks = require("../src/mdLinks");

describe('mdLinks', () => {
  it('debe devolver una promesa', () => {
    expect(mdLinks('./test/fileTest.md')).toBeInstanceOf(Promise);
  });
});

describe("mdLinks", () => {
  it("debe rechazar cuando la ruta no existe", () => {
    return mdLinks("rutaFalsa/archivoFalso.md").catch((error) => {
      expect(error).toBe("La ruta no existe");
    });
  });
});

describe("mdLinks", () => {
  it("debe rechazar cuando la extension es incorrecta", () => {
    return mdLinks("/Users/kathzy/Documents/Codes/DEV011-md-links/test/fileTest.js").catch((error) => {
      expect(error).toBe("la extension no es correcta");
    });
  });
});

