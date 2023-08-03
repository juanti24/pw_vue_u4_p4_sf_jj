<template>
    <input v-model="id" type="text">
    <button @click="eliminarEstudiante">Eliminar</button>
  

  </template>
  
  <script>
  import {eliminarEstudianteFachada} from "../helpers/EstudianteClient.js"
  export default {
      data(){
          return{
              id:null,

          }
      }, 
      methods:{
         async eliminarEstudiante(){
             const data = eliminarEstudianteFachada(this.id);
              
          }
      }
  }
  </script>
  
  <style>
  
  </style>