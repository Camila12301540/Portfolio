const botaoME = document.getElementById('botaomodoes');
const header = document.querySelector('header');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    header.classList.toggle('dark');
    header.classList.toggle('light');
    console.log(header.classList);
});

const botaocores = document.getElementById('botaomodoes');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botaocores.classList.toggle('botaocor2');
    botaocores.classList.toggle('botaocorl');
    console.log(botaocores.classList);
});

const main = document.querySelector('main');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    main.classList.toggle('dark-main');
    main.classList.toggle('light-main');
    console.log(main.classList);
});

const main2 = document.getElementById('buttons');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    main2.classList.toggle('dark-main2');
    main2.classList.toggle('light-main2');
    console.log(main2.classList);
});

const botaopro = document.getElementById('buttonBa');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botaopro.classList.toggle('dark-button-a');
    botaopro.classList.toggle('light-button-a');
    console.log(botaopro.classList);
});

const botaoproj = document.getElementById('buttonBb');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botaoproj.classList.toggle('dark-button-b');
    botaoproj.classList.toggle('light-button-b');
    console.log(botaoproj.classList);
});

const botaoproje = document.getElementById('buttonBc');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botaoproje.classList.toggle('dark-button-c');
    botaoproje.classList.toggle('light-button-c');
    console.log(botaoproje.classList);
});

const botaoimgc = document.getElementById('proj_c');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botaoimgc.classList.toggle('dark-proj_c');
    botaoimgc.classList.toggle('light-proj_c');
    console.log(botaoimgc.classList);
});

const botaoimgmysql = document.getElementById('proj_mysql');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botaoimgmysql.classList.toggle('dark-proje_mysql');
    botaoimgmysql.classList.toggle('light-proje_mysql');
    console.log(botaoimgmysql.classList);
});

const botaoimghtml = document.getElementById('proj_html');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botaoimghtml.classList.toggle('dark-proj_html');
    botaoimghtml.classList.toggle('light-proj_html');
    console.log(botaoimghtml.classList);
});

const footer = document.querySelector('footer');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    footer.classList.toggle('dark-footer');
    footer.classList.toggle('light-footer');
    console.log(footer.classList);
});

const svg = document.getElementById('svgs');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    svg.classList.toggle('svgs-dark');
    svg.classList.toggle('svgs-light');
    console.log(svg.classList);
});

const insta = document.getElementById('insta');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    insta.classList.toggle('insta-dark');
    insta.classList.toggle('insta-light');
    console.log(insta.classList);
});

const email = document.getElementById('Email');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    email.classList.toggle('email-dark');
    email.classList.toggle('email-light');
    console.log(email.classList);
});

const main_proj_c = document.getElementById('buttons_main');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    main_proj_c.classList.toggle('dark-main2');
    main_proj_c.classList.toggle('light-main2');
    console.log(main_proj_c.classList);
});

const butto = document.getElementById('butto-proj');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    butto.classList.toggle('butto-dark');
    butto.classList.toggle('butto-light');
    console.log(butto.classList);
});

const inputs = document.getElementById('inputs');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    inputs.classList.toggle('inputs-dark');
    inputs.classList.toggle('inputs-light');
    console.log(inputs.classList);
});

const ps = document.getElementById('ps');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    ps.classList.toggle('ps-dark');
    ps.classList.toggle('ps-light');
    console.log(ps.classList);
});

const ps_e = document.getElementById('ps-e');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    ps_e.classList.toggle('ps-dark');
    ps_e.classList.toggle('ps-light');
    console.log(ps_e.classList);
});

const ps_m = document.getElementById('ps-m');

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    ps_m.classList.toggle('ps-dark');
    ps_m.classList.toggle('ps-light');
    console.log(ps_m.classList);
});

const input_n = document.getElementById("input-n");

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    input_n.classList.toggle('input-dark');
    input_n.classList.toggle('input-light');
    console.log(input_n.classList);
});

const input_e = document.getElementById("input-e");

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    input_e.classList.toggle('input-dark');
    input_e.classList.toggle('input-light');
    console.log(input_e.classList);
});

const message = document.getElementById("message");

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    message.classList.toggle('message-dark');
    message.classList.toggle('message-light');
    console.log(message.classList);
});

const temaEscuroSalvo = localStorage.getItem('temaEscuro') === 'true';

if (temaEscuroSalvo) {
    document.getElementById("botao").classList.add('botao-dark')
}

function allternarTema() {
    const botao_cont = document.getElementById("botao");
    botao_cont.classList.toggle('botao-dark')
}

localStorage.setItem('temaEscuro', botao_cont)

botaoME.addEventListener('click',()=>{
    console.log('botao clicado')
    botao_cont.classList.toggle('botao-dark');
    botao_cont.classList.toggle('botao-light');
    console.log(botao_cont.classList);
});