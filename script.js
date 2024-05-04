const content = document.getElementById("content")

const maps = {
	"0.": "capa",
	"1.": "introducao",
	"1.1.": "o_que_e",
	"1.1.1.": "antes",
	"1.1.2.": "definicao",
	"1.1.3.": "importancia",
	"1.2.": "apache_hadoop",
	"1.3.": "hadoop_mr",
	"2.": "gerenciamento_dist",
	"2.1.": "hadoop_mr_spark",
	"2.2.": "dag",
	"3.": "dados_distribuidos",
	"3.1.": "rdd",
	"3.2.": "dataframes",
	"3.3.": "variaveis_compartilhadas",
	"3.4.": "transformacoes",
	"3.5.": "arquitetura",
	"4.": "aplicacoes",
	"4.1.": "machine_learning",
	"4.2.": "big_data",
	"4.3.": "grafos",
	"4.4.": "fluxo",
	"5.": "conclusao",
	"6.": "bibliografia"
}

var actualId = "capa"
var actualLinkId = "0."

for (const [key, value] of Object.entries(maps)) {
	document.getElementById(value).style.display = "none"

	document.getElementById(key).addEventListener("click", function() {
		var a = document.getElementById(key).firstChild
		var oldA = document.getElementById(actualLinkId).firstChild
		
		document.getElementById(actualId).style.display = "none"
		actualId = value
		document.getElementById(value).style.display = "block"

		oldA.style.backgroundColor = "#1D6890"
		a.style.backgroundColor = "#F55B14"

		actualLinkId = key
	})
}

document.getElementById(actualId).style.display = "block"
document.getElementById(actualLinkId).style.backgroundColor = "#F55B14"
