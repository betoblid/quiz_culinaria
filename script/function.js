


const Questao = document.getElementById("questao");
const nquestao = document.getElementById("nquestao");

const a = document.getElementById("A");
const b = document.getElementById("B")
const c = document.getElementById("C")
const d = document.getElementById("D")

const placar = document.getElementById("pontos")
const auxiliar_nquestao = document.getElementById("numero_pergunta")

//controlador de audio
const aplauso = document.getElementById("aplauso")
const erro = document.getElementById("errou")
const acerto = document.getElementById("acerto")

const card = document.getElementById("quiz")
const card_fim = document.getElementById("resu")

const pergunta = [
    {
        id: 1,
        pergunta: "Qual é o prato mais consumido na Coreia do sul?",
        reposta_A: "Kimchi",
        resposta_B: "Jjajangmyeon",
        resposta_C: "Bulgogi",
        resposta_D: "Gimbap",
        resposta_E: "katsu",
        resposta_correta: "Kimchi",
        correto: "A"
    },
    {
        id: 2,
        pergunta: "O bolinho de feijão é um prato tipico da coreia do Sul.",
        reposta_A: "Verdade",
        resposta_B: "Mito",
        resposta_C: "Não",
        reposta_D: "Talvez",
        resposta_correta: "Mito",
        correto: "B"
    },
    {
        id: 3,
        pergunta: "Na tailândia é um hábito comer com as mãos tanto nas ruas como em residências?",
        reposta_A: "Sim",
        resposta_B: "Não",
        resposta_C: "Talvez",
        resposta_D: "não sei",
        resposta_correta: "Sim",
        correto: "A"
    },
    {
        id: 4,
        pergunta: " São pratos típicos da índia: Samosa, pizza, Yakissoba e Pad Thai?",
        reposta_A: " sim, esses alimentos fazem parte da culinária indiana.",
        resposta_B: "Não, esses alimentos não fazem parte da culinária indiana.",
        resposta_C: "Não, esses alimentos não fazem parte da culinária coreana.",
        resposta_D: "sim, esses alimentos fazem parte da culinária Brasileira.",
        resposta_correta: "Não, esses alimentos não fazem parte da culinária indiana.",
        correto: "B"
    },
    {
        id: 5,
        pergunta: "No Japão, sushi é considerado prato principal.",
        reposta_A: "Verdadeiro",
        resposta_B: "Falso",
        resposta_C: "Não",
        resposta_D: "Talvez",
        resposta_E: "",
        resposta_correta: "Falso",
        correto: "B"
    },
    {
        id: 6,
        pergunta: " Qual é o nome da alga usada para fazer sushi?",
        reposta_A: "Arame",
        resposta_B: "Kombu",
        resposta_C: "Wasabi",
        resposta_D: "Nori",
        resposta_E: "",
        resposta_correta: "Nori",
        correto: "D"
    },
    {
        id: 7,
        pergunta: "Qual desses sushis foi uma invenção brasileira?",
        reposta_A: "Temaki",
        resposta_B: "Huramaki",
        resposta_C: "Hot roll",
        resposta_D: "Hossomaki",
        resposta_E: "",
        resposta_correta: "Hot roll",
        correto: "C"
    },
    {
        id: 8,
        pergunta: "Quais são os países que influenciaram na culinária vietnamita? ",
        reposta_A: "Tailândia e França",
        resposta_B: "Japão e China",
        resposta_C: "Coreia do sul e Malásia",
        resposta_D: "Europa e Coreia do Sul",
        resposta_E: "",
        resposta_correta: "Tailândia e França",
        correto: "A"
    },
    {
        id: 9,
        pergunta: "A maioria dos pratos típicos vietnamitas são picantes e salgados. (V) ou (F). ",
        reposta_A: " Verdade, os pratos vietnamitas são compostos por uma quantidade elevada de sal e pimenta. ",
        resposta_B: "Falso. Os vietnamitas não costumam utilizar sal e pimenta em suas refeições, então dificilmente haverá tempero nos alimentos.",
        resposta_C: "Verdade, as comidas vietnamitas são compostos por uma quantidade elevada de açucar e café.",
        resposta_D: "Falso. Os vietnamitas não costumam utilizar Açucar e Café em suas refeições, então dificilmente haverá tempero nos alimentos.",

        resposta_correta: "Falso. Os vietnamitas não costumam utilizar sal e pimenta em suas refeições, então dificilmente haverá tempero nos alimentos.",
        correto: "B"
    },
]


//variavel de auxilio 
let aux = 0;
//variavel onde armazena os pontos dos usuarios
let pontos = 0;

function Criarquestao() {

    nquestao.textContent = pergunta[aux].id
    Questao.textContent = pergunta[aux].pergunta
    a.textContent = pergunta[aux].reposta_A
    b.textContent = pergunta[aux].resposta_B
    c.textContent = pergunta[aux].resposta_C
    d.textContent = pergunta[aux].resposta_D

    placar.textContent = pontos
    auxiliar_nquestao.textContent = `${pergunta[aux].id}`
}

Criarquestao()

//function que fica responsavel por selecionar a proxima questão
function next() {

    if (aux >= pergunta.length - 1) {
        aux = 0
        Criarquestao()
        fimGamer()
    } else {
        aux += 1
        Criarquestao()
    }
}

//function responsavel por chamar o fim de gamer
function fimGamer() {

    card.classList.add("hidden")
    document.getElementById("auxiliar_nquestao").classList.add("hidden")

    //criar um novo card onde tera algumas especificações

    card_fim.innerHTML = `<p>Parabéns por chegar até o fim!, espero que tenha gostado.</p>
    <p>Você acertou ${pontos / 10}, Parabéns pelo seu esforço.</p>
    <p>Esse projeto foi feito com o objetivo de saber se estão atentos a apresentação e ao tema abordado.</p>`


    //som de aplausos apos o final
    aplauso.play()
}
//essa function é muito importante para usuario, ela é responsavel por mostra pro usuario qual é a certa e qual a errada
// caso erre mostra a certa e apontar qual marcou caso certo aponta qual clico.
function certo(entrada, certo) {
    //os dois parametros são entrada feita pelo usuario e acerto pego dos dados das perguntas
    if (entrada === certo) {

        acerto.play()
        document.getElementById(certo).classList.add("pergunta_certa");

        setTimeout(() => {
            document.getElementById(certo).classList.remove("pergunta_certa");
        }, 1500);

    } else {
        document.getElementById(certo).classList.add("pergunta_certa")
        document.getElementById(entrada).classList.add("pergunta_errada")

        erro.play()
        setTimeout(() => {
            document.getElementById(certo).classList.remove("pergunta_certa");
            document.getElementById(entrada).classList.remove("pergunta_errada")
        }, 1500);


    }

}


function validar(npergunta, resposta) {

    let respostaUsuario = resposta.textContent

    if (pergunta[aux].resposta_correta === respostaUsuario) {

        //caso acerte usuario ganha 10 pontos
        pontos += 10
        certo(npergunta, pergunta[aux].correto)
        setTimeout(() => {
            next()
        }, 1700);

    } else {
        certo(npergunta, pergunta[aux].correto)
        setTimeout(() => {
            next()
        }, 2300);

    }



}