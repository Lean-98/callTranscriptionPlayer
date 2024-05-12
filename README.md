
# Prueba técnica Frontend/Full Stack Developer

## Descripción de la Prueba:


Desarrolla una pequeña aplicación web utilizando Next.js, Tailwind CSS y TypeScript que muestre la transcripción de una llamada telefónica en un componente que mapee cada mensaje tanto del agente como del usuario. La aplicación debe permitir al usuario hacer clic en cualquier parte de la transcripción y saltar automáticamente a esa parte específica del audio.


### Requisitos Técnicos:



#### Frontend:
- Utiliza Next.js como framework de React.
- Implementa la interfaz de usuario utilizando Tailwind CSS.
- Utiliza TypeScript para mejorar la calidad y la legibilidad del código.


#### Componente de Transcripción:
-  Crea un componente que mapee cada mensaje (tanto del agente como del usuario) en la transcripción de la llamada.


#### Funcionalidad:
- Muestra la transcripción de la llamada en un componente con mensajes separados para el agente y el usuario.
- Reproduce el audio de la llamada.
- Permite al usuario hacer clic en cualquier parte de la transcripción para saltar a esa parte del audio.
- Proporciona controles de reproducción de audio básicos (reproducir, pausar, detener).


### Puntos Adicionales (Opcionales):



#### Diseño Responsivo:
- Haz que la aplicación sea completamente responsive para adaptarse a diferentes tamaños de pantalla.


#### Estilo y Animaciones:
- Utiliza Tailwind CSS para estilizar la aplicación y agrega animaciones suaves para mejorar la experiencia del usuario.

> **Nota:** Recuerda mantener un enfoque modular y escalable en tu código.
> La claridad, la legibilidad y la eficiencia del código serán consideradas en la evaluación.
> ¡Buena suerte y diviértete!


### Referencia Transcripción:
[
 {
 "content": "¡Hola! Soy Rocio, asesora de admisiones de la Universidad Online. ¿En qué puedo ayudarte hoy?",
 "role": "agent",
 "start": 1.005,
 "end": 6.331625
 },
 {
 "content": "Hola Rocio, ¿cómo estás? Estoy interesado en las licenciaturas relacionadas con tecnología.",
 "role": "user",
 "start": 7.24,
 "end": 15.562688
 },
 ...
]

Link del audio: https://exampleDrive.hosting.com/file.mp3


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

