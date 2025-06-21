
import { useState } from 'react';

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const questions = [
    {
      question: "POSSO TESTAR ANTES DE ASSINAR?",
      answer: "Sim! Oferecemos um período de teste gratuito para que você possa experimentar nossos serviços antes de fazer a assinatura."
    },
    {
      question: "COMO É A INSTALAÇÃO?",
      answer: "A instalação é muito simples! Enviamos um tutorial completo e oferecemos suporte para configurar em qualquer dispositivo."
    },
    {
      question: "O APLICATIVO RECEBE ATUALIZAÇÃO?",
      answer: "Sim, nosso aplicativo recebe atualizações regulares com novos recursos, melhorias de performance e correções."
    },
    {
      question: "QUANTAS CONEXÕES POSSO USAR AO MESMO TEMPO?",
      answer: "Dependendo do plano escolhido, você pode usar de 1 a 4 conexões simultâneas em dispositivos diferentes."
    },
    {
      question: "QUAIS SÃO AS FORMAS DE PAGAMENTOS DISPONÍVEIS?",
      answer: "Aceitamos PIX, cartão de crédito, débito e transferência bancária. O pagamento é processado de forma segura."
    },
    {
      question: "SERÁ QUE MINHA INTERNET RODA O APLICATIVO?",
      answer: "Recomendamos uma conexão de pelo menos 10 Mbps para qualidade HD. Para 4K, ideal ter 25 Mbps ou mais."
    },
    {
      question: "PRECISO ENVIAR ALGUM DOCUMENTO OU DADOS PESSOAIS?",
      answer: "Não! Você só precisa fornecer um email válido e escolher sua forma de pagamento. Processo 100% digital."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const handleTestNow = () => {
    const phoneNumber = "5585856833127";
    const message = "Olá! Gostaria de experimentar o teste gratuito de 4 horas da MATRIX IPTV.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-xl mb-6">Teste gratuitamente agora mesmo</h2>
          <button 
            onClick={handleTestNow}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-colors inline-flex items-center gap-2"
          >
            📱 Experimentar por 4hrs
          </button>
        </div>

        <h3 className="text-red-500 text-3xl font-bold mb-8 text-center">Perguntas frequentes</h3>

        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full text-left p-4 text-white font-medium hover:bg-gray-700 transition-colors focus:outline-none"
              >
                {item.question}
              </button>
              {openQuestion === index && (
                <div className="px-4 pb-4 text-gray-300">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
