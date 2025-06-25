
const PricingSection = () => {
  const plans = [
    {
      name: 'BÁSICO',
      screens: '1 Tela',
      price: 'R$ 20,00',
      period: '/mês',
      features: ['Qualidade HD', 'Filmes e Séries', 'Suporte 24h'],
      popular: false,
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      name: 'PREMIUM',
      screens: '2 Telas',
      price: 'R$ 30,00',
      period: '/mês',
      features: ['Qualidade 4K', 'Canais ao Vivo', 'Download Offline', 'Suporte Priority'],
      popular: true,
      gradient: 'from-red-600 to-red-800'
    },
    {
      name: 'ELITE',
      screens: 'Ilimitado',
      price: 'R$ 55,00',
      period: '/3 meses',
      features: ['Qualidade 4K Ultra', 'Todos os Canais', 'Download Ilimitado', 'Suporte VIP', 'Acesso Antecipado'],
      popular: false,
      gradient: 'from-yellow-600 to-yellow-800'
    }
  ];

  const handlePlanClick = (planName: string, price: string) => {
    const phoneNumber = "5544991082160";
    const message = `🎬 Quero assinar o plano ${planName} por ${price}! Pode me ajudar?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Escolha Seu <span className="text-red-600">Plano</span>
          </h2>
          <p className="text-xl text-gray-300">
            Todos os planos com 3 dias de teste grátis!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative transform transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'md:-translate-y-4' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-red-600 text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                  🔥 MAIS POPULAR
                </div>
              )}
              
              <div className={`bg-gradient-to-br ${plan.gradient} rounded-2xl p-8 text-white border-2 ${
                plan.popular ? 'border-red-600 shadow-lg shadow-red-600/30' : 'border-gray-700'
              } hover:border-red-600 transition-all duration-300`}>
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-sm text-gray-300 mb-4">{plan.screens}</div>
                  <div className="text-4xl font-bold text-red-400 mb-1">{plan.price}</div>
                  <div className="text-gray-300">{plan.period}</div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <span className="text-red-400 mr-3">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handlePlanClick(plan.name, plan.price)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular 
                      ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-red-600/50' 
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  } transform hover:scale-105`}
                >
                  {plan.popular ? '🚀 ESCOLHER AGORA' : 'SELECIONAR PLANO'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-red-600/20 border border-red-600 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-2">
              🎁 Garantia Total de Satisfação
            </h3>
            <p className="text-gray-300">
              Não gostou? Cancelamos e devolvemos seu dinheiro em até 7 dias!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
