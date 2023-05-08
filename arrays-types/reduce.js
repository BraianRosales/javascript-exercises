const tareas = [
  { nombre: "Regar las plantas", prioridad: "A" },
  { nombre: "Comprar el pan", prioridad: "B" },
  { nombre: "Enviar e-mails", prioridad: "A" },
  { nombre: "Poner la lavadora", prioridad: "C" },
  { nombre: "Cargar el móvil", prioridad: "B" },
  { nombre: "Limpiar la cocina", prioridad: "A" },
];

const final = tareas.reduce((acc, tarea) => {
  console.log('tarea:', tarea);
  console.log('no existe en acc:', !acc[tarea.prioridad]);
  if (!acc[tarea.prioridad]) {
    acc[tarea.prioridad] = [];
    console.log('ENTONCES CREA PROPIEDAD EN ACC:',  acc);
  }
  acc[tarea.prioridad].push(tarea.nombre);
  console.log('ENTONCES PUSHEA:',acc);
  return acc;
}, {});

console.log('TAREAS:',final);

// const allChilds = this.optionsLinks.reduce((acc, cur) => {
//   return [...acc, ...cur.childs];
// }, []);