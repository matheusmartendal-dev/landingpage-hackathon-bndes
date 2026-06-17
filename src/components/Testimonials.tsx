import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, HelpCircle, ChevronDown, FileText, ArrowUpRight } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function Testimonials() {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "1. Para quais perfis é o Hackathon Microcrédito?",
      answer: "Os participantes do Hackathon Microcrédito devem se enquadrar em algum dos seguintes perfis: Especialista em UX/Design, Negócio, Marketing, Desenvolvedor(a) e ou Entusiasta em microcrédito."
    },
    {
      question: "2. Preciso ter uma equipe formada para me inscrever?",
      answer: "As inscrições podem acontecer de forma individual, porém, respeitando a capacidade de 5 pessoas. Caso você tenha realizado a inscrição de forma individual, durante os dias 03 a 07 de outubro serão focados na formação das equipes entre os participantes."
    },
    {
      question: "3. Posso participar sozinho?",
      answer: "A inscrição é individual, mesmo para os participantes que já tenham equipe formada. Se você não conhece ninguém que toparia participar disso com você, não se preocupe! Durante os dias 03 a 07 de outubro, será liberado acesso ao nosso canal no Discord App, assim todos poderão se conectar entre si para formar novas equipes e/ou incluir mais integrantes (claro, tudo dentro das diretrizes do regulamento)."
    },
    {
      question: "4. Os projetos que eu desenvolver junto com a minha equipe são de propriedade de quem?",
      answer: "A solução que foi desenvolvida pelo do grupo deve ser código-aberto, podendo ser utilizada livremente pelos participantes que a idealizaram, mas também pela sociedade e o BNDES."
    },
    {
      question: "5. Quanto custa participar do Hackathon Microcrédito?",
      answer: "Nadinha! Zero reais! Nothing! Você não precisa pagar para se inscrever e participar do Hackathon."
    },
    {
      question: "6. Posso participar de onde eu estiver?",
      answer: "Sim! Este Hackathon é online. Você pode participar de qualquer lugar do mundo."
    },
    {
      question: "7. Como vão funcionar as mentorias?",
      answer: "Todo processo de mentoria é acompanhado via plataforma Shawee e Discord App. As pessoas que participam da mentoria atendem os grupos individualmente e, após cada rodada, o ciclo se repete com o próximo grupo que marcou um horário com o mentor.\n\nVeja abaixo um breve tutorial de como realizar o agendamento da mentoria com o @ShaweeBot:\n\n1º Vá na conversa privada com o @SdP | Shawee BOT e envie uma das palavras-chaves a seguir: “ajuda”, “comandos” ou “help”\n2º Para visualizar as mentorias disponíveis digite “lista de mentorias” ou apenas “mentorias”\n3º Após combinar com sua equipe qual é a melhor mentoria, agende um horário digitando “agendar mentoria #ID_DA_MENTORIA” ou apenas “agendar mentoria ID_DA_MENTORIA” (sem a hashtag)\n\nSeguiu esses passos? Agora o @SdP | Shawee BOT enviará um e-mail para o mentor deixando toda a equipe em cópia (CC), o mentor conduzirá o restante da jornada para que vocês encontrem a melhor plataforma para as sessões de mentoria."
    },
    {
      question: "8. Qual o papel dos mentores durante o evento?",
      answer: "É a luz no fim do túnel! Os mentores são pessoas com domínio de campo e experiência para dar conselhos que realmente funcionam. Importante lembrar que nenhum deles vai dar respostas para o grupo, mas sim estimular a equipe para que encontrem as respostas que precisam. Os mentores existem para gerar “provocações”, mas não entenda isso como algo ruim, “construtivo” é a palavra da vez aqui."
    },
    {
      question: "9. O que um Hackathon online pode trazer para minha vida?",
      answer: "Participar de Hackathons pode contribuir (e MUITO) para sua carreira, ser um potencializador de oportunidades e conectá-lo com o mercado de grandes empresas e startups. Além disso, é uma chance de trabalhar a comunicação, aprender com as skills do próximo e exercitar a cooperatividade e sua habilidade de escutar."
    },
    {
      question: "10. Como será a premiação?",
      answer: "A premiação é dividida de acordo com as seguintes colocações:\n\n• 1° LUGAR (para cada um dos Participantes da equipe): R$ 15.000,00 (quinze mil reais)\n• 2° LUGAR (para cada um dos Participantes da equipe): R$ 10.000,00 (dez mil reais)\n• 3° LUGAR (para cada um dos Participantes da equipe): R$ 5.000,00 (cinco mil reais)"
    },
    {
      question: "11. Haverá certificado de participação?",
      answer: "O certificado é emitido ao término do Hackathon na própria plataforma da Shawee, porém é necessário que a equipe tenha realizado submissão do projeto para ter acesso à essa solicitação. Caso contrário, não será possível emiti-lo."
    },
    {
      question: "12. O que é o entregável do meu projeto?",
      answer: "Todas as equipes participantes deverão entregar um vídeo Pitch, vídeo Demo, apresentação e os códigos utilizados na solução."
    },
    {
      question: "13. Como entregar o meu projeto?",
      answer: "Você precisará fazer a submissão, obrigatoriamente, na plataforma da Shawee, até a data limite da submissão. Para entender melhor como realizá-la, siga as instruções disponíveis no GitBook oficial da plataforma (https://shawee-oficial.gitbook.io/shawee/)."
    },
    {
      question: "14. O que e como eu devo publicar na plataforma da Shawee?",
      answer: "A submissão do Pitch da solução, vídeo Demo, apresentação e os códigos utilizados na solução do Hackathon Microcrédito deveram ser realizadas através da Plataforma da Shawee, até as 23h59 do dia 09/10/2022 (domingo), atendendo obrigatoriamente às exigências previstas no Regulamento, das seguintes formas:\n\n• Video Pitch: vídeo disponibilizado na plataforma designada, de até 3 (três) minutos, na estrutura de um pitch, ou seja, buscando atrair e manter a atenção do espectador, apresentando a análise de dados desenvolvida e a tecnologia utilizada. Vídeos que excedam o tempo estipulado de 3 (três) minutos terão o conteúdo apresentado no tempo sobressalente desconsiderado na avaliação.\n\n• Link do repositório público dos códigos-fonte no GitHub (https://github.com/): o link deve conter um arquivo README, com informações sobre o trabalho. Recomenda-se seguir as boas práticas com as commits propostas em https://www.conventionalcommits.org/en/v1.0.0-beta.2/. Os trabalhos passarão por um processo de revisão qualitativa de código, observando conteúdo dos repositórios e o uso de boas práticas.\n\n• Link da solução: link de hospedagem da solução desenvolvida. Este item não dispensa a obrigatoriedade de a solução estar claramente apresentada no Vídeo. Os participantes deverão fornecer todas as informações necessárias para a avaliação dos trabalhos, incluindo senhas, usuários e quaisquer outros recursos necessários à sua execução, devendo ser informados todos os procedimentos para sua instalação."
    },
    {
      question: "15. Quando acabam as inscrições?",
      answer: "As inscrições vão até o dia 30/09 às 23h59, mas as vagas são limitadas. Então, aproveite para se inscrever logo."
    },
    {
      question: "16. Qual é a programação do Hackathon Microcrédito?",
      answer: "A programação do evento é a seguinte:\n\n• 04/10 às 19h – Live de esquenta;\n• 05/10 às 19h – Live de esquenta;\n• 06/10 às 19h – Live de esquenta;\n• 07/10 – Live de Abertura;\n• 07/10 a 09/10 – Sessão de mentoria;\n• 09/10 até às 23h59 – Submissão de projetos;\n• 10/10 a 17/10 – Período de avaliação dos jurados da primeira fase;\n• 18/10 às 19h – Apresentação de times vencedores."
    },
    {
      question: "17. Qual é o critério de avaliação dos projetos?",
      answer: "Conforme Regulamento."
    },
    {
      question: "18. Não encontrei minha dúvida no FAQ, como proceder?",
      answer: "Envie um e-mail para hi@shawee.io, ficaremos felizes em te ajudar."
    }
  ];

  return (
    <section id="rules-faq" className="py-28 bg-[#fafafa] text-zinc-900 overflow-hidden relative border-b border-zinc-100 scroll-mt-20">
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#008e47]/5 rounded-full blur-[80px]" />

      <div className="w-full max-w-[1240px] mx-auto px-6 relative z-10 text-left">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Regulamento download & Info */}
          <div className="lg:col-span-5 text-left lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#008e47]/5 text-xs uppercase tracking-widest text-[#008e47] mb-6 font-bold border border-[#008e47]/20 shadow-[0_4px_12px_rgba(0,142,71,0.03)]">
              <span>//</span> Materiais Oficiais
            </span>
            
            <h2 className="text-3xl sm:text-5xl font-light tracking-[-0.04em] leading-[1.05] text-[#030712] font-title mb-6">
              Regulamento & <br />
              <span className="font-semibold italic text-[#005782]">Diretrizes</span>
            </h2>

            <p className="text-zinc-600 text-sm leading-relaxed max-w-[360px] font-sans font-normal mb-8">
              Acesse a documentação completa em PDF para entender os critérios de avaliação, a divisão das premiações e as políticas de propriedade intelectual.
            </p>

            {/* Regulamento Box Card */}
            <div className="bg-white border border-zinc-200/90 rounded-3xl p-6 shadow-sm relative overflow-hidden max-w-[360px]">
              <div className="flex gap-4 items-start mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#008e47]/5 border border-[#008e47]/10 flex items-center justify-center text-[#008e47] shrink-0">
                  <FileText className="w-5 h-5 text-[#008e47]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 leading-none">Regulamento.pdf</h4>
                  <p className="text-[10px] text-zinc-400 mt-1.5 uppercase font-mono font-bold">Tamanho: 1.4 MB — Edição Final</p>
                </div>
              </div>
              
              <a
                href="https://inovacaoaberta.bndes.gov.br/Edital%20Hackathon.pdf"
                target="_blank"
                rel="noreferrer"
                className="h-10 w-full bg-[#008e47] hover:bg-[#007038] text-white text-[11px] font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 group shadow-[0_4px_12px_rgba(0,142,71,0.12)] hover:shadow-lg cursor-pointer"
              >
                Acesse o Regulamento
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: FAQ Collapsible Accordions list */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest mb-6">
              <HelpCircle className="w-4 h-4 text-[#008e47]" /> Perguntas Frequentes — F.A.Q
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFAQIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-zinc-200/90 rounded-[22px] overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFAQIndex(isOpen ? null : idx)}
                      className="w-full p-6 text-left flex justify-between items-center gap-4 hover:bg-zinc-50/50 transition-colors cursor-pointer"
                    >
                      <span className="text-zinc-900 text-sm sm:text-base font-bold font-title">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-[#008e47]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden border-t border-zinc-100"
                        >
                          <div className="p-6 bg-zinc-50/40 text-zinc-650 text-xs sm:text-sm leading-relaxed font-sans font-medium whitespace-pre-line">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* General FAQ Link button */}
            <div className="pt-4 text-left">
              <a
                href="mailto:hi@shawee.io"
                className="inline-flex h-10 px-5 rounded-full border border-zinc-250 hover:border-zinc-800 text-zinc-700 hover:text-zinc-900 items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-wider transition-colors bg-white shadow-sm"
              >
                Alguma outra dúvida? Envie um e-mail
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
