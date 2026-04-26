const imagenesPorSeccion = {
  Verduras: [
    "imagenes/verduras/verdura1.jpg",
    "imagenes/verduras/verdura2.jpg",
    "imagenes/verduras/verdura3.jpg"
  ],
  Frutas: [
    "imagenes/frutas/fruta1.jpg",
    "imagenes/frutas/fruta2.jpg",
    "imagenes/frutas/fruta3.jpg"
  ],
  Semillas: [
    "imagenes/semillas/semilla1.jpg",
    "imagenes/semillas/semilla2.jpg",
    "imagenes/semillas/semilla3.jpg"
  ],
  "Granos y legumbres": [
    "imagenes/granos/grano1.jpg",
    "imagenes/granos/grano2.jpg",
    "imagenes/granos/grano3.jpg"
  ]
};

function obtenerImagenSeccion(categoria, indice) {
  const lista = imagenesPorSeccion[categoria];
  if (!lista || lista.length === 0) {
    return "imagenes/default.jpg";
  }
  return lista[indice % lista.length];
}
const productos = [
  // Seccion de verdura  cada seccion tiene 10 productos
  { nombre: "Lechuga", categoria: "verduras", precio: 3.50, descripcion: "Fresca y crocante para ensaladas." },
  { nombre: "Espinaca", categoria: "verduras", precio: 4.20, descripcion: "Ideal para jugos y salteados." },
  { nombre: "Zanahoria", categoria: "verduras", precio: 3.80, descripcion: "Buena para jugos y guisos." },
  { nombre: "Tomate", categoria: "verduras", precio: 4.00, descripcion: "Muy usado en la cocina diaria." },
  { nombre: "Pepino", categoria: "verduras", precio: 3.60, descripcion: "Refrescante para ensaladas." },
  { nombre: "Brócoli", categoria: "verduras", precio: 5.10, descripcion: "Muy nutritivo y saludable." },
  { nombre: "Coliflor", categoria: "verduras", precio: 5.00, descripcion: "Útil para sopas y guisos." },
  { nombre: "Apio", categoria: "verduras", precio: 3.20, descripcion: "Sirve para caldos y jugos." },
  { nombre: "Pimiento", categoria: "verduras", precio: 4.60, descripcion: "Aporta color y sabor." },
  { nombre: "Cebolla", categoria: "verduras", precio: 2.90, descripcion: "Base de muchas recetas." },

  // Seccion de Frutas
  { nombre: "Manzana", categoria: "frutas", precio: 5.40, descripcion: "Dulce y práctica para el día." },
  { nombre: "Plátano", categoria: "frutas", precio: 4.90, descripcion: "Buena fuente de energía." },
  { nombre: "Naranja", categoria: "frutas", precio: 4.70, descripcion: "Ideal para jugos naturales." },
  { nombre: "Fresa", categoria: "frutas", precio: 7.20, descripcion: "Perfecta para postres." },
  { nombre: "Mango", categoria: "frutas", precio: 6.80, descripcion: "Fruta tropical muy rica." },
  { nombre: "Piña", categoria: "frutas", precio: 8.20, descripcion: "Muy usada en jugos." },
  { nombre: "Papaya", categoria: "frutas", precio: 6.10, descripcion: "Ligera y suave." },
  { nombre: "Uva", categoria: "frutas", precio: 7.40, descripcion: "Pequeña y dulce." },
  { nombre: "Pera", categoria: "frutas", precio: 5.80, descripcion: "Fresca y suave." },
  { nombre: "Melón", categoria: "frutas", precio: 7.00, descripcion: "Muy refrescante." },

  // Seccion de Semillas
  { nombre: "Chía", categoria: "semillas", precio: 9.50, descripcion: "Usada en bebidas y postres." },
  { nombre: "Linaza", categoria: "semillas", precio: 8.30, descripcion: "Aporta fibra." },
  { nombre: "Sésamo", categoria: "semillas", precio: 7.60, descripcion: "Útil en panes y snacks." },
  { nombre: "Girasol", categoria: "semillas", precio: 8.10, descripcion: "Buen snack natural." },
  { nombre: "Calabaza", categoria: "semillas", precio: 7.90, descripcion: "Semilla tostada para comer." },
  { nombre: "Quinua", categoria: "semillas", precio: 10.50, descripcion: "Muy nutritiva." },
  { nombre: "Amaranto", categoria: "semillas", precio: 9.20, descripcion: "Muy usado en desayunos." },
  { nombre: "Cañihua", categoria: "semillas", precio: 10.80, descripcion: "Grano andino muy completo." },
  { nombre: "Sacha Inchi", categoria: "semillas", precio: 12.00, descripcion: "Semilla nutritiva." },
  { nombre: "Ajonjolí", categoria: "semillas", precio: 7.40, descripcion: "Muy común en panes." },

  // Seccion de legumbres
  { nombre: "Lenteja", categoria: "granos", precio: 6.40, descripcion: "Usada en sopas." },
  { nombre: "Garbanzo", categoria: "granos", precio: 7.10, descripcion: "Sirve para ensaladas." },
  { nombre: "Frejol canario", categoria: "granos", precio: 6.90, descripcion: "Muy usado en menestras." },
  { nombre: "Pallares", categoria: "granos", precio: 7.30, descripcion: "Clásico de la cocina." },
  { nombre: "Arveja", categoria: "granos", precio: 5.90, descripcion: "Ideal para sopas." },
  { nombre: "Arroz integral", categoria: "granos", precio: 7.80, descripcion: "Opción saludable." },
  { nombre: "Maíz", categoria: "granos", precio: 5.50, descripcion: "Versátil y práctico." },
  { nombre: "Avena", categoria: "granos", precio: 6.20, descripcion: "Muy usada en desayuno." },
  { nombre: "Trigo", categoria: "granos", precio: 5.70, descripcion: "Base para varias comidas." },
  { nombre: "Cebada", categoria: "granos", precio: 5.60, descripcion: "Usada en sopas y bebidas." }
];

