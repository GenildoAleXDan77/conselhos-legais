const tips = {
    Amor: [
        "Expresse seus sentimentos frequentemente.",
        "Surpreenda seu parceiro com pequenos gestos.",
        "Aprecie os momentos juntos.",
        "Comunique-se abertamente.",
        "Demonstre carinho diariamente."
    ],
    Amizade: [
        "Ouça seus amigos com atenção.",
        "Esteja presente em momentos importantes.",
        "Respeite as diferenças.",
        "Compartilhe momentos especiais.",
        "Ofereça ajuda quando necessário."
    ],
    Esperança: [
        "Mantenha a fé em tempos difíceis.",
        "Visualize seus objetivos e trabalhe para alcançá-los.",
        "Encontre pequenas alegrias no dia a dia.",
        "Cerque-se de pessoas positivas.",
        "Lembre-se de que os desafios são temporários."
    ],
    Coragem: [
        "Enfrente seus medos de frente.",
        "Acredite em suas habilidades.",
        "Dê um passo de cada vez, mesmo que seja pequeno.",
        "Aprenda com seus erros e siga em frente.",
        "Não se deixe desanimar pelas críticas."
    ],
    Paciência: [
        "Abrace o processo e não apresse as coisas.",
        "Pratique a meditação para acalmar a mente.",
        "Estabeleça metas realistas e dê tempo a si mesmo.",
        "Aprenda a lidar com frustrações.",
        "Celebre pequenas vitórias ao longo do caminho."
    ],
    Autoestima: [
        "Reconheça suas qualidades e conquistas.",
        "Seja gentil consigo mesmo.",
        "Desafie pensamentos negativos.",
        "Cuide do seu bem-estar físico e emocional.",
        "Busque atividades que lhe tragam prazer e satisfação."
    ],
    Resiliência: [
        "Veja os desafios como oportunidades de crescimento.",
        "Mantenha uma mentalidade positiva.",
        "Desenvolva habilidades para lidar com o estresse.",
        "Aprenda a se adaptar a mudanças.",
        "Cerque-se de uma rede de apoio."
    ],
    Motivação: [
        "Defina objetivos claros e específicos.",
        "Crie um plano de ação para alcançar seus objetivos.",
        "Encontre fontes de inspiração, como livros ou pessoas.",
        "Estabeleça uma rotina que o ajude a manter o foco.",
        "Reconheça e celebre seus progressos."
    ],
    Sabedoria: [
        "Busque aprender com suas experiências.",
        "Escute mais e fale menos.",
        "Leia livros e procure conhecimento.",
        "Reflita sobre suas decisões e aprenda com elas.",
        "Seja aberto a novas perspectivas."
    ],
    Gratidão: [
        "Faça uma lista das coisas pelas quais você é grato.",
        "Expresse agradecimento às pessoas ao seu redor.",
        "Pratique a gratidão diariamente.",
        "Encontre beleza nas pequenas coisas da vida.",
        "Aprecie o que você tem, em vez de focar no que falta."
    ],
    Criatividade: [
        "Reserve um tempo para explorar novos interesses.",
        "Permita-se ser curioso e experimentar coisas novas.",
        "Desenvolva uma prática regular de brainstorming.",
        "Colabore com outras pessoas para gerar novas ideias.",
        "Mantenha um diário para registrar suas inspirações."
    ],
    Empatia: [
        "Coloque-se no lugar dos outros.",
        "Escute com atenção e sem julgamentos.",
        "Ofereça apoio e compreensão aos que precisam.",
        "Desenvolva a habilidade de reconhecer emoções nos outros.",
        "Pratique a comunicação não-violenta."
    ],
    Fé: [
        "Confie no processo da vida.",
        "Encontre um propósito maior em suas ações.",
        "Busque momentos de reflexão e meditação.",
        "Cerque-se de pessoas que compartilham suas crenças.",
        "Desenvolva práticas que fortalecem sua fé."
    ]
};

function search() {
    const searchTerm = document.getElementById('search-bar').value;
    const categoryTitle = document.getElementById('category-title');
    const tipText = document.getElementById('tip-text');

    if (tips[searchTerm]) {
        const randomIndex = Math.floor(Math.random() * tips[searchTerm].length);
        categoryTitle.textContent = searchTerm;
        tipText.textContent = tips[searchTerm][randomIndex];
        document.getElementById('category-container').classList.add('show');
        setTimeout(() => {
            document.getElementById('category-container').classList.remove('show');
        }, 3000);
    } else {
        categoryTitle.textContent = 'Categoria não encontrada';
        tipText.textContent = '';
    }
}

function updateRandomTip() {
    const categories = Object.keys(tips);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const randomTip = tips[randomCategory][Math.floor(Math.random() * tips[randomCategory].length)];

    const randomTipElement = document.getElementById('random-tip');
    randomTipElement.textContent = randomTip;
}

function updateCategoriesList() {
    const categoriesElement = document.getElementById('categories');
    Object.keys(tips).forEach(category => {
        const li = document.createElement('li');
        li.textContent = category;
        categoriesElement.appendChild(li);
    });
}

function updateFooterDate() {
    const dateElement = document.getElementById('current-date');
    const currentDate = new Date().toLocaleDateString('pt-BR');
    dateElement.textContent = currentDate;
}

document.addEventListener('DOMContentLoaded', () => {
    updateCategoriesList();
    updateFooterDate();
    setInterval(updateRandomTip, 3000);
});
