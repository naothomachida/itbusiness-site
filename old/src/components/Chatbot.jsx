import React, { useState, useRef, useEffect } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Olá! 👋 Sou o assistente virtual da Terragon Labs. Como posso ajudá-lo hoje?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    pain: '',
    source: ''
  });
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sdrFlow = [
    {
      field: 'name',
      question: "Qual é o seu nome?",
      type: 'text'
    },
    {
      field: 'email',
      question: "Qual é o seu e-mail?",
      type: 'email'
    },
    {
      field: 'phone',
      question: "Qual é o seu telefone/WhatsApp?",
      type: 'tel'
    },
    {
      field: 'company',
      question: "Qual é o nome da sua empresa?",
      type: 'text'
    },
    {
      field: 'service',
      question: "Qual serviço você tem interesse?",
      type: 'select',
      options: [
        'Desenvolvimento de Software',
        'Inteligência Artificial',
        'Cibersegurança',
        'Aceleração de Startups',
        'Consultoria Técnica',
        'Outro'
      ]
    },
    {
      field: 'budget',
      question: "Qual é o orçamento previsto para o projeto?",
      type: 'select',
      options: [
        'Até R$ 10.000',
        'R$ 10.000 - R$ 50.000',
        'R$ 50.000 - R$ 100.000',
        'R$ 100.000 - R$ 500.000',
        'Acima de R$ 500.000',
        'Ainda não definido'
      ]
    },
    {
      field: 'timeline',
      question: "Qual é o prazo esperado para o projeto?",
      type: 'select',
      options: [
        'Urgente (até 30 dias)',
        '1-3 meses',
        '3-6 meses',
        '6-12 meses',
        'Mais de 1 ano',
        'Flexível'
      ]
    },
    {
      field: 'pain',
      question: "Qual é o principal desafio que precisa resolver?",
      type: 'textarea'
    },
    {
      field: 'source',
      question: "Como conheceu a Terragon Labs?",
      type: 'select',
      options: [
        'Google/Busca',
        'Redes Sociais',
        'Indicação',
        'LinkedIn',
        'Site/Blog',
        'Evento',
        'Outro'
      ]
    }
  ];

  const addMessage = (text, isBot = false) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      isBot,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleSendMessage = () => {
    if (!currentInput.trim()) return;

    const userMessage = currentInput;
    addMessage(userMessage, false);
    setCurrentInput('');

    if (currentStep < sdrFlow.length) {
      const currentField = sdrFlow[currentStep];
      setUserInfo(prev => ({
        ...prev,
        [currentField.field]: userMessage
      }));

      setTimeout(() => {
        if (currentStep + 1 < sdrFlow.length) {
          const nextStep = sdrFlow[currentStep + 1];
          addMessage(nextStep.question, true);
          setCurrentStep(currentStep + 1);
        } else {
          const finalInfo = {
            ...userInfo,
            [currentField.field]: userMessage
          };

          console.log('=== DADOS COLETADOS DO LEAD ===');
          console.log('Nome:', finalInfo.name);
          console.log('E-mail:', finalInfo.email);
          console.log('Telefone:', finalInfo.phone);
          console.log('Empresa:', finalInfo.company);
          console.log('Serviço de Interesse:', finalInfo.service);
          console.log('Orçamento:', finalInfo.budget);
          console.log('Prazo:', finalInfo.timeline);
          console.log('Desafio Principal:', finalInfo.pain);
          console.log('Fonte:', finalInfo.source);
          console.log('Data/Hora:', new Date().toLocaleString());
          console.log('================================');

          addMessage(
            `Perfeito, ${finalInfo.name}! 🎉\n\nObrigado por compartilhar essas informações. Nossa equipe comercial entrará em contato em breve através do e-mail ${finalInfo.email} ou telefone ${finalInfo.phone}.\n\nEnquanto isso, você pode explorar nosso site para conhecer melhor nossos serviços!\n\n💼 Terragon Labs - Transformando ideias em soluções digitais`,
            true
          );
          setCurrentStep(sdrFlow.length);
        }
      }, 1000);
    } else {
      setTimeout(() => {
        addMessage("Como posso ajudá-lo com mais alguma coisa?", true);
      }, 1000);
    }
  };

  const handleOptionSelect = (option) => {
    setCurrentInput(option);
    handleSendMessage();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const openFullscreen = () => {
    setIsFullscreen(true);
    if (currentStep === 0) {
      setTimeout(() => {
        addMessage(sdrFlow[0].question, true);
      }, 500);
    }
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen && currentStep === 0) {
      setTimeout(() => {
        addMessage(sdrFlow[0].question, true);
      }, 500);
    }
  };

  const renderInput = () => {
    if (currentStep >= sdrFlow.length) {
      return (
        <div className="border-t border-gray-200 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary-blue"
            />
            <button
              onClick={handleSendMessage}
              className="bg-primary-blue text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
              </svg>
            </button>
          </div>
        </div>
      );
    }

    const currentQuestion = sdrFlow[currentStep];

    if (currentQuestion.type === 'select') {
      return (
        <div className="border-t border-gray-200 p-4">
          <div className="grid grid-cols-1 gap-2 mb-4">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionSelect(option)}
                className="p-3 text-left border border-gray-300 rounded-lg hover:border-primary-blue hover:bg-blue-50 transition-all"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="border-t border-gray-200 p-4">
        <div className="flex gap-2">
          {currentQuestion.type === 'textarea' ? (
            <textarea
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua resposta..."
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue resize-none"
              rows="3"
            />
          ) : (
            <input
              type={currentQuestion.type}
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua resposta..."
              className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:border-primary-blue"
            />
          )}
          <button
            onClick={handleSendMessage}
            className="bg-primary-blue text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2 21l21-9L2 3v7l15 2-15 2v7z"/>
            </svg>
          </button>
        </div>
      </div>
    );
  };

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex flex-col">
        {/* Header estilo WhatsApp */}
        <div className="bg-primary-blue text-white p-4 flex items-center gap-3">
          <button
            onClick={closeFullscreen}
            className="text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
          <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <h3 className="font-semibold">Terragon Labs</h3>
            <p className="text-sm text-blue-100">Assistente Virtual</p>
          </div>
        </div>

        {/* Mensagens */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl break-words ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'bg-primary-blue text-white'
                  }`}
                >
                  <p className="whitespace-pre-line">{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {renderInput()}
      </div>
    );
  }

  return (
    <>
      {/* Botão flutuante */}
      <div className="fixed bottom-6 right-6 z-40">
        {isOpen && (
          <div className="mb-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
            {/* Header do chat */}
            <div className="bg-primary-blue text-white p-4 rounded-t-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-sm">🤖</span>
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Terragon Labs</h4>
                  <p className="text-xs text-blue-100">Online</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={openFullscreen}
                  className="text-white hover:bg-blue-600 p-1 rounded transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                  </svg>
                </button>
                <button
                  onClick={toggleChat}
                  className="text-white hover:bg-blue-600 p-1 rounded transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Mensagens */}
            <div className="flex-1 overflow-y-auto p-3 bg-gray-50">
              <div className="space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-3 py-2 rounded-xl text-sm ${
                        message.isBot
                          ? 'bg-white text-gray-800'
                          : 'bg-primary-blue text-white'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.text}</p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input simplificado para modo compacto */}
            <div className="border-t border-gray-200 p-3">
              <button
                onClick={openFullscreen}
                className="w-full p-2 text-primary-blue border border-primary-blue rounded-lg hover:bg-blue-50 transition-colors text-sm"
              >
                Abrir chat completo
              </button>
            </div>
          </div>
        )}

        {/* Botão principal */}
        <button
          onClick={toggleChat}
          className="bg-primary-blue text-white w-16 h-16 rounded-full shadow-lg hover:bg-blue-600 transition-all transform hover:scale-105 flex items-center justify-center"
        >
          {isOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default Chatbot;