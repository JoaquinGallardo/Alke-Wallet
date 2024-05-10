package org.example.modelo;

public class Persona {

    private String rut;
    private String nombre;

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getRut() {
        return rut;
    }

    public Persona(String nombre, String rut) {
        this.nombre = nombre;
        this.rut = rut;
    }



    public void setRut(String rut) {
        this.rut = rut;
    }

    @Override
    public String toString() {
        return "Persona{" +
                "nombre='" + nombre + '\'' +
                ", rut='" + rut + '\'' +
                '}';
    }
}
