$(document).ready(function () {
    let tabla = $('#tablaTareas').DataTable({
        language: {
            url: 'https://cdn.datatables.net/plug-ins/2.0.8/i18n/es-ES.json'
        }
    });

    $('#formularioTarea').on('submit', function (evento) {
        evento.preventDefault();

        let nombreTarea = $('#nombreTarea').val().trim();
        let prioridadTarea = $('#prioridadTarea').val();

        if (nombreTarea === '') {
            alert('El campo Nombre de la tarea no puede estar vacío.');
            return;
        }

        let botonEliminar = '<button class="btn btn-danger btn-sm btn-eliminar">Eliminar</button>';

        let nuevaFila = tabla.row.add([
            nombreTarea,
            prioridadTarea,
            botonEliminar
        ]).draw(false).node();

        $(nuevaFila).hide().fadeIn(600);

        $('#nombreTarea').val('');
        $('#prioridadTarea').val('Alta');
    });

    $('#tituloPrincipal').hover(
        function () {
            $(this).css('color', '#198754');
        },
        function () {
            $(this).css('color', '#0d6efd');
        }
    );

    $('#tablaTareas tbody').on('click', '.btn-eliminar', function () {
        let fila = $(this).closest('tr');

        fila.fadeOut(600, function () {
            tabla.row(fila).remove().draw(false);
        });
    });
});
