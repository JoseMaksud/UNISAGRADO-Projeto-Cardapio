const Categories = ["Sanduíches","Acompanhamentos","Bebidas","Sobremesas"];

var data = [
    {
        Image: "img/Mega_Stacker_Rodeio_3.0.png",
        Title: "Mega Stacker Rodeio 3.0",
        Description: `Todo mundo ama a Família Mega Stacker e agora vai amar ainda mais! Além de três carnes, bacon, molho stacker e queijo derretido, o Rodeio leva o nosso delicioso molho barbecue e seis onion rings. Vai encarar?`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "45,90",
        Category: Categories[0]
    },
    {
        Image: "img/Whopper-Rodeio.png",
        Title: "Whopper® Rodeio",
        Description: `Pão com gergelim, um suculento hambúrguer de pura carne bovina, cheddar fatiado, molho barbecue, 6 deliciosas onion rings, tomate, alface e maionese.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "37,90",
        Category: Categories[0]
    },
    {
        Image: "img/Whopper-BBQ.png",
        Title: "Whopper® Barbecue Bacon",
        Description: `Adicionamos no nosso WHOPPER® um delicioso molho barbecue e fatias super crocantes de bacon. Resultado: Perfeição!`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "35,90",
        Category: Categories[0]
    },
    {
        Image: "img/Whopper-Duplo.png",
        Title: "Whopper® Duplo",
        Description: `Pão com gergelim, dois suculentos hambúrgueres de pura carne bovina, duas fatias de cheddar, quatro fatias de picles, alface, tomate, cebola, maionese e ketchup.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "35,90",
        Category: Categories[0]
    },
    {
        Image: "img/Mega-Stacker-Cheddar-2.png",
        Title: "Mega Stacker Cheddar 2.0",
        Description: `Duas deliciosas carnes grelhadas no fogo, bacon, muito molho sabor cheddar e molho Stacker.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "37,90",
        Category: Categories[0]
    },
    {
        Image: "img/Mega-Stacker-Cheddar-3.png",
        Title: "Mega Stacker Cheddar 3.0",
        Description: `O Mega Stacker Cheddar está de volta! Um verdadeiro exagero de cheddar. Só quem é louco por queijo tem coragem de encarar esse gigante. E você, tem? #PartiuBK`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "37,90",
        Category: Categories[0]
    },
    {
        Image: "img/Batata-Frita.png",
        Title: "Batata Frita",
        Description: `Crocantes e irresistíveis, nossas batatas fritas podem vir no tamanho pequeno, médio e grande e são servidas sempre levemente salgadas. Estas delícias são o acompanhamento perfeito para o seu sanduíche perfeito.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "12,90",
        Category: Categories[1]
    },
    {
        Image: "img/Batata-Suprema.png",
        Title: "Batata Suprema",
        Description: `Batata frita com molho sabor cheddar e pedacinhos de bacon.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "17,90",
        Category: Categories[1]
    },
    {
        Image: "img/Onion-Rings.png",
        Title: "Onion Rings",
        Description: `Cebolas cortadas em forma de anéis, empanadas com uma leve camada de farinha de rosca já temperada e fritas em óleo bem quente. Você pode levá-las nas versões grande ou média, para acompanhar seu sanduíche. Têm um sabor único. Uma verdadeira delícia!`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "16,90",
        Category: Categories[1]
    },
    {
        Image: "img/Trio-Furioso.png",
        Title: "Trio Furioso",
        Description: `Pra que escolher um só, se você pode ter todos? Batata frita com molho sabor cheddar, bacon, BK® Franguinho e Onion Rings com Molho Furioso à base de mostarda e pimenta.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "27,90",
        Category: Categories[1]
    },
    {
        Image: "img/Suco-Uva.png",
        Title: "Suco Natural One® Uva",
        Description: `Se você prefere uma opção mais saudável e 100% natural, nos restaurantes Burger King® você pode escolher o delicioso suco Natural One® de Uva.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "16,90",
        Category: Categories[2]
    },
    {
        Image: "img/Pepsi.png",
        Title: "Pepsi®",
        Description: `Um refrigerante geladinho na medida certa para te refrescar e acompanhar seu sanduíche preferido. E o melhor: é free refill.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "16,90",
        Category: Categories[2]
    },
    {
        Image: "img/Guarana.png",
        Title: "Guaraná Antárctica®",
        Description: `Um refrigerante geladinho na medida certa para te refrescar e acompanhar seu sanduíche preferido. E o melhor: é free refill.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "16,90",
        Category: Categories[2]
    },
    {
        Image: "img/H2O-Limao.png",
        Title: "H2OH!® Limão",
        Description: `Quer mais leveza no seu pedido? Sabor refrescante de H2OH!® Limão.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "16,90",
        Category: Categories[2]
    },
    {
        Image: "img/Mix-Pistache-Brownie.png",
        Title: "BK® Mix Pistache com brownie",
        Description: `O delicioso BK® Mix Pistache com brownie, mix sabor baunilha e calda Pistache com Brownie`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "19,90",
        Category: Categories[3]
    },
    {
        Image: "img/Balde-Ovomaltine.png",
        Title: "Balde Ovomaltine®",
        Description: `O balde é o favorito de todos. Feito para compartilhar com todo mundo. Esta versão vem no sabor Ovomaltine®.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "24,90",
        Category: Categories[3]
    },
    {
        Image: "img/Shake-Morango.png",
        Title: "Shake de Morango",
        Description: `O Shake pode ser sua sobremesa ou seu acompanhamento. Shake à base de baunilha com sabor morango e calda de morango.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "17,90",
        Category: Categories[3]
    },
    {
        Image: "img/Casquinha-Nutella.png",
        Title: "Casquinha Recheada com Nutella®",
        Description: `Deliciosa casquinha recheada com Nutella® e mix sabor baunilha.`,
        DescriptionImgCard: "*Imagem meramente ilustrativa.", 
        Price: "6,50",
        Category: Categories[3]
    },
]
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".carousel-slider");
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".carousel-dots");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    generateCards();
    if (!slider) return;

    let currentIndex = 0;
    const totalSlides = slides.length;
    let autoSlideInterval;

    function goToSlide(index) {
        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        slider.style.transform = `translateX(-${index * 100 / totalSlides}%)`;
        currentIndex = index;
        updateDots();
    }

    function createDots() {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement("div");
            dot.classList.add("dot");
            dot.addEventListener("click", () => {
                goToSlide(i);
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 3000);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    prevBtn.addEventListener("click", () => {
        goToSlide(currentIndex - 1);
        resetAutoSlide();
    });

    nextBtn.addEventListener("click", () => {
        goToSlide(currentIndex + 1);
        resetAutoSlide();
    });
    
    function init() {
        createDots();
        goToSlide(0);
        startAutoSlide();
    }

    init();
});

const filterButtons = document.querySelectorAll(".filterButtons button");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("btnActive"));
        button.classList.add("btnActive");
        generateCards();
    });
});


function generateCards(){
    var html = '';
    var filteredData = data.filter(i => i.Category == document.getElementsByClassName('btnActive')[0].innerHTML);
    filteredData.forEach((item) => {
        html += `                
                <div class="cardapioCard">
                    <div class="imgCard">
                        <img src="${item.Image}">
                    </div>
                    <div class="informationsCard">
                        <h3 class="titleCard">${item.Title}</h3>
                        <p class="descriptionCard">${item.Description}</p>
                        <p class="descriptionImgCard">${item.DescriptionImgCard}</p>
                        <div class="footerCard">
                            <p class="priceCard">R$ ${item.Price}</p>
                            <button class="btnCard">Peça Agora</button>
                        </div>
                    </div>
                </div>`
    })

    document.getElementById('cardapio').innerHTML = html;
    document.getElementById('categoryTitle').innerHTML = filteredData[0].Category;
}