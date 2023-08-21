
// Utilizó un modelo para reconocer que caracteristicas/datos/contenido que va a traer el servicio
// Y de esa manera comunicarle a mi componente esa información, sin el modelo el componente
// no reconocé dicha info.
// También se encarga de recibir recibir los datos manipulados en el componente para transferirlos al ss
// Es un camino de ida y vuelta, recibe del ss, manda a la vista y vuelve a enviar al ss.

export interface Person {

  id:string;
  name: string;
  category:string;
  company:string;
  levelOfHappiness:string;

}
