//Crea un archivo JS que contenga las siguientes líneas

//- Una cadena de texto con tu Nombre
const name = 'sebastian';
//- Otra cadena de texto con tu Apellido
const lastname = 'barreto';
//- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
const student = `${name} ${lastname}`;
//- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
const student_uppercase = student.toUpperCase();
//- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
const student_lowercase = student.toLowerCase();
//- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
const text_length = student.length;
//- Una variable que contenga la primera letra del Nombre
const first_letter = name.charAt(0);
//- Otra variable que contenga la última letra del Apellido
const last_letter = lastname.charAt(lastname.length-1);
//- Una cadena de texto que elimine los espacios de la variable "estudiante"
const delete_space = student.replace(" ", "");
//- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
const name_ckeck = student.includes(`${name}`)
console.log(name_ckeck);