const categorias = {
  verduras: "Verduras",
  frutas: "Frutas",
  semillas: "Semillas",
  granos: "Granos y legumbres"
};

const imagenesPorCategoria = {
  verduras: [
    "imagenes/verduras/v1.jpeg",
    "imagenes/verduras/v2.jpeg"
  ],
  frutas: [
    "imagenes/frutas/f1.jpg",
    "imagenes/frutas/f2.jpg"
  ],
  semillas: [
    "imagenes/semillas/s1.jpg",
    "imagenes/semillas/s2.jpg"
  ],
  granos: [
    "imagenes/granos/g1.jpg",
    "imagenes/granos/g2.jpg"
  ]
};

function obtenerImagen(categoria, indice) {
  const lista = imagenesPorCategoria[categoria];
  if (!lista || lista.length === 0) {
    return "";
  }
  return lista[indice % lista.length];
}
function comprar(nombre) {
  alert(`La compra de "${nombre}" aún no está disponible porque el proyecto no tiene backend.`);
}

function crearBotonesFlotantes() {
  if (document.getElementById("btnInicioFlotante")) return;

  const barra = document.createElement("div");
  barra.style.position = "fixed";
  barra.style.right = "18px";
  barra.style.bottom = "18px";
  barra.style.zIndex = "9999";
  barra.style.display = "flex";
  barra.style.flexDirection = "column";
  barra.style.gap = "10px";

  barra.innerHTML = `
    <a id="btnInicioFlotante" href="index.html"
       class="btn btn-success shadow"
       style="border-radius:999px; padding:.7rem 1rem; font-weight:600;">
      Inicio
    </a>
    <button id="btnArribaFlotante" type="button"
       class="btn btn-outline-success shadow"
       style="border-radius:999px; display:none; padding:.7rem 1rem; font-weight:600;">
      ↑ Arriba
    </button>
  `;

  document.body.appendChild(barra);

  const btnArriba = document.getElementById("btnArribaFlotante");
  btnArriba.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const mostrar = () => {
    btnArriba.style.display = window.scrollY > 300 ? "block" : "none";
  };
  window.addEventListener("scroll", mostrar);
  mostrar();
}

function renderProductos() {
  const contenedor = document.getElementById("productos");
  const buscador = document.getElementById("buscador");
  if (!contenedor || !buscador) return;

  const categoria = document.body.dataset.categoria;
  const texto = buscador.value.toLowerCase().trim();

  const filtrados = productos.filter(p => {
    const coincideCategoria = p.categoria === categoria;
    const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.descripcion.toLowerCase().includes(texto);
    return coincideCategoria && coincideTexto;
  });

  contenedor.innerHTML = "";

if (filtrados.length === 0) {
  contenedor.innerHTML = `
    <div class="col-12">
      <div class="alert alert-warning mb-0">
        No se encontraron productos.
      </div>
    </div>
  `;
  return;
}

  filtrados.forEach((p, index) => {
  const col = document.createElement("div");
  col.className = "col-sm-6 col-lg-4 col-xl-3";

  const imagen = obtenerImagen(p.categoria, index);

      col.innerHTML = `
      <div class="card h-100 shadow-sm border-0" style="border-radius:1rem; overflow:hidden;">
      <img src="${imagen}" class="card-img-top" alt="${p.nombre}" style="height:300px; object-fit:cover;">
      <div class="card-body d-flex flex-column">
        <span class="badge text-bg-success mb-2">${categorias[p.categoria]}</span>
        <h5 class="card-title fw-bold">${p.nombre}</h5>
        <p class="card-text small text-secondary">${p.descripcion}</p>
        <p class="fw-bold text-success">S/ ${p.precio.toFixed(2)}</p>
        <button class="btn btn-success mt-auto">Comprar</button>
      </div>
    </div>
  `;

      const btn = col.querySelector("button");
  btn.addEventListener("click", () => comprar(p.nombre));

  contenedor.appendChild(col);
});
}

function prepararFormularios() {
  const formContacto = document.getElementById("formContacto");
  if (formContacto) {
    formContacto.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Mensaje enviado correctamente.");
      e.target.reset();
    });
  }

  const formReclamos = document.getElementById("formReclamos");
  if (formReclamos) {
    formReclamos.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Reclamo registrado correctamente.");
      e.target.reset();
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  crearBotonesFlotantes();
  prepararFormularios();
  renderProductos();
});
