export class Supplier {

  constructor(
    public id: string,
    public nombre: string,
    public apellidos: string,
    public nif: string,
    public iban: string,
    public imagen: string,
    public active: boolean,
    public email: string
  ) { }

}
