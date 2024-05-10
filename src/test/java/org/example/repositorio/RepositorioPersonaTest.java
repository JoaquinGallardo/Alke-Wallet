package org.example.repositorio;

import org.example.modelo.Persona;
import org.junit.Test;
import org.mockito.internal.matchers.Null;

import java.util.Map;

import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

public class RepositorioPersonaTest {
private RepositorioPersona repositorioPersona = mock(RepositorioPersona.class);
    @Test
    public void testCrearPersona() {

Persona persona = new Persona("Joaquín", "12345678-9");
when(repositorioPersona.crearPersona(persona)).thenReturn("Ok");
String crearPersonaRes = repositorioPersona.crearPersona(persona);
assertEquals("Ok", crearPersonaRes);
verify(repositorioPersona).crearPersona(persona);
    }

    @Test
    public void testActualizarPersona() {
Persona persona = new Persona("Ignacio", "98765432-1");
       // Persona persona = null;
when(repositorioPersona.actualizarPersona(persona)).thenReturn("Ok");
String actualizarPersonaRes = repositorioPersona.actualizarPersona(persona);
assertEquals("Ok", actualizarPersonaRes);
assertNotNull(persona);
verify(repositorioPersona).actualizarPersona(persona);

    }

    @Test
    public void testListarPersonas() {

        Map<String, String> listaPersonas = repositorioPersona.listarPersonas();
        assertNotNull(listaPersonas);

    }

    @Test
    public void testEliminarPersona() {
        Persona persona = new Persona("Joaquín", "12345678-9");
        when(repositorioPersona.eliminarPersona(persona)).thenReturn("Ok");
        String eliminarPersonaRes = repositorioPersona.eliminarPersona(persona);
        assertEquals("Ok", eliminarPersonaRes);
        verify(repositorioPersona).eliminarPersona(persona);

    }
}