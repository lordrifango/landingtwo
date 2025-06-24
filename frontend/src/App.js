import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    contact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      contact: e.target.value
    });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.contact.trim()) {
      setError('Veuillez saisir votre numéro ou e-mail');
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
  };

  const LockIcon = () => (
    <svg className="w-12 h-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  const MegaphoneIcon = () => (
    <svg className="w-12 h-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
    </svg>
  );

  const TrophyIcon = () => (
    <svg className="w-12 h-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );

  return (
    <div className="min-h-screen bg-off-white">
      {/* Section 1: L'Accroche Principale */}
      <section className="pt-12 pb-8 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-violet-primary mb-6 font-poppins">
            Atteignez vos objectifs ensemble, en toute confiance.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-slate max-w-2xl mx-auto mb-8 font-poppins leading-relaxed">
            Tonty est la nouvelle application gratuite et sécurisée pour gérer vos cotisations et projets de groupe. 
            Dites adieu aux carnets, aux oublis et aux discussions sans fin pour savoir qui a payé.
          </p>

          {/* CTA Principal */}
          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Votre numéro ou e-mail"
                    value={formData.contact}
                    onChange={handleInputChange}
                    className={`w-full px-6 py-4 text-lg border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-primary transition-all duration-200 ${
                      error ? 'border-red-500' : 'border-gray-300 focus:border-violet-primary'
                    }`}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-2 text-left">{error}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-violet-primary hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
                >
                  Je veux un accès prioritaire !
                </button>
              </form>
              
              <p className="text-sm text-gray-400 mt-3">
                Sans spam, promis. Nous vous contacterons uniquement pour le lancement.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-success mb-4">
                  Merci ! Votre place est réservée.
                </h3>
                <p className="text-gray-slate">
                  Nous vous tiendrons au courant dès que Tonty sera disponible. 
                  Vous faites maintenant partie de nos tout premiers utilisateurs !
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Section 2: Le Visuel Émotionnel */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1747330666333-f9e2d1f8e6c6"
              alt="Femmes africaines célébrant leur réussite"
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Section 3: Les Bénéfices Clés */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Bénéfice 1 */}
            <div className="text-center">
              <LockIcon />
              <h3 className="text-xl font-bold text-gray-slate mb-4 font-poppins">
                Participez en toute sécurité
              </h3>
              <p className="text-gray-slate leading-relaxed">
                Vos contributions sont protégées par des technologies de pointe. 
                Transparence totale sur chaque transaction avec un système de notifications en temps réel.
              </p>
            </div>

            {/* Bénéfice 2 */}
            <div className="text-center">
              <MegaphoneIcon />
              <h3 className="text-xl font-bold text-gray-slate mb-4 font-poppins">
                Organisez sans effort
              </h3>
              <p className="text-gray-slate leading-relaxed">
                Créez et gérez vos groupes de cotisation en quelques clics. 
                Invitations automatiques, rappels intelligents et suivi en temps réel.
              </p>
            </div>

            {/* Bénéfice 3 */}
            <div className="text-center">
              <TrophyIcon />
              <h3 className="text-xl font-bold text-gray-slate mb-4 font-poppins">
                Réalisez tous vos projets
              </h3>
              <p className="text-gray-slate leading-relaxed">
                Mariage, études, business... Planifiez et atteignez vos objectifs financiers 
                avec le soutien de votre communauté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Footer */}
      <footer className="py-8 px-4 bg-off-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400">
            © 2024 Tonty. Tous droits réservés.
          </p>
          <a 
            href="mailto:contact@tonty.app" 
            className="text-sm text-violet-primary hover:text-violet-700 transition-colors duration-200 mt-2 inline-block"
          >
            Nous contacter
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;