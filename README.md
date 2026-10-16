Sistema Gestion Escolar — Proyecto Integrador

## Descripcion
Este script en JavaScript simula el proceso de inicio de sesion de un sistema de gestion de notas y asistencia. Utiliza estructuras de control (`do...while`, `if/else`), variables y comparaciones para validar las credenciales de un usuario.

## Logica del programa
1. Se definen las credenciales validas del sistema:
   - Usuario: `admin`
   - Contraseña: `admin`
2. El programa entra en un ciclo `do...while` que se repite mientras no se hayan superado los intentos permitidos (`maxIntentos = 3`).

3. En cada intento:
   - Se muestra un mensaje solicitando el usuario y la contrasena.
   - Se compara lo ingresado contra las credenciales validas.
   - Si coinciden, se imprime `"Inicio de sesion exitoso"` y el ciclo se detiene (`break`).
   - Si no coinciden, se imprime un mensaje de error indicando el número de intento actual.
   
4. Si se completan los 3 intentos sin exito, se muestra el mensaje: `"Ha excedido el número de intentos. Cuenta bloqueada."`

## Conceptos aplicados
- **Variables:** almacenan credenciales validas, datos ingresados y el contador de intentos.
- **Estructura repetitiva (`do...while`):** controla los intentos de inicio de sesión.
- **Estructura condicional (`if / else`):** valida si las credenciales son correctas.
- **Concatenación / plantillas de texto:** muestra el número de intento actual mediante template literals.

## Cómo ejecutar
1. Clonar este repositorio.
2. Abrir el archivo `login.js` en un editor de codigo.
3. Ejecutar el archivo con Node.js:
```bash
   node login.js
```
4. Observar en la consola la secuencia de mensajes que simula el proceso de validacion de usuario y contraseña.

## Autores
 Miller Steban Valencia Cardona — Proyecto Integrador FrontEnd 1
 Jhonatan Londoño Quintero — Proyecto Integrador FrontEnd 1
 Yesica Cristina Guerra giraldo — Proyecto Integrador FrontEnd 1