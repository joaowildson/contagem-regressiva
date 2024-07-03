'use stict';

const ajeitarTempo = (c) => `0${c}`.slice(-2);

const atualizar = (tempo) => {

    const segundos = document.getElementById('segundos');
    const minutos = document.getElementById('minutos');
    const horas = document.getElementById('horas');
    const dias = document.getElementById('dias');

    const qtdSegundos = tempo % 60;
    const qtdMinutos = Math.floor((tempo % (60 * 60)) / 60);
    const qtdhoras = Math.floor((tempo % (60 * 60 * 24)) / (60 * 60));
    const qtddias = Math.floor((tempo / (60 * 60 * 24)));

    segundos.textContent = ajeitarTempo(qtdSegundos);
    minutos.textContent = ajeitarTempo(qtdMinutos);
    horas.textContent = ajeitarTempo(qtdhoras);
    dias.textContent = ajeitarTempo(qtddias);
}

const contagemRegressiva = (tempo) => {
    const pararcontagem = () => { 
        clearInterval(id);
    }

    const contar = () => {
        if(tempo === 0) {
            pararcontagem();
        }

        atualizar(tempo);
        tempo--;
    }
    const id = setInterval(contar, 1000);
}

const tempoRestante = () => {
    const dataEveno = new Date ('2024-07-04 20:00:00')
    const hj = Date.now();
    return Math.floor((dataEveno - hj) / 1000);
}

contagemRegressiva(tempoRestante());