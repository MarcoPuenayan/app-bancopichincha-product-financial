export interface Errors {
  required: string;
  minlength: string;
  maxlength: string;
  existeId: string;
}
export const formErrors: Errors = {
  required: 'Este campo es requerido!',
  minlength: 'Debe introducir mas caracteres!',
  maxlength: 'Ha excedido el limite de caracteres!',
  existeId: 'ID en uso!',
};
