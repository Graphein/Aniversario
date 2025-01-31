import React, { useState } from 'react';
import { Gift, Heart } from 'lucide-react';

function App() {
  const [showGift, setShowGift] = useState(false);

  return (
    <div className="min-h-screen bg-rose-50">
      {/* Hero Section */}
      <div 
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Feliz Aniversário, Amor!</h1>
            <p className="text-lg sm:text-xl">01 de Fevereiro de 2025</p>
          </div>
        </div>
      </div>

      {/* Nossa História */}
      <div className="max-w-4xl mx-auto py-8 sm:py-16 px-4">
        <div className="text-center mb-8 sm:mb-12">
          <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-rose-500 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Nossa História</h2>
          <div className="prose prose-sm sm:prose-lg mx-auto text-gray-600 px-4 sm:px-0">
            <p className="mb-4">
              Tudo começou de forma inesperada, quando entrei para a staff de um jogo. 
              Quem diria que, algum tempo depois, você também faria parte da equipe? 
              Lembro perfeitamente do momento em que você disse: "Oi, Graphein." 
              Foi ali que meu coração perdeu o rumo.
            </p>

            <p className="mb-4">
              É engraçado pensar que eu estava prestes a deixar o jogo. Já tinha decidido parar, até que recebi um convite para a staff. 
              Em uma única noite, combinei um couro lendário e decidi continuar jogando. Imagine só se eu tivesse vendido minha conta... 
              nunca teria te conhecido. E se você não tivesse entrado para a staff? Tudo seria diferente.
            </p>

            <p className="mb-4">
              Tudo começou com “Outback” e, pouco a pouco, nossas conversas foram se tornando mais frequentes no Discord. 
              Não demorou muito para migrarmos para o WhatsApp. As ligações se tornaram rotina, e foi aí que percebemos algo especial: 
              existia um clima entre nós.
            </p>

            <p className="mb-4">
              Alguns meses depois, você já estava apaixonada por mim, enquanto eu ainda estava me encontrando. Fui um idiota, admito. 
              Poderíamos estar juntos há muito tempo, mas acredito que tudo o que aconteceu entre nós deixou nosso relacionamento muito 
              mais forte e profundo.
            </p>

            <p className="mb-4">
              Meu amor por você foi algo inexplicável, porque aconteceu de forma tão natural e tranquila. Com o tempo, você me mostrou 
              o que realmente importa na vida. Sei que, às vezes, foi difícil para você esperar tanto, mas, graças a Deus, deu certo. 
              Finalmente, decidimos dar um passo maior: ficarmos juntos de verdade, com seriedade e planos para nos vermos. Mesmo que 
              tenha demorado, cada momento valeu a pena.
            </p>

            <p className="mb-4">
              Um ano antes de a gente ficar sério, eu esqueci seu aniversário — que burro! E hoje, aqui estou eu, criando um site para 
              te dar parabéns, fruto do curso que você me deu. Pela minha conta, que sou inimigo do português e da matemática, 
              já fazem 28 dias que estou trabalhando nisso, mas no fundo, vale a pena. Por você, eu faço tudo.
            </p>

            <p className="mb-4">
              Nesse tempo todo, passamos por perrengues antes de nos vermos pessoalmente: ciúmes, brigas, inseguranças da minha parte. 
              Mas confesso que, nesse relacionamento, aprendi muita coisa e adquiri muita maturidade com você. Às vezes, acabo estourando 
              por motivos que fico quieto, deixando a maré me levar, mas chega um momento que viro panela de pressão e não consigo mais 
              me conter.
            </p>

            <p className="mb-4">
              Até que um dia abri meu Instagram e vi que o Travis Scott seria atração do Rock in Rio. Não poderia perder a chance de 
              ver Mozzi e o Travis. Quando finalmente chegamos no Ibis, eu sentei na cama, fiquei te olhando por um tempo e pensei: 
              "Como sou trouxa, poderia ter vindo antes."
            </p>

            <p className="mb-4">
              Você tem ideia de como foi? Saí de Alfredo Marcondes, uma cidade com 4 mil habitantes, e fui para o Rio de Janeiro com 
              o coração na mão. Fui pegar o avião, em choque, porque o avião da Voepass tinha caído, e pensei: "Não é possível, 
              nunca sai de casa e o avião cai. Isso é para acabar!" Com o coração na mão, quando desci no Rio, eu sabia que finalmente 
              iria te abraçar e poder dizer "te amo" pessoalmente. Confesso: perdi a postura total por você.
            </p>

            <p className="mb-4">
              A gente no Rock in Rio juntos, cantando "Goosebumps". Puta que pariu, aquela cena de você com os braços abertos cantando 
              supera qualquer coisa. Quando o Travis cantou "My Eyes", por um momento eu te olhei e pensei: "Não é possível, 
              é isso que estou vendo?" E graças a você, consegui realizar dois sonhos. Sou muito grato por isso.
            </p>

            <p className="mb-4">
              A pior parte de tudo é vir embora do Rio, vontade de chorar do caramba, porque você vive muitos momentos bons e ainda mais 
              com a pessoa que ama. A sensação de estar tão perto de você, de ter vivido tanto junto e, de repente, ter que ir embora, 
              é como se um pedaço de mim ficasse lá.
            </p>

            <p className="mb-4">
              Mas eu sei que, apesar da distância, tudo o que vivemos vai ficar guardado em mim, e logo, em breve, vou poder te ver de novo. 
              Cada momento ao seu lado é mais valioso do que qualquer despedida, porque é isso que nos mantém juntos, não importa onde estivermos.
            </p>

            <p className="mb-4">
              A gente planejou outra viagem, mas nem tudo saiu como esperávamos. Alguns imprevistos, cotoveladas e, claro, o pedido ainda não 
              foi feito — mas sei que ele vai acontecer. Embora a gente não esteja passando por uma situação muito boa agora, somos fortes. 
              Estamos há três anos conversando, e em breve, vamos celebrar dois anos juntos. Firmes, confiantes de que podemos superar tudo.
            </p>

            <p className="mb-4">
              Você me pediu um tempo, e eu te dei. Mas no fundo, sei que vou lutar por nós. Hoje é um dia feliz, e quero focar nos momentos 
              bons que vivemos. Esses momentos que construímos, que fazem a nossa história tão especial e que me fazem ter a certeza de que 
              juntos podemos superar qualquer coisa.
            </p>

            <p className="mb-4">
              E sabe o que mais eu ganhei nessa relação? Você me mostrou o quanto é importante ter Deus na vida. Sem Ele, a gente não é nada, 
              e fico imensamente grato por tudo que você me ensinou, por ter me ajudado a enxergar o que realmente importa. Você fez a diferença 
              na minha vida de uma forma que nem imagina, e sou grato a Deus todos os dias por ter você ao meu lado.
            </p>

            <p className="mb-4">
              Obrigado por nunca desistir de mim. Eu te amo muito, você é a segunda pessoa mais importante da minha vida, porque, em primeiro 
              lugar, está Deus.
            </p>

          </div>
        </div>

        {/* Galeria de Fotos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-16">
          <img 
            src="https://i.imgur.com/q9qfHzs.jpeg"
            alt="Momento especial 1" 
            className="rounded-lg shadow-lg hover:scale-105 transition-transform w-full h-48 sm:h-80 object-cover"
          />
          <img 
            src="https://i.imgur.com/f3RqF6U.jpeg" 
            alt="Momento especial 2" 
            className="rounded-lg shadow-lg hover:scale-105 transition-transform w-full h-48 sm:h-80 object-cover"
          />
        </div>

        {/* Presente Especial */}
        <div className="text-center px-4 sm:px-0">
          <button
            onClick={() => setShowGift(true)}
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-colors"
          >
            <Gift className="w-5 h-5 sm:w-6 sm:h-6" />
            Clique para ver seu presente especial
          </button>

          {showGift && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-lg p-6 sm:p-8 max-w-[90%] sm:max-w-md text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Seu Presente Especial</h3>
                <p className="mb-6 text-sm sm:text-base">
                  Amor, seu presente especial está esperando por você no nosso restaurante favorito às 20h.
                  Vista seu melhor sorriso e venha preparada para uma noite inesquecível! ❤️
                </p>
                <button
                  onClick={() => setShowGift(false)}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;