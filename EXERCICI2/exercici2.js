let container_table = document.getElementById("taula_propietats");
container_table.innerHTML = `
    <table> 
        <tr>
            <td>Valor máxim que pot tenir un número JS</td>
            <td>`+Number.MAX_VALUE+`</td>
        </tr>
        <tr>
            <td>Altura total de la pantalla</td>
            <td>`+screen.width+`</td>
        </tr>                    
        <tr>
            <td>Altura interna de la finestra</td>
            <td>`+window.innerHeight+`</td>
        </tr>                    
        <tr>
            <td>URL de la web</td>
            <td>`+document.URL+`</td>
        </tr>                    
    </table>
    `;