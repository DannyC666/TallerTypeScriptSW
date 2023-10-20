import {series} from './data.js';
import {Serie} from "./serie";

let seriesTable: HTMLElement = document.getElementById("series")!;
let seasonData: HTMLElement = document.getElementById("p-avg-seasons")!;

console.log(series);
showInfoSeries(series);
showAvgSeasons(series);

document.addEventListener('DOMContentLoaded', () => {
    const serieLinks = document.querySelectorAll('.serie-link');
    const serieImage = document.getElementById('imagen-card')! as HTMLImageElement;
    const serieTitle = document.getElementById('card-title-id')!;
    const serieText = document.getElementById('card-text-id')!;
    const serieLink = document.getElementById('card-link-id')!;

    serieLinks.forEach((link, index) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedSerie = series[index];
            console.log(selectedSerie)
            serieImage.src = `${selectedSerie.imagen}`;
            serieTitle.innerHTML = `${selectedSerie.titulo}`;
            serieText.innerHTML = `${selectedSerie.sinopsis}`;
            serieLink.innerHTML = `${selectedSerie.enlace}`;
        });
    });
});
function showInfoSeries(seriesArr: Serie[]): void{
    let seriesRow : HTMLElement = document.createElement('tbody');
    for(let serie of seriesArr){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td> ${serie.id} </td>
                               <td class="serie-link" > <a  href="#"> ${serie.titulo}  </a>  </td>
                               <td> ${serie.plataforma} </td>
                               <td> ${serie.temporadas} </td> `;
        seriesRow.appendChild(trElement);
    }
    seriesTable.appendChild(seriesRow);
}

function showAvgSeasons(seriesArr: Serie[]) : void {
    let totalSeasons: number = 0;
    let totalSeries : number = seriesArr.length;
    let avgSeasons : number = 0;
    seriesArr.forEach((serie) => totalSeasons += serie.temporadas);
    seasonData.innerHTML = `Promedio de temporadas: ${totalSeasons / totalSeries}`;

}

