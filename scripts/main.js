import { series } from './data.js';
var seriesTable = document.getElementById("series");
var seasonData = document.getElementById("p-avg-seasons");
console.log(series);
showInfoSeries(series);
showAvgSeasons(series);
document.addEventListener('DOMContentLoaded', function () {
    var serieLinks = document.querySelectorAll('.serie-link');
    var serieDetails = document.getElementById('card');
    var serieImage = document.getElementById('imagen-card');
    var serieTitle = document.getElementById('card-title-id');
    var serieText = document.getElementById('card-text-id');
    var serieLink = document.getElementById('card-link-id');
    serieLinks.forEach(function (link, index) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir la navegación
            var selectedSerie = series[index]; // Obtener la serie seleccionada
            console.log(selectedSerie);
            // imageDetails.src = selectedSerie.imagen;
            // serieDetails.appendChild(imageDetails);
            serieImage.src = "".concat(selectedSerie.imagen);
            serieTitle.innerHTML = "".concat(selectedSerie.titulo);
            serieText.innerHTML = "".concat(selectedSerie.sinopsis);
            serieLink.innerHTML = "".concat(selectedSerie.enlace);
            //       serieDetails.style.display = 'block'; // Mostrar los detalles de la serie
        });
    });
});
function showInfoSeries(seriesArr) {
    var seriesRow = document.createElement('tbody');
    for (var _i = 0, seriesArr_1 = seriesArr; _i < seriesArr_1.length; _i++) {
        var serie = seriesArr_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td> ".concat(serie.id, " </td>\n                               <td class=\"serie-link\" > <a  href=\"#\"> ").concat(serie.titulo, "  </a>  </td>\n                               <td> ").concat(serie.plataforma, " </td>\n                               <td> ").concat(serie.temporadas, " </td> ");
        seriesRow.appendChild(trElement);
    }
    seriesTable.appendChild(seriesRow);
}
function showAvgSeasons(seriesArr) {
    var totalSeasons = 0;
    var totalSeries = seriesArr.length;
    var avgSeasons = 0;
    seriesArr.forEach(function (serie) { return totalSeasons += serie.temporadas; });
    seasonData.innerHTML = "Promedio de temporadas: ".concat(totalSeasons / totalSeries);
}
