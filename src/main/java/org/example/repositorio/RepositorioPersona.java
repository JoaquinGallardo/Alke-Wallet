package org.example.repositorio;

import org.example.modelo.Persona;

import java.util.HashMap;
import java.util.Map;

public class RepositorioPersona {

    private Map<String, String> personasDb = new HashMap<>();

    public String crearPersona(Persona persona) {



            personasDb.put(persona.getRut(), persona.getNombre());
            return "Ok";



    }

    public String actualizarPersona(Persona persona){



            personasDb.put(persona.getRut(), persona.getNombre());
            return "Ok";

    }

    public Map<String, String> listarPersonas(){

        return personasDb;

    }

    public String eliminarPersona(Persona persona){


            personasDb.remove(persona.getRut());

            return "Ok";



    }



}