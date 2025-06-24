import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    contact: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [showMissionModal, setShowMissionModal] = useState(false);

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

  const handleWhatsAppShare = () => {
    const message = encodeURIComponent(
      "🚀 Découvrez Tonty, la nouvelle app pour gérer vos cotisations de groupe en toute sécurité ! Rejoignez-moi pour un accès prioritaire : " + window.location.href
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const handleFacebookShare = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      'facebook-share-dialog',
      'width=626,height=436'
    );
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const openMissionModal = () => {
    setShowMissionModal(true);
  };

  const closeMissionModal = () => {
    setShowMissionModal(false);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        closeMissionModal();
      }
    };

    if (showMissionModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showMissionModal]);

  const LockIcon = () => (
    <svg className="w-12 h-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>
  );

  const ListIcon = () => (
    <svg className="w-12 h-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 17.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>
  );

  const GiftIcon = () => (
    <svg className="w-12 h-12 text-indigo-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H4.5a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-4 h-4 inline ml-1" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
            Tonty est la nouvelle application gratuite pour gérer vos cotisations et projets de groupe de manière simple et sécurisée. 
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
            <div className="max-w-lg mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-success mb-4">
                  Merci ! Votre place est réservée.
                </h3>
                <p className="text-gray-slate mb-6">
                  Une communauté est plus forte ensemble. Faites connaître Tonty aux membres de votre groupe pour qu'ils soient prêts dès le lancement !
                </p>
                
                {/* Boutons de partage */}
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsAppShare}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    Partager sur WhatsApp
                  </button>
                  
                  <button
                    onClick={handleFacebookShare}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Partager sur Facebook
                  </button>
                  
                  <button
                    onClick={handleCopyLink}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 relative"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    {copySuccess ? 'Lien copié !' : 'Copier le lien'}
                  </button>
                  
                  {/* Micro-texte de suggestion */}
                  <p className="text-xs text-gray-400 text-center mt-3">
                    <em>Idéal pour partager sur Instagram, TikTok ou par SMS !</em>
                  </p>
                </div>
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
              loading="lazy"
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
                Chaque contribution est enregistrée et visible de tous. Concentrez-vous sur vos projets en protégeant votre argent et votre réputation.
              </p>
            </div>

            {/* Bénéfice 2 */}
            <div className="text-center">
              <ListIcon />
              <h3 className="text-xl font-bold text-gray-slate mb-4 font-poppins">
                Organisez sans effort
              </h3>
              <p className="text-gray-slate leading-relaxed">
                Fini la charge mentale. Les rappels sont automatiques et le suivi des paiements est centralisé. Vous gagnez du temps pour ce qui compte vraiment.
              </p>
            </div>

            {/* Bénéfice 3 */}
            <div className="text-center">
              <GiftIcon />
              <h3 className="text-xl font-bold text-gray-slate mb-4 font-poppins">
                Réalisez tous vos projets
              </h3>
              <p className="text-gray-slate leading-relaxed">
                Mariage, études, business... Donnez vie à vos projets, qu'ils soient petits ou grands, grâce à la force de votre communauté.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: La Preuve Sociale Embryonnaire */}
      <section className="py-12 px-4 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-lg text-gray-slate text-center mb-8 font-poppins">
            Ce qu'elles attendent de Tonty...
          </h4>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Témoignage 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-slate italic mb-4 leading-relaxed">
                « Enfin une solution moderne pour gérer notre groupe sans stress. J'attends ça depuis des années ! »
              </p>
              <p className="text-sm text-gray-400 font-poppins">
                — Aïssatou, organisatrice de communauté à Dakar.
              </p>
            </div>

            {/* Témoignage 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <p className="text-gray-slate italic mb-4 leading-relaxed">
                « Pouvoir contribuer aux projets de la famille depuis Paris avec une preuve claire, ça va tout changer pour moi. »
              </p>
              <p className="text-sm text-gray-400 font-poppins">
                — Fatou, membre de la diaspora à Paris.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Footer */}
      <footer className="py-8 px-4 bg-off-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-400 mb-2">
            © 2024 Tonty.
          </p>
          <p className="text-sm text-gray-400">
            Construit avec ❤️ pour nos communautés. Découvrez notre{' '}
            <button 
              onClick={openMissionModal}
              className="text-violet-primary hover:text-violet-700 transition-colors duration-200 underline cursor-pointer bg-transparent border-none p-0 font-inherit"
            >
              mission
            </button>.
          </p>
        </div>
      </footer>

      {/* Modale Notre Mission */}
      {showMissionModal && (
        <div 
          className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeMissionModal}
        >
          <div 
            className="modal-content bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={closeMissionModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Photo des fondateurs */}
            <div className="text-center mb-6">
              <div className="bg-gradient-to-br from-violet-100 to-violet-200 rounded-2xl w-32 h-32 mx-auto flex items-center justify-center mb-4">
                <svg className="w-16 h-16 text-violet-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-violet-primary mb-6 font-poppins">
                Notre Mission
              </h3>
            </div>

            {/* Contenu de la mission */}
            <div className="text-gray-slate leading-relaxed mb-6">
              <p className="mb-4">
                Nous sommes <strong>Chérif Coulibaly</strong> et <strong>Yann-habib Koné</strong>. En grandissant au sein de nos communautés, nous avons vu la puissance de l'entraide et de la confiance pour réaliser de grandes choses. Mais nous avons aussi vu la charge mentale et les risques qui pèsent sur ceux qui organisent cette solidarité.
              </p>
              <p>
                Nous avons créé Tonty pour une raison simple : donner à nos communautés l'outil moderne et sécurisé qu'elles méritent. Notre mission est de transformer chaque tontine et chaque projet de groupe en une preuve de confiance, pour débloquer le potentiel économique et social de tout un continent.
              </p>
            </div>

            {/* Signature et liens */}
            <div className="text-center">
              <p className="text-gray-slate italic mb-4">
                — Chérif Coulibaly & Yann-habib Koné, Fondateurs de Tonty
              </p>
              <div className="founder-links space-x-6">
                <a 
                  href="https://linkedin.com/in/cherif-coulibaly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-violet-primary hover:text-violet-700 transition-colors duration-200 text-sm inline-flex items-center"
                >
                  Profil LinkedIn de Chérif
                  <LinkedInIcon />
                </a>
                <a 
                  href="https://linkedin.com/in/yann-habib-kone" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-violet-primary hover:text-violet-700 transition-colors duration-200 text-sm inline-flex items-center"
                >
                  Profil LinkedIn de Yann-habib
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;