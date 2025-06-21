
const PricingSection = () => {
  const plans = [
    {
      duration: '1',
      period: 'MÊS',
      price: 'R$ 30,00'
    },
    {
      duration: '2',
      period: 'MESES',
      price: 'R$ 50,00'
    }
  ];

  return (
    <div className="py-16 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <button className="bg-yellow-500 text-black px-8 py-3 rounded-full font-bold text-xl mb-8">
            PLANOS
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-full w-32 h-32 mx-auto mb-6 flex flex-col items-center justify-center">
                <div className="text-4xl font-bold text-black">{plan.duration}</div>
                <div className="text-sm font-bold text-black">{plan.period}</div>
              </div>
              <div className="bg-white rounded-lg py-4 px-6 inline-block">
                <div className="text-2xl font-bold text-matrix-green">{plan.price}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-matrix-green text-black px-8 py-4 rounded-lg font-bold text-xl hover:bg-matrix-green-dark transition-colors">
            📞 SUPORTE!
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
