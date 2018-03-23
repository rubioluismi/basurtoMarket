export class JugadoresDTO {
    constructor (
        public id: number,
        public nombre: string,
        public puesto: string,
        public fechaNacimiento: string,
        public club: string
    ) {}
}
